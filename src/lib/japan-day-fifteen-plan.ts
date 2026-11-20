export const japanDayFifteenPlan = {
  cities: ["Tokyo", "Maihama"],
  recordedStops: ["Breakfast at Sherwood Garden Restaurant, Tokyo Disneyland Hotel", "Tokyo Disneyland"],
  recordedImpression: {
    wholeDay: "We set aside one whole day for this experience and it was worth it.",
    breakfast: "We had breakfast in the special hotel right by Disneyland and it was great. We recommend booking it ahead as an experience.",
  },
  stayedAtDisneyHotel: false,
  tickets: { adultFromYen: 8900, adultToYen: 12400, salesOpen: "14:00, two months ahead for the same date", soldAtGate: false, parkHours: "09:00–21:00" },
  premierAccess: { beautyAndBeastYen: 2500, baymaxYen: 1500, splashMountainYen: 1500, bigThunderYen: 1500, electricalParadeYen: 2500, christmasParadeYen: 3500, boughtAfterEntry: true, freePriorityPassEnded: "31 August 2026" },
  spaceMountainClosedUntil: 2027,
  sherwood: { venue: "sherwoodGarden", hotel: "tokyoDisneylandHotel", breakfastAdultYen: 4500, breakfastAdultFromApril2027Yen: 4900, openToNonGuests: true, breakfastHours: "06:30–10:00", bookingOpens: "10:00, three months ahead" },
  dreamersLounge: { venue: "dreamersLounge", breakfastAdultYen: 3900, breakfastHours: "06:30–09:30", bookableAhead: false },
  blueBayou: { venue: "blueBayou", bookingOpens: "10:00, one month ahead" },
  crystalPalace: { venue: "crystalPalace", buffetMinutes: 75, adultBuffetYen: 5500, adultSpecialBuffetFromDec26Yen: 6000 },
  checkedOn: "20 November 2026",
} as const;
