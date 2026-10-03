// Builds the "what the agent knows about this trip" text block from the
// package content that already lives in code (content.ts + route-maps.ts).
// Pure and server-safe: no React, no Supabase, no environment access.

import {
  itineraries,
  itineraryText,
  itineraryWhen,
  tiersByLang,
  type Itinerary,
} from "@/lib/content";
import type { Lang } from "@/lib/i18n";
import { dayStopDate, dayStopText, routeMaps } from "@/lib/route-maps";

/** Regions the trips name that are not sovereign states, mapped to the country the agent should research. */
const regionToCountry: Record<string, string> = {
  Scotland: "United Kingdom",
};

/** "Canada & USA" -> ["Canada", "USA"]; "Scotland" -> ["United Kingdom"]. */
export function tripCountries(item: Itinerary): string[] {
  return item.country
    .split("&")
    .map((raw) => raw.trim())
    .filter(Boolean)
    .map((name) => regionToCountry[name] ?? name);
}

export function findItinerary(slug: string): Itinerary | undefined {
  return itineraries.find((item) => item.slug === slug);
}

/** Human label for the access tier the customer redeemed. */
export function tierLabel(tier: string, lang: Lang): string {
  const tiers = tiersByLang[lang];
  if (tier === "us") return tiers[1]?.name ?? "Guide + Us";
  return tiers[0]?.name ?? "Guide + Chat";
}

export type PackageContext = {
  /** Multi-line text describing the whole purchased package. */
  text: string;
  countries: string[];
  dayCount: number;
  hasRouteMap: boolean;
};

/**
 * Everything the package says about the trip, in the customer's language:
 * facts, highlights, and the full day-by-day route with practical notes.
 */
export function buildPackageContext(item: Itinerary, lang: Lang, tier: string): PackageContext {
  const text = itineraryText(item, lang);
  const countries = tripCountries(item);
  const when = itineraryWhen(item, lang);
  const routeMap = routeMaps[item.slug];

  const lines: string[] = [];
  lines.push(`Trip: ${text.title}`);
  lines.push(`Country: ${text.country} (research scope: ${countries.join(", ")})`);
  lines.push(`Length: ${item.days} days`);
  lines.push(`Ground covered: ${text.stops}`);
  lines.push(
    `Budget estimate: ${item.budget} per person (V & eM's own spend, used as the reference)`,
  );
  lines.push(`Package the customer bought: ${tierLabel(tier, lang)}`);
  if (item.status === "soon" && when)
    lines.push(`Status: V & eM travel this route in ${when}; details may still change.`);
  if (item.personalNote) lines.push(`Personal note from V & eM: ${item.personalNote}`);
  lines.push("");
  lines.push(`Summary: ${text.blurb}`);
  lines.push("");
  lines.push("Key moves:");
  for (const highlight of text.highlights) lines.push(`- ${highlight}`);

  if (routeMap) {
    const lead = lang === "sk" ? routeMap.leadSk : routeMap.lead;
    const title = lang === "sk" ? routeMap.titleSk : routeMap.title;
    lines.push("");
    lines.push(`ROUTE, DAY BY DAY — ${title}`);
    lines.push(lead);
    for (const stop of routeMap.days) {
      const day = dayStopText(stop, lang);
      lines.push("");
      lines.push(
        `${dayStopDate(stop, lang)} — ${day.place}${stop.peak ? " (peak moment of the trip)" : ""}`,
      );
      lines.push(`${day.title}. ${day.text}`);
      if (day.notes.length) lines.push(`Practical: ${day.notes.join(" · ")}`);
    }
  }

  return {
    text: lines.join("\n"),
    countries,
    dayCount: routeMap?.days.length ?? 0,
    hasRouteMap: Boolean(routeMap),
  };
}
