import { ArrowUpRight, BedDouble, Car, CheckSquare, Clock3, ParkingCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import varennaPhoto from "@/assets/oktoberfest-day3-varenna.jpg";
import routeArtwork from "@/assets/oktoberfest-day3-map.jpg";

const maps = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const drive = (origin: string, destination: string, waypoints?: string) => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=driving${waypoints ? `&waypoints=${encodeURIComponent(waypoints)}` : ""}`;

function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight /></a></Button>;
}

export function OktoberfestDayThreeGuide() {
  return <section aria-label="Oktoberfest day 3 detailed guide" className="mt-8 text-ink">
    <header className="relative isolate overflow-hidden rounded-lg bg-ink">
      <img src={varennaPhoto} alt="Illustrative generated photograph of Varenna's colourful waterfront and Lake Como after rain" width={1536} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="france-day-photo-shade absolute inset-0" aria-hidden="true" />
      <div className="relative px-6 py-10 text-onink sm:px-10">
        <p className="text-xs font-semibold uppercase">Your guide · Day 03 · Italy</p>
        <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Lake Como, then a little dream in the mountains.</h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed">Bellagio's steps, an idyllic Varenna and a hotel we had wanted to visit for a very long time.</p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm"><span className="flex items-center gap-2"><Car className="size-4" />Bellagio → Varenna → Vermiglio</span><span className="flex items-center gap-2"><BedDouble className="size-4" />Chalet al Foss Alp Resort</span></div>
      </div>
    </header>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Your day at a glance</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">We slept a little longer because the rain changed our lake plans. These are suggested planning windows, not our recorded times. A road-only day means roughly 4.5–6 hours of driving before sightseeing and breaks. Keep your walks flexible and work backwards from the hotel's check-in and dinner arrangements. A longer Bellagio morning can turn Fuentes into a late lunch stop.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["Morning", "Explore Bellagio", "Allow around 1.5–2 hours for the centre and lakefront, longer if you visit Villa Melzi's gardens."],
        ["Late morning", "Drive to Varenna", "For a road-only approach via Lecco, allow around 1.5–2 hours depending on traffic. A car ferry is a separate option only when its timetable and service suit your day."],
        ["Midday", "Villa Monastero & the village", "Allow around 1.5–2.5 hours for the gardens and a gentle walk. Leave room for photos rather than racing between stops."],
        ["Afterwards", "Fuentes · lunch & a little shopping", "Allow roughly 35–50 minutes driving north from Varenna, then a quick lunch and shopping stop."],
        ["Afternoon → evening", "Vermiglio & Chalet al Foss", "Allow roughly 3–4 hours from Fuentes depending on your route, mountain conditions and traffic. Check in, settle down and have dinner at the hotel."],
      ].map(([time, title, note]) => <li key={title} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"><span className="text-sm font-semibold text-terracotta">{time}</span><div><h4 className="text-sm font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
    </div>

    <div className="py-8">
      <h3 className="font-display text-2xl">From lakefront lanes to an Alpine stay</h3>
      <img src={routeArtwork} alt="Schematic day 3 topographic route from Bellagio via Lecco to Varenna, Fuentes and Vermiglio" width={1536} height={1024} loading="lazy" className="mt-4 h-auto w-full rounded-lg" />
      <p className="mt-2 text-xs text-soft">Schematic artwork, not a road map. It shows a road-only lake approach. Follow the navigation links for actual routes and current conditions.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={drive("Hotel Florence Bellagio", "Parcheggio Multipiano Viale Giovanni Polvani 1 Varenna", "Lecco Italy")}>Bellagio → Varenna · via Lecco</PlaceLink><PlaceLink href={drive("Varenna Italy", "Centro Commerciale Fuentes")}>Varenna → Fuentes</PlaceLink><PlaceLink href={drive("Centro Commerciale Fuentes", "Chalet al Foss Alp Resort Vermiglio", "Aprica Italy|Edolo Italy|Passo del Tonale Italy")}>Fuentes → Chalet al Foss</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">01 · Bellagio, without chasing a photo pin</h3>
      <div className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <p>Our third day began with exploring Bellagio. Of course, there had to be photo stops too. But we are not sending you to one exact marked spot here. <strong className="text-ink">You are already right in the middle of it all.</strong> Look around, wander a little and find the angle that feels like your own memory.</p>
        <p>The original plan had been to explore the lake by boat, hopping back and forth between places. The rain put us off that version of the day, so we slept a little longer and explored nearby instead. That was our choice in those conditions, not a claim that boats stop whenever it rains.</p>
      </div>
      <h4 className="mt-6 font-semibold">A Bellagio morning on foot</h4>
      <ul className="mt-3 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Punta Spartivento:</strong> head to the tip of the peninsula for the lake opening out around you.</li>
        <li><strong className="text-ink">Historic centre & the steps:</strong> wander through the lanes and stairways. Wear shoes with grip, especially after rain.</li>
        <li><strong className="text-ink">Basilica San Giacomo:</strong> stop in the upper old town and respect services and any visiting restrictions.</li>
        <li><strong className="text-ink">Lakefront promenade:</strong> take the easy waterside stretch and let the scenery set the pace.</li>
        <li><strong className="text-ink">Villa Melzi:</strong> add the lakeside gardens if their seasonal opening and your onward drive allow. Plan this as a garden visit, not a promise of access to the villa's interior.</li>
      </ul>
      <h4 className="mt-6 flex items-center gap-2 font-semibold"><ParkingCircle className="size-5 text-royal" />Keep one parking base in Bellagio</h4>
      <p className="mt-3 text-sm leading-relaxed text-soft">Leave the car in the legal visitor space arranged with <strong className="text-ink">Hotel Florence reception</strong> the night before and walk to all these stops. Confirm how long you can keep the car there after check-out. Hotel vehicle registration for the controlled centre is not permission to use a residents-only bay. Keep luggage hidden and valuables with you.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={maps("Hotel Florence Bellagio")}>Hotel & parking arrival point</PlaceLink><PlaceLink href={maps("Punta Spartivento Bellagio")}>Punta Spartivento</PlaceLink><PlaceLink href={maps("Salita Serbelloni Bellagio")}>Old-town steps</PlaceLink><PlaceLink href={maps("Basilica San Giacomo Bellagio")}>Basilica San Giacomo</PlaceLink><PlaceLink href={maps("Lungolago Europa Bellagio")}>Lakefront promenade</PlaceLink><PlaceLink href={maps("Giardini di Villa Melzi Bellagio")}>Villa Melzi gardens</PlaceLink></div>
      <p className="mt-4 text-sm leading-relaxed text-soft">Villa Melzi's ordinary garden admission currently does not require a reservation. Check the official seasonal calendar before coming, particularly outside the main season, and buy the appropriate ticket at the entrance.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href="https://www.giardinidivillamelzi.it/en/home2/">Villa Melzi · tickets & season</PlaceLink><PlaceLink href="https://www.bellagiolakecomo.com/wp-content/uploads/2025/02/itinerario-storico-borgo-en.pdf">Official Bellagio walk</PlaceLink><PlaceLink href="https://www.bellagiolakecomo.com/en/bellagio-lake-como-italy/poi-points-of-interest/parking-bellagio">Bellagio parking guidance</PlaceLink></div>
      <p className="mt-5 border-l-2 border-sage pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Want the boat version, or need to adapt to rain?</strong> Ask the Trip agent before changing the day. Check the live ferry timetable and distinguish passenger boats from services that carry cars. Never assume a sailing or car space is guaranteed.</p>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">02 · Varenna won us over even more</h3>
      <div className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <p>We continued to Varenna by car, and it charmed us even more than Bellagio. <strong className="text-ink">It was beautiful, peaceful and wonderfully idyllic.</strong> One of those places where a slow walk feels like the whole point of being there.</p>
        <p>At Villa Monastero we found parking in a multi-storey garage about 30 metres from the entrance, so the arrival was easy on our visit. We also did not need to arrange admission ahead. Treat that as our experience, not a guarantee of a free parking space or walk-in availability on your dates.</p>
      </div>
      <h4 className="mt-6 font-semibold">The village walk</h4>
      <ul className="mt-3 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Villa Monastero:</strong> begin with the lakeside gardens. Check whether your ticket covers the gardens only or also the house museum, and whether both are open that day.</li>
        <li><strong className="text-ink">Piazza San Giorgio & Chiesa San Giorgio:</strong> stroll to the main square and church, respecting services.</li>
        <li><strong className="text-ink">The village lanes & waterfront:</strong> take your time between the colourful houses, steps and lake views.</li>
        <li><strong className="text-ink">Passeggiata degli Innamorati:</strong> follow the lovers' promenade towards the ferry area. It is a short lakeside walk, not a long hike. Watch your footing when wet and respect any closures.</li>
      </ul>
      <h4 className="mt-6 flex items-center gap-2 font-semibold"><ParkingCircle className="size-5 text-royal" />Park beside Villa Monastero, then walk</h4>
      <p className="mt-3 text-sm leading-relaxed text-soft">Use the <strong className="text-ink">Parcheggio Multipiano on Viale Giovanni Polvani 1</strong>, opposite Villa Monastero's entrance, as your base. Leave the car there for the villa, square, church and lovers' promenade. Check the posted charges, clearance and vehicle exit hours. Avoid driving into the narrow historic lanes looking for a closer space.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={maps("Parcheggio Multipiano Viale Giovanni Polvani 1 Varenna")}>Garage navigation</PlaceLink><PlaceLink href={maps("Villa Monastero Varenna")}>Villa Monastero</PlaceLink><PlaceLink href={maps("Piazza San Giorgio Varenna")}>Piazza & church</PlaceLink><PlaceLink href={maps("Passeggiata degli Innamorati Varenna")}>Lovers' promenade</PlaceLink><PlaceLink href="https://www.villamonastero.eu/en/opening-hours-ticket/">Villa Monastero · tickets & calendar</PlaceLink></div>
      <h4 className="mt-6 font-semibold">Riva di Gittana · a separate lakeside detour</h4>
      <p className="mt-3 text-sm leading-relaxed text-soft">Riva di Gittana is north of Varenna, in the Perledo area, not part of the compact old-town walking loop. Treat it as an extra stop only if time and weather allow, rather than another must-do before the mountains. Check the signed visitor spaces by the SP72 / Strada del Verde junction above the lakeside access. Use them only if open and permitted by the current signs, and never stop on the through road. If you cannot find a permitted space, continue with your planned route.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={maps("Riva di Gittana Perledo")}>Riva di Gittana & nearby parking</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">03 · A practical lunch, with a little Italian shopping</h3>
      <p className="mt-5 text-sm leading-relaxed text-soft">On the way north, we stopped for a quick lunch at <strong className="text-ink">Centro Commerciale Fuentes</strong>. It was a practical road-trip break rather than a long restaurant lunch, with a little shopping folded into it.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">We bought <strong className="text-ink">KIKO Milano lip glosses</strong>, eM picked up hiking shoes and we stocked up on Italian pasta. Honestly, bringing some Italian pasta home is a must for us. Leave a little room in the luggage.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Parking:</strong> use the shopping centre's customer parking and keep the car there for lunch, shops and groceries. Check the current signs and opening hours, keep purchases and travel luggage out of sight, and bring valuables inside with you. Choose from the dining options open on the day, then get back on the road before this becomes an entire afternoon.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={maps("Centro Commerciale Fuentes Via La Rosa 354 Piantedo")}>Shopping centre & parking</PlaceLink><PlaceLink href="https://www.centrofuentes.it/dove-siamo">Official centre & directions</PlaceLink><PlaceLink href="https://www.centrofuentes.it/i-negozi/ristorazione">Lunch options</PlaceLink><PlaceLink href="https://www.centrofuentes.it/i-negozi">Shops & groceries</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">04 · Vermiglio & our bucket-list hotel</h3>
      <p className="mt-5 text-sm leading-relaxed text-soft">From Lake Como we continued inland to <strong className="text-ink">Vermiglio</strong>, still in Italy, where a very special stay was waiting: <strong className="text-ink">Chalet al Foss Alp Resort</strong>. We had wanted to visit this hotel for a long time. This was the moment the trip moved from lake-town exploring to the mountain escape on our bucket list.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Check your chosen route before leaving Fuentes. Mountain-road conditions can change, and a shorter-looking route is not always the most comfortable drive. Allow a proper buffer, check any pass restrictions and tolls on your actual route, and tell the hotel if your arrival time changes.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Parking & arrival:</strong> head to Chalet al Foss at Via Nazionale 2/A, Vermiglio, follow the hotel's guest-arrival instructions and ask reception where to leave the car for your stay. Confirm the parking arrangements before arriving. Use the hotel as the parking base for check-in and dinner, rather than setting off again after a long day.</p>
      <h4 className="mt-6 font-semibold">Dinner at the hotel</h4>
      <p className="mt-3 text-sm leading-relaxed text-soft">We had dinner at the hotel. After sightseeing, shopping and the mountain drive, staying in for the evening made perfect sense. Confirm your dinner arrangement and serving times ahead, and check what your room rate includes. Do not assume dinner or particular experiences are included in every booking.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={maps("Chalet al Foss Alp Resort Via Nazionale 2 Vermiglio")}>Hotel, dinner & parking arrival</PlaceLink><PlaceLink href="https://www.hotelchaletalfoss.it/en/">Official hotel</PlaceLink><PlaceLink href="https://www.booking.com/hotel/it/chalet-al-foss.html">Booking.com</PlaceLink><PlaceLink href="https://www.hotelchaletalfoss.it/en/restaurants">Hotel restaurants</PlaceLink></div>
    </div>

    <div className="border-y border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><CheckSquare className="size-5" />Before day 4 · don't forget</h3>
      <ul className="mt-5 space-y-3">{[
        "Ask reception about tomorrow's breakfast and dinner arrangements and what your booking includes",
        "Check access, opening times and any booking requirements for the wellness or hotel experiences you want",
        "Have swimwear, a warm layer and shoes with grip ready for the mountain stay",
        "Dry any wet clothes and shoes from the lake before packing them away",
        "Confirm your overnight parking and keep your room confirmation and hotel contact handy",
        "Charge your phone and camera, then leave yourself room for a slower day",
      ].map((item) => <li key={item}><label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-soft"><input type="checkbox" className="mt-1 size-4 shrink-0 accent-primary" />{item}</label></li>)}</ul>
      <p className="mt-5 text-sm text-soft">Weather or arrival plans changed? Ask the Trip agent in your trip room how to adapt without losing the relaxed part of the stay.</p>
    </div>
  </section>;
}