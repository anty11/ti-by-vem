import { ArrowUpRight, Car, MapPin, ShieldAlert, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { drivingMapUrl, placeMapUrl } from "@/lib/france-guide";
import { franceDaySixTimes as times } from "@/lib/france-day-six-timing";
import { FranceDayRouteSketch } from "@/components/site/FranceDayRouteSketch";
import rivieraImage from "@/assets/riviera.jpg";

function MapLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight /></a></Button>;
}

export function FranceDaySixGuide() {
  return <section aria-label="France day 6 detailed guide" className="mt-10 border-t border-border pt-10 text-ink">
    <header className="relative isolate overflow-hidden rounded-lg bg-ink">
      <img src={rivieraImage} alt="The French Riviera coastline" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="relative px-6 py-10 text-onink sm:px-10">
        <p className="text-xs font-semibold uppercase">Your guide · Day 06 · Èze, Menton & Monaco</p>
        <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight sm:text-5xl">Coastal views.<br />A terrace lunch & Monaco lights.</h2>
        <p className="mt-5 max-w-lg text-sm leading-relaxed">Nice → coastal photo stops → Èze → The Maybourne Riviera → Menton → Monaco</p>
      </div>
    </header>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-2xl">Our day, at a glance</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">A slow breakfast at the hotel, then a day of beautiful views. These are our actual timings, with approximate departure and Monaco arrival times. The terrace lunch is the booking to plan around. Our fireworks time applies only to the evening we visited, not every night.</p>
      <ol className="mt-5 divide-y divide-border">{[
        [`Around ${times.leaveNice}`, "Leave Nice after breakfast", "Choose a short coastal photo stop rather than trying to explore every town."],
        [times.eze, "Èze village", "Medieval lanes, viewpoints, souvenirs, Fragonard and a coffee if time allows."],
        [times.rivieraLunch, "Riviera restaurant terrace lunch", "Our reservation at The Maybourne Riviera. Leave time for the drive and arrival."],
        [times.menton, "Arrive in Menton", "Check in, put the bags down and get ready for the evening."],
        [`Around ${times.monaco}`, "Monaco by taxi", "Port Hercule, Monte Carlo, dinner or the casino."],
        [times.fireworks, "Fireworks on our visit", "Only plan around a display with an officially confirmed date and time."],
        ["After the evening", "Return to Menton", "Arrange the return ride before you leave. A night walk or straight to sleep."],
      ].map(([time, title, note]) => <li key={time} className="grid gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4"><span className="text-sm font-semibold text-terracotta">{time}</span><div><p className="text-sm font-semibold">{title}</p><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
    </div>

    <FranceDayRouteSketch day={6} />

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Car className="size-5" />01 · A coastal drive, not a photo-stop marathon</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">We left Nice around {times.leaveNice}, after a relaxed hotel breakfast. Villefranche-sur-Mer and Saint-Jean-Cap-Ferrat make lovely coastal detours, but choose what catches your eye rather than adding every stop. Never stop in a traffic lane or on an unsigned roadside shoulder for a photo.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">For a short Villefranche stop, aim for the waterfront views and colourful old-town façades. If you choose Saint-Jean-Cap-Ferrat instead, the harbour is a compact place for a waterside walk. Both detours together can squeeze the time in Èze before lunch, so check live traffic and leave early enough to reach your reservation.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={`${drivingMapUrl("Hotel Albert 1er Nice", "Èze village")} &waypoints=${encodeURIComponent("Villefranche-sur-Mer")}`.replace("} ", "}").replace(" &", "&")}><Car />Coastal route via Villefranche</MapLink><MapLink href={placeMapUrl("Port Saint-Jean-Cap-Ferrat")}><MapPin />Cap-Ferrat harbour</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-2xl">02 · Èze, medieval lanes & a coffee with a view</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">We arrived at {times.eze}. Navigate to Èze village on the hill, not Èze-sur-Mer down by the coast. Wander the old stone lanes, browse the lovely souvenir shops and visit Église Notre-Dame-de-l’Assomption if it is open. The Jardin Exotique is the paid garden and viewpoint at the top, so check opening hours and ticket arrangements before going up.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Fragonard also has a shop here, a chance to browse another well-known French perfume house. Château Eza is a beautiful coffee-and-view idea if service is available to non-residents. Ask ahead about access and reservations, and keep lunch in mind. Don't rush to fit a garden, shopping and coffee into the same short visit.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={`${drivingMapUrl("Fragonard Èze village", "Jardin Exotique Èze").replace("travelmode=driving", "travelmode=walking")}&waypoints=${encodeURIComponent("Église Notre-Dame-de-l’Assomption Èze|Château Eza")}`}><MapPin />Èze village walk</MapLink><MapLink href={placeMapUrl("Château Eza")} >Château Eza coffee</MapLink><MapLink href={placeMapUrl("Fragonard Èze village")}>Fragonard shop</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Utensils className="size-5" />03 · Riviera restaurant, a terrace worth slowing down for</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Our terrace lunch at Riviera restaurant in The Maybourne Riviera was booked for {times.rivieraLunch}. Reserve ahead and request the terrace, then confirm that your booking is for the restaurant and service you want. Leave room for the drive from Èze, the hotel's arrival arrangements and time to enjoy the setting.</p>
      <aside className="mt-4 border-l-2 border-sage pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">V & eM · this was a highlight</strong> Lunch on the terrace was wonderful. Take photos, enjoy the views and let it feel like an experience rather than another box to tick. This is not the place we'd hurry through just to squeeze in more stops.</aside>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={drivingMapUrl("Èze village", "The Maybourne Riviera Roquebrune-Cap-Martin")}><Car />Drive to terrace lunch</MapLink><MapLink href={placeMapUrl("The Maybourne Riviera Roquebrune-Cap-Martin")}><MapPin />Hotel arrival</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-2xl">04 · Menton, check in & get ready</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">We reached Menton at {times.menton}. Allow roughly 20–40 minutes from The Maybourne Riviera as a planning estimate, more with traffic. Check your chosen hotel's luggage drop-off and parking before arrival, then leave the car in Menton for the evening and go to Monaco by taxi.</p>
      <aside className="mt-4 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">V & eM · we'd choose another hotel</strong> We stayed at Hotel Vendôme, but the reception team was very unpleasant to us. Based on that experience, we wouldn't recommend it. Choose another base rather than booking it just because it appears in our original route.</aside>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={drivingMapUrl("The Maybourne Riviera", "Menton centre")}><Car />Drive to Menton</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><ShieldAlert className="size-5" />05 · Before Monaco: data, the car & your ride back</h3>
      <aside className="mt-4 border-l-4 border-terracotta pl-5"><h4 className="text-lg font-semibold">Check roaming before crossing into Monaco</h4><p className="mt-2 text-sm leading-relaxed text-soft">Monaco may not be included in your operator's EU roaming package. Leaving mobile data on can lead to a very expensive surprise. Check Monaco specifically with your operator. If you aren't sure, switch off mobile data and data roaming before arrival, save maps offline and avoid automatic network switching onto a Monaco network.</p></aside>
      <p className="mt-4 text-sm leading-relaxed text-soft">Monaco is a different country, but that doesn't mean every rental car is forbidden to enter. Check your rental company's cross-border permission and insurance terms before driving there. We used a taxi and recommend keeping the car at your Menton parking base for this evening.</p>
      <aside className="mt-4 border-l-4 border-terracotta pl-5"><h4 className="text-lg font-semibold">Arrange the return taxi before the outward trip</h4><p className="mt-2 text-sm leading-relaxed text-soft">Getting to Monaco was easier than getting back for us. Our French pickup required us to walk back into France. Ask your actual taxi or ride provider where it is authorised to collect you, agree the exact pickup point and price, and save the details offline. Don't assume the car that can drop you in Monaco can also pick you up there. Monaco taxis and pre-arranged transfers can have different arrangements.</p></aside>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-2xl">06 · Monaco, the casino & evening lights</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">We arrived around {times.monaco}. Start by Port Hercule, then make your way towards the Casino de Monte-Carlo, the opera exterior and casino gardens. Continue to the Fairmont hairpin, the famous Formula 1 bend, and enjoy a seaside walk if you still have time. This is a hilly walk, so leave room for stairs, lifts and pauses rather than expecting one flat promenade.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Bring your passport if you want to enter the casino gaming rooms and dress smartly. Check the current age, identification and dress requirements directly with the casino, as sightseeing access and gaming-room entry aren't the same. Dinner before the display or a little time trying your luck were both ways to enjoy the evening.</p>
      <aside className="mt-4 border-l-2 border-sage pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">V & eM · a magical fireworks evening</strong> The fireworks above the casino made our evening feel magical. The display we saw was at {times.fireworks}. Aim for an officially scheduled fireworks evening if you can, but don't assume there is a show every night or that the next one starts at the same time.</aside>
      <p className="mt-3 text-sm leading-relaxed text-soft">Afterwards, use the return plan you agreed before arriving. Back in Menton, walk through town or have dinner if you're still hungry and have energy. Otherwise, just sleep. Tomorrow is deliberately slower.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={`${drivingMapUrl("Port Hercule Monaco", "Fairmont Hairpin Monaco").replace("travelmode=driving", "travelmode=walking")}&waypoints=${encodeURIComponent("Casino de Monte-Carlo|Opéra de Monte-Carlo|Casino Gardens Monaco")}`}><MapPin />Monaco evening walk</MapLink></div>
    </div>

    <div className="py-8"><h3 className="font-display text-2xl">What to put in your budget</h3><p className="mt-3 text-sm leading-relaxed text-soft">Coastal and Èze parking, fuel and any tolls, Jardin Exotique tickets, coffee and souvenirs, terrace lunch, Menton hotel and parking, both taxi journeys, dinner and any casino entry. Decide on a separate gaming limit before entering and never treat gambling as part of your travel budget recovery.</p></div>
  </section>;
}