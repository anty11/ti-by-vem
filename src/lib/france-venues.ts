export type FranceVenue = { name: string; official?: string; booking?: string; maps?: string; rating?: number; reviews?: number; note?: string };
const google = (cid: string) => `https://maps.google.com/?cid=${cid}`;
const playa: FranceVenue = { name: "Hotel Playa", official: "https://www.playahotelsttropez.com/", booking: "https://www.booking.com/hotel/fr/playa.html" };
const albert: FranceVenue = { name: "Hotel Albert 1er", official: "https://www.hotel-albert-1er.com/en/", booking: "https://www.booking.com/hotel/fr/albertpremier.html" };
export const franceVenues: Record<number, FranceVenue[]> = {
  1: [
    { name: "Centr’Halles Kitchen · Avignon", official: "http://www.cuisine-centrhalles-avignon.com/", maps: google("8346583581128272846"), rating: 4.7, reviews: 105 },
    { name: "Chocolaterie de Puyricard · L’Isle-sur-la-Sorgue", official: "https://www.puyricard.fr/", maps: google("7137621636162187117"), rating: 4.5, reviews: 22 },
    { name: "La Table des Ocres", official: "https://www.lamaisondesocres-hotel.com/fr/page/restaurant", maps: google("8576793825583133819"), rating: 4.7, reviews: 90 },
    { name: "OMMA Luberon", official: "https://www.ommaluberon.com/en", booking: "https://www.booking.com/hotel/fr/hotel-le-clos-de-la-glycine.html" },
  ],
  2: [
    { name: "Les Tables du Cloître", maps: google("9205552214971669910"), rating: 4.8, reviews: 855 },
    { name: "Miramar Plage", official: "https://miramarplage.fr/", maps: google("17977079852633882103"), rating: 4.4, reviews: 1860 },
    { name: "Hotel Verlaine · Cannes", official: "https://www.hotel-verlaine-cannes.com/", booking: "https://www.booking.com/hotel/fr/verlaine-cannes1.html" },
  ],
  3: [
    { name: "Saddle Cannes", official: "https://saddledubai.com/saddle-cafe-cannes/", maps: google("6716038713027537325"), rating: 4.1, reviews: 694 },
    { name: "Verde Beach", official: "https://verde-beach.com/", maps: google("9604038874698790571"), rating: 3.7, reviews: 709 },
    { name: "La Tarte Tropézienne · Place des Lices", official: "https://boutiques.latartetropezienne.fr/saint-tropez-place-des-lices/", maps: google("12924435866259870449"), rating: 3.8, reviews: 2219 },
    playa,
  ],
  4: [
    { name: "Cédric Grolet · Saint-Tropez", official: "https://cedric-grolet.com/saint-tropez/", maps: google("14137651201623214245"), rating: 3.4, reviews: 1154 },
    { name: "Bagatelle St. Tropez", official: "https://bagatelle.com/venues/st-tropez/", maps: google("4201709652825700962"), rating: 4, reviews: 896 },
    { name: "Gigi Ramatuelle", official: "https://gigi-restaurant.com/saint-tropez/", maps: google("12626930154698828504"), rating: 4.1, reviews: 1169 },
    playa,
  ],
  5: [
    { name: "Sénéquier", official: "https://www.senequier.com/", maps: google("13426928463873948571"), rating: 3.7, reviews: 2533 },
    { name: "La Villa d’Este · Nice", official: "https://www.villadeste-nice.com/", maps: google("15126822092571889114"), rating: 4.1, reviews: 5910 },
    albert,
  ],
  6: [
    { name: "Riviera Restaurant", official: "https://www.maybourne.com/en/hotels/the-maybourne-riviera/restaurants-bars/riviera-restaurant", maps: google("6003851443134237824"), rating: 4.6, reviews: 238 },
    { name: "Château Eza · coffee stop", official: "https://www.chateaueza.com/", maps: "https://www.google.com/maps/search/?api=1&query=Chateau+Eza" },
    albert,
    { name: "The Maybourne Riviera", official: "https://www.maybourne.com/en/hotels/the-maybourne-riviera", booking: "https://www.booking.com/hotel/fr/the-maybourne-riviera.html", note: "Our lunch venue, not an overnight stay." },
    { name: "Hotel Vendôme · Menton", official: "https://www.hotelvendomementon.com/", booking: "https://www.booking.com/hotel/fr/belambra-resort-amp-menton-quot-le-vendome-quot.html", note: "Our stay, not a personal recommendation." },
    { name: "Royal Westminster", official: "https://www.hotel-royal-westminster.com/en", booking: "https://www.booking.com/hotel/fr/hotel-royal-westminster-menton.html", note: "An alternative to compare, not personally tried by us." },
    { name: "Best Western Premier Prince de Galles", official: "https://www.bestwestern.fr/fr/hotel-Menton-Best-Western-Htl-Prince-De-Galles-93278", booking: "https://www.booking.com/hotel/fr/princedegallesmenton.html", note: "An alternative to compare, not personally tried by us." },
  ],
  7: [{ name: "La Cabane Plage", official: "https://lacabaneplage.eatbu.com/?lang=en", maps: google("8635072357338814224"), rating: 3.7, reviews: 580 }],
};