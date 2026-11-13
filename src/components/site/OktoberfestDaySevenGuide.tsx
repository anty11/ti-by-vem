import { ArrowUpRight, BedDouble, Car, CheckSquare, Clock3, Mountain, ParkingCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import treCimePhoto from "@/assets/oktoberfest-day7-trecime.jpg";
import routeArtwork from "@/assets/oktoberfest-day7-map.jpg";
import { oktoberfestDaySevenPlan as plan } from "@/lib/oktoberfest-day-seven-timing";

const maps = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const drive = (origin: string, destination: string) => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=driving`;
const caveCoordinates = `${plan.cave.latitude},${plan.cave.longitude}`;

function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight /></a></Button>;
}

export function OktoberfestDaySevenGuide() {
  return <section aria-label="Oktoberfest day 7 detailed guide" className="mt-8 text-ink">
    <header className="relative isolate overflow-hidden rounded-lg bg-ink">
      <img src={treCimePhoto} alt="Illustrative generated photograph of the three limestone towers of Tre Cime di Lavaredo in autumn sunlight" width={1536} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="france-day-photo-shade absolute inset-0" aria-hidden="true" />
      <div className="relative px-6 py-10 text-onink sm:px-10">
        <p className="text-xs font-semibold uppercase">Your guide · Day 07 · Italy → Austria</p>
        <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Tre Cime, one more viewpoint & a very welcome dinner.</h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed">An early alarm, the iconic three peaks and a loop we happily made longer for the views. Then into the Tux valley, where the hotel dinner turned out to be a lovely surprise.</p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm"><span className="flex items-center gap-2"><Car className="size-4" />Valdaora → Tre Cime → Misurina → Juns</span><span className="flex items-center gap-2"><BedDouble className="size-4" />Hotel Höhlenstein · Tux</span></div>
      </div>
    </header>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Your day at a glance</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">09:00 at the car park and 14:30 at lunch are our recorded times. Other timings below are planning allowances, not exact times from our trip.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["Early morning", "Breakfast, check-out & the drive", "Allow roughly 1–1.5 hours from Valdaora, plus the booked entry procedure and any queues. Set your alarm around your actual road conditions and reservation."],
        [plan.parkingArrival, "Park beside Rifugio Auronzo", "On our visit, about three quarters of the spaces were already occupied, even outside peak season. Today you must reserve online, arriving early alone is not enough."],
        ["Morning", "The Tre Cime loop", `The standard loop is often described as about ${plan.standardLoopHours} hours. We added extra climbs and viewpoints, so allow 4–5 hours or longer with photos and the cave detour.`],
        [plan.lunch, "Italian lunch near Misurina", "We stopped for lunch on the way down rather than exploring the lake. There was still a substantial drive ahead."],
        ["Afternoon", "Drive to Juns in the Tux valley", "Allow roughly 3–4 hours from Misurina, plus breaks and traffic. Check the route, Austrian vignette and any separate motorway tolls."],
        ["Evening", "Hotel Höhlenstein & dinner", "Generous portions, a genuinely pleasant surprise and exactly what we needed after the mountains and the drive."],
      ].map(([time, title, note]) => <li key={title} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"><span className="text-sm font-semibold text-terracotta">{time}</span><div><h4 className="text-sm font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
    </div>

    <div className="py-8">
      <h3 className="font-display text-2xl">From the three peaks to the Tux valley</h3>
      <img src={routeArtwork} alt="Schematic topographic day 7 route from Valdaora to Rifugio Auronzo at 09:00, lunch near Misurina at 14:30 and Hotel Höhlenstein in Juns, with a separate hiking loop inset" width={1536} height={1024} loading="lazy" className="mt-4 h-auto w-full rounded-lg" />
      <p className="mt-2 text-xs text-soft">Schematic artwork, not a road or hiking navigation map. Use the route links and an offline trail map.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={drive("Hotel Chalet Olympia Valdaora", "Parcheggio Rifugio Auronzo")}>Valdaora → Tre Cime parking</PlaceLink><PlaceLink href={drive("Rifugio Auronzo", "Misurina")}>Tre Cime → Misurina</PlaceLink><PlaceLink href={drive("Misurina", "Hotel Hohlenstein Juns 586 Tux")}>Misurina → Hotel Höhlenstein</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">01 · An early start, with your parking already booked</h3>
      <p className="mt-5 text-sm leading-relaxed text-soft">We got up early to reach the car park directly below Tre Cime by <strong className="text-ink">{plan.parkingArrival}</strong>. It was already about three quarters full, and we were not even travelling in the busiest season. The final approach is the paid mountain road from the Lago Antorno area to Rifugio Auronzo, not a drive to Auronzo di Cadore town.</p>
      <aside className="mt-5 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Current access rules differ from our visit.</strong> The published {plan.tollYear} tariff is <strong className="text-ink">€{plan.carTollEur} per car</strong> for access and parking, with an online reservation and vehicle registration plate required. The ticket is valid for {plan.tollValidityHours} hours from your booked entry time and ends when you leave. Reserve your slot before setting off. For later seasons, check the new tariff and availability rather than assuming the same price.</aside>
      <p className="mt-3 text-sm leading-relaxed text-soft">The road is seasonal and can close due to snow or unsafe conditions. Check the official access page for your date, save the booking offline and follow the instructions for adding your rental car plate.</p>
      <h4 className="mt-6 flex items-center gap-2 font-semibold"><ParkingCircle className="size-5 text-royal" />Parking · Rifugio Auronzo</h4>
      <p className="mt-3 text-sm leading-relaxed text-soft">Use the reserved car park at Rifugio Auronzo, the start and finish of the loop. Leave the car here for the entire hike, including all huts and the cave viewpoint. Keep valuables with you, not visible in the car.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href="https://auronzo.info/en/parking-tre-cime-di-lavaredo/">Official parking & access rules</PlaceLink><PlaceLink href="https://pass.auronzo.info/">Reserve road access</PlaceLink><PlaceLink href="https://www.dolomiti.it/en/auronzo-misurina/news/toll-road-tre-cime-di-lavaredo-open">Published 2026 tariffs</PlaceLink><PlaceLink href={maps("Parcheggio Rifugio Auronzo")}>Car park navigation</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Mountain className="size-6 shrink-0" />02 · The loop, in the direction we would choose again</h3>
      <p className="mt-5 text-sm leading-relaxed text-soft">You can walk the loop either way. We started from <strong className="text-ink">Rifugio Auronzo towards Rifugio Lavaredo</strong>, continuing over Forcella Lavaredo towards Rifugio Locatelli. We would choose that direction again. About <strong className="text-ink">{plan.bestViewsAfterHours} hours in</strong>, some of the most beautiful views of the day open up.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Return via the Langalm side and Forcella Col di Mezzo to complete the circuit. There is still a climb towards the end, so keep some energy for the return. The standard loop is roughly 10 km, with several hundred metres of ascent. The often-quoted <strong className="text-ink">{plan.standardLoopHours} hours</strong> is a base walking estimate, not our exact hiking duration. We extended the route for more viewpoints. Allow a generous half-day and do not turn the 14:30 lunch into a deadline you have to rush for.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">We did not find the main route particularly difficult in our conditions, but <strong className="text-ink">proper hiking shoes are a must</strong>. This is high-mountain terrain with uneven ground, climbs and exposed weather. Snow, ice, wind or poor visibility can change the difficulty completely.</p>
      <h4 className="mt-6 font-semibold">Our extra stop · the cave viewpoint</h4>
      <p className="mt-3 text-sm leading-relaxed text-soft">We recommend the cave viewpoint for that beautiful frame around Tre Cime. Save our pin at <strong className="text-ink">46.59931° N, 12.27048° E</strong>, near the Locatelli area. It is an optional detour, not a shortcut or a marked accessible route. Assess the ground before approaching, stay away from edges and skip it if conditions are slippery or you feel uncomfortable. Carry a torch if entering a dark opening. Do not continue into tunnels or via ferrata sections without the right equipment and experience.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Parking:</strong> keep the car at Rifugio Auronzo. Reach every viewpoint on foot using a proper hiking map, not Google driving directions.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={maps(caveCoordinates)}>Our cave viewpoint pin</PlaceLink><PlaceLink href={maps("Rifugio Locatelli Dreizinnenhutte")}>Locatelli landmark</PlaceLink><PlaceLink href="https://www.dolomiti.it/en/passes-and-mountains/tre-cime-di-lavaredo">Tre Cime visitor information</PlaceLink></div>
      <aside className="mt-6 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Four huts, and not one was open.</strong> That was our experience along the route. We could not buy anything, so pack your own lunch, snacks and enough water for the entire hike. Check each hut separately before leaving, especially late in the season. Carry waterproofs, a warm layer, an offline trail map and a charged phone even on a sunny morning.</aside>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={maps("Rifugio Auronzo")}>Auronzo · hours & reviews</PlaceLink><PlaceLink href={maps("Rifugio Lavaredo")}>Lavaredo · hours & reviews</PlaceLink><PlaceLink href={maps("Rifugio Locatelli Dreizinnenhutte")}>Locatelli · hours & reviews</PlaceLink><PlaceLink href={maps("Langalm Tre Cime")}>Langalm · hours & reviews</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">03 · A late Italian lunch, then keep moving</h3>
      <p className="mt-5 text-sm leading-relaxed text-soft">By <strong className="text-ink">{plan.lunch}</strong> we were having lunch in an Italian restaurant near Misurina on the way down. We did not stop to explore the lake, because our next destination was the Tux valley in Austria. Allow around 20–30 minutes to descend from the upper car park towards Misurina, with extra time if traffic is slow.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">A researched option to compare:</strong> Chalet Lago Antorno has a restaurant beside Lake Antorno on the descent, just before Misurina. This is a suggested stop, not a claim that it was our lunch venue. Check kitchen hours for a late lunch before you set off and compare current Google Maps reviews.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Parking:</strong> use the signed Lago Antorno parking area opposite the chalet, checking the posted restrictions and charges. Walk to the restaurant and only use hotel-designated spaces if staff authorise them.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href="https://www.lagoantorno.it/en/restaurant/">Chalet Lago Antorno · restaurant</PlaceLink><PlaceLink href={maps("Chalet Lago Antorno restaurant")}>Current Google Maps reviews</PlaceLink><PlaceLink href={maps("Parcheggio Lago Antorno")}>Lago Antorno parking</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">04 · Hotel Höhlenstein, and dinner worth arriving for</h3>
      <p className="mt-5 text-sm leading-relaxed text-soft">After the longer drive we reached <strong className="text-ink">Hotel Höhlenstein in Juns, in the Tux valley</strong>. Everything pleasantly surprised us, especially dinner, which we had not expected to be such a highlight. The portions were generous and satisfying. After a hiking day and another country crossing, we can genuinely recommend that feeling of simply arriving and being well fed.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">The hotel’s restaurant is called <strong className="text-ink">Kasskessl</strong>. Confirm your meal plan, dinner service and latest arrival time with reception when booking. Dinner is not automatically included in every room rate. Let the hotel know if the hike or drive delays you.</p>
      <h4 className="mt-6 flex items-center gap-2 font-semibold"><ParkingCircle className="size-5 text-royal" />Hotel & dinner parking</h4>
      <p className="mt-3 text-sm leading-relaxed text-soft">The hotel offers on-site guest parking, subject to availability. Navigate to Juns 586 and ask reception where to leave the car. Keep it there for dinner, the restaurant is in the hotel.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={maps("Hotel Hohlenstein Juns 586 Tux")}>Hotel & guest parking</PlaceLink><PlaceLink href="https://www.hoehlenstein.at/en/">Official hotel</PlaceLink><PlaceLink href="https://www.booking.com/searchresults.html?ss=Hotel+Hohlenstein+Juns+Tux">Compare on Booking.com</PlaceLink><PlaceLink href="https://www.hoehlenstein.at/en/restaurant/">Kasskessl · official restaurant</PlaceLink><PlaceLink href={maps("Kasskessl Hotel Hohlenstein Tux")}>Restaurant · current Maps reviews</PlaceLink></div>
      <p className="mt-4 text-sm leading-relaxed text-soft">Before crossing into Austria, check your rental car’s cross-border permission. If your chosen road uses Austrian motorways, check the vignette and any separate section tolls through ASFINAG. Do not assume every route costs the same.</p>
      <div className="mt-4"><PlaceLink href="https://www.asfinag.at/en/toll/">Austria · official toll information</PlaceLink></div>
    </div>

    <div className="border-y border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><CheckSquare className="size-5" />Before day 8 · don't forget</h3>
      <ul className="mt-5 space-y-3">{[
        "Dry your hiking shoes and any damp layers after Tre Cime",
        "Refill water and replace the snacks you used on the hike",
        "Charge your phone, camera and power bank",
        "Confirm breakfast time, your next departure and hotel check-out",
        "Check tomorrow’s forecast, route and any tickets or reservations",
        "Keep travel documents handy and confirm your Austrian road toll requirements",
      ].map((item) => <li key={item}><label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-soft"><input type="checkbox" className="mt-1 size-4 shrink-0 accent-primary" />{item}</label></li>)}</ul>
      <p className="mt-5 text-sm text-soft">Road access or mountain weather changed? Ask the Trip agent in your trip room and follow current local safety advice.</p>
    </div>
  </section>;
}