import { ArrowUpRight, BedDouble, CheckSquare, Clock3, ParkingCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import chaletPhoto from "@/assets/oktoberfest-day4-chalet.jpg";
import stayArtwork from "@/assets/oktoberfest-day4-map.jpg";

const hotelMaps = "https://www.google.com/maps/search/?api=1&query=Chalet+al+Foss+Alp+Resort+Vermiglio";

function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight /></a></Button>;
}

export function OktoberfestDayFourGuide() {
  return <section aria-label="Oktoberfest day 4 detailed guide" className="mt-8 text-ink">
    <header className="relative isolate overflow-hidden rounded-lg bg-ink">
      <img src={chaletPhoto} alt="AI-edited illustration based on Chalet al Foss's official pool photograph, showing its Alpine setting in autumn" width={1536} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="france-day-photo-shade absolute inset-0" aria-hidden="true" />
      <div className="relative px-6 py-10 text-onink sm:px-10">
        <p className="text-xs font-semibold uppercase">Your guide · Day 04 · Italy</p>
        <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Absolutely nothing. Beautifully.</h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed">Breakfast worth reliving, hours of wellness and a whole day to stay exactly where you are.</p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm"><span>No driving · no sightseeing</span><span className="flex items-center gap-2"><BedDouble className="size-4" />Chalet al Foss · second night</span></div>
      </div>
    </header>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />A day without a timetable</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">This day might surprise you: we did absolutely nothing. Nothing in the sightseeing sense, anyway. The order below is a gentle rhythm, not our recorded times or a schedule you need to follow. Apart from anything you have booked, leave the day open.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["Morning", "Take your time over breakfast", "This was one of those breakfasts we would happily experience all over again."],
        ["The rest of the day", "Photos, wellness & mountain views", "We spent several hours enjoying the wellness and could not resist taking plenty of photos."],
        ["Whenever it suits", "A little drink, of course", "There had to be a drink in there too. No extra outing required."],
        ["Evening", "Dinner at the hotel", "We tried the Italian dining option this time, then stayed for a second night at Chalet al Foss."],
      ].map(([time, title, note]) => <li key={title} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"><span className="text-sm font-semibold text-terracotta">{time}</span><div><h4 className="text-sm font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
    </div>

    <div className="py-8">
      <h3 className="font-display text-2xl">One place, all day</h3>
      <img src={stayArtwork} alt="Schematic topographic location artwork of Chalet al Foss beside Vermiglio in Val di Sole, with no day 4 transfers" width={1536} height={1024} loading="lazy" className="mt-4 h-auto w-full rounded-lg" />
      <p className="mt-2 text-xs text-soft">Schematic location artwork, not a road map. There are no planned transfers today.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href={hotelMaps}>Hotel location</PlaceLink><PlaceLink href="https://www.hotelchaletalfoss.it/en/">Official hotel</PlaceLink><PlaceLink href="https://www.booking.com/hotel/it/chalet-al-foss.html">Booking.com</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">01 · Yes, we came as friends</h3>
      <div className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <p>Chalet al Foss is a small boutique hotel, so <strong className="text-ink">book your stay well ahead</strong>. It had been on our bucket list for a long time, and having a full day here was very much part of the point of this trip.</p>
        <p>One thing we should say: <strong className="text-ink">we were two friends, not a couple.</strong> The hotel leans heavily into romance, picture-perfect moments and proposal-style experiences. You have probably already spotted it on social media. But that did not stop us enjoying a beautiful friends' getaway.</p>
        <p>We have to admit that a good part of our day also went into taking photos. It was hard to resist. Still, leave yourself time to enjoy being there without the camera too.</p>
      </div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">02 · Breakfast, wellness & a little drink</h3>
      <p className="mt-5 text-sm leading-relaxed text-soft"><strong className="text-ink">The breakfast was wonderful.</strong> Some things really are worth experiencing again, and this was one of them. Give it time rather than treating it as a quick stop before the next activity.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Then came several hours of wellness, plenty of photos and, naturally, a little drink. Beyond that, the whole day was simply a perfect, relaxing break. We did not add a hike, a town visit or another drive. You do not have to earn your rest by squeezing in an outing.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Check the current wellness opening hours and any particular experience you want directly with the hotel. Bring swimwear and a warm layer for moving between the water and the mountain air. Check which meals, drinks and extras your booking includes before ordering.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href="https://www.hotelchaletalfoss.it/en/h2o-alpin-spa">Official wellness information</PlaceLink></div>
    </div>

    <aside className="border-y border-border py-8">
      <h3 className="font-display text-2xl">Book experiences before you arrive</h3>
      <p className="mt-4 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Do not leave your chosen hotel experiences until check-in.</strong> Plan and book them ahead, ideally before arriving. Slots are limited and the experience you have your heart set on may already be sold out. Contact the hotel with your dates, confirm the time and price, and keep the confirmation handy.</p>
      <p className="mt-4 text-sm leading-relaxed text-soft">This is advice for individually bookable experiences, not a claim that ordinary wellness access requires a timed slot. Special setups, dining experiences and other extras may have separate conditions and charges. Choose what genuinely appeals to you, rather than filling the whole rest day with bookings.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href="https://www.hotelchaletalfoss.it/en/experience">Explore hotel experiences</PlaceLink><PlaceLink href="https://www.hotelchaletalfoss.it/en/all-day-experience">Experience reservations</PlaceLink></div>
    </aside>

    <div className="py-8">
      <h3 className="font-display text-3xl">03 · Dinner, with our honest verdict</h3>
      <p className="mt-5 text-sm leading-relaxed text-soft">We ate at the hotel again, this time in the Italian restaurant. The night before, we had chosen the classic dining option. <strong className="text-ink">The Italian dinner disappointed us a little.</strong> That is our personal impression of that evening, not a verdict on every meal here. Apart from that, the whole day was exactly the relaxing escape we wanted.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Confirm your dinner choice, table time and what your meal plan includes with the hotel. A special dining experience is a separate booking, so do not assume it comes with an ordinary dinner reservation.</p>
      <div className="mt-4 flex flex-wrap gap-2"><PlaceLink href="https://www.hotelchaletalfoss.it/en/restaurants">Hotel dining</PlaceLink><PlaceLink href={hotelMaps}>Google Maps & current hotel reviews</PlaceLink></div>
      <h4 className="mt-6 flex items-center gap-2 font-semibold"><ParkingCircle className="size-5 text-royal" />Leave the car where reception directed you</h4>
      <p className="mt-3 text-sm leading-relaxed text-soft">Keep the car in the guest parking space confirmed with reception at Chalet al Foss, Via Nazionale 2/A, Vermiglio. Breakfast, wellness, drinks and dinner are all at the hotel today. There is no need to move the car or find separate parking for each part of the day. Confirm the second night's parking arrangements rather than assuming any space or charge.</p>
    </div>

    <div className="border-y border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><CheckSquare className="size-5" />Before day 5 · don't forget</h3>
      <ul className="mt-5 space-y-3">{[
        "Check tomorrow's mountain weather and the Seceda cable car's current operating dates and times",
        "Have hiking shoes with grip, a warm layer and a waterproof jacket ready",
        "Dry your swimwear and pack your hotel belongings before tomorrow's departure",
        "Confirm breakfast, check-out and any experience you have already booked for tomorrow morning",
        "Save tomorrow's route and check your next accommodation's arrival and parking instructions",
        "Charge your phone and camera, and pack water for the mountain day",
      ].map((item) => <li key={item}><label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-soft"><input type="checkbox" className="mt-1 size-4 shrink-0 accent-primary" />{item}</label></li>)}</ul>
      <p className="mt-5 text-sm text-soft">Plans changed? Ask the Trip agent in your trip room before adjusting tomorrow's mountain day.</p>
    </div>
  </section>;
}