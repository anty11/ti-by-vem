import { ArrowUpRight, BedDouble, Car, CheckSquare, Clock3, ParkingCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import geislerPhoto from "@/assets/oktoberfest-day6-geisler.jpg";
import routeArtwork from "@/assets/oktoberfest-day6-zans-map.jpg";
import { oktoberfestDaySixTimes as times } from "@/lib/oktoberfest-day-six-timing";

const maps = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const drive = (origin: string, destination: string) => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=driving`;

function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight /></a></Button>;
}

export function OktoberfestDaySixGuide() {
  return <section aria-label="Oktoberfest day 6 detailed guide" className="mt-8 text-ink">
    <header className="relative isolate overflow-hidden rounded-lg bg-ink">
      <img src={geislerPhoto} alt="Illustrative generated photograph of Geisler Alm and the Odle mountains in Val di Funes under autumn clouds" width={1536} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="france-day-photo-shade absolute inset-0" aria-hidden="true" />
      <div className="relative px-6 py-10 text-onink sm:px-10">
        <p className="text-xs font-semibold uppercase">Your guide · Day 06 · Italy</p>
        <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">A hiking day on Val di Funes & boats on Lago di Braies.</h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed">One of our hiking days, which is exactly why yesterday had the cable car. Mountain huts, changeable weather and one of the most famous lakes in the Dolomites.</p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm"><span className="flex items-center gap-2"><Car className="size-4" />Santa Maddalena → Val di Funes → Lago di Braies → Valdaora</span><span className="flex items-center gap-2"><BedDouble className="size-4" />Hotel Chalet Olympia · Valdaora</span></div>
      </div>
    </header>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Your day at a glance</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Breakfast, the hike start, the first hut and the boat rental are our recorded times. Driving allowances are estimates, not our exact departure or arrival times.</p>
      <ol className="mt-5 divide-y divide-border">{[
        [times.breakfast, "Breakfast at Fallerhof", `We paid extra for breakfast, around €${times.breakfastPriceEur} in cash, and had it all to ourselves. Simple, homely and good quality, exactly how we like it on the road.`],
        [times.hikeStart, "Val di Funes hike from the car park", `We set off from the well-signed car park hoping the weather would clear. It did not, but the walk was still worth it. The whole hike there and back took us about ${times.hikeTotalHours} hours.`],
        [times.firstHut, "First hut reached, and it was closed", "Geisler Alm, Rifugio delle Odle at 1,996 m, the hut we had looked forward to most, had a sign saying Summer is coming. A few minutes further on, a second hut was open."],
        ["Early afternoon", "Soup, a shared dessert & the walk back", "Warming soup and a dessert to share. It was full inside, so we stayed outside. The three-thousand-metre peaks around us stayed hidden in the clouds."],
        [times.braiesBoats, "Lago di Braies & the rowing boats", `One of the last boat slots of the day, and we had no idea. We rowed for ${times.rowingMinutes} minutes and caught the last rays of sunshine.`],
        ["Evening", "Dinner in Valdaora & Hotel Chalet Olympia", "A simple hotel, ideal for an overnight stop thanks to its location. Honestly, we barely remember sleeping here, but breakfast was a lovely surprise."],
      ].map(([time, title, note]) => <li key={title} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"><span className="text-sm font-semibold text-terracotta">{time}</span><div><h4 className="text-sm font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
    </div>

    <div className="py-8">
      <h3 className="font-display text-2xl">From Val di Funes to Valdaora</h3>
      <img src={routeArtwork} alt="Schematic topographic day 6 route from Santa Maddalena to Zans and Geisler Alm, then Lago di Braies and Valdaora" width={1536} height={1024} loading="lazy" className="mt-4 h-auto w-full rounded-lg" />
      <p className="mt-2 text-xs text-soft">Schematic artwork, not a road map. Follow the links for actual routes.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={drive("Fallerhof Kirchweg 14 Santa Maddalena Funes", "Zannes Zans parking Funes")}>Fallerhof → Val di Funes</PlaceLink><PlaceLink href={drive("Zannes Zans parking Funes", "Lago di Braies parking")}>Val di Funes → Lago di Braies</PlaceLink><PlaceLink href={drive("Lago di Braies", "Hotel Chalet Olympia Valdaora")}>Lago di Braies → Valdaora</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">01 · A slow breakfast, just for us</h3>
      <p className="mt-5 text-sm leading-relaxed text-soft">At {times.breakfast} we sat down to a breakfast we had paid extra for at Fallerhof, around €{times.breakfastPriceEur} per person in cash if we remember correctly. We had it completely to ourselves. No luxury, just quality and a genuinely homely feeling. That is what we love on the road, a little bit of everything from every corner.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Parking:</strong> the car stays at Fallerhof. Pack, settle the breakfast and check out with your hosts before leaving.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={maps("Fallerhof Kirchweg 14 Santa Maddalena Funes")}>Fallerhof & guest parking</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">02 · Val di Funes, even without the view</h3>
      <p className="mt-5 text-sm leading-relaxed text-soft">The weather was not on our side, but we set off for Val di Funes anyway, hoping it would clear. It never did. We left the well-signed car park around <strong className="text-ink">{times.hikeStart}</strong>. To our surprise, even the information centre was closed at the end of September.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Our tip: check the opening hours of the individual huts carefully.</strong> The hut we had looked forward to most was closed. Around {times.firstHut} we reached <strong className="text-ink">Geisler Alm, Rifugio delle Odle at 1,996 m</strong>, and found a sign saying Summer is coming. So we extended our route to a second hut a few minutes further on, which was open.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">There we treated ourselves to a warming soup and a dessert to share. It was full inside, so we stayed outside. We should have had three-thousand-metre peaks all around us, but sadly we saw none of them. The whole hike, there and back with the hut stop, took us <strong className="text-ink">about {times.hikeTotalHours} hours</strong>. Plan half a day and keep it flexible around hut opening times and weather.</p>
      <h4 className="mt-6 font-semibold">Suggested walking route · Adolf Munkel Trail</h4>
      <p className="mt-3 text-sm leading-relaxed text-soft">Zannes / Zans parking → trail 6 towards Tschantschenon → at the bridge turn onto trail 35, the Adolf Munkel Trail → Gschnagenhardt Alm and Geisler Alm → trail 36 via Dusleralm → Zans. The local tourism guide lists this shorter circuit at approximately 9 km and 3 hours walking. Our day took about {times.hikeTotalHours} hours including the hut stop and extra walking. This is a suggested marked route to the huts, not a reconstruction of every turn we took.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Huts to check:</strong> Geisler Alm, neighbouring Gschnagenhardt Alm and Dusleralm on the return. Geisler Alm’s direct approach via trails 6, 35 and 36A is about 1 hour 40 minutes uphill from Zans. These huts are in Val di Funes, not on the Alpe di Siusi plateau. Carry your own food and water even when a hut is listed as open.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href="https://www.geisleralm.com/de/almuette-villnoess/geisleralm-aktivitaeten/65-wanderungen-zur-geisler-alm.html">Official hut walking approaches</PlaceLink><PlaceLink href={maps("Gschnagenhardt Alm Funes")}>Gschnagenhardt Alm · hours</PlaceLink><PlaceLink href={maps("Dusleralm Funes")}>Dusleralm · hours</PlaceLink></div>
      <aside className="mt-5 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Late season means limited services.</strong> Huts, lifts and information centres reduce their hours or close between the summer and winter seasons. Check current opening times on the official Val di Funes website before building your day around a specific hut, and carry warm layers, waterproofs, water and a snack regardless.</aside>
      <h4 className="mt-6 flex items-center gap-2 font-semibold"><ParkingCircle className="size-5 text-royal" />Val di Funes hiking car park</h4>
      <p className="mt-3 text-sm leading-relaxed text-soft">For this suggested Geisler Alm route, use <strong className="text-ink">Zannes / Zans car park at the end of Val di Funes</strong>. Check current charges and any reservation rules before arriving. Leave the car here for all huts and the complete walk, then return to collect it before driving to Lago di Braies.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href="https://www.geisleralm.com/">Official Geisler Alm & opening times</PlaceLink><PlaceLink href={maps("Geisler Alm Rifugio delle Odle")}>Geisler Alm · current Maps reviews</PlaceLink><PlaceLink href={maps("Parcheggio Zannes Zans Funes")}>Zans trailhead parking</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">03 · Lago di Braies, one of the last boats of the day</h3>
      <p className="mt-5 text-sm leading-relaxed text-soft">From there we continued to <strong className="text-ink">Lago di Braies</strong> and rented a rowing boat. It was around <strong className="text-ink">{times.braiesBoats}</strong> and, without realising it, we had caught one of the last boat slots of the day. There were no queues. We rowed for {times.rowingMinutes} minutes and even caught the last rays of sunshine on the water.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Check the boat rental prices and last rental time online before you go, especially outside high season. Do not plan to arrive at the very end of the day and assume boats will still be available. We were lucky.</p>
      <h4 className="mt-6 flex items-center gap-2 font-semibold"><ParkingCircle className="size-5 text-royal" />Lago di Braies parking</h4>
      <p className="mt-3 text-sm leading-relaxed text-soft">We parked at the large car park roughly three minutes on foot from the lake, depending on where within it you find a space. In high season, access to the Braies valley is regulated and parking may need to be booked in advance. Check the current access and reservation rules for your dates before setting off.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href="https://www.prags.bz/en/lake-braies">Official lake & access information</PlaceLink><PlaceLink href={maps("Lago di Braies boat rental")}>Boat rental · current Maps reviews</PlaceLink><PlaceLink href={maps("Lago di Braies parking")}>Lake parking</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">04 · Dinner in Valdaora & an honest word about the hotel</h3>
      <p className="mt-5 text-sm leading-relaxed text-soft">For dinner we chose a pizzeria in Valdaora. Honestly, the pizza was not the best we had on this trip. Valdaora has several restaurants along the main road, so check current reviews and pick what appeals to you on the day.</p>
      <p className="mt-5 text-sm leading-relaxed text-soft"><strong className="text-ink">Hotel Chalet Olympia</strong> was a simple hotel, ideal for an overnight stop thanks to its location. We will admit we barely even remember sleeping here. What we do remember is that breakfast was a lovely surprise. Choose it as a practical base, not a destination in itself.</p>
      <h4 className="mt-6 flex items-center gap-2 font-semibold"><ParkingCircle className="size-5 text-royal" />Hotel parking</h4>
      <p className="mt-3 text-sm leading-relaxed text-soft">The hotel has its own guest parking by the building. Confirm your space and breakfast time at reception when you arrive.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={maps("Hotel Chalet Olympia Valdaora")}>Hotel & parking</PlaceLink><PlaceLink href="https://www.chalet-olympia.com">Official hotel</PlaceLink><PlaceLink href="https://www.booking.com/hotel/it/chalet-olympia.html">Booking.com</PlaceLink><PlaceLink href={maps("pizzeria Valdaora")}>Dinner options & Maps reviews</PlaceLink></div>
    </div>

    <div className="border-y border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><CheckSquare className="size-5" />Before day 7 · don't forget</h3>
      <ul className="mt-5 space-y-3">{[
        "Settle any parking or breakfast payments at the hotel before leaving",
        "Dry your hiking shoes and waterproofs after Val di Funes",
        "Check tomorrow's route, tolls and any bookings in your onward plan",
        "Save your next accommodation's arrival instructions and parking details",
        "Charge your phone and camera after a full day of photos",
        "Check that all luggage, souvenirs and travel documents are back in the car",
      ].map((item) => <li key={item}><label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-soft"><input type="checkbox" className="mt-1 size-4 shrink-0 accent-primary" />{item}</label></li>)}</ul>
      <p className="mt-5 text-sm text-soft">Weather or hut openings changed? Ask the Trip agent in your trip room before adjusting your mountain plans.</p>
    </div>
  </section>;
}
