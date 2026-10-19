import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { accentBg, accentHex, itineraries, itineraryText } from "@/lib/content";
import { globePins, tripCountries } from "@/lib/globe-pins";
import { copy } from "@/lib/copy";
import { detailPath, type Lang } from "@/lib/i18n";

// A spinnable globe for the home page: orthographic projection drawn into SVG by hand
// (no map library), starting over Europe. Drag to spin (it keeps turning a little after
// you let go), +/- to zoom, pins rotate the globe to their trip.

type View = { lon: number; lat: number; k: number };
/** Per point: longitude in radians, cos(latitude), sin(latitude). */
type Ring = Float64Array;
type Shape = { name: string; rings: Ring[] };

const W = 700;
const H = 500;
const CX = W / 2;
const CY = 250;
/** Globe radius at zoom 1: the whole world fits with a margin. */
const R0 = 210;
const K_MIN = 1;
const K_MAX = 3.4;
const HOME: View = { lon: 11, lat: 45, k: 1.6 };
const RAD = Math.PI / 180;

/** Each country the trips touch, tinted with the accent of the first trip that covers it. */
const countryAccent: Record<string, string> = {};
for (const item of itineraries) {
  for (const name of tripCountries(item.country)) {
    if (!countryAccent[name]) countryAccent[name] = item.accent;
  }
}

function toRing(points: [number, number][]): Ring {
  const ring = new Float64Array(points.length * 3);
  points.forEach(([lon, lat], i) => {
    ring[i * 3] = lon * RAD;
    ring[i * 3 + 1] = Math.cos(lat * RAD);
    ring[i * 3 + 2] = Math.sin(lat * RAD);
  });
  return ring;
}

/** Decodes the delta-encoded outlines in world-countries.ts. */
function decodeRings(encoded: string): [number, number][][] {
  return encoded.split(";").map((ring) => {
    const nums = ring.split(",").map(Number);
    const points: [number, number][] = [];
    let lon = 0;
    let lat = 0;
    for (let i = 0; i + 1 < nums.length; i += 2) {
      lon += nums[i]!;
      lat += nums[i + 1]!;
      points.push([lon / 10, lat / 10]);
    }
    return points;
  });
}

/** Meridians every 30° and parallels every 20°, as open lines. */
const graticule: Ring[] = (() => {
  const lines: Ring[] = [];
  for (let lon = -180; lon < 180; lon += 30) {
    const pts: [number, number][] = [];
    for (let lat = -80; lat <= 80; lat += 4) pts.push([lon, lat]);
    lines.push(toRing(pts));
  }
  for (let lat = -60; lat <= 60; lat += 20) {
    const pts: [number, number][] = [];
    for (let lon = -180; lon <= 180; lon += 4) pts.push([lon, lat]);
    lines.push(toRing(pts));
  }
  return lines;
})();

type Projector = { lam0: number; sin0: number; cos0: number; r: number };

function projector(view: View): Projector {
  return {
    lam0: view.lon * RAD,
    sin0: Math.sin(view.lat * RAD),
    cos0: Math.cos(view.lat * RAD),
    r: R0 * view.k,
  };
}

const round = (n: number) => Math.round(n * 10) / 10;

/**
 * SVG path for a ring. Closed rings (countries) push points on the far side onto the
 * horizon, which traces the visible part plus its edge along the rim. Open lines
 * (graticule) lift the pen instead. Returns "" when nothing is visible.
 */
function ringPath(ring: Ring, p: Projector, closed: boolean): string {
  let d = "";
  let visible = false;
  let penDown = false;
  for (let i = 0; i < ring.length; i += 3) {
    const dl = ring[i]! - p.lam0;
    const cp = ring[i + 1]!;
    const sp = ring[i + 2]!;
    const cdl = Math.cos(dl);
    const front = p.sin0 * sp + p.cos0 * cp * cdl >= 0;
    let x = cp * Math.sin(dl);
    let y = p.cos0 * sp - p.sin0 * cp * cdl;
    if (!front) {
      if (!closed) {
        penDown = false;
        continue;
      }
      const n = Math.hypot(x, y);
      if (n < 1e-9) continue;
      x /= n;
      y /= n;
    } else {
      visible = true;
    }
    d += `${penDown ? "L" : "M"}${round(CX + p.r * x)} ${round(CY - p.r * y)}`;
    penDown = true;
  }
  if (!visible) return "";
  return closed ? `${d}Z` : d;
}

/** Screen position of a point and how far it faces the viewer (1 = centre, <0 = behind). */
function projectPoint(lat: number, lon: number, p: Projector) {
  const dl = lon * RAD - p.lam0;
  const cp = Math.cos(lat * RAD);
  const sp = Math.sin(lat * RAD);
  const cdl = Math.cos(dl);
  return {
    x: CX + p.r * cp * Math.sin(dl),
    y: CY - p.r * (p.cos0 * sp - p.sin0 * cp * cdl),
    facing: p.sin0 * sp + p.cos0 * cp * cdl,
  };
}

const clampLat = (lat: number) => Math.max(-70, Math.min(75, lat));
const clampK = (k: number) => Math.max(K_MIN, Math.min(K_MAX, k));
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
/** Longitude difference wrapped to [-180, 180), so tweens take the short way round. */
const wrapLon = (d: number) => ((((d + 180) % 360) + 360) % 360) - 180;

type Tween = { from: View; to: View; start: number; duration: number; dip: number };

export function Globe({ lang = "en" }: { lang?: Lang }) {
  const t = copy[lang].globe;
  const first = itineraries.find((item) => item.status === "live") ?? itineraries[0];
  const [activeSlug, setActiveSlug] = useState(first?.slug ?? "");
  const [shapes, setShapes] = useState<Shape[] | null>(null);
  const [mounted, setMounted] = useState(false);

  const view = useRef<View>({ ...HOME });
  const svgRef = useRef<SVGSVGElement>(null);
  const oceanRef = useRef<SVGCircleElement>(null);
  const rimRef = useRef<SVGCircleElement>(null);
  const gridRef = useRef<SVGPathElement>(null);
  const landRef = useRef<SVGPathElement>(null);
  const accentRefs = useRef(new Map<string, SVGPathElement>());
  const pinRefs = useRef(new Map<string, SVGGElement>());
  const pinScale = useRef(1);
  const pins = useRef<Record<string, [number, number]>>({ ...globePins });

  // Motion state, kept outside React so dragging never re-renders the component.
  const motion = useRef({
    frame: 0,
    tween: null as Tween | null,
    velocity: null as { lon: number; lat: number } | null,
    sway: true,
    swayStart: 0,
    onScreen: true,
    drag: null as null | {
      id: number;
      x: number;
      y: number;
      time: number;
      moved: boolean;
      vLon: number;
      vLat: number;
    },
    suppressClick: false,
  });

  const draw = useCallback(() => {
    const p = projector(view.current);
    oceanRef.current?.setAttribute("r", String(round(p.r)));
    rimRef.current?.setAttribute("r", String(round(p.r)));
    gridRef.current?.setAttribute("d", graticule.map((ring) => ringPath(ring, p, false)).join(""));
    if (shapes) {
      let land = "";
      for (const shape of shapes) {
        const d = shape.rings.map((ring) => ringPath(ring, p, true)).join("");
        const accentPath = accentRefs.current.get(shape.name);
        if (accentPath) accentPath.setAttribute("d", d);
        else land += d;
      }
      landRef.current?.setAttribute("d", land);
    }
    for (const [slug, el] of pinRefs.current) {
      const pin = pins.current[slug];
      if (!pin) continue;
      const pt = projectPoint(pin[0], pin[1], p);
      if (pt.facing < 0.12) {
        el.setAttribute("visibility", "hidden");
        continue;
      }
      el.setAttribute("visibility", "visible");
      el.setAttribute(
        "transform",
        `translate(${round(pt.x)} ${round(pt.y)}) scale(${round(pinScale.current * 100) / 100})`,
      );
    }
  }, [shapes]);

  const tick = useCallback(
    (now: number) => {
      const m = motion.current;
      m.frame = 0;
      let busy = false;
      if (m.tween) {
        const tw = m.tween;
        const progress = Math.min(1, (now - tw.start) / tw.duration);
        const e = easeInOut(progress);
        view.current = {
          lon: tw.from.lon + wrapLon(tw.to.lon - tw.from.lon) * e,
          lat: tw.from.lat + (tw.to.lat - tw.from.lat) * e,
          k: clampK(tw.from.k + (tw.to.k - tw.from.k) * e - tw.dip * Math.sin(Math.PI * progress)),
        };
        if (progress < 1) busy = true;
        else m.tween = null;
      } else if (m.velocity && !m.drag) {
        const v = m.velocity;
        view.current.lon -= v.lon * 16;
        view.current.lat = clampLat(view.current.lat + v.lat * 16);
        v.lon *= 0.94;
        v.lat *= 0.94;
        if (Math.abs(v.lon) + Math.abs(v.lat) > 0.0004) busy = true;
        else m.velocity = null;
      } else if (m.sway && m.onScreen) {
        // A gentle wobble around Europe until someone touches it, to say "I spin".
        if (!m.swayStart) m.swayStart = now;
        const s = (now - m.swayStart) / 1000;
        view.current = {
          lon: HOME.lon + 11 * Math.sin((2 * Math.PI * s) / 9),
          lat: HOME.lat + 2.5 * Math.sin((2 * Math.PI * s) / 13),
          k: HOME.k,
        };
        busy = true;
      }
      draw();
      if (busy) m.frame = requestAnimationFrame(tick);
    },
    [draw],
  );

  const animate = useCallback(() => {
    const m = motion.current;
    if (!m.frame) m.frame = requestAnimationFrame(tick);
  }, [tick]);

  const stopSway = () => {
    motion.current.sway = false;
  };

  const flyTo = useCallback(
    (target: Partial<View>, duration = 900) => {
      const from = { ...view.current };
      const to: View = {
        lon: target.lon ?? from.lon,
        lat: clampLat(target.lat ?? from.lat),
        k: clampK(target.k ?? from.k),
      };
      // Long trips zoom out a little on the way, like a plane climbing.
      const distance = Math.hypot(wrapLon(to.lon - from.lon), to.lat - from.lat);
      const dip = Math.min(0.7, distance / 200) * Math.max(0, Math.min(from.k, to.k) - 1);
      const m = motion.current;
      m.sway = false;
      m.velocity = null;
      m.tween = { from, to, start: performance.now(), duration, dip };
      animate();
    },
    [animate],
  );

  // Load the country outlines after first paint; the globe works (ocean, grid, pins) without them.
  useEffect(() => {
    let cancelled = false;
    void import("@/lib/world-countries").then(({ worldCountries }) => {
      if (cancelled) return;
      const decoded = worldCountries.map(([name, rings]) => ({ name, points: decodeRings(rings) }));
      // Trips we have no pin for: middle of the first country's largest outline.
      for (const item of itineraries) {
        if (pins.current[item.slug]) continue;
        const country = decoded.find((c) => c.name === tripCountries(item.country)[0]);
        const outline = country?.points.reduce((a, b) => (b.length > a.length ? b : a), []);
        if (!outline?.length) continue;
        const lon = outline.reduce((sum, pt) => sum + pt[0], 0) / outline.length;
        const lat = outline.reduce((sum, pt) => sum + pt[1], 0) / outline.length;
        pins.current[item.slug] = [lat, lon];
      }
      setShapes(decoded.map((c) => ({ name: c.name, rings: c.points.map(toRing) })));
    });
    setMounted(true);
    return () => {
      cancelled = true;
    };
  }, []);

  // Redraw whenever React has (re)built the elements we draw into.
  useLayoutEffect(() => {
    draw();
  }, [draw, mounted, activeSlug]);

  // Start the wobble, pause it off-screen, and keep pins a tappable size on small screens.
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const m = motion.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) m.sway = false;
    const io = new IntersectionObserver(([entry]) => {
      m.onScreen = entry?.isIntersecting ?? true;
      if (m.onScreen) animate();
    });
    io.observe(svg);
    const ro = new ResizeObserver(() => {
      const width = svg.getBoundingClientRect().width || W;
      pinScale.current = Math.min(2, Math.max(1, (W / width) * 0.75));
      draw();
    });
    ro.observe(svg);
    animate();
    return () => {
      io.disconnect();
      ro.disconnect();
      cancelAnimationFrame(m.frame);
      m.frame = 0;
    };
  }, [animate, draw]);

  // Dragging: a movement under 5px is a tap (so pins stay clickable), anything more spins.
  const onPointerDown = (event: React.PointerEvent<SVGSVGElement>) => {
    if (event.button !== 0) return;
    const m = motion.current;
    m.drag = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      time: event.timeStamp,
      moved: false,
      vLon: 0,
      vLat: 0,
    };
    m.suppressClick = false;
  };

  const onPointerMove = (event: React.PointerEvent<SVGSVGElement>) => {
    const m = motion.current;
    const drag = m.drag;
    if (!drag || drag.id !== event.pointerId) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    if (!drag.moved) {
      if (Math.hypot(dx, dy) < 5) return;
      drag.moved = true;
      m.suppressClick = true;
      m.sway = false;
      m.tween = null;
      m.velocity = null;
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    // Screen pixels → degrees at the current zoom, so the land follows the finger.
    const rect = event.currentTarget.getBoundingClientRect();
    const scale = W / (rect.width || W);
    const degPerPx = scale / (R0 * view.current.k) / RAD;
    const dLon = dx * degPerPx;
    const dLat = dy * degPerPx;
    view.current.lon -= dLon;
    view.current.lat = clampLat(view.current.lat + dLat);
    const dt = Math.max(1, event.timeStamp - drag.time);
    drag.vLon = 0.6 * drag.vLon + 0.4 * (dLon / dt);
    drag.vLat = 0.6 * drag.vLat + 0.4 * (dLat / dt);
    drag.x = event.clientX;
    drag.y = event.clientY;
    drag.time = event.timeStamp;
    draw();
  };

  const onPointerEnd = (event: React.PointerEvent<SVGSVGElement>) => {
    const m = motion.current;
    const drag = m.drag;
    if (!drag || drag.id !== event.pointerId) return;
    m.drag = null;
    if (drag.moved && event.timeStamp - drag.time < 80) {
      // Let go mid-swipe: keep spinning and slow down.
      m.velocity = { lon: drag.vLon, lat: drag.vLat };
      animate();
    }
  };

  const onKeyDown = (event: React.KeyboardEvent<SVGSVGElement>) => {
    const step: Record<string, Partial<View>> = {
      ArrowLeft: { lon: view.current.lon - 25 },
      ArrowRight: { lon: view.current.lon + 25 },
      ArrowUp: { lat: view.current.lat + 15 },
      ArrowDown: { lat: view.current.lat - 15 },
      "+": { k: view.current.k * 1.4 },
      "=": { k: view.current.k * 1.4 },
      "-": { k: view.current.k / 1.4 },
    };
    const target = step[event.key];
    if (!target) return;
    event.preventDefault();
    flyTo(target, 450);
  };

  const selectTrip = (slug: string) => {
    if (motion.current.suppressClick) return;
    setActiveSlug(slug);
    const pin = pins.current[slug];
    if (pin) flyTo({ lat: pin[0] - 3, lon: pin[1] });
  };

  const active = itineraries.find((item) => item.slug === activeSlug) ?? first;
  if (!active) return null;
  const activeText = itineraryText(active, lang);

  return (
    <div className="map-shell relative overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal">{t.eyebrow}</p>
          <p className="mt-1 text-sm text-soft">{t.hint}</p>
        </div>
        <span className="hidden shrink-0 whitespace-nowrap text-xs font-medium text-soft sm:block">
          {itineraries.length} {itineraries.length === 1 ? t.guide : t.guides}
        </span>
      </div>
      <div className="relative aspect-[7/5] bg-paper">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="globe h-full w-full"
          role="application"
          aria-label={t.ariaGlobe}
          aria-roledescription={t.ariaRole}
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerEnd}
          onPointerCancel={onPointerEnd}
          onKeyDown={onKeyDown}
          onFocus={stopSway}
        >
          <defs>
            <radialGradient id="globe-shade" cx="38%" cy="32%" r="75%">
              <stop offset="0%" stopColor="var(--card)" stopOpacity="0.55" />
              <stop offset="70%" stopColor="var(--card)" stopOpacity="0" />
              <stop offset="100%" stopColor="var(--ink)" stopOpacity="0.12" />
            </radialGradient>
          </defs>
          <g aria-hidden="true">
            <circle ref={oceanRef} cx={CX} cy={CY} r={R0 * HOME.k} className="globe-ocean" />
            <path ref={gridRef} className="globe-grid" />
            <path ref={landRef} className="map-country" />
            {shapes
              ?.filter((shape) => countryAccent[shape.name])
              .map((shape) => {
                const accent = countryAccent[shape.name]!;
                return (
                  <path
                    key={shape.name}
                    ref={(el) => {
                      if (el) accentRefs.current.set(shape.name, el);
                      else accentRefs.current.delete(shape.name);
                    }}
                    className="map-country map-country-available"
                    style={{
                      fill: `color-mix(in oklab, var(--${accent}) 38%, var(--card))`,
                      stroke: `color-mix(in oklab, var(--${accent}) 75%, transparent)`,
                    }}
                  />
                );
              })}
            <circle
              ref={rimRef}
              cx={CX}
              cy={CY}
              r={R0 * HOME.k}
              fill="url(#globe-shade)"
              className="globe-rim"
            />
          </g>
          {mounted &&
            itineraries.map((item) => {
              const text = itineraryText(item, lang);
              const isActive = item.slug === activeSlug;
              return (
                <g
                  key={item.slug}
                  ref={(el) => {
                    if (el) pinRefs.current.set(item.slug, el);
                    else pinRefs.current.delete(item.slug);
                  }}
                  visibility="hidden"
                  role="button"
                  tabIndex={0}
                  aria-label={`${text.country}: ${text.title}`}
                  aria-pressed={isActive}
                  onClick={() => selectTrip(item.slug)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      event.stopPropagation();
                      motion.current.suppressClick = false;
                      selectTrip(item.slug);
                    }
                  }}
                >
                  <circle r="16" fill="transparent" />
                  <g className="map-pin">
                    <circle r="11" fill={accentHex[item.accent]} opacity="0.18" />
                    {isActive && (
                      <circle
                        className="route-map-pulse"
                        r="10"
                        fill="none"
                        stroke={accentHex[item.accent]}
                        strokeWidth="2.5"
                      />
                    )}
                    <circle
                      r="5.5"
                      fill={accentHex[item.accent]}
                      stroke="var(--onink)"
                      strokeWidth="2"
                    />
                  </g>
                </g>
              );
            })}
        </svg>

        <div className="absolute right-3 top-3 flex flex-col gap-1.5">
          <button
            type="button"
            onClick={() => flyTo({ k: view.current.k * 1.4 }, 450)}
            aria-label={t.zoomIn}
            className="grid size-9 place-items-center rounded-full border border-border bg-card/95 text-lg font-semibold text-ink shadow-sm transition hover:border-royal"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => flyTo({ k: view.current.k / 1.4 }, 450)}
            aria-label={t.zoomOut}
            className="grid size-9 place-items-center rounded-full border border-border bg-card/95 text-lg font-semibold text-ink shadow-sm transition hover:border-royal"
          >
            −
          </button>
          <button
            type="button"
            onClick={() => flyTo(HOME)}
            aria-label={t.home}
            title={t.home}
            className="grid size-9 place-items-center rounded-full border border-border bg-card/95 text-[0.65rem] font-semibold uppercase tracking-wide text-royal shadow-sm transition hover:border-royal"
          >
            EU
          </button>
        </div>

        <Link
          to={detailPath(lang)}
          params={{ slug: active.slug }}
          className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 rounded-lg border border-border bg-card/95 px-4 py-3 shadow-sm transition hover:border-royal sm:right-auto sm:min-w-72"
        >
          <div className="flex items-center gap-3">
            <span
              className={`size-3 shrink-0 rounded-full ${accentBg[active.accent]}`}
              aria-hidden="true"
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold text-ink">
                {activeText.country} · {active.days} {t.days}
              </p>
              <p className="mt-1 text-xs text-soft">
                {activeText.title} · {active.budget}
              </p>
            </div>
          </div>
          <span className="text-royal" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
