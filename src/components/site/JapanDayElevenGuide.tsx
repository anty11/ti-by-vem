import { ArrowUpRight, Clock3, Coffee, Luggage, ShoppingBag, Sunset, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JapanVenueLinks } from "@/components/site/JapanVenueLinks";
import { japanDayElevenPlan as plan } from "@/lib/japan-day-eleven-plan";
import artwork from "@/assets/japan-day11-map.png";

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const route = (a: string, b: string, mode = "transit") => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(a)}&destination=${encodeURIComponent(b)}&travelmode=${mode}`;
const copy = "mt-4 text-sm leading-relaxed text-soft";
const yen = (n: number) => n.toLocaleString("en-US");
const sky = "SHIBUYA SKY Shibuya Scramble Square";
function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm" className="h-auto min-h-9 max-w-full whitespace-normal text-left"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight className="shrink-0" /></a></Button>;
}
function Links({ children }: { children: React.ReactNode }) { return <div className="mt-3 flex flex-wrap gap-2">{children}</div>; }

export function JapanDayElevenGuide() {
  const { shibuyaSky: s, taxFree } = plan;
  return <section aria-label="Japan day 11 detailed guide" className="mt-8 text-ink">
    <header>
      <p className="text-xs font-semibold uppercase text-terracotta">Your guide · Day 11 · Tokyo</p>
      <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Shopping bags, warm donuts and Tokyo turning gold.</h2>
      <p className={copy}>A Hawaiian breakfast, a long walk from Harajuku down to Shibuya with plenty of shopping, the softest donuts in the city, and sunset on the open rooftop of SHIBUYA SKY with a glass of prosecco until the lights take over.</p>
    </header>

    <aside className="my-8 border-l-2 border-terracotta pl-5">
      <h3 className="font-display text-2xl">What stayed with us</h3>
      <p className={copy}>As a woman who is 160 cm tall, I shopped so amazingly here that my best advice is this: bring old clothes you can leave behind, and fly home with a suitcase full of Japanese cosmetics and clothes. The donuts were top, you have to try them. And SHIBUYA SKY at sunset, with prosecco, waiting until it was completely dark, was one of those evenings you keep.</p>
    </aside>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Your day at a glance</h3>
      <p className={copy}>A suggested rhythm, not our recorded times. The only fixed point is your SHIBUYA SKY slot, so build the day backwards from sunset.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["08:30–09:30", "Breakfast at Honolulu Coffee", "Acai bowls and Hawaiian lattes."],
        ["10:00–11:00", "I'm donut? & Takeshita Street", "Donuts at opening, then the busiest little street in Tokyo."],
        ["11:00–14:00", "Harajuku & Jingumae", "Cosmetics, boutiques and the vintage shops of Cat Street."],
        ["14:00–16:00", "Shibuya shopping", "Department stores, designer secondhand and the crossing."],
        ["Sunset", "SHIBUYA SKY", "Rooftop, prosecco and the city going dark."],
        ["Evening", "Dinner in the same tower", "Three options on the 12th floor, listed below."],
      ].map(([time, title, note]) => <li key={title} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"><span className="text-sm font-semibold text-terracotta">{time}</span><div><h4 className="text-sm font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
      <img src={artwork} alt="Schematic Tokyo map with breakfast at Honolulu Coffee in Azabu-Juban, the subway to Harajuku Station, then a walk past Takeshita Street, I'm donut?, @cosme TOKYO, Jingumae and Cat Street, RAGTAG Shibuya and Shibuya Crossing to SHIBUYA SKY at sunset" width={1536} height={1024} className="mt-6 h-auto w-full rounded-lg" />
      <p className="mt-3 text-xs leading-relaxed text-soft">Schematic overview, not street navigation. Harajuku Station to Shibuya Crossing is about 2 km on foot.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Coffee className="size-6" />01 · Breakfast at Honolulu Coffee</h3>
      <p className={copy}>This breakfast was really great and we recommend it. Honolulu Coffee is a café from Hawaii with acai bowls, fruit, pastries and its famous Hawaiian latte with coconut and macadamia. At the time we did not yet understand why we kept spotting little hints of Hawaii all over Tokyo. A day later, it all made sense.</p>
      <p className={copy}>We went to the Azabu-Juban branch, a short walk from THE LIVELY. It opens at 08:00. If you stay elsewhere, there is another branch in Harajuku right where today's walk begins.</p>
      <JapanVenueLinks id={plan.breakfastVenue} />
      <Links><PlaceLink href={route("HONOLULU COFFEE AZABUJUBAN 1-11-11 Azabujuban", "Harajuku Station")}>Azabu-Juban → Harajuku</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-3xl">02 · I'm donut? and Takeshita Street</h3>
      <p className={copy}>Top donuts, you have to try them. I'm donut? makes nama donuts, freshly made dough so soft it almost melts. The plain one is the favourite, from about ¥{plan.imDonut.plainYen}, with matcha and chocolate close behind. The Harajuku shop opens at {plan.imDonut.opens}, the queue grows quickly and popular flavours sell out in the afternoon, so go early.</p>
      <JapanVenueLinks id="imDonutHarajuku" />
      <p className={copy}>Right opposite, Takeshita Street is a narrow, loud, joyful lane of crêpes, candy, costume shops and teenage fashion. Walk it once for the energy, then slip out the far end towards Omotesando.</p>
      <Links><PlaceLink href={maps("Takeshita Street Harajuku")}>Takeshita Street · Maps</PlaceLink><PlaceLink href={route("Harajuku Station", "Takeshita Street Harajuku", "walking")}>Station → Takeshita · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><ShoppingBag className="size-6" />03 · Shopping from Jingumae to Shibuya</h3>
      <p className={copy}>Walk south through Jingumae and along Cat Street, the quiet lane between Harajuku and Shibuya, then into Shibuya itself. A few places worth your time, mostly brands and formats you will not find at home.</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">@cosme TOKYO, Harajuku.</strong> A huge cosmetics store built around Japan's best-known beauty ranking, with skincare, sunscreen and makeup you can test before you buy.</li>
        <li><strong className="text-ink">MEGA Don Quijote Shibuya and Shibuya Loft.</strong> Drugstore beauty, face masks, snacks and clever little things at good prices. Don Quijote is open around the clock.</li>
        <li><strong className="text-ink">Shibuya 109.</strong> Around 100 shops of young women's fashion over ten floors. Japanese sizing suits petite figures beautifully. For taller women it is harder, so look for bags, shoes and accessories instead.</li>
        <li><strong className="text-ink">Shibuya PARCO.</strong> Designer and independent Japanese labels on the fashion floors.</li>
        <li><strong className="text-ink">RAGTAG Shibuya.</strong> Designer secondhand over several floors, with women's mode and luxury labels upstairs and bags, shoes and accessories on the ground floor. A vintage designer handbag from here is never a bad idea.</li>
        <li><strong className="text-ink">Cat Street vintage.</strong> Small vintage and select shops between Harajuku and Shibuya, ideal for an unplanned hour.</li>
      </ul>
      <JapanVenueLinks id="ragtagShibuya" />
      <Links><PlaceLink href={maps("@cosme TOKYO Harajuku")}>@cosme TOKYO · Maps</PlaceLink><PlaceLink href={maps("Cat Street Harajuku")}>Cat Street · Maps</PlaceLink><PlaceLink href={maps("SHIBUYA109")}>Shibuya 109 · Maps</PlaceLink><PlaceLink href={maps("MEGA Don Quijote Shibuya")}>MEGA Don Quijote · Maps</PlaceLink><PlaceLink href={maps("Shibuya PARCO")}>Shibuya PARCO · Maps</PlaceLink></Links>
      <p className={copy}><strong className="text-ink">Tax-free has changed.</strong> From {taxFree.refundAtAirportFrom}, visitors pay full price in shops and claim the consumption tax back at the airport when leaving Japan. Spend at least ¥{yen(taxFree.minimumPerShopPerDayYen)} in one shop on one day, carry your passport and keep every receipt.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Luggage className="size-6" />04 · Our luggage tip, a suitcase inside a suitcase</h3>
      <p className={copy}>Plan for the shopping before you leave home. Pack a soft empty bag inside your suitcase, the way we did, bring old clothes and shoes you are happy to leave behind, and book the highest checked luggage allowance your airline offers. You will need every kilo.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Sunset className="size-6" />05 · Sunset at SHIBUYA SKY</h3>
      <p className={copy}>The open-air rooftop of Shibuya Scramble Square, 229 metres above the crossing, with a 360 degree view over Tokyo and, on clear days, Mt. Fuji to the west. Book ahead for a slot around sunset, find your spot on the sunset side, have a glass of prosecco and stay until it is completely dark. It is worth waiting for the full blackout, when the whole city switches on beneath you.</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Tickets.</strong> Timed entry every {s.slotMinutes} minutes. Online tickets cost ¥{yen(s.webYenBefore15)} for entry before 15:00 and ¥{yen(s.webYenFrom15)} from 15:00, per adult, with counter tickets ¥{s.counterSurchargeYen} more if any remain, checked {plan.checkedOn}.</li>
        <li><strong className="text-ink">Book the moment they open.</strong> Sales start at midnight Japan time {s.salesOpenDaysAhead} days before your visit, and sunset slots go first. Choose an entry about 30 to 40 minutes before sunset, around 16:00 in winter and later in summer.</li>
        <li><strong className="text-ink">On the rooftop.</strong> Bags, hats and large items go into lockers before the roof. Bring only your phone, and a warm layer, as the wind is strong up there. If the roof closes for weather, online tickets can be cancelled free on the day.</li>
        <li><strong className="text-ink">Hours.</strong> Open until {s.closes}, last admission {s.lastAdmission}. There is no time limit once you are in, but no re-entry.</li>
      </ul>
      <JapanVenueLinks id="shibuyaSky" />
      <Links><PlaceLink href={route("Shibuya Crossing", sky, "walking")}>Crossing → SHIBUYA SKY · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><UtensilsCrossed className="size-6" />06 · Dinner after dark</h3>
      <p className={copy}>Three options on the 12th floor of the same tower, so you only take the lift down. Scores are dated Google Maps snapshots.</p>
      <h4 className="mt-6 font-display text-2xl">Moheji</h4>
      <p className={copy}>Monjayaki, Tokyo's own runny cousin of okonomiyaki, cooked on the hotplate at your table, with a view over Shibuya. Hugely popular, so expect a wait at peak times. Open 11:00–23:00.</p>
      <JapanVenueLinks id="mohejiShibuya" />
      <h4 className="mt-6 font-display text-2xl">Sushi Matsue</h4>
      <p className={copy}>Fish from Toyosu Market in a calm counter setting. The Keyaki set of eleven pieces with soup costs ¥4,620 and omakase courses start at ¥8,600, with a 10% service charge at dinner, according to the restaurant's menu checked {plan.checkedOn}. Last orders 21:30, reservations online.</p>
      <JapanVenueLinks id="matsueShibuya" />
      <h4 className="mt-6 font-display text-2xl">Shabu Shabu Tsukada</h4>
      <p className={copy}>One small hot pot per person, with A5 wagyu cooked as shabu-shabu or sukiyaki, overlooking the night lights. Sets start at ¥2,850, with a Kobe beef course at ¥5,850. Dinner from 17:00.</p>
      <JapanVenueLinks id="tsukadaShibuya" />
      <Links><PlaceLink href={route(sky, "THE LIVELY TOKYO AZABUJUBAN")}>Shibuya → hotel</PlaceLink></Links>
    </div>

    <div className="py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Checklist for tomorrow</h3>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-soft">
        <li className="flex gap-2"><CheckSquareIcon />Keep all tax-free receipts together with your passport for the airport refund.</li>
        <li className="flex gap-2"><CheckSquareIcon />Repack today's shopping and check how much room is left in your suitcases.</li>
        <li className="flex gap-2"><CheckSquareIcon />Top up your IC card and charge your phone and power bank.</li>
        <li className="flex gap-2"><CheckSquareIcon />Confirm tomorrow's tickets and opening hours.</li>
      </ul>
    </div>
  </section>;
}

function CheckSquareIcon() { return <span className="mt-0.5 inline-block size-4 shrink-0 rounded-sm border border-terracotta" aria-hidden="true" />; }
