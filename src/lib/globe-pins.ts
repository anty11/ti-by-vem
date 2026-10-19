// Where each trip sits on the home page globe, as [latitude, longitude] in degrees.
// A trip missing here is pinned to the middle of its first country, so new trips still show up.
export const globePins: Record<string, [number, number]> = {
  "toronto-new-york": [42.3, -76.8],
  japan: [35.2, 137.0],
  "dolomites-winter": [46.5, 12.1],
  "oslo-tromso": [64.8, 13.6],
  switzerland: [46.8, 7.4],
  riviera: [43.5, 6.2],
  italy: [43.0, 12.4],
  scotland: [56.9, -4.8],
  "oktoberfest-dolomites": [48.1, 11.6],
  lapland: [66.9, 26.3],
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
