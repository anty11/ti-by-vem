import { ArrowUpRight, Clock3, Coffee, Smartphone, Sparkles, Ticket, TrainFront, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JapanVenueLinks } from "@/components/site/JapanVenueLinks";
import { japanDayFifteenPlan as plan } from "@/lib/japan-day-fifteen-plan";
import artwork from "@/assets/japan-day15-map.png";

const route = (a: string, b: string, mode = "transit") => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(a)}&destination=${encodeURIComponent(b)}&travelmode=${mode}`;
const copy = "mt-4 text-sm leading-relaxed text-soft";
const yen = (n: number) => n.toLocaleString("en-US");
const hotel = "THE LIVELY TOKYO AZABUJUBAN";
const tdh = "Tokyo Disneyland Hotel 29-1 Maihama";
const park = "Tokyo Disneyland 1-1 Maihama Urayasu";
function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm" className="h-auto min-h-9 max-w-full whitespace-normal text-left"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight className="shrink-0" /></a></Button>;
}
function Links({ children }: { children: React.ReactNode }) { return <div className="mt-3 flex flex-wrap gap-2">{children}</div>; }

export function JapanDayFifteenGuide() {
  const { tickets: t, premierAccess: pa, sherwood: s, dreamersLounge: d, crystalPalace: cp } = plan;
  return <section aria-label="Japan day 15 detailed guide" className="mt-8 text-ink">
    <header>
      <p className="text-xs font-semibold uppercase text-terracotta">Your guide · Day 15 · Tokyo Disneyland</p>
      <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">One whole day for Disney, starting with breakfast by the castle.</h2>
      <p className={copy}>Breakfast at Tokyo Disneyland Hotel, a few steps from the gates, then a full day in the park from opening to the evening parade. Here is how to book it, what to buy in the app and how to make the day feel easy.</p>
    </header>

    <aside className="my-8 border-l-2 border-terracotta pl-5">
      <h3 className="font-display text-2xl">What stayed with us</h3>
      <p className={copy}>We set aside one whole day for this experience and it was worth it. We started with breakfast in the special hotel right by Disneyland, Tokyo Disneyland Hotel, and it was great. We recommend booking it ahead as an experience of its own.</p>
    </aside>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Your day at a glance</h3>
      <p className={copy}>A suggested rhythm, not our recorded times. Check the park calendar for your date, because hours change through the year. On our checked dates the park was open {t.parkHours}.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["06:30–07:30", "Azabu-Juban → Maihama", "About 50 minutes by metro and the JR Keiyo Line."],
        ["07:30–08:30", "Breakfast at Sherwood Garden", "Buffet by the Victorian garden of Tokyo Disneyland Hotel."],
        ["08:30–09:00", "Walk to the gates", "The hotel sits right by the entrance, so you join the line early and relaxed."],
        ["09:00–12:00", "The big rides first", "Buy your first Premier Access as soon as you are inside."],
        ["12:00–18:00", "Lands, shows and snacks", "Eat early or late to skip the lunch rush."],
        ["Evening", "Parade and souvenirs", "The Electrical Parade, then World Bazaar on the way out."],
      ].map(([time, title, note]) => <li key={title} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"><span className="text-sm font-semibold text-terracotta">{time}</span><div><h4 className="text-sm font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
      <img src={artwork} alt="Schematic map from the Azabu-Juban hotel by the Oedo and Yurakucho Lines to Shin-Kiba, then the JR Keiyo Line along Tokyo Bay to Maihama, with Tokyo Disneyland, Tokyo Disneyland Hotel and the Disney Resort Line monorail loop" width={1536} height={1024} className="mt-6 h-auto w-full rounded-lg" />
      <p className="mt-3 text-xs leading-relaxed text-soft">Schematic overview, not street navigation. Every leg today is by metro, train or on foot.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Coffee className="size-6" />01 · Breakfast at Sherwood Garden, Tokyo Disneyland Hotel</h3>
      <p className={copy}>Our tip for making the day feel special from the very first minute. Tokyo Disneyland Hotel is the grand Victorian-style hotel right by the park entrance, and Sherwood Garden Restaurant is its big buffet restaurant facing the formal garden. You do not need to stay at the hotel. We came from THE LIVELY and it was great.</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Book it as an experience.</strong> Reserve a breakfast time through Priority Seating on the Tokyo Disney Resort website or app. Bookings open at {s.bookingOpens} of your date, Japan time.</li>
        <li><strong className="text-ink">Price and hours.</strong> ¥{yen(s.breakfastAdultYen)} per adult, ¥{yen(s.breakfastAdultFromApril2027Yen)} from 1 April 2027, served {s.breakfastHours}, checked {plan.checkedOn}.</li>
        <li><strong className="text-ink">Timing.</strong> Take a slot around 07:30. You eat calmly and still reach the gates before opening.</li>
        <li><strong className="text-ink">If Sherwood is full.</strong> Dreamers Lounge in the same hotel lobby serves a smaller breakfast buffet for ¥{yen(d.breakfastAdultYen)}, {d.breakfastHours}. It cannot be booked ahead and guests of certain concierge rooms go first, so treat it as a backup.</li>
      </ul>
      <JapanVenueLinks id={s.venue} />
      <JapanVenueLinks id={s.hotel} />
      <Links><PlaceLink href={route("Maihama Station", tdh, "walking")}>Maihama → Tokyo Disneyland Hotel · walking</PlaceLink><PlaceLink href={route(tdh, park, "walking")}>Hotel → park entrance · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Ticket className="size-6" />02 · Tickets, bought before you fly</h3>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Dated and park-specific.</strong> A 1-Day Passport names one date and one park. Tokyo Disneyland and Tokyo DisneySea are separate, so pick Disneyland.</li>
        <li><strong className="text-ink">Price.</strong> Adults pay ¥{yen(t.adultFromYen)} to ¥{yen(t.adultToYen)} depending on the date. Weekends, holidays and the Christmas season sit at the top.</li>
        <li><strong className="text-ink">When to buy.</strong> Sales open at {t.salesOpen}. Popular dates sell out, and no tickets are sold at the gate.</li>
      </ul>
      <JapanVenueLinks id="tokyoDisneyland" />
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Smartphone className="size-6" />03 · The app and Premier Access</h3>
      <p className={copy}>Download the Tokyo Disney Resort App at home, create an account and link both tickets. Everything that saves time today happens in the app, and only once you are inside the park.</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Paid line skips.</strong> The free Priority Pass ended on {pa.freePriorityPassEnded}, so Disney Premier Access is now the only way to shorten a queue. You buy it per ride with a return time.</li>
        <li><strong className="text-ink">Buy this one first.</strong> Enchanted Tale of Beauty and the Beast costs ¥{yen(pa.beautyAndBeastYen)} and sells out early. Buy it the moment you pass the gates.</li>
        <li><strong className="text-ink">Worth adding.</strong> The Happy Ride with Baymax, Splash Mountain and Big Thunder Mountain at ¥{yen(pa.baymaxYen)} each.</li>
        <li><strong className="text-ink">Parades with a seat.</strong> A reserved viewing area for the Electrical Parade Dreamlights costs ¥{yen(pa.electricalParadeYen)}. During Christmas, from 11 November to 25 December, the daytime parade Toys Wondrous Christmas! costs ¥{yen(pa.christmasParadeYen)}.</li>
        <li><strong className="text-ink">Free extras.</strong> Some shows and character greetings use a free Entry Request, a lottery you can try once per venue each day.</li>
        <li><strong className="text-ink">Good to know.</strong> Tomorrowland is being rebuilt and Space Mountain stays closed until its new version opens, planned for {plan.spaceMountainClosedUntil}.</li>
      </ul>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Sparkles className="size-6" />04 · Our recommendations for the day</h3>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Give it the whole day.</strong> We reserved a full day and it was worth it. Do not squeeze anything else in.</li>
        <li><strong className="text-ink">Be at the gates before opening.</strong> The first hour has the shortest lines of the day, so ride the big ones then.</li>
        <li><strong className="text-ink">Eat off-peak.</strong> Lunch around 11:00 or after 14:00 saves a lot of waiting. Some counters, like Great American Waffle Co., only take orders through Disney Mobile Order in the app.</li>
        <li><strong className="text-ink">Try the popcorn.</strong> Each land sells its own flavour, and the collectible buckets are a souvenir in themselves.</li>
        <li><strong className="text-ink">Parades fill up early.</strong> Japanese guests sit down well before a parade starts. Either join them with time to spare or book a seat with Premier Access.</li>
        <li><strong className="text-ink">Shop in the afternoon.</strong> The World Bazaar shops are packed at closing time. Buy earlier and leave your bags in the lockers by the main entrance.</li>
        <li><strong className="text-ink">Power.</strong> The app runs all day, so bring a full power bank.</li>
      </ul>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><UtensilsCrossed className="size-6" />05 · Where to eat inside the park</h3>
      <p className={copy}>Both take Priority Seating, which opens at {plan.blueBayou.bookingOpens} of your date. Scores are dated Google Maps snapshots.</p>
      <h4 className="mt-6 font-display text-2xl">Blue Bayou Restaurant</h4>
      <p className={copy}>The most romantic table in the park, inside Pirates of the Caribbean, where it is always twilight over the bayou and fireflies glow in the dark. French and Creole-style dishes with table service. Perfect for an early dinner before the parade.</p>
      <JapanVenueLinks id="blueBayou" />
      <h4 className="mt-6 font-display text-2xl">Crystal Palace Restaurant</h4>
      <p className={copy}>A big buffet in a three-domed Victorian glass house at the end of World Bazaar. Adults pay ¥{yen(cp.adultBuffetYen)}, and from 26 December 2026 to 31 March 2027 a special buffet costs ¥{yen(cp.adultSpecialBuffetFromDec26Yen)}. Seating usually lasts about {cp.buffetMinutes} minutes.</p>
      <JapanVenueLinks id="crystalPalace" />
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><TrainFront className="size-6" />06 · Getting there and back</h3>
      <p className={copy}>From Azabu-Juban take the Toei Oedo Line to Tsukishima, change to the Yurakucho Line for Shin-Kiba, then take the JR Keiyo Line to Maihama. It takes about 50 minutes. From Maihama Station it is a short walk to Tokyo Disneyland Hotel and the park, or one stop on the Disney Resort Line monorail.</p>
      <p className={copy}>If you go via Tokyo Station instead, allow 10 to 15 minutes underground to reach the Keiyo Line platforms, which are far from the rest of the station. After the evening parade the trains are full, so wait a little or ride back the same way.</p>
      <Links><PlaceLink href={route(hotel, "Maihama Station")}>Hotel → Maihama · metro and JR</PlaceLink><PlaceLink href={route("Maihama Station", hotel)}>Maihama → hotel · metro and JR</PlaceLink></Links>
    </div>

    <div className="py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Checklist for tomorrow</h3>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-soft">
        <li className="flex gap-2"><CheckSquareIcon />Unpack today's souvenirs and check how much room is left in your suitcases.</li>
        <li className="flex gap-2"><CheckSquareIcon />Keep all tax-free receipts together with your passport.</li>
        <li className="flex gap-2"><CheckSquareIcon />Charge your phone and power bank after a full day on the app.</li>
        <li className="flex gap-2"><CheckSquareIcon />Confirm tomorrow's tickets, bookings and opening hours.</li>
      </ul>
    </div>
  </section>;
}

function CheckSquareIcon() { return <span className="mt-0.5 inline-block size-4 shrink-0 rounded-sm border border-terracotta" aria-hidden="true" />; }
