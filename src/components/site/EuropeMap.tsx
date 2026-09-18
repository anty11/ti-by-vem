import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { accentHex, itineraries, itineraryText } from "@/lib/content";
import { europeCountries } from "@/lib/europe-map";
import { copy } from "@/lib/copy";
import { detailPath, type Lang } from "@/lib/i18n";

const availableCountries = new Set(itineraries.map((item) => item.country));

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
          <g aria-hidden="true">
            {europeCountries.map((country) => (
              <path
                key={country.name}
                d={country.path}
                className={availableCountries.has(country.name) ? "map-country map-country-available" : "map-country"}
              />
            ))}
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
                {item.slug === activeSlug && (
                  <circle cx={item.x} cy={item.y} r="14" fill="none" stroke={accentHex[item.accent]} strokeWidth="2" opacity="0.45" />
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
          <div className="leading-tight">
            <p className="text-sm font-semibold text-ink">{activeText.country} · {active.days} {t.days}</p>
            <p className="mt-1 text-xs text-soft">{activeText.title} · {active.budget}</p>
          </div>
          <span className="text-royal" aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
