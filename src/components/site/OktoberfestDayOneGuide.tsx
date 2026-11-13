import { ArrowUpRight, BedDouble, Car, CheckSquare, Clock3, ParkingCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import munichPhoto from "@/assets/oktoberfest-day1-munich.jpg";
import routeArtwork from "@/assets/oktoberfest-day1-map.jpg";

const maps = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const hotel = "KAM Hotel by WMM Hotels, Im Gewerbepark Unterallgäu 6, 87778 Stetten, Germany";
function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight /></a></Button>;
}

export function OktoberfestDayOneGuide() {
  return <section aria-label="Oktoberfest day 1 detailed guide" className="mt-8 text-ink">
    <header className="relative isolate overflow-hidden rounded-lg bg-ink">
      <img src={munichPhoto} alt="Oktoberfest fairground in Munich at dusk, an illustrative generated travel image" width={1536} height={768} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="france-day-photo-shade absolute inset-0" aria-hidden="true" />
      <div className="relative px-6 py-10 text-onink sm:px-10">
        <p className="text-xs font-semibold uppercase">Your guide · Day 01 · Germany</p>
        <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">An evening in Munich.</h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed">Oktoberfest, a little dancing and the first night on the road.</p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm"><span className="flex items-center gap-2"><Car className="size-4" />Arrive by early evening</span><span className="flex items-center gap-2"><BedDouble className="size-4" />KAM Hotel · Stetten</span></div>
      </div>
    </header>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Your evening at a glance</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Aim to reach Munich in the early evening, wherever you are starting from. This is a suggested rhythm, not our recorded arrival times. Leave room for traffic, flight delays and collecting the car.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["Early evening", "Arrive in Munich", "Park, leave luggage out of sight and take public transport to the festival."],
        ["Evening", "Explore Oktoberfest", "Wander between the tents, rides and stalls, enjoy the atmosphere and have something to eat."],
        ["Afterwards", "Drive to Stetten", "Return to the car and head west on the A96 to KAM Hotel. Allow around 1–1.5 hours driving from Munich, plus your return to the car. This is an estimate, not a live route time."],
      ].map(([time, title, note]) => <li key={title} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"><span className="text-sm font-semibold text-terracotta">{time}</span><div><h4 className="text-sm font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-2xl">By car or by plane</h3>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-soft">
        <p>We drove. If you fly into Munich, rent a car for the rest of the journey. You can collect it on arrival or the following morning if you are staying in Munich for the night.</p>
        <p><strong className="text-ink">Matching our overnight stop?</strong> Collect the car on arrival. KAM Hotel is in Stetten, near Mindelheim, not in Munich or its immediate outskirts. It suits the next day's westbound drive, but means a further journey after the festival. If you want to collect the car tomorrow or enjoy a beer tonight, choose accommodation in Munich instead and do not drive after drinking.</p>
        <p>Before booking, check pickup hours, the deposit and accepted payment card, cross-border permission for Liechtenstein, Switzerland and Italy, and your return location. Ask about insurance and any country-specific charges.</p>
      </div>
    </div>

    <div className="py-8">
      <h3 className="font-display text-2xl">The first evening's route</h3>
      <img src={routeArtwork} alt="Schematic day 1 route from Munich west along the A96 to Stetten and KAM Hotel" width={1536} height={1024} loading="lazy" className="mt-4 h-auto w-full rounded-lg" />
      <p className="mt-2 text-xs text-soft">Schematic artwork, not a road map. Use the navigation links for exact locations and current routes.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={maps("Theresienwiese Munich")}>Oktoberfest</PlaceLink><PlaceLink href={maps("P+R Heimeranplatz Munich")}>P+R Heimeranplatz</PlaceLink><PlaceLink href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent("P+R Heimeranplatz Munich")}&destination=${encodeURIComponent(hotel)}&travelmode=driving`}>Drive to KAM Hotel</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">01 · Oktoberfest, our way</h3>
      <div className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <p>We planned this trip so that our first evening would land us at Oktoberfest. Munich has plenty to enjoy without the festival too, so do not force the dates if it is not your thing. Check the official festival dates for the year you are travelling.</p>
        <p>Honestly, we think Oktoberfest is best with a group of friends. There were just two of us, with no reserved seats in the tents, so we went in for a look rather than a long evening at a table. That was our experience, not a promise of entry when tents are busy.</p>
        <p>Because we were driving, we did not drink at all. Oktoberfest without beer is probably not the classic version, and you certainly do not have to copy that part of our trip. What surprised us was how much more there was than beer: rides, stalls, gingerbread hearts and a brilliant atmosphere. We even danced without a drop of alcohol.</p>
        <p>We ate at the festival before heading to our accommodation. Keep the evening flexible, enjoy what catches your eye and leave while you still have energy for the drive.</p>
        <p><strong className="text-ink">One thing we genuinely regret? Not wearing a dirndl.</strong> We think dressing for the occasion would have made the whole experience even more special. If you have been wondering whether to wear one, our vote is yes. And eM does not even drink beer, but she would still happily go back to Oktoberfest.</p>
      </div>
      <div className="mt-5 border-l-2 border-sage pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Want a proper tent evening?</strong> Book directly with your chosen tent well ahead. A reservation is worth planning around, especially for a group. Walk-in access can be restricted when tents fill up. Bring some cash and check the current bag and security rules before leaving the car.</div>
      <div className="mt-5 flex flex-wrap gap-2"><PlaceLink href="https://www.oktoberfest.de/en">Official festival & dates</PlaceLink><PlaceLink href="https://www.oktoberfest.de/en/beer-tents">Choose a tent</PlaceLink></div>

      <h4 className="mt-7 flex items-center gap-2 font-semibold"><ParkingCircle className="size-5 text-royal" />Parking & getting to the festival</h4>
      <aside className="mt-4 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Check the garage closing time before leaving your car.</strong> Our garage closed at 21:00, but we only came back a little after 22:00. For a moment, we were genuinely worried we would not get the car out. Our story had a happy ending, but do not count on the same luck. Read and respect each garage's instructions, especially in the centre where parking can be tied to a supermarket's or another business's opening hours. Check both pedestrian access and vehicle exit hours, not just when you can drive in.</aside>
      <p className="mt-3 text-sm leading-relaxed text-soft">There is no visitor parking at Theresienwiese, and nearby streets are largely reserved for residents. A researched option is <strong className="text-ink">P+R Heimeranplatz</strong>, then U4/U5 towards Theresienwiese. Keep the car there while you walk around the festival and eat. It is a smaller P+R and can fill up, so check current availability, charges and the return service before committing. Choose another official P+R on your approach if needed. This is practical guidance, not the parking we personally used.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={maps("P+R Heimeranplatz Munich")}>Parking navigation</PlaceLink><PlaceLink href="https://www.oktoberfest.de/en/information/getting-there/parking-at-oktoberfest-parking-lots-in-and-around-munich">Official parking guidance</PlaceLink><PlaceLink href="https://www.mvv-muenchen.de/en/">Plan public transport</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">02 · A practical night in Stetten</h3>
      <p className="mt-4 text-sm leading-relaxed text-soft">We stayed at <strong className="text-ink">KAM Hotel by WMM Hotels</strong>. Travelling by car let us save on accommodation rather than pay for a central Munich room. Its position near the motorway suited us for heading straight back onto the road the following morning. Think of it as a road-trip stop, not a base for a late Munich night out.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">The official address is Im Gewerbepark Unterallgäu 6, 87778 Stetten. The hotel has free on-site parking and no staffed reception, with self check-in using a door code. Save the code from your email or SMS before arriving and check your booking's arrival instructions.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Parking:</strong> our car was parked directly in front of our room, about 1.5 metres from the door. Unloading could hardly have been easier. Use the hotel's own parking area and keep the car there overnight. The A96 transfer is normally a toll-free motorway drive for an ordinary passenger car, but fuel and parking or public transport in Munich still belong in Budget check.</p>
      <aside className="mt-4 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Travelling with small children?</strong> There may be noise from the main road nearby. Keep that in mind if your children are light sleepers and ask about room position before booking.</aside>
      <div className="mt-5 flex flex-wrap gap-2"><PlaceLink href="https://kam-hotel.de/en/">Official hotel</PlaceLink><PlaceLink href="https://www.booking.com/hotel/de/kam.html">Booking.com</PlaceLink><PlaceLink href={maps(hotel)}>Hotel & parking navigation</PlaceLink></div>
    </div>

    <div className="border-y border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><CheckSquare className="size-5" />Before tomorrow's drive</h3>
      <ul className="mt-5 space-y-3">{[
        "Have your rental car ready, or confirm tomorrow morning's pickup if staying in Munich",
        "Check cross-border permission and insurance for Liechtenstein, Switzerland and Italy",
        "Check whether your planned Swiss roads require a motorway vignette and whether the rental already has one",
        "Keep identity documents, driving licence and rental paperwork within reach",
        "Charge your phone, save the next route offline and pack water and an easy breakfast",
        "Check tomorrow's accommodation confirmation and parking, then get some sleep before a long driving day",
      ].map((item) => <li key={item}><label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-soft"><input type="checkbox" className="mt-1 size-4 shrink-0 accent-primary" />{item}</label></li>)}</ul>
      <p className="mt-5 text-sm text-soft">Plans changed or arriving late? Ask the Trip agent in your trip room before deciding how to adjust the evening.</p>
    </div>
  </section>;
}