import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";
import { itineraries, itineraryText } from "@/lib/content";
import type { Lang } from "@/lib/i18n";

type ChatMessage = { role: "user" | "assistant"; content: string };

function tripBrief(slug: string, lang: Lang) {
  const item = itineraries.find((i) => i.slug === slug);
  if (!item) return null;
  const text = itineraryText(item, lang);
  return [
    `Trip: ${text.title} (${text.country})`,
    `Length: ${item.days} days`,
    `Ground covered: ${text.stops}`,
    `Budget estimate: ${item.budget}`,
    `Summary: ${text.blurb}`,
    `Key moves:\n- ${text.highlights.join("\n- ")}`,
  ].join("\n");
}

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
          messages?: ChatMessage[];
        };
        const slug = body.slug ?? "";
        const lang: Lang = body.lang === "sk" ? "sk" : "en";
        const messages = Array.isArray(body.messages) ? body.messages.slice(-20) : [];
        const brief = tripBrief(slug, lang);
        if (!brief || messages.length === 0) return new Response("Bad request", { status: 400 });

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { data: access } = await supabaseAdmin
          .from("access_codes")
          .select("id")
          .eq("redeemed_by", userId)
          .eq("itinerary_slug", slug)
          .limit(1)
          .maybeSingle();
        if (!access) return new Response("Forbidden", { status: 403 });

        const system = [
          "You are the trip chatbot of 'travel intelligence by VeM', a small European travel studio run by two friends, V and eM.",
          "Voice: warm, personal, practical, never generic. Short paragraphs. Concrete numbers where you can.",
          "You know the customer's purchased itinerary below. Help them reshape it (shorter, longer, different season, different budget), and also answer broader travel questions about the destination: weather, packing, food, transport, safety, local habits.",
          "Say clearly when something is your estimate rather than a checked detail, and suggest writing to V & eM for personal decisions.",
          lang === "sk" ? "Answer in Slovak." : "Answer in English.",
          "",
          "THE PURCHASED ITINERARY:",
          brief,
        ].join("\n");

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

        const stream = new ReadableStream<Uint8Array>({
          async pull(controller) {
            const { done, value } = await reader.read();
            if (done) {
              controller.close();
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
                  controller.enqueue(encoder.encode(event.delta));
                }
              } catch {
                // ignore malformed keepalive chunks
              }
            }
          },
          cancel(reason) {
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
