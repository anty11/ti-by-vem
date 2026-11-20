import { ArrowUpRight, Clock3, Coffee, Heart, ShoppingBag, Sparkles, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JapanVenueLinks } from "@/components/site/JapanVenueLinks";
import { japanDayThirteenPlan as plan } from "@/lib/japan-day-thirteen-plan";
import artwork from "@/assets/japan-day13-map.png";

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const route = (a: string, b: string, mode = "transit") => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(a)}&destination=${encodeURIComponent(b)}&travelmode=${mode}`;
const copy = "mt-4 text-sm leading-relaxed text-soft";
const yen = (n: number) => n.toLocaleString("en-US");
const hotel = "THE LIVELY TOKYO AZABUJUBAN";
const planets = "teamLab Planets TOKYO 6-1-16 Toyosu";
const harry = "HARRY Harajuku Terrace 4-26-5 Jingumae 3F";
const ralphs = "Ralph's Coffee Omotesando 4-25-15 Jingumae";
function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm" className="h-auto min-h-9 max-w-full whitespace-normal text-left"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight className="shrink-0" /></a></Button>;
}
function Links({ children }: { children: React.ReactNode }) { return <div className="mt-3 flex flex-wrap gap-2">{children}</div>; }

export function JapanDayThirteenGuide() {
  const { teamLabPlanets: p, teamLabBorderless: b, harry: h, ralphs: r } = plan;
  return <section aria-label="Japan day 13 detailed guide" className="mt-8 text-ink">
    <header>
      <p className="text-xs font-semibold uppercase text-terracotta">Your guide · Day 13 · Tokyo</p>
      <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Walking into light, otters on the terrace and the bowl of ramen you came for.</h2>
      <p className={copy}>A morning barefoot inside teamLab Planets, an afternoon with the otters of Harajuku, coffee at Ralph's, shopping along Omotesando, and a dinner of some of the best ramen in Tokyo.</p>
    </header>

    <aside className="my-8 border-l-2 border-terracotta pl-5">
      <h3 className="font-display text-2xl">What stayed with us</h3>
      <p className={copy}>Book teamLab ahead, for sure. It was worth it and it was great. We went to both museums, and I think both are worth trying, each one is a little different. The most beautiful gem of the day for V were the otters. V loves these animals and it is absolutely worth seeing and experiencing. Cuteness overload, you will not experience anything more beautiful. It was perfect, really top. Coffee at Ralph's is something eM loves. And then shopping, which we both adore.</p>
    </aside>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Your day at a glance</h3>
      <p className={copy}>A suggested rhythm, not our recorded times. Your teamLab slot is the fixed point. On weekdays the otter café opens at {h.weekdayOpens}, which fits neatly after the museum.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["08:30–09:15", "Azabu-Juban → Toyosu", "Metro with one change, then a short walk or one stop on the Yurikamome."],
        ["09:15–12:00", "teamLab Planets", "Barefoot through water, light and flowers."],
        ["12:00–13:00", "Metro to Harajuku", "A quick lunch on the way or near Meiji-Jingumae."],
        ["13:00–14:00", "HARRY Harajuku Terrace", "Otters, hedgehogs and chinchillas."],
        ["14:00–15:00", "Ralph's Coffee", "A latte and something sweet in green and white."],
        ["15:00–18:30", "Omotesando shopping", "The avenue, Omotesando Hills and the lanes behind."],
        ["Evening", "Ramen dinner", "Three of Tokyo's finest bowls, listed below."],
      ].map(([time, title, note]) => <li key={title} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"><span className="text-sm font-semibold text-terracotta">{time}</span><div><h4 className="text-sm font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
      <img src={artwork} alt="Schematic Tokyo map with the metro from Azabu-Juban to teamLab Planets at Shin-Toyosu, the metro on to Meiji-Jingumae, then a walk between HARRY Harajuku Terrace, Ralph's Coffee, Omotesando shopping and AFURI Harajuku, with teamLab Borderless at Azabudai Hills and IRUCA TOKYO in Roppongi near the hotel" width={1536} height={1024} className="mt-6 h-auto w-full rounded-lg" />
      <p className="mt-3 text-xs leading-relaxed text-soft">Schematic overview, not street navigation. Every leg today is by metro or on foot.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Sparkles className="size-6" />01 · teamLab Planets, and why you should also see Borderless</h3>
      <p className={copy}>teamLab Planets in Toyosu is a museum you walk through barefoot. You wade through water where koi of light swim around your legs, lie under a universe of hanging lights and step into a garden of floating orchids. Since its expansion, most people spend two to three hours inside.</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Book ahead, online only.</strong> Tickets are timed and are not sold at the museum. Adults pay from ¥{yen(p.adultFromYen)}, more on busy dates and times, checked {plan.checkedOn}. You can change your slot up to {p.ticketChangesAllowed} times, but there are no refunds.</li>
        <li><strong className="text-ink">Take the first slot.</strong> The early entries are the calmest, and the afternoon is then free for Harajuku.</li>
        <li><strong className="text-ink">What to wear.</strong> The water reaches knee height, so wear trousers you can roll up above the knee or a short skirt. Shorts are lent at the entrance, and lockers take shoes and bags.</li>
        <li><strong className="text-ink">Getting there.</strong> From Azabu-Juban take the Namboku Line to Nagatacho and change to the Yurakucho Line for Toyosu. From there it is one stop on the Yurikamome to Shin-Toyosu, or about 10 minutes on foot.</li>
      </ul>
      <JapanVenueLinks id={p.venue} />
      <Links><PlaceLink href={route(hotel, planets)}>Hotel → teamLab Planets</PlaceLink></Links>
      <h4 className="mt-6 font-display text-2xl">teamLab Borderless, a short walk from your hotel</h4>
      <p className={copy}>We went to both, and each is a little different. Planets is about your body, water and walking barefoot. Borderless at Azabudai Hills is a museum without a map, with your shoes on, where artworks drift from room to room and into one another. It is close to THE LIVELY, so it fits an evening on any Tokyo day. Adults pay from ¥{yen(b.adultFromYen)}, and if any tickets remain on the day they cost ¥{b.doorSurchargeYen} more at the door, so book online.</p>
      <JapanVenueLinks id={b.venue} />
      <Links><PlaceLink href={route(hotel, "teamLab Borderless Azabudai Hills", "walking")}>Hotel → Borderless · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Heart className="size-6" />02 · The otters of HARRY Harajuku Terrace</h3>
      <p className={copy}>The most beautiful gem of the day for V. A small animal café on a third-floor terrace in Harajuku, with curious otters, sleepy hedgehogs, chinchillas and a very soft rabbit. The otters reach out with their little paws for treats, and it is pure cuteness overload. Nothing you experience will be sweeter.</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Price.</strong> ¥{yen(h.adult30MinYen)} per adult for 30 minutes, with treats and the short close encounter with the otters as paid extras, checked {plan.checkedOn}.</li>
        <li><strong className="text-ink">Hours.</strong> Weekdays from {h.weekdayOpens}, weekends and holidays from {h.weekendOpens}, last reception {h.lastReception}.</li>
        <li><strong className="text-ink">Reservations.</strong> Walk-ins are welcome but may wait. Booking online needs at least {h.reservationMinimumMinutes} minutes, and guests with that booking get priority for the otter encounter. Same-day cancellations are not refunded.</li>
        <li><strong className="text-ink">Good to know.</strong> The otter encounter is for ages {h.otterContactMinAge} and up. Drinks come from a machine and there is no food.</li>
      </ul>
      <JapanVenueLinks id={h.venue} />
      <Links><PlaceLink href={route("Meiji-jingumae Station", harry, "walking")}>Meiji-Jingumae → HARRY · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Coffee className="size-6" />03 · Coffee at Ralph's</h3>
      <p className={copy}>Something eM loves. Ralph Lauren's café sits right beside its Omotesando flagship, all dark green and white, with a terrace on the street and a Polo Bear in your latte foam. Try the tiramisu jar for ¥{yen(r.tiramisuYen)}, Ralph's brownie with vanilla ice cream for ¥{yen(r.brownieWithIceCreamYen)} or the old-fashioned chocolate cake for ¥{yen(r.chocolateCakeYen)}, according to the menu checked {plan.checkedOn}.</p>
      <p className={copy}>There are no reservations. Order at the counter first, then find a seat. It is just around the corner from the otter café.</p>
      <JapanVenueLinks id={r.venue} />
      <Links><PlaceLink href={route(harry, ralphs, "walking")}>HARRY → Ralph's · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><ShoppingBag className="size-6" />04 · Shopping along Omotesando</h3>
      <p className={copy}>We both love this part. Yesterday was Harajuku and Shibuya, today is the more polished side of the neighbourhood. Walk the tree-lined Omotesando avenue towards Aoyama, past the flagship stores of the big fashion houses in buildings by famous architects. Duck into Omotesando Hills for Japanese designers and beauty, then wander the quiet lanes of Ura-Harajuku and Aoyama for small boutiques and concept stores.</p>
      <p className={copy}>Keep every receipt with your passport. Since 1 November 2026 tax is refunded at the airport, as explained on day 11.</p>
      <Links><PlaceLink href={maps("Omotesando Hills")}>Omotesando Hills · Maps</PlaceLink><PlaceLink href={route(ralphs, "Omotesando Station", "walking")}>Ralph's → Omotesando avenue · walking</PlaceLink><PlaceLink href={maps("Ura-Harajuku Tokyo")}>Ura-Harajuku · Maps</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><UtensilsCrossed className="size-6" />05 · Dinner, the best ramen we can point you to</h3>
      <p className={copy}>Three bowls with serious reputations, open in the evening. Scores are dated Google Maps snapshots.</p>
      <h4 className="mt-6 font-display text-2xl">IRUCA TOKYO, Roppongi</h4>
      <p className={copy}>MICHELIN Bib Gourmand and a regular on Tabelog's top 100 ramen list. The soy-sauce ramen with porcini and truffle paste costs ¥{yen(plan.iruca.porciniShoyuYen)}, and the yuzu salt ramen is the lighter choice. Expect a queue, the shop closes early in the evening when the line runs long and it is closed on {plan.iruca.closedOn}. It is a short walk from Azabu-Juban, so this is the easy choice on the way home.</p>
      <JapanVenueLinks id="irucaTokyoRoppongi" />
      <Links><PlaceLink href={route("入鹿TOKYO 六本木 港区六本木4-12-12", hotel, "walking")}>IRUCA → hotel · walking</PlaceLink></Links>
      <h4 className="mt-6 font-display text-2xl">AFURI, Harajuku</h4>
      <p className={copy}>Light, clear chicken broth with yuzu citrus, a Tokyo favourite that suits a long shopping day. You order at a ticket machine, and it is open from 10:00 to 23:00, so there is no rush after the shops close.</p>
      <JapanVenueLinks id="afuriHarajuku" />
      <h4 className="mt-6 font-display text-2xl">Ginza Kagari</h4>
      <p className={copy}>Creamy, rich chicken paitan with thin noodles and seasonal vegetables, often compared to the most comforting chicken soup. The main shop is on a quiet Ginza back street, open daily from 11:00 to 21:30, with no reservations.</p>
      <JapanVenueLinks id="kagariGinza" />
      <p className={copy}><strong className="text-ink">If you want the bowl many call the best in Tokyo,</strong> book Ginza Hachigou for lunch on another day. Its golden duck and chicken broth comes from a former French hotel chef. It closes at {plan.hachigou.closes} and on {plan.hachigou.closedOn}, and reservations open every {plan.hachigou.bookingOpens}.</p>
      <JapanVenueLinks id={plan.hachigou.venue} />
    </div>

    <div className="py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Checklist for tomorrow</h3>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-soft">
        <li className="flex gap-2"><CheckSquareIcon />Repack today's shopping and check how much room is left in your suitcases.</li>
        <li className="flex gap-2"><CheckSquareIcon />Keep all tax-free receipts together with your passport.</li>
        <li className="flex gap-2"><CheckSquareIcon />Top up your IC card and charge your phone and power bank.</li>
        <li className="flex gap-2"><CheckSquareIcon />Confirm tomorrow's tickets, bookings and opening hours.</li>
      </ul>
    </div>
  </section>;
}

function CheckSquareIcon() { return <span className="mt-0.5 inline-block size-4 shrink-0 rounded-sm border border-terracotta" aria-hidden="true" />; }
