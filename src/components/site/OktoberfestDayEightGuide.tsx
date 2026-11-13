import { ArrowUpRight, Car, CheckSquare, Clock3, Mountain, ParkingCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import bridgePhoto from "@/assets/oktoberfest-day8-olperer.jpg";
import routeArtwork from "@/assets/oktoberfest-day8-map.jpg";
import { oktoberfestDayEightPlan as plan } from "@/lib/oktoberfest-day-eight-plan";

const maps = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const drive = (origin: string, destination: string) => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=driving`;
function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight /></a></Button>;
}

export function OktoberfestDayEightGuide() {
  return <section aria-label="Oktoberfest day 8 detailed guide" className="mt-8 text-ink">
    <header className="relative isolate overflow-hidden rounded-lg bg-ink">
      <img src={bridgePhoto} alt="Illustrative generated photograph of the small suspension bridge above Olpererhütte with the Schlegeis reservoir below, a planned stop we did not visit" width={1536} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="france-day-photo-shade absolute inset-0" aria-hidden="true" />
      <div className="relative px-6 py-10 text-onink sm:px-10">
        <p className="text-xs font-semibold uppercase">Your guide · Day 08 · Austria · The last day</p>
        <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">One last mountain. Or home, if the weather has other ideas.</h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed">Olpererhütte and its famous suspension bridge were meant to be our final stop. Fresh snow decided otherwise. Breakfast at the hotel, one last lunch on the road and home it was.</p>
        <p className="mt-6 flex items-center gap-2 text-sm"><Car className="size-4 shrink-0" />Juns → optional Schlegeis hike → your own route home</p>
      </div>
    </header>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Your last day at a glance</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">We had breakfast and headed home. The hiking schedule below is a researched option for safe summer conditions, not a hike we completed or our recorded timings.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["The evening before", "Make the mountain decision", "Check the forecast, snow, hut opening and Schlegeis road status. Do not leave the decision until you are already at the trailhead."],
        ["Morning", "Hotel breakfast & check-out", "Breakfast at Hotel Höhlenstein, pack the car and confirm your onward route. If conditions are poor, simply start the journey home."],
        ["If the hike is safe", "Drive to Schlegeis", "Allow roughly 1.5–2 hours from Juns via Mayrhofen and Ginzling, including the slow toll road and possible waits. There is no direct road over the mountains from Tux."],
        ["Half a day", "Olpererhütte & the bridge", `Plan about ${plan.walkingHours} hours of walking and ${plan.excursionHours[0]}–${plan.excursionHours[1]} hours overall with a hut stop, photos and a buffer. Leave enough daylight and driving time afterwards.`],
        ["On your way home", "Lunch that fits your route", "We chose Zenz’n Stub’n at Attersee. It is our personal road-trip stop, not a compulsory detour for everyone."],
      ].map(([time, title, note]) => <li key={title} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"><span className="text-sm font-semibold text-terracotta">{time}</span><div><h4 className="text-sm font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
    </div>

    <div className="py-8">
      <h3 className="font-display text-2xl">The optional mountain finale</h3>
      <img src={routeArtwork} alt="Schematic optional day 8 route from Juns via Mayrhofen and Ginzling to Schlegeis, then trail 502 on foot to Olpererhütte and the suspension bridge" width={1536} height={1024} loading="lazy" className="mt-4 h-auto w-full rounded-lg" />
      <p className="mt-2 text-xs text-soft">Schematic artwork. The bridge visit is optional and weather-dependent. Follow the official trail description and navigation links.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={drive("Hotel Hohlenstein Juns 586 Tux", "Schlegeis Stausee Parkplatz")}>Juns → Schlegeis parking</PlaceLink><PlaceLink href={maps("Olpererhutte suspension bridge")}>Bridge landmark</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">01 · The ending we had hoped for, and the one we got</h3>
      <p className="mt-5 text-sm leading-relaxed text-soft">Our final stop was meant to be the suspension bridge above <strong className="text-ink">Olpererhütte</strong>. We knew we were close to the end of the season, but hoped we would still make it. The evening before, we already suspected the weather had other plans. A lot of fresh snow fell and we had to skip the hike.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">It was disappointing, but a photo is never worth forcing a mountain day. So we had breakfast at the hotel and set off home. The bridge can stay on the list for another trip. If the same happens to you, do not turn a summer walking route into an improvised winter hike.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Parking:</strong> keep your car in the guest space agreed with Hotel Höhlenstein while you have breakfast. Confirm when parking access ends, collect your luggage and settle check-out.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={maps("Hotel Hohlenstein Juns 586 Tux")}>Hotel & guest parking</PlaceLink><PlaceLink href="https://www.hoehlenstein.at/en/">Official hotel</PlaceLink><PlaceLink href="https://www.booking.com/searchresults.html?ss=Hotel+Hohlenstein+Juns+Tux">Booking.com</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Mountain className="size-6 shrink-0" />02 · Olpererhütte, only in suitable conditions</h3>
      <p className="mt-5 text-sm leading-relaxed text-soft"><strong className="text-ink">Suggested route:</strong> Schlegeis reservoir parking → Riepenbach → marked trail <strong className="text-ink">{plan.trailNumber}</strong> → Olpererhütte → short signed approach to the suspension bridge → return the same way to the car park. Along the lakeside road, cross the Riepenbach and look for the right-hand uphill turn. The path climbs through forest and dwarf pines, crosses the stream higher up and continues across open grassy slopes to the hut.</p>
      <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-border py-5 sm:grid-cols-4">{[
        ["Return distance", `${plan.distanceKm} km`], ["Ascent", `${plan.ascentMetres} m`], ["Walking time", `About ${plan.walkingHours} hours`], ["With stops", `${plan.excursionHours[0]}–${plan.excursionHours[1]} hours`],
      ].map(([label, value]) => <div key={label}><dt className="text-xs text-soft">{label}</dt><dd className="mt-1 text-sm font-semibold">{value}</dd></div>)}</dl>
      <p className="mt-4 text-sm leading-relaxed text-soft">The hut gives around <strong className="text-ink">{plan.ascentHours} hours uphill</strong>. Tirol’s official route is rated moderate, not an effortless bridge stroll. Expect a steady climb on narrow, uneven mountain paths, with roughly the same time budget for getting down. Add time for the short bridge detour, photos and queues. Wear hiking shoes, carry water, food, waterproofs and a warm layer, and save the trail offline.</p>
      <h4 className="mt-6 font-semibold">Huts along this route</h4>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Olpererhütte is the mountain hut on the direct trail 502.</strong> There is no staffed intermediate hut to rely on during the climb. Friesenberghaus belongs to a longer alternative route, not this short out-and-back. Check Olpererhütte’s seasonal opening and kitchen service before planning lunch there, and carry enough supplies even if it is open.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">The famous bridge is a small footbridge above a stream near the hut, not a vast bridge suspended across the reservoir. Follow the signed approach and any local restrictions, let others pass and avoid posing on cables or stepping off safe ground.</p>
      <aside className="mt-5 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Snow, ice, storms, poor visibility or a closed approach road? Skip it.</strong> These walking times apply to suitable summer conditions. Ask the hut or local tourism office about current conditions. Do not bypass road closures or follow an unsafe route just because the bridge appears on your itinerary.</aside>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href="https://www.olpererhuette.de/Aktivit%C3%A4ten/Zustiege">Official trail 502 description</PlaceLink><PlaceLink href="https://www.tirol.at/aktivitaeten/sport/wandern/wandertouren/olpererhuette-zillertal">Official route, map & GPX</PlaceLink><PlaceLink href="https://www.olpererhuette.de/">Hut season & contact</PlaceLink><PlaceLink href={maps("Olpererhutte")}>Hut · current Maps reviews</PlaceLink></div>
      <h4 className="mt-6 flex items-center gap-2 font-semibold"><ParkingCircle className="size-5 text-royal" />Schlegeis reservoir parking & toll road</h4>
      <p className="mt-3 text-sm leading-relaxed text-soft">Use the signed <strong className="text-ink">Schlegeis reservoir car parks</strong> at the end of the Schlegeis Alpenstraße from Ginzling. Leave the car here for the entire hike and bridge visit. If full, follow the operator’s traffic instructions rather than parking on verges or grass.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">The published <strong className="text-ink">{plan.tariffYear} standard car toll is €{plan.tollEur}</strong>, including parking until midnight on the day of ascent. The operator recommends buying a day ticket online. At the toll booth, payment is cash only. Access can still pause when parking is full. The road is seasonal, with dates subject to weather and avalanche conditions. Check the current season’s tariff and road status before travelling.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={maps("Schlegeis Stausee Parkplatz")}>Reservoir parking</PlaceLink><PlaceLink href="https://visit.verbund.com/de/schlegeis/schlegeis-hardfacts">Official road hours, parking & tariffs</PlaceLink><PlaceLink href="https://visit.verbund.com/de/schlegeis">Current road status</PlaceLink><PlaceLink href="https://visit.verbund.com/de/tickets">Official road tickets</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">03 · Our last lunch, not everyone’s way home</h3>
      <p className="mt-5 text-sm leading-relaxed text-soft">On the way home we stopped for a late lunch at <strong className="text-ink">Zenz’n Stub’n in Schörfling am Attersee</strong>. This was our own preference along our route. Add it only if Attersee genuinely fits the direction you are travelling, rather than making a long detour because we happened to eat there.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">The restaurant is at <strong className="text-ink">Marktwaldstraße 19</strong>. Check the current kitchen hours and holiday closures, and reserve if you want a dependable stop after a long drive. Compare the latest Google Maps reviews before visiting.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Parking:</strong> Zenz’n Stub’n has parking directly at the building, confirmed in its KultiWirte listing. Navigate to Marktwaldstraße 19, follow the guest parking signs and check availability when reserving. Keep luggage out of sight and valuables with you.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href="https://www.zenznstubn.com/">Official restaurant & reservations</PlaceLink><PlaceLink href="https://www.zenznstubn.com/kontakt/">Arrival & parking enquiry</PlaceLink><PlaceLink href={maps("Zenz'n Stub'n Marktwaldstrasse 19 Schorfling am Attersee")}>Restaurant navigation & Maps reviews</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">04 · Flying home? You can finish after Tre Cime</h3>
      <p className="mt-5 text-sm leading-relaxed text-soft">If you are travelling by plane, you do not need to copy our drive to Tux. You can finish after the day 7 Tre Cime hike and return the car at an airport supported by your rental booking. <strong className="text-ink">Bolzano is a nearby airport to compare</strong>, but its flights are limited. Innsbruck may be another practical option if your route and cross-border return agreement allow it. Venice Marco Polo has a wider range of connections but is farther away. Choose around actual flights, not distance alone.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">From Lago d’Antorno, allow roughly 2–2.5 hours to Bolzano, 2.5–3 hours to Innsbruck or 2–3 hours to Venice in ordinary conditions, plus traffic, fuel, rental return and your airline’s check-in allowance. These are broad planning estimates, not guaranteed journey times. After a full hike, an airport-area overnight stay may be calmer than a same-evening flight.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Car return:</strong> navigate to your rental company’s designated return area, not general airport parking. Confirm the exact branch, opening hours, one-way charges, fuel policy and permission for returning in another country. If you stayed in Juns, compare Innsbruck first, roughly 1.5–2 hours away before return and airport buffers.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={drive("Lago Antorno", "Bolzano Airport")}>Lago Antorno → Bolzano Airport</PlaceLink><PlaceLink href={drive("Lago Antorno", "Innsbruck Airport")}>Lago Antorno → Innsbruck Airport</PlaceLink><PlaceLink href={drive("Lago Antorno", "Venice Marco Polo Airport")}>Lago Antorno → Venice Airport</PlaceLink><PlaceLink href={drive("Hotel Hohlenstein Tux", "Innsbruck Airport")}>Juns → Innsbruck Airport</PlaceLink></div>
    </div>

    <div className="border-y border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><CheckSquare className="size-5" />Before heading home · don't forget</h3>
      <ul className="mt-5 space-y-3">{[
        "Check the room, wardrobe, sockets and bathroom for anything left behind",
        "Settle check-out and collect travel documents, souvenirs and chargers",
        "Keep wet hiking clothes separate from clean luggage",
        "Confirm road conditions, fuel stops, tolls and breaks on your own route home",
        "For flights, check the rental return address, fuel policy and airline timings",
        "Leave a comfortable buffer rather than squeezing in one last mountain photo",
      ].map((item) => <li key={item}><label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-soft"><input type="checkbox" className="mt-1 size-4 shrink-0 accent-primary" />{item}</label></li>)}</ul>
      <p className="mt-5 text-sm text-soft">Need to adapt the last day? Ask the Trip agent in your trip room, then confirm road and mountain conditions with official local sources.</p>
    </div>
  </section>;
}