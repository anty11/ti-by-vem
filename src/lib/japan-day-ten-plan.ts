export const japanDayTenPlan = {
  cities: ["Kawaguchiko", "Fujiyoshida", "Tokyo"],
  recordedStops: ["Arakurayama Sengen Park", "Tokyo", "THE LIVELY TOKYO AZABUJUBAN"],
  recordedImpression: {
    hotel: "An absolutely amazing hotel in a great neighbourhood that we recommend.",
    journey: "The journey was long, so we only wandered around the hotel and had dinner nearby.",
    transfer: "We travelled to Tokyo by bus.",
    pagoda: "The pagoda looked like a prop, as if it did not quite belong on the hillside, and the whole building was nothing like the photographs. It made us laugh.",
  },
  chureito: { steps: 398, admissionYen: 0, openAllDay: true, trainFromKawaguchikoYen: 310, trainMinutes: 13, walkFromShimoyoshidaMinutes: 25 },
  toTokyo: {
    shinjukuBus: { from: "Kawaguchiko Station", to: "Busta Shinjuku", yen: 2200, webYen: 2000, minutes: 105, departuresPerDay: 65 },
    tokyoStationBus: { from: "Kawaguchiko Station", to: "Tokyo Station Yaesu", yen: 2300, minutes: 120 },
    fujiExcursion: { from: "Kawaguchiko or Shimoyoshida", to: "Shinjuku", yen: 4200, yenFromShimoyoshida: 4010, minutes: 113 },
  },
  hotel: { station: "Azabu-Juban", walkMinutes: 7, roppongiWalkMinutes: 10 },
  dinners: ["soshijiAzabujuban", "hakataHotaruAzabujuban", "pizzaStradaAzabujuban"],
  checkedOn: "20 November 2026",
} as const;
