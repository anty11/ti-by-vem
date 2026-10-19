// The path each trip takes, drawn on the home page globe when the trip is selected.
// Stops follow the day-by-day plans in route-maps.ts, in travel order, as [latitude, longitude].
// "via" points shape the line without a stop marker; "flight" marks a leg that is flown
// (drawn dashed). Trips without a day-by-day plan only show what their description states.

export type RoutePoint = {
  name: string;
  lat: number;
  lon: number;
  /** Shapes the line only; no stop marker. */
  via?: boolean;
  /** The leg arriving at this point is a flight. */
  flight?: boolean;
};

const p = (
  name: string,
  lat: number,
  lon: number,
  extra: Partial<RoutePoint> = {},
): RoutePoint => ({
  name,
  lat,
  lon,
  ...extra,
});

export const globeRoutes: Record<string, RoutePoint[]> = {
  "dolomites-winter": [
    p("Cortina d'Ampezzo", 46.54, 12.14),
    p("Cinque Torri", 46.51, 12.05),
    p("Passo Giau", 46.48, 12.05),
    p("Cortina d'Ampezzo", 46.54, 12.14),
    p("Tires", 46.47, 11.53),
    p("Lago di Fiè", 46.53, 11.51),
    p("Vipiteno", 46.9, 11.43),
    p("Tires", 46.47, 11.53),
    p("Alpe di Siusi", 46.55, 11.63),
    p("Nova Levante", 46.43, 11.54),
    p("Selva", 46.56, 11.76),
    p("Merano", 46.67, 11.16),
    p("Bolzano", 46.5, 11.35),
  ],
  "oslo-tromso": [
    p("Oslo", 59.91, 10.75),
    p("The Well", 59.79, 10.8),
    p("Oslo", 59.91, 10.75),
    p("Tromsø", 69.65, 18.96, { flight: true }),
  ],
  switzerland: [
    p("Zürich", 47.37, 8.54),
    p("Chur", 46.85, 9.53, { via: true }),
    p("St. Moritz", 46.5, 9.84),
    p("Zermatt", 46.02, 7.75),
    p("Chamonix", 45.92, 6.87),
    p("Geneva", 46.2, 6.14),
  ],
  riviera: [
    p("Marseille", 43.3, 5.37),
    p("Avignon", 43.95, 4.81),
    p("L'Isle-sur-la-Sorgue", 43.92, 5.05),
    p("Roussillon", 43.9, 5.29),
    p("Valensole", 43.84, 5.98, { via: true }),
    p("Verdon Gorge", 43.8, 6.25),
    p("Moustiers-Sainte-Marie", 43.85, 6.22),
    p("Cannes", 43.55, 7.02),
    p("Saint-Tropez", 43.27, 6.64),
    p("Port Grimaud", 43.27, 6.58),
    p("Nice", 43.7, 7.27),
    p("Èze", 43.73, 7.36),
    p("Monaco", 43.74, 7.42),
    p("Menton", 43.78, 7.5),
    p("Nice", 43.7, 7.27),
  ],
  // "Verona → Bolzano by rail" is all the description states; no day-by-day plan yet.
  italy: [p("Verona", 45.44, 10.99), p("Bolzano", 46.5, 11.35)],
  scotland: [
    p("Edinburgh", 55.95, -3.19),
    p("Pitlochry", 56.7, -3.73),
    p("Inverness", 57.48, -4.22),
    p("Eilean Donan", 57.27, -5.52),
    p("Isle of Skye", 57.41, -6.19),
    p("Old Man of Storr", 57.51, -6.18),
    p("Neist Point", 57.42, -6.79),
    p("Fairy Pools", 57.25, -6.27),
    p("Glenfinnan", 56.87, -5.43),
    p("Glencoe", 56.68, -5.1),
    p("Glen Etive", 56.6, -5.0),
    p("Glasgow", 55.86, -4.25),
    p("Edinburgh", 55.95, -3.19),
  ],
  "oktoberfest-dolomites": [
    p("Munich", 48.14, 11.58),
    p("Vaduz", 47.14, 9.52),
    p("St. Moritz", 46.5, 9.84),
    p("Bellagio", 45.99, 9.26),
    p("Varenna", 46.01, 9.28),
    p("Vermiglio", 46.3, 10.69),
    p("Ortisei", 46.57, 11.67),
    p("Seceda", 46.6, 11.73),
    p("Santa Maddalena", 46.64, 11.72),
    p("Seiser Alm", 46.54, 11.62),
    p("Lago di Braies", 46.69, 12.08),
    p("Tre Cime di Lavaredo", 46.62, 12.3),
    p("Olpererhütte", 47.05, 11.66),
  ],
  lapland: [
    p("Rovaniemi", 66.5, 25.73),
    p("Santa Claus Village", 66.54, 25.85),
    p("Pyhätunturi", 67.02, 27.15),
    p("Rovaniemi", 66.5, 25.73),
  ],
  japan: [
    p("Osaka", 34.69, 135.5),
    p("Hiroshima", 34.39, 132.46),
    p("Kobe", 34.69, 135.2),
    p("Osaka", 34.69, 135.5),
    p("Kyoto", 35.01, 135.77),
    p("Nara", 34.68, 135.8),
    p("Kyoto", 35.01, 135.77),
    p("Fushimi Inari", 34.97, 135.77),
    p("Mishima", 35.12, 138.92, { via: true }),
    p("Kawaguchiko", 35.5, 138.76),
    p("Tokyo", 35.68, 139.76),
    p("Kamakura", 35.32, 139.55),
    p("Yokohama", 35.44, 139.64),
    p("Tokyo", 35.68, 139.76),
    p("Tokyo Disneyland", 35.63, 139.88),
    p("Hakone", 35.23, 139.1),
    p("Tokyo", 35.68, 139.76),
  ],
  "toronto-new-york": [
    p("Toronto", 43.65, -79.38),
    p("Toronto Islands", 43.62, -79.38),
    p("Niagara Falls", 43.08, -79.07),
    p("New York", 40.75, -73.99),
    p("Central Park", 40.78, -73.97),
    p("Downtown", 40.71, -74.01),
    p("West Village", 40.73, -74.0),
    p("Brooklyn", 40.69, -73.99),
    p("Coney Island", 40.57, -73.98),
    p("New York", 40.75, -73.99),
  ],
};
