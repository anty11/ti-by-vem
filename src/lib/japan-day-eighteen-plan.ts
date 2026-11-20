export const japanDayEighteenPlan = {
  cities: ["Tokyo"],
  recordedImpression: "Just packing and checking the suitcases. Take a small luggage scale, watch the limits, forget nothing and have a safe flight home.",
  departureAirport: "Narita",
  taxFree: { refundAtAirportFrom: "1 November 2026", minimumPerShopPerDayYen: 5000, goodsInHandLuggage: true, extraMinutesAtAirport: 30 },
  liquidsMaxMl: 100,
  euAllowance: { airTravellerEur: 430, spiritsLitres: 1, wineLitres: 4, cigarettes: 200 },
  narita: {
    trainFromHotelMinutes: 79,
    expressFromTokyoStationMinutes: 53,
    skylinerFromUenoMinutes: 36,
    busFromHotelMinutes: 109,
    terminal1WalkFromStationMinutes: 5,
    terminal3WalkFromStationMinutes: 10,
    leaveHotelHoursBeforeFlight: 4,
  },
  haneda: { fromHotelMinutes: 40 },
  checkedOn: "20 November 2026",
} as const;
