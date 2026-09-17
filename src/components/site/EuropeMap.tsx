import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { accentHex, itineraries } from "@/lib/content";

export function EuropeMap() {
  const [activeSlug, setActiveSlug] = useState(itineraries[0].slug);
  const active = itineraries.find((i) => i.slug === activeSlug) ?? itineraries[0];

  return (
    <div className="glass rounded-3xl p-6 relative">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-soft">
          Pick a country
        </span>
        <span className="text-xs font-medium text-soft">
          {itineraries.length} itineraries live
        </span>
      </div>
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-royal/10 via-white to-sage/15 aspect-[4/3]">
        <svg viewBox="0 0 400 320" className="w-full h-full" aria-label="Interactive map of Europe">
          <path
            d="M60 250 C40 210 55 150 95 120 C120 100 130 70 150 70 C175 68 190 95 215 95 C245 95 275 78 305 92 C340 108 360 150 350 195 C342 235 300 262 255 262 C210 262 180 285 140 275 C105 267 80 275 60 250 Z"
            fill="color-mix(in oklab, var(--royal) 14%, transparent)"
            stroke="color-mix(in oklab, var(--royal) 35%, transparent)"
            strokeWidth="1.5"
          />
          {itineraries.map((it) => (
            <g key={it.slug}>
              <circle
                className="map-pin"
                cx={it.x}
                cy={it.y}
                r={9}
                fill={accentHex[it.accent]}
                opacity={it.slug === activeSlug ? 1 : 0.75}
                onMouseEnter={() => setActiveSlug(it.slug)}
                onClick={() => setActiveSlug(it.slug)}
                role="button"
                tabIndex={0}
                aria-label={`${it.country}: ${it.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActiveSlug(it.slug);
                }}
              />
              {it.slug === activeSlug && (
                <circle
                  cx={it.x}
                  cy={it.y}
                  r={16}
                  fill="none"
                  stroke={accentHex[it.accent]}
                  strokeWidth="1.5"
                  opacity="0.5"
                  className="pointer-events-none"
                />
              )}
            </g>
          ))}
        </svg>
        <Link
          to="/itineraries/$slug"
          params={{ slug: active.slug }}
          className="glass rounded-xl absolute left-3 bottom-3 px-4 py-2.5 flex items-center gap-3 hover:bg-white transition"
        >
          <span
            className="size-2.5 rounded-full"
            style={{ backgroundColor: accentHex[active.accent] }}
          />
          <div className="leading-tight">
            <p className="text-sm font-semibold text-ink">
              {active.country} · {active.days} days
            </p>
            <p className="text-xs text-soft">
              {active.title} · {active.budget}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
