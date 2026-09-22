import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
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

function teaser(text: string) {
  const sentences = text.split(/(?<=[.!?])\s/);
  let out = "";
  for (const s of sentences) {
    if (out && out.length >= 120) break;
    out = out ? `${out} ${s}` : s;
  }
  return out.length > 220 ? out.slice(0, 217).trimEnd() + "…" : out;
}

export function RouteMap({ data, lang }: { data: RouteMapData; lang: Lang }) {
  const [active, setActive] = useState(data.days[0]?.day ?? 1);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const current = data.days.find((d) => d.day === active) ?? data.days[0];
  const activeMapArea = current?.mapArea;
  const visibleDays = activeMapArea ? data.days.filter((day) => day.mapArea === activeMapArea) : data.days;
  const viewBox = activeMapArea === "new-york" ? "430 250 270 280" : "0 0 700 540";

  useEffect(() => {
    if (!isPlaying || data.days.length < 2) return;

    const timer = window.setInterval(() => {
      setActive((day) => {
        const index = data.days.findIndex((item) => item.day === day);
        const next = data.days[index + 1];
        if (!next) {
          setIsPlaying(false);
          return day;
        }
        return next.day;
      });
    }, 2200);

    return () => window.clearInterval(timer);
  }, [data.days, isPlaying]);

  // collapse consecutive days that share a place into one map node
  const nodes: Node[] = [];
  for (const d of visibleDays) {
    const text = dayStopText(d, lang);
    const last = nodes[nodes.length - 1];
    if (last && last.x === d.x && last.y === d.y) {
      last.days.push(d.day);
      last.peak = last.peak || Boolean(d.peak);
    } else {
      const label = (text.place.split("→").pop() ?? text.place).trim();
      nodes.push({ x: d.x, y: d.y, place: label, days: [d.day], peak: Boolean(d.peak) });
    }
  }

  const activeNodeIndex = nodes.findIndex((n) => n.days.includes(active));
  const t = current ? dayStopText(current, lang) : null;
  const activeDayIndex = data.days.findIndex((d) => d.day === active);
  const previous = activeDayIndex > 0 ? data.days[activeDayIndex - 1] : undefined;
  const next = activeDayIndex >= 0 ? data.days[activeDayIndex + 1] : undefined;

  function chooseDay(day: number) {
    setActive(day);
    setIsPlaying(false);
  }

  function toggleJourney() {
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }
    if (!next) setActive(data.days[0]?.day ?? 1);
    setIsPlaying(true);
  }

  return (
    <section className="mt-14">
      <h2 className="font-display text-3xl text-ink">{lang === "sk" ? data.titleSk : data.title}</h2>
      <p className="mt-3 max-w-2xl text-soft leading-relaxed">{lang === "sk" ? data.leadSk : data.lead}</p>

      <div className="mt-6 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
        <div className="flex min-w-0 gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {data.days.map((d) => {
          const on = d.day === active;
          return (
            <Button
              key={d.day}
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => chooseDay(d.day)}
              aria-pressed={on}
              className={`shrink-0 rounded-full px-4 transition ${
                on
                  ? "bg-ink text-onink"
                  : d.peak
                    ? "border border-gold bg-gold/15 text-ink hover:bg-gold/30"
                    : "glass-soft text-soft hover:text-ink"
              }`}
            >
              {lang === "sk" ? `${d.day}. deň` : `Day ${d.day}`} · {dayStopDate(d, lang)}
            </Button>
          );
        })}
        </div>
        <Button
          type="button"
          variant={isPlaying ? "outline" : "default"}
          size="sm"
          onClick={toggleJourney}
          className="shrink-0"
          aria-label={lang === "sk" ? (isPlaying ? "Zastaviť cestu" : "Prehrať cestu") : isPlaying ? "Pause the journey" : "Play the journey"}
        >
          {isPlaying ? <Pause /> : <Play />}
          <span className="hidden sm:inline">{lang === "sk" ? (isPlaying ? "Zastaviť" : "Prehrať cestu") : isPlaying ? "Pause" : "Play the journey"}</span>
        </Button>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <div className="glass rounded-3xl p-4 sm:p-6">
          <svg viewBox={viewBox} className="w-full h-auto" role="img" aria-label={lang === "sk" ? "Mapa trasy" : "Route map"}>
            <defs>
              <radialGradient id="rm-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--royal)" stopOpacity="0.18" />
                <stop offset="100%" stopColor="var(--royal)" stopOpacity="0" />
              </radialGradient>
            </defs>

            {activeMapArea === "new-york" ? (
              <g aria-hidden="true">
                <rect x="450" y="275" width="210" height="235" fill="var(--royal)" opacity="0.035" />
                {[474, 498, 522, 546, 570, 594, 618, 642].map((x) => (
                  <path key={`avenue-${x}`} d={`M ${x} 286 L ${x - 10} 462`} stroke="var(--ink)" strokeOpacity="0.09" strokeWidth="1" />
                ))}
                {[306, 330, 354, 378, 402, 426, 450].map((y) => (
                  <path key={`street-${y}`} d={`M 466 ${y} L 630 ${y + 6}`} stroke="var(--ink)" strokeOpacity="0.09" strokeWidth="1" />
                ))}
                <path d="M605 300 C630 350 616 405 650 452" fill="none" stroke="var(--royal)" strokeOpacity="0.14" strokeWidth="9" />
                <text x="466" y="298" fontSize="9" fontWeight="600" fill="var(--royal)" letterSpacing="0">
                  {lang === "sk" ? "NEW YORK · MAPA MESTA" : "NEW YORK · CITY MAP"}
                </text>
              </g>
            ) : (
              <>
                <ellipse cx="420" cy="320" rx="300" ry="210" fill="url(#rm-glow)" />
                <path
                  d="M40 470 L150 330 L215 415 L300 275 L400 400 L470 320 L560 430 L660 350 L680 500 L40 500 Z"
                  fill="var(--sage)"
                  opacity="0.13"
                />
                <path d="M60 210 L170 270 L240 235 L330 300 L430 250 L540 300 L660 240" fill="none" stroke="var(--lilac)" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="6 8" />
              </>
            )}

            {/* route */}
            {nodes.slice(0, -1).map((n, i) => {
              const nextNode = nodes[i + 1];
              if (!nextNode) return null;
              const done = i < activeNodeIndex;
              const isNow = i === activeNodeIndex - 1;
              const isHovered = hoveredNode === i || hoveredNode === i + 1;
              return (
                <path
                  key={`seg-${i}`}
                  d={curve(n, nextNode)}
                  fill="none"
                  stroke={done || isNow || isHovered ? "var(--royal)" : "var(--ink)"}
                  strokeOpacity={done || isNow ? 0.85 : isHovered ? 0.55 : 0.18}
                  strokeWidth={isNow ? 5 : isHovered ? 4 : 3}
                  strokeLinecap="round"
                  strokeDasharray={done || isNow ? undefined : "8 10"}
                  className={isNow ? "route-map-active-segment" : "transition-all duration-300"}
                />
              );
            })}

            {/* stops */}
            {nodes.map((n, i) => {
              const on = i === activeNodeIndex;
              const above = n.y > 430 && n.x < 500; // keep Zermatt / Chamonix labels apart
              const anchor = n.x > 500 ? "end" : "start";
              const lx = n.x + (n.x > 500 ? -16 : 16);
              const ly = above ? n.y - 30 : n.y + 5;
              const highlighted = on || hoveredNode === i;
              const firstDay = n.days[0];
              if (firstDay === undefined) return null;
              return (
                <g
                  key={n.place + i}
                  className="route-map-stop cursor-pointer outline-none"
                  role="button"
                  tabIndex={0}
                  aria-label={`${n.place}, ${lang === "sk" ? "deň" : "day"} ${n.days.join(", ")}`}
                  onClick={() => chooseDay(firstDay)}
                  onMouseEnter={() => setHoveredNode(i)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onFocus={() => setHoveredNode(i)}
                  onBlur={() => setHoveredNode(null)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      chooseDay(firstDay);
                    }
                  }}
                >
                  {on && <circle cx={n.x} cy={n.y} r="20" fill="var(--royal)" opacity="0.2" />}
                  {on && <circle cx={n.x} cy={n.y} r="17" fill="none" stroke="var(--royal)" strokeOpacity="0.5" strokeWidth="2" className="route-map-pulse" />}
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={highlighted ? 11 : 7}
                    fill={n.peak ? "var(--gold)" : on ? "var(--royal)" : "var(--surface, white)"}
                    stroke={on ? "var(--ink)" : "var(--royal)"}
                    strokeWidth={on ? 3 : 2}
                    className="transition-all duration-300"
                  />
                  {(!activeMapArea || highlighted) && (
                    <>
                      <text
                        x={lx}
                        y={ly}
                        textAnchor={anchor}
                        className="font-semibold"
                        fontSize="15"
                        fill="var(--ink)"
                        opacity={highlighted ? 1 : 0.65}
                      >
                        {n.place}
                      </text>
                      <text x={lx} y={ly + 17} textAnchor={anchor} fontSize="11" fill="var(--ink)" opacity="0.45">
                        {lang === "sk" ? `${n.days.join(", ")}. deň` : `Day ${n.days.join(", ")}`}
                      </text>
                    </>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {current && t && (
          <div key={current.day} className="glass animate-fade-in rounded-3xl p-7">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
              <div className="flex min-w-0 flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-royal">
                {lang === "sk" ? `${current.day}. deň` : `Day ${current.day}`} · {dayStopDate(current, lang)}
              </span>
              {current.peak && (
                <span className="rounded-full bg-gold px-3 py-1 text-[11px] font-semibold text-ink">
                  {lang === "sk" ? "Vrchol cesty" : "Peak of the trip"}
                </span>
              )}
              </div>
              <span className="shrink-0 text-xs font-semibold text-soft" aria-live="polite">
                {activeDayIndex + 1}/{data.days.length}
              </span>
            </div>
            <h3 className="mt-2 font-display text-3xl text-ink">{t.title}</h3>
            <p className="mt-1 text-sm font-semibold text-terracotta">{t.place}</p>
            <p className="mt-4 text-soft leading-relaxed">{teaser(t.text)}</p>
            <p className="mt-5 text-sm italic text-soft">
              {lang === "sk"
                ? "Presné časy, spoje, ceny a naše tipy na tento deň nájdete v sprievodcovi."
                : "Exact times, connections, prices and our own tips for this day are inside the guide."}
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                disabled={!previous}
                onClick={() => previous && chooseDay(previous.day)}
                aria-label={lang === "sk" ? "Predchádzajúci deň" : "Previous day"}
              >
                <ChevronLeft />
                {lang === "sk" ? "Späť" : "Previous"}
              </Button>
              <div className="flex gap-1" aria-hidden="true">
                {data.days.map((d) => (
                  <span key={d.day} className={`h-1.5 rounded-full transition-all duration-300 ${d.day === active ? "w-5 bg-royal" : "w-1.5 bg-soft/25"}`} />
                ))}
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                disabled={!next}
                onClick={() => next && chooseDay(next.day)}
                aria-label={lang === "sk" ? "Nasledujúci deň" : "Next day"}
              >
                {lang === "sk" ? "Ďalej" : "Next"}
                <ChevronRight />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
