import { useEffect, useState } from "react";
import { Check, ChevronLeft, ChevronRight, Navigation } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { dayStopDate, dayStopText, type RouteMap } from "@/lib/route-maps";

export function OnTripMode({ slug, data, lang }: { slug: string; data: RouteMap; lang: Lang }) {
  const sk = lang === "sk";
  const key = `vem-trip-${slug}`;
  const [active, setActive] = useState(data.days[0]?.day ?? 1);
  const [done, setDone] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(key) ?? "{}");
      setDone(saved.done ?? {});
      if (saved.active) setActive(saved.active);
    } catch {}
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ done, active }));
  }, [key, done, active]);

  const index = Math.max(0, data.days.findIndex((d) => d.day === active));
  const stop = data.days[index];
  if (!stop) return null;
  const text = dayStopText(stop, lang);
  const total = data.days.reduce((n, d) => n + d.notes.length, 0);
  const checked = Object.values(done).filter(Boolean).length;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(text.place)}`;

  return (
    <div className="glass rounded-3xl p-6 lg:p-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-royal">
          {sk ? "Dnes na trase" : "Today on the route"}
        </span>
        <span className="text-xs text-soft">
          {checked}/{total} {sk ? "odškrtnuté" : "ticked off"}
        </span>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-border">
        <div className="h-full bg-terracotta transition-all" style={{ width: `${total ? (checked / total) * 100 : 0}%` }} />
      </div>

      <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
        {data.days.map((d) => {
          const all = d.notes.every((_, i) => done[`${d.day}-${i}`]);
          return (
            <button
              key={d.day}
              type="button"
              onClick={() => setActive(d.day)}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition ${
                d.day === active ? "border-ink bg-ink text-onink" : "border-border text-soft hover:text-ink"
              }`}
            >
              {all ? "✓ " : ""}
              {dayStopDate(d, lang)}
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        <p className="text-sm font-semibold text-terracotta">{text.place}</p>
        <h2 className="mt-1 font-display text-3xl leading-tight text-ink">{text.title}</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-soft">{text.text}</p>
      </div>

      <ul className="mt-6 space-y-2">
        {text.notes.map((note, i) => {
          const id = `${stop.day}-${i}`;
          const on = !!done[id];
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => setDone({ ...done, [id]: !on })}
                className="glass-soft flex w-full items-center gap-3 rounded-2xl p-4 text-left text-sm transition hover:border-royal"
              >
                <span
                  className={`grid size-6 shrink-0 place-items-center rounded-full border ${
                    on ? "border-terracotta bg-terracotta text-onink" : "border-border"
                  }`}
                >
                  {on ? <Check className="size-3.5" /> : null}
                </span>
                <span className={on ? "text-soft line-through" : "text-ink"}>{note}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-royal px-5 py-2.5 text-sm font-semibold text-onink transition hover:bg-royal/90"
        >
          <Navigation className="size-4" /> {sk ? "Navigovať" : "Navigate there"}
        </a>
        <div className="flex gap-2">
          <button
            type="button"
            disabled={index === 0}
            onClick={() => setActive(data.days[index - 1]!.day)}
            aria-label={sk ? "Predchádzajúci deň" : "Previous day"}
            className="grid size-10 place-items-center rounded-full border border-border text-ink disabled:opacity-30"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            disabled={index === data.days.length - 1}
            onClick={() => setActive(data.days[index + 1]!.day)}
            aria-label={sk ? "Ďalší deň" : "Next day"}
            className="grid size-10 place-items-center rounded-full border border-border text-ink disabled:opacity-30"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
      <p className="mt-4 text-xs text-soft">
        {sk ? "Váš postup sa ukladá v tomto zariadení." : "Your progress is saved on this device."}
      </p>
    </div>
  );
}
