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
  const mapAreas = Array.from(new Set(data.days.flatMap((day) => (day.mapArea ? [day.mapArea] : []))));

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

  function chooseMapArea(area: "canada-journey" | "new-york") {
    const firstDay = data.days.find((day) => day.mapArea === area);
    if (firstDay) chooseDay(firstDay.day);
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

      {mapAreas.length > 1 && (
        <div className="mt-5 inline-flex max-w-full rounded-lg border border-border bg-surface/70 p-1" aria-label={lang === "sk" ? "Pohľad mapy" : "Map view"}>
          {mapAreas.map((area) => {
            const selected = area === activeMapArea;
            const label = area === "canada-journey"
              ? lang === "sk" ? "Kanada a presun" : "Canada & journey"
              : lang === "sk" ? "New York · detail mesta" : "New York · city detail";
            return (
              <Button
                key={area}
                type="button"
                variant="ghost"
                size="sm"
                aria-pressed={selected}
                onClick={() => chooseMapArea(area)}
                className={selected ? "bg-ink text-onink hover:bg-ink/90 hover:text-onink" : "text-soft hover:text-ink"}
              >
                {label}
              </Button>
            );
          })}
        </div>
      )}

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <div className="glass rounded-3xl p-4 sm:p-6">
          <svg viewBox="0 0 700 540" className="w-full h-auto" role="img" aria-label={lang === "sk" ? "Mapa trasy" : "Route map"}>
            <defs>
              <radialGradient id="rm-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--royal)" stopOpacity="0.18" />
                <stop offset="100%" stopColor="var(--royal)" stopOpacity="0" />
              </radialGradient>
            </defs>

            {data.scenery === "north-america" && activeMapArea === "new-york" ? (
              <g aria-hidden="true">
                <rect x="20" y="24" width="660" height="492" rx="18" fill="var(--royal)" opacity="0.05" />
                <path d="M245 35 C290 70 304 134 318 205 C333 278 336 350 360 431 L411 421 C386 344 389 276 376 201 C363 123 342 63 302 35 Z" fill="var(--card)" opacity="0.94" />
                <path d="M395 275 C460 269 555 286 642 335 L642 455 C565 433 484 423 404 429 C380 377 376 326 395 275 Z" fill="var(--sage)" opacity="0.18" />
                <path d="M442 445 C491 437 551 441 607 467 L590 510 L470 510 Z" fill="var(--gold)" opacity="0.14" />
                <path d="M220 35 C258 117 264 204 280 280 C294 346 309 407 338 458" fill="none" stroke="var(--royal)" strokeOpacity="0.25" strokeWidth="12" />
                {[270, 286, 302, 318, 334, 350, 366].map((x) => (
                  <path key={`avenue-${x}`} d={`M ${x} 62 L ${x + 55} 420`} stroke="var(--ink)" strokeOpacity="0.08" strokeWidth="1" />
                ))}
                {[120, 160, 200, 240, 280, 320, 360].map((y) => (
                  <path key={`street-${y}`} d={`M 278 ${y} L 384 ${y - 9}`} stroke="var(--ink)" strokeOpacity="0.08" strokeWidth="1" />
                ))}
                <text x="38" y="53" fontSize="11" fontWeight="700" fill="var(--royal)" letterSpacing="0">NEW YORK CITY</text>
                <text x="286" y="93" fontSize="10" fill="var(--ink)" opacity="0.42">MANHATTAN</text>
                <text x="484" y="346" fontSize="10" fill="var(--ink)" opacity="0.42">BROOKLYN</text>
                <text x="514" y="493" fontSize="10" fill="var(--ink)" opacity="0.42">CONEY ISLAND</text>
                <text x="90" y="310" fontSize="10" fill="var(--royal)" opacity="0.5">HUDSON RIVER</text>
              </g>
            ) : data.scenery === "north-america" ? (
              <g aria-hidden="true">
                <rect x="20" y="24" width="660" height="492" rx="18" fill="var(--card)" opacity="0.46" />
                <path d="M50 68 C157 45 280 61 366 100 C426 127 478 174 520 229 C425 208 353 201 280 219 C206 237 139 228 69 198 Z" fill="var(--sage)" opacity="0.17" />
                <path d="M72 206 C144 239 212 241 280 223 C351 205 425 215 514 237 C455 264 399 298 360 344 C304 302 254 278 190 278 C137 278 93 253 72 206 Z" fill="var(--royal)" opacity="0.13" />
                <path d="M76 214 C145 244 214 246 283 227 C351 209 427 220 510 241" fill="none" stroke="var(--royal)" strokeOpacity="0.35" strokeWidth="3" />
                <path d="M292 242 C310 260 315 280 307 306" fill="none" stroke="var(--royal)" strokeOpacity="0.55" strokeWidth="8" strokeLinecap="round" />
                <path d="M337 346 C398 364 458 389 548 447" fill="none" stroke="var(--ink)" strokeOpacity="0.09" strokeWidth="16" strokeLinecap="round" />
                <path d="M337 346 C398 364 458 389 548 447" fill="none" stroke="var(--royal)" strokeOpacity="0.26" strokeWidth="2" strokeDasharray="7 9" />
                <text x="48" y="52" fontSize="11" fontWeight="700" fill="var(--royal)" letterSpacing="0">CANADA → USA</text>
                <text x="98" y="120" fontSize="12" fill="var(--ink)" opacity="0.38">ONTARIO</text>
                <text x="205" y="256" fontSize="10" fill="var(--royal)" opacity="0.52">LAKE ONTARIO</text>
                <text x="422" y="342" fontSize="11" fill="var(--ink)" opacity="0.35">NEW YORK STATE</text>
                <text x="438" y="412" fontSize="9" fill="var(--royal)" opacity="0.6">PANORAMIC TRAIN</text>
              </g>
            ) : data.scenery === "coast" ? (
              <g aria-hidden="true">
                <ellipse cx="420" cy="320" rx="300" ry="210" fill="url(#rm-glow)" />
                {/* land above the coastline */}
                <path
                  d="M40 442 C120 422 200 472 300 452 C400 432 480 462 560 437 C620 422 660 442 690 432 L690 30 L40 30 Z"
                  fill="var(--sage)"
                  opacity="0.09"
                />
                {/* sea */}
                <path
                  d="M40 442 C120 422 200 472 300 452 C400 432 480 462 560 437 C620 422 660 442 690 432 L690 540 L40 540 Z"
                  fill="var(--royal)"
                  opacity="0.1"
                />
                {/* beach strip along the coast */}
                <path
                  d="M40 442 C120 422 200 472 300 452 C400 432 480 462 560 437 C620 422 660 442 690 432"
                  fill="none"
                  stroke="var(--gold)"
                  strokeOpacity="0.5"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                {/* dotted shoreline in the water */}
                <path
                  d="M40 456 C120 436 200 486 300 466 C400 446 480 476 560 451 C620 436 660 456 690 446"
                  fill="none"
                  stroke="var(--royal)"
                  strokeOpacity="0.35"
                  strokeWidth="2"
                  strokeDasharray="2 9"
                  strokeLinecap="round"
                />
                {/* gentle waves */}
                <path d="M105 508 q14 -9 28 0 q14 9 28 0" fill="none" stroke="var(--royal)" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" />
                <path d="M495 512 q14 -9 28 0 q14 9 28 0" fill="none" stroke="var(--royal)" strokeOpacity="0.28" strokeWidth="2" strokeLinecap="round" />
                <path d="M600 486 q12 -8 24 0 q12 8 24 0" fill="none" stroke="var(--royal)" strokeOpacity="0.24" strokeWidth="2" strokeLinecap="round" />
                {/* small sailboat */}
                <g transform="translate(255 500)" opacity="0.55">
                  <path d="M0 -16 L11 2 L-7 2 Z" fill="var(--royal)" strokeOpacity="0.2" />
                  <path d="M-9 5 L12 5 L7 12 L-4 12 Z" fill="var(--terracotta)" />
                </g>
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
               const above = n.y > 430 && n.x < 500; // keep lower-edge labels inside the map
              const anchor = activeMapArea ? "middle" : n.x > 500 ? "end" : "start";
              const lx = activeMapArea ? n.x : n.x + (n.x > 500 ? -16 : 16);
              const ly = activeMapArea ? n.y - 22 : above ? n.y - 30 : n.y + 5;
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
                  {(!activeMapArea || activeMapArea === "canada-journey" || highlighted) && (
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
