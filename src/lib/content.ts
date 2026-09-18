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
    slug: "switzerland",
    country: "Switzerland",
    title: "Winter wonderland",
    days: 8,
    stops: "3 valleys",
    budget: "~€1,480",
    blurb: "Trains over rental cars, cable cars at sunrise and long sledding runs. Village saunas are free.",
    accent: "royal",
    x: 350,
    y: 322,
    highlights: [
      "Swiss rail passes beat rental cars in winter",
      "Cable car at sunrise, long sledding runs, free village saunas",
      "One splurge: a mountain-hut fondue dinner after dark",
    ],
  },
  {
    slug: "riviera",
    country: "France",
    title: "French Riviera by car",
    days: 9,
    stops: "5 towns",
    budget: "~€1,350",
    blurb: "Rental car with the fuel maths already done. Markets, beach coves and hilltop villages between the famous stops.",
    accent: "terracotta",
    x: 302,
    y: 342,
    highlights: [
      "Rental car with the fuel maths already done",
      "Markets, beach coves and hilltop villages between the famous stops",
      "One splurge: a seafront dinner you book a month ahead",
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
    x: 355,
    y: 356,
    highlights: [
      "Verona → Bolzano by rail, cable car up at dawn",
      "Hut-to-hut hiking with a packed lunch budget",
      "One splurge: a rifugio dinner above the clouds",
    ],
  },
];

export const tiers = [
  {
    name: "Guide + Chat",
    eyebrow: "I want the route, my way",
    tagline: "Open it. Ask it. Go.",
    description:
      "Our exact route, plus a trip chatbot that answers, shortens, extends and reshapes it around your dates.",
    price: "€29",
    unit: "/ trip",
    accent: "royal" as const,
    features: [
      "Moving itinerary, day by day",
      "Real budget estimate and booking details",
      "Trip chatbot for questions and changes",
      "Our tested saves and one worthwhile splurge",
    ],
    cta: "Choose Guide + Chat",
    featured: true,
  },
  {
    name: "Guide + Us",
    eyebrow: "I want V & eM beside me",
    tagline: "Two travellers in your corner.",
    description:
      "For the trip that deserves a human conversation, honest opinions and decisions made together.",
    price: "€99",
    unit: "/ trip",
    accent: "terracotta" as const,
    features: [
      "Everything in Guide + Chat",
      "Access to the travel intelligence by VeM WhatsApp group",
      "Direct contact with Veronika and Monika",
      "Personal decisions checked with us",
    ],
    cta: "Talk to us",
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
