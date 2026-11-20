import { ArrowUpRight, Camera, Clock3, Egg, Mountain, Ship, Ticket, TrainFront, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JapanVenueLinks } from "@/components/site/JapanVenueLinks";
import { japanDaySixteenPlan as plan } from "@/lib/japan-day-sixteen-plan";
import artwork from "@/assets/japan-day16-map.png";

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const route = (a: string, b: string, mode = "transit") => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(a)}&destination=${encodeURIComponent(b)}&travelmode=${mode}`;
const copy = "mt-4 text-sm leading-relaxed text-soft";
const yen = (n: number) => n.toLocaleString("en-US");
const hotel = "THE LIVELY TOKYO AZABUJUBAN";
function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm" className="h-auto min-h-9 max-w-full whitespace-normal text-left"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight className="shrink-0" /></a></Button>;
}
function Links({ children }: { children: React.ReactNode }) { return <div className="mt-3 flex flex-wrap gap-2">{children}</div>; }

export function JapanDaySixteenGuide() {
  const { freepass: f, romancecar: rc, ropeway: rw, blackEggs: e, cruise: c, torii: t } = plan;
  return <section aria-label="Japan day 16 detailed guide" className="mt-8 text-ink">
    <header>
      <p className="text-xs font-semibold uppercase text-terracotta">Your guide · Day 16 · Hakone</p>
      <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">A train, a cable car, a ropeway over a volcano, a pirate ship and the longest photo queue of your life.</h2>
      <p className={copy}>A full day trip from Tokyo around the Hakone loop. Up the mountain by train and cable car, across the steaming Owakudani valley by ropeway, black eggs at the top, a cruise across Lake Ashi and the red Torii of Peace standing in the water.</p>
    </header>

    <aside className="my-8 border-l-2 border-terracotta pl-5">
      <h3 className="font-display text-2xl">What stayed with us</h3>
      <p className={copy}>Hakone was absolutely worth it. We rode the ropeway over the volcano, and you have to try the black eggs up at Owakudani and take a souvenir home, because you will not find it anywhere else. And the Torii of Peace. The longest we have ever waited for a photo in our lives. Go in knowing that and enjoy it.</p>
    </aside>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Mountain className="size-5" />Why it is worth a whole day</h3>
      <p className={copy}>Hakone is the one day of the trip where the journey is the sight. In a single loop you ride six different ways, each with its own view. A mountain railway that zigzags up the steepest slope of any line in Japan, a cable car, a ropeway gliding over a live volcanic crater that still hisses and smells of sulphur, a pirate ship across a mountain lake, and on a clear day Mount Fuji watching over all of it. Add a 1,200-year-old shrine in a cedar forest and eggs that turn black in volcanic water, and it feels like nowhere else on the trip.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />The loop at a glance</h3>
      <p className={copy}>A suggested rhythm, not our recorded times. Leave early, because the ropeway and the egg shop close in the late afternoon.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["07:15–07:40", "Azabu-Juban → Shinjuku", "The Toei Oedo Line runs direct in about 20 minutes."],
        ["08:00–09:20", "Romancecar to Hakone-Yumoto", `About ${rc.minutesToYumoto} minutes in a reserved seat.`],
        ["09:30–10:20", "Hakone Tozan Line to Gora", "The mountain railway with its switchbacks."],
        ["10:20–10:45", "Cable car to Sounzan", "Ten steep minutes up the hillside."],
        ["10:45–12:00", "Ropeway to Owakudani", "Black eggs, the valley view and souvenirs."],
        ["12:00–12:30", "Ropeway down to Togendai", "Lake Ashi and, with luck, Fuji ahead."],
        ["12:30–13:10", "Pirate ship to Moto-Hakone", `A ${c.minutes} minute cruise across the lake.`],
        ["13:10–14:00", "Lunch in Moto-Hakone", "Handmade soba by the lake."],
        ["14:00–16:30", "Hakone Shrine and the Peace Torii", "The cedar avenue, the shrine and the famous queue."],
        ["16:45–19:00", "Bus and Romancecar back", "Bus to Hakone-Yumoto, then the train to Shinjuku."],
      ].map(([time, title, note]) => <li key={title} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"><span className="text-sm font-semibold text-terracotta">{time}</span><div><h4 className="text-sm font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
      <img src={artwork} alt="Schematic Hakone loop map: Romancecar from Shinjuku to Hakone-Yumoto, the Hakone Tozan Line to Gora, the cable car to Sounzan, the Hakone Ropeway over the steaming Owakudani valley with black eggs to Togendai, a pirate ship across Lake Ashi to Moto-Hakone with the red Peace Torii of Hakone Shrine, and the bus back to Hakone-Yumoto, with Mount Fuji in the distance" width={1536} height={1024} className="mt-6 h-auto w-full rounded-lg" />
      <p className="mt-3 text-xs leading-relaxed text-soft">Schematic overview, not street navigation. Every leg today is by train, cable car, ropeway, boat, bus or on foot.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Ticket className="size-6" />01 · Getting there and the one ticket you need</h3>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Hakone Freepass.</strong> ¥{yen(f.fromShinjukuTwoDayYen)} per adult for two calendar days from Shinjuku, or ¥{yen(f.fromShinjukuThreeDayYen)} for three, checked {plan.checkedOn}. It includes the round trip from Shinjuku and unlimited rides on {f.transportModes} kinds of transport in Hakone, including the mountain train, cable car, ropeway, pirate ship and buses. For the classic loop it costs less than buying each ticket.</li>
        <li><strong className="text-ink">Romancecar.</strong> The limited express adds ¥{yen(rc.surchargeYen)} each way for a reserved seat, ¥{rc.emotDiscountYen} less when booked on Odakyu's EMot online tickets. Book both directions a few days ahead, and sit on the left side going out for a chance of Fuji.</li>
        <li><strong className="text-ink">From the hotel.</strong> Take the Toei Oedo Line from Azabu-Juban to Shinjuku, then follow the signs to the Odakyu Line.</li>
      </ul>
      <Links><PlaceLink href="https://odakyu-global.com/passes/hakone-freepass/">Hakone Freepass · official</PlaceLink><PlaceLink href="https://odakyu-global.com/passes/romancecar/">Romancecar · official</PlaceLink><PlaceLink href={route(hotel, "Shinjuku Station Odakyu Line")}>Hotel → Shinjuku · metro</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><TrainFront className="size-6" />02 · Up the mountain to the ropeway</h3>
      <p className={copy}>At Hakone-Yumoto change to the little red Hakone Tozan Line. It climbs so steeply that the train stops at switchbacks, the driver walks to the other end and you continue uphill in the opposite direction. At Gora, change to the cable car for Sounzan, where the ropeway begins.</p>
      <p className={copy}>The Hakone Ropeway is the highlight of the ride. Gondolas leave every minute and float over the ridge, then suddenly the whole Owakudani valley opens beneath you, yellow rocks, steam vents and the smell of sulphur. A one-way ride costs ¥{yen(rw.oneWayYen)} without the pass.</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Check the status that morning.</strong> The ropeway stops in strong wind and whenever its sensors read high volcanic gas, even on calm days. Replacement buses then run.</li>
        <li><strong className="text-ink">Winter maintenance.</strong> {rw.closures.join(", and ")}. Replacement buses cover the closed section, so start from the open end of the ropeway.</li>
      </ul>
      <Links><PlaceLink href="https://www.hakonenavi.jp/international/en/transportation/hakone-ropeway">Ropeway status · Hakone Navi</PlaceLink><PlaceLink href={maps("Sounzan Station Hakone")}>Sounzan Station · Maps</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Egg className="size-6" />03 · Owakudani and the black eggs</h3>
      <p className={copy}>Owakudani, the Great Boiling Valley, is the crater left by Hakone's last big eruption about 3,000 years ago. It still steams, and much of Hakone's hot-spring water comes from here.</p>
      <p className={copy}>The kuro-tamago are why you get off. Ordinary hen's eggs are boiled for about {e.hotSpringMinutes} minutes in the {e.hotSpringCelsius}°C volcanic spring water, then steamed for {e.steamMinutes} minutes at {e.steamCelsius}°C. Iron and sulphur in the water react with the shell and turn it jet black, while inside it is a perfect, slightly smoky boiled egg. The legend says every egg you eat adds {e.yearsPerEggLegend} years to your life. They are made and sold only here, carried up from the pools by their own small ropeway, which is what makes them so special.</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Where and how much.</strong> Owakudani Kurotamago-kan, next to the ropeway station, sells a bag of {e.eggsPerPack} for ¥{e.packYen}, daily {e.salesHours}. They sell out on busy days, so buy them on the way up, not on the way back.</li>
        <li><strong className="text-ink">The souvenir.</strong> The Kuro-tama Shop in the same building sells black-egg goods and snacks made only for Owakudani. Pick one to take home, you will not find it anywhere else.</li>
        <li><strong className="text-ink">The photo.</strong> Stand by the giant black egg at the entrance, with the steam behind you and, on a clear day, Fuji.</li>
      </ul>
      <JapanVenueLinks id={e.venue} />
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Ship className="size-6" />04 · Down to Lake Ashi and the pirate ship</h3>
      <p className={copy}>Change gondolas at Owakudani and ride down to Togendai on the lake shore. From the pier, the Hakone Sightseeing Cruise sails pirate-style ships across Lake Ashi to Moto-Hakone in {c.minutes} minutes. Stand on the open deck at the front. As you approach Moto-Hakone, the red torii appears at the water's edge, and on a clear day Fuji rises behind you.</p>
      <p className={copy}>The fare is ¥{yen(c.oneWayYen)} one way without the pass. First class costs ¥{c.firstClassExtraYen} extra for a calm cabin at the front.</p>
      <Links><PlaceLink href="https://www.hakonenavi.jp/international/en/transportation/hakone-kankosen">Cruise timetable · Hakone Navi</PlaceLink><PlaceLink href={maps("Togendai Port Hakone")}>Togendai port · Maps</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><UtensilsCrossed className="size-6" />05 · Lunch in Moto-Hakone</h3>
      <p className={copy}>Hakone is known for soba made with mountain spring water. Both are a few minutes from the pier, near the first torii of the shrine. Scores are dated Google Maps snapshots.</p>
      <h4 className="mt-6 font-display text-2xl">Kinubiki no Sato</h4>
      <p className={copy}>Handmade soba close to the lake, open every day from 11:00 to 18:00, so it still works if the ropeway runs late.</p>
      <JapanVenueLinks id="kinubikiNoSato" />
      <h4 className="mt-6 font-display text-2xl">Shinsho Soba</h4>
      <p className={copy}>Stone-milled soba with generous tempura, and lake views from the upper floor. Try the smelt from Lake Ashi. Open around 11:00 to 15:00, closed on Wednesday, cash only.</p>
      <JapanVenueLinks id="shinshoSoba" />
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Camera className="size-6" />06 · Hakone Shrine and the longest photo queue of your life</h3>
      <p className={copy}>From Moto-Hakone walk about ten minutes along the shore. Hakone Shrine was founded in {t.shrineFoundedYear} and climbs through giant cedars up a long stone stairway. Below it, standing in the lake, is the vermilion Heiwa no Torii, the Torii of Peace. It was raised in {t.builtYear}, and the plaque reading Peace was added in {t.peacePlaqueYear}. Entry is free and the grounds never close.</p>
      <p className={copy}>And then the queue. Everyone wants the same picture, standing alone inside the gate with the lake behind, and the staff let one group step in at a time. At busy times expect {t.busyQueueMinutes} minutes, often more. For us it was the longest wait for a photo in our lives, and that is part of the story. Bring water and patience, take turns in the line to visit the shrine above, and have your pose ready when it is your turn.</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">If you would rather skip it.</strong> Photograph the torii from the side of the path, or from the pirate ship as you arrive. The queue is shortest before {t.quietBefore} and late in the afternoon.</li>
        <li><strong className="text-ink">Do not miss.</strong> The cedar avenue and the small Kuzuryu dragon shrine in the grounds.</li>
      </ul>
      <JapanVenueLinks id={t.venue} />
      <Links><PlaceLink href={route("Motohakone Port", "Heiwa no Torii Hakone Shrine", "walking")}>Moto-Hakone port → Peace Torii · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><TrainFront className="size-6" />07 · Back to Tokyo</h3>
      <p className={copy}>From Moto-Hakone take the Hakone Tozan bus down to Hakone-Yumoto, included in the pass. It takes about 35 to 60 minutes depending on traffic. Then ride the Romancecar back to Shinjuku and the Oedo Line home to Azabu-Juban. Check the last bus before you join the torii queue.</p>
      <Links><PlaceLink href={route("Motohakone Port", "Hakone-Yumoto Station")}>Moto-Hakone → Hakone-Yumoto · bus</PlaceLink><PlaceLink href={route("Shinjuku Station", hotel)}>Shinjuku → hotel · metro</PlaceLink></Links>
    </div>

    <div className="py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Checklist for tomorrow</h3>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-soft">
        <li className="flex gap-2"><CheckSquareIcon />Pack the Owakudani souvenir carefully in your suitcase.</li>
        <li className="flex gap-2"><CheckSquareIcon />Keep all tax-free receipts together with your passport.</li>
        <li className="flex gap-2"><CheckSquareIcon />Top up your IC card and charge your phone and power bank.</li>
        <li className="flex gap-2"><CheckSquareIcon />Confirm tomorrow's tickets, bookings and opening hours.</li>
      </ul>
    </div>
  </section>;
}

function CheckSquareIcon() { return <span className="mt-0.5 inline-block size-4 shrink-0 rounded-sm border border-terracotta" aria-hidden="true" />; }
