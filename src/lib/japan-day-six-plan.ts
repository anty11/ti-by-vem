export const japanDaySixPlan = {
  cities: ["Kyoto"],
  recordedStops: [
    "Arashiyama Bamboo Grove",
    "Tenryu-ji",
    "% Arabica Arashiyama",
    "glänta ring workshop",
    "Masuyacho walk",
    "My Only Fragrance",
  ],
  recordedImpression: {
    bambooGrove: "Overrated for us. Crowded even before opening hours, and not special unless you love trees.",
    workshops: "Both the ring and the perfume workshop were unique and worth every euro.",
  },
  timing: { leaveHotelBy: "06:30", bambooGroveBy: "07:00" },
  arashiyamaOptions: [
    { id: "jr", line: "JR Sagano Line", from: "Kyoto Station", to: "Saga-Arashiyama", minutes: 11, yen: 240, note: "Fastest from the hotel side of town. One subway stop or a 15 minute walk from Gojo to Kyoto Station, then 11 minutes on a rapid or about 17 on a local train. The first train leaves Kyoto Station at 05:31." },
    { id: "hankyu", line: "Hankyu via Katsura", from: "Karasuma", to: "Arashiyama (Hankyu)", minutes: 25, yen: 240, note: "Change at Katsura. Hankyu Arashiyama sits south of the river, about 15 minutes on foot from Tenryu-ji." },
    { id: "randen", line: "Randen tram", from: "Shijo-Omiya", to: "Arashiyama (Randen)", minutes: 24, yen: 250, note: "Flat fare, slow and charming, with the last stop a few steps from Tenryu-ji and % Arabica." },
  ],
  returnToHigashiyama: { line: "Hankyu via Katsura", from: "Arashiyama (Hankyu)", to: "Kyoto-kawaramachi", minutes: 25, yen: 240, walkToNinenzakaMinutes: 20 },
  tenryuji: { gardenYen: 500, buildingsExtraYen: 300, dharmaHallYen: 500, gardenHours: "08:30–17:00", lastAdmission: "16:50", checkedOn: "20 November 2026" },
  workshops: {
    ring: { venue: "glantaNinenzaka", alternative: "glantaSanjo", minutes: "45–60", silverFromYen: 5200, bookAhead: true, booking: "Online until the day before, same day by phone" },
    perfume: { venue: "myOnlyFragranceKiyomizu", alternative: "myOnlyFragranceTeramachi", minutes: 30, fromYen: 6500, millilitres: 50, bookAhead: true, booking: "LINE or Instagram, changes until the day before" },
  },
  masuyachoWalk: ["Ichinenzaka", "Kodaiji Minamimon-dori", "Yasaka Pagoda", "Kodai-ji"],
  dinnerOptions: ["masaichi", "gionWa", "hiramatsuKodaiji"],
  checkedOn: "20 November 2026",
} as const;
