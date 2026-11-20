export type JapanVenue = {
  name: string;
  official?: string;
  booking?: string;
  maps: string;
  linkLabel?: string;
  rating?: number;
  checkedOn?: string;
  ratingSource?: string;
};

const maps = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const booking = (query: string) => `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(query)}`;

export const japanVenues = {
  royalParkKitahama: { name: "The Royal Park Canvas Osaka Kitahama", official: "https://www.royalparkhotels.co.jp/canvas/osakakitahama/en/", booking: booking("The Royal Park Canvas Osaka Kitahama"), maps: maps("The Royal Park Canvas Osaka Kitahama") },
  conrad: { name: "Conrad Osaka", official: "https://www.hilton.com/en/hotels/osacici-conrad-osaka/", booking: booking("Conrad Osaka"), maps: maps("Conrad Osaka Nakanoshima Festival Tower West") },
  nikko: { name: "Hotel Nikko Osaka", official: "https://www.hotelnikkoosaka.jp/en/", booking: booking("Hotel Nikko Osaka"), maps: maps("Hotel Nikko Osaka Shinsaibashi") },
  cross: { name: "Cross Hotel Osaka", official: "https://www.crosshotel.com/osaka/en/", booking: booking("Cross Hotel Osaka"), maps: maps("Cross Hotel Osaka Dotonbori") },
  mihoro: { name: "Mihoro Kawaramachi", official: "https://tabelog.com/en/osaka/A2701/A270106/27041069/", maps: maps("味宝楼 瓦町店 大阪市中央区瓦町2-1-10") },
  brooklynKitahama: { name: "Brooklyn Roasting Company Kitahama", official: "http://brooklynroasting.jp/location/kitahama/", linkLabel: "Café website", maps: maps("Brooklyn Roasting Company Kitahama 1-1-9"), rating: 4.4, checkedOn: "20 November 2026", ratingSource: "https://exa.ai/library/place/vzw9bwt5mdk" },
  shushuNagai: { name: "Yakiniku Shushu Nagai", official: "https://tabelog.com/en/osaka/A2701/A270404/R6919/rstLst/", linkLabel: "Nagai restaurant listings", maps: maps("炭火焼肉ホルモン 秀彬 長居3-13-7"), rating: 4.7, checkedOn: "20 November 2026", ratingSource: "https://exa.ai/library/place/jk7qxd880xq" },
  matasaburo: { name: "Matasaburo", official: "https://www.matasaburo.com/", linkLabel: "Restaurant website", maps: maps("又三郎 長居2-13-13"), rating: 4.5, checkedOn: "20 November 2026", ratingSource: "https://exa.ai/library/place/yb0kgf0745g" },
  utageNagai: { name: "Utage · Nagai", maps: maps("宴 大阪市住吉区長居3-8-3"), rating: 4.8, checkedOn: "20 November 2026", ratingSource: "https://exa.ai/library/place/m65p9v6jjd9" },
  miyakeHonmachi: { name: "Machiya Café Miyake Shoten", official: "https://miyakeshouten.com/", linkLabel: "Café website", maps: maps("町家喫茶 三宅商店 倉敷市本町3-11"), rating: 4.3, checkedOn: "20 November 2026", ratingSource: "https://exa.ai/library/place/srzj3v3lqp3" },
  royalMouriya: { name: "Royal Mouriya", official: "https://www.mouriya.co.jp/en/royal", linkLabel: "Menu & reservations", maps: maps("Royal Mouriya Kobe 1-9-9 Kitanagasadori"), rating: 4.8, checkedOn: "20 November 2026", ratingSource: "https://wanderlog.com/place/details/409769/kobe-beef-steak-restaurant-royal-mouriya" },
  ishidaMain: { name: "Kobe Beef Steak Ishida · Main Shop", official: "https://kobe-ishidaya.com/access/steak-ishida-main/", linkLabel: "Main shop & reservations", maps: maps("Kobe Beef Steak Ishida Main Shop 1-21-21 Kitanagasadori"), rating: 4.8, checkedOn: "20 November 2026", ratingSource: "https://wanderlog.com/place/details/867211/kobe-beef-steak-ishidamain-shop" },
  steaklandKobe: { name: "Steakland · Kobe shop", official: "https://steakland.jp/", linkLabel: "Restaurant website", maps: maps("Steakland Kobe 1-8-2 Kitanagasadori"), rating: 4.2, checkedOn: "20 November 2026", ratingSource: "https://www.taveri.jp/store/ChIJrcaMfSyPAGARiRaaEHKAvVA" },
} satisfies Record<string, JapanVenue>;

export type JapanVenueId = keyof typeof japanVenues;
