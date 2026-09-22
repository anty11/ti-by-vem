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
  "dolomites-winter": {
    title: "Eight days, day by day",
    titleSk: "Osem dní, deň po dni",
    lead:
      "One car, two hotel bases, from Cortina d'Ampezzo across South Tyrol to Merano. Tap a day to see where the route takes you — the full detail, times and prices live inside the guide.",
    leadSk:
      "Jedno auto, dve hotelové základne, z Cortiny d'Ampezzo cez Južné Tirolsko do Merana. Kliknite na deň a uvidíte, kam vás trasa zavedie — celý detail, časy a ceny nájdete v sprievodcovi.",
    days: [
      {
        day: 1,
        date: "Day 1",
        dateSk: "1. deň",
        x: 301,
        y: 290,
        place: "Cortina d'Ampezzo",
        title: "Early start, long drive, first night in the mountains",
        text:
          "We leave before sunrise and break the drive in Austria: breakfast in town and a short walk by a lake before the border. By the afternoon the peaks are already around you and Cortina is waiting.",
        notes: ["Car day — start very early", "One breakfast stop and one lakeside walk", "First night in Cortina, dinner in town"],
        sk: {
          place: "Cortina d'Ampezzo",
          title: "Skorý štart, dlhá cesta, prvá noc v horách",
          text:
            "Vyrážame pred svitaním a cestu si rozdelíme v Rakúsku: raňajky v meste a krátka prechádzka pri jazere ešte pred hranicou. Poobede máte štíty už okolo seba a Cortina čaká.",
          notes: ["Deň v aute — štart veľmi skoro", "Jedna zastávka na raňajky a prechádzka pri jazere", "Prvá noc v Cortine, večera v meste"],
        },
      },
      {
        day: 2,
        date: "Day 2",
        dateSk: "2. deň",
        x: 284,
        y: 320,
        peak: true,
        place: "Cinque Torri & Passo Giau",
        title: "Five towers, then sunset on the pass",
        text:
          "A cable car lifts you to one of the most photographed rock groups in the Dolomites for an easy winter hike. The day ends on a high mountain pass, timed for the moment the walls turn pink.",
        notes: ["Snowshoes may be needed after heavy snow", "Sunset on the pass — dress far warmer than you think", "Dinner back in Cortina"],
        sk: {
          place: "Cinque Torri a Passo Giau",
          title: "Päť veží a potom západ slnka na priesmyku",
          text:
            "Lanovka vás vynesie k jednej z najfotenejších skalných skupín v Dolomitoch na ľahkú zimnú prechádzku. Deň končí na vysokom priesmyku, načasovaný na chvíľu, keď steny zružovejú.",
          notes: ["Po veľkom snežení sa hodia snežnice", "Západ slnka na priesmyku — oblečte sa oveľa teplejšie", "Večera späť v Cortine"],
        },
      },
      {
        day: 3,
        date: "Day 3",
        dateSk: "3. deň",
        x: 184,
        y: 325,
        peak: true,
        place: "Cortina → Tires",
        title: "Ski the Olympic mountain, then move west",
        text:
          "A full day on Cortina's slopes, including the steep run the Olympics are raced on. In the late afternoon we pack the car and move to our second base, a half-board hotel in a quiet valley.",
        notes: ["Ski pass for the Cortina area", "Hardest run of the trip — take it after lunch", "Second hotel, half board"],
        sk: {
          place: "Cortina → Tires",
          title: "Lyžovačka na olympijskej hore a presun na západ",
          text:
            "Celý deň na svahoch Cortiny vrátane strmej trate, na ktorej sa jazdí olympiáda. Neskoro poobede zbalíme auto a presunieme sa na druhú základňu — hotel s polpenziou v tichom údolí.",
          notes: ["Skipas pre oblasť Cortina", "Najťažšia trať cesty — nechajte si ju po obede", "Druhý hotel, polpenzia"],
        },
      },
      {
        day: 4,
        date: "Day 4",
        dateSk: "4. deň",
        x: 167,
        y: 110,
        place: "Lago di Fiè & Vipiteno",
        title: "Skates in the morning, sledge in the afternoon",
        text:
          "Morning on a frozen lake with skates on, then north for one of the longest toboggan runs around — a lift up the mountain and a very long, very fast way down.",
        notes: ["Skates can be rented at the lake", "Toboggan run closes early — go right after lunch", "Both are weather dependent"],
        sk: {
          place: "Lago di Fiè a Vipiteno",
          title: "Ráno korčule, poobede sánky",
          text:
            "Ráno na zamrznutom jazere s korčuľami a potom na sever za jednou z najdlhších sánkarských dráh v okolí — lanovkou hore a veľmi dlho a veľmi rýchlo dole.",
          notes: ["Korčule sa dajú požičať pri jazere", "Sánkarská dráha zatvára skoro — choďte hneď po obede", "Oboje závisí od počasia"],
        },
      },
      {
        day: 5,
        date: "Day 5",
        dateSk: "5. deň",
        x: 203,
        y: 290,
        place: "Alpe di Siusi",
        title: "Skiing above the biggest alpine meadow in Europe",
        text:
          "A cable car straight from the valley onto a wide, sunny plateau. Gentle, endless pistes with the Dolomite walls standing behind every turn.",
        notes: ["Take the valley cable car, not the car", "Easiest ski day — good for mixed levels", "Lunch on the plateau"],
        sk: {
          place: "Alpe di Siusi",
          title: "Lyžovačka nad najväčšou alpskou lúkou Európy",
          text:
            "Lanovka priamo z údolia na širokú slnečnú náhornú plošinu. Mierne, nekonečné zjazdovky a dolomitské steny za každou zákrutou.",
          notes: ["Použite lanovku z údolia, nie auto", "Najľahší lyžiarsky deň — dobrý pre zmiešané úrovne", "Obed hore na plošine"],
        },
      },
      {
        day: 6,
        date: "Day 6",
        dateSk: "6. deň",
        x: 186,
        y: 350,
        place: "Nova Levante & Tires",
        title: "A slower day",
        text:
          "One cable car for the view, a walk around the village we are staying in and a long lunch. The trip needs one day like this and this is it.",
        notes: ["Short drive only", "Village walk and a proper long lunch", "Early night before the last ski day"],
        sk: {
          place: "Nova Levante a Tires",
          title: "Pomalší deň",
          text:
            "Jedna lanovka pre výhľad, prechádzka dedinou, kde bývame, a dlhý obed. Každá cesta potrebuje jeden takýto deň a toto je on.",
          notes: ["Len krátka jazda autom", "Prechádzka dedinou a poriadne dlhý obed", "Skoro spať pred posledným lyžiarskym dňom"],
        },
      },
      {
        day: 7,
        date: "Day 7",
        dateSk: "7. deň",
        x: 116,
        y: 225,
        peak: true,
        place: "Selva → Merano",
        title: "Last ski day, then wellness",
        text:
          "Morning in Val Gardena on the best-known slopes of the region, then we drive down out of the snow to Merano and check into the hotel we keep this trip's one splurge for.",
        notes: ["Ski until early afternoon, then drive", "Wellness hotel — book months ahead", "Warmest evening of the week"],
        sk: {
          place: "Selva → Merano",
          title: "Posledný deň na lyžiach a potom wellness",
          text:
            "Ráno vo Val Gardene na najznámejších svahoch regiónu a potom zídeme autom zo snehu do Merana, do hotela, pre ktorý si na tejto ceste šetríme jedno priplatenie.",
          notes: ["Lyžujte do skorého poobedia, potom presun", "Wellness hotel — rezervujte mesiace dopredu", "Najteplejší večer týždňa"],
        },
      },
      {
        day: 8,
        date: "Day 8",
        dateSk: "8. deň",
        x: 152,
        y: 310,
        place: "Merano & Bolzano",
        title: "Two towns, then home",
        text:
          "A morning in Merano, a stop in Bolzano for a walk and whatever you want to carry home, and then the long, quiet drive back.",
        notes: ["Leave the car parked in the centre", "Shopping and lunch in Bolzano", "Drive home in the afternoon"],
        sk: {
          place: "Merano a Bolzano",
          title: "Dve mestá a potom domov",
          text:
            "Ráno v Merane, zastávka v Bolzane na prechádzku a na to, čo si chcete odniesť domov, a potom dlhá tichá cesta späť.",
          notes: ["Auto nechajte zaparkované v centre", "Nákupy a obed v Bolzane", "Poobede odchod domov"],
        },
      },
    ],
  },
  switzerland: {
    title: "Ten days, day by day",
    titleSk: "Desať dní, deň po dni",
    lead:
      "Fly into Zürich, fly home from Geneva. Tap a day to see where the route takes you — the full detail, times and prices live inside the guide.",
    leadSk:
      "Prílet do Zürichu, odlet zo Ženevy. Kliknite na deň a uvidíte, kam vás trasa zavedie — celý detail, časy a ceny nájdete v sprievodcovi.",
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
