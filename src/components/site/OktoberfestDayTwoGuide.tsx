import { ArrowUpRight, BedDouble, Car, CheckSquare, Clock3, ParkingCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import bellagioPhoto from "@/assets/oktoberfest-day2-bellagio.jpg";
import routeArtwork from "@/assets/oktoberfest-day2-map.jpg";

const maps = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const drive = (origin: string, destination: string, waypoints?: string) => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=driving${waypoints ? `&waypoints=${encodeURIComponent(waypoints)}` : ""}`;

function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight /></a></Button>;
}

export function OktoberfestDayTwoGuide() {
  return <section aria-label="Oktoberfest day 2 detailed guide" className="mt-8 text-ink">
    <header className="relative isolate overflow-hidden rounded-lg bg-ink">
      <img src={bellagioPhoto} alt="Illustrative generated photograph of Bellagio's lakefront beneath a cloudy September sky" width={1536} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="france-day-photo-shade absolute inset-0" aria-hidden="true" />
      <div className="relative px-6 py-10 text-onink sm:px-10">
        <p className="text-xs font-semibold uppercase">Your guide · Day 02 · Liechtenstein, Switzerland & Italy</p>
        <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Three countries. One very full day.</h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed">Breakfast in Vaduz, an unexpectedly rainy St. Moritz and dinner beside Lake Como.</p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm"><span className="flex items-center gap-2"><Car className="size-4" />Start early · a long driving day</span><span className="flex items-center gap-2"><BedDouble className="size-4" />Hotel Florence · Bellagio</span></div>
      </div>
    </header>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Your day at a glance</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">We left fairly early. The rhythm below is a planning suggestion, not our recorded clock times. Allow roughly 7–9 hours of driving across the whole day, plus stops, parking and any border or weather delays. Check the live route before setting off.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["Early morning", "Stetten → Vaduz", "Allow around 2–2.5 hours driving. Have breakfast after arriving, then take a short sunny walk through the capital."],
        ["Late morning", "Vaduz → Susch → St. Moritz", "Allow around 2.5–3.5 hours for the Alpine transfer, depending on the open roads. Leave a little time for the lake, centre and leaning tower."],
        ["Afternoon", "St. Moritz → Bellagio", "Allow around 3–4 hours via the Maloja and Chiavenna corridor and the lake roads, depending on traffic and your chosen approach. Avoid a last-minute ferry connection."],
        ["Evening", "Dinner, tiramisu & sleep", "Check in at Hotel Florence, sort out legal parking with reception and enjoy dinner in Bellagio."],
      ].map(([time, title, note]) => <li key={title} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"><span className="text-sm font-semibold text-terracotta">{time}</span><div><h4 className="text-sm font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
    </div>

    <div className="py-8">
      <h3 className="font-display text-2xl">From the Alps to Lake Como</h3>
      <img src={routeArtwork} alt="Schematic topographic artwork of day 2 from Stetten through Vaduz, Susch and St. Moritz to Bellagio" width={1536} height={1024} loading="lazy" className="mt-4 h-auto w-full rounded-lg" />
      <p className="mt-2 text-xs text-soft">Schematic artwork, not a road map. Use the links for current routes, open passes and exact parking locations.</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <PlaceLink href={drive("KAM Hotel Stetten Germany", "Parkhaus Marktplatz Vaduz")}>Stetten → Vaduz</PlaceLink>
        <PlaceLink href={drive("Vaduz Liechtenstein", "Parkhaus Quadrellas St Moritz", "Susch Switzerland")}>Vaduz → Susch → St. Moritz</PlaceLink>
        <PlaceLink href={drive("St Moritz Switzerland", "Hotel Florence Bellagio", "Chiavenna Italy|Lecco Italy")}>St. Moritz → Bellagio · road approach</PlaceLink>
      </div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">01 · A small country, a memorable welcome</h3>
      <div className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <p><strong className="text-ink">Liechtenstein really is tiny.</strong> It covers just 160 km² and sits between Austria and Switzerland. A lovely fact for the drive: it is one of only two doubly landlocked countries in the world. Not only does it have no coast, neither do either of its neighbours. Its currency is the Swiss franc, and although it is not in the EU, it is part of the Schengen area.</p>
        <p>What we still remember most clearly is the gentleman at the border looking rather surprised at our number plate. His expression made us wonder whether he was trying to work out if we were even from Europe. We got our identity cards back about 15 minutes later. We like to think he got a little cultural experience out of meeting us too.</p>
        <p>That was our particular border encounter, not a standard waiting time or a description of every crossing. Keep valid travel documents within reach and check which documents apply to your nationality.</p>
        <p><strong className="text-ink">Vaduz did not take us long.</strong> We had breakfast, walked in the sunshine, bought our magnets and moved on. For this route, it works beautifully as a short capital-city stop rather than a whole sightseeing day.</p>
      </div>
      <h4 className="mt-6 font-semibold">A compact Vaduz walk</h4>
      <ul className="mt-3 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Städtle:</strong> begin with the pedestrian centre, breakfast and souvenir shops.</li>
        <li><strong className="text-ink">St. Florin Cathedral:</strong> continue south through the centre to the neo-Gothic cathedral. Respect services and any visitor restrictions.</li>
        <li><strong className="text-ink">Vaduz Castle:</strong> admire it above the town. It is the princely family's residence, not a castle with public interior tours. If you want the uphill walk for the exterior views, allow extra time and wear comfortable shoes.</li>
        <li><strong className="text-ink">Red House:</strong> finish with an exterior look at this landmark in the Mitteldorf area if time allows. It is a private property, so enjoy it respectfully from public space.</li>
      </ul>
      <h4 className="mt-6 flex items-center gap-2 font-semibold"><ParkingCircle className="size-5 text-royal" />One parking stop for Vaduz</h4>
      <p className="mt-3 text-sm leading-relaxed text-soft">A researched central option is <strong className="text-ink">Parkhaus Marktplatz</strong>. Keep the car there for breakfast, Städtle, the cathedral and your walks towards the castle and Red House. Check the current signs, access and charges before leaving the car. This is a suggested parking base, not a claim that we used this garage.</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <PlaceLink href={maps("Parkhaus Marktplatz Vaduz")}>Parking navigation</PlaceLink>
        <PlaceLink href={maps("Städtle Vaduz")}>Städtle</PlaceLink>
        <PlaceLink href={maps("Kathedrale St Florin Vaduz")}>St. Florin Cathedral</PlaceLink>
        <PlaceLink href={maps("Schloss Vaduz")}>Vaduz Castle</PlaceLink>
        <PlaceLink href={maps("Rotes Haus Vaduz")}>Red House</PlaceLink>
        <PlaceLink href="https://www.vaduz.li/wohnen-umwelt/umwelt-mobilitaet/parken-ladestationen">Official parking guidance</PlaceLink>
        <PlaceLink href="https://en.tourismus.li/reiseland/unser-land/zahlen-fakten.html">Meet Liechtenstein</PlaceLink>
      </div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">02 · Through Susch and into the Swiss Alps</h3>
      <p className="mt-5 text-sm leading-relaxed text-soft">Our journey continued through Susch towards St. Moritz. Susch is a village in the Engadin, not the name of a mountain pass. If your route approaches it from Davos, the crossing is the <strong className="text-ink">Flüela Pass</strong>. Treat the navigation as a route to check, not an instruction to cross a closed or unsafe pass.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Check current road conditions and pass openings, even in September. Mountain weather can change quickly. Keep a warm layer and a waterproof jacket accessible, and do not let the day become a race to fit everything in. Susch is a transfer waypoint here, not a scheduled sightseeing or parking stop. For a photo break, stop only at a signed, legal pull-off with enough space, never on a bend or in the road.</p>
      <aside className="mt-5 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Before crossing borders:</strong> confirm rental permission and insurance for every country. Swiss motorway routes require the appropriate vignette, which may already be on your rental. A route via Austria may also use vignette or separately tolled roads. Follow your actual itinerary rather than assuming a pass route avoids every charge. Check mobile roaming for Switzerland and Liechtenstein before using data, as your EU package may not cover them.</aside>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href="https://www.tcs.ch/en/tools/traffic-info/">Swiss road conditions</PlaceLink><PlaceLink href="https://www.bazg.admin.ch/bazg/en/home/information-individuals/travel-and-purchases--allowances-and-duty-free-limit/importation-into-switzerland/road-tax-vignette--vehicles-up-to-3-5-tonnes-.html">Swiss vignette information</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">03 · St. Moritz, minus the sunshine</h3>
      <div className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <p>Have you heard the line about St. Moritz having <strong className="text-ink">300 days of sunshine a year</strong>? The destination's own travel guide says it too. Well, on our visit it absolutely poured. Looking back at the photos, we almost look as if the wind was about to carry us away.</p>
        <p>We visited in September, outside the main season, and were surprised by how many shops and restaurants were closed. We still saw the main sights and fitted in a little shopping, but this was not the sunlit Alpine postcard we had imagined. Check seasonal opening hours before building your stop around a particular shop or restaurant.</p>
      </div>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Via Serlas & the centre:</strong> stroll through the shopping streets and enjoy whatever is open, without assuming every boutique is operating between seasons.</li>
        <li><strong className="text-ink">Schiefer Turm:</strong> the leaning tower is a landmark left from the former St. Mauritius church. It dates back to the 12th century and makes an easy exterior sightseeing stop.</li>
        <li><strong className="text-ink">St. Moritzersee:</strong> head down for lake and Alpine views if the weather allows. A full circuit is roughly 5 km and about an hour, so a short waterside look is the more realistic choice on this driving day.</li>
      </ul>
      <h4 className="mt-6 flex items-center gap-2 font-semibold"><ParkingCircle className="size-5 text-royal" />Parking for the centre & lake</h4>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Parkhaus Quadrellas</strong> is a researched central garage in St. Moritz Dorf. Leave the car there for Via Serlas, the leaning tower and your lake walk, then allow time for the uphill return from the water. Check current charges, entrance signs and access hours. The garage is our suggested base, not a confirmed detail of our own parking.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={maps("Parkhaus Quadrellas St Moritz")}>Parking navigation</PlaceLink><PlaceLink href={maps("Via Serlas St Moritz")}>Via Serlas</PlaceLink><PlaceLink href={maps("Schiefer Turm St Moritz")}>Leaning tower</PlaceLink><PlaceLink href={maps("St Moritzersee")}>Lake St. Moritz</PlaceLink><PlaceLink href="https://www.stmoritz.com/en/directory/nature/lake-st-moritz">Official lake guide</PlaceLink></div>
      <p className="mt-5 border-l-2 border-sage pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Rain changing your plans?</strong> Ask the Trip agent what to shorten before your onward drive to Bellagio. Protect your energy for the mountain and lakeside roads.</p>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">04 · Bellagio, pizza & very slippery steps</h3>
      <div className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <p>At the end of the day we crossed into Italy and reached <strong className="text-ink">Bellagio on Lake Como</strong>. It was still raining. Those beautiful stone steps deserve a practical warning: <strong className="text-ink">please do not wear flip-flops in the rain.</strong> They were extremely slippery. Grippy shoes are a much better choice, especially with luggage.</p>
        <p>And yes, a rather imposing stork made it into our Bellagio story too. Travel is not always just the postcard moments.</p>
        <p>After the long journey, dinner was at <strong className="text-ink">Ristoro Forma e Gusto</strong>, a pizzeria and restaurant in the old town. We finished with tiramisu and then went straight to the hotel to rest.</p>
        <p>Our first choices had been <strong className="text-ink">Trattoria San Giacomo</strong> and <strong className="text-ink">La Lanterna</strong>, but our dinner plans did not work out. Do not underestimate planning your meal after a long driving day. Check each restaurant's current seating policy before arriving.</p>
      </div>
      <aside className="mt-5 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Reservations are not the same everywhere.</strong> Ristoro Forma e Gusto and Trattoria San Giacomo currently state on their official websites that they do not take reservations. For those two, arrive early and allow for a queue. Contact La Lanterna directly to check its current policy. Where bookings are accepted, reserve ahead rather than relying on a late walk-in.</aside>
      <div className="mt-5 divide-y divide-border">{[
        { name: "Ristoro Forma e Gusto · where we ate", official: "https://www.ristorantebarchetta.com/ristoro-forma-gusto/?lang=en", query: "Ristoro Forma e Gusto Bellagio" },
        { name: "Trattoria San Giacomo · our first-choice option", official: "https://trattoriabellagio.it/", query: "Trattoria San Giacomo Bellagio" },
        { name: "La Lanterna · our other first-choice option", official: "http://www.lalanternabellagio.com/", query: "La Lanterna Salita Serbelloni 15 Bellagio" },
      ].map((venue) => <div key={venue.name} className="py-4"><h4 className="text-sm font-semibold">{venue.name}</h4><div className="mt-3 flex flex-wrap gap-2"><PlaceLink href={venue.official}>Restaurant website</PlaceLink><PlaceLink href={maps(venue.query)}>Google Maps & current reviews</PlaceLink></div></div>)}</div>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Parking for dinner & the steps:</strong> keep the car in the legal visitor parking arranged on arrival, then walk to all three restaurant options from the lakefront. Do not drive into the old-town lanes to reach dinner.</p>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">05 · Hotel Florence, right beside the lake</h3>
      <p className="mt-5 text-sm leading-relaxed text-soft">We stayed at <strong className="text-ink">Hotel Florence Bellagio</strong>, on Piazza Mazzini 46, right beside the lake. After the long drive, dinner and tiramisu, having our hotel there was exactly what we wanted.</p>
      <h4 className="mt-6 flex items-center gap-2 font-semibold"><ParkingCircle className="size-5 text-royal" />Speak to reception before leaving the car</h4>
      <p className="mt-3 text-sm leading-relaxed text-soft">Our parking ended up a little farther away because the spaces directly in front of the hotel were residents-only. We moved the car after a short while and no fine arrived. That was the happy outcome of our visit, not a promise that a brief stop in a reserved bay is permitted.</p>
      <aside className="mt-5 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Hotel registration does not turn a residents-only bay into visitor parking.</strong> Hotel guests entering Bellagio's controlled historic centre must arrange vehicle registration through their accommodation. Ask Hotel Florence for the permitted arrival route before driving in and give reception your exact number plate immediately. ZTL access, loading permission and the right to use an individual parking bay are separate things. Follow the signs and do not assume registration cancels a parking fine.</aside>
      <p className="mt-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Where to leave the car:</strong> ask reception to direct you to a currently legal visitor space and confirm the overnight arrangements. Bellagio's official parking guide distinguishes paid blue bays from yellow spaces reserved for the categories on the signs. Use the official parking map below to plan your approach, then follow the current on-street signs. Keep the car at that same legal base for your hotel, lakefront walk and dinner.</p>
      <div className="mt-5 flex flex-wrap gap-2"><PlaceLink href="https://www.hotelflorencebellagio.it/en/hotel/">Official hotel</PlaceLink><PlaceLink href="https://www.booking.com/hotel/it/florence-menaggio.html">Booking.com</PlaceLink><PlaceLink href={maps("Hotel Florence Piazza Mazzini 46 Bellagio")}>Hotel location</PlaceLink><PlaceLink href="https://www.bellagiolakecomo.com/wp-content/uploads/2023/06/2022-PARKING-IN-BELLAGIO.pdf">Official parking map & access guidance</PlaceLink></div>
    </div>

    <div className="border-y border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><CheckSquare className="size-5" />Before day 3 · don't forget</h3>
      <ul className="mt-5 space-y-3">{[
        "Confirm with reception that your vehicle details and overnight parking are correctly arranged",
        "Dry your shoes and pack footwear with grip for Bellagio's stone steps",
        "Check tomorrow's Lake Como weather and any ferry timetable you intend to use, including whether it carries cars",
        "Keep a waterproof layer, charged phone and camera ready for the lake",
        "Check your onward accommodation confirmation, arrival instructions and parking before heading into the mountains",
        "Plan meals around current opening hours and each restaurant's reservation or queue policy",
      ].map((item) => <li key={item}><label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-soft"><input type="checkbox" className="mt-1 size-4 shrink-0 accent-primary" />{item}</label></li>)}</ul>
      <p className="mt-5 text-sm text-soft">Plans changed or the weather still looks difficult? Ask the Trip agent in your trip room how to adapt tomorrow.</p>
    </div>
  </section>;
}