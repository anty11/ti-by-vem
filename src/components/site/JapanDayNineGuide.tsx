import { AlertTriangle, ArrowUpRight, Clock3, Gift, Mountain, TrainFront, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JapanVenueLinks } from "@/components/site/JapanVenueLinks";
import { japanDayNinePlan as plan } from "@/lib/japan-day-nine-plan";
import artwork from "@/assets/japan-day9-map.png";

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const route = (a: string, b: string, mode = "transit") => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(a)}&destination=${encodeURIComponent(b)}&travelmode=${mode}`;
const copy = "mt-4 text-sm leading-relaxed text-soft";
const yen = (n: number) => n.toLocaleString("en-US");
function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm" className="h-auto min-h-9 max-w-full whitespace-normal text-left"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight className="shrink-0" /></a></Button>;
}
function Links({ children }: { children: React.ReactNode }) { return <div className="mt-3 flex flex-wrap gap-2">{children}</div>; }

export function JapanDayNineGuide() {
  const { fushimiInari: inari, ubuya, souvenirs } = plan;
  const { mishima, gotemba } = plan.toKawaguchiko;
  return <section aria-label="Japan day 9 detailed guide" className="mt-8 text-ink">
    <header>
      <p className="text-xs font-semibold uppercase text-terracotta">Your guide · Day 09 · Kyoto → Mishima → Kawaguchiko</p>
      <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Torii at dawn, then Mt. Fuji from the onsen.</h2>
      <p className={copy}>An early walk through the vermilion gates of Fushimi Inari, a long but easy journey east with a stop at the spring-fed streams of Mishima, and an evening of doing nothing at a lakeside ryokan facing Mt. Fuji.</p>
    </header>

    <aside className="my-8 border-l-2 border-terracotta pl-5">
      <h3 className="font-display text-2xl">What stayed with us</h3>
      <p className={copy}>We went to Inari very early in the morning and it was worth it. We cannot quite say why, but the place had a special energy, and it was worth both the alarm and the walk. At Kawaguchiko we stayed at Ubuya, a beautiful hotel looking straight at the volcano, with a huge room and an onsen that was perfect. It was purely a rest day. We walked through the town, admired the mountain, and that was wonderful.</p>
    </aside>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Your day at a glance</h3>
      <p className={copy}>A suggested rhythm, not our recorded times. The fixed points are the hourly buses from Mishima and Ubuya's last dinner seating at {ubuya.lastDinnerSeating}.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["06:00–08:30", "Fushimi Inari Taisha", "The torii tunnels before the crowds, then back to the hotel."],
        ["09:00–10:00", "Check out & Kyoto Station", "Send big luggage ahead or keep it light for the stop."],
        ["10:07–11:57", "Shinkansen to Mishima", "Direct Hikari, about 1 hour 50 minutes."],
        ["12:00–14:00", "Mishima Hirokojicho", "Spring-fed Genbe River, Mishima Taisha and eel for lunch."],
        ["14:20–15:50", "Bus to Kawaguchiko", "The Mishima–Kawaguchiko Liner, seats reserved."],
        ["16:00–19:00", "Ubuya, Fuji & onsen", "Check in, walk the lakeside, soak with a view of the mountain."],
        ["Evening", "Dinner at the hotel", "Seated by 19:00 at the latest."],
      ].map(([time, title, note]) => <li key={title} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"><span className="text-sm font-semibold text-terracotta">{time}</span><div><h4 className="text-sm font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
      <img src={artwork} alt="Schematic regional map from Fushimi Inari Taisha and Kyoto Station along the Tokaido Shinkansen to Mishima and the Genbe River, then by bus to Lake Kawaguchi with Ubuya, Fujiyama Cookie and Mt. Fuji" width={1536} height={1024} className="mt-6 h-auto w-full rounded-lg" />
      <p className="mt-3 text-xs leading-relaxed text-soft">Schematic overview, not to scale. Total travel from Kyoto to Kawaguchiko is about four hours including the change in Mishima.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-3xl">01 · Fushimi Inari at dawn</h3>
      <p className={copy}>Thousands of vermilion torii gates climb the forested slopes of Mount Inari behind the shrine. Start at the Romon gate and the main hall, then walk through the two dense rows of Senbon Torii and keep climbing. The Yotsutsuji crossroads, roughly halfway, has a wide view over Kyoto and is a good place to turn back if you need to catch a train. The full loop to the summit takes two to three hours.</p>
      <p className={copy}><strong className="text-ink">Go really early.</strong> The grounds are open around the clock and entry is free. By mid-morning the lower gates are shoulder to shoulder, while at sunrise you share them with a handful of walkers and the foxes carved in stone.</p>
      <p className={copy}><strong className="text-ink">Getting there.</strong> From sequence KYOTO GOJO take the subway one stop to Kyoto Station, then the JR Nara Line to Inari Station, about {inari.jrMinutes} minutes for ¥{inari.jrFromKyotoYen} per adult, checked {plan.checkedOn}. The shrine gate is right opposite the station.</p>
      <Links><PlaceLink href="https://inari.jp/en/access/">Fushimi Inari · official access</PlaceLink><PlaceLink href={maps("Fushimi Inari Taisha Romon Gate")}>Fushimi Inari · Maps</PlaceLink><PlaceLink href={route("sequence KYOTO GOJO", "JR Inari Station")}>Hotel → Inari Station</PlaceLink><PlaceLink href={route("Fushimi Inari Taisha", "Yotsutsuji Intersection Fushimi Inari", "walking")}>Shrine → Yotsutsuji · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><TrainFront className="size-6" />02 · Kyoto → Kawaguchiko</h3>
      <p className={copy}>No railway runs all the way from Kyoto to the lake, so you combine the Shinkansen with a bus. Fares below are per adult, one way, checked {plan.checkedOn}.</p>
      <ul className="mt-5 space-y-4 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Our route · {mishima.label}.</strong> Hikari to Mishima takes about 1 hour 50 minutes for ¥{yen(mishima.trainYenReserved)} with a reserved seat or ¥{yen(mishima.trainYenUnreserved)} unreserved. Choose a direct Hikari, as slower Kodama trains add almost an hour. From the South Exit, the Fujikyu bus reaches Kawaguchiko Station in about {mishima.busMinutes} minutes for ¥{yen(mishima.busYen)}, or ¥{yen(mishima.busWebYen)} booked online. All bus seats are reserved, so book both legs before you travel and leave a comfortable gap between them.</li>
        <li><strong className="text-ink">With a Japan Rail Pass · {gotemba.label}.</strong> {gotemba.note} The bus takes about {gotemba.busMinutes} minutes for ¥{yen(gotemba.busYen)}. The pass covers the Shinkansen and local JR trains, not the buses.</li>
      </ul>
      <p className={copy}><strong className="text-ink">Luggage.</strong> Large suitcases on the Shinkansen need an oversized baggage seat reserved in advance. Easier still, ask your Kyoto hotel to forward big bags to Ubuya the day before and travel with a small bag, which also makes the Mishima stop effortless.</p>
      <Links><PlaceLink href="https://bus.fujikyu.co.jp/en/highway/mishima/">Mishima–Kawaguchiko bus · timetable & booking</PlaceLink><PlaceLink href="https://www.japan-guide.com/e/e6905.html">Getting to the Fuji Five Lakes</PlaceLink><PlaceLink href={route("sequence KYOTO GOJO", "Kyoto Station")}>Hotel → Kyoto Station</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Waves className="size-6" />03 · A stop in Mishima Hirokojicho</h3>
      <p className={copy}>Mishima is a small city built on snowmelt from Mt. Fuji that rises as clear springs all over town. Our break was around Hirokojicho, a short walk from the station. Follow the stepping stones along the Genbe River, cross through Shirataki Park, and if you have time continue to Mishima Taisha, a large old shrine famous for its 1,200 year old osmanthus tree. Mishima-Hirokoji Station on the little Izuhakone line marks the centre of the area.</p>
      <h4 className="mt-6 font-display text-2xl">Lunch idea, Mishima eel</h4>
      <p className={copy}>The city is known for eel kept for days in its spring water, which gives a clean, delicate flavour. Sakuraya on Hirokojicho has served it since 1856. It opens at 11:00, closes on Wednesdays and shuts early once the day's eel is sold, so go before the lunch rush.</p>
      <JapanVenueLinks id="sakurayaMishima" />
      <Links><PlaceLink href="https://mishima-tourism.jp/plan/modelcourse/fewhours/?hl=en">Mishima walking course · official</PlaceLink><PlaceLink href={route("Mishima Station South Exit", "Genbe River Mishima", "walking")}>Station → Genbe River · walking</PlaceLink><PlaceLink href={maps("Mishima Taisha")}>Mishima Taisha · Maps</PlaceLink><PlaceLink href={route("Mishima Taisha", "Mishima Station South Exit", "walking")}>Back to the bus · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Mountain className="size-6" />04 · Ubuya, Fuji and the onsen</h3>
      <p className={copy}>We definitely recommend Ubuya. It sits on the north shore of Lake Kawaguchi and every room faces Mt. Fuji across the water. Our room was huge, the onsen was excellent, and the whole place feels made for rest. Spend the afternoon walking along the lake, watch the light change on the mountain, then soak in the public baths with Fuji in front of you.</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Arrival.</strong> Check-in runs {ubuya.checkInFrom}–{ubuya.checkInUntil}. The hotel collects guests from Kawaguchiko Station {ubuya.stationPickup}, so call when you arrive.</li>
        <li><strong className="text-ink">Hot spring water.</strong> The public baths use the hot spring. The open-air tubs in some rooms are lovely but filled with ordinary heated water.</li>
        <li><strong className="text-ink">Tattoos.</strong> Small tattoos are accepted in the public baths only if covered with {ubuya.tattooCoverSheets} cover sheets of 10 × 10 cm, according to the hotel's rules checked {plan.checkedOn}.</li>
        <li><strong className="text-ink">Fuji is shy.</strong> The mountain is clearest early in the morning and in the colder months, and often hides in cloud in summer. Set an alarm for sunrise and look out of the window.</li>
      </ul>
      <JapanVenueLinks id="ubuya" />
      <Links><PlaceLink href={route("Kawaguchiko Station", "Ubuya 10 Azagawa Fujikawaguchiko")}>Kawaguchiko Station → Ubuya</PlaceLink><PlaceLink href={route("Ubuya 10 Azagawa Fujikawaguchiko", "Lake Kawaguchi Oishi Park", "walking")}>Lakeside walk · Maps</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><AlertTriangle className="size-6" />05 · Dinner at the hotel, choose carefully</h3>
      <p className={copy}>Ubuya asks which dinner you want. We picked their speciality where you cook the meat yourself in a broth at the table by mistake, thinking we had ordered something else. It was not the best choice for us and steak would have suited us much better.</p>
      <p className={copy}>When we checked Ubuya's site on {plan.checkedOn}, only two dinners were offered, a {ubuya.dinnerChoices[0].toLowerCase()} and the {ubuya.dinnerChoices[1]} course, and the steak course was paused. The shabu-shabu is the cook-it-yourself one, so if you prefer a meal simply served to you, choose the buffet. Ask the staff to confirm what each option includes before you decide, and make sure you are seated by {ubuya.lastDinnerSeating}, as there is no dinner and no refund after that.</p>
      <Links><PlaceLink href="https://www.ubuya.co.jp/cuisine/">Ubuya dinner options · official</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Gift className="size-6" />06 · Sweet souvenirs</h3>
      <h4 className="mt-4 font-display text-2xl">Mt. Fuji cookies</h4>
      <p className={copy}>Our souvenir tip is the cookies shaped like Mt. Fuji. {souvenirs.fujiCookieShop} bakes them by hand in Azagawa, the same lakeside district as Ubuya. The main shop is open 10:00–17:00 and closes on the second and fourth Tuesday of each month.</p>
      <JapanVenueLinks id="fujiyamaCookie" />
      <Links><PlaceLink href={route("Ubuya 10 Azagawa Fujikawaguchiko", "FUJIYAMA COOKIE 1165-1 Azagawa Fujikawaguchiko", "walking")}>Ubuya → Fujiyama Cookie · walking</PlaceLink></Links>
      <h4 className="mt-6 font-display text-2xl">White strawberries</h4>
      <p className={copy}>You have to try the special white strawberries. We bought ours at {souvenirs.whiteStrawberryBoughtAt}. The best known variety, {souvenirs.whiteStrawberry}, was bred in Yamanashi, the prefecture around the lake. It stays pale with a faint pink blush, smells intensely sweet and has very little acidity. The main season runs from {souvenirs.whiteStrawberrySeason.toLowerCase()}, so availability depends on when you travel.</p>
      <Links><PlaceLink href={maps("Kawaguchiko Station")}>Kawaguchiko Station · Maps</PlaceLink></Links>
    </div>

    <div className="py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Checklist for tomorrow</h3>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-soft">
        <li className="flex gap-2"><CheckSquareIcon />Set an alarm for sunrise to see Mt. Fuji before the clouds come in.</li>
        <li className="flex gap-2"><CheckSquareIcon />Check tomorrow's bus or train times from Kawaguchiko and reserve seats if needed.</li>
        <li className="flex gap-2"><CheckSquareIcon />Ask reception about breakfast times and the station shuttle for check-out.</li>
        <li className="flex gap-2"><CheckSquareIcon />Pack the cookies and strawberries where they will not get crushed.</li>
      </ul>
    </div>
  </section>;
}

function CheckSquareIcon() { return <span className="mt-0.5 inline-block size-4 shrink-0 rounded-sm border border-terracotta" aria-hidden="true" />; }
