import { ArrowUpRight, BedDouble, Car, CheckSquare, Clock3, Heart, ParkingCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import secedaPhoto from "@/assets/oktoberfest-day5-seceda.jpg";
import routeArtwork from "@/assets/oktoberfest-day5-map.jpg";
import { oktoberfestDayFiveTimes as times } from "@/lib/oktoberfest-day-five-timing";

const maps = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const drive = (origin: string, destination: string) => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=driving`;
const alpacaExperience = "https://www.hotelchaletalfoss.it/it/component/pacchetti/365-colazione-con-happy-bernard-i-nostri-alpaca.html";

function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight /></a></Button>;
}

export function OktoberfestDayFiveGuide() {
  return <section aria-label="Oktoberfest day 5 detailed guide" className="mt-8 text-ink">
    <header className="relative isolate overflow-hidden rounded-lg bg-ink">
      <img src={secedaPhoto} alt="Illustrative generated photograph of Seceda's grassy ridgeline and the jagged Odle peaks on a sunny autumn day" width={1536} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="france-day-photo-shade absolute inset-0" aria-hidden="true" />
      <div className="relative px-6 py-10 text-onink sm:px-10">
        <p className="text-xs font-semibold uppercase">Your guide · Day 05 · Italy</p>
        <p className="mt-4 flex items-center gap-2 text-sm font-semibold"><Heart className="size-4" />eM's favourite</p>
        <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Alpacas, Alpine views & a night above the cows.</h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed">A bucket-list breakfast, Seceda in the sunshine and the wonderfully authentic side of Santa Maddalena.</p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm"><span className="flex items-center gap-2"><Car className="size-4" />Vermiglio → Ortisei → Val di Funes</span><span className="flex items-center gap-2"><BedDouble className="size-4" />Fallerhof · Santa Maddalena</span></div>
      </div>
    </header>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Your day at a glance</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Breakfast and our arrival on Seceda are recorded times. The driving allowances below are estimates, not our exact departure or arrival times. Keep the morning experience intact, then leave room for parking, lift queues and mountain weather.</p>
      <ol className="mt-5 divide-y divide-border">{[
        [`${times.breakfastStart}–${times.breakfastEnd}`, "Breakfast with the alpacas", "Our private one-hour slot at Chalet al Foss. Book your own experience ahead."],
        ["After breakfast", "Check out & drive to Ortisei", "Allow roughly 2–2.5 hours driving, plus check-out and a parking buffer. Check your actual route and any A22 tolls."],
        [times.seceda, "Up on Seceda", `We took the lifts up, walked for about ${times.mountainWalkMinutes} minutes and had lunch at an open mountain hut.`],
        ["After lunch", "Return to Ortisei & drive to Funes", "Allow roughly 45–60 minutes from Ortisei to Santa Maddalena, after the lift descent and walk back to your car."],
        ["Late afternoon", "Fallerhof & the sunset viewpoint", `Check in, then enjoy an unhurried walk. Ours took around ${times.villageWalkMinutes} minutes including stops.`],
        ["Evening", "Dinner on foot & a very good sleep", "We ate at a welcoming restaurant attached to a guesthouse, about five minutes from our accommodation."],
      ].map(([time, title, note]) => <li key={title} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"><span className="text-sm font-semibold text-terracotta">{time}</span><div><h4 className="text-sm font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
    </div>

    <div className="py-8">
      <h3 className="font-display text-2xl">From a bucket-list breakfast to the Dolomites</h3>
      <img src={routeArtwork} alt="Schematic topographic day 5 route from Vermiglio to Ortisei, with a separate Seceda cable car excursion, then Santa Maddalena" width={1536} height={1024} loading="lazy" className="mt-4 h-auto w-full rounded-lg" />
      <p className="mt-2 text-xs text-soft">Schematic artwork, not a road map. The dashed Seceda excursion is by cable car, not by car. Follow the links for actual routes.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={drive("Chalet al Foss Alp Resort Vermiglio", "Seceda cable car Ortisei")}>Chalet al Foss → Ortisei</PlaceLink><PlaceLink href={drive("Ortisei Italy", "Fallerhof Kirchweg 14 Santa Maddalena Funes")}>Ortisei → Fallerhof</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">01 · Bathrobes, alpacas & orange juice</h3>
      <div className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <p><strong className="text-ink">This was a real bucket-list moment.</strong> Just the two of us in our bathrobes, with two alpacas wandering around and joining our breakfast. The staff gave us grass to feed them, and the Alpine views were right there around us.</p>
        <p>After the previous day, we woke up to beautiful sunshine. For eM, it remains one of her loveliest experiences, even though the white alpaca managed to spill orange juice all over her. Apparently, even a dream breakfast needs a little chaos.</p>
        <p>Our slot was <strong className="text-ink">{times.breakfastStart}–{times.breakfastEnd}</strong>, roughly an hour. Everything was prepared, everyone was helpful and the staff were happy to take photos of us. It felt genuinely special, not just like another thing to tick off.</p>
        <p>The hotel calls this <strong className="text-ink">breakfast with Happy & Bernard</strong>, its resident alpacas. Reserve with the concierge before arriving. Confirm your time, current price, weather arrangements and what is included. Feed them only what staff provide and follow their handling instructions.</p>
      </div>
      <h4 className="mt-6 flex items-center gap-2 font-semibold"><ParkingCircle className="size-5 text-royal" />Keep the car at Chalet al Foss</h4>
      <p className="mt-3 text-sm leading-relaxed text-soft">Breakfast is at the hotel. Leave the car in the guest parking space agreed with reception, then change out of your bathrobes, pack and settle check-out before setting off. Confirm when your parking access ends.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={alpacaExperience}>Official alpaca breakfast</PlaceLink><PlaceLink href={maps("Chalet al Foss Alp Resort Vermiglio")}>Hotel & parking</PlaceLink><PlaceLink href="https://www.hotelchaletalfoss.it/en/">Official hotel</PlaceLink><PlaceLink href="https://www.booking.com/hotel/it/chalet-al-foss.html">Booking.com</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">02 · Ortisei: give parking some breathing room</h3>
      <p className="mt-5 text-sm leading-relaxed text-soft">We drove on to Ortisei, and the shortage of parking spaces around us genuinely surprised us. <strong className="text-ink">Do not plan your arrival as if you can step straight from the car into the lift.</strong> Leave a buffer, especially when keeping an afternoon mountain visit in mind.</p>
      <h4 className="mt-6 flex items-center gap-2 font-semibold"><ParkingCircle className="size-5 text-royal" />Seceda valley-station parking · backup Central Parking</h4>
      <p className="mt-3 text-sm leading-relaxed text-soft">Head first to the signed parking at the <strong className="text-ink">Seceda valley station, Via Val d'Anna 2</strong>. If full, try <strong className="text-ink">Central Parking Ortisei</strong>, then walk through the centre towards Piazza Sant'Antonio and the La Curta escalator connection to the lift. Both are listed by the local tourism board as parking options. Check charges, clearance and exit hours. A ticket for the lift does not reserve a parking space.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={maps("Parcheggio Funivia Seceda Ortisei Via Val d'Anna 2")}>Seceda station parking</PlaceLink><PlaceLink href={maps("Central Parking Ortisei")}>Central Parking · backup</PlaceLink><PlaceLink href="https://www.seceda.it/en/info">Official arrival information</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">03 · Seceda, the easy way up</h3>
      <p className="mt-5 text-sm leading-relaxed text-soft">By <strong className="text-ink">{times.seceda}</strong> we were already up on Seceda. We chose the straightforward lift route from Ortisei, changing at Furnes, rather than hiking all the way from the valley. The ride was uncomplicated for us, and we kept the walk at the top to about an hour.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Take a short walk towards the summit panorama and the Odle ridge views, staying on open, marked paths. The lift saves the big climb, but the ground above still slopes and can be slippery. Wear shoes with grip, bring water, a warm layer and a waterproof jacket, and keep well back from exposed edges. This is a mountain visit, not a pavement stroll.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Seceda rises above 2,500 metres on the sunny side of Val Gardena. Its signature view comes from the contrast between gentle grassy slopes and the dramatic rock towers of the Odle, also called the Geisler. Near the summit cross, a panorama display helps you identify the surrounding peaks.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">That familiar mountain-emoji feeling?</strong> The silhouette certainly has it. Its verified Apple connection is that Seceda and the Odle appeared in Apple's 2017 product presentation. A lovely detail to think about when the real view is in front of you.</p>
      <aside className="mt-5 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Check the season before building your day around the lifts.</strong> Autumn service ends before the winter season starts, and weather can affect operations. Check the live webcam, operating dates, ticket conditions and last descent on the official website. Confirm any separate access fees or restrictions for ridge paths locally. Return towards the station with a buffer rather than aiming for the final cabin.</aside>
      <h4 className="mt-6 font-semibold">Walking route · keep it short, or allow a longer circuit</h4>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Our simple visit:</strong> Seceda upper cable station → marked summit panorama paths and ridge viewpoint → return to the upper station. We walked for about {times.mountainWalkMinutes} minutes. Turn back in time rather than adding a long descent before the final cabin.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">A researched alternative:</strong> the lift operator lists a 4.2 km, approximately one-hour panoramic itinerary past Trojer Hut, Lech da Iman and Fermeda Hut. This includes the Fermeda chairlift back uphill, followed by about ten minutes walking to the cable station. It is not a one-hour walking-only loop. Check both lifts are operating before choosing it. Trojer and Fermeda are on-route dining options, not our confirmed lunch venue.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href="https://www.seceda.it/en/hiking">Official walking routes & lift returns</PlaceLink><PlaceLink href={maps("Trojer Hutte Seceda")}>Trojer Hut · hours</PlaceLink><PlaceLink href={maps("Fermeda Hutte Seceda")}>Fermeda Hut · hours</PlaceLink></div>
      <h4 className="mt-6 font-semibold">Lunch with a mountain view</h4>
      <p className="mt-3 text-sm leading-relaxed text-soft">An open hut gave us the chance to eat before going down. It was idyllic up there. For a practical option to compare, the <strong className="text-ink">Mountain Restaurant Seceda at the upper station</strong> is listed on the official lift website. This is a researched suggestion, not the name of our lunch stop. Check seasonal opening and serving times before relying on it.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Parking for the walk and lunch:</strong> keep the car in the same Ortisei parking space. Everything up here is reached by lift and on foot.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href="https://www.seceda.it/en/summer">Lift dates, tickets & last descent</PlaceLink><PlaceLink href="https://www.seceda.it/en/">Official Seceda & webcam</PlaceLink><PlaceLink href={maps("Seceda viewpoint")}>Seceda panorama</PlaceLink><PlaceLink href="https://www.seceda.it/en/eat-drink">Official mountain dining</PlaceLink><PlaceLink href={maps("Mountain Restaurant Seceda Ortisei")}>Restaurant · current Maps reviews</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">04 · Fallerhof: yes, the cows were part of it</h3>
      <p className="mt-5 text-sm leading-relaxed text-soft">After coming down, we drove slowly towards our accommodation in Santa Maddalena, in Val di Funes. <strong className="text-ink">Fallerhof was something completely different.</strong> We were literally staying above a cowshed. The older family rooms were simple, wonderfully authentic and genuinely charming. And we slept brilliantly.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">After the polished romance of Chalet al Foss, this was a lovely change of mood. A real farm stay, not another glossy resort. Choose it for the atmosphere and setting, and check which room or apartment you are booking rather than expecting every unit to match ours.</p>
      <h4 className="mt-6 flex items-center gap-2 font-semibold"><ParkingCircle className="size-5 text-royal" />Fallerhof guest parking</h4>
      <p className="mt-3 text-sm leading-relaxed text-soft">Navigate to <strong className="text-ink">Fallerhof, Kirchweg 14, Santa Maddalena</strong>. The regional accommodation listing confirms on-site open and covered parking. Ask your hosts which guest space to use and follow their arrival instructions. Keep the car there for check-in, the village walk and dinner.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={maps("Fallerhof Kirchweg 14 Santa Maddalena Funes")}>Fallerhof & guest parking</PlaceLink><PlaceLink href="https://www.fallerhof.it">Official property website</PlaceLink><PlaceLink href="https://www.booking.com/hotel/it/fallerhof-st-magdalena.html">Booking.com</PlaceLink><PlaceLink href="https://www.dolomitisuperski.com/en/plan-and-book/accommodation/Gitschberg-Jochtal-Brixen/Fallerhof">Tourism listing & contact</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">05 · Santa Maddalena, without rushing the view</h3>
      <p className="mt-5 text-sm leading-relaxed text-soft">Once we had settled in, we went out towards one of Santa Maddalena's best-known views. On Maps, look for <strong className="text-ink">St. Magdalena Sunset Viewpoint</strong>. Our walk took about 1.5 hours because we were enjoying the surroundings, taking photos and not rushing anywhere.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Walk from Fallerhof through the village towards the signed panorama paths above the church. Ask your hosts to confirm the currently open walking approach to the viewpoint pin. Enjoy the church, meadows and Odle backdrop from permitted paths, without entering private farm roads or fields. The viewpoint name is not a promise of sunset light on every visit, so check daylight and cloud cover.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Parking:</strong> keep the car at Fallerhof and go on foot. Do not drive up towards the church or viewpoint looking for a closer space. Carry a warm layer and a small torch if you might return near dusk.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={maps("St. Magdalena Sunset Viewpoint Funes")}>Sunset viewpoint</PlaceLink><PlaceLink href={maps("Chiesa di Santa Maddalena Funes")}>Santa Maddalena church</PlaceLink></div>
      <h4 className="mt-6 font-semibold">A welcoming dinner, five minutes away</h4>
      <p className="mt-3 text-sm leading-relaxed text-soft">For dinner, we went to a restaurant attached to a guesthouse, about five minutes on foot from our stay. It felt warm, welcoming and genuinely hospitable, exactly right after a day like this. Ask the Fallerhof hosts which nearby guesthouse restaurant is serving dinner during your stay, confirm a table and its kitchen hours, then leave the car parked and walk over.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={maps("restaurants near Fallerhof Santa Maddalena Funes")}>Nearby dinner options & Maps reviews</PlaceLink></div>
    </div>

    <div className="border-y border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><CheckSquare className="size-5" />Before day 6 · don't forget</h3>
      <ul className="mt-5 space-y-3">{[
        "Confirm breakfast and check-out with your Fallerhof hosts",
        "Dry your walking shoes and keep hiking layers and waterproofs easy to reach",
        "Check tomorrow's mountain weather, road conditions and any bookings in your onward plan",
        "Save your onward route and accommodation arrival instructions before leaving",
        "Charge your phone and camera, refill water and pack a small snack",
        "Check that your luggage, purchases and travel documents are all back in the car",
      ].map((item) => <li key={item}><label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-soft"><input type="checkbox" className="mt-1 size-4 shrink-0 accent-primary" />{item}</label></li>)}</ul>
      <p className="mt-5 text-sm text-soft">Weather or timings changed? Ask the Trip agent in your trip room before adjusting your mountain plans.</p>
    </div>
  </section>;
}