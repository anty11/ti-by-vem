export const japanDayFivePlan = {
  cities: ["Osaka", "Kyoto"],
  hotel: "sequenceKyotoGojo",
  breakfast: "panelCafeKyoto",
  walk: [
    "Yasaka Shrine",
    "Maruyama Park",
    "Nene-no-michi",
    "Ishibei-koji",
    "Ninenzaka",
    "Sannenzaka",
    "Kiyomizu-dera",
  ],
  transferOptions: [
    { id: "jr", line: "JR Kyoto Line Special Rapid", from: "Osaka Station", to: "Kyoto Station", minutes: 29, yen: 580, note: "Fastest and most frequent from Osaka Station, no reservation needed, IC card accepted." },
    { id: "hankyu", line: "Hankyu Kyoto Line Limited Express", from: "Osaka-umeda", to: "Kyoto-kawaramachi", minutes: 43, yen: 410, note: "Cheapest, arrives in downtown Kyoto near Kawaramachi and Gion." },
    { id: "keihan", line: "Keihan Main Line Limited Express", from: "Yodoyabashi", to: "Gion-shijo", minutes: 50, yen: 490, note: "Best for Gion and Higashiyama, leaves near Kitahama." },
    { id: "shinkansen", line: "Tokaido Shinkansen", from: "Shin-Osaka", to: "Kyoto Station", minutes: 14, yen: 1450, note: "Fast but rarely worth it without a rail pass once the Shin-Osaka transfer is counted." },
  ],
  dinnerOptions: ["sankichiKarasuma", "komefukuShijo", "karasumaRock"],
  onsen: {
    name: "THE BATH at sequence KYOTO GOJO",
    location: "Hotel basement level B1",
    tattooPolicy: "Tattoo restrictions removed from 1 March 2026 across Mitsui Fudosan hotels including sequence KYOTO GOJO",
    tattooPolicyCheckedOn: "20 November 2026",
    note: "Many Japanese onsen and sento still refuse visible tattoos, so always check the specific facility's current policy before visiting.",
  },
} as const;
