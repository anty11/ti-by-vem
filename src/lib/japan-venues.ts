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
  rikuroNamba: { name: "Rikuro Ojisan · Namba main store", official: "https://www.rikuro.co.jp/shoplist/134.html", linkLabel: "Main store & takeaway", maps: maps("りくろーおじさんの店 なんば本店 難波3-2-28"), rating: 4.2, checkedOn: "20 November 2026", ratingSource: "https://www.taveri.jp/store/ChIJK2A0qGznAGARxPHcddHFYYA" },
  issindoNamba: { name: "Isshindo · Osaka Takashimaya B1", official: "https://www.issindo-osaka.com/shop_info/index.html", linkLabel: "Fruit daifuku · shop directory", maps: maps("一心堂 大阪高島屋 難波5-1-5") },
  narutoNihonbashi: { name: "Naruto Taiyaki Honpo · Osaka Nihonbashi", official: "https://taiyaki.co.jp/", linkLabel: "Fillings & store finder", maps: maps("鳴門鯛焼本舗 大阪日本橋店 難波中2-1-1"), rating: 4.4, checkedOn: "20 November 2026", ratingSource: "https://exa.ai/library/places?ids=fhynqyflcp0%2Cqlxkbm4y49x%2Cvk5hx4b25zb%2C1h9bchvwvh6%2Cmn07szccnjw%2C9xm3kmqnt2d%2Crly3f1ynvrb%2Czb0b679ls8k%2Csbtz2ckqn0s%2Cq73pc84j7k9" },
  narutoSennichimae: { name: "Naruto Taiyaki Honpo · Sennichimae Aiaibashi", official: "https://taiyaki.co.jp/", linkLabel: "Fillings & store finder", maps: maps("鳴門鯛焼本舗 千日前相合橋店 千日前1-4-10"), rating: 4.5, checkedOn: "20 November 2026", ratingSource: "https://exa.ai/library/places?ids=nklf3x4q7dw%2Cvk5hx4b25zb%2C86qjp0fbbtn%2Cmk7w165nm89%2Cfhynqyflcp0%2Cdsqc127wgx5%2Cv4k4rpkql6j%2Cdllg9qz3dw2%2Cn5wsvrfrqpp%2Cskccc92rbp2" },
  fukuhachiShinsaibashi: { name: "Taiyaki Fukuhachi · Nishishinsaibashi", official: "http://www.fukuhachi.com/", linkLabel: "Shop website", maps: maps("たい焼き 福八 西心斎橋1-10-1"), rating: 4.3, checkedOn: "20 November 2026", ratingSource: "https://exa.ai/library/places?ids=nklf3x4q7dw%2Cvk5hx4b25zb%2C86qjp0fbbtn%2Cmk7w165nm89%2Cfhynqyflcp0%2Cdsqc127wgx5%2Cv4k4rpkql6j%2Cdllg9qz3dw2%2Cn5wsvrfrqpp%2Cskccc92rbp2" },
  gorichanShinsaibashi: { name: "Yakiniku Gorichan · Shinsaibashi", official: "https://tabelog.com/osaka/A2701/A270201/27138286/", linkLabel: "Branch menu & reservations", maps: maps("焼肉ごりちゃん 心斎橋店 心斎橋筋1-3-13"), rating: 4.9, checkedOn: "20 November 2026", ratingSource: "https://exa.ai/library/places?ids=t41zj1qwpv4%2Cn3k2ms649nh%2C0bjzl19mgzf%2Cnnjsdrjnc1x%2Crxl2kcqxxx1%2Csf42tkz5nbs%2Ckttn02jg730%2Czs7gcfv5hr6%2C01r5gytx6zy%2Cf090wdhc9pn" },
  gorichanUmeda: { name: "Yakiniku Gorichan · Umeda main store", official: "https://yakiniku-gorityan.owst.jp/", linkLabel: "Umeda menu & reservations", maps: maps("焼肉ごりちゃん 梅田本店 堂山町8-21") },
  octaveOsaka: { name: "Octave Osaka", official: "https://keh0200.gorp.jp/", linkLabel: "Café, bar & lounge", maps: maps("Octave Osaka 心斎橋筋1-4-28"), rating: 4.9, checkedOn: "20 November 2026", ratingSource: "https://localjapan.net/b/octave-osaka" },
} satisfies Record<string, JapanVenue>;

export type JapanVenueId = keyof typeof japanVenues;
