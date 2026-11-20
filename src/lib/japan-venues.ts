export type JapanVenue = {
  name: string;
  official?: string;
  booking?: string;
  maps: string;
};

const maps = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const booking = (query: string) => `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(query)}`;

export const japanVenues = {
  royalParkKitahama: { name: "The Royal Park Canvas Osaka Kitahama", official: "https://www.royalparkhotels.co.jp/canvas/osakakitahama/en/", booking: booking("The Royal Park Canvas Osaka Kitahama"), maps: maps("The Royal Park Canvas Osaka Kitahama") },
  conrad: { name: "Conrad Osaka", official: "https://www.hilton.com/en/hotels/osacici-conrad-osaka/", booking: booking("Conrad Osaka"), maps: maps("Conrad Osaka Nakanoshima Festival Tower West") },
  nikko: { name: "Hotel Nikko Osaka", official: "https://www.hotelnikkoosaka.jp/en/", booking: booking("Hotel Nikko Osaka"), maps: maps("Hotel Nikko Osaka Shinsaibashi") },
  cross: { name: "Cross Hotel Osaka", official: "https://www.crosshotel.com/osaka/en/", booking: booking("Cross Hotel Osaka"), maps: maps("Cross Hotel Osaka Dotonbori") },
  mihoro: { name: "Mihoro Kawaramachi", official: "https://tabelog.com/en/osaka/A2701/A270106/27041069/", maps: maps("味宝楼 瓦町店 大阪市中央区瓦町2-1-10") },
} satisfies Record<string, JapanVenue>;

export type JapanVenueId = keyof typeof japanVenues;
