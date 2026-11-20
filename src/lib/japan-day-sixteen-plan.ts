export const japanDaySixteenPlan = {
  cities: ["Tokyo", "Hakone"],
  recordedStops: ["Hakone Ropeway", "Owakudani black eggs", "Peace Torii at Hakone Shrine"],
  recordedImpression: {
    worthIt: "Hakone was absolutely worth it.",
    eggs: "You have to try the black eggs up at Owakudani and take a souvenir home. You will not find it anywhere else.",
    torii: "The Torii of Peace was the longest we have ever waited for a photo in our lives.",
  },
  freepass: { fromShinjukuTwoDayYen: 7100, fromShinjukuThreeDayYen: 7500, includesRoundTripFromShinjuku: true, transportModes: 8, calendarDays: true },
  romancecar: { surchargeYen: 1200, minutesToYumoto: 80, emotDiscountYen: 50 },
  ropeway: { oneWayYen: 2000, returnYen: 3000, stopsForGasOrWind: true, closures: ["Sounzan–Owakudani 7–24 December 2026", "Togendai–Owakudani 12 January–26 February 2027"] },
  blackEggs: { venue: "owakudaniKurotamagokan", packYen: 500, eggsPerPack: 4, salesHours: "09:00–16:40", hotSpringMinutes: 60, hotSpringCelsius: 80, steamMinutes: 15, steamCelsius: 100, yearsPerEggLegend: 7, soldOnlyAtOwakudani: true },
  cruise: { oneWayYen: 1700, firstClassExtraYen: 800, minutes: "25–40" },
  torii: { venue: "hakoneShrine", builtYear: 1952, peacePlaqueYear: 1964, shrineFoundedYear: 757, entryYen: 0, busyQueueMinutes: "30–90", quietBefore: "08:00" },
  lunches: ["kinubikiNoSato", "shinshoSoba"],
  checkedOn: "20 November 2026",
} as const;
