// Where each trip sits on the home page globe, as [latitude, longitude] in degrees.
// A trip missing here is pinned to the middle of its first country, so new trips still show up.
export const globePins: Record<string, [number, number]> = {
  "toronto-new-york": [42.3, -76.8],
  japan: [35.2, 137.0],
  "dolomites-winter": [46.5, 12.1],
  "oslo-tromso": [64.8, 13.6],
  switzerland: [46.8, 7.4],
  riviera: [43.5, 6.2],
  italy: [45.55, 11.0], // "The Dolomites loop", starting in Verona
  scotland: [56.9, -4.8],
  "oktoberfest-dolomites": [48.1, 11.6],
  lapland: [66.9, 26.3],
};

/**
 * One colour per trip on the globe (pins, tinted countries, card dot). Same lightness and
 * softness as the brand palette, hues spread so neighbours differ: the five Alpine trips
 * get orange, gold, green, glacier blue and raspberry. A trip missing here falls back to
 * its brand accent.
 */
export const globeColors: Record<string, string> = {
  riviera: "oklch(0.66 0.15 45)", // terracotta orange
  "dolomites-winter": "oklch(0.74 0.14 85)", // gold
  italy: "oklch(0.64 0.13 140)", // olive green
  switzerland: "oklch(0.62 0.12 215)", // glacier blue
  "oktoberfest-dolomites": "oklch(0.6 0.16 350)", // raspberry
  scotland: "oklch(0.58 0.13 300)", // heather
  "oslo-tromso": "oklch(0.52 0.16 262)", // fjord blue
  lapland: "oklch(0.66 0.12 175)", // aurora teal
  japan: "oklch(0.62 0.17 18)", // cherry red
  "toronto-new-york": "oklch(0.68 0.15 115)", // chartreuse
};

/** Trip labels name regions or short forms; the globe draws sovereign states. */
export const globeCountryAliases: Record<string, string> = {
  Scotland: "United Kingdom",
  USA: "United States of America",
};

/** "Germany, Liechtenstein, Switzerland & Italy" → the globe's country names. */
export function tripCountries(label: string): string[] {
  return label
    .split(/,|&/)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((name) => globeCountryAliases[name] ?? name);
}
