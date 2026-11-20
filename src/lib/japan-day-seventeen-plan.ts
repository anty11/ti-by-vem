export const japanDaySeventeenPlan = {
  cities: ["Tokyo"],
  recordedStops: ["teamLab Borderless", "EN TEA HOUSE", "Brunch upstairs at Azabudai Hills", "Last shopping", "Uobei running sushi"],
  recordedImpression: {
    teamLab: "Book this teamLab ahead too, we recommend it.",
    tea: "Inside we also joined a small tea ceremony. It was good and we recommend it.",
    brunch: "Brunch was great in the same complex as teamLab, upstairs, in a really beautiful restaurant.",
    shopping: "Then just shopping before the trip home.",
    dinner: "Dinner was running sushi near Shibuya.",
  },
  borderless: { venue: "teamLabBorderless", adultFromYen: 3400, doorSurchargeYen: 200, opens: "08:30", closes: "21:00", lastEntryMinutesBeforeClose: 60, refunds: false, salesOpenMonthsAhead: 2, timeLimit: false },
  enTeaHouse: { venue: "enTeaHouse", insideMuseum: true, paidSeparately: true },
  brunchSuggestions: ["balconyBy6th", "dining33"],
  uobei: { venue: "uobeiShibuya", basePlateYen: 110, weekdayOpens: "11:00", weekendOpens: "10:30", lastOrder: "22:30", reservations: false, quietestHours: "14:00–17:00" },
  taxFree: { minimumPerShopPerDayYen: 5000, refundAtAirportFrom: "1 November 2026", homeVoltage: 100 },
  checkedOn: "20 November 2026",
} as const;
