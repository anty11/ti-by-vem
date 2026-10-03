import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export type AccessRow = {
  slug: string;
  tier: string;
  code: string;
  redeemedAt: string | null;
};

export type CodeRow = AccessRow & {
  note: string | null;
  createdAt: string;
  redeemed: boolean;
};

function randomCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const block = () =>
    Array.from({ length: 4 }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join("");
  return `VEM-${block()}-${block()}`;
}

export const listMyAccess = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    const query = context.supabase
      .from("access_codes")
      .select("itinerary_slug, tier, code, redeemed_at")
      .order("redeemed_at", { ascending: false });
    const { data, error } = isAdmin ? await query : await query.eq("redeemed_by", context.userId);
    if (error) throw new Error(error.message);
    return (data ?? []).map((row) => ({
      slug: row.itinerary_slug,
      tier: row.tier,
      code: row.code,
      redeemedAt: row.redeemed_at,
    })) satisfies AccessRow[];
  });

export const redeemCode = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ code: z.string().min(4).max(40) }).parse(input))
  .handler(async ({ data, context }) => {
    const code = data.code.trim().toUpperCase();
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: row, error } = await supabaseAdmin
      .from("access_codes")
      .select("id, itinerary_slug, tier, redeemed_by")
      .eq("code", code)
      .maybeSingle();

    if (error) throw new Error(error.message);
    if (!row) return { status: "unknown" as const };

    // Admin codes never expire: admins can open any trip without consuming the code.
    const { data: isAdmin } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    if (isAdmin) return { status: "ok" as const, slug: row.itinerary_slug, tier: row.tier };

    if (row.redeemed_by && row.redeemed_by !== context.userId) return { status: "used" as const };

    if (!row.redeemed_by) {
      const { error: updateError } = await supabaseAdmin
        .from("access_codes")
        .update({ redeemed_by: context.userId, redeemed_at: new Date().toISOString() })
        .eq("id", row.id)
        .is("redeemed_by", null);
      if (updateError) throw new Error(updateError.message);
    }

    return { status: "ok" as const, slug: row.itinerary_slug, tier: row.tier };
  });

export const amIAdmin = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    if (error) return false;
    return Boolean(data);
  });

export const listAllCodes = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("access_codes")
      .select("code, itinerary_slug, tier, note, created_at, redeemed_at, redeemed_by")
      .order("created_at", { ascending: false })
      .limit(200);
    if (error) throw new Error(error.message);
    return (data ?? []).map((row) => ({
      slug: row.itinerary_slug,
      tier: row.tier,
      code: row.code,
      note: row.note,
      createdAt: row.created_at,
      redeemedAt: row.redeemed_at,
      redeemed: Boolean(row.redeemed_by),
    })) satisfies CodeRow[];
  });

export const createCodes = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z
      .object({
        slug: z.string().min(1),
        tier: z.enum(["chat", "us"]),
        count: z.number().int().min(1).max(20),
        note: z.string().max(120).optional(),
        sendTo: z.string().email().max(255).optional(),
      })
      .parse(input),
  )
  .handler(async ({ data, context }) => {
    const rows = Array.from({ length: data.count }, () => ({
      code: randomCode(),
      itinerary_slug: data.slug,
      tier: data.tier,
      note: data.note ?? null,
    }));

    const { data: inserted, error } = await context.supabase
      .from("access_codes")
      .insert(rows)
      .select("code");
    if (error) throw new Error(error.message);
    const codes = (inserted ?? []).map((row) => row.code);

    if (data.sendTo && codes.length > 0) {
      const { itineraries } = await import("@/lib/content");
      const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
      const itinerary = itineraries.find((item) => item.slug === data.slug)?.title ?? data.slug;
      await sendTemplateEmail("access-codes", data.sendTo, {
        templateData: { itinerary, codes },
        idempotencyKey: `access-codes-${codes[0]}`,
        replyTo: "hello@travelintelligencebyvem.com",
      });
    }
    return codes;
  });
