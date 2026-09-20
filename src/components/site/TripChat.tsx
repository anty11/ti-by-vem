import { useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { tripCopy } from "@/lib/access-copy";
import type { Lang } from "@/lib/i18n";

type Message = { role: "user" | "assistant"; content: string };

export function TripChat({ slug, lang }: { slug: string; lang: Lang }) {
  const t = tripCopy[lang];
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  async function send(event: React.FormEvent) {
    event.preventDefault();
    const question = input.trim();
    if (!question || busy) return;

    const next = [...messages, { role: "user" as const, content: question }];
    setMessages(next);
    setInput("");
    setBusy(true);
    setError(null);

    try {
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;
      if (!token) throw new Error("no session");

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ slug, lang, messages: next }),
      });

      if (!response.ok || !response.body) {
        setError((await response.text().catch(() => "")) || t.error);
        setBusy(false);
        return;
      }

      setMessages([...next, { role: "assistant", content: "" }]);
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        answer += decoder.decode(value, { stream: true });
        setMessages([...next, { role: "assistant", content: answer }]);
        endRef.current?.scrollIntoView({ block: "end" });
      }
    } catch {
      setError(t.error);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="glass rounded-3xl p-6 lg:p-8">
      <h2 className="font-display text-2xl text-ink">{t.chatTitle}</h2>
      <p className="mt-2 text-sm text-soft">{t.chatIntro}</p>

      <div className="mt-6 space-y-4 max-h-[26rem] overflow-y-auto pr-1">
        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message.role === "user"
                ? "ml-auto max-w-[85%] rounded-2xl bg-ink px-4 py-3 text-sm text-onink"
                : "max-w-[90%] rounded-2xl glass-soft px-4 py-3 text-sm text-ink whitespace-pre-wrap leading-relaxed"
            }
          >
            {message.content || (busy ? t.thinking : "")}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {error ? <p className="mt-4 text-sm text-terracotta">{error}</p> : null}

      <form onSubmit={send} className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={t.placeholder}
          className="flex-1 rounded-full border border-border bg-transparent px-5 py-3 text-sm text-ink outline-none focus:border-royal"
        />
        <button
          type="submit"
          disabled={busy}
          className="rounded-full bg-royal px-6 py-3 text-sm font-semibold text-onink transition hover:bg-royal/90 disabled:opacity-50"
        >
          {busy ? t.thinking : t.send}
        </button>
      </form>
    </div>
  );
}
