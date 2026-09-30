import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { accentBg, accentHex, europeanItineraries as itineraries, itineraryText } from "@/lib/content";
import { europeCountries } from "@/lib/europe-map";
import { copy } from "@/lib/copy";
import { detailPath, type Lang } from "@/lib/i18n";

/** Trip labels name regions; the map draws sovereign states, so translate the odd one out. */
const countryAliases: Record<string, string> = {
  Scotland: "United Kingdom",
};

/** Each country the trips touch, tinted with the accent of the trip that covers it. */
const countryAccent: Record<string, string> = {};
for (const item of itineraries) {
  for (const raw of item.country.split("&")) {
    const name = countryAliases[raw.trim()] ?? raw.trim();
    if (!countryAccent[name]) countryAccent[name] = item.accent;
  }
}

const availableCountries = new Set(Object.keys(countryAccent));

export function EuropeMap({ lang = "en" }: { lang?: Lang }) {
  const t = copy[lang].map;
  const firstItinerary = itineraries.at(0);
  const [activeSlug, setActiveSlug] = useState(firstItinerary?.slug ?? "");
  const active = itineraries.find((item) => item.slug === activeSlug) ?? firstItinerary;

  if (!active) return null;

  const activeText = itineraryText(active, lang);

  return (
    <div className="map-shell relative overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal">{t.eyebrow}</p>
          <p className="mt-1 text-sm text-soft">{t.hint}</p>
        </div>
        <span className="hidden text-xs font-medium text-soft sm:block">{itineraries.length} {itineraries.length === 1 ? t.guide : t.guides}</span>
      </div>
      <div className="relative aspect-[7/5] bg-paper">
        <svg viewBox="0 0 700 500" className="h-full w-full" aria-label={t.ariaMap}>
          <defs>
            <linearGradient id="map-sea" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--royal)" stopOpacity="0.24" />
              <stop offset="48%" stopColor="var(--sage)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="var(--terracotta)" stopOpacity="0.22" />
            </linearGradient>
            <radialGradient id="map-sun" cx="0.82" cy="0.12" r="0.55">
              <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.38" />
              <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="700" height="500" fill="var(--paper)" />
          <rect width="700" height="500" fill="url(#map-sea)" />
          <rect width="700" height="500" fill="url(#map-sun)" />
          <g aria-hidden="true">
            {europeCountries.map((country) => {
              const accent = countryAccent[country.name];
              return (
                <path
                  key={country.name}
                  d={country.path}
                  className={accent ? "map-country map-country-available" : "map-country"}
                  style={
                    accent
                      ? {
                          fill: `color-mix(in oklab, var(--${accent}) 38%, var(--card))`,
                          stroke: `color-mix(in oklab, var(--${accent}) 75%, transparent)`,
                        }
                      : undefined
                  }
                />
              );
            })}
          </g>
          {itineraries.map((item) => {
            const text = itineraryText(item, lang);
            return (
              <g
                key={item.slug}
                className="map-pin"
                role="button"
                tabIndex={0}
                aria-label={`${text.country}: ${text.title}`}
                onMouseEnter={() => setActiveSlug(item.slug)}
                onClick={() => setActiveSlug(item.slug)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") setActiveSlug(item.slug);
                }}
              >
                <circle cx={item.x} cy={item.y} r="13" fill={accentHex[item.accent]} opacity="0.18" />
                {item.slug === activeSlug && (
                  <circle
                    className="route-map-pulse"
                    cx={item.x}
                    cy={item.y}
                    r="12"
                    fill="none"
                    stroke={accentHex[item.accent]}
                    strokeWidth="2.5"
                  />
                )}
                <circle cx={item.x} cy={item.y} r="6" fill={accentHex[item.accent]} stroke="var(--onink)" strokeWidth="2" />
              </g>
            );
          })}
        </svg>
        <Link
          to={detailPath(lang)}
          params={{ slug: active.slug }}
          className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 rounded-lg border border-border bg-card/95 px-4 py-3 shadow-sm transition hover:border-royal sm:right-auto sm:min-w-72"
        >
          <div className="flex items-center gap-3">
            <span className={`size-3 shrink-0 rounded-full ${accentBg[active.accent]}`} aria-hidden="true" />
            <div className="leading-tight">
              <p className="text-sm font-semibold text-ink">{activeText.country} · {active.days} {t.days}</p>
              <p className="mt-1 text-xs text-soft">{activeText.title} · {active.budget}</p>
            </div>
          </div>
          <span className="text-royal" aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
