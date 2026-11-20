export const japanDayEightPlan = {
  cities: ["Kyoto"],
  recordedStops: ["MAIKOYA Gion Kiyomizu", "Kiyomizu-dera", "Komatsucho", "Rokujuan", "K36 Rooftop", "MATT RESTAURANT 2.0"],
  recordedImpression: {
    teaCeremony: "Everyone who goes to Kyoto should experience it. Being dressed and having our hair done was the best part.",
    kimonoWalk: "Do not go straight back to the shop after the ceremony. Walk the city in kimono and take a few beautiful, authentic photos.",
    matt: "Brand new when we went, we were almost alone, and the food was excellent.",
  },
  teaCeremony: {
    venue: "MAIKOYA Gion Kiyomizu",
    durationMinutes: 90,
    sharedPlanFromYenBeforeTax: 7000,
    privatePlanFromYenBeforeTax: 12000,
    hairStylingIncluded: true,
    kimonoReturnBy: "18:00",
    minimumAge: 7,
  },
  kiyomizuAdmissionYen: 500,
  rokujuan: { hanawarabiYen: 1700, hanawarabiWithMatchaYen: 2000, opens: "08:00", lastOrder: "19:00" },
  k36: { coverChargeYenPerPerson: 1100, serviceChargePercent: 10, rooftopOpens: "15:00", phoneBookingHours: "15:00–20:00", noChildrenUnder13From: "17:00" },
  matt: { serviceChargePercent: 15, opensWeekdays: "17:00", opensWeekends: "12:00" },
  dinner: "MATT RESTAURANT 2.0",
  checkedOn: "20 November 2026",
} as const;
