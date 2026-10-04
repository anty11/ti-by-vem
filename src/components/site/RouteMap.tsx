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
            ) : data.scenery === "japan" ? (
              <g aria-hidden="true">
                <rect x="20" y="24" width="660" height="492" rx="18" fill="var(--royal)" opacity="0.07" />
                {/* rising sun */}
                <circle cx="540" cy="110" r="46" fill="var(--terracotta)" opacity="0.22" />
                {/* Honshu */}
                <path d="M50 440 C120 420 180 425 220 430 C270 440 320 440 380 425 C440 412 490 440 530 455 C580 450 620 410 640 360 C656 290 650 180 636 92 L602 84 C590 140 570 190 520 230 C470 262 400 285 330 292 C260 300 200 320 140 360 C100 385 70 405 50 440 Z" fill="var(--card)" opacity="0.95" stroke="var(--ink)" strokeOpacity="0.12" />
                {/* Shikoku & Kyushu hints */}
                <path d="M150 462 C190 452 240 452 270 462 C255 486 200 494 160 486 Z" fill="var(--card)" opacity="0.85" stroke="var(--ink)" strokeOpacity="0.1" />
                <path d="M30 430 C52 422 70 440 66 470 C56 500 36 500 28 480 Z" fill="var(--card)" opacity="0.8" stroke="var(--ink)" strokeOpacity="0.1" />
                {/* Inland sea dots */}
                <path d="M120 424 C170 414 220 418 262 426" fill="none" stroke="var(--royal)" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" />
                {/* Mt Fuji */}
                <path d="M368 318 L400 280 L432 318 Z" fill="var(--sage)" opacity="0.5" />
                <path d="M390 292 L400 280 L410 292 L404 289 L400 294 L396 289 Z" fill="var(--background)" />
                {/* shinkansen line */}
                <path d="M95 420 C160 400 200 395 262 335 C340 320 440 300 560 265" fill="none" stroke="var(--ink)" strokeOpacity="0.1" strokeWidth="6" strokeLinecap="round" />
                {/* torii */}
                <g transform="translate(205 345)" opacity="0.5" stroke="var(--terracotta)" strokeWidth="3" strokeLinecap="round">
                  <path d="M-14 0 L14 0 M-11 6 L11 6 M-8 0 L-8 22 M8 0 L8 22" fill="none" />
                </g>
                {/* cherry blossoms */}
                {[[340, 360], [470, 340], [600, 200], [180, 410]].map(([cx, cy]) => (
                  <circle key={`sakura-${cx}`} cx={cx} cy={cy} r="5" fill="var(--terracotta)" opacity="0.25" />
                ))}
                <text x="40" y="52" fontSize="11" fontWeight="700" fill="var(--royal)" letterSpacing="0">JAPAN · HONSHU</text>
                <text x="260" y="200" fontSize="10" fill="var(--royal)" opacity="0.5">SEA OF JAPAN</text>
                <text x="420" y="480" fontSize="10" fill="var(--royal)" opacity="0.5">PACIFIC OCEAN</text>
                <text x="374" y="274" fontSize="9" fill="var(--ink)" opacity="0.5">FUJI</text>
                <text x="150" y="388" fontSize="9" fill="var(--ink)" opacity="0.4">SHINKANSEN</text>
              </g>
            ) : data.scenery === "alpine-winter" ? (
              <g aria-hidden="true">
                <rect x="20" y="24" width="660" height="492" rx="18" fill="var(--royal)" opacity="0.05" />
                {/* back range */}
                <path d="M20 250 L90 180 L140 220 L210 140 L270 200 L330 120 L400 190 L460 130 L530 200 L600 150 L680 210 L680 516 L20 516 Z" fill="var(--lilac)" opacity="0.12" />
                {/* snow caps back */}
                {[[210, 140], [330, 120], [460, 130], [600, 150]].map(([px, py]) => (
                  <path key={`cap-${px}`} d={`M${px - 18} ${py + 18} L${px} ${py} L${px + 18} ${py + 18} L${px + 8} ${py + 13} L${px} ${py + 20} L${px - 8} ${py + 13} Z`} fill="var(--background)" opacity="0.9" />
                ))}
                {/* front range with Dolomite towers */}
                <path d="M20 470 L100 400 L150 430 L230 340 L260 370 L300 320 L330 360 L380 300 L420 350 L470 290 L500 330 L560 280 L600 330 L680 300 L680 516 L20 516 Z" fill="var(--sage)" opacity="0.16" />
                {/* valleys / roads */}
                <path d="M100 230 C160 260 210 330 250 390 M240 110 C240 200 245 300 250 390 M330 290 C380 270 420 250 450 240 C500 250 550 280 590 300" fill="none" stroke="var(--royal)" strokeOpacity="0.14" strokeWidth="5" strokeLinecap="round" />
                {/* snowflakes */}
                {[[80, 90], [160, 300], [420, 90], [520, 250], [640, 420], [380, 460], [120, 480]].map(([sx, sy]) => (
                  <g key={`flake-${sx}`} transform={`translate(${sx} ${sy})`} stroke="var(--royal)" strokeOpacity="0.35" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M-6 0 L6 0 M0 -6 L0 6 M-4 -4 L4 4 M-4 4 L4 -4" />
                  </g>
                ))}
                <text x="40" y="52" fontSize="11" fontWeight="700" fill="var(--royal)" letterSpacing="0">DOLOMITES · WINTER</text>
                <text x="80" y="230" fontSize="10" fill="var(--ink)" opacity="0.4">SOUTH TYROL</text>
                <text x="540" y="470" fontSize="10" fill="var(--ink)" opacity="0.4">VENETO</text>
                <text x="250" y="80" fontSize="9" fill="var(--ink)" opacity="0.4">BRENNER ↑ AUSTRIA</text>
              </g>
            ) : data.scenery === "highlands" ? (
              <g aria-hidden="true">
                <rect x="20" y="24" width="660" height="492" rx="18" fill="var(--royal)" opacity="0.09" />
                {/* mainland Scotland */}
                <path d="M300 52 C360 44 420 50 470 64 C462 110 452 150 470 180 C500 200 540 210 560 240 C520 262 470 268 440 290 C470 320 520 340 560 370 C540 420 480 470 420 516 L250 516 C270 470 280 440 300 420 C270 400 250 370 270 340 C240 320 230 290 250 260 C230 240 225 210 245 190 C260 160 270 120 290 100 C280 80 285 62 300 52 Z" fill="var(--sage)" opacity="0.2" stroke="var(--ink)" strokeOpacity="0.12" />
                {/* Isle of Skye */}
                <path d="M160 230 C180 210 205 215 212 240 C228 250 230 275 215 300 C200 315 180 305 182 285 C168 275 150 255 160 230 Z" fill="var(--sage)" opacity="0.24" stroke="var(--ink)" strokeOpacity="0.12" />
                {/* Outer Hebrides hint */}
                <path d="M80 140 C100 130 110 160 104 200 C98 240 86 280 74 290 C64 260 66 180 80 140 Z" fill="var(--sage)" opacity="0.14" />
                {/* Great Glen / Loch Ness */}
                <path d="M410 262 C380 290 350 330 320 380" fill="none" stroke="var(--royal)" strokeOpacity="0.45" strokeWidth="5" strokeLinecap="round" />
                {/* small lochs */}
                {[[300, 180], [340, 220], [280, 300], [380, 140]].map(([lx2, ly2]) => (
                  <ellipse key={`loch-${lx2}`} cx={lx2} cy={ly2} rx="10" ry="4" fill="var(--royal)" opacity="0.3" />
                ))}
                {/* hills */}
                {[[330, 250], [360, 360], [300, 120], [400, 210]].map(([hx, hy]) => (
                  <path key={`hill-${hx}`} d={`M${hx - 16} ${hy} L${hx} ${hy - 14} L${hx + 16} ${hy}`} fill="none" stroke="var(--ink)" strokeOpacity="0.2" strokeWidth="1.5" />
                ))}
                {/* ferry */}
                <path d="M282 345 C250 330 225 315 205 300" fill="none" stroke="var(--royal)" strokeOpacity="0.45" strokeWidth="2" strokeDasharray="4 6" />
                {/* castle */}
                <g transform="translate(372 300)" opacity="0.5" fill="var(--terracotta)">
                  <path d="M-8 0 L-8 -10 L-5 -10 L-5 -7 L-2 -7 L-2 -10 L2 -10 L2 -7 L5 -7 L5 -10 L8 -10 L8 0 Z" />
                </g>
                <text x="40" y="52" fontSize="11" fontWeight="700" fill="var(--royal)" letterSpacing="0">SCOTTISH HIGHLANDS</text>
                <text x="130" y="200" fontSize="10" fill="var(--ink)" opacity="0.45">SKYE</text>
                <text x="350" y="300" fontSize="9" fill="var(--royal)" opacity="0.55">LOCH NESS</text>
                <text x="560" y="120" fontSize="10" fill="var(--royal)" opacity="0.5">NORTH SEA</text>
                <text x="60" y="400" fontSize="10" fill="var(--royal)" opacity="0.5">ATLANTIC</text>
                <text x="210" y="335" fontSize="8" fill="var(--royal)" opacity="0.55">FERRY</text>
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
