import type { Lang } from "./i18n";

export type DayStopText = {
  place: string;
  title: string;
  text: string;
  /** Short practical notes: booking, price, timing */
  notes: string[];
};

export type DayStop = DayStopText & {
  day: number;
  /** Short date label, e.g. "28 Jan" */
  date: string;
  dateSk: string;
  /** Position in the 700x540 SVG viewBox */
  x: number;
  y: number;
  /** Highlight this stop as a peak moment of the trip */
  peak?: boolean;
  sk: DayStopText;
};

export type RouteMap = {
  title: string;
  titleSk: string;
  lead: string;
  leadSk: string;
  days: DayStop[];
};

export const routeMaps: Record<string, RouteMap> = {
  switzerland: {
    title: "Ten days, day by day",
    titleSk: "Desať dní, deň po dni",
    lead:
      "Fly into Zürich, fly home from Geneva. Tap a day to see where the route takes you — the full detail, times and prices live inside the guide.",
    leadSk:
      "Prílet do Zürichu, odlet zo Ženevy — takzvaný open jaw s dvomi vrcholmi: THE ICE na zamrznutom jazere v St. Moritz a Glacier Express v triede Excellence. Kliknite na deň a sledujte trasu.",
    days: [
      {
        day: 1,
        date: "28 Jan",
        dateSk: "28. jan",
        x: 451,
        y: 151,
        place: "Zürich",
        title: "Arrival, slowly",
        text:
          "Land in Zürich and take the train from the airport to the centre — about ten minutes, trains run constantly, a ticket costs a few francs. Stay near the old town and let the city welcome you on foot: the Limmat river, the Niederdorf lanes, the lake shore.",
        notes: ["Airport → centre by train, ~10 min, a few CHF", "Hotel near the old town", "Keep the evening deliberately light"],
        sk: {
          place: "Zürich",
          title: "Prílet, pomaly",
          text:
            "Priletíte do Zürichu a z letiska sa vlakom dostanete do centra asi za desať minút, vlaky idú veľmi často a lístok stojí pár frankov. Ubytujete sa blízko starého mesta a necháte Zürich, nech vás privíta pomaly — popri rieke Limmat, uličkami Niederdorf a k brehu jazera.",
          notes: ["Letisko → centrum vlakom, ~10 min, pár frankov", "Hotel blízko starého mesta", "Večer nechajte zámerne ľahký"],
        },
      },
      {
        day: 2,
        date: "29 Jan",
        dateSk: "29. jan",
        x: 646,
        y: 353,
        peak: true,
        place: "St. Moritz",
        title: "THE ICE, day one",
        text:
          "Train to St. Moritz, about three and a half hours, usually changing in Chur onto the red Rhaetian Railway trains along the famous Albula line — the transfer is already a taste of what is coming. Leave Zürich early, around eight, to catch as much of Friday's static show as possible. The afternoon belongs to THE ICE: classic and luxury cars parked on the frozen lake.",
        notes: [
          "Book the leg on SBB in advance, ~80–100 CHF pp, 2nd class",
          "Leave Zürich around 08:00",
          "St. Moritz beds must be booked far ahead — THE ICE weekend prices spike",
          "THE ICE tickets only via the official site or ticketcorner",
        ],
        sk: {
          place: "St. Moritz",
          title: "THE ICE, prvý deň",
          text:
            "Vlakom do St. Moritz, zhruba tri a pol hodiny, zvyčajne s prestupom v Chure na červené vlaky Rhétskej železnice po slávnej albulskej trati — už samotný presun je ochutnávkou toho, čo príde. Zo Zürichu vyrazte skoro ráno, ideálne okolo ôsmej, aby ste z piatkovej statickej časti THE ICE stihli čo najviac. Popoludnie patrí prehliadke klasických a luxusných áut priamo na zamrznutom jazere.",
          notes: [
            "Lístok kúpte vopred cez SBB, ~80–100 CHF na osobu, 2. trieda",
            "Odchod zo Zürichu okolo 8:00",
            "Ubytovanie v St. Moritz rezervujte s veľkým predstihom — počas THE ICE ceny prudko rastú",
            "Vstupenky na THE ICE len cez oficiálnu stránku alebo ticketcorner",
          ],
        },
      },
      {
        day: 3,
        date: "30 Jan",
        dateSk: "30. jan",
        x: 646,
        y: 353,
        peak: true,
        place: "St. Moritz",
        title: "THE ICE, cars on the ice",
        text:
          "The dynamic day, when the rare cars actually run on the frozen lake. Come early — for the crowds, for parking, and to have the atmosphere from the first minute. This is the first peak of the trip and exactly the kind of thing you do not get anywhere else. Evening stays in St. Moritz, quietly, in the Engadin.",
        notes: ["Arrive early — crowds and parking", "A weekend ticket covers Friday and Saturday, from ~150 CHF", "Saturday day ticket from ~80 CHF"],
        sk: {
          place: "St. Moritz",
          title: "THE ICE, autá na ľade",
          text:
            "Dynamický deň, keď sa vzácne vozidlá rozbehnú priamo po ľade. Príďte skoro — kvôli davom, parkovaniu aj preto, aby ste si atmosféru užili od začiatku. Je to prvý vrchol cesty a presne ten typ zážitku, ktorý inde nedostanete. Večer ostávate v St. Moritz a doprajete si pokojný záver dňa v Engadine.",
          notes: ["Príďte skoro — davy a parkovanie", "Víkendový lístok pokrýva piatok aj sobotu, od ~150 CHF", "Sobotný denný lístok od ~80 CHF"],
        },
      },
      {
        day: 4,
        date: "31 Jan",
        dateSk: "31. jan",
        x: 332,
        y: 462,
        peak: true,
        place: "St. Moritz → Zermatt",
        title: "Glacier Express, Excellence class",
        text:
          "The second peak: a full day aboard the panoramic Glacier Express from St. Moritz to Zermatt. We recommend Excellence class — the one big indulgence of the trip. In winter there is usually one train a day, leaving mid-morning and arriving in the early evening, about eight hours across the heart of the Alps. Zermatt is car-free, so the last stretch to the hotel is on foot or in the hotel's electric cart.",
        notes: [
          "Seat reservation is mandatory in every class",
          "Excellence: 540 CHF pp reservation + a 1st class ticket ≈ 800–820 CHF pp",
          "Excellence opens in October for the whole season — book immediately",
          "1st class ≈ 326 CHF, 2nd class ≈ 213 CHF; those reservations open 93 days ahead",
        ],
        sk: {
          place: "St. Moritz → Zermatt",
          title: "Glacier Express, trieda Excellence",
          text:
            "Druhý vrchol: celodenná jazda panoramatickým Glacier Express z St. Moritz do Zermattu. Odporúčame triedu Excellence, teda to jedno veľké doprianie na ceste. V zime jazdí spravidla jeden spoj denne, z St. Moritz odchádza dopoludnia a do Zermattu prichádza podvečer, samotná jazda trvá približne osem hodín naprieč srdcom Álp. Zermatt je mestečko bez áut, takže posledný úsek k hotelu vyriešite pešo alebo elektrickým vozíkom hotela.",
          notes: [
            "Miestenka je povinná vo všetkých triedach",
            "Excellence: 540 CHF na osobu miestenka + lístok 1. triedy ≈ 800–820 CHF na osobu",
            "Excellence sa otvára už v októbri na celú sezónu — rezervujte hneď",
            "1. trieda ≈ 326 CHF, 2. trieda ≈ 213 CHF; miestenky 93 dní vopred",
          ],
        },
      },
      {
        day: 5,
        date: "1 Feb",
        dateSk: "1. feb",
        x: 332,
        y: 462,
        place: "Zermatt",
        title: "Face to face with the Matterhorn",
        text:
          "The Gornergrat cog railway starts right opposite Zermatt's main station and in about thirty-three minutes lifts you above three thousand metres, to one of the finest views of the Matterhorn. Sit on the right-hand side going up and go early, while the light is at its cleanest. The rest of the day belongs to Zermatt itself.",
        notes: ["Return ticket in winter ~96–102 CHF, includes Zooom the Matterhorn", "Sit on the right going up", "Go first thing in the morning"],
        sk: {
          place: "Zermatt",
          title: "Zoči-voči Matterhornu",
          text:
            "Ozubnicová železnica Gornergrat vychádza priamo oproti hlavnej stanici v Zermatte a asi za tridsaťtri minút vás vyvezie nad tritisíc metrov, s jedným z najkrajších výhľadov na Matterhorn. Cestou hore si sadnite na pravú stranu a choďte skoro ráno, kým je svetlo najčistejšie. Zvyšok dňa venujete samotnému Zermattu, jeho uličkám a výhľadom.",
          notes: ["Návratný lístok v zime ~96–102 CHF, vrátane Zooom the Matterhorn", "Cestou hore si sadnite vpravo", "Choďte hneď zavčas ráno"],
        },
      },
      {
        day: 6,
        date: "2 Feb",
        dateSk: "2. feb",
        x: 332,
        y: 462,
        place: "Zermatt",
        title: "A whole day on skis",
        text:
          "One of the highest and most reliable ski areas in the Alps, with almost two hundred kilometres of pistes. Buy the pass online the evening before — pricing is dynamic and rises in peak winter weeks. If you do not have your own gear, the rental shops are right in the village and you can sort it out before the first lift.",
        notes: ["Day pass from ~92 CHF, dynamic pricing", "Buy online the night before", "Rentals in the village, same morning is fine"],
        sk: {
          place: "Zermatt",
          title: "Celý deň na lyžiach",
          text:
            "Jedno z najvyššie položených a najspoľahlivejších stredísk Álp s takmer dvesto kilometrami zjazdoviek. Skipas kúpte online už večer predtým — cena je dynamická a v zimnej špičke býva vyššia. Ak nemáte vlastnú výbavu, požičovne sú priamo v mestečku a vybavíte to ráno pred prvým výjazdom.",
          notes: ["Denný skipas od ~92 CHF, dynamická cena", "Kúpte online večer predtým", "Požičovne priamo v mestečku, stačí ráno"],
        },
      },
      {
        day: 7,
        date: "3 Feb",
        dateSk: "3. feb",
        x: 200,
        y: 485,
        place: "Zermatt → Chamonix",
        title: "Across into France",
        text:
          "A travel day. There is no direct train: via Visp, Martigny and Vallorcine it takes about four and a half to five hours with three or four easy, connecting changes. The comfortable alternative is a private transfer — around two hours twenty by road, with pick-up at the Täsch terminal since Zermatt is car-free. In winter, count on possible track closures and replacement buses, so treat this as a full day on the move. You arrive in Chamonix in the afternoon.",
        notes: ["Train ~60–150 € pp, 3–4 connecting changes", "Private transfer ~300–450 € per car, ~2 h 20, pick-up in Täsch", "Winter: allow for rail replacement buses"],
        sk: {
          place: "Zermatt → Chamonix",
          title: "Presun do Francúzska",
          text:
            "Presunový deň. Priamy vlak neexistuje a cesta cez Visp, Martigny a Vallorcine trvá aj s troma až štyrmi prestupmi približne štyri a pol až päť hodín, pričom každý prestup je jednoduchý a nadväzuje. Pohodlnejšia možnosť je súkromný transfer autom, asi dve hodiny a dvadsať minút, s vyzdvihnutím pri termináli v Täschi, keďže Zermatt je bez áut. V zime treba rátať s možnými výlukami a náhradnou autobusovou dopravou, preto berieme tento deň ako plnohodnotný deň na ceste. Do Chamonix dorazíte poobede.",
          notes: ["Vlak ~60–150 € na osobu, 3–4 nadväzujúce prestupy", "Súkromný transfer ~300–450 € za vozidlo, ~2 h 20, vyzdvihnutie v Täschi", "V zime rátajte s náhradnou autobusovou dopravou"],
        },
      },
      {
        day: 8,
        date: "4 Feb",
        dateSk: "4. feb",
        x: 200,
        y: 485,
        place: "Chamonix",
        title: "Aiguille du Midi",
        text:
          "In under twenty minutes the cable car lifts you to three thousand eight hundred and forty-two metres, straight in front of the Mont Blanc massif, with the glass Step into the Void platform. Go first thing and on a clear day — the ride depends on conditions. Keep a spare slot in mind in case the morning turns. The rest of the day is Chamonix.",
        notes: ["Return ticket ~60–83 € depending on demand", "Time-slot reservation is mandatory and free — book ahead", "Go early, on a clear morning; keep a backup day"],
        sk: {
          place: "Chamonix",
          title: "Aiguille du Midi",
          text:
            "Za necelých dvadsať minút vás lanovka vynesie do výšky tritisíc osemsto štyridsaťdva metrov, s výhľadom priamo na masív Mont Blanc a so sklenenou vyhliadkou Krok do prázdna. Choďte hneď ráno a najlepšie za jasného počasia, keďže výjazd závisí od podmienok. Ak by ráno nebolo priaznivé, je dobré mať v pláne rezervu. Zvyšok dňa venujete Chamonix.",
          notes: ["Návratný lístok ~60–83 € podľa dopytu", "Rezervácia časového okna je povinná a bezplatná — spravte ju vopred", "Choďte skoro ráno za jasna, majte rezervu"],
        },
      },
      {
        day: 9,
        date: "5 Feb",
        dateSk: "5. feb",
        x: 91,
        y: 420,
        place: "Geneva",
        title: "Down to the lake",
        text:
          "Buses and shuttles from Chamonix to Geneva run often and take an hour to an hour and a half — you can go straight to the lake or to the airport. Spend the afternoon by Lake Geneva, at the Jet d'Eau and in the old town, a calm farewell to the trip. Night in Geneva.",
        notes: ["Shuttle ~30–40 € pp, 1–1.5 h", "Drop-off at the lake or the airport", "Afternoon: Jet d'Eau and the old town"],
        sk: {
          place: "Ženeva",
          title: "Dole k jazeru",
          text:
            "Autobusové a shuttle spoje z Chamonix do Ženevy jazdia často a cesta trvá približne hodinu až hodinu a pol, pričom viete ísť rovno k jazeru alebo na letisko podľa potreby. Popoludnie strávite pri Ženevskom jazere, pri fontáne Jet d'Eau a v starom meste, ako pokojné rozlúčenie s cestou. Noc trávite v Ženeve.",
          notes: ["Shuttle ~30–40 € na osobu, 1–1,5 h", "Vystúpite pri jazere alebo na letisku", "Popoludnie: Jet d'Eau a staré mesto"],
        },
      },
      {
        day: 10,
        date: "6 Feb",
        dateSk: "6. feb",
        x: 91,
        y: 420,
        place: "Geneva",
        title: "Home from Geneva",
        text:
          "One more morning in Geneva, then home from Geneva airport. The train from the centre takes a few minutes and in the airport hall you can pull a free public transport ticket from the machine, so the transfer is quick and cheap.",
        notes: ["Centre → airport by train, a few minutes", "Free public transport ticket from the machine in the arrivals hall"],
        sk: {
          place: "Ženeva",
          title: "Domov zo Ženevy",
          text:
            "Doobeda si ešte vychutnáte Ženevu a potom odletíte domov zo Ženevského letiska. Na letisko sa z centra dostanete vlakom za pár minút a priamo v hale letiska si viete zobrať bezplatný lístok na verejnú dopravu z automatu, takže presun je rýchly a lacný.",
          notes: ["Centrum → letisko vlakom, pár minút", "Bezplatný lístok na MHD z automatu v hale letiska"],
        },
      },
    ],
  },
};

export function dayStopText(stop: DayStop, lang: Lang): DayStopText {
  if (lang === "sk") return stop.sk;
  return { place: stop.place, title: stop.title, text: stop.text, notes: stop.notes };
}

export function dayStopDate(stop: DayStop, lang: Lang): string {
  return lang === "sk" ? stop.dateSk : stop.date;
}
