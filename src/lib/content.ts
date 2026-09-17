export type Itinerary = {
  slug: string;
  country: string;
  title: string;
  days: number;
  stops: string;
  budget: string;
  blurb: string;
  accent: "terracotta" | "royal" | "sage" | "gold" | "lilac";
  /** Map position in the 400x320 SVG viewBox */
  x: number;
  y: number;
  highlights: string[];
};

export const itineraries: Itinerary[] = [
  {
    slug: "portugal",
    country: "Portugal",
    title: "Lisbon to the coast",
    days: 9,
    stops: "3 cities",
    budget: "~€1,180",
    blurb: "Coastal trains, hidden miradouros and one long tasting dinner where you go all in.",
    accent: "terracotta",
    x: 100,
    y: 225,
    highlights: [
      "Lisbon on foot, then the early train to Sintra",
      "Porto by tram, two nights, cheap and brilliant",
      "One splurge: a tasting dinner above the river",
    ],
  },
  {
    slug: "italy",
    country: "Italy",
    title: "The Dolomites loop",
    days: 12,
    stops: "4 regions",
    budget: "~€1,640",
    blurb: "Ride the train up, hike down, repeat. Budgeted for the trailhead, splurge at the rifugio.",
    accent: "sage",
    x: 200,
    y: 200,
    highlights: [
      "Verona → Bolzano by rail, cable car up at dawn",
      "Hut-to-hut hiking with a packed lunch budget",
      "One splurge: a rifugio dinner above the clouds",
    ],
  },
  {
    slug: "sweden",
    country: "Sweden",
    title: "Stockholm & the archipelago",
    days: 8,
    stops: "2 cities",
    budget: "~€1,320",
    blurb: "Ferry-hopping between islands, a quiet sauna, and one unforgettable midnight sun dinner.",
    accent: "royal",
    x: 235,
    y: 150,
    highlights: [
      "Island ferries on a transit pass, not a tour",
      "Free saunas, cold water, long light evenings",
      "One splurge: dinner on the water at midnight",
    ],
  },
  {
    slug: "iceland",
    country: "Iceland",
    title: "The ring road, split",
    days: 10,
    stops: "Full loop",
    budget: "~€1,540",
    blurb: "A moving loop with the car cost split, hot springs for free and one night you'll remember.",
    accent: "gold",
    x: 150,
    y: 110,
    highlights: [
      "Car shared four ways, groceries over restaurants",
      "Wild hot springs instead of the famous queue",
      "One splurge: a glass-roof cabin in the east",
    ],
  },
  {
    slug: "france",
    country: "France",
    title: "South by slow train",
    days: 11,
    stops: "5 towns",
    budget: "~€1,420",
    blurb: "Regional trains down to the Mediterranean, markets for lunch, one long table at night.",
    accent: "lilac",
    x: 195,
    y: 135,
    highlights: [
      "Regional rail passes, no high-speed premiums",
      "Market lunches and evening swims",
      "One splurge: a table you book a month ahead",
    ],
  },
  {
    slug: "croatia",
    country: "Croatia",
    title: "Adriatic, always moving",
    days: 9,
    stops: "4 islands",
    budget: "~€1,090",
    blurb: "Buses and ferries down the coast, rooms above bakeries, one night on the water.",
    accent: "royal",
    x: 255,
    y: 225,
    highlights: [
      "Coastal buses and island ferries, booked local",
      "Apartments over hotels, breakfast from the bakery",
      "One splurge: a private boat afternoon",
    ],
  },
  {
    slug: "poland",
    country: "Poland",
    title: "Kraków to the lakes",
    days: 8,
    stops: "3 regions",
    budget: "~€860",
    blurb: "The cheapest week that still feels rich. Night trains, forests and one perfect meal.",
    accent: "terracotta",
    x: 285,
    y: 165,
    highlights: [
      "Night trains that double as accommodation",
      "Milk bars, forests, and long walking days",
      "One splurge: a tasting menu in Kraków",
    ],
  },
  {
    slug: "greece",
    country: "Greece",
    title: "Island hops, off-season",
    days: 10,
    stops: "5 islands",
    budget: "~€1,150",
    blurb: "Ferry timetables we already solved, tavernas we'd go back to, one hotel worth the money.",
    accent: "sage",
    x: 285,
    y: 245,
    highlights: [
      "Ferry chains that actually connect",
      "Family tavernas over waterfront prices",
      "One splurge: a cliffside room for a night",
    ],
  },
  {
    slug: "slovenia",
    country: "Slovenia",
    title: "Alps to the sea",
    days: 7,
    stops: "3 regions",
    budget: "~€780",
    blurb: "Mountains in the morning, the Adriatic by Friday. Small country, maximum movement.",
    accent: "lilac",
    x: 175,
    y: 235,
    highlights: [
      "Buses to the valleys, bikes in the towns",
      "Farm stays and mountain huts",
      "One splurge: dinner in a Michelin-listed inn",
    ],
  },
];

export const tiers = [
  {
    name: "The Guide",
    tagline: "The smart baseline",
    price: "€49",
    unit: "/ trip",
    accent: "royal" as const,
    features: [
      "Full moving itinerary, day by day",
      "Budget estimate + exact travel details",
      "Instant digital delivery",
    ],
    cta: "Start here",
    featured: false,
  },
  {
    name: "The Companion",
    tagline: "Talk to it, reshape it",
    price: "€129",
    unit: "/ trip",
    accent: "gold" as const,
    features: [
      "Everything in The Guide",
      "Trip chat to make changes as you go",
      "Personalised rerouting and re-budgeting",
    ],
    cta: "Go Companion",
    featured: true,
  },
  {
    name: "The Letter",
    tagline: "Monthly membership",
    price: "€19",
    unit: "/ month",
    accent: "lilac" as const,
    features: [
      "A physical card + letter every month",
      "One country's story, in depth",
      "Our travel intelligence, delivered",
    ],
    cta: "Subscribe",
    featured: false,
  },
];

export const accentText: Record<string, string> = {
  terracotta: "text-terracotta",
  royal: "text-royal",
  sage: "text-sage",
  gold: "text-gold",
  lilac: "text-lilac",
};

export const accentBg: Record<string, string> = {
  terracotta: "bg-terracotta",
  royal: "bg-royal",
  sage: "bg-sage",
  gold: "bg-gold",
  lilac: "bg-lilac",
};

export const accentHex: Record<string, string> = {
  terracotta: "var(--terracotta)",
  royal: "var(--royal)",
  sage: "var(--sage)",
  gold: "var(--gold)",
  lilac: "var(--lilac)",
};
