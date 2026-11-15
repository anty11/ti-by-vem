export type OktoberfestVenue = {
  name: string;
  official?: string;
  booking?: string;
  bookingSearch?: boolean;
  maps: string;
  rating?: number;
  checkedOn?: string;
  ratingScope?: string;
};

const maps = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const rated = (name: string, query: string, rating: number, official?: string, ratingScope?: string): OktoberfestVenue => ({ name, maps: maps(query), rating, ...(official ? { official } : {}), ...(ratingScope ? { ratingScope } : {}), checkedOn: "15 November 2026" });

export const oktoberfestVenues = {
  kam: { name: "KAM Hotel by WMM Hotels", official: "https://kam-hotel.de/en/", booking: "https://www.booking.com/hotel/de/kam.html", maps: maps("KAM Hotel Im Gewerbepark Unterallgäu 6 Stetten") },
  florence: { name: "Hotel Florence Bellagio", official: "https://www.hotelflorencebellagio.it/en/hotel/", booking: "https://www.booking.com/hotel/it/florence-menaggio.html", maps: maps("Hotel Florence Piazza Mazzini 46 Bellagio") },
  chalet: { name: "Chalet al Foss Alp Resort", official: "https://www.hotelchaletalfoss.it/en/", booking: "https://www.booking.com/hotel/it/chalet-al-foss.html", maps: maps("Chalet al Foss Via Nazionale 2 Vermiglio") },
  fallerhof: { name: "Fallerhof", official: "https://www.fallerhof.it", booking: "https://www.booking.com/hotel/it/fallerhof-st-magdalena.html", maps: maps("Fallerhof Kirchweg 14 Santa Maddalena Funes") },
  olympia: { name: "Hotel Chalet Olympia", official: "https://www.chalet-olympia.com", booking: "https://www.booking.com/hotel/it/chalet-olympia.html", maps: maps("Hotel Chalet Olympia Valdaora") },
  hoehlenstein: { name: "Hotel Höhlenstein", official: "https://www.hoehlenstein.at/en/", booking: "https://www.booking.com/searchresults.html?ss=Hotel+Hohlenstein+Juns+Tux", bookingSearch: true, maps: maps("Hotel Hohlenstein Juns 586 Tux") },
  forma: rated("Ristoro Forma e Gusto", "Ristoro Forma e Gusto Bellagio", 4.0, "https://www.ristorantebarchetta.com/ristoro-forma-gusto/?lang=en", "Google lists this within Barchetta - Ristorante e Pizzeria. The score covers that listing, not a separate meal or dining room."),
  sanGiacomo: rated("Trattoria San Giacomo", "Trattoria San Giacomo Bellagio", 4.2, "https://trattoriabellagio.it/"),
  lanterna: rated("La Lanterna", "La Lanterna Salita Serbelloni Bellagio", 4.1, "http://www.lalanternabellagio.com/"),
  seceda: rated("Mountain Restaurant Seceda", "Mountain Restaurant Seceda", 3.9, "https://www.restaurantseceda.com"),
  troier: rated("Troier Hut", "Trojer Hutte Seceda", 4.7, "https://www.troier.com"),
  fermeda: rated("Fermeda Hut", "Fermeda Hutte", 4.5, "https://www.fermeda.com", "Score for the whole hut and accommodation listing, not dining alone."),
  gamsblut: rated("Gamsblut Hut", "Gamsblut Hutte Santa Cristina", 4.6, "https://www.gamsblut.it"),
  pieralongia: rated("Pieralongia", "Pieralongia hut", 4.7),
  firenze: rated("Rifugio Firenze", "Rifugio Firenze", 4.6, "https://www.rifugiofirenze.com", "Score for the whole mountain hut, not dining alone."),
  odles: rated("Odles Hut", "Odles Hutte Col Raiser", 4.6, "https://www.odles.info"),
  geisler: rated("Geisler Alm", "Geisler Alm Rifugio delle Odle", 4.5, "https://www.geisleralm.com/", "Score for the whole hut listing, not a particular lunch."),
  gschnagenhardt: rated("Gschnagenhardt Alm", "Gschnagenhardt Alm", 4.6, "https://www.gschnagenhardtalm.it", "Score for the whole mountain hut, not dining alone."),
  dusler: rated("Dusleralm", "Dusleralm", 4.5),
  auronzo: rated("Rifugio Auronzo", "Rifugio Auronzo Tre Cime", 4.2, "https://www.rifugioauronzo.it", "Score for the whole mountain hut, not dining alone."),
  lavaredo: rated("Rifugio Lavaredo", "Rifugio Lavaredo Tre Cime", 4.2, "https://www.rifugiolavaredo.com"),
  locatelli: rated("Rifugio Locatelli", "Rifugio Locatelli Dreizinnenhutte", 4.2, "https://www.dreizinnenhuette.com", "Score for the whole mountain hut, not dining alone."),
  langalm: rated("Langalm", "Langalm Tre Cime", 4.3, "https://www.longolbe.com", "Score for the whole mountain hut, not dining alone."),
  antorno: rated("Ristorante Lago Antorno", "Chalet Lago Antorno restaurant", 4.2, "https://www.lagoantorno.it/en/restaurant/", "Score for Chalet Lago Antorno as a whole, not a separate restaurant listing."),
  kasskessl: rated("Kasskessl", "Kasskessl Juns 586 Tux Austria", 4.6, "https://www.hoehlenstein.at/en/restaurant/", "Google resolves this to Hotel Höhlenstein. This is the hotel score, not a separate Kasskessl restaurant rating."),
  olperer: rated("Olpererhütte", "Olpererhütte Ginzling Austria", 4.7, "https://www.olpererhuette.de/", "Score for the whole mountain hut, not dining alone."),
  zenz: rated("Zenz’n Stub’n", "Zenz Stubn Schorfling", 4.7, "https://www.zenznstubn.com/"),
} satisfies Record<string, OktoberfestVenue>;

export type OktoberfestVenueId = keyof typeof oktoberfestVenues;