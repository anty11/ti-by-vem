import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";
import { buildPackageContext, findItinerary } from "@/lib/agent/context";
import { CHAT_LIMITS } from "@/lib/agent/limits";
import { isBudget, isPace, profileToPrompt, type TripProfile } from "@/lib/agent/profile";
import { buildSystemPrompt } from "@/lib/agent/prompt";
import type { Lang } from "@/lib/i18n";

type ChatMessage = { role: "user" | "assistant"; content: string };

const limitCopy: Record<Lang, { trip: string; day: string }> = {
  en: {
    trip: "You have used all the agent messages included with this trip. Write to V & eM if you need more.",
    day: "That is a lot of questions for one day — the agent is taking a break. Come back tomorrow.",
  },
  sk: {
    trip: "Vyčerpali ste všetky správy agenta zahrnuté v tejto ceste. Ak potrebujete viac, napíšte V & eM.",
    day: "To je na jeden deň veľa otázok — agent si dáva pauzu. Vráťte sa zajtra.",
  },
};

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const authHeader = request.headers.get("authorization") ?? "";
        const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
        if (!token) return new Response("Unauthorized", { status: 401 });

        const supabaseUrl = process.env["SUPABASE_URL"];
        const supabaseKey = process.env["SUPABASE_PUBLISHABLE_KEY"];
        const lovableApiKey = process.env["LOVABLE_API_KEY"];
        if (!supabaseUrl || !supabaseKey || !lovableApiKey) {
          return new Response("Server not configured", { status: 500 });
        }

        const supabase = createClient(supabaseUrl, supabaseKey, {
          auth: { persistSession: false, autoRefreshToken: false },
        });
        const { data: claims, error: claimsError } = await supabase.auth.getClaims(token);
        const userId = claims?.claims?.sub;
        if (claimsError || !userId) return new Response("Unauthorized", { status: 401 });

        const body = (await request.json()) as {
          slug?: string;
          lang?: Lang;
          message?: string;
        };
        const slug = body.slug ?? "";
        const lang: Lang = body.lang === "sk" ? "sk" : "en";
        const question = typeof body.message === "string" ? body.message.trim() : "";
        const itinerary = findItinerary(slug);
        if (!itinerary || !question || question.length > CHAT_LIMITS.messageChars)
          return new Response("Bad request", { status: 400 });

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        let { data: access } = await supabaseAdmin
          .from("access_codes")
          .select("id, tier")
          .eq("redeemed_by", userId)
          .eq("itinerary_slug", slug)
          .limit(1)
          .maybeSingle();
        if (!access) {
          // Admins open any trip without redeeming a code (see listMyAccess), so let them chat too.
          const { data: isAdmin } = await supabaseAdmin.rpc("has_role", {
            _user_id: userId,
            _role: "admin",
          });
          if (isAdmin) {
            const { data: anyCode } = await supabaseAdmin
              .from("access_codes")
              .select("id, tier")
              .eq("itinerary_slug", slug)
              .order("tier", { ascending: false })
              .limit(1)
              .maybeSingle();
            access = anyCode ?? { id: "admin", tier: "us" };
          }
        }
        if (!access) return new Response("Forbidden", { status: 403 });

        // One thread per customer and trip; created on first message.
        // If the memory tables are not there yet (migration not applied), fall back to a
        // stateless chat: no history, no stored messages, no budget.
        const { data: thread, error: threadError } = await supabaseAdmin
          .from("chat_threads")
          .upsert(
            { user_id: userId, itinerary_slug: slug, lang },
            { onConflict: "user_id,itinerary_slug", ignoreDuplicates: false },
          )
          .select("id, user_message_count")
          .single();
        if (threadError || !thread) {
          console.error("chat thread error, continuing without memory", threadError);
        }

        if (thread) {
          if (thread.user_message_count >= CHAT_LIMITS.perTrip) {
            return new Response(limitCopy[lang].trip, { status: 429 });
          }
          const since = new Date(Date.now() - 86_400_000).toISOString();
          const { count: todayCount } = await supabaseAdmin
            .from("chat_messages")
            .select("id", { count: "exact", head: true })
            .eq("user_id", userId)
            .eq("role", "user")
            .gte("created_at", since);
          if ((todayCount ?? 0) >= CHAT_LIMITS.perDay) {
            return new Response(limitCopy[lang].day, { status: 429 });
          }
        }

        const [{ data: historyRows }, { data: profileRow }] = await Promise.all([
          thread
            ? supabaseAdmin
                .from("chat_messages")
                .select("role, content")
                .eq("thread_id", thread.id)
                .order("created_at", { ascending: false })
                .limit(CHAT_LIMITS.historyForModel)
            : Promise.resolve({ data: [] as { role: string; content: string }[] }),
          supabaseAdmin
            .from("trip_profiles")
            .select("travel_start, travel_end, party, pace, budget, notes")
            .eq("user_id", userId)
            .eq("itinerary_slug", slug)
            .maybeSingle(),
        ]);

        const history: ChatMessage[] = (historyRows ?? []).reverse().map((row) => ({
          role: row.role === "assistant" ? "assistant" : "user",
          content: row.content,
        }));
        const messages: ChatMessage[] = [...history, { role: "user", content: question }];

        const profile: TripProfile = {
          travelStart: profileRow?.travel_start ?? null,
          travelEnd: profileRow?.travel_end ?? null,
          party: profileRow?.party ?? null,
          pace: isPace(profileRow?.pace) ? profileRow.pace : null,
          budget: isBudget(profileRow?.budget) ? profileRow.budget : null,
          notes: profileRow?.notes ?? null,
        };

        const pkg = buildPackageContext(itinerary, lang, access.tier);
        const profileText = profileToPrompt(profile, itinerary.days);
        const system = buildSystemPrompt({
          lang,
          pkg,
          ...(profileText ? { profile: profileText } : {}),
        });

        // Store the question before calling the model so the budget is charged even if the model fails mid-way.
        if (thread) {
          const { error: insertError } = await supabaseAdmin.from("chat_messages").insert({
            thread_id: thread.id,
            user_id: userId,
            role: "user",
            content: question,
          });
          if (insertError) console.error("chat message insert error", insertError);
          await supabaseAdmin
            .from("chat_threads")
            .update({
              user_message_count: thread.user_message_count + 1,
              lang,
              updated_at: new Date().toISOString(),
            })
            .eq("id", thread.id);
        }

        const saveAnswer = async (answer: string) => {
          if (!thread || !answer.trim()) return;
          const { error } = await supabaseAdmin.from("chat_messages").insert({
            thread_id: thread.id,
            user_id: userId,
            role: "assistant",
            content: answer,
          });
          if (error) console.error("chat answer insert error", error);
        };

        const upstream = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Lovable-API-Key": lovableApiKey,
            "X-Lovable-AIG-SDK": "fetch",
          },
          body: JSON.stringify({
            model: "openai/gpt-6-astra",
            instructions: system,
            input: messages.map((m) => ({
              role: m.role,
              content: [
                { type: m.role === "assistant" ? "output_text" : "input_text", text: m.content },
              ],
            })),
            stream: true,
            reasoning: { effort: "low", summary: "auto" },
          }),
        });

        if (!upstream.ok || !upstream.body) {
          const detail = await upstream.text().catch(() => "");
          console.error("AI gateway error", upstream.status, detail);
          const message =
            upstream.status === 429
              ? "Too many questions right now. Try again in a minute."
              : upstream.status === 402
                ? "The AI budget for this app ran out. Please contact us."
                : "The chatbot is unavailable right now.";
          return new Response(message, { status: upstream.status === 429 ? 429 : 503 });
        }

        const decoder = new TextDecoder();
        const encoder = new TextEncoder();
        const reader = upstream.body.getReader();
        let buffer = "";
        let answer = "";
        let saved = false;
        const finish = async () => {
          if (saved) return;
          saved = true;
          await saveAnswer(answer);
        };

        const stream = new ReadableStream<Uint8Array>({
          async pull(controller) {
            const { done, value } = await reader.read();
            if (done) {
              controller.close();
              await finish();
              return;
            }
            buffer += decoder.decode(value, { stream: true });
            const chunks = buffer.split("\n\n");
            buffer = chunks.pop() ?? "";
            for (const chunk of chunks) {
              const line = chunk.split("\n").find((l) => l.startsWith("data:"));
              if (!line) continue;
              const payload = line.slice(5).trim();
              if (!payload || payload === "[DONE]") continue;
              try {
                const event = JSON.parse(payload) as { type?: string; delta?: string };
                if (event.type === "response.output_text.delta" && event.delta) {
                  answer += event.delta;
                  controller.enqueue(encoder.encode(event.delta));
                }
              } catch {
                // ignore malformed keepalive chunks
              }
            }
          },
          async cancel(reason) {
            // The customer navigated away: keep whatever the model had said so far.
            await finish();
            return reader.cancel(reason);
          },
        });

        return new Response(stream, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-store",
          },
        });
      },
    },
  },
});
