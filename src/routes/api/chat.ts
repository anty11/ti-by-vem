import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";
import { buildPackageContext, findItinerary } from "@/lib/agent/context";
import { buildSystemPrompt } from "@/lib/agent/prompt";
import type { Lang } from "@/lib/i18n";

type ChatMessage = { role: "user" | "assistant"; content: string };

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
        const itinerary = findItinerary(slug);
        if (!itinerary || messages.length === 0)
          return new Response("Bad request", { status: 400 });

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { data: access } = await supabaseAdmin
          .from("access_codes")
          .select("id, tier")
          .eq("redeemed_by", userId)
          .eq("itinerary_slug", slug)
          .limit(1)
          .maybeSingle();
        if (!access) return new Response("Forbidden", { status: 403 });

        const pkg = buildPackageContext(itinerary, lang, access.tier);
        const system = buildSystemPrompt({ lang, pkg });

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
