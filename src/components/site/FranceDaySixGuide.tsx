import { ArrowUpRight, Car, MapPin, ShieldAlert, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { drivingMapUrl, placeMapUrl } from "@/lib/france-guide";
import { franceDaySixTimes as times } from "@/lib/france-day-six-timing";
import { FranceDayRouteSketch } from "@/components/site/FranceDayRouteSketch";
import rivieraImage from "@/assets/france-day6-eze.jpg";

function MapLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight /></a></Button>;
}

export function FranceDaySixGuide() {
  return <section aria-label="France day 6 detailed guide" className="mt-10 border-t border-border pt-10 text-ink">
    <header className="relative isolate overflow-hidden rounded-lg bg-ink">
      <img src={rivieraImage} alt="Èze village above the Mediterranean" width={1536} height={768} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="france-day-photo-shade absolute inset-0" aria-hidden="true" />
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
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Photo stop & parking:</strong> Parking Wilson in Villefranche-sur-Mer is a practical waterfront base. Park in a marked space, check charges and walk towards the harbour for bay views and colourful façades. Allow around 15–20 minutes on foot as a short-stop suggestion, plus parking time. For Cap-Ferrat, use Parking du Centenaire on place du Centenaire and walk to the harbour. Check seasonal charges and skip the detour if parking or traffic would delay lunch.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={`${drivingMapUrl("Hotel Albert 1er Nice", "Parking Place de la Colette Èze")}&waypoints=${encodeURIComponent("Parking Wilson Villefranche-sur-Mer")}`}><Car />Coastal route via Villefranche</MapLink><MapLink href={placeMapUrl("Parking Wilson Villefranche-sur-Mer")}>Villefranche photo-stop parking</MapLink><MapLink href={placeMapUrl("Parking du Centenaire Saint-Jean-Cap-Ferrat")}><MapPin />Cap-Ferrat harbour parking</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-2xl">02 · Èze, medieval lanes & a coffee with a view</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">We arrived at {times.eze}. Navigate to Èze village on the hill, not Èze-sur-Mer down by the coast. Wander the old stone lanes, browse the lovely souvenir shops and visit Église Notre-Dame-de-l’Assomption if it is open. The Jardin Exotique is the paid garden and viewpoint at the top, so check opening hours and ticket arrangements before going up.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Fragonard also has a shop here, a chance to browse another well-known French perfume house. Château Eza is a beautiful coffee-and-view idea if service is available to non-residents. Ask ahead about access and reservations, and keep lunch in mind. Don't rush to fit a garden, shopping and coffee into the same short visit.</p>
      <aside className="mt-4 border-l-2 border-sage pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">V & eM · a little souvenir we recommend</strong> While wandering the village lanes, stop at the little liqueur shop. We especially recommend the mandarin liqueur, a lovely bottle to take home. Keep the car at the village parking and explore on foot.</aside>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Where to park:</strong> Use the paid parking at Place de la Colette / Place Fighiera by the village entrance. Leave the car here for Fragonard, the church, Château Eza and the garden, all reached on foot. Check charges and allow time for the steep lanes. Fragonard has a boutique at 2 place Colette, with another at 7 avenue du Jardin Exotique.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={placeMapUrl("Parking Place de la Colette Èze")}><Car />Èze village parking</MapLink><MapLink href={`${drivingMapUrl("Place de la Colette Èze", "Jardin Exotique Èze").replace("travelmode=driving", "travelmode=walking")}&waypoints=${encodeURIComponent("Fragonard Èze village|Église Notre-Dame-de-l’Assomption Èze|Château Eza")}`}><MapPin />Èze village walk</MapLink><MapLink href="https://www.chateaueza.com/">Château Eza · contact</MapLink><MapLink href="https://usines-parfum.fragonard.com/en/factories/the-factory-laboratory-in-eze-village/">Fragonard Èze</MapLink></div>
    </div>

    <FranceDayRouteSketch day={61} />
    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Utensils className="size-5" />03 · Riviera restaurant, a terrace worth slowing down for</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Our terrace lunch at Riviera restaurant in The Maybourne Riviera was booked for {times.rivieraLunch}. Reserve ahead and request the terrace, then confirm that your booking is for the restaurant and service you want. Leave room for the drive from Èze, the hotel's arrival arrangements and time to enjoy the setting.</p>
      <aside className="mt-4 border-l-2 border-sage pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">V & eM · this was a highlight</strong> Lunch on the terrace was wonderful. Take photos, enjoy the views and let it feel like an experience rather than another box to tick. This is not the place we'd hurry through just to squeeze in more stops.</aside>
      <p className="mt-3 text-sm leading-relaxed text-soft">Arrival: 1551 route de la Turbie, Roquebrune-Cap-Martin. Allow roughly 20–35 minutes from Èze as a driving estimate, plus hotel arrival time. For parking, contact the hotel when reserving and confirm its day-visitor parking or valet arrangement and charges. Navigate to the main hotel entrance and follow the arrival team's directions. Riviera Restaurant is distinct from Ceto and the beach restaurant.</p>
      <aside className="mt-4 border-l-2 border-sage pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">V & eM · your Fiat 500 is welcome too</strong> Don't worry about what you're driving. On our visit, the team parked the car for us and nobody made an issue of the badge. A Fiat 500 beside a Ferrari? Perfectly fine. Come for the lunch and the views, not to compete in the car park.</aside>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={drivingMapUrl("Parking Place de la Colette Èze", "The Maybourne Riviera 1551 Route de la Turbie")}><Car />Drive to terrace lunch</MapLink><MapLink href={placeMapUrl("The Maybourne Riviera 1551 Route de la Turbie")}><MapPin />Hotel & parking arrival</MapLink><MapLink href="https://www.maybourne.com/en/hotels/the-maybourne-riviera/restaurants-bars/riviera-restaurant">Riviera Restaurant · reservations</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-2xl">04 · Menton, check in & get ready</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">We reached Menton at {times.menton}. Allow roughly 20–40 minutes from The Maybourne Riviera as a planning estimate, more with traffic. Check your chosen hotel's luggage drop-off and parking before arrival, then leave the car in Menton for the evening and go to Monaco by taxi.</p>
      <aside className="mt-4 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">V & eM · we'd choose another hotel</strong> We stayed at Hotel Vendôme, but the reception team was very unpleasant to us. Based on that experience, we wouldn't recommend it. Choose another base rather than booking it just because it appears in our original route.</aside>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Alternatives to explore, not personally tried by us:</strong> We haven't stayed at Royal Westminster or Best Western Premier Prince de Galles, so these are options to compare rather than personal recommendations. Royal Westminster is a central seafront alternative with no private parking, using nearby paid public garages. Best Western Premier Prince de Galles is another seafront option and lists paid parking on site. Check recent guest reviews, room prices, parking availability and check-in details for your dates.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Central parking base:</strong> Parking Vieille Ville–Sablettes, 2 rue Lepante, is a named paid public option if it suits your chosen hotel. Check access and overnight charges. Keep the car in your hotel parking or this garage for the Monaco evening, and travel by taxi.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={drivingMapUrl("The Maybourne Riviera", "Parking Vieille Ville Sablettes 2 Rue Lepante Menton")}><Car />Drive to Menton parking</MapLink><MapLink href="https://www.hotel-royal-westminster.com/fr/infos-pratiques">Royal Westminster</MapLink><MapLink href="https://www.bestwestern.fr/fr/hotel-Menton-Best-Western-Htl-Prince-De-Galles-93278">Prince de Galles</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><ShieldAlert className="size-5" />05 · Before Monaco: data, the car & your ride back</h3>
      <aside className="mt-4 border-l-4 border-terracotta pl-5"><h4 className="text-lg font-semibold">Check roaming before crossing into Monaco</h4><p className="mt-2 text-sm leading-relaxed text-soft">Monaco may not be included in your operator's EU roaming package. Leaving mobile data on can lead to a very expensive surprise. Check Monaco specifically with your operator. If you aren't sure, switch off mobile data and data roaming before arrival, save maps offline and avoid automatic network switching onto a Monaco network.</p></aside>
      <p className="mt-4 text-sm leading-relaxed text-soft">Monaco is a different country, but that doesn't mean every rental car is forbidden to enter. Check your rental company's cross-border permission and insurance terms before driving there. We used a taxi and recommend keeping the car at your Menton parking base for this evening.</p>
      <aside className="mt-4 border-l-4 border-terracotta pl-5"><h4 className="text-lg font-semibold">Arrange the return taxi before the outward trip</h4><p className="mt-2 text-sm leading-relaxed text-soft">Getting to Monaco was easier than getting back for us. Our French pickup required us to walk back into France. Ask your actual taxi or ride provider where it is authorised to collect you, agree the exact pickup point and price, and save the details offline. Don't assume the car that can drop you in Monaco can also pick you up there. Monaco taxis and pre-arranged transfers can have different arrangements.</p></aside>
      <p className="mt-3 text-sm leading-relaxed text-soft">A Taxi Monaco can collect you within Monaco and take you back to Menton. If using one, stay in Monaco for the pickup. Crossing into France is relevant to a French driver's agreed pickup arrangement, not a requirement for every return taxi. Confirm which service you are using before leaving for the evening.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-2xl">06 · Monaco, the casino & evening lights</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">We arrived around {times.monaco}. Start by Port Hercule, then make your way towards the Casino de Monte-Carlo, the opera exterior and casino gardens. Continue to the Fairmont hairpin, the famous Formula 1 bend, and enjoy a seaside walk if you still have time. This is a hilly walk, so leave room for stairs, lifts and pauses rather than expecting one flat promenade.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">We had already been to Monaco, which is why this visit was just a short evening stop rather than a full day of sightseeing. If it's your first visit, give yourself more time instead of treating our evening as the whole Monaco experience.</p>
      <aside className="mt-4 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Dinner in Monaco? Reserve ahead.</strong> If you have a restaurant in mind, book it before your visit. We learned that lesson the hard way when we couldn't get the dinner plans we wanted without a reservation. Don't leave finding a table until you're already hungry.</aside>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Our little Fairmont tip:</strong> Pause by the Fairmont hotel and its famous hairpin simply to watch the cars go by. You'll often find fellow car and Formula 1 fans here, and you never know who you might spot, perhaps even an F1 driver. Treat that as a lucky possibility, not a promised sighting. Stay on the pavement, keep the hotel entrance clear and enjoy the scene.</p>
      <div className="mt-4 border-l-2 border-sage pl-4 text-sm leading-relaxed text-soft">
        <h4 className="font-semibold text-ink">Casino de Monte-Carlo · before you go inside</h4>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li><strong className="text-ink">Age & original ID:</strong> For the gaming rooms, the official entry page specifies at least one day after your 18th birthday. Bring a valid original passport, or a national photo ID card if you are an EU national. Photocopies and digital ID are not accepted.</li>
          <li><strong className="text-ink">Evening dress:</strong> Dress smartly. Gaming rooms do not allow shorts, ripped jeans, sportswear, trainers, men's flip-flops or sandals, vest tops or beachwear. After 19:00, T-shirts and sweatshirts are also not permitted. Staff have the final say on admission.</li>
          <li><strong className="text-ink">Security & handbags:</strong> Allow time for identification and security checks. Be ready to open your handbag or other bag if staff ask to inspect it, and follow their directions. There is no need to feel nervous about a routine check. Travel light rather than arriving with your day's luggage.</li>
          <li><strong className="text-ink">Phones & cameras:</strong> Do not photograph or record in the gaming rooms. The published gaming rules restrict phones, cameras and recording equipment, and list a free cloakroom for personal items. Follow the staff's instructions about what to leave there.</li>
          <li><strong className="text-ink">Entry & timing:</strong> Gaming rooms open from 14:00. The currently listed entry price is €20, including a €10 offer for slots or the bar, or Le Salon Rose with a minimum €40 restaurant spend. The atrium and boutique have free entry. Morning heritage visits are a separate experience with different access rules.</li>
        </ul>
        <p className="mt-3">Check the official entry page again before your visit for current prices, dress rules and opening arrangements. Dinner before the display or a little time trying your luck are both ways to enjoy the evening.</p>
        <div className="mt-4"><MapLink href="https://www.montecarlosbm.com/en/casino/game/prices-and-conditions-entry">Official casino entry conditions</MapLink></div>
      </div>
      <aside className="mt-4 border-l-2 border-sage pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">V & eM · a tiny win</strong> Somehow, we managed to leave Monaco a few euros richer than when we arrived. Not exactly a fortune, but we'll happily take that little plot twist! A lucky memory, not a strategy. Set a limit you're comfortable losing and leave it at that.</aside>
      <aside className="mt-4 border-l-2 border-sage pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">V & eM · a magical fireworks evening</strong> The fireworks above the casino made our evening feel magical. The display we saw was at {times.fireworks}. Aim for an officially scheduled fireworks evening if you can, but don't assume there is a show every night or that the next one starts at the same time.</aside>
      <p className="mt-3 text-sm leading-relaxed text-soft">Afterwards, use the return plan you agreed before arriving. Back in Menton, we went to an Italian restaurant for dinner and had no trouble finding somewhere to eat even after 23:00. With the Italian border so close, there are plenty of Italian restaurants to choose from. That was our experience, so check late kitchen hours for your evening rather than assuming every restaurant serves that late. Keep the car at your Menton parking base and walk to dinner, then enjoy a little night stroll or head straight to sleep. Tomorrow is deliberately slower.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Check the official Monaco events calendar for your travel dates before planning dinner around fireworks. Keep your car at the Menton parking base for the port, casino, gardens and Fairmont walk.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={`${drivingMapUrl("Port Hercule Monaco", "Fairmont Hairpin Monaco").replace("travelmode=driving", "travelmode=walking")}&waypoints=${encodeURIComponent("Casino de Monte-Carlo|Opéra de Monte-Carlo|Casino Gardens Monaco")}`}><MapPin />Monaco evening walk</MapLink><MapLink href="https://www.visitmonaco.com/en/events/events-calendar">Official events & fireworks calendar</MapLink><MapLink href="https://www.montecarlosbm.com/en/editorial/gaming-room-rules">Casino entry rules</MapLink><MapLink href="https://www.visitmonaco.com/en/plan-your-stay/access-and-transport/getting-around/getting-around-by-taxi">Official taxi guidance</MapLink></div>
    </div>
    <FranceDayRouteSketch day={62} />

    <div className="py-8"><h3 className="font-display text-2xl">What to put in your budget</h3><p className="mt-3 text-sm leading-relaxed text-soft">Coastal and Èze parking, fuel and any tolls, Jardin Exotique tickets, coffee and souvenirs, terrace lunch, Menton hotel and parking, both taxi journeys, dinner and any casino entry. Decide on a separate gaming limit before entering and never treat gambling as part of your travel budget recovery.</p></div>
  </section>;
}