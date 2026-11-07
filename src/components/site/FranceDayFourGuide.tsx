import { ArrowUpRight, Car, Coffee, MapPin, ShoppingBag, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { drivingMapUrl, placeMapUrl } from "@/lib/france-guide";
import rivieraImage from "@/assets/riviera.jpg";

function MapLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight /></a></Button>;
}

export function FranceDayFourGuide() {
  return <section aria-label="France day 4 detailed guide" className="mt-10 border-t border-border pt-10 text-ink">
    <header className="relative isolate overflow-hidden rounded-lg bg-ink">
      <img src={rivieraImage} alt="The French Riviera coastline" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="relative px-6 py-10 text-onink sm:px-10">
        <p className="text-xs font-semibold uppercase">Your guide · Day 04 · Saint-Tropez</p>
        <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight sm:text-5xl">Saint-Tropez.<br />Pastries, lunch & local finds.</h2>
        <p className="mt-5 max-w-lg text-sm leading-relaxed">Cédric Grolet → breakfast at the port → Bagatelle → Saint-Tropez & Rondini → Gigi</p>
      </div>
    </header>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-2xl">Your day at a glance</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">A beautiful morning, a lunch worth planning around and time for the town in between. Let your confirmed Bagatelle seating and Gigi dinner reservation set the pace. These are the order of our stops, not exact arrival times.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["At opening", "Cédric Grolet, then the port", "Takeaway coffee and pastries, with breakfast beside the boats. Arrive for opening because queues form early."],
        ["Your reserved lunch seating", "Bagatelle · Pampelonne", "Book well ahead. Choose second seating if the party atmosphere is what you are coming for."],
        ["After lunch", "Back to Saint-Tropez", "La Ponche, the port, Place des Lices, the church, shopping and an ice cream."],
        ["During your town walk", "Rondini sandals", "Leave time for a fitting and ask when your sandals will be ready."],
        ["Your reserved dinner time", "Gigi · Ramatuelle", "Arrange transport ahead and leave room for the sharing tiramisu."],
      ].map(([time, title, note]) => <li key={time} className="grid gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4"><span className="text-sm font-semibold text-terracotta">{time}</span><div><p className="text-sm font-semibold">{title}</p><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Coffee className="size-5" />01 · Cédric Grolet & breakfast at the port</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Start with takeaway coffee and pastries from Cédric Grolet, then find a spot at Port de Saint-Tropez to eat breakfast. Check the current boutique opening time and arrive for opening. There was already a queue before the doors opened on our visit.</p>
      <aside className="mt-4 border-l-2 border-sage pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">V & eM · beautiful, but not quite our favourite</strong> Everything looked gorgeous at first glance. The flavours didn't win us over quite as much, and the coffee was average. It wasn't about the price, which you can look up online before going. We'd give it another chance next time, but we'd skip the lemon pastry. And we do like sour flavours.</aside>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={placeMapUrl("Cédric Grolet Saint-Tropez")}><MapPin />Cédric Grolet</MapLink><MapLink href={drivingMapUrl("Cédric Grolet Saint-Tropez", "Port de Saint-Tropez").replace("travelmode=driving", "travelmode=walking")}>Walk to the port</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Utensils className="size-5" />02 · Bagatelle, the lunch highlight</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Bagatelle is on Pampelonne Beach, outside Saint-Tropez town. Arrange a car or taxi and navigate to the beach restaurant, not the town centre. Allow around 30–60 minutes each way as a busy-summer planning buffer, with longer delays possible. This local-road journey has no motorway toll. Follow the venue's parking signs and confirm parking or valet charges with your reservation.</p>
      <aside className="mt-4 border-l-4 border-terracotta pl-5"><h4 className="text-lg font-semibold">For the party, aim for second seating</h4><p className="mt-2 text-sm leading-relaxed text-soft">Start looking months before your trip and reserve through Bagatelle's official booking system. Popular dates fill quickly. Check the offered seating and its conditions before confirming, rather than assuming every lunch comes with the same atmosphere.</p></aside>
      <p className="mt-4 text-sm leading-relaxed text-soft">Lunch was a highlight for us. The food and service were genuinely excellent, and the music was great. We couldn't get second seating, so we didn't experience the full party. At our earlier seating we could still talk comfortably, but there was no dancing. If you're picturing that famous party lunch, we'd strongly recommend second seating. The earlier one simply wasn't that vibe on our visit.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Your table is reserved for a limited time. Afterwards, you may be able to move to the bar at the side, but it isn't always available. Ask the team whether a cancellation would let you stay for second seating. Smaller groups may have a better chance, but don't build the rest of the day around it.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Once official bookings fill up, you may encounter promoter offers. Treat these cautiously, verify any arrangement directly with the venue and never assume that an offer guarantees a table or second seating.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={drivingMapUrl("Port de Saint-Tropez", "Bagatelle Saint-Tropez Ramatuelle")}><Car />Drive to Bagatelle</MapLink><MapLink href={placeMapUrl("Bagatelle Saint-Tropez Ramatuelle")}><MapPin />Bagatelle arrival</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><ShoppingBag className="size-5" />03 · Town lanes, local shopping & Rondini</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Return to Saint-Tropez after lunch. If driving, the port car park from day 3 is a useful base for the afternoon on foot. Check its current charges and keep purchases out of sight in the car.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">From the port, wander into La Ponche and its old-town lanes, past Église Notre-Dame-de-l’Assomption, then towards Place des Lices. Visit the church if it is open and respect any service taking place. Leave room for shops and an ice cream rather than treating this as a checklist. You'll find a bit of everything here, but we like looking for local things.</p>
      <aside className="mt-4 border-l-2 border-sage pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">V & eM · a souvenir we actually still wear</strong> We had sandals made at Rondini, and we'd recommend it. Two years later, they're still comfortable and getting plenty of wear. Leave time to choose a style and have them fitted, then confirm collection timing with the shop before committing.</aside>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={drivingMapUrl("Port de Saint-Tropez", "Place des Lices Saint-Tropez", ["La Ponche Saint-Tropez", "Église Notre-Dame-de-l’Assomption Saint-Tropez"]).replace("travelmode=driving", "travelmode=walking")}><MapPin />Town walking route</MapLink><MapLink href={placeMapUrl("Rondini Saint-Tropez")}><ShoppingBag />Rondini sandals</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Utensils className="size-5" />04 · Dinner at Gigi</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Gigi is in Ramatuelle, so plan another car or taxi journey rather than a walk from town. Allow around 30–60 minutes in busy summer traffic as a planning estimate, check the live route and confirm the venue's arrival and parking arrangements. There is no motorway toll on this local leg.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Reserve dinner as early as you can. It didn't feel quite as extreme to book as Bagatelle, but a reservation still matters. We were seated in a waiting area for about 15 minutes after arriving, even with our booking, so leave a little breathing room.</p>
      <aside className="mt-4 border-l-2 border-sage pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">V & eM · come for your own verdict</strong> Gigi felt a little overhyped to us, and the food wasn't quite as amazing as we'd hoped. The sharing tiramisu, though, is another story. We'd order it again even while writing this.</aside>
      <aside className="mt-4 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Plan your ride back before dinner</strong> Once again, we struggled to find a taxi. Arrange pickup in advance, reconfirm it and ask the restaurant or hotel for help if needed. Don't rely on finding one at the last minute. If driving, keep the evening alcohol-free for the driver.</aside>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={drivingMapUrl("Saint-Tropez", "Gigi Ramatuelle")}><Car />Drive to Gigi</MapLink><MapLink href={placeMapUrl("Gigi Ramatuelle")}><MapPin />Gigi arrival</MapLink><MapLink href={drivingMapUrl("Gigi Ramatuelle", "Hotel Playa Saint-Tropez")}>Return to Hotel Playa</MapLink></div>
    </div>

    <div className="py-8"><h3 className="font-display text-2xl">What to put in your budget</h3><p className="mt-3 text-sm leading-relaxed text-soft">Breakfast pastries and coffee, Bagatelle lunch and drinks, transport or fuel, beach-venue and port parking, shopping and Rondini sandals, ice cream, Gigi dinner and the ride back. Check deposits, minimum spend and cancellation terms in each reservation. Record prepaid amounts once and deduct them from the final bill rather than counting them twice.</p></div>
  </section>;
}