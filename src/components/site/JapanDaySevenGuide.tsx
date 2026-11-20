import { AlertTriangle, ArrowUpRight, Clock3, Coffee, Landmark, Leaf, TrainFront, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JapanVenueLinks } from "@/components/site/JapanVenueLinks";
import { japanDaySevenPlan as plan } from "@/lib/japan-day-seven-plan";
import artwork from "@/assets/japan-day7-map.png";

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const route = (a: string, b: string, mode = "transit") => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(a)}&destination=${encodeURIComponent(b)}&travelmode=${mode}`;
const copy = "mt-4 text-sm leading-relaxed text-soft";
function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm" className="h-auto min-h-9 max-w-full whitespace-normal text-left"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight className="shrink-0" /></a></Button>;
}
function Links({ children }: { children: React.ReactNode }) { return <div className="mt-3 flex flex-wrap gap-2">{children}</div>; }

export function JapanDaySevenGuide() {
  const { admissions: fees } = plan;
  return <section aria-label="Japan day 7 detailed guide" className="mt-8 text-ink">
    <header>
      <p className="text-xs font-semibold uppercase text-terracotta">Your guide · Day 07 · Kyoto → Nara → Kyoto</p>
      <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Deer, a giant Buddha and the best curry in Kyoto.</h2>
      <p className={copy}>A day trip to Nara for its famous deer park, the vast Great Buddha Hall of Todai-ji, the lantern paths of Kasuga Taisha and the old merchant lanes of Naramachi. Back in Kyoto, good coffee, excellent tea and a dinner we still talk about.</p>
    </header>

    <aside className="my-8 border-l-2 border-terracotta pl-5">
      <h3 className="font-display text-2xl">What stayed with us</h3>
      <p className={copy}>Todai-ji was the moment of the day. A huge, beautiful temple that was absolutely worth going to see. The deer are charming for about five minutes, then they become a plan of their own, so read our warning below before you buy a single cracker. In the evening, the teas at Lupicia were truly excellent and the curry at koisus was amazing. We recommend it one hundred percent.</p>
    </aside>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Your day at a glance</h3>
      <p className={copy}>A suggested rhythm, not our recorded times. Nara rewards an early start before the tour groups arrive.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["08:00–09:00", "Kyoto → Nara", "Kintetsu from Kyoto Station to Kintetsu-Nara."],
        ["09:00–10:00", "Nara Park & the deer", "Walk east through the park, calmly and away from the crowds of deer."],
        ["10:00–11:30", "Todai-ji", "The Great Buddha Hall, one of the largest wooden buildings in the world."],
        ["11:30–12:30", "Kasuga Taisha", "Stone lanterns through the forest to the vermilion shrine."],
        ["12:30–14:30", "Lunch & Naramachi", "Old merchant lanes south of the park, then back to the station."],
        ["14:30–15:30", "Nara → Kyoto", "Kintetsu back, then on to downtown Kyoto."],
        ["16:00–18:30", "Le Labo, Lupicia & shopping", "Coffee in a machiya, tea on Teramachi, a little shopping."],
        ["Evening", "Dinner at koisus", "Spice curry served in a sushi bucket in Miyagawa-cho."],
      ].map(([time, title, note]) => <li key={title} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"><span className="text-sm font-semibold text-terracotta">{time}</span><div><h4 className="text-sm font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
      <img src={artwork} alt="Schematic two-panel map with a Nara walking loop linking Kintetsu-Nara Station, Nara Park, Todai-ji, Kasuga Taisha and Naramachi, and a Kyoto evening panel with Le Labo Kyoto Machiya, Lupicia Teramachi Sanjo and koisus" width={1536} height={1024} className="mt-6 h-auto w-full rounded-lg" />
      <p className="mt-3 text-xs leading-relaxed text-soft">Schematic overview, not street navigation. The Nara loop is about 5 km on foot. The Kyoto evening stops sit within a 15 minute walk of each other on both sides of the Kamo River.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><TrainFront className="size-6" />01 · Kyoto → Nara</h3>
      <p className={copy}>Two railways run from Kyoto Station to Nara, both with an IC card such as ICOCA. From sequence KYOTO GOJO, walk about 15 minutes or take one subway stop to Kyoto Station. Fares below are per adult, one way, checked {plan.checkedOn}.</p>
      <ul className="mt-5 space-y-4 text-sm leading-relaxed text-soft">
        {plan.toNara.map((o) => <li key={o.id}><strong className="text-ink">{o.line} · ¥{o.yen} · about {o.minutes} minutes.</strong> {o.from} → {o.to}. {o.note}</li>)}
      </ul>
      <p className={copy}><strong className="text-ink">Our suggestion.</strong> Take Kintetsu. Kintetsu-Nara Station opens almost directly onto the park, so you start with the deer and the temples instead of a long walk through town. The limited express is worth the small supplement if you want a guaranteed seat.</p>
      <Links><PlaceLink href={route("sequence KYOTO GOJO", "Kintetsu-Nara Station")}>Hotel → Kintetsu-Nara</PlaceLink><PlaceLink href="https://www.kintetsu.co.jp/foreign/english/">Kintetsu Railway · official</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><AlertTriangle className="size-6" />02 · Nara Park and the deer, read this first</h3>
      <p className={copy}>More than a thousand wild deer roam the park and the temple grounds. They are everywhere, they are not afraid of people at all, and they can be aggressive. They are protected as a national natural monument and are wild animals, not pets.</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Leave valuables at the hotel.</strong> Carry only what you need in a bag that closes fully. Deer nibble at paper, maps, plastic bags and anything hanging loose.</li>
        <li><strong className="text-ink">One pack of deer crackers is really enough.</strong> The moment they smell shika senbei, they follow you, push, chase and bite. eM learned this the hard way when the deer started chewing on her expensive handbag.</li>
        <li><strong className="text-ink">Walk calmly and avoid the big groups of deer.</strong> Give crackers quickly, then show both empty hands so they know you are finished. Never tease them by holding food out of reach.</li>
        <li><strong className="text-ink">Be extra careful in autumn and spring.</strong> Stags are more aggressive during the autumn rut and mothers protect their fawns in late spring.</li>
        <li><strong className="text-ink">Feed them only shika senbei.</strong> Other food makes the deer ill, and the park has no bins, so take all your rubbish with you.</li>
      </ul>
      <Links><PlaceLink href="https://www.pref.nara.lg.jp/site/park/1232.html">How to treat the deer · Nara Prefecture</PlaceLink><PlaceLink href={maps("Nara Park")}>Nara Park · Maps</PlaceLink><PlaceLink href={route("Kintetsu-Nara Station", "Todai-ji Nandaimon", "walking")}>Kintetsu-Nara → Todai-ji · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Landmark className="size-6" />03 · Todai-ji, the Great Buddha Hall</h3>
      <p className={copy}>The highlight of Nara for us. You enter through the Nandaimon gate, guarded by two fierce wooden Nio figures, and then the Daibutsu-den appears, a huge wooden hall housing a 15 metre bronze Buddha. It was breathtaking and absolutely worth the visit. Walk all the way around the statue, and look for the pillar with a hole the size of the Buddha's nostril, which children and slim adults squeeze through for luck.</p>
      <p className={copy}><strong className="text-ink">Hours and admission.</strong> The Great Buddha Hall is open 08:00–17:00 from November to March and 07:30–17:30 from April to October. Admission is ¥{fees.todaijiGreatBuddhaHallYen} per adult, with a joint ticket for the museum, checked {fees.checkedOn} on the temple's official site. Arrive early, as it fills with school groups from mid-morning.</p>
      <Links><PlaceLink href="https://www.todaiji.or.jp/en/information/haikan/">Todai-ji · hours & admission</PlaceLink><PlaceLink href={maps("Todai-ji Daibutsuden Nara")}>Todai-ji Great Buddha Hall · Maps</PlaceLink><PlaceLink href={route("Todai-ji Daibutsuden Nara", "Kasuga Taisha", "walking")}>Todai-ji → Kasuga Taisha · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-3xl">04 · Kasuga Taisha</h3>
      <p className={copy}>A forest path lined with around two thousand moss-covered stone lanterns leads to Nara's most celebrated shrine, all vermilion corridors and hanging bronze lanterns. The outer areas are free to walk. The special inner sanctuary costs ¥{fees.kasugaInnerSanctuaryYen} per adult and is open 09:00–16:00, checked {fees.checkedOn} on the shrine's official site. Allow about 20 minutes on foot from Todai-ji, and the deer follow you here too.</p>
      <Links><PlaceLink href="https://www.kasugataisha.or.jp/en/about_en/basic/">Kasuga Taisha · hours & admission</PlaceLink><PlaceLink href={maps("Kasuga Taisha Nara")}>Kasuga Taisha · Maps</PlaceLink><PlaceLink href={route("Kasuga Taisha", "Naramachi Koshi no Ie", "walking")}>Kasuga Taisha → Naramachi · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-3xl">05 · Naramachi, the old merchant quarter</h3>
      <p className={copy}>South of the park, the deer disappear and the town becomes quiet. Naramachi is a grid of narrow lanes with latticed wooden townhouses, small cafés, sake shops and craft stores. A good place for lunch and an unhurried hour before the train.</p>
      <h4 className="mt-6 font-display text-2xl">Naramachi Koshi-no-ie</h4>
      <p className={copy}>A restored merchant townhouse with free entry, the easiest way to see how these long, narrow homes were built around small gardens.</p>
      <Links><PlaceLink href={maps("Naramachi Koshi no Ie")}>Naramachi Koshi-no-ie · Maps</PlaceLink></Links>
      <h4 className="mt-6 font-display text-2xl">Nakatanidou</h4>
      <p className={copy}>On the way back to the station, watch the famous high-speed mochi pounding and try a warm yomogi mochi filled with red bean paste.</p>
      <Links><PlaceLink href={maps("Nakatanidou Nara")}>Nakatanidou · Maps</PlaceLink><PlaceLink href={route("Naramachi Koshi no Ie", "Kintetsu-Nara Station", "walking")}>Naramachi → Kintetsu-Nara · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><TrainFront className="size-6" />06 · Back to Kyoto</h3>
      <p className={copy}>Take the {plan.backToKyoto.line} from {plan.backToKyoto.from} to {plan.backToKyoto.to}, about {plan.backToKyoto.minutes} minutes for ¥{plan.backToKyoto.yen} per adult. For downtown, change at Kintetsu-Tambabashi to the Keihan line and ride to Gion-shijo, which drops you a short walk from Le Labo and koisus. Or continue to Kyoto Station and take the subway to Shijo.</p>
      <Links><PlaceLink href={route("Kintetsu-Nara Station", "Gion-shijo Station")}>Kintetsu-Nara → Gion-shijo</PlaceLink><PlaceLink href={route("Gion-shijo Station", "LE LABO KYOTO MACHIYA", "walking")}>Gion-shijo → Le Labo · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Coffee className="size-6" />07 · Le Labo Kyoto Machiya</h3>
      <p className={copy}>Le Labo's Kyoto flagship sits in a carefully restored townhouse built in 1879 on Kiyamachi-dori, with a courtyard, a vegan café downstairs and a fragrance atelier upstairs. Honestly, the shop itself did not win us over, but the coffee in the café was excellent, so come for a cup in the courtyard. The Kyoto stores carry a city-exclusive fragrance if you want a souvenir. Lab and café open 10:00–19:00, and the café takes no reservations.</p>
      <JapanVenueLinks id="leLaboKyotoMachiya" />
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Leaf className="size-6" />08 · Lupicia tea on Teramachi</h3>
      <p className={copy}>Our tea shop was Lupicia Kyoto Teramachi Sanjo, in the covered Teramachi shopping street, and the teas were truly excellent. Hundreds of loose-leaf teas, from Japanese greens to fruit and flavoured blends, with open tins to smell before you choose, plus seasonal and Kyoto-only blends that make beautiful gifts. Staff are happy to help in English. Open daily 10:00–19:00.</p>
      <JapanVenueLinks id="lupiciaTeramachi" />
      <p className={copy}><strong className="text-ink">A little shopping.</strong> Teramachi and Shinkyogoku, the two parallel covered arcades, are made for an unplanned hour of browsing, and Nishiki Market sits at their southern end.</p>
      <Links><PlaceLink href={maps("Teramachi Kyogoku Shopping Street Kyoto")}>Teramachi arcade · Maps</PlaceLink><PlaceLink href={maps("Nishiki Market Kyoto")}>Nishiki Market · Maps</PlaceLink><PlaceLink href={route("LUPICIA Kyoto Teramachi Sanjo", "curry & tempura koisus", "walking")}>Lupicia → koisus · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><UtensilsCrossed className="size-6" />09 · Dinner at koisus</h3>
      <p className={copy}>This dinner was absolutely amazing and we recommend it one hundred percent. koisus serves a rich spice curry blended each morning from more than twenty Indian-style spices, presented in a wooden sushi bucket with freshly fried tempura, Kyoto pickles and a small iron pot of dashi to pour over halfway, so it turns into a soup curry. The name is sushi oke, the sushi bucket, spelled backwards.</p>
      <p className={copy}>It sits in a machiya on the stone-paved lanes of Miyagawa-cho, about three minutes from Gion-shijo Station. A curry costs ¥1,980 with tempura sets from ¥605, according to the restaurant's menu checked {plan.checkedOn}, and there is a vegan curry too. Reservations are not taken, so arrive before 18:00 or expect a short wait at the busiest hour.</p>
      <JapanVenueLinks id="koisus" />
      <Links><PlaceLink href={route("curry & tempura koisus", "sequence KYOTO GOJO")}>koisus → hotel</PlaceLink></Links>
    </div>

    <div className="py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Checklist for tomorrow</h3>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-soft">
        <li className="flex gap-2"><CheckSquareIcon />Check your bag for deer damage and wipe anything they nibbled before packing it away.</li>
        <li className="flex gap-2"><CheckSquareIcon />Pack loose tea tins and any fragrance carefully, with liquids ready for the clear bag on your flight home.</li>
        <li className="flex gap-2"><CheckSquareIcon />Top up your IC card after two days of trains and charge your phone and power bank.</li>
        <li className="flex gap-2"><CheckSquareIcon />Check tomorrow's opening hours the night before, since Kyoto's temples close early.</li>
      </ul>
    </div>
  </section>;
}

function CheckSquareIcon() { return <span className="mt-0.5 inline-block size-4 shrink-0 rounded-sm border border-terracotta" aria-hidden="true" />; }
