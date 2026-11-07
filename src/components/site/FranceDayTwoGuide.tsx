import { ArrowUpRight, BedDouble, Car, Clock3, Coffee, MapPin, Route, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { drivingMapUrl, placeMapUrl } from "@/lib/france-guide";
import rivieraImage from "@/assets/france-day2-verdon.jpg";
import { franceDayTwoArrivalTimes as times, franceDayTwoBoatHours } from "@/lib/france-day-two-timing";
import { FranceRouteArtwork } from "@/components/site/FranceRouteArtwork";

function MapLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight /></a></Button>;
}

export function FranceDayTwoGuide() {
  return <section aria-label="France day 2 detailed guide" className="mt-10 border-t border-border pt-10 text-ink">
    <header className="relative isolate overflow-hidden rounded-lg bg-ink">
      <img src={rivieraImage} alt="Turquoise water and pedal boats in the Verdon Gorge" width={1536} height={768} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="france-day-photo-shade absolute inset-0" aria-hidden="true" />
      <div className="relative px-6 py-10 text-onink sm:px-10">
        <p className="text-xs font-semibold uppercase">Your guide · Day 02 · Verdon to Cannes</p>
        <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-onink"><span aria-hidden="true">♥</span>eM’s favourite</p>
        <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight sm:text-5xl">Canyon mornings.<br />Riviera nights.</h2>
        <p className="mt-5 max-w-lg text-sm leading-relaxed">Roussillon → Valensole → Brunet → Plage du Galetas → Moustiers-Sainte-Marie → Cannes</p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm"><span className="flex items-center gap-2"><Waves className="size-4" />Pedal boats first</span><span className="flex items-center gap-2"><BedDouble className="size-4" />Hotel Verlaine · Cannes</span></div>
      </div>
    </header>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Your day at a glance</h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-soft">These are our actual morning arrival times. We picked up breakfast at 07:40, stopped for lavender and reached the beach at 10:00, which was early enough on our visit. Use this as a rhythm, not a guarantee of boat availability. Check opening hours, traffic and weather for your date. The later Cannes timings are planning suggestions.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["Around 07:00 · suggested", "Wake up & pack", "Have swimwear, a towel, dry clothes and cash ready. Wake a little earlier if you want a short daylight viewpoint walk before breakfast."],
        [times.breakfast, "Takeaway breakfast in Roussillon", "We stopped at the bakery for breakfast and coffee to take into the car."],
        [times.valensole, "Valensole", "Our first lavender-country stop. Keep photo stops short and use permitted stopping places."],
        [times.brunet, "Lavender near Brunet", "We were among the lavender here at 09:18. Flowering is seasonal."],
        [times.beach, "Plage du Galetas", "We reached the beach at 10:00 and it was early enough for us to get a pedal boat."],
        ["About 2½ hours", "Pedal boats & a swim", "This was absolutely wonderful. Give it time rather than rushing to the next stop."],
        [times.moustiers, "Moustiers-Sainte-Marie & lunch", "We were already at stop 4 by 13:30. Confirm lunch service at Les Tables du Cloître for your date."],
        ["14:30–15:00", "Drive to Cannes", "Allow roughly 2½–3 hours plus traffic and a short break."],
        ["17:30–18:00 target", "Hotel Verlaine", "Check in, shower and get ready for the evening."],
        ["Evening", "Cannes, dinner & the sea", "On a confirmed fireworks night, arrange the dinner timing around the official display. Otherwise enjoy a beachside dinner and the promenade."],
      ].map(([time, title, note]) => <li key={time} className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-4"><span className="text-sm font-semibold text-terracotta">{time}</span><div><p className="text-sm font-semibold">{title}</p><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
    </div>

    <div className="border-b border-border py-8" aria-label="Day 2 route sketch">
      <div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="font-display text-2xl">The second day's road</h3><span className="text-xs text-soft">Route sketch · not to scale</span></div>
      <FranceRouteArtwork title="Route from Roussillon through lavender country to Galetas, Moustiers and Cannes" day={2} path="M75 90 Q150 95 235 135 Q290 120 340 95 Q425 105 465 190 L470 65 Q560 110 610 235" stops={[{x:75,y:90,label:"Roussillon"},{x:235,y:135,label:"Valensole"},{x:340,y:95,label:"Brunet"},{x:465,y:190,label:"Galetas"},{x:470,y:65,label:"Moustiers"},{x:610,y:235,label:"Cannes"}]} />
      <p className="mt-3 text-sm leading-relaxed text-soft">Our lavender stops were Valensole at 09:06 and Brunet at 09:18. Angelvin is a separate visitor-farm suggestion, not the field we visited. Use the driving and location maps below for navigation.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Coffee className="size-5" />01 · Roussillon, before the village wakes</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Breakfast at OMMA looked excellent, but we chose coffee and breakfast to take into the car. Staying for a leisurely hotel breakfast would have meant reaching the pedal boats later, and those were our priority. Prepare your bags the evening before so the morning stays simple.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">For the earlier walk, use the village viewpoints around the church of Saint-Michel for the ochre landscape. Stay on marked public paths and away from cliff edges. Sunrise varies by date, so this is a daylight option, not a reason to walk an unlit path.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">V & eM · breakfast at 07:40</strong> We stopped at the boulangerie in Roussillon and took breakfast and coffee into the car. A simple takeaway stop worked perfectly for this day. Check the bakery's opening hours for your date and keep the morning moving after breakfast.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={placeMapUrl("Église Saint-Michel Roussillon")}><MapPin />Morning viewpoint</MapLink><MapLink href={placeMapUrl("Boulangerie Roussillon 84220")}><Coffee />Bakeries in Roussillon</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-2xl">02 · Through lavender country</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Follow the route through Valensole and Brunet towards the lake. When the lavender is in bloom, make one short stop, not a long detour. Outside the flowering season, the plateau still gives you beautiful open views, just without the purple fields.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Use a visitor farm or a signed pull-in. Never stop in a traffic lane, block farm access or walk into private crops without permission. Photograph from an authorised spot and keep your water-time arrival in mind.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">When to see the purple fields · </strong>Late June and early July are a good target, with harvesting generally starting in the second half of July. Flowering depends on the weather and the field. We made brief stops in Valensole and Brunet, not a long farm visit. Lavandes Angelvin near Valensole is a researched visitor-farm alternative with parking and a summer shop opening at 09:00. Allow extra time if you choose to visit, and never assume surrounding private fields are open to visitors.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href="https://www.google.com/maps/dir/?api=1&origin=OMMA+Luberon+Roussillon&destination=Plage+du+Galetas+Aiguines&waypoints=Valensole%7CBrunet&travelmode=driving"><Route />Drive via Valensole & Brunet</MapLink><MapLink href={placeMapUrl("Valensole")}><MapPin />Valensole</MapLink><MapLink href={placeMapUrl("Brunet Alpes-de-Haute-Provence")}><MapPin />Brunet</MapLink></div>
      <div className="mt-3 flex flex-wrap gap-2"><MapLink href={placeMapUrl("43.824546,5.938015")}><MapPin />Lavandes Angelvin · seasonal stop</MapLink><MapLink href="https://www.lavandes-angelvin.fr/fr/content/6-visite">Farm opening hours</MapLink><MapLink href="https://www.tourisme-alpes-haute-provence.com/plaisirs-gourmands/produits-du-terroir/lavande/">Lavender season</MapLink></div>
      <p className="mt-4 text-sm text-soft"><strong className="text-ink">Roads & tolls · </strong>Choose the local-road route if avoiding tolls. If your navigation uses the A51, check the toll section and fare before leaving. All drive times here are planning allowances.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Waves className="size-5" />03 · Plage du Galetas & the Verdon canyon</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Head to Plage du Galetas on the Aiguines side of Lac de Sainte-Croix, close to Pont du Galetas. This is the beach base for renting a pedal boat and approaching the canyon entrance from the lake. Arrive early because the available boats can all be out quickly.</p>
      <aside className="mt-5 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">V & eM · the experience not to miss</strong> We arrived at 10:00 and spent about {franceDayTwoBoatHours} hours on a pedal boat. It was absolutely wonderful, and swimming made it even better. This is the part of the day we'd protect above everything else. Don't trade it for another village stop. Swim where permitted and safe, and always respect weather closures and the operator's instructions.</aside>
      <p className="mt-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Reserve the morning slot · </strong>MYC Plage offers online morning reservations with a deposit and the balance paid on site. Use the live calendar to book, then arrive 15 minutes before your confirmed departure. Its published July–August opening is 09:30–18:00, and May, June and September opening is 10:00–17:00. These are seasonal hours, not year-round access. Cards are accepted, but the operator warns electronic payments can fail, so cash is a useful backup. Check cancellation and weather terms before paying.</p>
      <div className="mt-5 grid gap-6 sm:grid-cols-2"><div><h4 className="text-sm font-semibold">Parking & arrival</h4><p className="mt-2 text-sm leading-relaxed text-soft">Use the signed beach parking at Plage du Galetas on the Aiguines side. Allow 15–20 minutes to park, unload and reach the rental base. Check the parking signs and charges, and leave valuables and luggage out of sight.</p></div><div><h4 className="text-sm font-semibold">Bring into the boat</h4><p className="mt-2 text-sm leading-relaxed text-soft">Cash as a backup, swimwear, towels, dry clothes, water, sun protection and a waterproof pouch. Follow life-jacket requirements. Swim only where permitted and safe, away from boat traffic, and keep an eye on your rental return time.</p></div></div>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={placeMapUrl("Parking Plage du Galetas Aiguines")}><MapPin />Beach parking</MapLink><MapLink href="https://mycplage.fr/reservation-pedalo/"><Waves />Book MYC pedal boats</MapLink><MapLink href="https://mycplage.fr/faq/">Hours, payment & weather</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-2xl">04 · Moustiers-Sainte-Marie & lunch</h3>
      <p className="mt-3 border-l-2 border-sage pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">V & eM · if the day is running late</strong> We were here at 13:30. The village has lovely views and a pleasant atmosphere, but compared with the other experiences today, this is the stop we'd leave out if time was tight. Keep the canyon and your evening in Cannes. If you skip the village, take a lunch break elsewhere before the longer drive.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Allow roughly 20–30 minutes from the beach to the village, plus parking. Take the local road towards Moustiers-Sainte-Marie, with no motorway toll on this leg. Park in a signed visitor space rather than trying to drive through the narrow historic centre.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Arrival · </strong>Parking Maïre is below the village. Allow about 15–25 minutes for the uphill walk to the centre, following the signs for the church. Other signed visitor spaces may shorten the walk if available. Les Tables du Cloître is on Place du Presbytère, behind the parish church. Confirm lunch service for your date before setting off.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Start at the church of Notre-Dame-de-l’Assomption, wander Place de l’Église and the lanes by the stream, then browse the little faïence shops. The chapel of Notre-Dame de Beauvoir is a longer, steep stair climb. Save it for extra time and energy rather than squeezing it in before lunch.</p>
      <aside className="mt-4 border-l-2 border-sage pl-4"><h4 className="text-xs font-semibold uppercase">V & eM · our lunch stop</h4><p className="mt-2 text-sm leading-relaxed text-soft">We ate at Les Tables du Cloître. Make this your lunch pause after the water and village walk, with time to sit down before the drive to Cannes.</p></aside>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={drivingMapUrl("Plage du Galetas Aiguines", "Parking Maïre Moustiers-Sainte-Marie")}><Route />Drive to village parking</MapLink><MapLink href="https://www.google.com/maps/dir/?api=1&origin=Parking+Maïre+Moustiers-Sainte-Marie&destination=Les+Tables+du+Cloître+Moustiers-Sainte-Marie&waypoints=Église+Notre-Dame-de-l’Assomption+Moustiers-Sainte-Marie%7CPlace+de+l’Église+Moustiers-Sainte-Marie&travelmode=walking"><MapPin />Village walk to lunch</MapLink><MapLink href={placeMapUrl("Les Tables du Cloître Moustiers-Sainte-Marie")}>Lunch location</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Car className="size-5" />05 · Cannes & Hotel Verlaine</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Allow roughly 2½–3 hours from Moustiers to Cannes, with more room for summer traffic. This is a longer drive, so stop safely if you need a break. A route joining the A8 can include tolls, while an all-local-road alternative is generally slower. Check your chosen route and toll allowance before departure.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">At Hotel Verlaine, put the bags down, shower and change for the evening. Confirm parking with the hotel before arrival rather than assuming a room includes a space. Head towards Rue d’Antibes, then the Croisette and its beach restaurants. Keep the longer old-town visit for another moment if dinner is approaching.</p>
      <aside className="mt-4 border-l-2 border-sage pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">V & eM · an honest hotel note</strong> Hotel Verlaine served our stay well, with a small car park and a location that let us get around on foot. It isn't one of our strongest hotel recommendations. Treat it as a practical overnight option rather than a highlight, and feel free to choose another hotel with walkable access to the Croisette.</aside>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Hotel arrival · </strong>58 boulevard d’Alsace, Cannes. The hotel lists 12 private parking spaces at €20 per night. Recheck the price and availability when booking. Report to reception first for your allocated space and the key, rather than choosing a spot yourself.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={drivingMapUrl("Les Tables du Cloître Moustiers-Sainte-Marie", "Hotel Verlaine Cannes")}><Route />Drive to Hotel Verlaine</MapLink><MapLink href={drivingMapUrl("Hotel Verlaine Cannes", "Miramar Plage Cannes").replace("travelmode=driving", "travelmode=walking")}><MapPin />Walk to the beach</MapLink></div>
      <div className="mt-3"><MapLink href="https://www.hotel-verlaine-cannes.com/parking/">Hotel parking details</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-2xl">06 · Dinner beneath the fireworks</h3>
      <aside className="mt-5 border-l-4 border-terracotta pl-5"><h4 className="text-lg font-semibold">Book your fireworks-night dinner ahead</h4><p className="mt-3 text-sm leading-relaxed text-soft">We had dinner at Miramar Plage and it was perfect. The fireworks were absolutely beautiful, the kind of evening that becomes a memory of the whole trip. We paid for our dinner reservation in advance. Reserve well ahead and confirm the amount, payment deadline, cancellation terms and a table with a view directly with the restaurant.</p></aside>
      <p className="mt-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Why the fireworks? </strong>Cannes hosts the Festival d’Art Pyrotechnique, a summer competition where international pyrotechnic teams create displays over the bay, choreographed to music. This is a festival performance, not a nightly hotel show, which is why matching your visit to the programme matters.</p>
      <p className="mt-4 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Watch your email after booking.</strong> Check your inbox and spam folder for a payment request, any requested booking details and the final confirmation. A restaurant may ask you to complete advance payment before confirming an event-night table. That can be a normal part of the process, so don't worry just because there is a follow-up step. Verify the request through the restaurant's official contact or booking system before paying, never email card details, and keep the written confirmation. An initial request alone is not a confirmed table.</p>
      <p className="mt-4 text-sm leading-relaxed text-soft">Fireworks are not every night. Match your stay to the official Cannes festival calendar before paying for an event dinner. If Miramar is full, there are plenty of neighbouring beach restaurants along the Croisette. Ask about their fireworks menu and view, then choose another without losing the evening.</p>
      <p className="mt-4 border-l-2 border-gold pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Dinner timing · </strong>For a confirmed 22:00 display, request a 19:40 dinner reservation and aim to arrive at 19:25. These are our suggested timings, not Miramar's mandatory arrival times. Ask the restaurant to confirm its event service. The published 2026 festival generally started at 22:00, but 14 July was at 23:00. Do not assume next year's dates or times are the same. On a non-fireworks night, keep the dinner and enjoy the sea.</p>
      <p className="mt-4 text-sm leading-relaxed text-soft">After dinner, walk the seafront promenade if you still feel like a little night-time Cannes. If the fireworks have already filled the day with enough memories, go straight back to Hotel Verlaine. Tomorrow brings another move, but a much calmer day.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href="https://miramarplage.fr/">Miramar · booking & contact</MapLink><MapLink href="https://www.festival-pyrotechnique-cannes.com/programme/">Official fireworks calendar</MapLink><MapLink href={placeMapUrl("Boulevard de la Croisette Cannes")}><MapPin />Night promenade</MapLink></div>
    </div>
    <div className="py-8"><h3 className="font-display text-2xl">What to put in your budget</h3><p className="mt-3 text-sm leading-relaxed text-soft">Takeaway breakfast, fuel, any motorway tolls, beach and village parking, pedal-boat rental, lunch, Hotel Verlaine and parking, plus the beach dinner or fireworks menu. If dinner is prepaid, record it once in Budget check rather than adding it again after the meal.</p></div>
  </section>;
}