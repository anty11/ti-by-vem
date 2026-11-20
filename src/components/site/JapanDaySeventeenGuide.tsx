import { ArrowUpRight, Clock3, Coffee, Gift, ShoppingBag, Sparkles, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JapanVenueLinks } from "@/components/site/JapanVenueLinks";
import { japanDaySeventeenPlan as plan } from "@/lib/japan-day-seventeen-plan";
import artwork from "@/assets/japan-day17-map.png";

const route = (a: string, b: string, mode = "transit") => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(a)}&destination=${encodeURIComponent(b)}&travelmode=${mode}`;
const copy = "mt-4 text-sm leading-relaxed text-soft";
const yen = (n: number) => n.toLocaleString("en-US");
const hotel = "THE LIVELY TOKYO AZABUJUBAN";
function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm" className="h-auto min-h-9 max-w-full whitespace-normal text-left"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight className="shrink-0" /></a></Button>;
}
function Links({ children }: { children: React.ReactNode }) { return <div className="mt-3 flex flex-wrap gap-2">{children}</div>; }

const shoppingList = [
  ["Skincare and cosmetics", "Sunscreen, cleansing oils, sheet masks, lotions and lip balms cost a fraction of European prices. Drugstores such as Matsumoto Kiyoshi carry the best sellers, and @cosme TOKYO in Harajuku ranks every product by real reviews, so you can see what Japanese women actually buy."],
  ["Clothes", "Japan-only lines at Uniqlo and GU, Onitsuka Tiger sneakers, Beams and the small concept stores of Shibuya and Harajuku. Sizes run small, which is great news for petite travellers. Try everything on, because sizing differs from Europe."],
  ["Matcha and tea", "A tin of good ceremonial matcha, hojicha or genmaicha is light, flat and tastes of the trip every morning at home."],
  ["Sweets and snacks", "Regional and seasonal Kit Kat flavours, Tokyo Banana and beautifully boxed sweets from the department-store food halls. Check the best-before date for the flight."],
  ["Stationery and small things", "Pens, notebooks, washi tape and furoshiki wrapping cloths from Loft or Itoya. Small, easy to pack and loved as gifts."],
  ["Knives and ceramics", "If you buy a kitchen knife, pack it in your checked suitcase, never in your hand luggage. Wrap bowls and cups in your clothes."],
] as const;

export function JapanDaySeventeenGuide() {
  const { borderless: b, uobei: u, taxFree: t } = plan;
  return <section aria-label="Japan day 17 detailed guide" className="mt-8 text-ink">
    <header>
      <p className="text-xs font-semibold uppercase text-terracotta">Your guide · Day 17 · Tokyo</p>
      <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">A museum without a map, tea with flowers blooming in your cup, one last shopping day and sushi on rails.</h2>
      <p className={copy}>The last full day in Tokyo. teamLab Borderless just up the hill from your hotel, brunch above it in Azabudai Hills, an afternoon to fill the suitcase and a fun running sushi dinner near Shibuya Crossing.</p>
    </header>

    <aside className="my-8 border-l-2 border-terracotta pl-5">
      <h3 className="font-display text-2xl">What stayed with us</h3>
      <p className={copy}>Book this teamLab ahead too. We recommend it. Inside we also joined a small tea ceremony, and it was lovely. Brunch was great, upstairs in the same complex as teamLab, in a really beautiful restaurant. Then it was just shopping before the trip home, and dinner was running sushi near Shibuya.</p>
    </aside>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />The day at a glance</h3>
      <p className="mt-2 text-xs leading-relaxed text-soft">A suggested rhythm, not our recorded times.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["09:00–11:30", "teamLab Borderless", "A morning slot, about two hours inside, with the tea house."],
        ["11:30–13:00", "Brunch upstairs at Azabudai Hills", "A few minutes from the museum exit."],
        ["13:30–18:30", "Last shopping", "Shibuya and Harajuku, and back to the hotel to drop the bags."],
        ["19:00–20:30", "Running sushi at Uobei", "Sushi delivered to your seat on rails, near Shibuya Crossing."],
      ].map(([time, title, note]) => <li key={title} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"><span className="text-sm font-semibold text-terracotta">{time}</span><div><h4 className="text-sm font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
      <img src={artwork} alt="Schematic Tokyo map with a short walk from THE LIVELY in Azabu-Juban to Azabudai Hills with teamLab Borderless and EN TEA HOUSE, Tokyo Tower nearby, and the metro from Kamiyacho to Shibuya for the last shopping and Uobei running sushi" width={1536} height={1024} className="mt-6 h-auto w-full rounded-lg" />
      <p className="mt-3 text-xs leading-relaxed text-soft">Schematic overview, not street navigation. Today is all walking and metro.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Sparkles className="size-6" />01 · teamLab Borderless</h3>
      <p className={copy}>A museum without a map. Artworks leave their rooms, drift along corridors, meet other works and react to you. Waterfalls part around your hands, flowers bloom where you stand, and two people in the same room can see completely different things. If you went to Planets on day 13, this is the other half of teamLab, with your shoes on and much more to discover by getting lost.</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Tickets.</strong> Timed entry, from ¥{yen(b.adultFromYen)} per adult, checked {plan.checkedOn}. The price changes with the date and hour. Tickets go on sale about {b.salesOpenMonthsAhead} months ahead, cannot be refunded, and any left on the day cost ¥{b.doorSurchargeYen} more at the door. Book ahead.</li>
        <li><strong className="text-ink">Hours.</strong> Usually {b.opens} to {b.closes}, last entry an hour before closing. Your slot fixes when you enter, not how long you stay.</li>
        <li><strong className="text-ink">Getting there.</strong> About ten to fifteen minutes on foot from THE LIVELY, uphill through Azabu-Juban. The entrance is on basement level one of Azabudai Hills.</li>
        <li><strong className="text-ink">Tip.</strong> Many rooms have mirrors and slopes, so wear trousers and comfortable shoes. Look for the lamp forest and the bubble room, and do not rush. The works change through the day.</li>
      </ul>
      <JapanVenueLinks id={b.venue} />
      <Links><PlaceLink href={route(hotel, "teamLab Borderless Azabudai Hills", "walking")}>Hotel → teamLab Borderless · walking</PlaceLink></Links>

      <h4 className="mt-8 flex items-center gap-2 font-display text-2xl"><Coffee className="size-5" />EN TEA HOUSE, the tea ceremony inside</h4>
      <p className={copy}>Hidden deep in the museum is a tiny tea house where staff prepare green tea in front of you. The moment the tea is in your bowl, digital flowers start to bloom on its surface, and they keep blooming as long as there is tea. Lift the bowl and the petals scatter across the table. It is a calm, beautiful pause in the middle of all the light.</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Paid separately inside.</strong> Keep a card or phone payment with you, not in the locker.</li>
        <li><strong className="text-ink">Finding it.</strong> It is easy to walk past. Ask any staff member for the tea house and they will point the way.</li>
        <li><strong className="text-ink">Try.</strong> A cold matcha, or the matcha and yuzu gelato on a warm day.</li>
      </ul>
      <JapanVenueLinks id="enTeaHouse" />
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><UtensilsCrossed className="size-6" />02 · Brunch upstairs at Azabudai Hills</h3>
      <p className={copy}>Our brunch was upstairs in the same complex, in a beautiful restaurant, and it was the perfect slow start after the museum. These two are our picks for you, both a few minutes from the teamLab exit. Scores are dated Google Maps snapshots.</p>
      <h4 className="mt-6 font-display text-2xl">Balcony by 6th</h4>
      <p className={copy}>All-day dining on the third floor of Tower Plaza, full of plants, with a terrace over the gardens. Famous for fluffy pancakes and Basque cheesecake from the old 6th by Oriental Hotel. Lunch starts at 11:00, so it fits right after a morning slot. Book a terrace table online.</p>
      <JapanVenueLinks id="balconyBy6th" />
      <h4 className="mt-6 font-display text-2xl">Dining 33</h4>
      <p className={copy}>A grand bistro by chef Kiyomi Mikuni on the 33rd floor of Mori JP Tower, with Tokyo Tower right outside the window. Lunch from 11:00 to 15:00. Book a window seat, it is the view you will remember.</p>
      <JapanVenueLinks id="dining33" />
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><ShoppingBag className="size-6" />03 · Last shopping before the trip home</h3>
      <p className={copy}>Take the metro from Kamiyacho or Roppongi to Shibuya and Harajuku and give the afternoon to everything you saw and did not buy yet. Plan a stop back at the hotel to drop the bags before dinner.</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Tax-free.</strong> Spend ¥{yen(t.minimumPerShopPerDayYen)} or more before tax in one shop on one day and show your passport. For purchases from {t.refundAtAirportFrom} the tax is refunded at the airport after customs check your goods, so keep the items unused and in your hand luggage.</li>
        <li><strong className="text-ink">Electronics.</strong> Japan runs on {t.homeVoltage} volts. Check that hair tools and gadgets work on European voltage before you buy.</li>
      </ul>
      <JapanVenueLinks id="atCosmeTokyo" />
      <JapanVenueLinks id="megaDonkiShibuya" />
      <Links><PlaceLink href={route("teamLab Borderless Azabudai Hills", "Shibuya Station")}>Azabudai Hills → Shibuya · metro</PlaceLink></Links>

      <h4 className="mt-8 flex items-center gap-2 font-display text-2xl"><Gift className="size-5" />What to bring home from Japan</h4>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">{shoppingList.map(([title, text]) => <li key={title}><strong className="text-ink">{title}.</strong> {text}</li>)}</ul>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><UtensilsCrossed className="size-6" />04 · Running sushi at Uobei Shibuya</h3>
      <p className={copy}>A fun, easy last dinner. Every seat has its own tablet in English. You tap what you want and a few minutes later the plates shoot along express rails and stop right in front of you. Most plates cost ¥{u.basePlateYen}, so you can try salmon two ways, seared aburi, tuna and the silly corn mayo gunkan without thinking about the bill. Free green tea is at your seat.</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Queue.</strong> No reservations. Take a number from the machine at the door. Weekend evenings are busy, the shortest waits are {u.quietestHours}.</li>
        <li><strong className="text-ink">Hours.</strong> From {u.weekdayOpens} on weekdays and {u.weekendOpens} at weekends, last order {u.lastOrder}. Pay at the self-checkout by the door.</li>
      </ul>
      <JapanVenueLinks id={u.venue} />
      <Links><PlaceLink href={route("Shibuya Station Hachiko Exit", "Uobei Shibuya Dogenzaka", "walking")}>Shibuya Station → Uobei · walking</PlaceLink><PlaceLink href={route("Shibuya Station", hotel)}>Shibuya → hotel · metro</PlaceLink></Links>
    </div>

    <div className="py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Checklist for tomorrow</h3>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-soft">{[
        "Pack tonight and weigh the suitcases against your airline's allowance.",
        "Keep tax-free goods unused and in your hand luggage for the customs check.",
        "Liquids over 100 ml, knives and sprays go in the checked suitcase.",
        "Check your flight, the airport route and how early to leave the hotel.",
        "Keep your passport, boarding pass and some yen within reach.",
      ].map((item) => <li key={item} className="flex gap-2"><span className="mt-0.5 inline-block size-4 shrink-0 rounded-sm border border-terracotta" aria-hidden="true" />{item}</li>)}</ul>
    </div>
  </section>;
}
