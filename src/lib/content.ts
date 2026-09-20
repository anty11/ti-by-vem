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
  /** ISO date the "soon" trip goes live — powers the countdown */
  launchDate?: string;
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
    launchDate: "2027-01-28T09:00:00+01:00",
    country: "Switzerland & France",
    title: "Winter wonderland",
    days: 10,
    stops: "Zürich → Geneva, 5 towns",
    budget: "~€3,800–4,600",
    blurb:
      "Ten winter days by train, open jaw: into Zürich, home from Geneva. THE ICE on the frozen lake in St. Moritz, the Glacier Express in Excellence class, skiing under the Matterhorn and Mont Blanc from the Aiguille du Midi.",
    accent: "royal",
    x: 350,
    y: 322,
    highlights: [
      "Two peaks: THE ICE in St. Moritz (28–30 Jan) and the Glacier Express in Excellence class",
      "Zermatt car-free, Gornergrat at sunrise and three ski days under the Matterhorn",
      "Across into France: Chamonix, the Aiguille du Midi cable car, then two slow days in Geneva",
      "Trains all the way, no rental car — fly into Zürich, fly home from Geneva",
      "Budget ~€3,800–4,600 per person in a twin room, everything included and all figures indicative",
    ],
    sk: {
      country: "Švajčiarsko a Francúzsko",
      title: "Zimná rozprávka",
      stops: "Zürich → Ženeva, 5 miest",
      blurb:
        "Desať zimných dní vlakom, open jaw: prílet do Zürichu, odlet zo Ženevy. THE ICE na zamrznutom jazere v St. Moritzi, Glacier Express v triede Excellence, lyžovačka pod Matterhornom a Mont Blanc z Aiguille du Midi.",
      highlights: [
        "Dva vrcholy cesty: THE ICE v St. Moritzi (28. – 30. 1.) a Glacier Express v triede Excellence",
        "Zermatt bez áut, Gornergrat za východu slnka a tri dni lyžovania pod Matterhornom",
        "Prechod do Francúzska: Chamonix, lanovka na Aiguille du Midi a dva pokojné dni v Ženeve",
        "Celá cesta vlakom, bez požičaného auta — prílet Zürich, odlet Ženeva",
        "Rozpočet ~3 800 – 4 600 € na osobu v dvojlôžkovej izbe, všetko vrátane a všetky sumy orientačné",
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
  {
    slug: "scotland",
    status: "live",
    country: "Scotland",
    title: "The Highlands loop",
    days: 10,
    stops: "5 glens",
    budget: "~€1,520",
    blurb: "Single-track roads, wild lochs and castle ruins you have mostly to yourselves. Ferries budgeted in, midges planned around.",
    accent: "lilac",
    x: 228,
    y: 170,
    highlights: [
      "North Coast 500 highlights without the tour-bus stops",
      "Isle of Skye ferry and a bothy-style picnic budget",
      "One splurge: a whisky distillery tasting with a local guide",
    ],
    sk: {
      country: "Škótsko",
      title: "Okruh Highlands",
      stops: "5 údolí",
      blurb: "Úzke cesty s jedným pruhom, divoké jazerá a zrúcaniny hradov, ktoré máte prevažne sami. Trajekty v rozpočte, komáre v pláne.",
      highlights: [
        "Pýcha North Coast 500 bez zastávok pre zájazdové autobusy",
        "Trajekt na ostrov Skye a rozpočet na piknik v bothy štýle",
        "Jedno priplatenie: degustácia v whisky palírni s lokálnym sprievodcom",
      ],
    },
  },
];

export function itineraryWhen(item: Itinerary, lang: Lang): string | undefined {
  return lang === "sk" ? item.whenSk ?? item.when : item.when;
}

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
