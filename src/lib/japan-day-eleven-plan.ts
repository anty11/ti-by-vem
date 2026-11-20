export const japanDayElevenPlan = {
  cities: ["Tokyo"],
  breakfastVenue: "honoluluCoffeeAzabujuban",
  recordedStops: ["Honolulu Coffee", "Shibuya", "I'm donut?", "Takeshita Street", "Jingumae", "SHIBUYA SKY"],
  recordedImpression: {
    breakfast: "A really great breakfast that we recommend.",
    shopping: "At 160 cm I shopped amazingly, so bring old clothes you can leave behind and fly home with a suitcase full of Japanese cosmetics and clothes.",
    donuts: "Top donuts, you have to try them.",
    shibuyaSky: "Book ahead for the sunset spot, have a glass of prosecco up there and stay until it is completely dark.",
  },
  shibuyaSky: { webYenBefore15: 2700, webYenFrom15: 3400, counterSurchargeYen: 300, salesOpenDaysAhead: 14, slotMinutes: 20, lastAdmission: "21:20", closes: "22:30" },
  imDonut: { plainYen: 237, opens: "10:00" },
  taxFree: { refundAtAirportFrom: "1 November 2026", minimumPerShopPerDayYen: 5000 },
  dinners: ["mohejiShibuya", "matsueShibuya", "tsukadaShibuya"],
  checkedOn: "20 November 2026",
} as const;
