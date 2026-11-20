export const japanDaySevenPlan = {
  cities: ["Kyoto", "Nara", "Kyoto"],
  recordedStops: ["Nara Park", "Todai-ji", "Kasuga Taisha", "Naramachi", "Le Labo Kyoto Machiya", "Lupicia", "koisus"],
  recordedImpression: {
    todaiji: "A huge, breathtaking temple that was well worth seeing.",
    leLabo: "The shop did not win us over, but the café coffee was excellent.",
    lupicia: "The teas were truly excellent.",
    koisus: "An absolutely amazing dinner that we recommend 100%.",
  },
  deerSafety: {
    crackerPacksPerPerson: 1,
    leaveValuablesAtHotel: true,
    note: "Deer are everywhere, unafraid of people and can chase, bite and chew bags once they smell crackers.",
  },
  toNara: [
    { id: "kintetsu", line: "Kintetsu Kyoto Line", from: "Kyoto Station", to: "Kintetsu-Nara", minutes: 45, yen: 760, note: "Arrives at the station nearest Nara Park. The limited express takes about 35 minutes for a ¥520 reserved-seat supplement on top of the fare." },
    { id: "jr", line: "JR Nara Line Miyakoji Rapid", from: "Kyoto Station", to: "JR Nara", minutes: 45, yen: 720, note: "No reservation needed and covered by a Japan Rail Pass, but JR Nara is about 15 minutes further on foot from the park." },
  ],
  backToKyoto: { line: "Kintetsu Kyoto Line", from: "Kintetsu-Nara", to: "Kyoto Station", minutes: 45, yen: 760 },
  admissions: { todaijiGreatBuddhaHallYen: 800, kasugaInnerSanctuaryYen: 700, checkedOn: "20 November 2026" },
  dinner: "koisus",
  checkedOn: "20 November 2026",
} as const;
