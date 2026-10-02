import type { Lang } from "./i18n";

export type ItineraryText = {
  country: string;
  title: string;
  stops: string;
  blurb: string;
  highlights: string[];
};

export type ItineraryStatus = "live" | "soon" | "beyond";

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
  /** Overrides the default Guide + Chat price for this trip, e.g. "€9" */
  chatPrice?: string;
  chatPriceSk?: string;
  accent: "terracotta" | "royal" | "sage" | "gold" | "lilac";
  /** Map position in the 700x500 SVG viewBox */
  x: number;
  y: number;
  /** Personal italic note shown on the trip page, e.g. "eM's bucket list trip" */
  personalNote?: string;
  sk: ItineraryText;
};

export const itineraries: Itinerary[] = [
  {
    slug: "toronto-new-york",
    status: "beyond",
    country: "Canada & USA",
    title: "Toronto, Niagara & New York",
    days: 14,
    stops: "Toronto → New York",
    budget: "~€3,900",
    chatPrice: "€39",
    chatPriceSk: "39 €",
    blurb:
      "Fourteen days across an ocean: three days in Toronto, the falls from the water, a panoramic train south and a very long, very full week in New York.",
    accent: "lilac",
    x: 0,
    y: 0,
    highlights: [
      "Toronto on foot, from the waterfront to the markets, with a ball game in the evening",
      "Niagara from a boat, at sunset and again at sunrise from a room with the view",
      "A ten-hour panoramic train down to Penn Station, then New York day by day",
    ],
    sk: {
      country: "Kanada a USA",
      title: "Toronto, Niagara a New York",
      stops: "Toronto → New York",
      blurb:
        "Štrnásť dní za oceánom: tri dni v Toronte, vodopády z lode, panoramatický vlak na juh a veľmi dlhý, veľmi plný týždeň v New Yorku.",
      highlights: [
        "Toronto pešo, od nábrežia po trhy, a večer zápas",
        "Niagara z lode, pri západe slnka a znova pri východe z izby s výhľadom",
        "Desaťhodinový panoramatický vlak na Penn Station a potom New York deň po dni",
      ],
    },
  },
  {
    slug: "japan",
    status: "beyond",
    country: "Japan",
    title: "Japan, from Osaka to Tokyo",
    days: 18,
    stops: "Osaka → Tokyo",
    budget: "~€4,800",
    chatPrice: "€39",
    chatPriceSk: "39 €",
    blurb:
      "Eighteen days across Japan: Osaka's neon and street food, a day in Hiroshima, Kyoto in a kimono, a night under Mt. Fuji and a long, full week in Tokyo.",
    accent: "terracotta",
    x: 0,
    y: 0,
    highlights: [
      "Osaka by night, from Dotonbori to a day trip to Hiroshima and the canals of Kurashiki",
      "Kyoto slowly: bamboo forest, a tea ceremony in kimono and a ring you make yourself",
      "A night in an onsen hotel facing Mt. Fuji, then Tokyo — Shibuya Sky, teamLab and Disneyland",
    ],
    sk: {
      country: "Japonsko",
      title: "Japonsko, z Osaky do Tokia",
      stops: "Osaka → Tokio",
      blurb:
        "Osemnásť dní naprieč Japonskom: neóny a street food Osaky, deň v Hirošime, Kjoto v kimone, noc pod horou Fudži a dlhý, plný týždeň v Tokiu.",
      highlights: [
        "Osaka v noci, od Dotonbori po jednodňový výlet do Hirošimy a kanály Kurašiki",
        "Kjoto pomaly: bambusový les, čajový obrad v kimone a prsteň, ktorý si vyrobíte sami",
        "Noc v onsen hoteli s výhľadom na Fudži a potom Tokio — Shibuya Sky, teamLab a Disneyland",
      ],
    },
  },
  {
    slug: "dolomites-winter",
    status: "live",
    country: "Italy & Austria",
    title: "Dolomites in winter",
    days: 8,
    stops: "Cortina → Merano",
    budget: "~€1,250",
    chatPrice: "€9",
    chatPriceSk: "9 €",
    blurb:
      "Eight winter days by car, from Cortina d'Ampezzo across to Merano. Ski days, a frozen lake, a long toboggan run and evenings in warm mountain hotels.",
    accent: "gold",
    x: 372,
    y: 348,
    highlights: [
      "Three ski days on very different mountains, including one famous Olympic run",
      "A frozen lake to skate on and one of the longest toboggan rides in the Alps",
      "Two hotel bases, a wellness night near the end and the passes we drive for the light",
    ],
    sk: {
      country: "Taliansko a Rakúsko",
      title: "Dolomity v zime",
      stops: "Cortina → Merano",
      blurb:
        "Osem zimných dní autom, z Cortiny d'Ampezzo až do Merana. Lyžovačka, zamrznuté jazero, dlhá sánkarská dráha a večery v teplých horských hoteloch.",
      highlights: [
        "Tri dni lyžovania na úplne odlišných horách vrátane jednej slávnej olympijskej zjazdovky",
        "Zamrznuté jazero na korčuľovanie a jedna z najdlhších sánkarských dráh v Alpách",
        "Dve hotelové základne, wellness večer v závere a priesmyky, na ktoré jazdíme kvôli svetlu",
      ],
    },
  },
  {
    slug: "oslo-tromso",
    status: "live",
    country: "Norway",
    title: "Oslo & Tromsø",
    days: 6,
    stops: "Oslo → Tromsø",
    budget: "~€2,200",
    chatPrice: "€9",
    chatPriceSk: "9 €",
    blurb:
      "Six days, two very different Norways: Oslo by the water, a wellness day to recover, then a flight north above the Arctic Circle for the Arctic Cathedral, a cable-car view and a night spent hunting the northern lights.",
    accent: "royal",
    x: 378,
    y: 131,
    highlights: [
      "Oslo's waterfront by night and by day, from the opera to Aker Brygge",
      "A full wellness day at The Well before flying north",
      "Tromsø: reindeer hot dogs, the Arctic Cathedral and a northern-lights hunt",
    ],
    sk: {
      country: "Nórsko",
      title: "Oslo a Tromsø",
      stops: "Oslo → Tromsø",
      blurb:
        "Šesť dní, dve úplne odlišné Nórska: Oslo pri vode, deň wellness na oddych a potom let na sever za polárny kruh — Arktická katedrála, výhľad z lanovky a noc strávená lovom polárnej žiary.",
      highlights: [
        "Oslské nábrežie v noci aj za dňa, od opery po Aker Brygge",
        "Celý deň wellness v The Well ešte pred letom na sever",
        "Tromsø: reindeer hotdogy, Arktická katedrála a lov polárnej žiary",
      ],
    },
  },
  {
    slug: "switzerland",
    status: "soon",
    when: "January 2027",
    whenSk: "január 2027",
    launchDate: "2027-01-28T09:00:00+01:00",
    country: "Switzerland & France",
    title: "Winter wonderland",
    days: 10,
    stops: "Zürich → Geneva",
    budget: "~€4,200",
    blurb: "Ten winter days by train, from Zürich to Geneva. Two mountain countries, one frozen lake and a few moments we would fly back for.",
    accent: "royal",
    x: 350,
    y: 322,
    personalNote: "eM's bucket list trip",
    highlights: [
      "Two peaks we plan the whole route around — you will know them the moment you see them",
      "Trains all the way, no rental car: fly into Zürich, fly home from Geneva",
      "Three ski days in a car-free village, then across the border into France",
    ],
    sk: {
      country: "Švajčiarsko a Francúzsko",
      title: "Zimná rozprávka",
      stops: "Zürich → Ženeva",
      blurb: "Desať zimných dní vlakom, zo Zürichu do Ženevy. Dve horské krajiny, jedno zamrznuté jazero a chvíle, pre ktoré by sme sa vrátili.",
      highlights: [
        "Dva vrcholy, okolo ktorých staviame celú trasu — spoznáte ich hneď, ako ich uvidíte",
        "Celá cesta vlakom, bez požičaného auta: prílet do Zürichu, odlet zo Ženevy",
        "Tri dni lyžovania v dedine bez áut a potom prechod do Francúzska",
      ],
    },
  },
  {
    slug: "riviera",
    status: "live",
    country: "France",
    title: "French Riviera by car",
    days: 7,
    stops: "Marseille → Menton",
    budget: "~€1,850",
    blurb: "One rental car from Marseille to Nice. Provence hilltop villages, the Verdon Gorge, Saint-Tropez beach clubs and a night in Monaco.",
    accent: "terracotta",
    x: 302,
    y: 342,
    highlights: [
      "Marseille → Nice open jaw, one rental car the whole way",
      "Verdon Gorge by pedal boat and the ochre cliffs of Roussillon",
      "Saint-Tropez beach clubs and an evening in Monte Carlo",
    ],
    sk: {
      country: "Francúzsko",
      title: "Francúzska riviéra autom",
      stops: "Marseille → Menton",
      blurb: "Jedno požičané auto z Marseille do Nice. Dedinky na kopcoch Provensálska, kaňon Verdon, beach kluby Saint-Tropez a noc v Monaku.",
      highlights: [
        "Prílet do Marseille, odlet z Nice — jedno auto po celú cestu",
        "Kaňon Verdon na šlapadle a okrové bralá Roussillonu",
        "Beach kluby Saint-Tropez a večer v Monte Carle",
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
      "Discord community with every VeM traveller",
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
      "Direct contact with V and eM",
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
      "Discord komunita so všetkými cestovateľmi VeM",
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

/** Only trips that sit on the European map */
export const europeanItineraries = itineraries.filter((item) => item.status !== "beyond");
