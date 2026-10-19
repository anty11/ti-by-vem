import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { accentHex, itineraries, itineraryText } from "@/lib/content";
import { globeColors, globePins, tripCountries } from "@/lib/globe-pins";
import { globeRoutes, type RoutePoint } from "@/lib/globe-routes";
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
const K_MAX = 40;
/** Selecting a trip zooms in at most this far, so the journey keeps its context. */
const K_FIT_MAX = 40;
/** Start zoomed in on Europe, close to the old flat map: Lapland at the top, the Riviera below. */
const HOME: View = { lon: 13, lat: 52, k: 3.4 };
const RAD = Math.PI / 180;

/** Each trip's own colour on the globe. */
const tripColor = (slug: string) =>
  globeColors[slug] ??
  accentHex[itineraries.find((item) => item.slug === slug)?.accent ?? "royal"]!;

/** Which trips cover each country. Shared countries (Italy, Switzerland…) take the colour of the selected trip. */
const countryTrips: Record<string, string[]> = {};
for (const item of itineraries) {
  for (const name of tripCountries(item.country)) {
    (countryTrips[name] ??= []).push(item.slug);
  }
}

/**
 * Trips grouped by part of the world. When none of a region's pins is on screen, a tag
 * at the edge points towards it, and one click flies the globe there.
 */
type RegionKey = "europe" | "americas" | "asia";
type Region = { key: RegionKey; slugs: string[]; view: View };
const regionOf = (lon: number): RegionKey =>
  lon < -30 ? "americas" : lon > 60 ? "asia" : "europe";
const regions: Region[] = (["europe", "americas", "asia"] as const)
  .map((key) => {
    const slugs = itineraries
      .filter((item) => globePins[item.slug] && regionOf(globePins[item.slug]![1]) === key)
      .map((item) => item.slug);
    const points = slugs.map((slug) => globePins[slug]!);
    const lat = points.reduce((sum, pt) => sum + pt[0], 0) / (points.length || 1);
    const lon = points.reduce((sum, pt) => sum + pt[1], 0) / (points.length || 1);
    const view: View = key === "europe" ? HOME : { lat: lat - 1.5, lon, k: HOME.k };
    return { key, slugs, view };
  })
  .filter((region) => region.slugs.length > 0);

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

/** Trips with a route, drawn as animated dotted journeys, plus the view that frames each one. */
type Journey = { slug: string; stops: RoutePoint[]; fit: View };
/** How long the traveller takes to walk a journey once, and the pause before the tour moves on. */
const TRAVEL_MS = 5200;
const TOUR_HOLD_MS = 1400;
const journeys: Journey[] = itineraries
  .filter((item) => (globeRoutes[item.slug]?.length ?? 0) >= 2)
  .map((item) => {
    const stops = globeRoutes[item.slug]!;
    const lats = stops.map((stop) => stop.lat);
    const lons = stops.map((stop) => stop.lon);
    const midLat = (Math.min(...lats) + Math.max(...lats)) / 2;
    const span = Math.max(
      Math.max(...lats) - Math.min(...lats),
      (Math.max(...lons) - Math.min(...lons)) * Math.cos(midLat * RAD),
      0.5,
    );
    const k = Math.max(HOME.k, Math.min(K_FIT_MAX, 220 / (span * R0 * RAD)));
    const fit = { lat: midLat - span * 0.15, lon: (Math.min(...lons) + Math.max(...lons)) / 2, k };
    return { slug: item.slug, stops, fit };
  });
const journeyBySlug = Object.fromEntries(journeys.map((j) => [j.slug, j]));

type JourneyEls = {
  line: SVGPathElement;
  flight: SVGPathElement;
  stops: SVGPathElement;
  head: SVGCircleElement;
  trail: SVGCircleElement[];
  /** One label per stop, in stop order; only the selected journey shows them. */
  labels: SVGTextElement[];
};

/** Ramer–Douglas–Peucker: keeps the points that carry the line's shape. */
function simplify<T extends { x: number; y: number }>(pts: T[], tolerance: number): T[] {
  if (pts.length < 3) return pts;
  const a = pts[0]!;
  const b = pts[pts.length - 1]!;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy);
  let worst = 0;
  let at = 0;
  for (let i = 1; i < pts.length - 1; i++) {
    const pt = pts[i]!;
    const d = len
      ? Math.abs(dy * pt.x - dx * pt.y + b.x * a.y - b.y * a.x) / len
      : Math.hypot(pt.x - a.x, pt.y - a.y);
    if (d > worst) {
      worst = d;
      at = i;
    }
  }
  if (worst <= tolerance) return [a, b];
  return [
    ...simplify(pts.slice(0, at + 1), tolerance).slice(0, -1),
    ...simplify(pts.slice(at), tolerance),
  ];
}

/** Drops points that sit too close to the previous one (keeps both ends). */
function smoothOut<T extends { x: number; y: number }>(pts: T[], minGap: number): T[] {
  const out: T[] = [];
  pts.forEach((pt, i) => {
    const prev = out[out.length - 1];
    const isLast = i === pts.length - 1;
    if (prev && Math.hypot(pt.x - prev.x, pt.y - prev.y) < minGap) {
      if (isLast && out.length > 1) out[out.length - 1] = pt;
      return;
    }
    out.push(pt);
  });
  return out;
}

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
  const journeyEls = useRef(new Map<string, JourneyEls>());
  /** The selected trip, readable from the drawing code without re-rendering. */
  const activeRef = useRef("");
  /** When the traveller set off on the shown journey. */
  const journeyClock = useRef({ slug: "", start: 0 });
  const tourTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const showTripRef = useRef<(slug: string, fromTour?: boolean) => void>(() => {});
  const gridRef = useRef<SVGPathElement>(null);
  const landRef = useRef<SVGPathElement>(null);
  const accentRefs = useRef(new Map<string, SVGPathElement>());
  const pinRefs = useRef(new Map<string, SVGGElement>());
  const regionRefs = useRef(new Map<RegionKey, HTMLButtonElement>());
  const pinScale = useRef(1);
  /** viewBox units per CSS pixel, and whether the trip card floats over the globe (sm+). */
  const layout = useRef({ unitsPerPx: 1, cardOverlay: true });
  const pins = useRef<Record<string, [number, number]>>({ ...globePins });

  // Motion state, kept outside React so dragging never re-renders the component.
  const motion = useRef({
    frame: 0,
    tween: null as Tween | null,
    velocity: null as { lon: number; lat: number } | null,
    // No wobble: until someone touches the globe, it tours the trips instead.
    sway: false,
    swayStart: 0,
    tour: true,
    reduced: false,
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

  /**
   * Every journey as soft dotted arcs between its stops, with a small traveller looping
   * along it. Stops closer than ~14px on screen merge, so zooming in reveals more detail.
   */
  /**
   * Place names along the selected journey: each name once, beside its stop, trying
   * right, left, above and below until it clears the other labels and the frame edge.
   */
  const drawLabels = (
    journey: Journey,
    els: JourneyEls,
    kept: { x: number; y: number; i: number }[],
  ) => {
    for (const el of els.labels) el.setAttribute("visibility", "hidden");
    if (journey.slug !== activeRef.current) return;
    const u = layout.current.unitsPerPx;
    const size = 11.5 * u;
    const gap = 7 * u;
    const placed: { x: number; y: number; w: number; h: number }[] = [];
    const seen = new Set<string>();
    for (const at of kept) {
      if (!at) continue;
      const stop = journey.stops[at.i];
      const el = els.labels[at.i];
      if (!stop || !el || stop.via || seen.has(stop.name)) continue;
      const w = stop.name.length * size * 0.56;
      const h = size * 1.25;
      const options = [
        { x: at.x + gap, y: at.y - h / 2, anchor: "start" },
        { x: at.x - gap - w, y: at.y - h / 2, anchor: "end" },
        { x: at.x - w / 2, y: at.y - gap - h, anchor: "middle" },
        { x: at.x - w / 2, y: at.y + gap, anchor: "middle" },
      ];
      const fits = options.find(
        (o) =>
          o.x > 4 * u &&
          o.x + w < W - 4 * u &&
          o.y > 4 * u &&
          o.y + h < H - 4 * u &&
          !placed.some((r) => o.x < r.x + r.w && o.x + w > r.x && o.y < r.y + r.h && o.y + h > r.y),
      );
      if (!fits) continue;
      placed.push({ x: fits.x, y: fits.y, w, h });
      seen.add(stop.name);
      const textX =
        fits.anchor === "start" ? fits.x : fits.anchor === "end" ? fits.x + w : fits.x + w / 2;
      el.setAttribute("x", String(round(textX)));
      el.setAttribute("y", String(round(fits.y + h * 0.78)));
      el.setAttribute("text-anchor", fits.anchor);
      el.setAttribute("font-size", String(round(size)));
      el.setAttribute("visibility", "visible");
    }
  };

  const drawJourneys = (p: Projector) => {
    const now = performance.now();
    const u = layout.current.unitsPerPx;
    const minGap = 14 * u;
    const dotR = 1.7 * pinScale.current;
    for (const journey of journeys) {
      if (journey.slug !== activeRef.current) continue;
      const els = journeyEls.current.get(journey.slug);
      if (!els) continue;
      // Project the stops; a stop behind the globe breaks the line into separate runs,
      // and a flight leg (drawn on its own) also ends a run.
      type Pt = { x: number; y: number; flight: boolean; i: number };
      const runs: Pt[][] = [];
      const flights: [Pt, Pt][] = [];
      let run: Pt[] = [];
      journey.stops.forEach((stop, i) => {
        const pt = projectPoint(stop.lat, stop.lon, p);
        if (pt.facing < 0.05) {
          if (run.length) runs.push(run);
          run = [];
          return;
        }
        const here: Pt = { x: pt.x, y: pt.y, flight: Boolean(stop.flight), i };
        const prev = run[run.length - 1];
        if (here.flight && prev) {
          runs.push(run);
          flights.push([prev, here]);
          run = [here];
          return;
        }
        run.push(here);
      });
      if (run.length) runs.push(run);
      // Keep only each run's overall shape (small detours drop out), then draw one
      // smooth curve through what is left: rounded and calm rather than stop-precise.
      const shapes_ = runs.map((r) => smoothOut(simplify(r, 22 * u), 16 * u));
      type Leg = { a: Pt; c1: [number, number]; c2: [number, number]; b: Pt; len: number };
      const legs: Leg[] = [];
      let ground = "";
      let flight = "";
      let dots = "";
      const kept: Pt[] = [];
      const leg = (a: Pt, c1: [number, number], c2: [number, number], b: Pt) => {
        const len =
          (Math.hypot(c1[0] - a.x, c1[1] - a.y) +
            Math.hypot(c2[0] - c1[0], c2[1] - c1[1]) +
            Math.hypot(b.x - c2[0], b.y - c2[1]) +
            Math.hypot(b.x - a.x, b.y - a.y)) /
          2;
        legs.push({ a, c1, c2, b, len });
        return `C${round(c1[0])} ${round(c1[1])} ${round(c2[0])} ${round(c2[1])} ${round(b.x)} ${round(b.y)}`;
      };
      // Runs and flights interleave in travel order: run, flight, run, …
      shapes_.forEach((pts, r) => {
        kept.push(...pts);
        if (pts.length > 1) {
          ground += `M${round(pts[0]!.x)} ${round(pts[0]!.y)}`;
          for (let k = 0; k < pts.length - 1; k++) {
            // Catmull-Rom through the points, as cubic Béziers.
            const p0 = pts[k - 1] ?? pts[k]!;
            const p1 = pts[k]!;
            const p2 = pts[k + 1]!;
            const p3 = pts[k + 2] ?? p2;
            ground += leg(
              p1,
              [p1.x + (p2.x - p0.x) / 6, p1.y + (p2.y - p0.y) / 6],
              [p2.x - (p3.x - p1.x) / 6, p2.y - (p3.y - p1.y) / 6],
              p2,
            );
          }
        }
        const hop = flights.find(([from]) => from === runs[r]?.[runs[r]!.length - 1]);
        if (hop) {
          const [a, b] = hop;
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const len = Math.hypot(dx, dy) || 1;
          const bow = Math.min(len * 0.3, 60 * u);
          const qx = (a.x + b.x) / 2 + (dy / len) * bow;
          const qy = (a.y + b.y) / 2 - (dx / len) * bow;
          flight += `M${round(a.x)} ${round(a.y)}`;
          flight += leg(
            a,
            [a.x + ((qx - a.x) * 2) / 3, a.y + ((qy - a.y) * 2) / 3],
            [b.x + ((qx - b.x) * 2) / 3, b.y + ((qy - b.y) * 2) / 3],
            b,
          );
        }
      });
      for (const pt of kept) {
        dots += `M${round(pt.x - dotR)} ${round(pt.y)}a${dotR} ${dotR} 0 1 0 ${round(2 * dotR)} 0a${dotR} ${dotR} 0 1 0 ${round(-2 * dotR)} 0`;
      }
      els.line.setAttribute("d", ground);
      els.flight.setAttribute("d", flight);
      els.stops.setAttribute("d", dots);
      drawLabels(journey, els, kept);
      // The traveller: constant speed along the whole journey, looping, with a fading trail.
      const total = legs.reduce((sum, leg) => sum + leg.len, 0);
      const dots_ = [els.head, ...els.trail];
      if (!total || motion.current.reduced) {
        for (const el of dots_) el.setAttribute("visibility", "hidden");
        continue;
      }
      // One walk per TRAVEL_MS from when the trip was shown; on the tour it stops at the end.
      const clock = journeyClock.current;
      const walked = clock.slug === journey.slug ? (now - clock.start) / TRAVEL_MS : -1;
      if (walked < 0) {
        for (const el of dots_) el.setAttribute("visibility", "hidden");
        continue;
      }
      const at = motion.current.tour ? Math.min(0.999, walked) : walked % 1;
      dots_.forEach((el, n) => {
        const dist = at * total - n * 9 * pinScale.current;
        if (dist < 0) {
          el.setAttribute("visibility", "hidden");
          return;
        }
        let rest = dist;
        let on = legs[0]!;
        for (const candidate of legs) {
          on = candidate;
          if (rest <= candidate.len) break;
          rest -= candidate.len;
        }
        const t = Math.min(1, rest / on.len);
        const m = 1 - t;
        const x =
          m * m * m * on.a.x +
          3 * m * m * t * on.c1[0] +
          3 * m * t * t * on.c2[0] +
          t * t * t * on.b.x;
        const y =
          m * m * m * on.a.y +
          3 * m * m * t * on.c1[1] +
          3 * m * t * t * on.c2[1] +
          t * t * t * on.b.y;
        el.setAttribute("visibility", "visible");
        el.setAttribute("cx", String(round(x)));
        el.setAttribute("cy", String(round(y)));
        el.setAttribute("r", String(round((n === 0 ? 4.2 : 3.2 - n * 0.6) * pinScale.current)));
      });
    }
  };

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
    // Visible pins and placed tags, in viewBox units, so tags can step aside.
    const u = layout.current.unitsPerPx;
    // The zoom buttons: a 36px column, 12px from the top-right corner, 120px tall.
    const obstacles: { x: number; y: number; hw: number; hh: number }[] = [
      { x: W - 30 * u, y: 72 * u, hw: 18 * u, hh: 60 * u },
    ];
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
      obstacles.push({ x: pt.x, y: pt.y, hw: 9 * u, hh: 9 * u });
    }
    drawJourneys(p);
    for (const region of regions) {
      const el = regionRefs.current.get(region.key);
      if (!el) continue;
      const inView = region.slugs.some((slug) => {
        const pin = pins.current[slug];
        if (!pin) return false;
        const pt = projectPoint(pin[0], pin[1], p);
        return pt.facing >= 0.12 && pt.x > 12 && pt.x < W - 12 && pt.y > 12 && pt.y < H - 12;
      });
      if (inView) {
        el.style.display = "none";
        continue;
      }
      // Direction from the centre towards the region; points behind the globe project
      // inside the disc in the direction you would turn it, so the same maths works.
      const target = projectPoint(region.view.lat, region.view.lon, p);
      let dx = target.x - CX;
      let dy = target.y - CY;
      if (Math.hypot(dx, dy) < 1) {
        dx = 1;
        dy = 0;
      }
      // Pin the tag to the frame edge, using its real size on screen, clear of the zoom
      // buttons (top right) and the trip card (bottom left, when it floats over the globe).
      el.style.display = "";
      const hw = (el.offsetWidth / 2) * u;
      const hh = (el.offsetHeight / 2) * u;
      const margin = 10 * u;
      const left = margin + hw;
      const right = W - margin - hw;
      const top = margin + hh;
      const bottom = H - margin - hh - (layout.current.cardOverlay ? 84 * u : 0);
      const sx = dx > 0 ? (right - CX) / dx : dx < 0 ? (left - CX) / dx : Infinity;
      const sy = dy > 0 ? (bottom - CY) / dy : dy < 0 ? (top - CY) / dy : Infinity;
      const scale = Math.min(sx, sy);
      // On the top or bottom edge a tag slides sideways to make room; on a side edge, up or down.
      const slideX = sy <= sx;
      let x = CX + dx * scale;
      let y = CY + dy * scale;
      const gap = 6 * u;
      for (let pass = 0; pass < 5; pass++) {
        const hit = obstacles.find(
          (o) => Math.abs(x - o.x) < hw + o.hw + gap && Math.abs(y - o.y) < hh + o.hh + gap,
        );
        if (!hit) break;
        // Step to the near side of whatever is in the way; the far side if that leaves the frame.
        const step = (pos: number, at: number, reach: number, min: number, max: number) => {
          const before = at - reach;
          const after = at + reach;
          const [near, far] = pos <= at ? [before, after] : [after, before];
          return near >= min && near <= max ? near : Math.max(min, Math.min(max, far));
        };
        if (slideX) x = step(x, hit.x, hit.hw + hw + gap, left, right);
        else y = step(y, hit.y, hit.hh + hh + gap, top, bottom);
      }
      // Still no room on a narrow screen: stack under (or over) whatever is in the way.
      const stuck = obstacles.find(
        (o) => Math.abs(x - o.x) < hw + o.hw + gap && Math.abs(y - o.y) < hh + o.hh + gap,
      );
      if (stuck) {
        const below = stuck.y + stuck.hh + hh + gap;
        y = below <= bottom ? below : stuck.y - stuck.hh - hh - gap;
      }
      obstacles.push({ x, y, hw, hh });
      el.style.left = `${(x / W) * 100}%`;
      el.style.top = `${(y / H) * 100}%`;
      const arrow = el.querySelector<HTMLElement>("[data-arrow]");
      if (arrow) arrow.style.transform = `rotate(${Math.atan2(dy, dx)}rad)`;
    }
    // drawJourneys only reads refs and module data, so it is safe to leave out.
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          lon: HOME.lon + 4 * Math.sin((2 * Math.PI * s) / 9),
          lat: HOME.lat + 1.2 * Math.sin((2 * Math.PI * s) / 13),
          k: HOME.k,
        };
        busy = true;
      }
      // The travellers keep moving while the globe is on screen.
      if (m.onScreen && !m.reduced) busy = true;
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
    (target: Partial<View>, baseDuration = 900) => {
      const from = { ...view.current };
      const to: View = {
        lon: target.lon ?? from.lon,
        lat: clampLat(target.lat ?? from.lat),
        k: clampK(target.k ?? from.k),
      };
      // Long trips zoom out on the way and take a little longer, like a plane climbing.
      const distance = Math.hypot(wrapLon(to.lon - from.lon), to.lat - from.lat);
      const dip = Math.min(0.75, distance / 160) * Math.max(0, Math.min(from.k, to.k) - 1);
      const duration = Math.min(2200, baseDuration + distance * 6);
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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      m.sway = false;
      m.reduced = true;
      m.tour = false;
    }
    const io = new IntersectionObserver(([entry]) => {
      m.onScreen = entry?.isIntersecting ?? true;
      if (m.onScreen) animate();
    });
    io.observe(svg);
    const ro = new ResizeObserver(() => {
      const width = svg.getBoundingClientRect().width || W;
      pinScale.current = Math.min(2, Math.max(1, (W / width) * 0.75));
      layout.current = {
        unitsPerPx: W / width,
        cardOverlay: window.matchMedia("(min-width: 640px)").matches,
      };
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

  // The tour: one trip after another, each journey walked once, until someone interacts.
  useEffect(() => {
    const m = motion.current;
    let first = true;
    const step = () => {
      if (!m.tour) return;
      if (!m.onScreen) {
        tourTimer.current = setTimeout(step, 1000);
        return;
      }
      const index = journeys.findIndex((j) => j.slug === activeRef.current);
      const next =
        first && index >= 0 ? journeys[index]! : journeys[(index + 1) % journeys.length]!;
      first = false;
      showTripRef.current(next.slug, true);
      const wait = journeyClock.current.start - performance.now() + TRAVEL_MS + TOUR_HOLD_MS;
      tourTimer.current = setTimeout(step, Math.max(1000, wait));
    };
    tourTimer.current = setTimeout(step, 1200);
    return () => clearTimeout(tourTimer.current);
  }, []);

  // Dragging: a movement under 5px is a tap (so pins stay clickable), anything more spins.
  const onPointerDown = (event: React.PointerEvent<SVGSVGElement>) => {
    if (event.button !== 0) return;
    stopTour();
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
    const deg = 40 / view.current.k;
    const step: Record<string, Partial<View>> = {
      ArrowLeft: { lon: view.current.lon - deg },
      ArrowRight: { lon: view.current.lon + deg },
      ArrowUp: { lat: view.current.lat + deg * 0.6 },
      ArrowDown: { lat: view.current.lat - deg * 0.6 },
      "+": { k: view.current.k * 1.4 },
      "=": { k: view.current.k * 1.4 },
      "-": { k: view.current.k / 1.4 },
    };
    const target = step[event.key];
    if (!target) return;
    event.preventDefault();
    stopTour();
    flyTo(target, 450);
  };

  /** Any real interaction ends the automatic tour; the visitor's choice then stays. */
  const stopTour = () => {
    motion.current.tour = false;
    clearTimeout(tourTimer.current);
  };

  /** Fly to a trip, frame its journey, and set the traveller off once it lands. */
  const showTrip = (slug: string, fromTour = false) => {
    if (!fromTour) stopTour();
    setActiveSlug(slug);
    const journey = journeyBySlug[slug];
    const pin = pins.current[slug];
    if (journey) flyTo(journey.fit);
    else if (pin) flyTo({ lat: pin[0] - 5 / view.current.k, lon: pin[1] });
    const tween = motion.current.tween;
    journeyClock.current = {
      slug,
      start: tween ? tween.start + tween.duration : performance.now(),
    };
  };
  showTripRef.current = showTrip;

  const selectTrip = (slug: string) => {
    if (motion.current.suppressClick) return;
    showTrip(slug);
  };

  const goHome = () => {
    stopTour();
    flyTo(HOME);
  };

  const goToRegion = (region: Region) => {
    const only = region.slugs.length === 1 ? region.slugs[0] : undefined;
    if (only) return showTrip(only);
    if (region.key === "europe") return goHome();
    stopTour();
    const firstSlug = region.slugs[0];
    if (firstSlug) setActiveSlug(firstSlug);
    flyTo(region.view);
  };

  const regionLabel = (region: Region) => {
    const only =
      region.slugs.length === 1 && itineraries.find((item) => item.slug === region.slugs[0]);
    return only ? itineraryText(only, lang).country : t.regions[region.key];
  };

  activeRef.current = activeSlug;
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
      <div className="relative">
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
                ?.filter((shape) => countryTrips[shape.name])
                .map((shape) => {
                  const trips = countryTrips[shape.name]!;
                  const selected = trips.includes(activeSlug);
                  // Selected trip's countries glow in its colour; a country only one trip covers
                  // keeps that trip's colour; shared ones stay a quiet neutral until selected.
                  const colour = selected
                    ? tripColor(activeSlug)
                    : trips.length === 1
                      ? tripColor(trips[0]!)
                      : "var(--soft)";
                  return (
                    <path
                      key={shape.name}
                      ref={(el) => {
                        if (el) accentRefs.current.set(shape.name, el);
                        else accentRefs.current.delete(shape.name);
                      }}
                      className="map-country map-country-available"
                      style={{
                        fill: `color-mix(in oklab, ${colour} ${selected ? 46 : trips.length === 1 ? 26 : 16}%, var(--card))`,
                        stroke: `color-mix(in oklab, ${colour} ${selected ? 85 : 55}%, transparent)`,
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
              {/* Only the selected trip's journey is shown. */}
              {journeys
                .filter((journey) => journey.slug === activeSlug)
                .map((journey) => (
                  <g
                    key={journey.slug}
                    className={`globe-journey${journey.slug === activeSlug ? " is-active" : ""}`}
                    style={{ color: tripColor(journey.slug) }}
                    ref={(el) => {
                      if (!el) {
                        journeyEls.current.delete(journey.slug);
                        return;
                      }
                      const q = <T extends Element>(sel: string) => el.querySelector<T>(sel)!;
                      journeyEls.current.set(journey.slug, {
                        line: q<SVGPathElement>("[data-line]"),
                        flight: q<SVGPathElement>("[data-flight]"),
                        stops: q<SVGPathElement>("[data-stops]"),
                        head: q<SVGCircleElement>("[data-head]"),
                        trail: [...el.querySelectorAll<SVGCircleElement>("[data-trail]")],
                        labels: [...el.querySelectorAll<SVGTextElement>("[data-label]")],
                      });
                    }}
                  >
                    <path data-line className="globe-journey-line" />
                    <path data-flight className="globe-journey-line globe-journey-flight" />
                    <path data-stops className="globe-journey-stops" />
                    <circle data-trail visibility="hidden" className="globe-traveler-trail" />
                    <circle data-trail visibility="hidden" className="globe-traveler-trail" />
                    <circle data-trail visibility="hidden" className="globe-traveler-trail" />
                    <circle data-head visibility="hidden" className="globe-traveler" />
                    {journey.stops.map((stop, i) => (
                      <text key={i} data-label visibility="hidden" className="globe-journey-label">
                        {stop.name}
                      </text>
                    ))}
                  </g>
                ))}
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
                    onMouseEnter={() => {
                      // Only a real hover: pins sliding under a still cursor while the globe
                      // flies, spins or is dragged must not switch the trip.
                      const m = motion.current;
                      if (m.tween || m.velocity || m.drag || item.slug === activeRef.current)
                        return;
                      stopTour();
                      setActiveSlug(item.slug);
                      journeyClock.current = { slug: item.slug, start: performance.now() };
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        event.stopPropagation();
                        motion.current.suppressClick = false;
                        selectTrip(item.slug);
                      }
                    }}
                  >
                    <circle r="11" fill="transparent" />
                    <g className="map-pin">
                      <circle r="11" fill={tripColor(item.slug)} opacity="0.2" />
                      {isActive && (
                        <circle
                          className="route-map-pulse"
                          r="10"
                          fill="none"
                          stroke={tripColor(item.slug)}
                          strokeWidth="2.5"
                        />
                      )}
                      <circle
                        r="5.5"
                        fill={tripColor(item.slug)}
                        stroke="var(--onink)"
                        strokeWidth="2"
                      />
                    </g>
                  </g>
                );
              })}
          </svg>

          {mounted &&
            regions.map((region) => {
              const dot = region.slugs.length === 1 ? tripColor(region.slugs[0]!) : "var(--royal)";
              return (
                <button
                  key={region.key}
                  type="button"
                  ref={(el) => {
                    if (el) regionRefs.current.set(region.key, el);
                    else regionRefs.current.delete(region.key);
                  }}
                  style={{ display: "none" }}
                  onClick={() => goToRegion(region)}
                  aria-label={`${t.goTo} ${regionLabel(region)}`}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-card/95 px-3 py-1.5 text-xs font-semibold text-ink shadow-sm transition hover:border-royal hover:text-royal"
                >
                  <span
                    className="size-2 shrink-0 rounded-full"
                    style={{ background: dot }}
                    aria-hidden="true"
                  />
                  {regionLabel(region)}
                  <span
                    data-arrow
                    className="inline-block text-sm leading-none text-royal"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </button>
              );
            })}

          <div className="absolute right-3 top-3 flex flex-col gap-1.5">
            <button
              type="button"
              onClick={() => {
                stopTour();
                flyTo({ k: view.current.k * 1.4 }, 450);
              }}
              aria-label={t.zoomIn}
              className="grid size-9 place-items-center rounded-full border border-border bg-card/95 text-lg font-semibold text-ink shadow-sm transition hover:border-royal"
            >
              +
            </button>
            <button
              type="button"
              onClick={() => {
                stopTour();
                flyTo({ k: view.current.k / 1.4 }, 450);
              }}
              aria-label={t.zoomOut}
              className="grid size-9 place-items-center rounded-full border border-border bg-card/95 text-lg font-semibold text-ink shadow-sm transition hover:border-royal"
            >
              −
            </button>
            <button
              type="button"
              onClick={goHome}
              aria-label={t.home}
              title={t.home}
              className="grid size-9 place-items-center rounded-full border border-border bg-card/95 text-[0.65rem] font-semibold uppercase tracking-wide text-royal shadow-sm transition hover:border-royal"
            >
              EU
            </button>
          </div>
        </div>

        <Link
          to={detailPath(lang)}
          params={{ slug: active.slug }}
          className="m-3 flex items-center justify-between gap-3 rounded-lg border border-border bg-card/95 px-4 py-3 shadow-sm transition hover:border-royal sm:absolute sm:bottom-3 sm:left-3 sm:m-0 sm:min-w-72"
        >
          <div className="flex items-center gap-3">
            <span
              className="size-3 shrink-0 rounded-full"
              style={{ background: tripColor(active.slug) }}
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
