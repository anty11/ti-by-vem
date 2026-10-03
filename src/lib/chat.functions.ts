import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import {
  budgetOptions,
  emptyProfile,
  isBudget,
  isPace,
  paceOptions,
  type TripProfile,
} from "@/lib/agent/profile";
import { CHAT_LIMITS } from "@/lib/agent/limits";

export type ChatHistoryMessage = { id: string; role: "user" | "assistant"; content: string };

export type TripRoomState = {
  profile: TripProfile;
  hasProfile: boolean;
  messages: ChatHistoryMessage[];
  usage: { used: number; limit: number };
};

const dateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/)
  .nullable();

const profileSchema = z.object({
  slug: z.string().min(1).max(80),
  travelStart: dateSchema,
  travelEnd: dateSchema,
  party: z.string().max(200).nullable(),
  pace: z.enum(paceOptions).nullable(),
  budget: z.enum(budgetOptions).nullable(),
  notes: z.string().max(1500).nullable(),
});

/** Everything the trip room needs on open: the customer's profile, history and usage. Runs under RLS. */
export const getTripRoom = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ slug: z.string().min(1).max(80) }).parse(input))
  .handler(async ({ data, context }): Promise<TripRoomState> => {
    const [{ data: profileRow }, { data: thread }] = await Promise.all([
      context.supabase
        .from("trip_profiles")
        .select("travel_start, travel_end, party, pace, budget, notes")
        .eq("user_id", context.userId)
        .eq("itinerary_slug", data.slug)
        .maybeSingle(),
      context.supabase
        .from("chat_threads")
        .select("id, user_message_count")
        .eq("user_id", context.userId)
        .eq("itinerary_slug", data.slug)
        .maybeSingle(),
    ]);

    let messages: ChatHistoryMessage[] = [];
    if (thread) {
      const { data: rows } = await context.supabase
        .from("chat_messages")
        .select("id, role, content")
        .eq("thread_id", thread.id)
        .order("created_at", { ascending: true })
        .limit(CHAT_LIMITS.historyShown);
      messages = (rows ?? []).map((row) => ({
        id: row.id,
        role: row.role === "assistant" ? "assistant" : "user",
        content: row.content,
      }));
    }

    const profile: TripProfile = profileRow
      ? {
          travelStart: profileRow.travel_start,
          travelEnd: profileRow.travel_end,
          party: profileRow.party,
          pace: isPace(profileRow.pace) ? profileRow.pace : null,
          budget: isBudget(profileRow.budget) ? profileRow.budget : null,
          notes: profileRow.notes,
        }
      : emptyProfile;

    return {
      profile,
      hasProfile: Boolean(profileRow),
      messages,
      usage: { used: thread?.user_message_count ?? 0, limit: CHAT_LIMITS.perTrip },
    };
  });

/** Upsert the customer's own trip profile. Runs under RLS, so it can only touch their row. */
export const saveTripProfile = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => profileSchema.parse(input))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase.from("trip_profiles").upsert(
      {
        user_id: context.userId,
        itinerary_slug: data.slug,
        travel_start: data.travelStart,
        travel_end: data.travelEnd,
        party: data.party?.trim() || null,
        pace: data.pace,
        budget: data.budget,
        notes: data.notes?.trim() || null,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id,itinerary_slug" },
    );
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });
