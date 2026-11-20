import { ArrowUpRight, BedDouble, Clock3, TrainFront, UtensilsCrossed, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JapanVenueLinks } from "@/components/site/JapanVenueLinks";
import { japanDayFivePlan as plan } from "@/lib/japan-day-five-plan";
import artwork from "@/assets/japan-day5-map.png";

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const route = (a: string, b: string, mode = "transit") => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(a)}&destination=${encodeURIComponent(b)}&travelmode=${mode}`;
const copy = "mt-4 text-sm leading-relaxed text-soft";
function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm" className="h-auto min-h-9 max-w-full whitespace-normal text-left"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight className="shrink-0" /></a></Button>;
}
function Links({ children }: { children: React.ReactNode }) { return <div className="mt-3 flex flex-wrap gap-2">{children}</div>; }

export function JapanDayFiveGuide() {
  return <section aria-label="Japan day 5 detailed guide" className="mt-8 text-ink">
    <header>
      <p className="text-xs font-semibold uppercase text-terracotta">Your guide · Day 05 · Osaka → Kyoto / Gion & Higashiyama</p>
      <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Kyoto, the gentle way in.</h2>
      <p className={copy}>A slow first Kyoto day: fluffy pancakes in Gion, a walk through the lantern lanes of Higashiyama, then a long soak in the hotel bath. No rushing, no checklist of ten temples. Just the city introducing itself.</p>
    </header>

    <aside className="my-8 border-l-2 border-terracotta pl-5">
      <h3 className="font-display text-2xl">Why we loved this day</h3>
      <p className={copy}>After several busy Osaka days, this was the exhale. The hotel was genuinely lovely and its bath became our favourite evening ritual of the whole trip. Keep this day soft on purpose. Kyoto rewards the unhurried.</p>
    </aside>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Your day at a glance</h3>
      <p className={copy}>A suggested rhythm, not our recorded times. Let the pancake queue, the walking lanes and your bath time set the pace.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["09:00–10:30", "Osaka → Kyoto", "Pick the train line that leaves nearest your hotel."],
        ["10:30–11:30", "Panel Cafe pancakes", "The viral fluffy pancakes in Gion, before the midday queue."],
        ["11:30–15:30", "Gion & Higashiyama walk", "Yasaka Shrine, the old lanes and Kiyomizu-dera."],
        ["15:30–17:00", "Hotel check-in & rest", "sequence KYOTO GOJO, check-in from 17:00, bags can be left earlier."],
        ["Evening", "THE BATH & a quiet dinner", "The hotel onsen, then one of three dinners near Gojo."],
      ].map(([time, title, note]) => <li key={title} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"><span className="text-sm font-semibold text-terracotta">{time}</span><div><h4 className="text-sm font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
      <img src={artwork} alt="Schematic Kyoto map linking Kyoto Station, sequence KYOTO GOJO, Panel Cafe in Gion, Yasaka Shrine, the Higashiyama walking lanes and Kiyomizu-dera" width={1536} height={1024} className="mt-6 h-auto w-full rounded-lg" />
      <p className="mt-3 text-xs leading-relaxed text-soft">Schematic overview, not street navigation. The walking loop links Gion and the Higashiyama lanes. The hotel and dinner options sit along the Karasuma corridor west of the walk.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><TrainFront className="size-6" />01 · Osaka → Kyoto, your way</h3>
      <p className={copy}>Four railways connect Osaka and Kyoto, all cheap, frequent and easy with an IC card such as ICOCA. The right choice depends on where you sleep in Osaka and where you start in Kyoto, not on which train is fastest on paper. Fares below are per adult, one way, checked 20 November 2026.</p>
      <ul className="mt-5 space-y-4 text-sm leading-relaxed text-soft">
        {plan.transferOptions.map((o) => <li key={o.id}><strong className="text-ink">{o.line} · ¥{o.yen} · about {o.minutes} minutes.</strong> {o.from} → {o.to}. {o.note}</li>)}
      </ul>
      <p className={copy}><strong className="text-ink">Our suggestion for this day.</strong> The Keihan line from Yodoyabashi to Gion-shijo drops you a short walk from Panel Cafe and the start of the walking loop, which makes it the most natural fit. If your Osaka hotel sits near Osaka Station or Umeda, the JR Special Rapid or Hankyu are just as easy. Avoid the commuter rush around 7:30–9:00 and 17:30–19:00 if you can.</p>
      <Links><PlaceLink href="https://www.westjr.co.jp/global/en/">JR West · timetables & fares</PlaceLink><PlaceLink href="https://www.hankyu.co.jp/global/en/">Hankyu Railway · official</PlaceLink><PlaceLink href="https://www.keihan.co.jp/travel/en/">Keihan Railway · official</PlaceLink><PlaceLink href={route("The Royal Park Canvas Osaka Kitahama", "sequence KYOTO GOJO")}>Kitahama hotel → sequence KYOTO GOJO</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-3xl">02 · Breakfast at Panel Cafe</h3>
      <p className={copy}>Our Kyoto breakfast was at <strong className="text-ink">Panel Cafe</strong>, the viral spot for Taiwanese-style fluffy soufflé pancakes and croffles, at Tokiwacho 165 in Gion, beside the Shirakawa canal. The pancakes genuinely live up to the hype and we recommend trying them. It opens at 10:00 and closes at 16:00, with last orders earlier, and a queue often forms, so arrive near opening or reserve ahead through TableCheck.</p>
      <JapanVenueLinks id="panelCafeKyoto" />
      <p className={copy}>Order at the counter and expect the pancakes to take a little while, since each one is made to order. The Google listing score is lower than you might expect for a viral café, largely reflecting queues and waits rather than the pancakes themselves, so treat it as a dated snapshot and go for the food, not the rating.</p>
      <Links><PlaceLink href={route("Gion-shijo Station", "Panel Cafe Kyoto", "walking")}>Gion-shijo → Panel Cafe · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-3xl">03 · The Gion & Higashiyama walk</h3>
      <p className={copy}>From the café, wander south into the prettiest part of old Kyoto. This is a walking afternoon with no entrance tickets needed until Kiyomizu-dera, and the lanes themselves are the sight. Allow 3–4 hours with photo pauses and a tea stop.</p>
      {[
        ["Yasaka Shrine", "The vermilion gates and lantern stage at the east end of Shijo-dori, free to enter and lovely at any hour. The lantern hall glows beautifully towards dusk."],
        ["Maruyama Park", "Kyoto's oldest public park, right behind the shrine, with the famous weeping cherry tree and quiet ponds."],
        ["Nene-no-michi", "A stone-paved lane named after Toyotomi Hideyoshi's wife, lined with machiya townhouses and small temples."],
        ["Ishibei-koji", "A preserved alley of wooden walls and tiled roofs, one of the most atmospheric corners of the city. It is residential, so keep voices low and photography discreet."],
        ["Ninenzaka & Sannenzaka", "The sloped, shop-lined lanes climbing towards Kiyomizu. Tradition says a stumble here brings bad luck, so watch your step on the stones."],
        ["Kiyomizu-dera", "The wooden stage temple above the city. The main hall and stage are the classic finish to the walk, with a small admission fee, checked on the official site before you go."],
      ].map(([title, text]) => <div key={title}><h4 className="mt-6 font-display text-2xl">{title}</h4><p className={copy}>{text}</p><Links><PlaceLink href={maps(`${title} Kyoto`)}>{title} · Maps</PlaceLink></Links></div>)}
      <p className={copy}><strong className="text-ink">Walking note.</strong> The lanes are paved but sloped, with steps near Kiyomizu-dera, so wear comfortable shoes. Gion's private streets, including parts of Hanamikoji, restrict photography of geiko and maiko and of private property. Follow posted signs and be respectful.</p>
      <Links><PlaceLink href={route("Yasaka Shrine Kyoto", "Kiyomizu-dera", "walking")}>Yasaka Shrine → Kiyomizu-dera · walking</PlaceLink><PlaceLink href="https://www.kiyomizudera.or.jp/en/">Kiyomizu-dera · official</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><BedDouble className="size-6" />04 · sequence KYOTO GOJO</h3>
      <p className={copy}>We stayed at <strong className="text-ink">sequence KYOTO GOJO</strong>, at 409 Gojokarasumacho, and this one we genuinely recommend. A beautiful, design-led hotel on Karasuma-dori, an easy walk or one metro stop from both Kyoto Station and the Gion area. Check-in runs from 17:00 and check-out is a wonderfully late 14:00, and the lounge serves drinks and food through the day. The hotel is cashless, so bring a card or a supported QR payment.</p>
      <JapanVenueLinks id="sequenceKyotoGojo" />
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Waves className="size-6" />05 · THE BATH, the hotel onsen</h3>
      <p className={copy}>The hotel's basement bath, <strong className="text-ink">THE BATH</strong>, was a highlight of our stay: a dim, atmospheric bathing space with projection mapping, deep soaking tubs, saunas and rain showers, with the two bathing zones alternating between genders day by day. We came back from the walk, soaked, and let the day end slowly. Stay two nights and you experience both sides.</p>
      <p className={copy}><strong className="text-ink">Tattoos.</strong> Many Japanese onsen and sento still refuse guests with visible tattoos, so always check the specific facility's current policy before you go. Good news here: the hotel's operator removed tattoo restrictions at its public baths, including this one, from 1 March 2026, verified 20 November 2026 against the operator's official notice. Elsewhere in Japan, ask at reception or look for tattoo-friendly listings before undressing.</p>
      <Links><PlaceLink href="https://www.mitsuifudosan-hotelmanagement.com/en/bath-info/">Operator's bathing policy · official notice</PlaceLink><PlaceLink href="https://www.sequencehotels.com/kyoto-gojo/eng/">sequence KYOTO GOJO · THE BATH</PlaceLink></Links>
      <p className={copy}><strong className="text-ink">Onsen manners.</strong> Wash thoroughly at the showers before entering the water, keep towels out of the bath, tie up long hair, and keep voices low. Bathing is nude and separated by gender. If you feel lightheaded, sit out and hydrate.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><UtensilsCrossed className="size-6" />06 · A quiet dinner near the hotel</h3>
      <p className={copy}>Keep the evening calm and eat near Gojo. Three well-rated options along the Karasuma corridor, each an easy walk or one short metro hop from the hotel. Reserve ahead where possible, especially on weekends, and confirm the price per person and accepted cards when booking.</p>
      <h4 className="mt-6 font-display text-2xl">Sankichi Kyoto Wagyu BBQ · Karasuma Main Store</h4>
      <p className={copy}>A smokeless-grill wagyu yakiniku in a Sanjo basement, about 15 minutes on foot north of the hotel. Exceptionally rated, with kind staff and standout cuts. Dinner only, closed Tuesdays, and reservations are strongly recommended, with cancellation fees for no-shows.</p>
      <JapanVenueLinks id="sankichiKarasuma" />
      <h4 className="mt-6 font-display text-2xl">Komefuku · Shijo Karasuma</h4>
      <p className={copy}>A lively, good-value izakaya two minutes from Shijo-Karasuma, frying its tempura in rice-bran oil, with sushi and seafood alongside. Courses from around ¥2,500 per person, open daily until 23:00, with online reservations. The easiest choice for a relaxed, unfussy evening.</p>
      <JapanVenueLinks id="komefukuShijo" />
      <h4 className="mt-6 font-display text-2xl">Karasuma Rock</h4>
      <p className={copy}>A yakiniku and maki-roll spot south of the hotel near Rokujo, open daily 11:00–23:00, so it works even for a late dinner after a long soak. Highly rated and the closest of the three to the hotel.</p>
      <JapanVenueLinks id="karasumaRock" />
    </div>

    <div className="py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Checklist for tomorrow</h3>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-soft">
        <li className="flex gap-2"><CheckSquareIcon />Check the opening hours of tomorrow's first temple or shrine the night before, since Kyoto's sights open early and close early.</li>
        <li className="flex gap-2"><CheckSquareIcon />Charge your IC card and phone, and download the Kyoto City bus and subway map if you plan to use them.</li>
        <li className="flex gap-2"><CheckSquareIcon />If you want another evening in THE BATH, note which bathing zone is open to your gender that day.</li>
        <li className="flex gap-2"><CheckSquareIcon />Carry some yen in cash for small temple admissions and shrine offerings, as not all accept cards.</li>
      </ul>
    </div>
  </section>;
}

function CheckSquareIcon() { return <span className="mt-0.5 inline-block size-4 shrink-0 rounded-sm border border-terracotta" aria-hidden="true" />; }
