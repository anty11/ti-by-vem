import { ArrowUpRight, Car, MapPin, Plane, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { drivingMapUrl, placeMapUrl } from "@/lib/france-guide";
import rivieraImage from "@/assets/france-day7-menton.jpg";
import { FranceDayRouteSketch } from "@/components/site/FranceDayRouteSketch";

function MapLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight /></a></Button>;
}

export function FranceDaySevenGuide() {
  return <section aria-label="France day 7 detailed guide" className="mt-10 border-t border-border pt-10 text-ink">
    <header className="relative isolate overflow-hidden rounded-lg bg-ink">
      <img src={rivieraImage} alt="Menton old town and Sablettes waterfront" width={1536} height={768} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="france-day-photo-shade absolute inset-0" aria-hidden="true" />
      <div className="relative px-6 py-10 text-onink sm:px-10">
        <p className="text-xs font-semibold uppercase">Your guide · Day 07 · Menton & home</p>
        <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight sm:text-5xl">Menton.<br />One last slow day.</h2>
        <p className="mt-5 max-w-lg text-sm leading-relaxed">Yellow old-town lanes → a little beach time → return the car → fly home from Nice</p>
      </div>
    </header>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-2xl">Your last day, at a glance</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">We wanted to do very little on our final day beyond enjoying Menton and resting by the sea. Keep the programme open, but set your airport departure time first. Your flight, car-return arrangements and live traffic decide how much beach time you have.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["Before setting out", "Check out & pack", "Keep travel documents and valuables with you. Put luggage out of sight before parking."],
        ["Morning, at your own pace", "Menton's old town & waterfront", "Vieille Ville, Basilique Saint-Michel and Plage des Sablettes, with more promenade time if you feel like it."],
        ["If your flight allows", "La Cabane Plage", "Our spontaneous beach stop. Check availability and leave time to change before driving."],
        ["If time & budget remain", "CAP3000 shopping", "An extra stop near the airport, before returning the car. Set a firm leaving time."],
        ["Your planned departure time", "Drive to Nice Airport", "Allow for traffic, fuel, rental inspection and the journey to your terminal."],
        ["At the airport", "Return the car & fly home", "Follow your rental company's return signs, keep the return receipt, then head to departures."],
      ].map(([time, title, note]) => <li key={time} className="grid gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4"><span className="text-sm font-semibold text-terracotta">{time}</span><div><p className="text-sm font-semibold">{title}</p><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
    </div>

    <FranceDayRouteSketch day={7} />
    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><MapPin className="size-5" />01 · Menton's yellow lanes & the sea</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Menton surprised us with its beautiful yellow lanes. The old town was absolutely worth visiting. Italy is just nearby, and we heard plenty of people speaking Italian, which added to the feeling of being on the edge of two places at once.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Start by Plage des Sablettes, wander up into Vieille Ville and towards Basilique Saint-Michel, then return to the waterfront. The old-town lanes and steps are part of the charm, so wear comfortable shoes. Visit the basilica if it is open, respecting any service taking place.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Where to park:</strong> Parking Vieille Ville–Sablettes, 2 rue Lepante, Place Fontana, is a convenient paid public garage opposite Sablettes beach. Keep the car here for the old town, basilica and waterfront rather than driving into the narrow lanes. Check the posted charges and vehicle restrictions.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">If you want a longer walk, continue along Promenade du Soleil. Jardins Biovès, near avenue de Verdun and avenue Boyer, are a separate public-garden option further into town. Keep the car in the same garage if you are continuing on foot, and allow time to walk back. Don't turn the morning into a race through sights. A short old-town stroll and the sea were enough for the kind of last day we wanted.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={placeMapUrl("Parking Vieille Ville Sablettes 2 Rue Lepante Menton")}><Car />Old-town & beach parking</MapLink><MapLink href={`${drivingMapUrl("Parking Vieille Ville Sablettes Menton", "Basilique Saint-Michel Menton").replace("travelmode=driving", "travelmode=walking")}&waypoints=${encodeURIComponent("Plage des Sablettes Menton|Vieille Ville Menton")}`}>Old-town walking route</MapLink><MapLink href={placeMapUrl("Promenade du Soleil Menton")}><MapPin />Promenade du Soleil</MapLink><MapLink href={drivingMapUrl("Promenade du Soleil Menton", "Jardins Biovès Menton").replace("travelmode=driving", "travelmode=walking")}>Walk to Jardins Biovès</MapLink><MapLink href="https://www.menton.fr/parkings-souterrains-payants.html">Official parking details</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Waves className="size-5" />02 · La Cabane Plage, a spontaneous last swim</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">We chose La Cabane Plage simply because we walked past it. We hadn't booked, as our last day was deliberately open. They found us space, although not in the first row. That was our experience, not a promise of walk-in availability. If a particular spot matters to you, check with the club ahead of time.</p>
      <aside className="mt-4 border-l-2 border-sage pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">V & eM · the beach, more than the food</strong> The beach was beautiful, but the food wasn't particularly good for us. We enjoyed it as somewhere to rest by the water, not as a lunch destination we'd go out of our way for.</aside>
      <p className="mt-3 text-sm leading-relaxed text-soft">Our suitcases were already in the car. Keep luggage completely out of sight and take passports, money and valuables with you. Bring a towel and dry clothes, check swimming flags and current beach-club prices, and leave enough time to change before the drive. If your flight is early, skip the beach club rather than rushing the airport journey.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">La Cabane Plage is at 6 promenade de la Mer. Keep your car at Parking Vieille Ville–Sablettes and walk along the waterfront to the club. Don't assume beach-club parking or a front-row place is included. Check seasonal opening and availability with the venue.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={placeMapUrl("La Cabane Plage 6 Promenade de la Mer Menton")}><MapPin />La Cabane Plage</MapLink><MapLink href={drivingMapUrl("Parking Vieille Ville Sablettes Menton", "La Cabane Plage 6 Promenade de la Mer Menton").replace("travelmode=driving", "travelmode=walking")}>Walk from the car park</MapLink><MapLink href="https://lacabaneplage.eatbu.com/?lang=en">Beach club · availability</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-2xl">03 · A little shopping before the airport</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">We fitted in some shopping before our flight. If you still have time and budget, CAP3000 is a large shopping centre beside Nice Airport, on avenue Eugène Donadeï in Saint-Laurent-du-Var. There is plenty to browse. Our last shopping stop felt calm, but don't assume it will be quiet on your date.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Where to park:</strong> Use CAP3000's signed Parking Nord or Parking Sud. Check current opening hours, tariffs and height restrictions, keep luggage out of sight and take documents and valuables with you. This is shopping parking, not your rental-car return location.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Do this before returning the car, and set a firm leaving time that protects refuelling, the rental return and your airline's deadlines. Nearby doesn't mean instant access to the terminal. Skip shopping if traffic, time or your budget is tight, and leave room in your luggage for any purchases.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={drivingMapUrl("Parking Vieille Ville Sablettes Menton", "CAP3000 Parking Avenue Eugène Donadeï Saint-Laurent-du-Var")}><Car />Drive to CAP3000 parking</MapLink><MapLink href="https://www.cap3000.com/informations">Shopping hours & parking</MapLink><MapLink href={drivingMapUrl("CAP3000 Saint-Laurent-du-Var", "Nice Airport Car Rental Center")}>Continue to car return</MapLink></div>
    </div>
    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Plane className="size-5" />04 · Nice Airport, car return & home</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Allow roughly 45–75 minutes from Menton to Nice Airport as a driving estimate, with additional time for congestion. The A8 route can include tolls. Check live traffic before leaving and build your schedule backwards from your airline's check-in and bag-drop deadlines. Add a separate buffer for refuelling, car return and reaching your departure terminal.</p>
      <aside className="mt-4 border-l-2 border-sage pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">V & eM · an easy finish</strong> Returning our car at the airport was quick and trouble-free. At first it looked as though there would be quite a thorough inspection, but everything went smoothly. We simply followed the signs, handed the car back and headed for our flight home.</aside>
      <p className="mt-3 text-sm leading-relaxed text-soft">Check your rental company's return location and opening hours before setting off. Follow its car-return signs rather than general passenger parking. Return the fuel level required by your contract, take photos of the car and fuel gauge, check every compartment for belongings and keep the return confirmation. A smooth return like ours is lovely, but don't rely on it taking only a few minutes.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Where to leave the car:</strong> The airport's standard rental return is at the Car Rental Center by Terminal 2, behind P5. Follow “Car Rental Center / Location de voitures” and your rental company's return lane, not the passenger car park. After handover, use the signed pedestrian route and, if departing from Terminal 1, the terminal connection. Allow time for the whole transfer, not just the tram ride.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={drivingMapUrl("Parking Vieille Ville Sablettes Menton", "Nice Airport Car Rental Center")}><Car />Drive towards airport car return</MapLink><MapLink href="https://www.nice.aeroport.fr/en/services/car-rental">Airport car-return instructions</MapLink><MapLink href="https://www.nice.aeroport.fr/en/directions/t1-t2-shuttles">Terminal connections</MapLink></div>
    </div>

    <div className="py-8"><h3 className="font-display text-2xl">What to put in your budget</h3><p className="mt-3 text-sm leading-relaxed text-soft">Menton parking, beach-club places and any food or drinks, fuel, A8 tolls and any rental charges required by your contract. Check the final rental statement and keep receipts. Public beach time is an alternative if you don't want a paid beach-club stop.</p></div>
  </section>;
}