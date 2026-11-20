export const japanDayNinePlan = {
  cities: ["Kyoto", "Mishima", "Kawaguchiko"],
  recordedStops: ["Fushimi Inari Taisha", "Mishima Hirokojicho", "Kawaguchiko", "Ubuya"],
  recordedImpression: {
    fushimiInari: "A very early start, but the place had a special energy and was worth getting up for.",
    ubuya: "A beautiful hotel facing the volcano, with a huge room and a perfect onsen, made for rest.",
    dinner: "We chose the speciality you cook yourself in a broth by mistake, thinking we had ordered something else. Steak would have suited us better.",
  },
  fushimiInari: { admissionYen: 0, openAllDay: true, jrFromKyotoYen: 150, jrMinutes: 5 },
  toKawaguchiko: {
    mishima: { label: "Shinkansen to Mishima, then the Mishima–Kawaguchiko Liner bus", trainYenReserved: 11510, trainYenUnreserved: 10780, trainMinutes: 110, busYen: 2700, busWebYen: 2500, busMinutes: 90, note: "Our route. Direct Hikari trains run about every two hours, bus seats are all reserved." },
    gotemba: { label: "Japan Rail Pass variant via Gotemba", busYen: 1750, busMinutes: 60, note: "Local JR trains from Mishima to Gotemba with a change at Numazu, then the Fujikyu bus to Kawaguchiko." },
  },
  ubuya: { checkInFrom: "15:00", checkInUntil: "18:00", lastDinnerSeating: "19:00", stationPickup: "15:00–18:00 on request by phone", tattooCoverSheets: 2, steakCoursePaused: true, dinnerChoices: ["Buffet", "Tsuyu-dashi shabu-shabu"] },
  souvenirs: { fujiCookieShop: "Fujiyama Cookie", whiteStrawberry: "Hatsukoi no Kaori", whiteStrawberrySeason: "December to March", whiteStrawberryBoughtAt: "Kawaguchiko Station" },
  checkedOn: "20 November 2026",
} as const;
