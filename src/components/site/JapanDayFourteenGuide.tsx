import { ArrowUpRight, Clock3, Coffee, Flag, ShoppingBag, Sparkles, Trees, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JapanVenueLinks } from "@/components/site/JapanVenueLinks";
import { japanDayFourteenPlan as plan } from "@/lib/japan-day-fourteen-plan";
import artwork from "@/assets/japan-day14-map.png";

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const route = (a: string, b: string, mode = "transit") => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(a)}&destination=${encodeURIComponent(b)}&travelmode=${mode}`;
const copy = "mt-4 text-sm leading-relaxed text-soft";
const yen = (n: number) => n.toLocaleString("en-US");
const hotel = "THE LIVELY TOKYO AZABUJUBAN";
const ichinohashi = "Ichinohashi Park Higashiazabu 3-9";
const shiba = "Shiba Park 4-8 Shibakoen";
const roastery = "Starbucks Reserve Roastery Tokyo 2-19-23 Aobadai";
const donki = "MEGA Don Quijote Shibuya 28-6 Udagawacho";
function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm" className="h-auto min-h-9 max-w-full whitespace-normal text-left"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight className="shrink-0" /></a></Button>;
}
function Links({ children }: { children: React.ReactNode }) { return <div className="mt-3 flex flex-wrap gap-2">{children}</div>; }

export function JapanDayFourteenGuide() {
  const { roastery: r, cosmetics: c, kart: k, slovakPermit: sp } = plan;
  return <section aria-label="Japan day 14 detailed guide" className="mt-8 text-ink">
    <header>
      <p className="text-xs font-semibold uppercase text-terracotta">Your guide · Day 14 · Tokyo</p>
      <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Two parks, a river of little shops and the biggest Starbucks you will ever walk into.</h2>
      <p className={copy}>A slow Tokyo day on foot. Morning parks around Azabu and Shiba with Tokyo Tower in view, the Meguro River and its boutiques, coffee at the Roastery, a cosmetics haul in Shibuya and our secret tip for the day you should plan before you even fly.</p>
    </header>

    <aside className="my-8 border-l-2 border-terracotta pl-5">
      <h3 className="font-display text-2xl">What stayed with us</h3>
      <p className={copy}>We walked and ended up in the biggest Starbucks, where they also roast the coffee. It was very beautiful. Close to where we walked along the river there were great little shops. We also went cosmetics shopping in the biggest store we could find, the classic multi-storey kind. And one thing we really recommend. Get an international driving permit before you go, because we missed it. Driving a street kart through Tokyo is such a great idea for an activity. We wanted to do it, but we did not have the permits. So, secret tip, sort it out in advance.</p>
    </aside>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Your day at a glance</h3>
      <p className={copy}>A suggested rhythm, not our recorded times. Nothing today needs a booking unless you add the kart tour from section 05.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["09:00–09:30", "Ichinohashi Park", "Five minutes from the hotel, water, stone and green under the city."],
        ["09:30–10:30", "Walk to Shiba Park", "Through Higashi-Azabu into Minato Shibakoen, with Tokyo Tower ahead."],
        ["10:30–11:00", "Kamiyacho → Naka-Meguro", "A short walk to Kamiyacho, then the Hibiya Line straight to Naka-Meguro."],
        ["11:00–13:00", "Starbucks Reserve Roastery", "Four floors of coffee, bakery, tea and a cocktail bar above the river."],
        ["13:00–16:00", "Meguro River boutiques", "Small shops, vintage and homeware along both banks."],
        ["16:00–18:30", "MEGA Don Quijote Shibuya", "Two stops on the Tokyu Toyoko Line, then the beauty floor."],
        ["Evening", "Dinner in Naka-Meguro", "Back two stops for an izakaya or chicken hot pot by the river."],
      ].map(([time, title, note]) => <li key={title} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"><span className="text-sm font-semibold text-terracotta">{time}</span><div><h4 className="text-sm font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
      <img src={artwork} alt="Schematic Tokyo map with a walk from the Azabu-Juban hotel past Ichinohashi Park to Shiba Park and Tokyo Tower, the Hibiya Line from Kamiyacho to Naka-Meguro, the Meguro River with riverside boutiques and the Starbucks Reserve Roastery, the Tokyu Toyoko Line to MEGA Don Quijote Shibuya and two dinner stops in Naka-Meguro" width={1536} height={1024} className="mt-6 h-auto w-full rounded-lg" />
      <p className="mt-3 text-xs leading-relaxed text-soft">Schematic overview, not street navigation. The Roastery sits upstream of Naka-Meguro Station, so follow the map links below. Every leg today is by metro or on foot.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Trees className="size-6" />01 · Ichinohashi Park and Shiba Park</h3>
      <p className={copy}>Start right by the hotel. Ichinohashi Park is a small waterside park at the Azabu-Juban crossing, built around spring water, fountains and stepping stones, with the expressway passing high above. It is a strange and lovely Tokyo contrast, and calm in the morning before the lunchtime crowd.</p>
      <Links><PlaceLink href={route(hotel, ichinohashi, "walking")}>Hotel → Ichinohashi Park · walking</PlaceLink></Links>
      <p className={copy}>From there walk east for about 20 minutes through the quiet streets of Higashi-Azabu into Minato Shibakoen. Shiba Park is one of the oldest parks in Tokyo, with an artificial gorge, a small waterfall and old trees, and Tokyo Tower rising right above it. The lawns on the south side give the classic tower photo without any crowd.</p>
      <Links><PlaceLink href={route(ichinohashi, shiba, "walking")}>Ichinohashi → Shiba Park · walking</PlaceLink><PlaceLink href={maps("Tokyo Tower Shiba Park view")}>Tokyo Tower view · Maps</PlaceLink></Links>
      <p className={copy}><strong className="text-ink">On to the river.</strong> Walk about 10 minutes to Kamiyacho Station and take the Hibiya Line towards Naka-Meguro. It runs direct in roughly a quarter of an hour, no change needed.</p>
      <Links><PlaceLink href={route(shiba, "Naka-meguro Station")}>Shiba Park → Naka-Meguro · metro</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Coffee className="size-6" />02 · Starbucks Reserve Roastery Tokyo</h3>
      <p className={copy}>The biggest Starbucks we have ever been in, and they roast the coffee right there. A {r.floors}-floor building by Kengo Kuma on the bank of the Meguro River, with a copper cask rising through the middle, a Princi bakery, a tea floor and the Arriviamo cocktail bar on top. It was very beautiful.</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Hours.</strong> Open daily {r.opens}–{r.closes}, last order {r.lastOrder}, checked {plan.checkedOn}.</li>
        <li><strong className="text-ink">Entry tickets.</strong> When it gets busy the Roastery hands out numbered entry tickets. On weekends and holidays timed tickets open from {r.weekendTimedTicketsFrom} the same morning. A ticket gives you a place in line, not a seat, so a weekday late morning is the easiest.</li>
        <li><strong className="text-ink">What to order.</strong> The barrel-aged cold brew is the drink people come for. Cocktails on the top floor start from {r.cocktailsFrom}.</li>
        <li><strong className="text-ink">Seats.</strong> Go straight up and look for the terrace over the river.</li>
      </ul>
      <JapanVenueLinks id={r.venue} />
      <Links><PlaceLink href={route("Naka-meguro Station", roastery, "walking")}>Naka-Meguro → Roastery · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><ShoppingBag className="size-6" />03 · The little shops along the Meguro River</h3>
      <p className={copy}>Close to where we walked along the river there were great little shops. Both banks between Naka-Meguro Station and the Roastery are lined with small boutiques, vintage stores, homeware and stationery shops, bakeries and cafés. It is the gentle opposite of Shibuya. Cross the little bridges and zigzag between the banks, and wander a few lanes back from the water too.</p>
      <p className={copy}>Keep every receipt with your passport. Since 1 November 2026 tax is refunded at the airport, as explained on day 11.</p>
      <Links><PlaceLink href={route(roastery, "Naka-meguro Station", "walking")}>Roastery → Naka-Meguro along the river · walking</PlaceLink><PlaceLink href={maps("Meguro River Nakameguro shops")}>Meguro River shops · Maps</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Sparkles className="size-6" />04 · Cosmetics at MEGA Don Quijote Shibuya</h3>
      <p className={copy}>The biggest store we could find, the classic multi-storey kind. MEGA Don Quijote, or Donki, in Shibuya spans {c.floors}, stacked floor to ceiling with everything from snacks to electronics. Head to the {c.beautyFloor} beauty and healthcare floor for Japanese skincare, sheet masks, sunscreen and make-up at discount prices.</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Open 24 hours.</strong> It is busy at almost any hour, so if the afternoon is crowded you can come back after dinner.</li>
        <li><strong className="text-ink">Tax-free.</strong> Bring your passport. You pay the full price and claim the refund at the airport.</li>
        <li><strong className="text-ink">Getting there.</strong> From Naka-Meguro take the Tokyu Toyoko Line two stops to Shibuya, then walk about 5 minutes past the Scramble Crossing towards Udagawacho.</li>
      </ul>
      <JapanVenueLinks id={c.venue} />
      <Links><PlaceLink href={route("Naka-meguro Station", donki)}>Naka-Meguro → Don Quijote · metro</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Flag className="size-6" />05 · Secret tip. Street karts through Tokyo, sorted before you fly</h3>
      <p className={copy}>This is the one we missed. Driving a little street kart through Tokyo, past the Scramble Crossing and into Harajuku and Omotesando, is a brilliant idea for an afternoon. We wanted to do it, but we did not have international driving permits, and without them nobody drives. So arrange it at home, in advance.</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">The right permit.</strong> Japan only accepts the international driving permit issued under the {k.permitConvention} Convention, as an original paper booklet. A permit under the 1968 Vienna Convention is not valid in Japan. It is valid for {k.permitValidMonths} months from the date of issue.</li>
        <li><strong className="text-ink">From Slovakia.</strong> Ask any {sp.office} for the permit under the Geneva Convention of 1949. It is issued on the spot for €{sp.feeEur}. You need your valid driving licence and ID.</li>
        <li><strong className="text-ink">A few exceptions.</strong> Licences from {k.translationInsteadOfPermit.slice(0, -1).join(", ")} and {k.translationInsteadOfPermit.at(-1)} need an official Japanese translation from JAF instead of a permit.</li>
        <li><strong className="text-ink">On the day.</strong> Bring the original permit, your home licence and your passport. Drivers must be {k.minAge} or older, with zero alcohol. Without the right documents there is no ride and no refund.</li>
        <li><strong className="text-ink">The tour.</strong> Street Kart Shibuya runs a {k.courseMinutes}-minute guided course over the Scramble Crossing, through Harajuku and Omotesando, from ¥{yen(k.fromYen)} per person with costume and photos, booked through GetYourGuide with free cancellation up to {k.freeCancellationDays} days before. Arrive 30 minutes early for the document check and briefing. Ask about the insurance option, because damage without it can cost ¥{yen(k.damageExcessYen)} or more.</li>
        <li><strong className="text-ink">Good to know.</strong> You drive on public roads and keep left. The costumes are generic heroes and animals, not official game characters.</li>
      </ul>
      <JapanVenueLinks id={k.venue} />
      <Links><PlaceLink href="https://www.keishicho.metro.tokyo.lg.jp/multilingual/english/traffic_safety/drivers_licenses/index.files/kokusaimenkyo_english.pdf">Tokyo police · valid permits</PlaceLink><PlaceLink href="https://www.slovensko.sk/sk/zivotne-situacie/zivotna-situacia/_vodicsky-preukaz-a-vodicske-o">slovensko.sk · international permit</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><UtensilsCrossed className="size-6" />06 · Dinner back in Naka-Meguro</h3>
      <p className={copy}>Two evenings by the river, two stops back from Shibuya. Scores are dated Google Maps snapshots.</p>
      <h4 className="mt-6 font-display text-2xl">Nakameguro Izakaya Yanosuke</h4>
      <p className={copy}>A warm, lively izakaya on a second floor up the river, with small seasonal plates, sashimi and grilled dishes to share. One of the best-rated tables in the neighbourhood, so book through Tabelog, especially at weekends.</p>
      <JapanVenueLinks id="yanosukeNakameguro" />
      <h4 className="mt-6 font-display text-2xl">Hashidaya Nakameguro</h4>
      <p className={copy}>An old wooden house under the cherry trees on the Meguro River, all about chicken. Order the creamy Hakata-style mizutaki hot pot or the famous oyakodon, and ask for a table upstairs looking over the water. It opens at {plan.hashidaya.opens}, is closed on {plan.hashidaya.closedOn} and reservations are recommended.</p>
      <JapanVenueLinks id="hashidayaNakameguro" />
      <p className={copy}><strong className="text-ink">Home.</strong> From Naka-Meguro take the Hibiya Line to Roppongi, then one stop on the Oedo Line to Azabu-Juban, or walk the last 15 minutes downhill.</p>
      <Links><PlaceLink href={route("Naka-meguro Station", hotel)}>Naka-Meguro → hotel · metro</PlaceLink></Links>
    </div>

    <div className="py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Checklist for tomorrow</h3>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-soft">
        <li className="flex gap-2"><CheckSquareIcon />Pack the cosmetics carefully and keep liquids out of your hand luggage for the flight home.</li>
        <li className="flex gap-2"><CheckSquareIcon />Keep all tax-free receipts together with your passport.</li>
        <li className="flex gap-2"><CheckSquareIcon />Top up your IC card and charge your phone and power bank.</li>
        <li className="flex gap-2"><CheckSquareIcon />Confirm tomorrow's tickets, bookings and opening hours.</li>
      </ul>
    </div>
  </section>;
}

function CheckSquareIcon() { return <span className="mt-0.5 inline-block size-4 shrink-0 rounded-sm border border-terracotta" aria-hidden="true" />; }
