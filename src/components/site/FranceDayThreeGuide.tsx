import { ArrowUpRight, Car, Coffee, MapPin, Route, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { drivingMapUrl, placeMapUrl } from "@/lib/france-guide";
import rivieraImage from "@/assets/france-day3-pampelonne.jpg";
import { FranceDayRouteSketch } from "@/components/site/FranceDayRouteSketch";

import { FranceDayVenueLinks } from "@/components/site/FranceDayVenueLinks";

function MapLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight /></a></Button>;
}

export function FranceDayThreeGuide() {
  return <section aria-label="France day 3 detailed guide" className="mt-10 border-t border-border pt-10 text-ink">
    <header className="relative isolate overflow-hidden rounded-lg bg-ink">
      <img src={rivieraImage} alt="Pampelonne beach near Saint-Tropez" width={1536} height={768} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="france-day-photo-shade absolute inset-0" aria-hidden="true" />
      <div className="relative px-6 py-10 text-onink sm:px-10">
        <p className="text-xs font-semibold uppercase">Your guide · Day 03 · Saint-Tropez</p>
        <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight sm:text-5xl">Saint-Tropez.<br />A day to slow down.</h2>
        <p className="mt-5 max-w-lg text-sm leading-relaxed">Cannes → Pampelonne Beach · Verde → Hotel Playa → Saint-Tropez port</p>
      </div>
    </header>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-2xl">Your day at a glance</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">One of the simpler days by our standards. Breakfast, a little Cannes moment, then a proper beach day and an unhurried evening. These are suggested timings, not our exact arrival times. Set your departure around your confirmed Verde reservation and check live traffic.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["08:00–09:00 · suggested", "Breakfast at Saddle, Cannes", "Avocado toast and coffee, then a short walk towards the Palais des Festivals."],
        ["09:00–09:30 · suggested", "The festival steps", "A quick tourist moment, then back to the car. Check out and take your bags with you."],
        ["09:30–12:00 · suggested", "Drive to Verde Beach", "Allow around 2–3 hours as a summer planning buffer, more if traffic is heavy. Check the actual route before leaving."],
        ["12:00–16:30 · booking-led", "Verde · Pampelonne", "Your reserved sunbeds, a swim and lunch. No need to fill this part of the day with more stops."],
        ["17:00–18:00 · suggested", "Hotel Playa, Saint-Tropez", "Drive back from the beach, park at the port and check in. Confirm the hotel's check-in hours."],
        ["18:30 onwards · sunset-led", "Cakes, the old town & the port", "La Tarte Tropézienne, a gentle wander and a seat beside the sea."],
      ].map(([time, title, note]) => <li key={time} className="grid gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4"><span className="text-sm font-semibold text-terracotta">{time}</span><div><p className="text-sm font-semibold">{title}</p><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
    </div>

    <FranceDayRouteSketch day={3} />
    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Coffee className="size-5" />01 · Saddle & a Cannes tourist moment</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Saddle is a popular breakfast spot, and the avocado toast is V & eM approved. The coffee was excellent too. Give yourself time for a queue rather than turning a relaxed breakfast into a rushed start.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">After breakfast, we walked past the film-festival steps at the Palais des Festivals. A tourist moment has to happen sometimes. Enjoy the photo if access is open, then move on. Event setups and security can limit access, and the red carpet isn't a permanent guarantee.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Saddle is at 10 rue Hélène Vagliano. The Palais is at 1 boulevard de la Croisette. Its steps are open to the public outside events, but festival access is restricted to authorised attendees.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={placeMapUrl("Saddle Cannes")}><Coffee />Saddle location</MapLink><MapLink href="https://saddledubai.com/saddle-cafe-cannes/">Cannes menu</MapLink><MapLink href={drivingMapUrl("Saddle Cannes", "Palais des Festivals Cannes").replace("travelmode=driving", "travelmode=walking")}><MapPin />Walk to the festival steps</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Car className="size-5" />02 · Cannes to the beach</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Verde Beach is on Pampelonne Beach in Ramatuelle, outside central Saint-Tropez. This is not a beach club you can casually walk to from the port. Plan a car or taxi, and navigate to the club rather than Saint-Tropez town centre.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Arrival address: 1149 chemin de l’Épi, Plage de Pampelonne, Ramatuelle. Parking at Verde was no problem for us. Each beach club has its own parking area, so follow the signs for your club. Valet parking is also available for an additional charge. Confirm current parking and valet charges when booking.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">The A8 option can include tolls. Local-road alternatives may be slower, especially along the coast in summer. Check the route and traffic before departure, allow a generous buffer for your reservation and follow the club's parking instructions. Keep luggage and valuables out of sight in the car.</p>
      <aside className="mt-4 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">V & eM · don't rely on a last-minute taxi</strong> Our taxi bookings were cancelled more than once. Arrange your return pickup in advance, reconfirm it and leave time for delays. Ask the beach club or hotel to help with a local taxi and have a backup plan. If driving, keep the day alcohol-free for the driver.</aside>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={drivingMapUrl("Cannes", "Verde Beach Ramatuelle")}><Route />Drive to Verde</MapLink><MapLink href={placeMapUrl("Verde Beach Ramatuelle")}><MapPin />Beach club arrival</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Waves className="size-5" />03 · A whole beach day at Verde</h3>
      <aside className="mt-5 border-l-4 border-terracotta pl-5"><h4 className="text-lg font-semibold">Always book beach clubs in advance</h4><p className="mt-2 text-sm leading-relaxed text-soft">Reserve your beach places before travelling. Confirm whether sunbeds and the restaurant need separate bookings, the arrival time, any deposit or minimum spend, cancellation terms and parking. Keep the written confirmation and check your email for follow-up steps.</p></aside>
      <p className="mt-4 text-sm leading-relaxed text-soft">We spent the day at Verde, and that was exactly the point: rest, swim and let someone else bring lunch. The steak was surprisingly excellent, and the kitchen impressed us. The shisha, on the other hand, felt overpriced. Check the menu and extras before ordering rather than assuming everything is part of the beach booking.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">At Verde, we were given towels and everything we needed for our beach setup, which made the day feel easy. Check what your own reservation includes, then bring swimwear, sunscreen and dry clothes. Follow the beach's swimming flags and leave valuables secure. Let this stay a beach day, not another race through the map.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href="https://verde-beach.com/">Verde · official website</MapLink><MapLink href="https://www.sevenrooms.com/explore/verdebeach/reservations/create/search/">Reserve Verde</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-2xl">04 · Hotel Playa & port parking</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Allow roughly 30–60 minutes from Pampelonne to Saint-Tropez in busy summer conditions, as a planning estimate, with longer delays possible in peak traffic. This local-road leg has no motorway toll. For us, parking in Saint-Tropez was straightforward: the large port car park worked well, and our accommodation was only a few minutes away on foot.</p>
      <aside className="mt-4 border-l-2 border-sage pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">V & eM · Hotel Playa is a practical recommendation</strong> The location was excellent, and the value felt good for our stay. The hotel is older, so don't expect a glossy new resort. Saint-Tropez prices in season can be extremely high, and we wouldn't spend more just for the address. Playa gave us a useful base right where we wanted to be.</aside>
      <p className="mt-3 text-sm leading-relaxed text-soft">Hotel Playa is at 99 rue Allard and has no private parking. Use Parking du Nouveau Port, 1 avenue du Général de Gaulle. The hotel lists it as approximately three minutes away on foot. Check current charges and any height restrictions, confirm check-in arrangements and unload only where permitted.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">There is no lift at Hotel Playa.</strong> Expect stairs with your luggage. If stairs are difficult for you, check room access with the hotel before booking.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={drivingMapUrl("Verde Beach Ramatuelle", "Parking du Nouveau Port 1 Avenue du Général de Gaulle Saint-Tropez")}><Route />Drive to port parking</MapLink><MapLink href={drivingMapUrl("Parking du Nouveau Port Saint-Tropez", "Hotel Playa 99 Rue Allard Saint-Tropez").replace("travelmode=driving", "travelmode=walking")}><MapPin />Walk to Hotel Playa</MapLink><MapLink href="https://www.playahotelsttropez.com/services">Hotel & parking details</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-2xl">05 · Sunset, something sweet & the port</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Pick up cakes at La Tarte Tropézienne, wander the old-town lanes as the light softens, then find a seat by the water at Port de Saint-Tropez. Check the bakery's closing time first, and collect your cakes earlier if sunset falls after it closes. Tonight doesn't need a list of sights. Just enjoy the atmosphere.</p>
      <aside className="mt-4 border-l-2 border-sage pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">V & eM · the honest version</strong> Saint-Tropez itself didn't make a huge impression on us. We enjoyed slowing down here, but without the beach-and-rest part of the trip, we wouldn't have stayed for two days. Come for the kind of day you actually want, not because the name says you should love it.</aside>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href="https://boutiques.latartetropezienne.fr/saint-tropez-place-des-lices/">La Tarte Tropézienne · Place des Lices</MapLink><MapLink href={drivingMapUrl("Hotel Playa Saint-Tropez", "Port de Saint-Tropez").replace("travelmode=driving", "travelmode=walking")}><MapPin />Walk to the port</MapLink></div>
    </div>
    <FranceDayVenueLinks day={3} />
    <div className="py-8"><h3 className="font-display text-2xl">What to put in your budget</h3><p className="mt-3 text-sm leading-relaxed text-soft">Saddle breakfast, fuel and any A8 tolls, beach-club sunbeds, lunch and extras, club parking or return taxis, port parking, Hotel Playa and cakes. Confirm what the beach booking includes. Record prepaid items once, not again when you arrive.</p></div>
  </section>;
}