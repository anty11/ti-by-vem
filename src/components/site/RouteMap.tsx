import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import { dayStopDate, dayStopText, type RouteMap as RouteMapData } from "@/lib/route-maps";

type Node = { x: number; y: number; place: string; days: number[]; peak: boolean };

function curve(a: Node, b: Node) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  // bow the line slightly perpendicular to the segment
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const k = 0.14;
  return `M ${a.x} ${a.y} Q ${mx - dy * k} ${my + dx * k} ${b.x} ${b.y}`;
}

export function RouteMap({ data, lang }: { data: RouteMapData; lang: Lang }) {
  const [active, setActive] = useState(data.days[0]?.day ?? 1);
  const current = data.days.find((d) => d.day === active) ?? data.days[0];

  // collapse consecutive days that share a place into one map node
  const nodes: Node[] = [];
  for (const d of data.days) {
    const text = dayStopText(d, lang);
    const last = nodes[nodes.length - 1];
    if (last && last.x === d.x && last.y === d.y) {
      last.days.push(d.day);
      last.peak = last.peak || Boolean(d.peak);
    } else {
      nodes.push({ x: d.x, y: d.y, place: text.place, days: [d.day], peak: Boolean(d.peak) });
    }
  }

  const activeNodeIndex = nodes.findIndex((n) => n.days.includes(active));
  const t = current ? dayStopText(current, lang) : null;

  return (
    <section className="mt-14">
      <h2 className="font-display text-3xl text-ink">{lang === "sk" ? data.titleSk : data.title}</h2>
      <p className="mt-3 max-w-2xl text-soft leading-relaxed">{lang === "sk" ? data.leadSk : data.lead}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {data.days.map((d) => {
          const on = d.day === active;
          return (
            <button
              key={d.day}
              type="button"
              onClick={() => setActive(d.day)}
              aria-pressed={on}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                on
                  ? "bg-ink text-onink"
                  : d.peak
                    ? "border border-gold bg-gold/15 text-ink hover:bg-gold/30"
                    : "glass-soft text-soft hover:text-ink"
              }`}
            >
              {lang === "sk" ? `${d.day}. deň` : `Day ${d.day}`} · {dayStopDate(d, lang)}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <div className="glass rounded-3xl p-4 sm:p-6">
          <svg viewBox="0 0 700 540" className="w-full h-auto" role="img" aria-label={lang === "sk" ? "Mapa trasy" : "Route map"}>
            <defs>
              <radialGradient id="rm-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--royal)" stopOpacity="0.18" />
                <stop offset="100%" stopColor="var(--royal)" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* soft alpine backdrop */}
            <ellipse cx="420" cy="320" rx="300" ry="210" fill="url(#rm-glow)" />
            <path
              d="M40 470 L150 330 L215 415 L300 275 L400 400 L470 320 L560 430 L660 350 L680 500 L40 500 Z"
              fill="var(--sage)"
              opacity="0.13"
            />
            <path d="M60 210 L170 270 L240 235 L330 300 L430 250 L540 300 L660 240" fill="none" stroke="var(--lilac)" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="6 8" />

            {/* route */}
            {nodes.slice(0, -1).map((n, i) => {
              const next = nodes[i + 1]!;
              const done = i < activeNodeIndex;
              const isNow = i === activeNodeIndex - 1;
              return (
                <path
                  key={`seg-${i}`}
                  d={curve(n, next)}
                  fill="none"
                  stroke={done || isNow ? "var(--royal)" : "var(--ink)"}
                  strokeOpacity={done || isNow ? 0.85 : 0.18}
                  strokeWidth={isNow ? 5 : 3}
                  strokeLinecap="round"
                  strokeDasharray={done || isNow ? undefined : "8 10"}
                />
              );
            })}

            {/* stops */}
            {nodes.map((n, i) => {
              const on = i === activeNodeIndex;
              return (
                <g key={n.place + i} className="cursor-pointer" onClick={() => setActive(n.days[0]!)}>
                  {on && <circle cx={n.x} cy={n.y} r="010" fill="var(--royal)" opacity="0.2" />}
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={on ? 11 : 7}
                    fill={n.peak ? "var(--gold)" : on ? "var(--royal)" : "var(--surface, white)"}
                    stroke={on ? "var(--ink)" : "var(--royal)"}
                    strokeWidth={on ? 3 : 2}
                  />
                  <text
                    x={n.x + (n.x > 500 ? -16 : 16)}
                    y={n.y + 5}
                    textAnchor={n.x > 500 ? "end" : "start"}
                    className="font-semibold"
                    fontSize="15"
                    fill="var(--ink)"
                    opacity={on ? 1 : 0.65}
                  >
                    {n.place}
                  </text>
                  <text
                    x={n.x + (n.x > 500 ? -16 : 16)}
                    y={n.y + 22}
                    textAnchor={n.x > 500 ? "end" : "start"}
                    fontSize="11"
                    fill="var(--ink)"
                    opacity="0.45"
                  >
                    {lang === "sk" ? `${n.days.join(", ")}. deň` : `Day ${n.days.join(", ")}`}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {current && t && (
          <div className="glass rounded-3xl p-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-royal">
                {lang === "sk" ? `${current.day}. deň` : `Day ${current.day}`} · {dayStopDate(current, lang)}
              </span>
              {current.peak && (
                <span className="rounded-full bg-gold px-3 py-1 text-[11px] font-semibold text-ink">
                  {lang === "sk" ? "Vrchol cesty" : "Peak of the trip"}
                </span>
              )}
            </div>
            <h3 className="mt-2 font-display text-3xl text-ink">{t.title}</h3>
            <p className="mt-1 text-sm font-semibold text-terracotta">{t.place}</p>
            <p className="mt-4 text-soft leading-relaxed">{t.text}</p>
            <ul className="mt-5 space-y-2">
              {t.notes.map((n) => (
                <li key={n} className="flex gap-3 text-sm text-soft">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-royal" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
