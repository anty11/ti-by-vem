import type { Lang } from "./i18n";

export type ItineraryText = {
  country: string;
  title: string;
  stops: string;
  blurb: string;
  highlights: string[];
};

export type ItineraryStatus = "live" | "soon";

export type Itinerary = ItineraryText & {
  slug: string;
  /** "live" = ready to download, "soon" = we travel it next, together */
  status: ItineraryStatus;
  /** When a "soon" trip goes live, e.g. "January 2027" */
  when?: string;
  whenSk?: string;
  days: number;
  budget: string;
  accent: "terracotta" | "royal" | "sage" | "gold" | "lilac";
  /** Map position in the 700x500 SVG viewBox */
  x: number;
  y: number;
  sk: ItineraryText;
};

export const itineraries: Itinerary[] = [
  {
    slug: "switzerland",
    status: "soon",
    when: "January 2027",
    whenSk: "január 2027",
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
    sk: {
      country: "Švajčiarsko",
      title: "Zimná rozprávka",
      stops: "3 doliny",
      blurb: "Vlaky namiesto požičaného auta, lanovky za východu slnka a dlhé sánkarské zjazdy. Dedinské sauny sú zadarmo.",
      highlights: [
        "Švajčiarske vlakové pasy v zime porazia požičané auto",
        "Lanovka za východu slnka, dlhé sánkarské zjazdy, sauny v dedine zadarmo",
        "Jedno priplatenie: fondue v horskej chate po zotmení",
      ],
    },
  },
  {
    slug: "riviera",
    status: "live",
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
    sk: {
      country: "Francúzsko",
      title: "Francúzska riviéra autom",
      stops: "5 miest",
      blurb: "Požičané auto s už prepočítaným palivom. Trhy, skryté zátoky a dedinky na kopcoch medzi slávnymi zastávkami.",
      highlights: [
        "Požičané auto s už prepočítaným palivom",
        "Trhy, skryté zátoky a dedinky na kopcoch medzi slávnymi zastávkami",
        "Jedno priplatenie: večera pri mori, ktorú rezervujete mesiac dopredu",
      ],
    },
  },
  {
    slug: "italy",
    status: "live",
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
    sk: {
      country: "Taliansko",
      title: "Okruh Dolomitmi",
      stops: "4 regióny",
      blurb: "Vlakom hore, pešo dole, a znova. Rozpočet na štart túry, priplatenie v horskej chate.",
      highlights: [
        "Verona → Bolzano vlakom, lanovkou hore za svitania",
        "Prechod z chaty do chaty s rozpočtom na balený obed",
        "Jedno priplatenie: večera v rifugiu nad oblakmi",
      ],
    },
  },
];

export function itineraryText(item: Itinerary, lang: Lang): ItineraryText {
  if (lang === "sk") return item.sk;
  return {
    country: item.country,
    title: item.title,
    stops: item.stops,
    blurb: item.blurb,
    highlights: item.highlights,
  };
}

export type Tier = {
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  price: string;
  unit: string;
  accent: "royal" | "terracotta";
  features: string[];
  cta: string;
  featured: boolean;
};

export const tiers: Tier[] = [
  {
    name: "Guide + Chat",
    eyebrow: "I want the route, my way",
    tagline: "Open it. Ask it. Go.",
    description:
      "Our exact route, plus a trip chatbot that answers, shortens, extends and reshapes it around your dates.",
    price: "€29",
    unit: "/ trip",
    accent: "royal",
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
    accent: "terracotta",
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

const tiersSk: Tier[] = [
  {
    name: "Guide + Chat",
    eyebrow: "Chcem trasu po svojom",
    tagline: "Otvor. Opýtaj sa. Choď.",
    description:
      "Naša presná trasa plus chatbot k ceste, ktorý odpovedá, skracuje, predlžuje a prispôsobí ju vašim termínom.",
    price: "29 €",
    unit: "/ cesta",
    accent: "royal",
    features: [
      "Itinerár v pohybe, deň po dni",
      "Reálny odhad rozpočtu a detaily rezervácií",
      "Chatbot k ceste na otázky a zmeny",
      "Naše overené úspory a jedno priplatenie, ktoré stojí za to",
    ],
    cta: "Vybrať Guide + Chat",
    featured: true,
  },
  {
    name: "Guide + Us",
    eyebrow: "Chcem V & eM po boku",
    tagline: "Dve cestovateľky vo vašom tíme.",
    description:
      "Pre cestu, ktorá si zaslúži ľudský rozhovor, úprimný názor a rozhodnutia robené spoločne.",
    price: "99 €",
    unit: "/ cesta",
    accent: "terracotta",
    features: [
      "Všetko z Guide + Chat",
      "Prístup do WhatsApp skupiny travel intelligence by VeM",
      "Priamy kontakt s Veronikou a Monikou",
      "Osobné rozhodnutia prekonzultované s nami",
    ],
    cta: "Napíšte nám",
    featured: false,
  },
];

export const tiersByLang: Record<Lang, Tier[]> = { en: tiers, sk: tiersSk };

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
