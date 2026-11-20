import { ArrowUpRight, Clock3, Coffee, Landmark, PiggyBank, TrainFront, UtensilsCrossed, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JapanVenueLinks } from "@/components/site/JapanVenueLinks";
import { japanDayTwelvePlan as plan } from "@/lib/japan-day-twelve-plan";
import artwork from "@/assets/japan-day12-map.png";

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const route = (a: string, b: string, mode = "transit") => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(a)}&destination=${encodeURIComponent(b)}&travelmode=${mode}`;
const copy = "mt-4 text-sm leading-relaxed text-soft";
const yen = (n: number) => n.toLocaleString("en-US");
const hotel = "THE LIVELY TOKYO AZABUJUBAN";
function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm" className="h-auto min-h-9 max-w-full whitespace-normal text-left"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight className="shrink-0" /></a></Button>;
}
function Links({ children }: { children: React.ReactNode }) { return <div className="mt-3 flex flex-wrap gap-2">{children}</div>; }

export function JapanDayTwelveGuide() {
  const { toKamakura: k, pigPark: pig, enoden, monorail: m, hawaii: h } = plan;
  return <section aria-label="Japan day 12 detailed guide" className="mt-8 text-ink">
    <header>
      <p className="text-xs font-semibold uppercase text-terracotta">Your guide · Day 12 · Kamakura, Enoshima & Yokohama</p>
      <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Little pigs, a sea breeze and a train that hangs from the sky.</h2>
      <p className={copy}>A day trip out of Tokyo to Kamakura, a small town by the sea. Micro pigs in a café, a walk to the beach with coffee in hand, a Hawaiian lunch facing Enoshima, the suspended monorail to Ofuna, then Yokohama's Chinatown and harbour before pizza back in Azabu-Juban.</p>
    </header>

    <aside className="my-8 border-l-2 border-terracotta pl-5">
      <h3 className="font-display text-2xl">What stayed with us</h3>
      <p className={copy}>Kamakura was a top trip, a little town by the sea. This is where we finally understood the connection between Japan and Hawaii. The little pigs in the café were adorable. We walked through town along the beach with coffee in hand, had lunch by the sea, and then rode a metro that hangs upside down. It was so interesting that we went to look at it from outside too.</p>
    </aside>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Your day at a glance</h3>
      <p className={copy}>A suggested rhythm, not our recorded times. The pig café opens at {pig.opens}, so that is your first fixed point.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["09:00–10:15", "Tokyo → Kamakura", "JR Yokosuka Line, no change from Shinagawa or Tokyo Station."],
        ["10:15–11:00", "Komachi-dori", "Kamakura's shopping street while the town wakes up."],
        ["11:00–11:30", "Kamakura PIGPARK", "Thirty minutes with the micro pigs."],
        ["11:45–13:00", "Through town to the beach", "Coffee in hand, down to Yuigahama."],
        ["13:00–14:30", "Enoden & lunch at MAHALO", "The coastal tram, then Hawaiian food facing Enoshima."],
        ["14:45–15:00", "Shonan Monorail", "Hanging under its rail all the way to Ofuna."],
        ["15:30–17:30", "Chinatown & Yamashita Park", "Street food, then the harbour at dusk."],
        ["Evening", "SAVOY Azabujuban", "Pizza near your hotel. Book ahead."],
      ].map(([time, title, note]) => <li key={title} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"><span className="text-sm font-semibold text-terracotta">{time}</span><div><h4 className="text-sm font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
      <img src={artwork} alt="Schematic map of Kamakura Station and Kamakura PIGPARK, Komachi-dori and Yuigahama Beach, the Enoden along Sagami Bay to Enoshima Station, Katase Beach and MAHALO facing Enoshima island, the suspended Shonan Monorail from Shonan-Enoshima to Ofuna, the JR line to Ishikawacho, Yokohama Chinatown and Yamashita Park, with an arrow back to Tokyo for SAVOY pizza" width={1536} height={1024} className="mt-6 h-auto w-full rounded-lg" />
      <p className="mt-3 text-xs leading-relaxed text-soft">Schematic overview, not street navigation. Every leg today is by train, monorail or on foot.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><TrainFront className="size-6" />01 · Getting to Kamakura</h3>
      <p className={copy}>Take the metro or a short taxi from Azabu-Juban to Shinagawa, then the JR Yokosuka Line straight to Kamakura. It takes about {k.fromShinagawa.minutes} minutes and costs ¥{yen(k.fromShinagawa.icYen)} with an IC card. From Tokyo Station the same line takes about {k.fromTokyo.minutes} minutes for ¥{yen(k.fromTokyo.icYen)}. Tap in with Suica or PASMO, no ticket needed.</p>
      <p className={copy}>Today is a loop, so you never ride the same track twice. Kamakura first, the Enoden along the coast to Enoshima, the monorail up to Ofuna, and the JR line on to Yokohama.</p>
      <Links><PlaceLink href={route(hotel, "Kamakura Station")}>Hotel → Kamakura Station</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><PiggyBank className="size-6" />02 · Micro pigs at Kamakura PIGPARK</h3>
      <p className={copy}>We went to see the little pigs in a café and it was adorable. You take off your shoes, sit on the floor with a blanket on your lap, and the pigs wander over, climb on and often fall asleep on you.</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Where.</strong> The Onarimachi café, about 3 minutes on foot from the west exit of Kamakura Station.</li>
        <li><strong className="text-ink">Price.</strong> ¥{yen(pig.yenPer30Min)} per person for 30 minutes, and ¥{pig.snackYen} for a cup of pig snacks, checked {plan.checkedOn}.</li>
        <li><strong className="text-ink">Book ahead.</strong> Guests with a reservation go first, and online booking closes {pig.onlineBookingUntil}. Open from {pig.opens}, last entry {pig.lastEntry}.</li>
        <li><strong className="text-ink">Bring small cash.</strong> Tickets on site come from a machine that takes only ¥1,000 notes and coins, so carry change.</li>
        <li><strong className="text-ink">House rules.</strong> No picking the pigs up, no flash and no strong perfume. Visitors who have been near a pig farm in the last few days cannot enter.</li>
      </ul>
      <JapanVenueLinks id="kamakuraPigPark" />
      <Links><PlaceLink href={route("Kamakura Station West Exit", "鎌倉PIGPARK 鎌倉市御成町8-4", "walking")}>Station → PIGPARK · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Coffee className="size-6" />03 · Through town to the beach</h3>
      <p className={copy}>Before or after the pigs, walk Komachi-dori, Kamakura's lively shopping street of sweets, souvenirs and snacks that runs from the east exit of the station. Then pick up a coffee to go and head down Wakamiya-oji to the sea. Yuigahama, Kamakura's town beach, is about 20 minutes on foot from the station and a wide open bay.</p>
      <Links><PlaceLink href={maps("Komachi-dori Kamakura")}>Komachi-dori · Maps</PlaceLink><PlaceLink href={route("Kamakura Station", "Yuigahama Beach Kamakura", "walking")}>Station → Yuigahama · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Waves className="size-6" />04 · Why Japan loves Hawaii</h3>
      <p className={copy}>By now you have seen the hints of Hawaii all over Tokyo, from Honolulu Coffee to hibiscus prints. On this coast it finally made sense to us. In {h.kingVisitedJapan}, King Kalākaua of Hawaii visited Emperor Meiji and asked for workers for the sugar plantations. From {h.contractMigrantsArrived}, Japanese contract migrants sailed to Hawaii, and by 1920 people of Japanese descent made up {h.japaneseShareOfHawaii1920Percent}% of the islands' population.</p>
      <p className={copy}>Those family ties made Hawaii the dream holiday for generations of Japanese travellers. Here on the Shonan coast, with its beaches and surf, that love shows up in Hawaiian cafés, plate lunches and aloha shirts.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><UtensilsCrossed className="size-6" />05 · Enoden and lunch at MAHALO</h3>
      <p className={copy}>Ride the Enoden, the little green coastal tram, from Kamakura to Enoshima in about {enoden.minutes} minutes for ¥{enoden.kamakuraToEnoshimaYen}. Sit on the left for the sea. If you are already at Yuigahama, hop on at Yuigahama or Hase station for a shorter ride.</p>
      <p className={copy}>MAHALO is a Hawaiian café restaurant by the sea facing Enoshima island, with an upstairs that looks out over the water. Loco moco and mochiko chicken plates cost ¥1,419, garlic shrimp from ¥1,639, and there are burgers, acai bowls and pancakes too, according to the restaurant's menu checked {plan.checkedOn}. Open daily from 10:00 to 22:00.</p>
      <JapanVenueLinks id={plan.lunchVenue} />
      <Links><PlaceLink href={route("Enoshima Station Enoden", "MAHALO 江ノ島店 藤沢市片瀬海岸1-12-7", "walking")}>Enoshima Station → MAHALO · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><TrainFront className="size-6" />06 · The upside-down metro to Ofuna</h3>
      <p className={copy}>The Shonan Monorail hangs below its rail instead of running on top of it. It climbs, drops and swings over rooftops and through tunnels, and the railway itself calls it the Shonan jet coaster. Before you board at Shonan-Enoshima, step outside and watch a train glide in overhead. That view is half the fun.</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">The ride.</strong> {m.minutes} minutes from Shonan-Enoshima to Ofuna for ¥{m.enoshimaToOfunaYen}, with trains every 7 to 8 minutes for most of the day.</li>
        <li><strong className="text-ink">Tickets.</strong> Tap in with Suica or PASMO. The Japan Rail Pass does not cover it.</li>
        <li><strong className="text-ink">Best seat.</strong> Stand at the front window for the full drop-and-curve experience.</li>
      </ul>
      <Links><PlaceLink href={route("MAHALO 江ノ島店 藤沢市片瀬海岸1-12-7", "Shonan-Enoshima Station", "walking")}>MAHALO → monorail · walking</PlaceLink><PlaceLink href={maps("Shonan-Enoshima Station")}>Shonan-Enoshima Station · Maps</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Landmark className="size-6" />07 · Yokohama Chinatown and Yamashita Park</h3>
      <p className={copy}>From Ofuna, the {plan.ofunaToIshikawacho.line} runs straight to Ishikawacho in about {plan.ofunaToIshikawacho.minutes} minutes, no change. Walk out of the station and into Japan's largest Chinatown, with colourful gates, about 500 shops and restaurants, and the colourful Kanteibyo temple at its heart. Graze on steamed buns from the street stalls rather than sitting down, as dinner is waiting in Tokyo.</p>
      <p className={copy}>A five-minute walk takes you to Yamashita Park, a long green promenade on the harbour with benches facing the water and the historic ship Hikawa Maru moored alongside. Come for the dusk light over the bay.</p>
      <Links><PlaceLink href={route("Ofuna Station", "Ishikawacho Station")}>Ofuna → Ishikawacho</PlaceLink><PlaceLink href={maps("Yokohama Chinatown Zenrinmon Gate")}>Chinatown · Maps</PlaceLink><PlaceLink href={route("Yokohama Chinatown Kanteibyo", "Yamashita Park Yokohama", "walking")}>Chinatown → Yamashita Park · walking</PlaceLink></Links>
      <p className={copy}>To get back, take the Minato Mirai Line from Motomachi-Chukagai, which runs on as the Tokyu Toyoko Line. Change at Hiyoshi to the Tokyu Meguro Line, whose trains continue onto the Namboku Line all the way to Azabu-Juban. Allow about an hour.</p>
      <Links><PlaceLink href={route("Motomachi-Chukagai Station", "Azabu-juban Station")}>Yokohama → Azabu-Juban</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><UtensilsCrossed className="size-6" />08 · Dinner at SAVOY Azabujuban</h3>
      <p className={copy}>We booked dinner at SAVOY, one of Tokyo's most famous pizzerias, often talked about as the best pizza in the world. For us it was not the best pizza in the world, but it was worth trying. Expect Neapolitan-style pies, and a short walk home to THE LIVELY.</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Book ahead.</strong> It fills up around 19:00, so reserve online before the trip.</li>
        <li><strong className="text-ink">Hours.</strong> Lunch 11:30–15:00 and dinner 17:30–22:00. Closed on {plan.savoyClosedOn}, and dinner only on Thursday.</li>
      </ul>
      <JapanVenueLinks id={plan.dinnerVenue} />
      <Links><PlaceLink href={route("Azabu-juban Station", "SAVOY Azabujuban 2-20-12 Azabujuban", "walking")}>Station → SAVOY · walking</PlaceLink><PlaceLink href={route("SAVOY Azabujuban 2-20-12 Azabujuban", hotel, "walking")}>SAVOY → hotel · walking</PlaceLink></Links>
    </div>

    <div className="py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Checklist for tomorrow</h3>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-soft">
        <li className="flex gap-2"><CheckSquareIcon />Top up your IC card after today's long loop of trains.</li>
        <li className="flex gap-2"><CheckSquareIcon />Charge your phone and power bank overnight.</li>
        <li className="flex gap-2"><CheckSquareIcon />Keep today's tax-free receipts with your passport.</li>
        <li className="flex gap-2"><CheckSquareIcon />Confirm tomorrow's tickets, bookings and opening hours.</li>
      </ul>
    </div>
  </section>;
}

function CheckSquareIcon() { return <span className="mt-0.5 inline-block size-4 shrink-0 rounded-sm border border-terracotta" aria-hidden="true" />; }
