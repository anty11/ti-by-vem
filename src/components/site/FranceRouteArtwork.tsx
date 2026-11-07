import { useId } from "react";

type ArtworkStop = { x: number; y: number; label: string; id?: string };

export function FranceRouteArtwork({ title, stops, path, height = 340, selected, day }: {
  title: string;
  stops: ArtworkStop[];
  path: string;
  height?: number;
  selected?: string;
  day: number;
}) {
  const id = useId().replace(/:/g, "");
  const c = height - 58;
  const coast = `M0 ${c - 6} C30 ${c - 14} 45 ${c + 6} 70 ${c - 4} C95 ${c - 12} 120 ${c + 2} 150 ${c - 6} C180 ${c - 14} 195 ${c + 8} 230 ${c} C260 ${c - 6} 285 ${c - 18} 310 ${c - 10} C335 ${c - 2} 355 ${c + 10} 385 ${c + 2} C415 ${c - 6} 435 ${c - 20} 465 ${c - 14} C495 ${c - 8} 515 ${c + 6} 545 ${c - 2} C575 ${c - 10} 600 ${c - 16} 630 ${c - 8} C660 ${c} 680 ${c - 4} 700 ${c - 10} V${height} H0 Z`;
  return <div className="france-atlas mt-4 overflow-hidden rounded-lg border border-border">
    <div className="flex items-center justify-between border-b border-border bg-card px-5 py-3">
      <span className="text-xs font-semibold uppercase text-soft">France · {day > 7 ? "Walking atlas" : `Chapter ${String(day).padStart(2, "0")}`}</span>
      <span className="font-display text-sm text-ink">Provence & Côte d’Azur</span>
    </div>
    <svg viewBox={`0 0 700 ${height}`} role="img" aria-label={title} className="block w-full">
      <defs>
        <linearGradient id={`${id}-land`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--atlas-land-warm)" />
          <stop offset="1" stopColor="var(--atlas-land)" />
        </linearGradient>
        <linearGradient id={`${id}-sea`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--atlas-sea-shallow)" />
          <stop offset="1" stopColor="var(--atlas-sea-deep)" />
        </linearGradient>
        <radialGradient id={`${id}-vignette`} cx="0.5" cy="0.45" r="0.85">
          <stop offset="0.72" stopColor="var(--atlas-vignette)" stopOpacity="0" />
          <stop offset="1" stopColor="var(--atlas-vignette)" stopOpacity="0.5" />
        </radialGradient>
        <pattern id={`${id}-grid`} width="50" height="50" patternUnits="userSpaceOnUse"><path d="M50 0H0V50" fill="none" stroke="var(--atlas-grid)" strokeWidth="0.6" /></pattern>
        <pattern id={`${id}-waves`} width="46" height="20" patternUnits="userSpaceOnUse"><path d="M2 11 Q12 5 22 11 T42 11" fill="none" stroke="var(--atlas-wave)" strokeWidth="0.9" /></pattern>
        <filter id={`${id}-soft`} x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="7" /></filter>
      </defs>

      <rect width="700" height={height} fill={`url(#${id}-land)`} />
      <rect width="700" height={height} fill={`url(#${id}-grid)`} />

      <g fill="var(--atlas-relief)" filter={`url(#${id}-soft)`}>
        <ellipse cx="150" cy="70" rx="120" ry="34" />
        <ellipse cx="420" cy="45" rx="150" ry="30" />
        <ellipse cx="610" cy="90" rx="110" ry="30" />
        <ellipse cx="300" cy="150" rx="90" ry="22" />
      </g>
      <g fill="none" stroke="var(--atlas-contour)" strokeWidth="1">
        <path d="M-40 95 Q65 10 165 55 T365 45 T565 20 T760 80" />
        <path d="M-40 111 Q65 26 165 71 T365 61 T565 36 T760 96" />
        <path d="M-40 127 Q65 42 165 87 T365 77 T565 52 T760 112" />
        <path d="M-45 215 Q50 130 135 185 T320 205 T515 170 T740 205" />
        <path d="M-45 231 Q50 146 135 201 T320 221 T515 186 T740 221" />
      </g>

      <path d={coast} fill={`url(#${id}-sea)`} />
      <path d={coast} fill={`url(#${id}-waves)`} opacity="0.55" />
      <path d={coast.replace(` V${height} H0 Z`, "")} fill="none" stroke="var(--atlas-shore)" strokeWidth="2.2" />
      <path d={coast.replace(` V${height} H0 Z`, "")} fill="none" stroke="var(--atlas-foam)" strokeWidth="5" opacity="0.35" transform="translate(0 3)" />
      <text x="350" y={height - 14} textAnchor="middle" fill="var(--atlas-sea-ink)" fontFamily="var(--font-display)" fontStyle="italic" fontSize="14" letterSpacing="2">Méditerranée</text>

      <g transform={`translate(655 ${height - 118})`} stroke="var(--soft)" fill="none" opacity="0.8">
        <circle r="16" strokeWidth="0.8" />
        <path d="M0-16V16M-16 0H16" strokeWidth="0.6" />
        <path d="M0-13L-4-3H4Z" fill="var(--terracotta)" stroke="none" />
        <path d="M0 13L-4 3H4Z" fill="var(--soft)" stroke="none" opacity="0.5" />
        <text x="0" y="-22" textAnchor="middle" fill="var(--ink)" stroke="none" fontSize="10" fontWeight="600">N</text>
      </g>
      <g transform={`translate(28 ${height - 20})`} stroke="var(--soft)" fill="none" opacity="0.8">
        <path d="M0 0H70" strokeWidth="1.4" />
        <path d="M0-4V4M35-3V3M70-4V4" strokeWidth="1" />
        <text x="35" y="-7" textAnchor="middle" fill="var(--soft)" stroke="none" fontSize="9">50 km</text>
      </g>

      <path d={path} fill="none" stroke="var(--card)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      <path d={path} fill="none" stroke="var(--terracotta)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d={path} fill="none" stroke="var(--card)" strokeWidth="1" strokeDasharray="2 10" strokeLinecap="round" />

      {stops.map((stop, index) => <g key={`${stop.label}-${index}`}>
        <circle cx={stop.x} cy={stop.y} r={selected && selected === stop.id ? 21 : 17} fill="var(--atlas-pin-halo)" />
        <circle cx={stop.x} cy={stop.y} r="11" fill={selected && selected === stop.id ? "var(--terracotta)" : "var(--ink)"} stroke="var(--card)" strokeWidth="2.5" />
        <text x={stop.x} y={stop.y + 4} textAnchor="middle" fill="var(--onink)" fontSize="11" fontWeight="600">{index + 1}</text>
        <text className="france-atlas-label" x={stop.x} y={stop.y - 26} textAnchor="middle" fontSize="15" fontWeight="600">{stop.label}</text>
      </g>)}

      <rect width="700" height={height} fill={`url(#${id}-vignette)`} pointerEvents="none" />
    </svg>
  </div>;
}
