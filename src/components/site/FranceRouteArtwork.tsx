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
  const coast = height - 40;
  return <div className="france-atlas mt-4 overflow-hidden rounded-lg border border-border">
    <div className="flex items-center justify-between border-b border-border bg-card px-5 py-3">
      <span className="text-xs font-semibold uppercase text-soft">France · {day > 7 ? "Walking atlas" : `Chapter ${String(day).padStart(2, "0")}`}</span>
      <span className="font-display text-sm text-ink">Provence & Côte d’Azur</span>
    </div>
    <svg viewBox={`0 0 700 ${height}`} role="img" aria-label={title} className="block w-full">
      <defs>
        <pattern id={`${id}-grid`} width="50" height="50" patternUnits="userSpaceOnUse"><path d="M50 0H0V50" fill="none" stroke="var(--atlas-grid)" strokeWidth="0.6" /></pattern>
        <pattern id={`${id}-sea`} width="38" height="17" patternUnits="userSpaceOnUse"><path d="M2 9 Q10 4 18 9 T34 9" fill="none" stroke="var(--atlas-wave)" strokeWidth="0.8" /></pattern>
      </defs>
      <rect width="700" height={height} fill="var(--atlas-land)" />
      <rect width="700" height={height} fill={`url(#${id}-grid)`} />
      <g fill="none" stroke="var(--atlas-contour)" strokeWidth="1">
        <path d="M-40 95 Q65 10 165 55 T365 45 T565 20 T760 80" />
        <path d="M-40 109 Q65 24 165 69 T365 59 T565 34 T760 94" />
        <path d="M-40 123 Q65 38 165 83 T365 73 T565 48 T760 108" />
        <path d="M-45 215 Q50 130 135 185 T320 205 T515 170 T740 205" />
        <path d="M-45 229 Q50 144 135 199 T320 219 T515 184 T740 219" />
        <path d="M-45 243 Q50 158 135 213 T320 233 T515 198 T740 233" />
      </g>
      <path d={`M0 ${coast} Q100 ${coast - 25} 200 ${coast + 6} T390 ${coast + 3} Q470 ${coast - 16} 550 ${coast + 4} T700 ${coast - 5} V${height} H0Z`} fill="var(--atlas-sea)" stroke="var(--atlas-shore)" strokeWidth="2" />
      <path d={`M0 ${coast + 8} Q100 ${coast - 17} 200 ${coast + 14} T390 ${coast + 11} Q470 ${coast - 8} 550 ${coast + 12} T700 ${coast + 3} V${height} H0Z`} fill={`url(#${id}-sea)`} />
      <text x="350" y={height - 12} textAnchor="middle" fill="var(--atlas-sea-ink)" fontFamily="var(--font-display)" fontStyle="italic" fontSize="13">Méditerranée</text>
      <g transform={`translate(660 ${height - 100})`} stroke="var(--soft)" fill="none" opacity="0.65"><path d="M0-20V20M-10 0H10" strokeWidth="0.8" /><path d="M0-17L-4-5H4Z" fill="var(--ink)" stroke="none" /><text x="0" y="-25" textAnchor="middle" fill="var(--ink)" stroke="none" fontSize="10">N</text></g>
      <path d={path} fill="none" stroke="var(--card)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d={path} fill="none" stroke="var(--terracotta)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d={path} fill="none" stroke="var(--card)" strokeWidth="1" strokeDasharray="2 10" strokeLinecap="round" />
      {stops.map((stop, index) => <g key={`${stop.label}-${index}`}>
        <circle cx={stop.x} cy={stop.y} r={selected === stop.id ? 20 : 17} fill="var(--atlas-pin-halo)" />
        <circle cx={stop.x} cy={stop.y} r="11" fill={selected === stop.id ? "var(--terracotta)" : "var(--ink)"} stroke="var(--card)" strokeWidth="2.5" />
        <text x={stop.x} y={stop.y + 4} textAnchor="middle" fill="var(--onink)" fontSize="11" fontWeight="600">{index + 1}</text>
        <text className="france-atlas-label" x={stop.x} y={stop.y - 26} textAnchor="middle" fontSize="15" fontWeight="600">{stop.label}</text>
      </g>)}
    </svg>
  </div>;
}