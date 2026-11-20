import { ArrowUpRight, BedDouble, Bus, Clock3, Landmark, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JapanVenueLinks } from "@/components/site/JapanVenueLinks";
import { japanDayTenPlan as plan } from "@/lib/japan-day-ten-plan";
import artwork from "@/assets/japan-day10-map.png";

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const route = (a: string, b: string, mode = "transit") => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(a)}&destination=${encodeURIComponent(b)}&travelmode=${mode}`;
const copy = "mt-4 text-sm leading-relaxed text-soft";
const yen = (n: number) => n.toLocaleString("en-US");
const hotel = "THE LIVELY TOKYO AZABUJUBAN";
function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm" className="h-auto min-h-9 max-w-full whitespace-normal text-left"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight className="shrink-0" /></a></Button>;
}
function Links({ children }: { children: React.ReactNode }) { return <div className="mt-3 flex flex-wrap gap-2">{children}</div>; }

export function JapanDayTenGuide() {
  const { chureito: c, toTokyo: t } = plan;
  return <section aria-label="Japan day 10 detailed guide" className="mt-8 text-ink">
    <header>
      <p className="text-xs font-semibold uppercase text-terracotta">Your guide · Day 10 · Kawaguchiko → Tokyo</p>
      <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">One last look at Fuji, then the lights of Tokyo.</h2>
      <p className={copy}>A morning climb to the Chureito Pagoda for the classic view of Mt. Fuji, a long ride into the capital, and a slow first evening in Azabu-Juban, one of Tokyo's most pleasant neighbourhoods.</p>
    </header>

    <aside className="my-8 border-l-2 border-terracotta pl-5">
      <h3 className="font-display text-2xl">What stayed with us</h3>
      <p className={copy}>We travelled to Tokyo by bus, and the journey was quite long, so we kept the rest of the day simple. We wandered around the streets near the hotel and went for dinner close by. Our hotel in Tokyo was absolutely amazing and in a great neighbourhood, so we recommend it.</p>
    </aside>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Your day at a glance</h3>
      <p className={copy}>A suggested rhythm, not our recorded times. Fuji is usually clearest early, so see the pagoda first and travel afterwards.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["07:30–08:30", "Breakfast & check-out", "Ubuya's shuttle or a short ride to Kawaguchiko Station."],
        ["08:30–10:30", "Chureito Pagoda", "Train to Shimoyoshida, 398 steps and the view of Fuji."],
        ["11:00–13:00", "Kawaguchiko → Tokyo", "Highway bus to Shinjuku, or the Fuji Excursion train."],
        ["13:30–14:00", "Shinjuku → Azabu-Juban", "Oedo Line, no change, then a short walk to the hotel."],
        ["Afternoon", "Azabu-Juban on foot", "The shopping street, small cafés and a glimpse of Tokyo Tower."],
        ["Evening", "Dinner nearby", "Three easy options within walking distance below."],
      ].map(([time, title, note]) => <li key={title} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"><span className="text-sm font-semibold text-terracotta">{time}</span><div><h4 className="text-sm font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
      <img src={artwork} alt="Schematic map from Kawaguchiko Station to Shimoyoshida Station and the Chureito Pagoda below Mt. Fuji, then by highway bus to Shinjuku and on the Oedo Line to Azabu-Juban, with THE LIVELY Azabujuban, Tokyo Tower and three nearby restaurants" width={1536} height={1024} className="mt-6 h-auto w-full rounded-lg" />
      <p className="mt-3 text-xs leading-relaxed text-soft">Schematic overview, not to scale. Allow about three hours door to door from Kawaguchiko to the hotel.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Landmark className="size-6" />01 · Arakurayama Sengen Park and the Chureito Pagoda</h3>
      <p className={copy}>This is the view on the posters, a red five-storey pagoda on the hillside with the perfect cone of Mt. Fuji behind it. The park climbs from Arakura Fuji Sengen Shrine up {c.steps} steps to the pagoda and the observation deck above it. Take it slowly, the steps are steep, and the view at the top is worth every one of them.</p>
      <p className={copy}><strong className="text-ink">The honest note.</strong> Up close, the pagoda looked like a prop. It sat on the hillside as if it did not quite belong there, and the whole building was nothing like the photographs. We laughed about it. The view is still the reason to climb, so go for the view and let the pagoda be the joke.</p>
      <p className={copy}><strong className="text-ink">Getting there.</strong> From Kawaguchiko Station take the Fujikyu Railway to Shimoyoshida, about {c.trainMinutes} minutes for ¥{c.trainFromKawaguchikoYen} per adult, checked {plan.checkedOn}. From the station it is about {c.walkFromShimoyoshidaMinutes} minutes on foot to the observation deck. The park is open around the clock and free.</p>
      <p className={copy}><strong className="text-ink">Luggage.</strong> Do not carry suitcases up the steps. Leave them in a coin locker at Kawaguchiko Station, or ask Ubuya to forward them to your Tokyo hotel, which usually takes until the next day, so keep an overnight bag with you.</p>
      <Links><PlaceLink href="https://en.fujiyoshida.net/spot/index.php?p=12">Chureito Pagoda · official guide</PlaceLink><PlaceLink href="https://en.fujiyoshida.net/course/index.php?p=course-365">Walking route from Shimoyoshida</PlaceLink><PlaceLink href={route("Kawaguchiko Station", "Shimoyoshida Station")}>Kawaguchiko → Shimoyoshida</PlaceLink><PlaceLink href={route("Shimoyoshida Station", "Chureito Pagoda", "walking")}>Shimoyoshida → pagoda · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Bus className="size-6" />02 · Getting to Tokyo</h3>
      <p className={copy}>We went by bus, but there are three good ways. Fares are per adult, one way, checked {plan.checkedOn}. All seats are reserved, so book ahead, especially at weekends.</p>
      <ul className="mt-5 space-y-4 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Highway bus to Shinjuku · ¥{yen(t.shinjukuBus.yen)}, or ¥{yen(t.shinjukuBus.webYen)} online.</strong> The easiest and cheapest, with more than {t.shinjukuBus.departuresPerDay} departures a day from {t.shinjukuBus.from} to {t.shinjukuBus.to} in about 1 hour 45 minutes, longer in weekend traffic. Suitcases go in the hold. From Shinjuku, the Toei Oedo Line runs to Azabu-Juban without a change.</li>
        <li><strong className="text-ink">Highway bus to Tokyo Station · ¥{yen(t.tokyoStationBus.yen)}.</strong> About two hours to the Yaesu side of Tokyo Station, useful if you continue elsewhere in the east of the city.</li>
        <li><strong className="text-ink">Fuji Excursion train · ¥{yen(t.fujiExcursion.yen)}.</strong> A direct limited express to Shinjuku in just under two hours, with no traffic risk. It also stops at Shimoyoshida, ¥{yen(t.fujiExcursion.yenFromShimoyoshida)} from there, so you can board straight after the pagoda. Only a few trains run each day and the Japan Rail Pass covers just the JR section from Otsuki.</li>
      </ul>
      <Links><PlaceLink href="https://bus.fujikyu.co.jp/en/lp/en-shinjuku-kawaguchiko/">Kawaguchiko–Shinjuku bus · booking</PlaceLink><PlaceLink href="https://e.fujikyu-railway.jp/fujikaiyuu/">Fuji Excursion · timetable</PlaceLink><PlaceLink href={route("Busta Shinjuku", hotel)}>Shinjuku → hotel</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><BedDouble className="size-6" />03 · THE LIVELY Azabujuban</h3>
      <p className={copy}>We recommend it wholeheartedly. Our Tokyo hotel was absolutely amazing, in a great neighbourhood. THE LIVELY is a relaxed design hotel with a lounge to work or unwind in and a rooftop bar on the ninth floor, about {plan.hotel.walkMinutes} minutes on foot from Azabu-Juban Station on the Namboku and Oedo lines and {plan.hotel.roppongiWalkMinutes} minutes from Roppongi.</p>
      <p className={copy}><strong className="text-ink">The neighbourhood.</strong> Azabu-Juban feels like a village inside the city, with a long shopping street of old family shops, bakeries and cafés, quiet residential lanes and Tokyo Tower rising just to the east. After a travel day it is the perfect place for an unplanned stroll before dinner.</p>
      <JapanVenueLinks id="livelyAzabujuban" />
      <Links><PlaceLink href={maps("Azabu-Juban Shopping Street")}>Azabu-Juban shopping street · Maps</PlaceLink><PlaceLink href={route(hotel, "Tokyo Tower", "walking")}>Hotel → Tokyo Tower · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><UtensilsCrossed className="size-6" />04 · Dinner close to the hotel</h3>
      <p className={copy}>Three easy choices within a short walk, for an evening without plans. Scores are dated Google Maps snapshots.</p>
      <h4 className="mt-6 font-display text-2xl">Wagyu Sukiyaki Soshiji</h4>
      <p className={copy}>Practically next door. A5 wagyu cooked at the table in a heavy Nambu iron pot, dipped in rich free-range egg, with rice from a long-established Kyoto rice merchant. Open for lunch and from 17:00 on weekdays, all day at weekends. Booking ahead is wise from 19:00.</p>
      <JapanVenueLinks id="soshijiAzabujuban" />
      <Links><PlaceLink href={route(hotel, "和牛すき焼き そしじ 麻布十番 1-5-29", "walking")}>Hotel → Soshiji · walking</PlaceLink></Links>
      <h4 className="mt-6 font-display text-2xl">Hakata Hotaru</h4>
      <p className={copy}>A lively izakaya with dishes from Fukuoka. Try the goma saba, mackerel in sesame sauce, the spicy mentaiko and the motsunabe hot pot, ordered for at least two people from ¥2,100 each, according to the restaurant's menu checked {plan.checkedOn}. Tables are held for two and a half hours.</p>
      <JapanVenueLinks id="hakataHotaruAzabujuban" />
      <Links><PlaceLink href={route(hotel, "博多ほたる 麻布十番店 2-7-5", "walking")}>Hotel → Hakata Hotaru · walking</PlaceLink></Links>
      <h4 className="mt-6 font-display text-2xl">Pizza Strada</h4>
      <p className={copy}>When you simply want something easy after a long ride. Pizza from a wood-fired oven, watched from the counter, and one of Tabelog's top 100 pizzerias in 2025. Open from 17:00 on weekdays and from 12:00 at weekends. Reservations only through TableCheck.</p>
      <JapanVenueLinks id="pizzaStradaAzabujuban" />
      <Links><PlaceLink href={route(hotel, "Pizza Strada 3-6-2 Azabujuban", "walking")}>Hotel → Pizza Strada · walking</PlaceLink></Links>
    </div>

    <div className="py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Checklist for tomorrow</h3>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-soft">
        <li className="flex gap-2"><CheckSquareIcon />Top up your IC card for a day of Tokyo subways.</li>
        <li className="flex gap-2"><CheckSquareIcon />If you forwarded luggage, check its delivery time with reception.</li>
        <li className="flex gap-2"><CheckSquareIcon />Confirm tomorrow's reservations and opening hours.</li>
        <li className="flex gap-2"><CheckSquareIcon />Charge your phone and power bank and save offline maps of Tokyo.</li>
      </ul>
    </div>
  </section>;
}

function CheckSquareIcon() { return <span className="mt-0.5 inline-block size-4 shrink-0 rounded-sm border border-terracotta" aria-hidden="true" />; }
