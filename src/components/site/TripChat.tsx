import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { CHAT_LIMITS } from "@/lib/agent/limits";
import { tripCopy } from "@/lib/access-copy";
import type { ChatHistoryMessage } from "@/lib/chat.functions";
import type { Lang } from "@/lib/i18n";

type Message = { role: "user" | "assistant"; content: string };

type Props = {
  slug: string;
  lang: Lang;
  history: ChatHistoryMessage[];
  usage: { used: number; limit: number };
  onUsage: (used: number) => void;
};

export function TripChat({ slug, lang, history, usage, onUsage }: Props) {
  const t = tripCopy[lang];
  const [messages, setMessages] = useState<Message[]>(history);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages(history);
  }, [history]);

  useEffect(() => {
    if (messages.length) endRef.current?.scrollIntoView({ block: "end" });
  }, [messages.length]);

  const exhausted = usage.used >= usage.limit;
  const nearLimit = !exhausted && usage.used >= usage.limit * CHAT_LIMITS.warnAt;
  const left = Math.max(usage.limit - usage.used, 0);

  async function send(event: React.FormEvent) {
    event.preventDefault();
    const question = input.trim();
    if (!question || busy || exhausted) return;

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
        body: JSON.stringify({ slug, lang, message: question }),
      });

      if (!response.ok || !response.body) {
        setError((await response.text().catch(() => "")) || t.error);
        setMessages(messages);
        setInput(question);
        setBusy(false);
        return;
      }

      onUsage(usage.used + 1);
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
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-display text-2xl text-ink">{t.chatTitle}</h2>
        <span className={`text-xs ${nearLimit || exhausted ? "text-terracotta" : "text-soft"}`}>
          {left} {t.messagesLeft}
        </span>
      </div>
      <p className="mt-2 text-sm text-soft">{t.chatIntro}</p>

      <div className="mt-6 max-h-[26rem] space-y-4 overflow-y-auto pr-1">
        {messages.length === 0 ? <p className="text-sm text-soft">{t.chatEmpty}</p> : null}
        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message.role === "user"
                ? "ml-auto max-w-[85%] rounded-2xl bg-ink px-4 py-3 text-sm text-onink"
                : "glass-soft max-w-[90%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed text-ink"
            }
          >
            {message.content || (busy ? t.thinking : "")}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {error ? <p className="mt-4 text-sm text-terracotta">{error}</p> : null}
      {exhausted ? <p className="mt-4 text-sm text-terracotta">{t.chatExhausted}</p> : null}

      <form onSubmit={send} className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={t.placeholder}
          maxLength={CHAT_LIMITS.messageChars}
          disabled={exhausted}
          className="flex-1 rounded-full border border-border bg-transparent px-5 py-3 text-sm text-ink outline-none focus:border-royal disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={busy || exhausted}
          className="rounded-full bg-royal px-6 py-3 text-sm font-semibold text-onink transition hover:bg-royal/90 disabled:opacity-50"
        >
          {busy ? t.thinking : t.send}
        </button>
      </form>
    </div>
  );
}
