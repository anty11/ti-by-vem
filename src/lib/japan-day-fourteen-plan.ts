export const japanDayFourteenPlan = {
  cities: ["Tokyo"],
  recordedStops: ["Ichinohashi Park", "Minato Shibakoen", "Shiba Park", "Meguro River", "Starbucks Reserve Roastery Tokyo", "Riverside shops", "MEGA Don Quijote Shibuya"],
  recordedImpression: {
    roastery: "We walked to the biggest Starbucks, where they also roast the coffee. It was very beautiful.",
    riverShops: "Close to where we walked along the river there were great little shops.",
    cosmetics: "We bought cosmetics in the biggest store we could find, the classic multi-storey kind.",
    kartTip: "Get an international driving permit before you go. We missed it. Street karting through Tokyo is a really great idea for an activity. We wanted to do it, but we did not have the permits. So, secret tip, sort it out in advance.",
  },
  karted: false,
  roastery: { venue: "starbucksRoasteryTokyo", opens: "08:00", closes: "22:00", lastOrder: "21:30", floors: 4, weekendTimedTicketsFrom: "07:00", ticketGuaranteesSeat: false, cocktailsFrom: "10:00" },
  cosmetics: { venue: "megaDonkiShibuya", open24Hours: true, floors: "B1F–7F", beautyFloor: "3F" },
  kart: { venue: "streetKartShibuya", minAge: 18, permitConvention: "1949 Geneva", viennaPermitAccepted: false, permitValidMonths: 12, courseMinutes: 60, fromYen: 13500, freeCancellationDays: 7, refundWithoutDocuments: false, damageExcessYen: 50000, translationInsteadOfPermit: ["Switzerland", "Germany", "France", "Belgium", "Monaco", "Taiwan"] },
  slovakPermit: { feeEur: 10, issuedOnTheSpot: true, office: "document office of the Slovak police" },
  dinners: ["yanosukeNakameguro", "hashidayaNakameguro"],
  hashidaya: { closedOn: "Monday", opens: "17:00" },
  checkedOn: "20 November 2026",
} as const;
