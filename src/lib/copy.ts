import type { Lang } from "./i18n";

export type LeadSegment = { text: string; i?: boolean; c?: "terracotta" | "royal" };

const en = {
  nav: {
    itineraries: "Itineraries",
    packages: "Packages",
    postcard: "Postcard",
    about: "V & eM",
    viewPackages: "View packages",
    homeLabel: "travel intelligence by VeM home",
  },
  footer: {
    tagline: "Routes lived by Veronika & Monika.",
    terms: "Terms",
    privacy: "Privacy",
    delivery: "Delivery",
    contact: "Contact",
  },
  map: {
    eyebrow: "Europe, tested by us",
    hint: "Choose a country to open its travel intelligence.",
    guide: "guide",
    guides: "guides",
    days: "days",
    ariaMap: "Interactive map of Europe",
  },
  card: {
    days: "days",
    perPerson: "/ person",
    open: "Open",
    buy: "Buy",
    live: "Ready to download",
    soon: "Coming soon",
    notify: "Notify me",
    notifySubject: "Waiting list",
  },
  tiers: {
    featured: "Most alive",
  },
  home: {
    title: "travel intelligence by VeM — Europe, already figured out",
    description:
      "European routes personally travelled by Veronika and Monika, with realistic budgets, exact connections and decisions that make every euro count.",
    ogTitle: "travel intelligence by VeM",
    ogDescription:
      "Not another list of sights. Travel intelligence from European routes we have lived ourselves.",
    badge: "Travel intelligence by VeM",
    h1a: "Trips you ",
    h1em1: "create",
    h1b: ", not routes you simply ",
    h1em2: "download",
    h1c: ".",
    lead:
      "Always-moving European routes we have travelled ourselves. Real budgets, exact connections and the choices that actually matter.",
    ctaMap: "Explore the map",
    ctaPackages: "See the packages",
    ctaPostcard: "Postcard club",
    benefit1: "Budget included",
    benefit2: "Exact travel details",
    benefit3: "Travelled by us",
    onMap: "On the map",
    onMapTitle: "Travel intelligence in motion",
    viewAll: "View all →",
    packagesEyebrow: "Choose how we travel with you",
    packagesTitle: "Take the guide with chat. Or take the two of us with it.",
    packagesText:
      "Two clear options, one place to compare them. The VeM WhatsApp group opens with Guide + Us.",
    packagesNoteA: "Rather just a hello in your letterbox? The ",
    packagesNoteLink: "Postcard club",
    packagesNoteB: " runs separately at €12/month.",
    packagesCta: "Open packages →",
    postcardEyebrow: "A postcard, not a guide · €12/month",
    postcardTitle: "A small hello from somewhere we remember.",
    postcardText:
      "One physical postcard from a place we have visited. No route, budget or advice — simply a personal note from V & eM in your letterbox.",
    postcardCta: "Discover the postcard",
    pc1From: "From Portugal",
    pc1Title: "Wish you were here.",
    pc1Text: "Sea air, blue tiles and a few lines written just for you.",
    pc2From: "From Iceland",
    pc2Title: "Hello from the north.",
    pc2Text: "A windy memory, a stamp and our handwriting.",
    foundersEyebrow: "The two behind it",
    foundersTitle: "Real people, real miles",
    vRole: "Routes & details",
    vText: "The connections and practical choices that keep a trip moving.",
    mRole: "Stories & perspective",
    mText: "The moments and observations that make a place stay with you.",
  },
  itineraries: {
    title: "European itineraries — travel intelligence by VeM",
    description:
      "Every route we've walked, with days, budget estimates and travel details. Pick a country on the map or browse the full list.",
    ogDescription:
      "European routes travelled by Veronika and Monika, with honest budgets and exact details.",
    eyebrow: "The map",
    liveTitle: "Ready to download",
    liveLead: "Finished routes. Full guide, budget and travel details in your inbox today.",
    soonTitle: "Coming next — travel it with us",
    soonLead: "Routes we are planning right now. Join the list and you can live them together with us.",
    h1: "Start with a country.",
    lead:
      "Every pin is a route we've run ourselves. Click one to see the shape of the trip, what it costs, and where we'd spend the extra.",
  },
  detail: {
    back: "← All itineraries",
    titleSuffix: "itinerary",
    onTheMove: "On the move",
    days: "days",
    ground: "Ground covered",
    budget: "Budget estimate",
    shape: "What the trip looks like",
    note:
      "The full guide adds the day-by-day plan, every connection, booking detail and the budget broken down line by line — with a trip chatbot in both packages. Choose Guide + Us to also join the “travel intelligence by VeM” WhatsApp group.",
    buyEyebrow: "Buy this route",
    buyTitlePrefix: "Take",
    buyTitleSuffix: "with you",
    buyText:
      "Every package includes the full day-by-day guide, the budget broken down line by line and all travel details — delivered straight to your inbox.",
    buyChat: "Buy Guide + Chat · €29",
    buyUs: "Buy Guide + Us · €99",
    buySubjectChat: "Buy Guide + Chat",
    buySubjectUs: "Buy Guide + Us",
    buyNote:
      "Clicking a button opens a pre-filled email to us — we send the guide and your chat access within 24 hours.",
    soonEyebrow: "Coming soon",
    soonTitle: "This route is still being travelled",
    soonText: "We are planning this trip right now. Leave us a note and you will be first to get the guide — or come along and live it with us.",
    soonCta: "Put me on the list",
    soonSubject: "Waiting list",
    compare: "Compare the packages",
    unavailable: "Unavailable",
  },
  pricing: {
    title: "Travel guide packages — travel intelligence by VeM",
    description:
      "Compare two travel guide packages: guide with trip chatbot, or direct communication with Veronika and Monika.",
    ogDescription: "Choose how much support you want around your European route.",
    eyebrow: "Choose your way in",
    h1a: "The route is ready. ",
    h1em: "How far",
    h1b: " do you want to make it yours?",
    lead:
      "No generic PDF and no endless planning spiral. Begin with a journey we have actually lived, then choose how much freedom and human help you want around it.",
    cta: "Find my package",
    notesAria: "Notes from Veronika and Monika",
    note1a: "Save on the train.",
    note1b: "Splurge on the view.",
    note1c: "— one of our favourite rules",
    note2Eyebrow: "Field note 27",
    note2: "The best route is rarely a straight line.",
    packagesEyebrow: "One route. Two experiences.",
    packagesTitle: "Pick the distance between us.",
    packagesText:
      "Both options begin with tested travel intelligence and a chatbot that reshapes the trip: where to move, what it really costs and which detail saves the day.",
    diffEyebrow: "What changes between them",
    diffTitle: "From our notebook to your own trip.",
    bothPackages: "In both packages",
    onlyUs: "Only in Guide + Us",
    diff1Title: "The intelligence",
    diff1Text:
      "A moving day-by-day route, exact transport logic, realistic costs and the places worth spending more on.",
    diff2Title: "The conversation",
    diff2Text:
      "A trip chatbot that answers questions and reshapes the route around your dates and rhythm.",
    diff3Title: "The two of us",
    diff3Text:
      "Direct communication with Veronika and Monika, plus the travel intelligence by VeM WhatsApp group.",
    ctaEyebrow: "Not ready to choose?",
    ctaTitle: "Start with a place that pulls you in.",
    ctaText:
      "Explore the routes first. The right level of support usually becomes obvious once you see where you are going.",
    ctaButton: "Explore itineraries",
    postcardNoteA:
      "Looking for the €12 monthly postcard? It is a personal hello, completely separate from our guides. ",
    postcardNoteLink: "See the postcard",
  },
  letters: {
    title: "Monthly travel postcard — travel intelligence by VeM",
    description:
      "For €12 a month, receive a physical personal greeting from a place Veronika and Monika have visited.",
    ogTitle: "Monthly travel postcard · €12",
    ogDescription: "A small personal hello from somewhere Veronika and Monika have been.",
    eyebrow: "Postcard club · €12/month",
    h1: ["Every month, one country.", "One letter, and a little surprise."],
    lead: [
      [
        { text: "Once a month we sit down and write to you about a single country we have travelled, " },
        { text: "by hand, on paper", i: true },
        { text: ", and send it anywhere in the world. Inside every envelope you will always find " },
        { text: "a postcard from the road", c: "terracotta" },
        { text: " and " },
        { text: "one small surprise", c: "terracotta" },
        { text: ", sometimes " },
        { text: "a recipe we fell in love with", i: true },
        { text: ", sometimes a quiet tip only locals seem to know, and often " },
        { text: "a song tied to that very place", i: true },
        { text: ", the one that plays in our memory whenever we think of it, waiting for you behind a little QR code. " },
        { text: "What exactly arrives stays a secret until you open it.", i: true, c: "royal" },
      ],
      [
        { text: "One fixed price, " },
        { text: "twelve euros a month", c: "terracotta" },
        { text: ", wherever you are on the map, and every letter is " },
        { text: "yours to keep", i: true },
        { text: ". It is our way of taking you along with us, slowly, one country and one envelope at a time." },
      ],
    ] satisfies LeadSegment[][],
    cta: "Subscribe · €12/month",
    subject: "Postcard club",
    stampEyebrow: "Postmarked somewhere",
    stampTitle: "Hello from Portugal",
    stampText: "Wish you were here.",
    letterOpen: "Dear traveller,",
    letterText: "We saw this place and thought it deserved more than a camera roll...",
    f1Title: "One real postcard",
    f1Text: "A physical card selected and sent by us, with a short personal greeting.",
    f2Title: "From somewhere we know",
    f2Text:
      "Every place is one we have visited. It does not have to be where we are travelling right now.",
    f3Title: "Nothing to study",
    f3Text: "This is not a mini guide or travel advice. It is simply a warm surprise in the post.",
    archiveEyebrow: "Countries in our archive",
    archive: [
      { month: "May", country: "Portugal", note: "A tiled doorway, sea air and a hello from Lisbon." },
      { month: "June", country: "Iceland", note: "Wind in our hair and a few handwritten lines from the north." },
      { month: "July", country: "Slovenia", note: "A green summer memory, sent with love." },
      { month: "August", country: "Greece", note: "Sun on the paper and greetings from an island." },
    ],
  },
  about: {
    title: "Veronika & Monika — travel intelligence by VeM",
    description:
      "Meet Veronika ‘V’ and Monika ‘eM’, two friends turning their lived European journeys into practical travel intelligence.",
    ogTitle: "The two behind travel intelligence by VeM",
    ogDescription:
      "Real journeys, honest decisions and the details we learned by travelling them ourselves.",
    eyebrow: "The people behind VeM",
    h1: "Veronika “V” & Monika “eM”",
    p1:
      "On the first of December 2016 we boarded a plane together for the very first time and flew off to Rome for a single weekend. In just forty eight hours we managed to live through an almost unbelievable amount, wandering from one corner of the city to another, following our feet and our curiosity, tasting, walking and seeing far more than two days should ever be able to hold. Back then we had no idea that this one short flight would not just be the beginning of a single journey, but the beginning of an entire way of living and seeing the world.",
    p2:
      "Since that first Roman weekend we have travelled half the world side by side. We gathered roads and wrong turns, quiet mornings in unfamiliar towns and little places you will never find in an ordinary guidebook, and slowly a way of travelling of our own took shape, the very same one we discovered in those first forty eight hours, where we are always on the move and always trying to see as much as a single day can hold. Somewhere along the way we realised that all these moments, all we had felt and learned, were far too beautiful to keep to ourselves, and that we wanted to share them with you and with the whole world.",
    p3:
      "So exactly on the tenth anniversary of our very first journey together, we decided to take the next step and founded Travel intelligence by VeM. Not as a company that sells ready made plans, but as a place into which we pour everything the road has taught us, so that you too can explore fully and in your very own way. Because in the end we are simply two best friends bound together by a love of travelling, and everything you find here was born on real journeys, never behind a desk.",
    p4:
      "And can you guess where our next trip will take us? Back to Rome, in 2026, almost exactly ten years later, returning to the very city where it all began and closing the circle right where it started.",
    signoff: "With love, V & eM",
    vText: "Routes, timing and the practical details that keep an ambitious trip moving.",
    mText: "Stories, perspective and the small observations that make a place stay with you.",
    contactTitle: "Talk to us",
    contactA: "Questions about a route, a package or the postcard? Write to ",
    contactB: ".",
  },
  legal: {
    eyebrow: "Legal",
    terms: {
      title: "Terms — travel intelligence by VeM",
      description:
        "Terms for digital travel guides, support packages and the monthly postcard membership.",
      ogDescription: "Terms for guides, support packages and postcard membership.",
      h1: "Terms",
      sections: [
        {
          h: "Digital guides",
          p: "Guides provide planning information based on our personal experience. Prices, timetables, availability and local conditions can change, so confirm important details with the relevant provider before travelling.",
        },
        {
          h: "Chat and communication",
          p: "Both packages include the trip chatbot; Guide + Us buyers may also join the “travel intelligence by VeM” WhatsApp group. Chatbot suggestions, group discussions and direct communication help adapt your plan but do not replace official travel, safety, visa, health or financial advice.",
        },
        {
          h: "Personal use",
          p: "Purchased materials are for the buyer’s personal use and may not be copied, resold or distributed.",
        },
        {
          h: "Cancellations",
          p: "Digital products may lose the right of withdrawal once delivery begins with your consent. The monthly postcard may be cancelled before the next billing date.",
        },
      ],
    },
    privacy: {
      title: "Privacy — travel intelligence by VeM",
      description: "How travel intelligence by VeM handles customer and membership information.",
      ogDescription: "How customer and membership information is handled.",
      h1: "Privacy",
      sections: [
        {
          h: "Information we use",
          p: "We use the contact, order and delivery details needed to provide your chosen guide, support or physical postcard.",
        },
        {
          h: "Why we use it",
          p: "Your information is used to fulfil purchases, communicate about your trip or membership, and meet legal accounting obligations.",
        },
        {
          h: "Sharing and retention",
          p: "Information is shared only with services needed for payment, digital delivery and post. We keep it only as long as necessary for those purposes and applicable law.",
        },
        {
          h: "Your choices",
          p: "You may request access, correction or deletion of eligible personal information by contacting us.",
        },
      ],
    },
    delivery: {
      title: "Delivery — travel intelligence by VeM",
      description:
        "Delivery information for digital travel guides and the monthly physical postcard.",
      ogDescription: "How digital guides and physical monthly postcards are delivered.",
      h1: "Delivery",
      sections: [
        {
          h: "Digital guides",
          p: "Your guide is delivered electronically to the email address used for purchase. Access details appear after payment or arrive by email.",
        },
        {
          h: "Chat and direct communication",
          p: "Instructions for chatbot access or communication with Veronika and Monika are sent with the relevant package.",
        },
        {
          h: "Postcard club",
          p: "The €12 membership includes one physical postcard with a personal greeting, posted each month to the delivery address supplied by you. It is separate from our guides and contains no itinerary or travel advice. Arrival times depend on the destination and postal service.",
        },
        {
          h: "Address changes",
          p: "Send address changes before the next monthly dispatch. We cannot redirect an item that has already been posted.",
        },
      ],
    },
  },
};

export type Copy = Omit<typeof en, "about"> & {
  about: Omit<typeof en.about, "p3" | "p4" | "signoff"> & {
    p3?: string;
    p4?: string;
    signoff?: string;
  };
};

const sk: Copy = {
  nav: {
    itineraries: "Itineráre",
    packages: "Balíky",
    postcard: "Pohľadnica",
    about: "V & eM",
    viewPackages: "Pozrieť balíky",
    homeLabel: "travel intelligence by VeM — domov",
  },
  footer: {
    tagline: "Trasy, ktoré prešli Veronika a Monika.",
    terms: "Podmienky",
    privacy: "Súkromie",
    delivery: "Doručenie",
    contact: "Kontakt",
  },
  map: {
    eyebrow: "Európa, otestovaná nami",
    hint: "Vyberte krajinu a otvorte jej travel intelligence.",
    guide: "sprievodca",
    guides: "sprievodcovia",
    days: "dní",
    ariaMap: "Interaktívna mapa Európy",
  },
  card: {
    days: "dní",
    perPerson: "/ osoba",
    open: "Otvoriť",
    buy: "Kúpiť",
    live: "Pripravené na stiahnutie",
    soon: "Už čoskoro",
    notify: "Dajte mi vedieť",
    notifySubject: "Čakacia listina",
  },
  tiers: {
    featured: "Najživšie",
  },
  home: {
    title: "travel intelligence by VeM — Európa, už premyslená",
    description:
      "Európske trasy, ktoré Veronika a Monika prešli osobne — s reálnym rozpočtom, presnými spojmi a rozhodnutiami, vďaka ktorým má každé euro zmysel.",
    ogTitle: "travel intelligence by VeM",
    ogDescription:
      "Nie ďalší zoznam pamiatok. Travel intelligence z európskych trás, ktoré sme si prežili.",
    badge: "Travel intelligence by VeM",
    h1a: "Cesty, ktoré ",
    h1em1: "tvoríte",
    h1b: ", nie trasy, ktoré si len ",
    h1em2: "stiahnete",
    h1c: ".",
    lead:
      "Neustále sa hýbuce európske trasy, ktoré sme prešli samy — s reálnym rozpočtom, presnými spojmi a voľbami, vďaka ktorým má každé euro zmysel.",
    ctaMap: "Preskúmať mapu",
    ctaPackages: "Pozrieť balíky",
    ctaPostcard: "Klub pohľadníc · 12 €/mes.",
    benefit1: "Rozpočet v cene",
    benefit2: "Presné cestovné detaily",
    benefit3: "Prešli sme to samy",
    onMap: "Na mape",
    onMapTitle: "Travel intelligence v pohybe",
    viewAll: "Zobraziť všetko →",
    packagesEyebrow: "Vyberte si, ako s vami cestujeme",
    packagesTitle: "Vezmite si sprievodcu s chatom. Alebo rovno nás dve.",
    packagesText:
      "Dve jasné možnosti na jednom mieste. WhatsApp skupina VeM sa otvára s balíkom Guide + Us.",
    packagesNoteA: "Chcete len pozdrav do schránky? ",
    packagesNoteLink: "Postcard club",
    packagesNoteB: " funguje samostatne za 12 € mesačne.",
    packagesCta: "Otvoriť balíky →",
    postcardEyebrow: "Pohľadnica, nie sprievodca · 12 €/mesiac",
    postcardTitle: "Malý pozdrav z miesta, na ktoré spomíname.",
    postcardText:
      "Jedna skutočná pohľadnica z miesta, kde sme už boli. Žiadna trasa, rozpočet ani rady — len osobný odkaz od V & eM vo vašej schránke.",
    postcardCta: "Objaviť pohľadnicu",
    pc1From: "Z Portugalska",
    pc1Title: "Škoda, že tu nie ste.",
    pc1Text: "Morský vzduch, modré kachličky a pár riadkov napísaných len pre vás.",
    pc2From: "Z Islandu",
    pc2Title: "Pozdrav zo severu.",
    pc2Text: "Veterná spomienka, známka a naše písmo.",
    foundersEyebrow: "Dve, čo za tým stoja",
    foundersTitle: "Skutočné ľudia, skutočné kilometre",
    vRole: "Trasy a detaily",
    vText: "Spoje a praktické rozhodnutia, vďaka ktorým sa cesta stále hýbe.",
    mRole: "Príbehy a pohľad",
    mText: "Momenty a postrehy, vďaka ktorým vám miesto ostane v hlave.",
  },
  itineraries: {
    title: "Európske itineráre — travel intelligence by VeM",
    description:
      "Každá trasa, ktorú sme prešli — s počtom dní, odhadom rozpočtu a cestovnými detailmi. Vyberte krajinu na mape alebo si prezrite celý zoznam.",
    ogDescription:
      "Európske trasy, ktoré prešli Veronika a Monika, s úprimnými rozpočtami a presnými detailmi.",
    eyebrow: "Mapa",
    liveTitle: "Pripravené na stiahnutie",
    liveLead: "Hotové trasy. Kompletný sprievodca, rozpočet a cestovné detaily hneď dnes.",
    soonTitle: "Chystáme — a pocestujete s nami",
    soonLead: "Trasy, ktoré práve plánujeme. Napíšte sa na zoznam a zažijete ich spolu s nami.",
    h1: "Začnite krajinou.",
    lead:
      "Každý bod je trasa, ktorú sme prešli samy. Kliknite a uvidíte tvar cesty, koľko stojí a kde by sme si priplatili.",
  },
  detail: {
    back: "← Všetky itineráre",
    titleSuffix: "itinerár",
    onTheMove: "V pohybe",
    days: "dní",
    ground: "Prejdené",
    budget: "Odhad rozpočtu",
    shape: "Ako cesta vyzerá",
    note:
      "Celý sprievodca pridáva plán deň po dni, každý spoj, detaily rezervácií a rozpočet rozpísaný po položkách — s chatbotom v oboch balíkoch. S balíkom Guide + Us sa pridáte aj do WhatsApp skupiny „travel intelligence by VeM“.",
    buyEyebrow: "Kúpiť túto trasu",
    buyTitlePrefix: "Vezmite si",
    buyTitleSuffix: "so sebou",
    buyText:
      "Každý balík obsahuje kompletného sprievodcu deň po dni, rozpočet rozpísaný po položkách a všetky cestovné detaily — pošleme vám ich priamo e-mailom.",
    buyChat: "Kúpiť Guide + Chat · 29 €",
    buyUs: "Kúpiť Guide + Us · 99 €",
    buySubjectChat: "Objednávka Guide + Chat",
    buySubjectUs: "Objednávka Guide + Us",
    buyNote:
      "Kliknutie otvorí predvyplnený e-mail pre nás — sprievodcu a prístup do chatu posielame do 24 hodín.",
    soonEyebrow: "Už čoskoro",
    soonTitle: "Túto trasu ešte len cestujeme",
    soonText: "Práve ju plánujeme. Napíšte nám a sprievodcu dostanete medzi prvými — alebo ju zažijete priamo s nami.",
    soonCta: "Zapíšte ma na zoznam",
    soonSubject: "Čakacia listina",
    compare: "Porovnajte balíky",
    unavailable: "Nedostupné",
  },
  pricing: {
    title: "Balíky cestovných sprievodcov — travel intelligence by VeM",
    description:
      "Porovnajte dva balíky: sprievodca s chatbotom k ceste, alebo priama komunikácia s Veronikou a Monikou.",
    ogDescription: "Vyberte si, koľko podpory chcete okolo svojej európskej trasy.",
    eyebrow: "Vyberte si vstup",
    h1a: "Trasa je hotová. ",
    h1em: "Ako veľmi",
    h1b: " si ju chcete prispôsobiť?",
    lead:
      "Žiadne generické PDF ani nekonečné plánovanie. Začnite cestou, ktorú sme naozaj prešli, a potom si vyberte, koľko slobody a ľudskej pomoci okolo nej chcete.",
    cta: "Nájsť môj balík",
    notesAria: "Poznámky od Veroniky a Moniky",
    note1a: "Ušetri na vlaku.",
    note1b: "Priplať si za výhľad.",
    note1c: "— jedno z našich obľúbených pravidiel",
    note2Eyebrow: "Poznámka z cesty 27",
    note2: "Najlepšia trasa býva zriedka priamka.",
    packagesEyebrow: "Jedna trasa. Dva zážitky.",
    packagesTitle: "Vyberte si vzdialenosť medzi nami.",
    packagesText:
      "Obe možnosti začínajú overenou travel intelligence a chatbotom, ktorý cestu premení: kam sa pohnúť, koľko to naozaj stojí a ktorý detail zachráni deň.",
    diffEyebrow: "Čo sa medzi nimi mení",
    diffTitle: "Z nášho zápisníka do vašej cesty.",
    bothPackages: "V oboch balíkoch",
    onlyUs: "Len v Guide + Us",
    diff1Title: "Intelligence",
    diff1Text:
      "Trasa deň po dni, presná logika dopravy, reálne náklady a miesta, kde sa oplatí priplatiť.",
    diff2Title: "Konverzácia",
    diff2Text:
      "Chatbot k ceste, ktorý odpovedá na otázky a prispôsobí trasu vašim termínom a tempu.",
    diff3Title: "My dve",
    diff3Text:
      "Priama komunikácia s Veronikou a Monikou plus WhatsApp skupina travel intelligence by VeM.",
    ctaEyebrow: "Ešte neviete vybrať?",
    ctaTitle: "Začnite miestom, ktoré vás ťahá.",
    ctaText:
      "Najprv si pozrite trasy. Správna úroveň podpory býva jasná, keď viete, kam idete.",
    ctaButton: "Preskúmať itineráre",
    postcardNoteA:
      "Hľadáte pohľadnicu za 12 € mesačne? Je to osobný pozdrav, úplne oddelený od našich sprievodcov. ",
    postcardNoteLink: "Pozrieť pohľadnicu",
  },
  letters: {
    title: "Mesačná cestovná pohľadnica — travel intelligence by VeM",
    description:
      "Za 12 € mesačne dostanete skutočnú pohľadnicu s osobným pozdravom z miesta, kde Veronika a Monika boli.",
    ogTitle: "Mesačná cestovná pohľadnica · 12 €",
    ogDescription: "Malý osobný pozdrav z miesta, kde Veronika a Monika boli.",
    eyebrow: "Postcard club · 12 €/mesiac",
    h1: ["Každý mesiac jedna krajina.", "Jeden list a malé prekvapenie."],
    lead: [
      [
        { text: "Raz za mesiac si sadneme a napíšeme vám o jednej krajine, ktorú sme precestovali, " },
        { text: "vlastnou rukou, na papier", i: true },
        { text: ", a pošleme vám ho kamkoľvek na svete. V každej obálke vždy nájdete " },
        { text: "pohľadnicu z ciest", c: "terracotta" },
        { text: " a " },
        { text: "jedno malé prekvapenie", c: "terracotta" },
        { text: ", niekedy " },
        { text: "recept, do ktorého sme sa zamilovali", i: true },
        { text: ", inokedy tichý tip, ktorý akoby poznali len miestni, a často aj " },
        { text: "pesničku spojenú práve s tým miestom", i: true },
        { text: ", tú, ktorá nám znie v spomienke vždy, keď naň pomyslíme, ukrytú za malým QR kódom. " },
        { text: "Čo presne dorazí, ostáva tajomstvom až do chvíle, kým obálku otvoríte.", i: true, c: "royal" },
      ],
      [
        { text: "Jedna pevná cena, " },
        { text: "dvanásť eur mesačne", c: "terracotta" },
        { text: ", nech ste na mape kdekoľvek, a každý list je " },
        { text: "váš", i: true },
        { text: ". Je to náš spôsob, ako vás vezmeme so sebou, pomaly, krajinu po krajine a obálku po obálke." },
      ],
    ] satisfies LeadSegment[][],
    cta: "Objednať · 12 €/mesiac",
    subject: "Postcard club",
    stampEyebrow: "Opečiatkované niekde",
    stampTitle: "Pozdrav z Portugalska",
    stampText: "Škoda, že tu nie ste.",
    letterOpen: "Milý cestovateľ,",
    letterText: "Videli sme toto miesto a povedali si, že si zaslúži viac než fotku v mobile...",
    f1Title: "Jedna skutočná pohľadnica",
    f1Text: "Fyzická pohľadnica, ktorú vyberieme a pošleme my, s krátkym osobným pozdravom.",
    f2Title: "Z miesta, ktoré poznáme",
    f2Text: "Každé miesto sme navštívili. Nemusí to byť tam, kde práve cestujeme.",
    f3Title: "Nič na študovanie",
    f3Text: "Nie je to mini sprievodca ani rady. Je to jednoducho milé prekvapenie v pošte.",
    archiveEyebrow: "Krajiny v našom archíve",
    archive: [
      { month: "Máj", country: "Portugalsko", note: "Kachličkový vchod, morský vzduch a pozdrav z Lisabonu." },
      { month: "Jún", country: "Island", note: "Vietor vo vlasoch a pár riadkov zo severu." },
      { month: "Júl", country: "Slovinsko", note: "Zelená letná spomienka poslaná s láskou." },
      { month: "August", country: "Grécko", note: "Slnko na papieri a pozdrav z ostrova." },
    ],
  },
  about: {
    title: "Veronika a Monika — travel intelligence by VeM",
    description:
      "Spoznajte Veroniku „V“ a Moniku „eM“ — dve kamarátky, ktoré menia prežité európske cesty na praktickú travel intelligence.",
    ogTitle: "Dve, čo stoja za travel intelligence by VeM",
    ogDescription:
      "Skutočné cesty, úprimné rozhodnutia a detaily, ktoré sme sa naučili tým, že sme ich prešli.",
    eyebrow: "Ľudia za VeM",
    h1: "Veronika „V“ a Monika „eM“",
    p1:
      "Prvého decembra 2016 sme spolu prvýkrát nasadli do lietadla a odleteli na jediný víkend do Ríma. Za pouhých štyridsaťosem hodín sme toho stihli prežiť neuveriteľne veľa, blúdili sme z jedného konca mesta na druhý, šli za vlastnými nohami aj zvedavosťou, ochutnávali, kráčali a videli oveľa viac, než by sa do dvoch dní vôbec malo zmestiť. Vtedy sme ešte netušili, že ten jeden krátky let nebude len začiatkom jednej cesty, ale začiatkom celého spôsobu, akým odvtedy žijeme a objavujeme svet.",
    p2:
      "Od toho prvého rímskeho víkendu sme spolu precestovali pol sveta. Zbierali sme cesty a odbočky, tiché rána v neznámych mestách aj miesta, ktoré nikde v bežnom sprievodcovi nenájdete, a postupne sa zrodil náš vlastný spôsob cestovania, presne ten istý, ktorý sme objavili už počas tých prvých štyridsiatich ôsmich hodín, keď sme stále v pohybe a snažíme sa vidieť čo najviac, koľko len jeden deň unesie. V istom bode sme si povedali, že všetky tieto chvíle, všetko, čo sme precítili a naučili sa, sú príliš krásne na to, aby sme si ich nechali len pre seba, a že sa o ne chceme podeliť s vami a s celým svetom.",
    p3:
      "Presne pri desiatom výročí našej prvej spoločnej cesty sme sa preto rozhodli spraviť ďalší krok a založili sme Travel intelligence by VeM. Nie ako firmu, ktorá predáva hotové plány, ale ako miesto, do ktorého vkladáme všetko, čo nás cesty naučili, aby ste aj vy mohli objavovať naplno a po svojom. Sme totiž jednoducho dve najlepšie kamarátky, ktoré spája láska k cestám, a všetko, čo tu nájdete, vzniklo z reálnych ciest, nie od stola.",
    p4:
      "A hádajte, kam nás zavedie naša ďalšia cesta? Späť do Ríma, v roku 2026, takmer presne o desať rokov neskôr, do mesta, kde sa to celé začalo, aby sme kruh uzavreli presne tam, kde vznikol.",
    signoff: "S láskou, V & eM",
    vText: "Trasy, načasovanie a praktické detaily, vďaka ktorým sa náročná cesta stále hýbe.",
    mText: "Príbehy, pohľad a malé postrehy, vďaka ktorým vám miesto ostane v pamäti.",
    contactTitle: "Napíšte nám",
    contactA: "Otázky k trase, balíku alebo pohľadnici? Napíšte na ",
    contactB: ".",
  },
  legal: {
    eyebrow: "Právne",
    terms: {
      title: "Obchodné podmienky — travel intelligence by VeM",
      description:
        "Podmienky pre digitálnych sprievodcov, balíky podpory a mesačné členstvo v klube pohľadníc.",
      ogDescription: "Podmienky pre sprievodcov, balíky podpory a členstvo v klube pohľadníc.",
      h1: "Obchodné podmienky",
      sections: [
        {
          h: "Digitálni sprievodcovia",
          p: "Sprievodcovia poskytujú informácie na plánovanie na základe našej osobnej skúsenosti. Ceny, cestovné poriadky, dostupnosť aj miestne podmienky sa môžu meniť, preto si dôležité údaje pred cestou overte u príslušného poskytovateľa.",
        },
        {
          h: "Chat a komunikácia",
          p: "Oba balíky obsahujú chatbot k ceste; kupujúci balíka Guide + Us sa môžu pridať aj do WhatsApp skupiny „travel intelligence by VeM“. Návrhy chatbota, diskusie v skupine a priama komunikácia pomáhajú upraviť váš plán, no nenahrádzajú oficiálne cestovné, bezpečnostné, vízové, zdravotné ani finančné poradenstvo.",
        },
        {
          h: "Osobné použitie",
          p: "Zakúpené materiály sú určené na osobné použitie kupujúceho a nesmú sa kopírovať, ďalej predávať ani šíriť.",
        },
        {
          h: "Odstúpenie od zmluvy",
          p: "Pri digitálnych produktoch môže právo na odstúpenie zaniknúť momentom začatia dodania s vaším súhlasom. Mesačnú pohľadnicu je možné zrušiť pred ďalším dátumom platby.",
        },
      ],
    },
    privacy: {
      title: "Ochrana súkromia — travel intelligence by VeM",
      description: "Ako travel intelligence by VeM narába s údajmi zákazníkov a členov.",
      ogDescription: "Ako narábame s údajmi zákazníkov a členov.",
      h1: "Ochrana súkromia",
      sections: [
        {
          h: "Aké údaje používame",
          p: "Používame kontaktné, objednávkové a doručovacie údaje potrebné na dodanie vybraného sprievodcu, podpory alebo fyzickej pohľadnice.",
        },
        {
          h: "Načo ich používame",
          p: "Vaše údaje slúžia na vybavenie objednávok, komunikáciu o vašej ceste či členstve a na splnenie zákonných účtovných povinností.",
        },
        {
          h: "Zdieľanie a uchovávanie",
          p: "Údaje zdieľame iba so službami potrebnými na platbu, digitálne doručenie a poštu. Uchovávame ich len tak dlho, ako je to na tieto účely a podľa zákona nevyhnutné.",
        },
        {
          h: "Vaše možnosti",
          p: "Môžete nás požiadať o prístup k osobným údajom, ich opravu alebo vymazanie, ak je to možné.",
        },
      ],
    },
    delivery: {
      title: "Doručenie — travel intelligence by VeM",
      description:
        "Informácie o doručení digitálnych sprievodcov a mesačnej fyzickej pohľadnice.",
      ogDescription: "Ako doručujeme digitálnych sprievodcov a mesačné pohľadnice.",
      h1: "Doručenie",
      sections: [
        {
          h: "Digitálni sprievodcovia",
          p: "Sprievodcu doručujeme elektronicky na e-mail použitý pri nákupe. Prístupové údaje sa zobrazia po platbe alebo prídu e-mailom.",
        },
        {
          h: "Chat a priama komunikácia",
          p: "Pokyny na prístup k chatbotu alebo na komunikáciu s Veronikou a Monikou posielame spolu s príslušným balíkom.",
        },
        {
          h: "Postcard club",
          p: "Členstvo za 12 € zahŕňa jednu fyzickú pohľadnicu s osobným pozdravom, ktorú každý mesiac posielame na vami uvedenú adresu. Je oddelená od našich sprievodcov a neobsahuje itinerár ani cestovné rady. Čas doručenia závisí od destinácie a pošty.",
        },
        {
          h: "Zmena adresy",
          p: "Zmenu adresy nám pošlite pred ďalším mesačným odoslaním. Už odoslanú zásielku nevieme presmerovať.",
        },
      ],
    },
  },
};

export const copy: Record<Lang, Copy> = { en, sk };
