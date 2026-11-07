import { ArrowUpRight, CalendarCheck, BedDouble, Mail, Car, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { franceVenues, type FranceVenue } from "@/lib/france-venues";

function VenueLinks({ venue }: { venue: FranceVenue }) {
  return <div className="mt-3 flex flex-wrap items-center gap-2">
    {venue.official && <Button asChild variant="outline" size="sm"><a href={venue.official} target="_blank" rel="noreferrer">Official<ArrowUpRight /></a></Button>}
    {venue.booking && <Button asChild variant="outline" size="sm"><a href={venue.booking} target="_blank" rel="noreferrer">Booking.com<ArrowUpRight /></a></Button>}
    {venue.maps && <Button asChild variant="outline" size="sm"><a href={venue.maps} target="_blank" rel="noreferrer">Google Maps<ArrowUpRight /></a></Button>}
    {venue.rating !== undefined && <span className="flex items-center gap-1 text-xs text-soft"><Star className="size-3 text-gold" />{venue.rating.toFixed(1)} / 5 · {venue.reviews?.toLocaleString("en-US")} reviews</span>}
  </div>;
}

const reservations = [
  { day: 4, name: "Bagatelle St. Tropez", timing: "Book first", note: "We recommend planning months ahead and checking when reservations open for your date. Ask for second seating if you want the party atmosphere. Confirm the seating, table time limit and payment conditions through the official booking system, not an unverified promoter." },
  { day: 2, name: "Miramar Plage", timing: "As soon as your fireworks date is confirmed", note: "Check the Cannes Festival d’Art Pyrotechnique programme before choosing your evening. Our fireworks dinner was prepaid. Monitor emails for verified payment requests and final reservation confirmation. A request to send the confirmation is a normal part of the venue process. Nearby beach restaurants are alternatives if Miramar is full." },
  { day: 3, name: "Verde Beach", timing: "Before travelling", note: "Book the beach setup in advance and clarify whether lunch needs a separate reservation. Confirm sunbeds, towels, arrival time and parking or valet charges. We received towels and everything we needed, but check what your chosen booking includes." },
  { day: 4, name: "Gigi Ramatuelle", timing: "Book early", note: "Reserve dinner and check seasonal opening dates. Keep some arrival flexibility, we waited about 15 minutes even with a reservation. Arrange the journey back before the evening, as taxis were difficult for us." },
  { day: 6, name: "Riviera Restaurant", timing: "Before travelling", note: "Reserve the correct Riviera Restaurant at The Maybourne Riviera, request the terrace and confirm the service and arrival arrangements. Our lunch was at 13:00. Ask about valet charges and allow time to enjoy the setting rather than rushing the meal." },
];

const hotelStops = [
  { day: 1, prefix: "OMMA Luberon", nights: "Night 1 · Roussillon", note: "Confirm check-in time, parking and your room category." },
  { day: 2, prefix: "Hotel Verlaine", nights: "Night 2 · Cannes", note: "It served our stay well, but is not a strong personal recommendation. Confirm availability in the small car park." },
  { day: 3, prefix: "Hotel Playa", nights: "Nights 3–4 · Saint-Tropez", note: "Our good-value, well-located base. There is no lift, so consider stairs with luggage. Plan parking at the port." },
  { day: 5, prefix: "Hotel Albert 1er", nights: "Night 5 · Nice", note: "Our room had a small sea-view balcony. Confirm the exact room category if you want the same. Ask about luggage drop-off and nearby parking." },
  { day: 6, prefix: "Royal Westminster", nights: "Night 6 · Menton · alternative", note: "An option to compare, not personally tried by us. We would choose another hotel rather than repeat our Hotel Vendôme stay. Confirm parking and luggage drop-off." },
  { day: 6, prefix: "Best Western Premier Prince de Galles", nights: "Night 6 · Menton · alternative", note: "Another option to compare, not personally tried by us. Choose one Menton hotel, not both alternatives." },
];

export function FranceReservationOverview() {
  return <section aria-label="France reservation overview" className="mt-10 border-t border-border pt-10 text-ink">
    <header>
      <p className="text-xs font-semibold uppercase text-terracotta">Your guide · Before you go</p>
      <h2 className="mt-3 font-display text-4xl sm:text-5xl">Reservations, all in one place.</h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-soft">The tables, stays and experiences we would arrange before this trip. Secure the hardest-to-get bookings first, then fit the drives and smaller stops around your confirmed times.</p>
    </header>

    <section className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Car className="size-5" />Start with the journey</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Book your arrival into Marseille and departure from Nice, then the one-way rental car. Our flight landed at 09:00 on day 1 and we had the car by 10:00. Check the pickup hours, one-way fee, deposit card requirements, insurance and return instructions. If driving into Monaco, confirm cross-border permission with the rental company.</p>
    </section>

    <section className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><CalendarCheck className="size-5" />The priority bookings</h3>
      <ol className="mt-4 divide-y divide-border">{reservations.map((reservation) => {
        const venue = franceVenues[reservation.day]?.find((item) => item.name === reservation.name);
        if (!venue) return null;
        return <li key={reservation.name} className="py-5">
          <p className="text-xs font-semibold text-terracotta">Day {reservation.day} · {reservation.timing}</p>
          <h4 className="mt-1 text-lg font-semibold">{reservation.name}</h4>
          <p className="mt-2 text-sm leading-relaxed text-soft">{reservation.note}</p>
          <VenueLinks venue={venue} />
        </li>;
      })}
        <li className="py-5">
          <p className="text-xs font-semibold text-terracotta">Day 5 · Book well ahead</p>
          <h4 className="mt-1 text-lg font-semibold">Galimard · perfume creation in Grasse</h4>
          <p className="mt-2 text-sm leading-relaxed text-soft">Choose your session before travelling and build day 5 around it. Our workshop was at 14:00. Confirm duration, language, workshop address, parking and arrival instructions. Use the address in your confirmation, not just any Galimard shop or factory.</p>
          <Button asChild variant="outline" size="sm" className="mt-3"><a href="https://www.galimard.com/en/product/perfume-creation-workshop-in-grasse-private-individuals" target="_blank" rel="noreferrer">Reserve the workshop<ArrowUpRight /></a></Button>
        </li>
        <li className="py-5">
          <p className="text-xs font-semibold text-terracotta">Day 6 · Plan before the evening</p>
          <h4 className="mt-1 text-lg font-semibold">Monaco dinner & return taxi</h4>
          <p className="mt-2 text-sm leading-relaxed text-soft">Reserve your chosen restaurant, we missed the dinner plans we wanted without a booking. Arrange transport both ways with your hotel or provider and confirm the pickup point, fare and any cross-border restrictions. Our return taxi was harder to organise than the outward journey.</p>
          <Button asChild variant="outline" size="sm" className="mt-3"><a href="https://www.visitmonaco.com/en/plan-your-stay/access-and-transport/getting-around/getting-around-by-taxi" target="_blank" rel="noreferrer">Monaco taxi guidance<ArrowUpRight /></a></Button>
        </li>
      </ol>
      <p className="text-xs leading-relaxed text-soft">Google Maps rating snapshots checked 7 November 2026. Ratings, availability, opening dates and booking conditions can change.</p>
    </section>

    <section className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><BedDouble className="size-5" />Your overnight bases</h3>
      <ul className="mt-4 divide-y divide-border">{hotelStops.map((stop) => {
        const venue = franceVenues[stop.day]?.find((item) => item.name.startsWith(stop.prefix));
        if (!venue) return null;
        return <li key={stop.prefix} className="py-5"><p className="text-xs font-semibold text-terracotta">{stop.nights}</p><h4 className="mt-1 text-lg font-semibold">{venue.name}</h4><p className="mt-2 text-sm leading-relaxed text-soft">{stop.note}</p>{stop.prefix === "Hotel Playa" && <p className="mt-3 border-l-2 border-terracotta pl-3 text-sm font-semibold text-ink">No lift · stairs only. You will need to carry your luggage up the stairs. If stairs are difficult for you, confirm room access before booking or choose another hotel.</p>}<VenueLinks venue={venue} /></li>;
      })}</ul>
    </section>

    <section className="border-b border-border py-8">
      <h3 className="font-display text-2xl">Keep these stops flexible</h3>
      <ul className="mt-4 space-y-4 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Day 1 · La Table des Ocres.</strong> We did not need an advance dinner reservation on our visit. Check service days and availability for yours.</li>
        <li><strong className="text-ink">Day 2 · Galetas pedal boats.</strong> We arrived at 10:00 and spent about 2.5 hours on the water. Check seasonal operation, weather and rental conditions ahead. Do not assume an online booking is available or a boat is guaranteed. Bring cash and dry clothes.</li>
        <li><strong className="text-ink">Days 4–5 · Breakfast & Rondini.</strong> Arrive at Cédric Grolet at opening and keep Sénéquier early, day 5 starts at 08:00. At Rondini our feet were measured for the correct size and we took the sandals away immediately.</li>
        <li><strong className="text-ink">Day 5 · La Villa d’Este.</strong> Check its current walk-in policy and allow for a queue. The portions were enormous during our visit.</li>
        <li><strong className="text-ink">Day 7 · La Cabane Plage.</strong> We walked in and found space, but not in the first row. Ask ahead if a particular beach spot matters. Keep the final day flexible around your flight.</li>
      </ul>
    </section>

    <section className="border-b border-border py-8">
      <h3 className="font-display text-2xl">Monaco · prepare before you arrive</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Check the casino’s current gaming-room age, original ID, dress and admission requirements. Carry your original valid passport or accepted national ID, dress smartly and allow time for security checks, including possible handbag inspection. Sightseeing and gaming-room entry have different conditions. Check the official events calendar if you want fireworks, they are not nightly. Check your mobile roaming allowance for Monaco too.</p>
      <div className="mt-4 flex flex-wrap gap-2"><Button asChild variant="outline" size="sm"><a href="https://www.montecarlosbm.com/en/casino/game/prices-and-conditions-entry" target="_blank" rel="noreferrer">Casino entry conditions<ArrowUpRight /></a></Button><Button asChild variant="outline" size="sm"><a href="https://www.visitmonaco.com/en/events/events-calendar" target="_blank" rel="noreferrer">Monaco events<ArrowUpRight /></a></Button></div>
    </section>

    <section className="py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Mail className="size-5" />Before you close the suitcase</h3>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-soft">
        <li>Save each final confirmation with the date, time, number of guests and exact address. Keep a copy available offline.</li>
        <li>Check whether a booking request is actually confirmed. Keep payment receipts and review cancellation, deposit and no-show terms.</li>
        <li>Monitor your inbox and spam folder for venue messages. Verify unexpected payment requests through the official contact before paying.</li>
        <li>Confirm dietary needs, hotel parking, room details and the return taxi. Use your confirmed appointments as the anchors for each day.</li>
      </ul>
    </section>
  </section>;
}