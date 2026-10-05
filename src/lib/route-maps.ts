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
  /** Optional local map area used to separate a long journey from a city detail */
  mapArea?: "canada-journey" | "new-york";
  sk: DayStopText;
};

export type RouteMap = {
  title: string;
  titleSk: string;
  lead: string;
  leadSk: string;
  /** Background scenery drawn behind the route; default is mountains */
  scenery?: "coast" | "north-america" | "japan" | "alpine-winter" | "highlands";
  days: DayStop[];
};

export const routeMaps: Record<string, RouteMap> = {
  "dolomites-winter": {
    scenery: "alpine-winter",
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
        x: 590,
        y: 300,
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
        x: 560,
        y: 400,
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
        x: 250,
        y: 390,
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
        x: 240,
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
        x: 330,
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
        x: 330,
        y: 470,
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
        x: 450,
        y: 240,
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
        x: 100,
        y: 230,
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
  "toronto-new-york": {
    title: "Fourteen days, day by day",
    titleSk: "Štrnásť dní, deň po dni",
    lead:
      "Toronto, the falls and a long panoramic train down to New York. Tap a day to see where the route takes you — the full detail, times and prices live inside the guide.",
    leadSk:
      "Toronto, vodopády a dlhý panoramatický vlak dole do New Yorku. Kliknite na deň a uvidíte, kam vás trasa zavedie — celý detail, časy a ceny nájdete v sprievodcovi.",
    scenery: "north-america",
    days: [
      {
        day: 1,
        date: "Toronto",
        dateSk: "Toronto",
        x: 170,
        y: 180,
        mapArea: "canada-journey",
        place: "Toronto",
        title: "Landing, the skyline and a ball game",
        text:
          "We land around midday, drop the bags downtown and walk the city in a loop from the tower to the waterfront. The evening belongs to a baseball night and then Toronto after dark.",
        notes: ["Downtown base for three nights", "Long first walk, no rush", "Evening: ball game, then night walk"],
        sk: {
          place: "Toronto",
          title: "Prílet, panoráma a zápas",
          text:
            "Pristávame okolo obeda, batožinu necháme v centre a mesto si prejdeme v okruhu od veže k nábrežiu. Večer patrí baseballu a potom nočnému Torontu.",
          notes: ["Základňa v centre na tri noci", "Dlhá prvá prechádzka, bez zhonu", "Večer: zápas a nočná prechádzka"],
        },
      },
      {
        day: 2,
        date: "Toronto",
        dateSk: "Toronto",
        x: 170,
        y: 180,
        mapArea: "canada-journey",
        place: "Toronto",
        title: "Brunch, old brick and the city underneath",
        text:
          "A slow brunch first, then the historic districts, the big squares and a street of murals. Later we disappear into the underground walkway system and come up in the markets.",
        notes: ["Brunch, then the historic quarter", "Squares, murals, old city hall", "Underground walkways and market halls"],
        sk: {
          place: "Toronto",
          title: "Brunch, stará tehla a mesto pod mestom",
          text:
            "Najprv pomalý brunch, potom historické štvrte, veľké námestia a ulica plná murálov. Neskôr zmizneme do podzemného systému chodieb a vynoríme sa v trhoviskách.",
          notes: ["Brunch a historická štvrť", "Námestia, murály, stará radnica", "Podzemné chodby a tržnice"],
        },
      },
      {
        day: 3,
        date: "Islands",
        dateSk: "Ostrovy",
        x: 170,
        y: 180,
        mapArea: "canada-journey",
        place: "Toronto Islands",
        title: "A ferry, an island and the best view back",
        text:
          "A short ferry takes us over to the islands for the postcard view of the skyline. Back on shore we wander the most colourful neighbourhoods and pick up the sweet things to carry home.",
        notes: ["Ferry from the downtown terminal", "Islands, then the colourful quarters", "Maple everything for home"],
        sk: {
          place: "Torontské ostrovy",
          title: "Trajekt, ostrov a najlepší pohľad späť",
          text:
            "Krátky trajekt nás prevezie na ostrovy s pohľadnicovým výhľadom na panorámu mesta. Po návrate sa túlame najfarebnejšími štvrťami a nakúpime sladkosti domov.",
          notes: ["Trajekt z terminálu v centre", "Ostrovy a potom farebné štvrte", "Javorové dobroty domov"],
        },
      },
      {
        day: 4,
        date: "Niagara",
        dateSk: "Niagara",
        x: 310,
        y: 292,
        mapArea: "canada-journey",
        place: "Niagara Falls",
        peak: true,
        title: "Right under the falls",
        text:
          "A bus ride and suddenly there is water everywhere. We go down to the boat that sails straight into the spray, stay for sunset over the falls and finish with fireworks above the water.",
        notes: ["Room with a view is worth it", "Boat right up to the falls", "Sunset, then fireworks"],
        sk: {
          place: "Niagarské vodopády",
          title: "Priamo pod vodopádmi",
          text:
            "Cesta autobusom a zrazu je všade naokolo voda. Ideme dole k lodi, ktorá pláva rovno do vodnej triešte, zostaneme na západ slnka nad vodopádmi a deň zakončí ohňostroj nad vodou.",
          notes: ["Izba s výhľadom sa oplatí", "Loď priamo k vodopádom", "Západ slnka a potom ohňostroj"],
        },
      },
      {
        day: 5,
        date: "Train south",
        dateSk: "Vlak na juh",
        x: 565,
        y: 432,
        mapArea: "canada-journey",
        place: "Niagara → New York",
        peak: true,
        title: "Sunrise over the water, then the long train",
        text:
          "Sunrise from the window above the falls, and then the panoramic train that takes the whole day to roll down to New York. You arrive in the evening, straight into Manhattan.",
        notes: ["Sunrise from the room", "All-day panoramic train", "Evening arrival in Manhattan"],
        sk: {
          place: "Niagara → New York",
          title: "Východ slnka nad vodou a potom dlhý vlak",
          text:
            "Východ slnka z okna nad vodopádmi a potom panoramatický vlak, ktorému trvá celý deň, kým sa dovezie do New Yorku. Prichádzate večer, rovno do Manhattanu.",
          notes: ["Východ slnka z izby", "Celodenný panoramatický vlak", "Večerný príchod do Manhattanu"],
        },
      },
      {
        day: 6,
        date: "New York",
        dateSk: "New York",
        x: 350,
        y: 235,
        mapArea: "new-york",
        place: "New York",
        title: "Midtown, all of it at once",
        text:
          "The first full day is the one you have seen in every film: the big station, the library, the avenues and the bridge with the famous sunset alignment. The night ends somewhere loud and fun.",
        notes: ["Midtown on foot", "Station, library, avenues", "A night out to remember"],
        sk: {
          place: "New York",
          title: "Midtown, celý naraz",
          text:
            "Prvý celý deň je presne ten z filmov: veľká stanica, knižnica, avenue a most so slávnym výhľadom na zapadajúce slnko. Noc končí niekde hlučne a veselo.",
          notes: ["Midtown pešo", "Stanica, knižnica, avenue", "Večer, na ktorý sa nezabúda"],
        },
      },
      {
        day: 7,
        date: "Central Park",
        dateSk: "Central Park",
        x: 350,
        y: 120,
        mapArea: "new-york",
        place: "Central Park",
        title: "Half a day in the park, half a night on Broadway",
        text:
          "We give the park a proper half day, then dinner and a Broadway show. Afterwards Times Square at night and a rooftop somewhere above it all.",
        notes: ["Half a day in the park", "Dinner, then a show", "Times Square by night, rooftop after"],
        sk: {
          place: "Central Park",
          title: "Pol dňa v parku, pol noci na Broadwayi",
          text:
            "Parku venujeme poctivé pol dňa, potom večera a broadwayské predstavenie. Po ňom nočné Times Square a strešný bar niekde nad tým všetkým.",
          notes: ["Pol dňa v parku", "Večera a predstavenie", "Nočné Times Square a rooftop"],
        },
      },
      {
        day: 8,
        date: "Downtown",
        dateSk: "Downtown",
        x: 350,
        y: 385,
        mapArea: "new-york",
        place: "Downtown",
        title: "The free ferry, the statue and downtown",
        text:
          "The ferry that costs nothing gives you the statue and the whole skyline from the water. Then downtown on foot, the memorial, the old streets and a dinner we still talk about.",
        notes: ["Free ferry past the statue", "Downtown on foot", "Dinner in the old streets"],
        sk: {
          place: "Downtown",
          title: "Trajekt zadarmo, socha a downtown",
          text:
            "Trajekt, ktorý nič nestojí, vám dá sochu aj celú panorámu z vody. Potom downtown pešo, pamätník, staré ulice a večera, o ktorej sa stále rozprávame.",
          notes: ["Trajekt zadarmo popri soche", "Downtown pešo", "Večera v starých uliciach"],
        },
      },
      {
        day: 9,
        date: "West Village",
        dateSk: "West Village",
        x: 275,
        y: 305,
        mapArea: "new-york",
        place: "West Village",
        title: "The city of your favourite series",
        text:
          "An old railway turned into a garden above the street, then the village where every second doorway is from a series you know by heart. We finish high above the city at sunset.",
        notes: ["Elevated park, then the village", "The famous doorways", "Sunset from above"],
        sk: {
          place: "West Village",
          title: "Mesto vašich obľúbených seriálov",
          text:
            "Stará železnica premenená na záhradu nad ulicou a potom štvrť, kde je každý druhý vchod z nejakého seriálu, ktorý poznáte naspamäť. Deň končíme vysoko nad mestom pri západe slnka.",
          notes: ["Park nad ulicou a potom štvrť", "Slávne vchody", "Západ slnka zhora"],
        },
      },
      {
        day: 10,
        date: "Brooklyn",
        dateSk: "Brooklyn",
        x: 475,
        y: 365,
        mapArea: "new-york",
        place: "Brooklyn",
        peak: true,
        title: "Sunrise on the bridge",
        text:
          "We get up in the dark to have the bridge almost to ourselves, then cross to the other side for the view everyone knows. The rest of the day is Brooklyn, a water taxi and the money streets.",
        notes: ["Very early start for the bridge", "The classic view from the other side", "Water taxi back, then Wall Street"],
        sk: {
          place: "Brooklyn",
          title: "Východ slnka na moste",
          text:
            "Vstávame za tmy, aby sme mali most skoro pre seba, a potom prejdeme na druhú stranu pre ten výhľad, ktorý pozná každý. Zvyšok dňa patrí Brooklynu, lodnému taxíku a uliciam peňazí.",
          notes: ["Veľmi skorý štart kvôli mostu", "Klasický výhľad z druhej strany", "Lodný taxík späť a Wall Street"],
        },
      },
      {
        day: 11,
        date: "New York",
        dateSk: "New York",
        x: 375,
        y: 245,
        mapArea: "new-york",
        place: "New York",
        title: "Back to the places you already miss",
        text:
          "A free day for the corners you want to see twice, and in the afternoon the highest open deck in the city with dinner as the lights come on.",
        notes: ["Your own favourites, second time round", "Afternoon on the high deck", "Dinner with the lights"],
        sk: {
          place: "New York",
          title: "Späť na miesta, ktoré vám už chýbajú",
          text:
            "Voľný deň na kúty, ktoré chcete vidieť druhýkrát, a poobede najvyššia otvorená terasa v meste s večerou presne vtedy, keď sa rozsvieti.",
          notes: ["Vaše obľúbené miesta druhýkrát", "Poobede vysoká terasa", "Večera pri rozsvietenom meste"],
        },
      },
      {
        day: 12,
        date: "Coney Island",
        dateSk: "Coney Island",
        x: 505,
        y: 475,
        mapArea: "new-york",
        place: "Coney Island",
        title: "Beach, funfair and a stadium",
        text:
          "A subway ride to the ocean, an old wooden funfair and a beach that feels nothing like Manhattan. In the evening a baseball night uptown and Times Square one more time.",
        notes: ["Subway to the beach", "Old funfair afternoon", "Evening game, then Times Square"],
        sk: {
          place: "Coney Island",
          title: "Pláž, lunapark a štadión",
          text:
            "Metrom k oceánu, starý drevený lunapark a pláž, ktorá vôbec nepripomína Manhattan. Večer zápas na severe mesta a ešte raz Times Square.",
          notes: ["Metrom na pláž", "Poobede starý lunapark", "Večer zápas a Times Square"],
        },
      },
      {
        day: 13,
        date: "New York",
        dateSk: "New York",
        x: 330,
        y: 270,
        mapArea: "new-york",
        place: "New York",
        peak: true,
        title: "The city from a helicopter, at night",
        text:
          "One last wander and then the part we would fly back for: a night helicopter ride with the doors open above the lights. A slice of pizza afterwards is exactly right.",
        notes: ["Last wander and shopping", "Night helicopter, doors open", "Pizza and a night walk"],
        sk: {
          place: "New York",
          title: "Mesto z helikoptéry, v noci",
          text:
            "Ešte posledné túlanie a potom to, kvôli čomu by sme sa vrátili: nočný let helikoptérou s otvorenými dverami nad svetlami. Kúsok pizze po ňom sedí presne.",
          notes: ["Posledné túlanie a nákupy", "Nočná helikoptéra s otvorenými dverami", "Pizza a nočná prechádzka"],
        },
      },
      {
        day: 14,
        date: "Fly home",
        dateSk: "Let domov",
        x: 575,
        y: 300,
        mapArea: "new-york",
        place: "New York",
        title: "Home",
        text: "A last morning in the city and then the flight home, with a camera roll that will take weeks to go through.",
        notes: ["Morning to spare", "Flight home"],
        sk: {
          place: "New York",
          title: "Domov",
          text: "Posledné ráno v meste a potom let domov, s fotkami, ktoré budete prezerať ešte týždne.",
          notes: ["Ráno ešte pre seba", "Let domov"],
        },
      },
    ],
  },
  riviera: {
    title: "Seven days, day by day",
    titleSk: "Sedem dní, deň po dni",
    lead:
      "One rental car from Marseille to Nice, through Provence and along the coast to Menton. Tap a day to see where the road takes you — the full detail, times and prices live inside the guide.",
    leadSk:
      "Jedno požičané auto z Marseille do Nice, cez Provensálsko a popri pobreží do Mentonu. Kliknite na deň a uvidíte, kam vás cesta zavedie — celý detail, časy a ceny nájdete v sprievodcovi.",
    scenery: "coast",
    days: [
      {
        day: 1,
        date: "Day 1",
        dateSk: "1. deň",
        x: 180,
        y: 400,
        place: "Marseille → Roussillon",
        title: "Old ports, hilltop villages and an ochre sunset",
        text:
          "An early landing in Marseille, pick up the car and walk the old town and the Vieux-Port. Then north to Avignon and the island-town of L'Isle-sur-la-Sorgue, a look at Gordes from afar, and the day ends in Roussillon, glowing red at sunset.",
        notes: ["Pick up the rental car at the airport", "Dinner at Table des Orcres in Roussillon", "Night at Hotel Omma, Roussillon"],
        sk: {
          place: "Marseille → Roussillon",
          title: "Staré prístavy, dedinky na kopcoch a okrový západ slnka",
          text:
            "Skorý prílet do Marseille, vyzdvihnutie auta a prechádzka starým mestom a Vieux-Port. Potom na sever do Avignonu a ostrovného mestečka L'Isle-sur-la-Sorgue, pohľad na Gordes z diaľky a deň končí v Roussillone, ktorý pri západe slnka žiari načerveno.",
          notes: ["Auto si vyzdvihnite na letisku", "Večera v Table des Orcres v Roussillone", "Noc v Hotel Omma, Roussillon"],
        },
      },
      {
        day: 2,
        date: "Day 2",
        dateSk: "2. deň",
        x: 285,
        y: 350,
        peak: true,
        place: "Verdon Gorge → Cannes",
        title: "Lavender roads and a turquoise canyon",
        text:
          "Morning views from the cliffs of Roussillon, then a drive past the lavender fields of Valensole to the Verdon Gorge — a pedal boat and a swim inside the canyon. A stroll through Moustiers-Sainte-Marie, and by evening you are on the Croisette in Cannes.",
        notes: ["Rent a pedal boat at Plage du Galetas", "Lunch at Les Tables du Cloître, Moustiers", "Night at Hotel Verlaine, Cannes", "Fireworks dinner at Miramar Plage"],
        sk: {
          place: "Verdonská tiesňava → Cannes",
          title: "Levanduľové cesty a tyrkysový kaňon",
          text:
            "Ranné výhľady z brál Roussillonu, potom cesta popri levanduľových poliach Valensole ku kaňonu Verdon — šlapadlo a kúpanie priamo v kaňone. Prechádzka Moustiers-Sainte-Marie a večer ste už na Croisette v Cannes.",
          notes: ["Šlapadlo si požičajte na Plage du Galetas", "Obed v Les Tables du Cloître, Moustiers", "Noc v Hotel Verlaine, Cannes", "Večera s ohňostrojom v Miramar Plage"],
        },
      },
      {
        day: 3,
        date: "Day 3",
        dateSk: "3. deň",
        x: 295,
        y: 415,
        place: "Saint-Tropez",
        title: "Beach club day and a harbour sunset",
        text:
          "A slow move to Saint-Tropez and straight to the sand: the day belongs to Beach Club Verde. As the light softens, walk the old town, share a tarte tropézienne and sit by the water in the Port de Saint-Tropez.",
        notes: ["Beach Club Verde — book a lounger ahead", "Tarte tropézienne from the original bakery", "Night at Hotel Playa, Saint-Tropez"],
        sk: {
          place: "Saint-Tropez",
          title: "Deň v beach clube a západ slnka v prístave",
          text:
            "Pokojný presun do Saint-Tropez a rovno na piesok: deň patrí Beach Clubu Verde. Keď svetlo zmäkne, prejdite staré mesto, rozdelte sa o tarte tropézienne a posaďte sa pri vode v Port de Saint-Tropez.",
          notes: ["Beach Club Verde — lehátko rezervujte dopredu", "Tarte tropézienne z pôvodnej cukrárne", "Noc v Hotel Playa, Saint-Tropez"],
        },
      },
      {
        day: 4,
        date: "Day 4",
        dateSk: "4. deň",
        x: 295,
        y: 415,
        place: "Saint-Tropez",
        title: "Pastry at opening time, party lunch, custom sandals",
        text:
          "Breakfast from Cédric Grolet — arrive at opening, the queue builds fast — eaten sitting by the port. Lunch at Bagatelle is a reservation-only affair that turns into a party. The afternoon is for La Ponche, Place des Lices and made-to-measure sandals at Rondini.",
        notes: ["Cédric Grolet — come at opening time", "Bagatelle lunch — book well ahead", "Custom sandals at Rondini", "Dinner at Gigi — reservation needed"],
        sk: {
          place: "Saint-Tropez",
          title: "Koláčiky na otváračku, party obed a sandále na mieru",
          text:
            "Raňajky od Cédrica Groleta — príďte na otváračku, rady rastú rýchlo — zjedené pri prístave. Obed v Bagatelle je len na rezerváciu a končí sa party. Popoludnie patrí La Ponche, Place des Lices a sandálom na mieru od Rondini.",
          notes: ["Cédric Grolet — príďte na otváračku", "Obed v Bagatelle — rezervujte poriadne dopredu", "Sandále na mieru u Rondini", "Večera v Gigi — treba rezerváciu"],
        },
      },
      {
        day: 5,
        date: "Day 5",
        dateSk: "5. deň",
        x: 370,
        y: 390,
        place: "Port Grimaud → Nice",
        title: "Little Venice, perfume making and the Baie des Anges",
        text:
          "Breakfast at Senequier, then the canals of Port Grimaud and a seaside stroll in Sainte-Maxime. In Grasse you blend your own perfume at Galimard, and by afternoon you are swimming off the pebbles of Nice.",
        notes: ["Galimard perfume workshop — book ahead", "Night at Hotel Albert 1er, Nice", "Dinner at La Villa d'Este, Nice"],
        sk: {
          place: "Port Grimaud → Nice",
          title: "Malé Benátky, výroba parfumu a Záliv anjelov",
          text:
            "Raňajky v Senequier, potom kanály Port Grimaud a prechádzka pri mori v Sainte-Maxime. V Grasse si v Galimarde namiešate vlastný parfum a poobede sa kúpete na kamienkovej pláži v Nice.",
          notes: ["Parfumový workshop Galimard — objednajte dopredu", "Noc v Hotel Albert 1er, Nice", "Večera v La Villa d'Este, Nice"],
        },
      },
      {
        day: 6,
        date: "Day 6",
        dateSk: "6. deň",
        x: 430,
        y: 385,
        peak: true,
        place: "Èze → Monaco",
        title: "A medieval eagle's nest and a night in Monte Carlo",
        text:
          "A coastal drive with photo stops through Villefranche-sur-Mer and Saint-Jean-Cap-Ferrat, then up to the medieval lanes of Èze and coffee at Château Eza. Sleep in Menton, then a taxi over the border for an evening in Monaco — casino, harbour and fireworks.",
        notes: ["Lunch at Riviera Restaurant, Roquebrune-Cap-Martin", "Night at Hotel Vendôme, Menton", "Bring your passport for the casino", "Taxi back — make sure it crosses to the French side"],
        sk: {
          place: "Èze → Monaco",
          title: "Stredoveké orlie hniezdo a noc v Monte Carle",
          text:
            "Jazda po pobreží so zastávkami na fotky cez Villefranche-sur-Mer a Saint-Jean-Cap-Ferrat, potom hore do stredovekých uličiek Èze a káva v Château Eza. Spíte v Mentone a večer taxíkom cez hranicu do Monaka — kasíno, prístav a ohňostroj.",
          notes: ["Obed v Riviera Restaurant, Roquebrune-Cap-Martin", "Noc v Hotel Vendôme, Menton", "Do kasína nezabudnite pasy", "Taxík späť — musí prejsť do francúzskej časti"],
        },
      },
      {
        day: 7,
        date: "Day 7",
        dateSk: "7. deň",
        x: 445,
        y: 380,
        place: "Menton → Nice",
        title: "Lemons, one last swim and the flight home",
        text:
          "A slow morning in Menton: the old town, the basilica and the Promenade du Soleil. A few hours at La Cabane Plage, then drop the car and fly home from Nice with salt still on your skin.",
        notes: ["Beach club La Cabane Plage, Menton", "Return the car before the flight", "Fly home from Nice"],
        sk: {
          place: "Menton → Nice",
          title: "Citróny, posledné kúpanie a let domov",
          text:
            "Pokojné ráno v Mentone: staré mesto, bazilika a Promenade du Soleil. Pár hodín v La Cabane Plage, potom odovzdajte auto a odlet z Nice — so soľou ešte stále na pokožke.",
          notes: ["Beach club La Cabane Plage, Menton", "Auto odovzdajte pred letom", "Odlet z Nice"],
        },
      },
    ],
  },
  japan: {
    scenery: "japan",
    title: "Eighteen days, day by day",
    titleSk: "Osemnásť dní, deň po dni",
    lead:
      "From Osaka's neon to Kyoto's temples, a night under Mt. Fuji and a long week in Tokyo. Tap a day to see where the route takes you — the full detail, times and prices live inside the guide.",
    leadSk:
      "Od neónov Osaky cez kjotské chrámy, noc pod horou Fudži a dlhý týždeň v Tokiu. Kliknite na deň a uvidíte, kam vás trasa zavedie — celý detail, časy a ceny nájdete v sprievodcovi.",
    days: [
      {
        day: 1,
        date: "Day 1",
        dateSk: "1. deň",
        x: 220,
        y: 395,
        place: "Osaka",
        title: "Landing in the kitchen of Japan",
        text:
          "An early arrival in Osaka and straight into the rhythm: an evening walk through Kitahama, Shinsaibashi and the neon of Dotonbori, ending with dinner in the backstreets.",
        notes: ["Hotel The Royal Park Canvas, Osaka Kitahama", "Dinner at Mihoro Kawaramachi"],
        sk: {
          place: "Osaka",
          title: "Prílet do kuchyne Japonska",
          text:
            "Skorý prílet do Osaky a rovno do rytmu mesta: podvečerná prechádzka cez Kitahamu, Šinsaibaši a neóny Dotonbori, na záver večera v bočných uličkách.",
          notes: ["Hotel The Royal Park Canvas, Osaka Kitahama", "Večera v Mihoro Kawaramachi"],
        },
      },
      {
        day: 2,
        date: "Day 2",
        dateSk: "2. deň",
        x: 220,
        y: 395,
        place: "Osaka",
        title: "The castle, the old quarter and a glowing garden",
        text:
          "Osaka Castle and its gardens in the morning, then the retro streets of Shinsekai and Tsutenkaku. The evening belongs to Nagai Park and the teamLab botanical garden after dark.",
        notes: ["teamLab Botanical Garden — book ahead", "Skip the backstreets of Sanno at night"],
        sk: {
          place: "Osaka",
          title: "Hrad, stará štvrť a žiariaca záhrada",
          text:
            "Ráno hrad Osaka a jeho záhrady, potom retro ulice Šinsekai a Cútenkaku. Večer patrí parku Nagai a botanickej záhrade teamLab po zotmení.",
          notes: ["teamLab Botanical Garden — rezervujte dopredu", "Štvrti Sanno sa v noci radšej vyhnite"],
        },
      },
      {
        day: 3,
        date: "Day 3",
        dateSk: "3. deň",
        x: 95,
        y: 420,
        peak: true,
        place: "Hiroshima → Kobe",
        title: "A morning that matters, then the Venice of Japan",
        text:
          "A day trip to Hiroshima: the Peace Memorial Park, the museum and the Atomic Bomb Dome. On the way back, a walk and a canal boat in Kurashiki's old Bikan quarter — Japan's denim town — and the night ends in Kobe over a proper steak.",
        notes: ["Hiroshima Peace Memorial Museum — go early", "Coffee and cake at Miyake Shoten, Kurashiki", "Kobe beef steak for dinner"],
        sk: {
          place: "Hirošima → Kobe",
          title: "Ráno, na ktoré sa nezabúda, a potom Benátky Japonska",
          text:
            "Jednodňový výlet do Hirošimy: Mierový memoriálový park, múzeum a Kupola atómovej bomby. Cestou späť prechádzka a plavba kanálom v historickej štvrti Bikan v Kurašiki — meste japonského denimu — a noc končí v Kobe pri poriadnom steaku.",
          notes: ["Múzeum mieru v Hirošime — choďte skoro", "Káva a koláčik v Miyake Shoten, Kurašiki", "Na večeru kóbe steak"],
        },
      },
      {
        day: 4,
        date: "Day 4",
        dateSk: "4. deň",
        x: 220,
        y: 395,
        place: "Osaka",
        title: "Viral cheesecake and bookshop hunting",
        text:
          "A slower Osaka day around Namba: the famous wobbly Rikuro's cheesecake, a crawl through the city's Book Off second-hand stores and an evening of yakiniku.",
        notes: ["Rikuro's cheesecake — expect a line", "Dinner at Yakiniku Gori-chan", "Shisha at Octave"],
        sk: {
          place: "Osaka",
          title: "Virálny cheesecake a lov po knižných bazároch",
          text:
            "Pokojnejší deň v Osake okolo Namby: slávny jemný Rikuro's cheesecake, obchádzka bazárov Book Off a večer jakiniku.",
          notes: ["Rikuro's cheesecake — čakajte radu", "Večera v Yakiniku Gori-chan", "Shisha v Octave"],
        },
      },
      {
        day: 5,
        date: "Day 5",
        dateSk: "5. deň",
        x: 262,
        y: 335,
        place: "Kyoto",
        title: "Pancakes, shrines and an onsen evening",
        text:
          "A short move to Kyoto, starting with the viral pancakes at Panel. The afternoon is a long walk from Yasaka Shrine through the eastern lanes, and the day ends in the hotel onsen.",
        notes: ["Hotel Sequence Kyoto Gojo", "Panel pancakes — viral, go early", "Onsen in the hotel"],
        sk: {
          place: "Kjoto",
          title: "Pancakes, svätyne a večer v onsene",
          text:
            "Krátky presun do Kjota, ktorý začína virálnymi pancakes v Panel. Popoludnie patrí dlhej prechádzke od svätyne Jasaka cez východné uličky a deň končí v hotelovom onsene.",
          notes: ["Hotel Sequence Kyoto Gojo", "Pancakes v Panel — virálne, príďte skoro", "Onsen v hoteli"],
        },
      },
      {
        day: 6,
        date: "Day 6",
        dateSk: "6. deň",
        x: 262,
        y: 335,
        place: "Kyoto",
        title: "Bamboo forest and a ring you make yourself",
        text:
          "Morning in the Arashiyama bamboo grove and Tenryu-ji temple, then back in town for two very Japanese souvenirs: a handmade ring at Glanta and your own scent at My Only Fragrance.",
        notes: ["Bamboo forest — go before the crowds", "Ring making at Glanta", "Perfume making at My Only Fragrance"],
        sk: {
          place: "Kjoto",
          title: "Bambusový les a prsteň, ktorý si vyrobíte sami",
          text:
            "Ráno v bambusovom lese Arašijama a v chráme Tenryu-dži, potom späť v meste dve veľmi japonské suveníry: ručne robený prsteň v Glanta a vlastná vôňa v My Only Fragrance.",
          notes: ["Bambusový les — choďte pred davmi", "Výroba prsteňov v Glanta", "Výroba parfumu v My Only Fragrance"],
        },
      },
      {
        day: 7,
        date: "Day 7",
        dateSk: "7. deň",
        x: 305,
        y: 410,
        place: "Nara → Kyoto",
        title: "Deer, a giant Buddha and tea to take home",
        text:
          "A day in Nara: the park deer, the great Buddha of Todai-ji and the lanterns of Kasuga Taisha. Back in Kyoto, stop at Le Labo and stock up on tea at Lupicia.",
        notes: ["Nara deer bow for crackers", "Le Labo and Lupicia tea in Kyoto", "Dinner at India Koisus"],
        sk: {
          place: "Nara → Kjoto",
          title: "Jelene, obrovský Budha a čaj na cestu domov",
          text:
            "Deň v Nare: jelene v parku, veľký Budha v Tódai-dži a lampióny Kasuga Taiša. Späť v Kjote zastávka v Le Labo a zásoby čaju z Lupicia.",
          notes: ["Jelene v Nare sa klaňajú za sušienky", "Le Labo a čaje Lupicia v Kjote", "Večera v India Koisus"],
        },
      },
      {
        day: 8,
        date: "Day 8",
        dateSk: "8. deň",
        x: 262,
        y: 335,
        peak: true,
        place: "Kyoto",
        title: "A tea ceremony in kimono",
        text:
          "The most Kyoto day of all: a matcha ceremony dressed in kimono at Maikoya, then a walk in full dress up to Kiyomizu-dera. Jelly flowers at Rokujuan, sunset drinks at rooftop bar K36 and dinner at Matt Restaurant 2.0.",
        notes: ["Kimono tea ceremony at Maikoya — book ahead", "Rooftop bar K36 at sunset", "Dinner at Matt Restaurant 2.0"],
        sk: {
          place: "Kjoto",
          title: "Čajový obrad v kimone",
          text:
            "Najkjotskejší deň zo všetkých: obrad mačy v kimone v Maikoya a potom prechádzka v plnom rúchu hore ku Kijomizu-dera. Želé kvietky v Rokujuan, drink pri západe slnka na rooftop bare K36 a večera v Matt Restaurant 2.0.",
          notes: ["Čajový obrad v kimone v Maikoya — rezervujte dopredu", "Rooftop bar K36 pri západe slnka", "Večera v Matt Restaurant 2.0"],
        },
      },
      {
        day: 9,
        date: "Day 9",
        dateSk: "9. deň",
        x: 400,
        y: 330,
        peak: true,
        place: "Fushimi Inari → Kawaguchiko",
        title: "Ten thousand gates, then the mountain",
        text:
          "Morning under the vermilion gates of Fushimi Inari, then the long ride east with a stop in Mishima. The reward: a night at Hotel Ubuya, an onsen with Mt. Fuji filling the window.",
        notes: ["Fushimi Inari — go early morning", "Hotel Ubuya, Kawaguchiko", "Onsen with a Fuji view", "Dinner at the hotel"],
        sk: {
          place: "Fušimi Inari → Kawagučiko",
          title: "Desaťtisíc brán a potom hora",
          text:
            "Ráno pod červenými bránami Fušimi Inari, potom dlhá cesta na východ so zastávkou v Mišime. Odmena: noc v Hotel Ubuya, onsen s Fudži priamo v okne.",
          notes: ["Fušimi Inari — choďte skoro ráno", "Hotel Ubuya, Kawagučiko", "Onsen s výhľadom na Fudži", "Večera v hoteli"],
        },
      },
      {
        day: 10,
        date: "Day 10",
        dateSk: "10. deň",
        x: 400,
        y: 330,
        place: "Kawaguchiko → Tokyo",
        title: "The postcard view, then the capital",
        text:
          "One last look at Fuji from Arakurayama Sengen Park — the pagoda and the mountain in one frame — then the move to Tokyo.",
        notes: ["Arakurayama Sengen Park early for the view", "Check in to the Tokyo hotel"],
        sk: {
          place: "Kawagučiko → Tokio",
          title: "Pohľad ako z pohľadnice a potom hlavné mesto",
          text:
            "Posledný pohľad na Fudži z parku Arakurayama Sengen — pagoda a hora v jednom zábere — a potom presun do Tokia.",
          notes: ["Arakurayama Sengen skoro ráno kvôli výhľadu", "Ubytovanie v tokijskom hoteli"],
        },
      },
      {
        day: 11,
        date: "Day 11",
        dateSk: "11. deň",
        x: 560,
        y: 265,
        place: "Tokyo",
        title: "Shibuya, donuts and the sky at sunset",
        text:
          "Breakfast at Honolulu Coffee, then a full Shibuya day: the crossing, the shops, an I am donut? stop and the chaos of Takeshita Street. The day ends above it all at Shibuya Sky, timed for sunset.",
        notes: ["Shibuya Sky — book the sunset slot ahead", "I am donut? — worth the queue"],
        sk: {
          place: "Tokio",
          title: "Šibuja, donuty a obloha pri západe slnka",
          text:
            "Raňajky v Honolulu Coffee a potom celý deň v Šibuji: križovatka, obchody, zastávka v I am donut? a chaos Takeshita Street. Deň končí nad všetkým na Shibuya Sky, načasovaný na západ slnka.",
          notes: ["Shibuya Sky — slot na západ slnka rezervujte dopredu", "I am donut? — rada stojí za to"],
        },
      },
      {
        day: 12,
        date: "Day 12",
        dateSk: "12. deň",
        x: 505,
        y: 430,
        place: "Kamakura & Yokohama",
        title: "Big Buddha, a beach and the best pizza",
        text:
          "A day out of the city: Kamakura's temples and beach, lunch at Mahalo Enoshima, then Yokohama's giant Chinatown and Yamashita Park. Dinner is Savoy — arguably the best pizza in the world.",
        notes: ["Lunch at Mahalo Enoshima", "Yokohama Chinatown — the biggest in Japan", "Dinner at Savoy"],
        sk: {
          place: "Kamakura a Jokohama",
          title: "Veľký Budha, pláž a najlepšia pizza",
          text:
            "Deň mimo mesta: chrámy a pláž Kamakury, obed v Mahalo Enoshima, potom obrovská čínska štvrť v Jokohame a park Jamašita. Na večeru Savoy — vraj najlepšia pizza na svete.",
          notes: ["Obed v Mahalo Enoshima", "Čínska štvrť v Jokohame — najväčšia v Japonsku", "Večera v Savoy"],
        },
      },
      {
        day: 13,
        date: "Day 13",
        dateSk: "13. deň",
        x: 560,
        y: 265,
        place: "Tokyo",
        title: "Digital art and otter coffee",
        text:
          "Barefoot through the water rooms of teamLab Planets, then otters at Harry Harajuku Terrace and coffee at Ralph's. The evening is for shopping and a bowl of ramen.",
        notes: ["teamLab Planets — book ahead", "Otter café at Harry Harajuku Terrace", "Ramen for dinner"],
        sk: {
          place: "Tokio",
          title: "Digitálne umenie a káva s vydrami",
          text:
            "Naboso cez vodné miestnosti teamLab Planets, potom vydry v Harry Harajuku Terrace a káva v Ralph's. Večer patrí nákupom a miske ramenu.",
          notes: ["teamLab Planets — rezervujte dopredu", "Kaviareň s vydrami Harry Harajuku Terrace", "Na večeru ramen"],
        },
      },
      {
        day: 14,
        date: "Day 14",
        dateSk: "14. deň",
        x: 560,
        y: 265,
        place: "Tokyo",
        title: "A slow park day",
        text:
          "A breather: a long walk through the parks around Shiba and along the Meguro River, with unhurried shopping in between.",
        notes: ["Shiba Park and the Meguro River walk", "Keep this one slow — Disneyland is next"],
        sk: {
          place: "Tokio",
          title: "Pokojný deň v parkoch",
          text:
            "Deň na vydýchnutie: dlhá prechádzka parkmi okolo Šiby a popri rieke Meguro, medzitým pokojné nákupy.",
          notes: ["Park Šiba a prechádzka popri Meguro", "Nechajte tento deň pomalý — nasleduje Disneyland"],
        },
      },
      {
        day: 15,
        date: "Day 15",
        dateSk: "15. deň",
        x: 610,
        y: 355,
        place: "Tokyo Disneyland",
        title: "A full day in the Magic Kingdom",
        text:
          "Rope drop to fireworks: a whole day at Tokyo Disneyland. Use the app for priority passes and eat the snacks only this park does.",
        notes: ["Arrive before opening", "Priority passes in the app", "Stay for the evening parade"],
        sk: {
          place: "Tokyo Disneyland",
          title: "Celý deň v krajine kúziel",
          text:
            "Od otvorenia po ohňostroj: celý deň v Tokyo Disneylande. Použite aplikáciu na priority passy a ochutnajte maškrty, ktoré robí len tento park.",
          notes: ["Príďte pred otvorením", "Priority passy v aplikácii", "Zostaňte na večernú parádu"],
        },
      },
      {
        day: 16,
        date: "Day 16",
        dateSk: "16. deň",
        x: 440,
        y: 390,
        place: "Hakone",
        title: "Black eggs and the floating torii",
        text:
          "A day in Hakone: the ropeway over a steaming volcanic valley, the famous black eggs, and the Torii of Peace on the lake — yes, the photo queue really is that long.",
        notes: ["Hakone ropeway and the black eggs", "Torii of Peace — the longest photo queue of your life"],
        sk: {
          place: "Hakone",
          title: "Čierne vajcia a plávajúca brána tórii",
          text:
            "Deň v Hakone: lanovka nad dymiacim vulkanickým údolím, slávne čierne vajcia a Brána mieru na jazere — áno, rada na fotku je naozaj taká dlhá.",
          notes: ["Lanovka v Hakone a čierne vajcia", "Brána mieru — najdlhšie čakanie na fotku v živote"],
        },
      },
      {
        day: 17,
        date: "Day 17",
        dateSk: "17. deň",
        x: 560,
        y: 265,
        place: "Tokyo",
        title: "Borderless art and running sushi",
        text:
          "The last full day: teamLab Borderless in the morning, brunch with a view at the top of the mall, final shopping and a running-sushi dinner to say goodbye.",
        notes: ["teamLab Borderless — book ahead", "Running sushi for the farewell dinner"],
        sk: {
          place: "Tokio",
          title: "Umenie bez hraníc a bežiace suši",
          text:
            "Posledný plný deň: ráno teamLab Borderless, brunch s výhľadom hore v obchodnom centre, posledné nákupy a rozlúčková večera v running sushi.",
          notes: ["teamLab Borderless — rezervujte dopredu", "Rozlúčková večera v running sushi"],
        },
      },
      {
        day: 18,
        date: "Day 18",
        dateSk: "18. deň",
        x: 560,
        y: 265,
        place: "Tokyo",
        title: "One last coffee, then home",
        text:
          "A slow final morning, one last walk through the neighbourhood and the flight home — with a camera roll full of Japan.",
        notes: ["Flight home", "Leave for the airport with time to spare"],
        sk: {
          place: "Tokio",
          title: "Posledná káva a domov",
          text:
            "Pomalé posledné ráno, ešte jedna prechádzka po štvrti a let domov — s galériou plnou Japonska.",
          notes: ["Let domov", "Na letisko vyrazte s rezervou"],
        },
      },
    ],
  },
  scotland: {
    scenery: "highlands",
    title: "Seven days, day by day",
    titleSk: "Sedem dní, deň po dni",
    lead:
      "One car, one loop: Edinburgh, Perthshire and Loch Ness, three days on Skye, then Glencoe, the Skyfall road, Glasgow and a slow finish in Edinburgh. Tap a day to see where the route takes you — the full detail, times and prices live inside the guide.",
    leadSk:
      "Jedno auto, jeden okruh: Edinburgh, Perthshire a Loch Ness, tri dni na Skye, potom Glencoe, cesta zo Skyfallu, Glasgow a pomalý záver v Edinburghu. Kliknite na deň a uvidíte, kam vás trasa zavedie — celý detail, časy a ceny nájdete v sprievodcovi.",
    days: [
      {
        day: 1,
        date: "Day 1",
        dateSk: "1. deň",
        x: 430,
        y: 420,
        place: "Edinburgh → Pitlochry → Inverness",
        title: "Land, pick up the car, head north",
        text:
          "Arrival in Edinburgh and straight into the car, north through Perthshire: Pitlochry's main street, the dam and the fish ladder. On the way, the Queen's View lookout and the River Garry, then a walk around Urquhart Castle on the shore of Loch Ness before the night in Inverness.",
        notes: ["Car pick-up at Edinburgh airport", "Queen's View and River Garry are short roadside stops", "Night in Inverness"],
        sk: {
          place: "Edinburgh → Pitlochry → Inverness",
          title: "Prílet, auto a rovno na sever",
          text:
            "Prílet do Edinburghu a rovno do auta na sever cez Perthshire: hlavná ulica Pitlochry, priehrada a rybie schody. Po ceste vyhliadka Queen's View a rieka Garry, potom prechádzka okolo hradu Urquhart na brehu Loch Ness a noc v Inverness.",
          notes: ["Auto si vyzdvihnete na letisku v Edinburghu", "Queen's View a River Garry sú krátke zastávky pri ceste", "Noc v Inverness"],
        },
      },
      {
        day: 2,
        date: "Day 2",
        dateSk: "2. deň",
        x: 200,
        y: 180,
        peak: true,
        place: "Inverness → Eilean Donan → Skye",
        title: "The castle on the water, then the island",
        text:
          "West through Glenmoriston to Eilean Donan, the castle on its own little island, and over the bridge to Skye. A walk and lunch in Portree, then the north-east loop: Kilt Rock waterfall, Staffin Bay beach, Uig and a three-hour walk across the Quiraing. The day ends at the Fairy Glen.",
        notes: ["Quiraing walk — about 3 hours, sturdy shoes", "Kilt Rock viewpoint is right by the road", "Night at Greshornish House Hotel"],
        sk: {
          place: "Inverness → Eilean Donan → Skye",
          title: "Hrad na vode a potom ostrov",
          text:
            "Na západ cez Glenmoriston k Eilean Donan, hradu na vlastnom ostrovčeku, a cez most na Skye. Prechádzka a obed v Portree, potom severovýchodný okruh: vodopád Kilt Rock, pláž Staffin Bay, Uig a trojhodinová prechádzka cez Quiraing. Deň končí vo Fairy Glen.",
          notes: ["Quiraing — asi 3 hodiny, pevná obuv", "Vyhliadka Kilt Rock je priamo pri ceste", "Noc v Greshornish House Hotel"],
        },
      },
      {
        day: 3,
        date: "Day 3",
        dateSk: "3. deň",
        x: 130,
        y: 120,
        place: "Old Man of Storr → Neist Point",
        title: "The rock needle and the end of the world",
        text:
          "Morning hike up to the Old Man of Storr, the rock needle above the sea. Then across the island through Glendale to Neist Point, the lighthouse on the westernmost tip — the place that feels like the edge of the map.",
        notes: ["Storr car park fills up — go early", "Neist Point is windiest at sunset", "Night at Aurora Rural Retreats, Skye"],
        sk: {
          place: "Old Man of Storr → Neist Point",
          title: "Skalná ihla a koniec sveta",
          text:
            "Ranná túra k Old Man of Storr, skalnej ihle nad morom. Potom cez ostrov cez Glendale na Neist Point, maják na najzápadnejšom cípe — miesto, ktoré pôsobí ako okraj mapy.",
          notes: ["Parkovisko pod Storr sa rýchlo zaplní — choďte skoro", "Na Neist Point fúka najviac pri západe slnka", "Noc v Aurora Rural Retreats, Skye"],
        },
      },
      {
        day: 4,
        date: "Day 4",
        dateSk: "4. deň",
        x: 280,
        y: 260,
        peak: true,
        place: "Fairy Pools → Glenfinnan → Glencoe",
        title: "Blue pools and the Harry Potter viaduct",
        text:
          "South across the island — Kilmuir, Struan, Carbost — to Glen Brittle and a two-hour walk along the Fairy Pools waterfalls. Then off the island past Broadford to the Glenfinnan Viaduct, the one the Hogwarts Express crosses, and into Glencoe for the night.",
        notes: ["Fairy Pools walk — about 2 hours", "Time Glenfinnan for the steam train if you can", "Night at The Glencoe Inn"],
        sk: {
          place: "Fairy Pools → Glenfinnan → Glencoe",
          title: "Modré jazierka a viadukt z Harryho Pottera",
          text:
            "Na juh cez ostrov — Kilmuir, Struan, Carbost — do Glen Brittle na dvojhodinovú prechádzku popri vodopádoch Fairy Pools. Potom preč z ostrova okolo Broadfordu ku Glenfinnanskému viaduktu, cez ktorý jazdí Rokfortský expres, a na noc do Glencoe.",
          notes: ["Fairy Pools — asi 2 hodiny", "Glenfinnan si načasujte na parný vlak, ak to ide", "Noc v The Glencoe Inn"],
        },
      },
      {
        day: 5,
        date: "Day 5",
        dateSk: "5. deň",
        x: 330,
        y: 470,
        place: "Glen Etive → Glasgow",
        title: "The Skyfall road, then the city",
        text:
          "The detour that is worth every minute: Glen Etive, the single-track road from Skyfall and maybe the most beautiful drive in Scotland. Then Glasgow — the Kelvingrove gallery, the Highland cows in Pollok Country Park, the city centre and the best dinner of the trip at The Buttery. A concert, a night walk, and bed.",
        notes: ["Glen Etive is a dead end — you drive back the same way", "The Buttery — book ahead, order the pesto bread", "Night at Motel One Glasgow"],
        sk: {
          place: "Glen Etive → Glasgow",
          title: "Cesta zo Skyfallu a potom mesto",
          text:
            "Obchádzka, ktorá stojí za každú minútu: Glen Etive, úzka cesta zo Skyfallu a možno najkrajšia jazda v Škótsku. Potom Glasgow — galéria Kelvingrove, hájlandské kravičky v Pollok Country Parku, centrum a najlepšia večera cesty v The Buttery. Koncert, nočná prechádzka a spať.",
          notes: ["Glen Etive je slepá cesta — vraciate sa tou istou", "The Buttery — rezervujte dopredu a objednajte pesto chlieb", "Noc v Motel One Glasgow"],
        },
      },
      {
        day: 6,
        date: "Day 6",
        dateSk: "6. deň",
        x: 470,
        y: 440,
        place: "Edinburgh",
        title: "Dean Village and the Royal Mile",
        text:
          "Back to Edinburgh: a morning walk through Dean Village along the Water of Leith and Warriston, a little shopping, then the classics — Rose Street, Princes Street Gardens, the Royal Mile and the castle. Dinner at Vittoria on the Bridge and a Harry Potter potions cocktail at The Cauldron.",
        notes: ["The Cauldron — book the potions session ahead", "Vittoria on the Bridge for dinner", "Night at Hotel Virgin, Edinburgh"],
        sk: {
          place: "Edinburgh",
          title: "Dean Village a Royal Mile",
          text:
            "Späť v Edinburghu: ranná prechádzka cez Dean Village popri Water of Leith a Warriston, trochu nákupov, potom klasika — Rose Street, Princes Street Gardens, Royal Mile a hrad. Večera vo Vittoria on the Bridge a harrypotterovský kokteil v The Cauldron.",
          notes: ["The Cauldron — lekciu elixírov si rezervujte dopredu", "Večera vo Vittoria on the Bridge", "Noc v Hotel Virgin, Edinburgh"],
        },
      },
      {
        day: 7,
        date: "Day 7",
        dateSk: "7. deň",
        x: 520,
        y: 380,
        place: "Edinburgh → home",
        title: "Greyfriars Bobby, tea at The Dome, fly home",
        text:
          "A slow last day on foot: Greyfriars Bobby and its bar, Tollcross, then up Calton Hill — or Arthur's Seat if the legs still have it. Afternoon tea at The Dome, and then the flight home.",
        notes: ["Calton Hill is the easy option, Arthur's Seat the climb", "Afternoon tea at The Dome — book ahead", "Evening flight home"],
        sk: {
          place: "Edinburgh → domov",
          title: "Greyfriars Bobby, čaj v The Dome a let domov",
          text:
            "Pomalý posledný deň pešo: Greyfriars Bobby a jeho bar, Tollcross, potom hore na Calton Hill — alebo na Arthur's Seat, ak ešte držia nohy. Popoludňajší čaj v The Dome a potom let domov.",
          notes: ["Calton Hill je ľahšia voľba, Arthur's Seat túra", "Popoludňajší čaj v The Dome — rezervujte dopredu", "Večerný let domov"],
        },
      },
    ],
  },
  "oktoberfest-dolomites": {
    title: "Eight days, day by day",
    titleSk: "Osem dní, deň po dni",
    lead:
      "One car, four countries: from the beer tents of Munich over Liechtenstein and St. Moritz to Lake Como, and then up into the Dolomites. Tap a day to see where the route takes you — the full detail, times and prices live inside the guide.",
    leadSk:
      "Jedno auto, štyri krajiny: z mníchovských pivných stánkov cez Lichtenštajnsko a St. Moritz k jazeru Como a potom hore do Dolomitov. Kliknite na deň a uvidíte, kam vás trasa zavedie — celý detail, časy a ceny nájdete v sprievodcovi.",
    days: [
      {
        day: 1,
        date: "Day 1",
        dateSk: "1. deň",
        x: 620,
        y: 120,
        place: "Munich",
        title: "Oktoberfest, the proper way",
        text:
          "The trip opens in Munich with a full day at Oktoberfest — the big tents, the brass bands and one very long table. Dinner in town and an early night, because tomorrow the real drive begins.",
        notes: ["Tent reservations book out months ahead", "Cash is king in the tents", "Night in Munich"],
        sk: {
          place: "Mníchov",
          title: "Oktoberfest, ako sa patrí",
          text:
            "Cesta sa začína v Mníchove celým dňom na Oktoberfeste — veľké stány, dychovky a jedno veľmi dlhé posedenie. Večera v meste a skoro spať, lebo zajtra začína skutočná jazda.",
          notes: ["Rezervácie stánkov sa vypredávajú mesiace dopredu", "V stánkoch sa oplatí mať hotovosť", "Noc v Mníchove"],
        },
      },
      {
        day: 2,
        date: "Day 2",
        dateSk: "2. deň",
        x: 480,
        y: 220,
        place: "Vaduz → St. Moritz → Bellagio",
        title: "Three countries in one day",
        text:
          "A storybook day: Vaduz castle and the red house in Liechtenstein, then over to St. Moritz for the lake, the leaning tower and the views. By evening you are in Italy, on Lake Como, with pizza in Bellagio.",
        notes: ["Long driving day — start early", "Dinner at Ristorante Forma e Gusto, Bellagio", "Night at Hotel Florence, Bellagio"],
        sk: {
          place: "Vaduz → St. Moritz → Bellagio",
          title: "Tri krajiny v jednom dni",
          text:
            "Rozprávkový deň: hrad Vaduz a červený dom v Lichtenštajnsku, potom St. Moritz s jazerom, šikmou vežou a výhľadmi. Večer ste v Taliansku, pri jazere Como, s pizzou v Bellagiu.",
          notes: ["Dlhý deň v aute — vyrazte skoro", "Večera v Ristorante Forma e Gusto, Bellagio", "Noc v Hotel Florence, Bellagio"],
        },
      },
      {
        day: 3,
        date: "Day 3",
        dateSk: "3. deň",
        x: 430,
        y: 330,
        place: "Bellagio → Varenna → Vermiglio",
        title: "Lake Como slowly, then into the mountains",
        text:
          "Morning in Bellagio: Punta Spartivento, the old-town steps, Basilica San Giacomo and Villa Melzi's gardens. Then across to Varenna for Villa Monastero and the lovers' promenade, before the drive up to a chalet in the Val di Sole.",
        notes: ["Varenna's passeggiata degli innamorati is short — do it slowly", "Night at Chalet al Foss Alp Resort, Vermiglio"],
        sk: {
          place: "Bellagio → Varenna → Vermiglio",
          title: "Jazero Como pomaly a potom do hôr",
          text:
            "Ráno v Bellagiu: Punta Spartivento, schody starého mesta, bazilika San Giacomo a záhrady Villy Melzi. Potom do Varenny na Villu Monastero a promenádu zamilovaných a nakoniec hore do chaty vo Val di Sole.",
          notes: ["Passeggiata degli innamorati vo Varenne je krátka — užite si ju pomaly", "Noc v Chalet al Foss Alp Resort, Vermiglio"],
        },
      },
      {
        day: 4,
        date: "Day 4",
        dateSk: "4. deň",
        x: 470,
        y: 430,
        place: "Chalet al Foss",
        title: "A full day of doing nothing, beautifully",
        text:
          "No driving, no plan. A slow morning, the chalet's wellness and the mountains doing all the work. This is the day the whole trip quietly revolves around.",
        notes: ["Book the wellness slot ahead", "Second night at Chalet al Foss"],
        sk: {
          place: "Chalet al Foss",
          title: "Celý deň krásneho ničnerobenia",
          text:
            "Žiadne šoférovanie, žiadny plán. Pomalé ráno, wellness v chate a hory, ktoré odvšetkú všetku prácu. Toto je deň, okolo ktorého sa potichu točí celá cesta.",
          notes: ["Wellness si rezervujte dopredu", "Druhá noc v Chalet al Foss"],
        },
      },
      {
        day: 5,
        date: "Day 5",
        dateSk: "5. deň",
        x: 330,
        y: 240,
        peak: true,
        place: "Ortisei → Seceda → Santa Maddalena",
        title: "The ridge you have seen a thousand times",
        text:
          "Breakfast with the llamas at the chalet, then the cable car from Ortisei up to Seceda — the most photographed ridge in the Dolomites. The day ends in Val di Funes, at the little church of Santa Maddalena under the Odle peaks.",
        notes: ["Seceda cable car from Ortisei", "Santa Maddalena viewpoint at golden hour", "Night at Fallerhof — the famous cow barn"],
        sk: {
          place: "Ortisei → Seceda → Santa Maddalena",
          title: "Hrebeň, ktorý ste videli tisíckrát",
          text:
            "Raňajky s lamičkami v chate, potom lanovka z Ortisei na Secedu — najfotenejší hrebeň Dolomitov. Deň končí vo Val di Funes pri kostolíku Santa Maddalena pod štítmi Odle.",
          notes: ["Lanovka na Secedu z Ortisei", "Vyhliadka Santa Maddalena v zlatej hodine", "Noc na Fallerhofe — v slávnom kravíne"],
        },
      },
      {
        day: 6,
        date: "Day 6",
        dateSk: "6. deň",
        x: 250,
        y: 180,
        place: "Seiser Alm → Lago di Braies",
        title: "The high meadow and the green lake",
        text:
          "A morning hike across Seiser Alm, the largest high alpine meadow in Europe, with lunch at a hut up top. Then east to Lago di Braies for a rowboat on that impossibly green water and a slow walk around the shore.",
        notes: ["Check the hut's opening hours before you set off", "Rowboats at Lago di Braies go fast — go late afternoon", "Night at a hotel near the lake"],
        sk: {
          place: "Seiser Alm → Lago di Braies",
          title: "Vysoká lúka a zelené jazero",
          text:
            "Ranná túra po Seiser Alm, najväčšej vysokej alpskej lúke Európy, s obedom na chate hore. Potom na východ k Lago di Braies — lodička na neuveriteľne zelenej vode a pomalá prechádzka okolo brehu.",
          notes: ["Pred odchodom skontrolujte otváracie hodiny chaty", "Lodičky na Lago di Braies sa rýchlo vypredajú — choďte neskoro poobede", "Noc v hoteli pri jazere"],
        },
      },
      {
        day: 7,
        date: "Day 7",
        dateSk: "7. deň",
        x: 150,
        y: 120,
        peak: true,
        place: "Tre Cime di Lavaredo",
        title: "The three peaks, first thing in the morning",
        text:
          "Set the alarm: the Tre Cime loop is at its best before the crowds arrive. The three towers follow you the whole way around, and by the time the car parks fill up, you are already walking back down.",
        notes: ["Start very early — the toll road queues build fast", "Dinner at the hotel", "Night at Hotel Hohlenstein"],
        sk: {
          place: "Tre Cime di Lavaredo",
          title: "Tri veže hneď skoro ráno",
          text:
            "Nastavte budík: okruh okolo Tre Cime je najkrajší skôr, než prídu davy. Tri veže vás sprevádzajú celou cestou a keď sa parkoviská zaplnia, vy už zostupujete späť.",
          notes: ["Vyrazte veľmi skoro — pri mýtnej ceste sa rýchlo tvoria rady", "Večera na hoteli", "Noc v Hotel Hohlenstein"],
        },
      },
      {
        day: 8,
        date: "Day 8",
        dateSk: "8. deň",
        x: 80,
        y: 260,
        place: "Olpererhütte",
        title: "The suspension bridge — or straight home",
        text:
          "If the weather plays along, one last hike: up to the Olpererhütte and its famous suspension bridge hanging over the valley. If it doesn't, point the car home and start planning the next one.",
        notes: ["The bridge photo spot is a short walk past the hut", "Weather decides — have a plan B", "Long drive home"],
        sk: {
          place: "Olpererhütte",
          title: "Visutý most — alebo rovno domov",
          text:
            "Ak bude počasie, jedna posledná túra: hore k Olpererhütte a jej slávnemu visutému mostu nad údolím. Ak nie, namierite si to domov a začnete plánovať ďalšiu.",
          notes: ["Fotomiesto pri moste je kúsok za chatou", "Rozhoduje počasie — majte plán B", "Dlhá cesta domov"],
        },
      },
    ],
  },
  lapland: {
    scenery: "alpine-winter",
    title: "Five days, day by day",
    titleSk: "Päť dní, deň po dni",
    lead:
      "A short winter trip above the Arctic Circle: Rovaniemi and Santa's village, snowmobiles, then a glass igloo in Pyhätunturi. Tap a day to see where the route takes you — the full detail, times and prices live inside the guide.",
    leadSk:
      "Krátky zimný výlet za polárnym kruhom: Rovaniemi a Santova dedina, snežné skútre a potom sklenené iglu v Pyhätunturi. Kliknite na deň a uvidíte, kam vás trasa zavedie — celý detail, časy a ceny nájdete v sprievodcovi.",
    days: [
      {
        day: 1,
        date: "Day 1",
        dateSk: "1. deň",
        x: 350,
        y: 400,
        place: "Rovaniemi",
        title: "Arrival above the Arctic Circle",
        text:
          "Land in Rovaniemi and take the evening slowly: a walk through the snowy town as the lights come on, then dinner at Monterosa — order the reindeer steak, it's their specialty.",
        notes: ["Evening walk through town", "Dinner at Monterosa — the reindeer steak", "Night at Kotimaailma Aparthotel Snowflake Suites"],
        sk: {
          place: "Rovaniemi",
          title: "Prílet za polárny kruh",
          text:
            "Prílet do Rovaniemi a večer pomaly: prechádzka zasneženým mestom, keď sa rozsvietia svetlá, potom večera v Monterose — objednajte si sobie steak, je to ich špecialita.",
          notes: ["Večerná prechádzka mestom", "Večera v Monterose — sobie steak", "Noc v Kotimaailma Aparthotel Snowflake Suites"],
        },
      },
      {
        day: 2,
        date: "Day 2",
        dateSk: "2. deň",
        x: 300,
        y: 280,
        peak: true,
        place: "Santa Claus Village",
        title: "The Arctic Circle line and reindeer sleighs",
        text:
          "The full Christmas day, whatever the month: Santa's office, the Arctic Circle line, a reindeer sleigh ride and a slow walk through the village with hot chocolate. Send postcards home for next Christmas, visit the husky and animal farms, and end with the best salmon ever at Santa Salmon Place.",
        notes: ["Postcards sent from here arrive at Christmas", "Reindeer sleigh rides run all day", "Dinner at Santa Salmon Place — the salmon is a must"],
        sk: {
          place: "Santa Claus Village",
          title: "Čiara polárneho kruhu a sobie záprahy",
          text:
            "Celý vianočný deň, nech je akýkoľvek mesiac: Santova kancelária, čiara polárneho kruhu, jazda na sobích záprahoch a pomalá prechádzka dedinkou s horúcou čokoládou. Pošlite si pohľadnice domov na budúce Vianoce, navštívte husky a zvieracie farmy a zakončite najlepším lososom v Santa Salmon Place.",
          notes: ["Pohľadnice odoslané odtiaľto prídu na Vianoce", "Sobie záprahy jazdia celý deň", "Večera v Santa Salmon Place — losos je povinnosť"],
        },
      },
      {
        day: 3,
        date: "Day 3",
        dateSk: "3. deň",
        x: 420,
        y: 300,
        place: "Snowmobiles",
        title: "A full day on snowmobiles",
        text:
          "The longer, the better: a whole day on snowmobiles through the frozen forests and over the fells. If the sky clears in the evening, go aurora hunting — then dinner and a walk through Rovaniemi at night.",
        notes: ["Full-day snowmobile safari — dress in everything you have", "Aurora depends on the sky — check the forecast", "Night walk through Rovaniemi"],
        sk: {
          place: "Snežné skútre",
          title: "Celý deň na snežných skútroch",
          text:
            "Čím dlhšie, tým lepšie: celý deň na snežných skútroch cez zamrznuté lesy a po pahorkoch. Ak sa večer vyčasí, choďte loviť auróru — potom večera a prechádzka nočným Rovaniemi.",
          notes: ["Celodenné safari na skútroch — oblečte si všetko, čo máte", "Auróra závisí od oblohy — sledujte predpoveď", "Nočná prechádzka Rovaniemi"],
        },
      },
      {
        day: 4,
        date: "Day 4",
        dateSk: "4. deň",
        x: 500,
        y: 160,
        peak: true,
        place: "Pyhätunturi — the glass igloo",
        title: "A night under the northern lights",
        text:
          "By bus north to Pyhätunturi and into a glass igloo at Northern Lights Village Pyhä. A slow afternoon: the wellness, a walk around the snowy surroundings, and then the whole point of the trip — watching the aurora from your bed.",
        notes: ["Bus transfer from Rovaniemi", "Wellness and a walk around the resort", "Aurora alarm — ask reception to wake you"],
        sk: {
          place: "Pyhätunturi — sklenené iglu",
          title: "Noc pod polárnou žiarou",
          text:
            "Autobusom na sever do Pyhätunturi a do skleneného iglu v Northern Lights Village Pyhä. Pomalé popoludnie: wellness, prechádzka zasneženým okolím a potom to hlavné — pozorovanie aurory z postele.",
          notes: ["Presun autobusom z Rovaniemi", "Wellness a prechádzka po okolí resortu", "Auróra budíček — poproste recepciu, aby vás zobudila"],
        },
      },
      {
        day: 5,
        date: "Day 5",
        dateSk: "5. deň",
        x: 430,
        y: 240,
        place: "Huskies at sunrise → home",
        title: "One last ride, then the airport",
        text:
          "Set the alarm one last time: a husky ride at sunrise, the dogs loud and the forest silent. Then back to the hotel, the transfer to the airport and the flight home.",
        notes: ["Husky ride at sunrise — book the earliest slot", "Hotel transfer to the airport", "Flight home"],
        sk: {
          place: "Husky pri východe slnka → domov",
          title: "Posledná jazda a potom na letisko",
          text:
            "Naposledy nastavte budík: jazda na husky záprahu pri východe slnka, psy hlasné a les tichý. Potom späť na hotel, transfer na letisko a let domov.",
          notes: ["Husky jazda pri východe slnka — rezervujte najskorší termín", "Transfer z hotela na letisko", "Let domov"],
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
