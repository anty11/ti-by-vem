import { ArrowUpRight, BedDouble, Car, Clock3, Coffee, MapPin, Route, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { drivingMapUrl, placeMapUrl } from "@/lib/france-guide";
import rivieraImage from "@/assets/riviera.jpg";

function MapLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight /></a></Button>;
}

export function FranceDayTwoGuide() {
  return <section aria-label="France day 2 detailed guide" className="mt-10 border-t border-border pt-10 text-ink">
    <header className="relative isolate overflow-hidden rounded-lg bg-ink">
      <img src={rivieraImage} alt="The Mediterranean coastline" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="relative px-6 py-10 text-onink sm:px-10">
        <p className="text-xs font-semibold uppercase">Your guide · Day 02 · Verdon to Cannes</p>
        <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight sm:text-5xl">Canyon mornings.<br />Riviera nights.</h2>
        <p className="mt-5 max-w-lg text-sm leading-relaxed">Roussillon → Valensole → Brunet → Plage du Galetas → Moustiers-Sainte-Marie → Cannes</p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm"><span className="flex items-center gap-2"><Waves className="size-4" />Pedal boats first</span><span className="flex items-center gap-2"><BedDouble className="size-4" />Hotel Verlaine · Cannes</span></div>
      </div>
    </header>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Your day at a glance</h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-soft">An early start protects the best part of this day: getting out on the water before the rental queues build. This is a suggested summer schedule, not our exact travel diary. Confirm the boat operator's opening time and weather conditions before setting your alarm.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["05:45", "Wake up & pack", "Have swimwear, a towel, dry clothes and cash ready before leaving."],
        ["05:30 option", "A quiet Roussillon viewpoint", "Wake a little earlier for a short village-viewpoint walk if there is enough daylight. Keep it brief and skip the paid ochre trail this morning."],
        ["06:15–06:30", "Takeaway breakfast & departure", "Collect coffee and breakfast if a bakery is open, otherwise take food prepared the evening before."],
        ["08:30–09:00 target", "Plage du Galetas", "Allow roughly 2–2½ hours for the drive plus parking. A lavender photo stop needs extra time. Aim for the operator's first opening, not a guaranteed 09:00 launch."],
        ["Morning", "Pedal boats & a swim", "Allow about 1½–2 hours on the water if the rental terms and conditions permit."],
        ["12:00–12:30", "Moustiers-Sainte-Marie", "Park, wander the village and make your way to lunch."],
        ["13:00 target", "Lunch at Les Tables du Cloître", "Confirm lunch service and book for your date. Leave room for a relaxed meal."],
        ["14:30–15:00", "Drive to Cannes", "Allow roughly 2½–3 hours plus traffic and a short break."],
        ["17:30–18:00 target", "Hotel Verlaine", "Check in, shower and get ready for the evening."],
        ["Evening", "Cannes, dinner & the sea", "On a confirmed fireworks night, arrange the dinner timing around the official display. Otherwise enjoy a beachside dinner and the promenade."],
      ].map(([time, title, note]) => <li key={time} className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-4"><span className="text-sm font-semibold text-terracotta">{time}</span><div><p className="text-sm font-semibold">{title}</p><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Coffee className="size-5" />01 · Roussillon, before the village wakes</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Breakfast at OMMA looked excellent, but we chose coffee and breakfast to take into the car. Staying for a leisurely hotel breakfast would have meant reaching the pedal boats later, and those were our priority. Prepare your bags the evening before so the morning stays simple.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">For the earlier walk, use the village viewpoints around the church of Saint-Michel for the ochre landscape. Stay on marked public paths and away from cliff edges. Sunrise varies by date, so this is a daylight option, not a reason to walk an unlit path.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={placeMapUrl("Église Saint-Michel Roussillon")}><MapPin />Morning viewpoint</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-2xl">02 · Through lavender country</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Follow the route through Valensole and Brunet towards the lake. When the lavender is in bloom, make one short stop, not a long detour. Outside the flowering season, the plateau still gives you beautiful open views, just without the purple fields.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Use a visitor farm or a signed pull-in. Never stop in a traffic lane, block farm access or walk into private crops without permission. Photograph from an authorised spot and keep your water-time arrival in mind.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href="https://www.google.com/maps/dir/?api=1&origin=OMMA+Luberon+Roussillon&destination=Plage+du+Galetas+Aiguines&waypoints=Valensole%7CBrunet&travelmode=driving"><Route />Drive via Valensole & Brunet</MapLink><MapLink href={placeMapUrl("Valensole")}><MapPin />Valensole</MapLink><MapLink href={placeMapUrl("Brunet Alpes-de-Haute-Provence")}><MapPin />Brunet</MapLink></div>
      <p className="mt-4 text-sm text-soft"><strong className="text-ink">Roads & tolls · </strong>Choose the local-road route if avoiding tolls. If your navigation uses the A51, check the toll section and fare before leaving. All drive times here are planning allowances.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Waves className="size-5" />03 · Plage du Galetas & the Verdon canyon</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Head to Plage du Galetas on the Aiguines side of Lac de Sainte-Croix, close to Pont du Galetas. This is the beach base for renting a pedal boat and approaching the canyon entrance from the lake. Arrive early because the available boats can all be out quickly.</p>
      <aside className="mt-5 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">The priority of the day:</strong> get to the rental base for its first opening. An early arrival improves your chances, but availability is never guaranteed. Wind, water levels and safety restrictions can stop rentals or limit canyon access. Follow the operator's instructions rather than entering a closed area.</aside>
      <div className="mt-5 grid gap-6 sm:grid-cols-2"><div><h4 className="text-sm font-semibold">Parking & arrival</h4><p className="mt-2 text-sm leading-relaxed text-soft">Use the signed beach parking at Plage du Galetas on the Aiguines side. Allow 15–20 minutes to park, unload and reach the rental base. Check the parking signs and charges, and leave valuables and luggage out of sight.</p></div><div><h4 className="text-sm font-semibold">Bring into the boat</h4><p className="mt-2 text-sm leading-relaxed text-soft">Cash as a backup, swimwear, towels, dry clothes, water, sun protection and a waterproof pouch. Follow life-jacket requirements. Swim only where permitted and safe, away from boat traffic, and keep an eye on your rental return time.</p></div></div>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={placeMapUrl("Parking Plage du Galetas Aiguines")}><MapPin />Beach parking</MapLink><MapLink href={placeMapUrl("Location pédalo Plage du Galetas Aiguines")}><Waves />Boat rental base</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-2xl">04 · Moustiers-Sainte-Marie & lunch</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Allow roughly 20–30 minutes from the beach to the village, plus parking. Take the local road towards Moustiers-Sainte-Marie, with no motorway toll on this leg. Park in a signed visitor space rather than trying to drive through the narrow historic centre.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Start at the church of Notre-Dame-de-l’Assomption, wander Place de l’Église and the lanes by the stream, then browse the little faïence shops. The chapel of Notre-Dame de Beauvoir is a longer, steep stair climb. Save it for extra time and energy rather than squeezing it in before lunch.</p>
      <aside className="mt-4 border-l-2 border-sage pl-4"><h4 className="text-xs font-semibold uppercase">V & eM · our lunch stop</h4><p className="mt-2 text-sm leading-relaxed text-soft">We ate at Les Tables du Cloître. Make this your lunch pause after the water and village walk, with time to sit down before the drive to Cannes.</p></aside>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={drivingMapUrl("Plage du Galetas Aiguines", "Moustiers-Sainte-Marie")}><Route />Drive to Moustiers</MapLink><MapLink href="https://www.google.com/maps/dir/?api=1&origin=Église+Notre-Dame-de-l’Assomption+Moustiers-Sainte-Marie&destination=Les+Tables+du+Cloître+Moustiers-Sainte-Marie&waypoints=Place+de+l’Église+Moustiers-Sainte-Marie&travelmode=walking"><MapPin />Village walk to lunch</MapLink><MapLink href={placeMapUrl("Les Tables du Cloître Moustiers-Sainte-Marie")}>Lunch location</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Car className="size-5" />05 · Cannes & Hotel Verlaine</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Allow roughly 2½–3 hours from Moustiers to Cannes, with more room for summer traffic. This is a longer drive, so stop safely if you need a break. A route joining the A8 can include tolls, while an all-local-road alternative is generally slower. Check your chosen route and toll allowance before departure.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">At Hotel Verlaine, put the bags down, shower and change for the evening. Confirm parking with the hotel before arrival rather than assuming a room includes a space. Head towards Rue d’Antibes, then the Croisette and its beach restaurants. Keep the longer old-town visit for another moment if dinner is approaching.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={drivingMapUrl("Les Tables du Cloître Moustiers-Sainte-Marie", "Hotel Verlaine Cannes")}><Route />Drive to Hotel Verlaine</MapLink><MapLink href={drivingMapUrl("Hotel Verlaine Cannes", "Miramar Plage Cannes").replace("travelmode=driving", "travelmode=walking")}><MapPin />Walk to the beach</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-2xl">06 · Dinner beneath the fireworks</h3>
      <aside className="mt-5 border-l-4 border-terracotta pl-5"><h4 className="text-lg font-semibold">Book your fireworks-night dinner ahead</h4><p className="mt-3 text-sm leading-relaxed text-soft">We had dinner at Miramar Plage and it was perfect. On fireworks evenings, reserve well ahead and be prepared for advance payment or a special-event menu. Confirm the amount, payment deadline, cancellation terms and a table with a view directly with the restaurant.</p></aside>
      <p className="mt-4 text-sm leading-relaxed text-soft">Fireworks are not every night. Match your stay to the official Cannes festival calendar before paying for an event dinner. If Miramar is full, there are plenty of neighbouring beach restaurants along the Croisette. Ask about their fireworks menu and view, then choose another without losing the evening.</p>
      <p className="mt-4 text-sm leading-relaxed text-soft">After dinner, walk the seafront promenade if you still feel like a little night-time Cannes. If the fireworks have already filled the day with enough memories, go straight back to Hotel Verlaine. Tomorrow brings another move, but a much calmer day.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={placeMapUrl("Miramar Plage Cannes")}>Miramar Plage</MapLink><MapLink href={placeMapUrl("Boulevard de la Croisette Cannes")}><MapPin />Night promenade</MapLink></div>
    </div>
    <div className="py-8"><h3 className="font-display text-2xl">What to put in your budget</h3><p className="mt-3 text-sm leading-relaxed text-soft">Takeaway breakfast, fuel, any motorway tolls, beach and village parking, pedal-boat rental, lunch, Hotel Verlaine and parking, plus the beach dinner or fireworks menu. If dinner is prepaid, record it once in Budget check rather than adding it again after the meal.</p></div>
  </section>;
}