import { ArrowUpRight, Clock3, Coffee, Gem, Sparkles, TrainFront, Trees, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JapanVenueLinks } from "@/components/site/JapanVenueLinks";
import { japanDaySixPlan as plan } from "@/lib/japan-day-six-plan";
import artwork from "@/assets/japan-day6-map.png";

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const route = (a: string, b: string, mode = "transit") => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(a)}&destination=${encodeURIComponent(b)}&travelmode=${mode}`;
const copy = "mt-4 text-sm leading-relaxed text-soft";
function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm" className="h-auto min-h-9 max-w-full whitespace-normal text-left"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight className="shrink-0" /></a></Button>;
}
function Links({ children }: { children: React.ReactNode }) { return <div className="mt-3 flex flex-wrap gap-2">{children}</div>; }

export function JapanDaySixGuide() {
  const { ring, perfume } = plan.workshops;
  return <section aria-label="Japan day 6 detailed guide" className="mt-8 text-ink">
    <header>
      <p className="text-xs font-semibold uppercase text-terracotta">Your guide · Day 06 · Arashiyama → Higashiyama</p>
      <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Bamboo at dawn, a ring and a scent of your own.</h2>
      <p className={copy}>An early train west to the famous bamboo grove and Tenryu-ji, the best coffee in Arashiyama, then back to the old lanes of Higashiyama for two small workshops that became our favourite memories of Kyoto.</p>
    </header>

    <aside className="my-8 border-l-2 border-terracotta pl-5">
      <h3 className="font-display text-2xl">Our honest take</h3>
      <p className={copy}>We will be honest. The bamboo grove felt overrated to us. Everyone recommends going very early, and clearly everyone reads the same advice, because even before the usual opening hours it was full of people. It did not feel special or exceptional, a small disappointment. It is in every itinerary for a reason, and if you love forests you may feel differently. The coffee at % Arabica was worth the queue.</p>
      <p className={copy}>The afternoon is the real reason for this day. Making our own rings at glänta and our own perfume at My Only Fragrance was unique, perfect and worth every euro. Book both ahead, because slots sell out fast.</p>
    </aside>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Your day at a glance</h3>
      <p className={copy}>A suggested rhythm, not our recorded times. Fix the two workshop slots first and let the morning fit around them.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["06:30", "Leave the hotel", "Walk or take one subway stop to Kyoto Station for the JR Sagano Line."],
        ["07:00–08:30", "Bamboo Grove & Nonomiya", "The grove at its calmest, which still means company."],
        ["08:30–09:30", "Tenryu-ji garden", "Enter through the north gate straight from the bamboo path."],
        ["09:30–10:15", "% Arabica by the river", "Coffee with the Togetsukyo view, expect a queue."],
        ["10:15–11:15", "Back to Higashiyama", "Hankyu via Katsura to Kyoto-kawaramachi, then a short walk."],
        ["11:30–12:30", "Ring workshop at glänta", "About an hour, and you leave wearing your ring."],
        ["12:30–15:00", "Lunch & the Masuyacho lanes", "Ichinenzaka, Yasaka Pagoda and Kodai-ji at an easy pace."],
        ["15:00–15:30", "Perfume at My Only Fragrance", "Around 30 minutes to mix and name your scent."],
        ["Evening", "Dinner nearby", "Three options a few minutes from the workshops."],
      ].map(([time, title, note]) => <li key={title} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"><span className="text-sm font-semibold text-terracotta">{time}</span><div><h4 className="text-sm font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
      <img src={artwork} alt="Schematic Kyoto map linking Saga-Arashiyama Station, the Bamboo Grove, Tenryu-ji and % Arabica in the west with glänta Ninenzaka, the Masuyacho lanes, Yasaka Pagoda, Kodai-ji and My Only Fragrance in Higashiyama" width={1536} height={1024} className="mt-6 h-auto w-full rounded-lg" />
      <p className="mt-3 text-xs leading-relaxed text-soft">Schematic overview, not street navigation. Arashiyama sits on the western edge of the city and the workshops sit in the Higashiyama hills on the east side, about 45 minutes apart by rail and on foot.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><TrainFront className="size-6" />01 · Getting to Arashiyama early</h3>
      <p className={copy}>Three railways reach Arashiyama, all cheap and all accepting an IC card such as ICOCA. Fares below are per adult, one way, checked {plan.checkedOn}. Skip the city bus, which is slow and crowded on this route.</p>
      <ul className="mt-5 space-y-4 text-sm leading-relaxed text-soft">
        {plan.arashiyamaOptions.map((o) => <li key={o.id}><strong className="text-ink">{o.line} · ¥{o.yen} · about {o.minutes} minutes.</strong> {o.from} → {o.to}. {o.note}</li>)}
      </ul>
      <p className={copy}><strong className="text-ink">Our suggestion.</strong> From sequence KYOTO GOJO, take the JR Sagano Line from Kyoto Station and aim to be in the grove by 07:00. The Sagano platforms at Kyoto Station are a long walk from the main gates, so allow ten extra minutes, and board towards the back of the train, where it is less crowded.</p>
      <Links><PlaceLink href={route("sequence KYOTO GOJO", "Saga-Arashiyama Station")}>Hotel → Saga-Arashiyama</PlaceLink><PlaceLink href={route("Saga-Arashiyama Station", "Arashiyama Bamboo Grove", "walking")}>Saga-Arashiyama → Bamboo Grove · walking</PlaceLink><PlaceLink href="https://www.westjr.co.jp/global/en/">JR West · timetables</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Trees className="size-6" />02 · The Bamboo Grove, honestly</h3>
      <p className={copy}>The grove path is free, open around the clock and roughly 400 metres long, running between Nonomiya Shrine and Okochi Sanso. Tour groups start arriving from around 08:00 and by mid-morning the path becomes a slow line of raised phones. Going at dawn is the only real strategy, but go knowing that many others had the same idea.</p>
      <p className={copy}><strong className="text-ink">What we would tell a friend.</strong> If trees and quiet green light move you, it is worth the alarm clock. If you are on the fence, it is fine to give it twenty minutes, take your photo and move on to the Tenryu-ji garden next door. Walk slowly, keep to the path and keep voices low, as people live nearby.</p>
      <h4 className="mt-6 font-display text-2xl">Arashiyama Bamboo Grove</h4>
      <Links><PlaceLink href={maps("Arashiyama Bamboo Grove Kyoto")}>Bamboo Grove · Maps</PlaceLink></Links>
      <h4 className="mt-6 font-display text-2xl">Nonomiya Shrine</h4>
      <p className={copy}>A tiny moss-garden shrine at the southern end of the path with a rare black wooden torii gate, quiet in the early morning.</p>
      <Links><PlaceLink href={maps("Nonomiya Shrine Kyoto")}>Nonomiya Shrine · Maps</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-3xl">03 · Tenryu-ji, the Zen garden</h3>
      <p className={copy}>A UNESCO World Heritage Zen temple whose Sogen pond garden frames the Arashiyama hills. The north gate opens straight onto the bamboo path, so you can step from the grove into the garden. Garden hours are {plan.tenryuji.gardenHours}, last entry {plan.tenryuji.lastAdmission}. Admission is ¥{plan.tenryuji.gardenYen} per adult for the garden, plus ¥{plan.tenryuji.buildingsExtraYen} for the main halls, and the Cloud Dragon ceiling painting in the Dharma Hall is a separate ¥{plan.tenryuji.dharmaHallYen}, open on weekends, holidays and special spring and autumn periods. Checked {plan.tenryuji.checkedOn} on the temple's official site.</p>
      <p className={copy}>In the second half of November, the garden opens early at 07:30 for the autumn colours. Check the official page for special openings and closures during ceremonies.</p>
      <Links><PlaceLink href="https://www.tenryuji.com/en/visit/">Tenryu-ji · hours & admission</PlaceLink><PlaceLink href={maps("Tenryu-ji North Gate Kyoto")}>Tenryu-ji north gate · Maps</PlaceLink><PlaceLink href={route("Tenryu-ji Kyoto", "% Arabica Kyoto Arashiyama", "walking")}>Tenryu-ji → % Arabica · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Coffee className="size-6" />04 · Coffee at % Arabica</h3>
      <p className={copy}>The global flagship of the Kyoto-born coffee brand, a small white counter on the river bank beside Togetsukyo Bridge. The coffee was excellent and worth the long queue. It opens at 09:00, the line peaks late morning, and there is very little seating, so take your cup for a slow walk along the river.</p>
      <JapanVenueLinks id="arabicaArashiyama" />
      <h4 className="mt-6 font-display text-2xl">Togetsukyo Bridge</h4>
      <p className={copy}>The wooden-looking bridge over the Katsura River and the classic Arashiyama view, a two minute walk from the café.</p>
      <Links><PlaceLink href={maps("Togetsukyo Bridge Kyoto")}>Togetsukyo Bridge · Maps</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><TrainFront className="size-6" />05 · Back to Higashiyama</h3>
      <p className={copy}>Cross Togetsukyo Bridge to Hankyu Arashiyama Station and ride {plan.returnToHigashiyama.line}, changing at Katsura, to {plan.returnToHigashiyama.to}. Allow about {plan.returnToHigashiyama.minutes} minutes on the train, ¥{plan.returnToHigashiyama.yen} per adult, then about {plan.returnToHigashiyama.walkToNinenzakaMinutes} minutes on foot east past Yasaka Shrine to Ninenzaka. Hankyu Kyoto-kawaramachi has coin lockers if you are carrying anything heavy.</p>
      <Links><PlaceLink href={route("Hankyu Arashiyama Station", "Kyoto-kawaramachi Station")}>Hankyu Arashiyama → Kyoto-kawaramachi</PlaceLink><PlaceLink href={route("Kyoto-kawaramachi Station", "glänta Kyoto Ninenzaka", "walking")}>Kyoto-kawaramachi → glänta · walking</PlaceLink><PlaceLink href="https://www.hankyu.co.jp/global/en/">Hankyu Railway · official</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Gem className="size-6" />06 · Make your own ring at glänta</h3>
      <p className={copy}>Our first workshop of the afternoon, and one we cannot recommend enough. We made our rings at glänta Kyoto Ninenzaka, which sits inside a renovated townhouse more than 100 years old, right in Masuyacho. In the handmade workshop you shape, heat, hammer and polish a silver ring yourself, with a craftsman guiding every step. It takes {ring.minutes} minutes, a free engraving goes inside, and you leave wearing it.</p>
      <p className={copy}><strong className="text-ink">Price and booking.</strong> Silver rings start at ¥{ring.silverFromYen.toLocaleString("en-US")} per ring for a 2 mm band and rise with width, with 10 and 18 karat gold also available, payable in the studio by cash, card or PayPay. Prices follow metal markets, checked {plan.checkedOn}. Online booking closes the day before and same-day requests go by phone, so book as soon as your Kyoto dates are fixed. Visitors from abroad can pay tax free with a passport, and resizing and polishing stay free at any glänta store.</p>
      <JapanVenueLinks id={ring.venue} />
      <p className={copy}><strong className="text-ink">No slot left?</strong> The studio also makes a custom ring in front of you in about 10 minutes, from ¥980, with no reservation. Or try the second Kyoto studio on Sanjo-dori downtown.</p>
      <JapanVenueLinks id={ring.alternative} />
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-3xl">07 · A slow walk through Masuyacho</h3>
      <p className={copy}>Masuyacho is the small quarter of stone lanes between Ninenzaka and Kodai-ji, where both workshops sit within a few minutes of each other. If yesterday's walk already took you up Ninenzaka, today is about the quieter side lanes. Stop for lunch wherever a noren curtain tempts you and wander without a plan.</p>
      {[
        ["Ichinenzaka", "The shortest and calmest of the three slopes, a handful of steps with wooden shopfronts, just west of Ninenzaka."],
        ["Kodaiji Minamimon-dori", "The lane running past glänta towards the south gate of Kodai-ji, lined with teahouses and small restaurants."],
        ["Yasaka Pagoda", "The five-storey pagoda of Hokan-ji rising above the rooftops, most beautiful from the top of Yasaka-dori looking up."],
        ["Kodai-ji", "A Zen temple built by Nene in memory of her husband Toyotomi Hideyoshi, with a raked gravel garden and a small bamboo grove that is usually far calmer than Arashiyama. Admission is charged, check the official site for current hours."],
      ].map(([title, text]) => <div key={title}><h4 className="mt-6 font-display text-2xl">{title}</h4><p className={copy}>{text}</p><Links><PlaceLink href={maps(`${title} Kyoto`)}>{title} · Maps</PlaceLink></Links></div>)}
      <p className={copy}><strong className="text-ink">Walking note.</strong> These are sloped stone lanes with steps, busy from late morning, so wear comfortable shoes and keep to the side when stopping for photos.</p>
      <Links><PlaceLink href={route("glänta Kyoto Ninenzaka", "Kodai-ji Kyoto", "walking")}>glänta → Kodai-ji · walking</PlaceLink><PlaceLink href="https://www.kodaiji.com/">Kodai-ji · official</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Sparkles className="size-6" />08 · Your own perfume at My Only Fragrance</h3>
      <p className={copy}>The second workshop, and just as special. At My Only Fragrance, a Kyoto-born studio, you sniff a wall of numbered scents without names, choose a few by instinct, and mix them with an advisor drop by drop until the fragrance feels like yours. You give it a name, they print the label, and you carry home a scent nobody else has, including Kyoto notes such as bamboo and tea. It takes around {perfume.minutes} minutes. Ours was the Kiyomizu studio on Sannenzaka, a few minutes uphill from Masuyacho.</p>
      <p className={copy}><strong className="text-ink">Price and booking.</strong> A {perfume.millilitres} ml bottle starts at about ¥{perfume.fromYen.toLocaleString("en-US")} per person on the studio's booking listing, checked {plan.checkedOn}, with prices varying by store and size. Reserve through the studio's LINE or Instagram, with changes possible until the day before. Slots go quickly, so book together with your ring workshop.</p>
      <JapanVenueLinks id={perfume.venue} />
      <p className={copy}><strong className="text-ink">Prefer downtown?</strong> The Teramachi studio sits in the covered shopping street in the centre, a good choice if you want to shop afterwards.</p>
      <JapanVenueLinks id={perfume.alternative} />
      <p className={copy}><strong className="text-ink">Flying home with it.</strong> A {perfume.millilitres} ml bottle fits the 100 ml cabin liquids rule, but it has to go in your clear liquids bag at security. Wrap it well if it travels in checked luggage.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><UtensilsCrossed className="size-6" />09 · Dinner nearby</h3>
      <p className={copy}>Stay in the neighbourhood and let the evening come to you. Three well-rated options within a few minutes of the workshops, from a cosy teppan counter to a French dinner with a view. Reserve where you can and confirm the price per person and accepted cards when booking.</p>
      <h4 className="mt-6 font-display text-2xl">Ichinenzaka Masaichi</h4>
      <p className={copy}>A tiny family-run restaurant with only a few tables, a few doors from glänta, run by three brothers. Set menus with Kyoto-style grilled fish, sashimi and wagyu steak, with warm, English-friendly service. Closed on Wednesdays and Thursdays. Call ahead, since walk-ins may wait.</p>
      <JapanVenueLinks id="masaichi" />
      <h4 className="mt-6 font-display text-2xl">Teppan Izakaya GION Wa</h4>
      <p className={copy}>A cosy okonomiyaki and teppanyaki counter beside the Yasaka Shrine gate, run by a welcoming couple. Try the Kyoto-style okonomiyaki and the house Ebisu-yaki. Around ¥3,000–4,000 per person, open from 16:00 and closed on Tuesdays. The most relaxed choice of the three.</p>
      <JapanVenueLinks id="gionWa" />
      <h4 className="mt-6 font-display text-2xl">Restaurant Hiramatsu Kodaiji</h4>
      <p className={copy}>French cuisine in a townhouse just below Ninenzaka, with views over the Kyoto rooftops. Courses listed on TableCheck run from about ¥9,680 to ¥18,150 per person including service and tax, with a shorter weekday course. Closed on Mondays. The choice if you want to celebrate your new rings.</p>
      <JapanVenueLinks id="hiramatsuKodaiji" />
      <Links><PlaceLink href={route("Kodai-ji Kyoto", "sequence KYOTO GOJO")}>Higashiyama → hotel</PlaceLink></Links>
    </div>

    <div className="py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Checklist for tomorrow</h3>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-soft">
        <li className="flex gap-2"><CheckSquareIcon />Keep the glänta receipt, since resizing and polishing stay free at any of its stores in Japan.</li>
        <li className="flex gap-2"><CheckSquareIcon />Pack the perfume bottle where it cannot break, and note it for your liquids bag on the flight home.</li>
        <li className="flex gap-2"><CheckSquareIcon />Top up your IC card and charge your phone and power bank after an early start.</li>
        <li className="flex gap-2"><CheckSquareIcon />Check tomorrow's first opening hours the night before and set a gentler alarm than today.</li>
      </ul>
    </div>
  </section>;
}

function CheckSquareIcon() { return <span className="mt-0.5 inline-block size-4 shrink-0 rounded-sm border border-terracotta" aria-hidden="true" />; }
