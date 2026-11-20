export const japanDayThirteenPlan = {
  cities: ["Tokyo"],
  recordedStops: ["teamLab Planets", "HARRY Harajuku Terrace", "Ralph's Coffee", "Shopping", "Ramen dinner"],
  recordedImpression: {
    teamLab: "Book ahead for sure. It was worth it and it was great. We went to both, and both are worth trying, each one is a little different.",
    otters: "The most beautiful gem for V were the otters. V loves these animals. Cuteness overload, you will not experience anything more beautiful. It was perfect, really top.",
    ralphs: "Ralph's Coffee is something eM loves.",
    shopping: "We both love shopping.",
  },
  teamLabPlanets: { venue: "teamLabPlanets", adultFromYen: 3800, soldOnSite: false, ticketChangesAllowed: 3, refunds: false, barefootInWater: true },
  teamLabBorderless: { venue: "teamLabBorderless", adultFromYen: 3400, doorSurchargeYen: 200, shoesOn: true },
  harry: { venue: "harryHarajukuTerrace", adult30MinYen: 1650, weekdayOpens: "13:00", weekendOpens: "11:00", lastReception: "17:30", reservationMinimumMinutes: 60, otterContactMinAge: 10 },
  ralphs: { venue: "ralphsCoffeeOmotesando", tiramisuYen: 1100, brownieWithIceCreamYen: 1375, chocolateCakeYen: 1320, takesReservations: false },
  ramenDinners: ["irucaTokyoRoppongi", "afuriHarajuku", "kagariGinza"],
  iruca: { porciniShoyuYen: 1800, closedOn: "Monday", cashOnly: false },
  hachigou: { venue: "ginzaHachigou", closes: "16:00", closedOn: "Monday", bookingOpens: "Saturday 09:00 for the following Tuesday to Sunday" },
  checkedOn: "20 November 2026",
} as const;
