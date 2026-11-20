import { ArrowUpRight, CheckSquare, Clock3, ShoppingBag, TrainFront, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JapanVenueLinks } from "@/components/site/JapanVenueLinks";
import { japanDayFourPlan as plan } from "@/lib/japan-day-four-plan";
import artwork from "@/assets/japan-day4-map.png";

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const route = (a: string, b: string, mode = "transit") => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(a)}&destination=${encodeURIComponent(b)}&travelmode=${mode}`;
const copy = "mt-4 text-sm leading-relaxed text-soft";
function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm" className="h-auto min-h-9 max-w-full whitespace-normal text-left"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight className="shrink-0" /></a></Button>;
}
function Links({ children }: { children: React.ReactNode }) { return <div className="mt-3 flex flex-wrap gap-2">{children}</div>; }

export function JapanDayFourGuide() {
  return <section aria-label="Japan day 4 detailed guide" className="mt-8 text-ink">
    <header>
      <p className="text-xs font-semibold uppercase text-terracotta">Your guide · Day 04 · Osaka / Namba / Shinsaibashi</p>
      <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">One last taste of Osaka.</h2>
      <p className={copy}>Warm cheesecake, fruit tucked into mochi, a hot fish-shaped pastry filled with vanilla cream, second-hand finds and a Japanese grill dinner. Less sightseeing, more following your appetite.</p>
    </header>

    <aside className="my-8 border-l-2 border-terracotta pl-5">
      <h3 className="font-display text-2xl">Our honest take</h3>
      <p className={copy}>We have to admit that Osaka did not really win us over. With hindsight, we would not spend this many days here. That is our personal feeling, not a reason for you to dislike it. What worked much better for us was this last day: trying Japanese food, browsing BOOKOFF shops for clothes and wandering the shopping streets without another list of sights.</p>
      <p className={copy}>If you are ready for a change of scene, swap today's daytime programme for one of the three day trips below. Choose one, not all three. The Osaka dinner and lounge can still be your evening finish if your return train and energy allow.</p>
    </aside>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Your day at a glance</h3>
      <p className={copy}>A suggested rhythm, not our recorded times. Let queues, shopping finds and your dinner reservation set the pace.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["09:30–11:00", "Namba & Rikuro's cheesecake", "Metro from Kitahama, a warm cake and a gentle start."],
        ["11:00–13:00", "Fruit daifuku & BOOKOFF PLUS", "Takashimaya's food floor, then the clothing floor on Ebisubashi."],
        ["13:00–16:30", "Lunch, Dotonbori & Shinsaibashi", "Browse the covered arcade and try a few more Japanese bites."],
        ["Afternoon pause", "Taiyaki with vanilla cream", "A hot fish-shaped pastry, eaten fresh on the walking loop."],
        ["18:30–20:00", "Yakiniku Gorichan", "Book the branch you actually intend to visit."],
        ["After dinner", "Octave, or back to the hotel", "An optional adults-only shisha finish, with your return journey checked."],
      ].map(([time, title, note]) => <li key={title} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"><span className="text-sm font-semibold text-terracotta">{time}</span><div><h4 className="text-sm font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
      <img src={artwork} alt="Schematic Kitahama to Namba, Dotonbori and Shinsaibashi walking route with a taiyaki stop and separate Nara, Kyoto and Himeji excursions" width={1536} height={1024} className="mt-6 h-auto w-full rounded-lg" />
      <p className="mt-3 text-xs leading-relaxed text-soft">Schematic overview, not street or railway navigation. The walking loop links Namba, Dotonbori and Shinsaibashi. The regional inset shows three separate alternatives, not a single route.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-3xl">01 · Kitahama → Namba, by metro</h3>
      <p className={copy}>Take the Sakaisuji metro from Kitahama to Nippombashi, then walk west towards Namba, or use the Midosuji line from Yodoyabashi to Namba if that is more convenient from your hotel. Allow around 25–40 minutes door to door. Namba has several station complexes, so follow the live walking directions for the exit nearest Rikuro's rather than just the station name.</p>
      <Links><PlaceLink href={route("The Royal Park Canvas Osaka Kitahama", "Rikuro Ojisan Namba Main Store")}>Hotel → Rikuro's Namba</PlaceLink><PlaceLink href="https://subway.osakametro.co.jp/en/">Osaka Metro · network & notices</PlaceLink></Links>
      <p className={copy}><strong className="text-ink">Getting around all day.</strong> The metro and your feet cover every stop below. Travel light, carry only what you can comfortably walk with, and keep your passport handy if you plan tax-free shopping. Give yourself a seated break between pastry stops rather than eating on the move through the crowds.</p>
      <Links><PlaceLink href="https://www.takashimaya.co.jp/osaka/access/">Osaka Takashimaya · official access</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-3xl">02 · A little Osaka sweet trail</h3>
      <p className={copy}>We spent the day trying Japanese foods instead of chasing more sights. The cheesecake, the fruit-filled mochi and the custard taiyaki belong to that memory. The named shops and extra sweets below are suggestions to make your own version easy. Some are Osaka specialities, others are Japanese favourites you can enjoy here.</p>
      <h4 className="mt-6 font-display text-2xl">Rikuro Ojisan · the famous wobbling cheesecake</h4>
      <p className={copy}>Start at the Namba main store, 3-2-28 Namba. This is a light, soufflé-style Japanese cheesecake, not a dense New York slice, and its base contains raisins. Watch the fresh cakes being stamped if the timing works. Allow 20–45 minutes including a possible queue. Ask which queue is for freshly baked cake and whether you are buying a whole cake or a café serving. Check egg, milk and wheat allergens.</p>
      <JapanVenueLinks id="rikuroNamba" />
      <p className={copy}>Ground-floor takeaway and the upstairs café have different opening arrangements. The café has announced closure from 1 December to 3 January, so check its current notice rather than assuming a table is available when takeaway is open. Follow the staff's storage advice and find a permitted place to eat rather than walking through a crowded shop with food.</p>
      <Links><PlaceLink href="https://www.rikuro.co.jp/shoplist/1335.html">Rikuro's café · current notices</PlaceLink></Links>

      <h4 className="mt-6 font-display text-2xl">Fruit daifuku · the fruit-in-mochi treat</h4>
      <p className={copy}>The name to look for is <strong className="text-ink">fruit daifuku</strong>, or <strong className="text-ink">ichigo daifuku</strong> for the strawberry version. Soft mochi wraps fruit and usually sweet bean paste, although fillings vary. A practical suggestion is Isshindo on Osaka Takashimaya's B1 food floor at 5-1-5 Namba, about 5–10 minutes from Rikuro's. Strawberry, pineapple and melon varieties change seasonally. Its mixed-juice daifuku is a particularly Osaka-inspired option, combining fruit with banana-flavoured bean paste.</p>
      <JapanVenueLinks id="issindoNamba" />
      <p className={copy}>Ask about refrigeration and the same-day eating window before carrying fresh fruit and cream around for hours. Mochi is sticky, so take small bites and supervise children. Allow 20–30 minutes to browse the food floor.</p>

      <h4 className="mt-6 font-display text-2xl">Taiyaki · the fish-shaped pastry with vanilla cream</h4>
      <p className={copy}>The name to look for is <strong className="text-ink">taiyaki</strong> (<strong className="text-ink">たい焼き</strong>), a warm fish-shaped pastry. The word literally means "baked sea bream". The classic centre is sweet red bean, so <strong className="text-ink">ask for custard</strong> (カスタード) when you want the pale vanilla cream we had. Most shops bake in front of you, so a short wait usually means a hotter pastry.</p>
      <JapanVenueLinks id="narutoNihonbashi" />
      <p className={copy}>A practical first choice is <strong className="text-ink">Naruto Taiyaki Honpo on Nihonbashi</strong>, 2-1-1 Nanbanaka, a few minutes west of the Dotonbori canal and on your way towards Shinsaibashi. Custard, red bean and Naruto sweet potato are the standing fillings, seasonal ones appear, and several visitors note payment is cash only, so carry some yen. Allow 10–20 minutes including the queue.</p>
      <JapanVenueLinks id="narutoSennichimae" />
      <p className={copy}>If you are already near Nippombashi, <strong className="text-ink">Naruto Taiyaki Honpo at Sennichimae 1-4-10</strong> keeps the same custard filling and stays open late into the night. Fillings can run out before closing, so do not save this stop for the very end of the day.</p>
      <JapanVenueLinks id="fukuhachiShinsaibashi" />
      <p className={copy}>For a thinner, crispier skin close to the arcade, <strong className="text-ink">Fukuhachi at 1-10-1 Nishishinsaibashi</strong> sits just inside America-mura, about five minutes from Shinsaibashi-suji. Its fillings rotate and the counter closes early in the evening, so treat it as an afternoon pause rather than a late one.</p>
      <p className={copy}><strong className="text-ink">Eating it well.</strong> Taiyaki is best within minutes of leaving the mould: the skin softens quickly and the custard stays hot inside the tail. Eat it standing or seated where permitted rather than carrying it through the crowd, and bite carefully because the head end is often the hottest. Custard is dairy, so in warm weather finish it rather than saving it for the hotel.</p>
      <Links><PlaceLink href={route("Namba Station Osaka", "Naruto Taiyaki Honpo Osaka Nihonbashi", "walking")}>Namba → Nihonbashi taiyaki</PlaceLink><PlaceLink href={route("Naruto Taiyaki Honpo Osaka Nihonbashi", "Shinsaibashi Station", "walking")}>Taiyaki → Shinsaibashi</PlaceLink><PlaceLink href="https://taiyaki.co.jp/">Naruto Taiyaki · fillings & store finder</PlaceLink></Links>

      <h4 className="mt-6 font-display text-2xl">A few more tastes worth looking for</h4>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Mitarashi dango.</strong> Chewy rice dumplings with a sweet-salty soy glaze. Osaka's mitarashi komochi variation puts the syrup inside the dumpling. A lovely small souvenir when sold in a travel-friendly pack.</li>
        <li><strong className="text-ink">Osaka mixed juice.</strong> A creamy fruit drink associated with the city's kissaten cafés. Not a pastry, but a very local sweet pause.</li>
        <li><strong className="text-ink">Dorayaki & matcha sweets.</strong> Red-bean pancake sandwiches and tea-flavoured cakes are Japanese classics, not exclusively Osaka creations. Department-store food halls make comparison easy.</li>
        <li><strong className="text-ink">Something savoury between sweets.</strong> Try takoyaki or okonomiyaki for Osaka's stronger local food identity. Takoyaki centres can be extremely hot. Order a small portion and give it time to cool.</li>
      </ul>
      <Links><PlaceLink href="https://osaka-info.jp/en/">Osaka tourism · local food</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><ShoppingBag className="size-6" />03 · BOOKOFF, but make it clothes</h3>
      <p className={copy}>We went from BOOKOFF to BOOKOFF looking for clothes, one of the advantages of giving yourself a day without strict sightseeing. Not every branch sells clothing. “PLUS” and “SUPER BAZAAR” are useful clues, but always check the actual store's categories. The branches below are researched shopping options, not a claim that we visited every one.</p>
      <h4 className="mt-6 font-display text-2xl">BOOKOFF PLUS Namba Ebisubashi · your first choice</h4>
      <p className={copy}>At 1-5-16 Namba, Osaka B&amp;V Building, the <strong className="text-ink">third floor is explicitly listed for apparel and high-end brands</strong>. This is the strongest central choice for your clothing hunt. The second floor focuses on books, games and hobbies. Walk about 5–10 minutes from Takashimaya and allow 45–90 minutes to browse. The clothing floor is listed as 10:00–21:00, closing earlier than the book floor, so check the current branch page.</p>
      <Links><PlaceLink href="https://www.bookoff.co.jp/shop/shop20457.html">Namba PLUS · floors & hours</PlaceLink><PlaceLink href={maps("BOOKOFF PLUS なんば戎橋店 難波1-5-16")}>Namba Ebisubashi · Maps</PlaceLink></Links>
      <h4 className="mt-6 font-display text-2xl">BOOKOFF Osaka Shinsaibashi · a browsing add-on</h4>
      <p className={copy}>At 3-6-21 Minamisenba, about five minutes from Shinsaibashi Station. An easy extra stop when you are already walking north, especially for books, games and collectibles. For a clothing-first day, prioritise Namba PLUS and check Shinsaibashi's current handled categories before making a special trip. Allow 20–40 minutes if browsing, not a whole afternoon.</p>
      <Links><PlaceLink href="https://www.bookoff.co.jp/shop/shop20345.html">Shinsaibashi · branch categories</PlaceLink><PlaceLink href={maps("BOOKOFF 大阪心斎橋店 南船場3-6-21")}>BOOKOFF Shinsaibashi · Maps</PlaceLink></Links>
      <h4 className="mt-6 font-display text-2xl">BOOKOFF SUPER BAZAAR Moriguchi Jaguar Town · the bigger hunt</h4>
      <p className={copy}>A larger, confirmed clothing-shopping option at 2-9-10 Sata-higashimachi, Moriguchi, Jaguar Town East. Take the Tanimachi metro to Dainichi, then walk about 15 minutes. Allow roughly 50–70 minutes each way from central Namba with the transfer and 1.5–2 hours in the shop. This is a separate suburban excursion, not a nearby extra on the arcade walk. Choose it instead of part of the central browsing, not on top of everything.</p>
      <Links><PlaceLink href="https://www.bookoff.co.jp/shop/shop20475.html">Moriguchi · official access</PlaceLink><PlaceLink href="https://www.bookoff.co.jp/buy/shop/shop20475_tenpo.html">Moriguchi · clothing department</PlaceLink><PlaceLink href={route("Namba Station Osaka", "BOOKOFF SUPER BAZAAR Moriguchi Jaguar Town")}>Namba → Moriguchi store</PlaceLink></Links>
      <p className={copy}><strong className="text-ink">Before buying.</strong> Japanese sizing may differ from yours, so try items on where allowed. Check seams, stains, zips, shoe soles and the condition grade. Second-hand purchases and returns follow the store's terms. Do not assume designer authentication, tax-free eligibility or an exchange promise from a bargain label. Carry your passport if you plan eligible tax-free shopping and check the current procedure. Use the metro for the suburban option.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-3xl">04 · Dotonbori → Shinsaibashi-suji</h3>
      <p className={copy}>From Namba Ebisubashi, walk to Ebisubashi Bridge for the Dotonbori canal and neon signs, then head north through <strong className="text-ink">Shinsaibashi-suji Shopping Street</strong>, Osaka's famous covered shopping arcade. The walk itself is short, roughly 15–25 minutes without stops, but give browsing, lunch and little food pauses 2–3 hours. Mix the bigger shops with second-hand finds rather than trying to buy everything in one place.</p>
      <h4 className="mt-5 font-semibold">Ebisubashi Bridge & Dotonbori</h4><p className={copy}>A brief canal pause before the arcade. Watch bags and phones in the dense crowds and step aside for photos rather than blocking the bridge.</p>
      <Links><PlaceLink href={maps("Ebisubashi Bridge Osaka")}>Ebisubashi Bridge · Maps</PlaceLink></Links>
      <h4 className="mt-5 font-semibold">Shinsaibashi-suji Shopping Street</h4><p className={copy}>The covered arcade is useful if the weather turns. Look upstairs as well as at street level, but check signs before entering private buildings. Keep shopping bags manageable and stop for a seated drink when you need one.</p>
      <Links><PlaceLink href="https://www.shinsaibashi.or.jp/">Shopping street · official directory</PlaceLink><PlaceLink href={route("Ebisubashi Bridge Osaka", "Shinsaibashi Station", "walking")}>Bridge → Shinsaibashi · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><UtensilsCrossed className="size-6" />05 · Dinner at Yakiniku Gorichan</h3>
      <p className={copy}>Our dinner was at Yakiniku Gorichan. For this compact route, the suggested booking is the <strong className="text-ink">Shinsaibashi branch</strong>, 1-3-13 Shinsaibashisuji, Chacha Shinsaibashi Building, second floor. That is a route-friendly branch choice, not an identification of our exact table. Allow 1–1.5 hours for dinner and reserve ahead, especially on a weekend.</p>
      <JapanVenueLinks id="gorichanShinsaibashi" />
      <p className={copy}>Yakiniku means grilling small cuts at your table. Compare the actual cuts and course, tell staff about allergies, and ask how long each cut needs cooking. Use separate utensils for raw and cooked meat and do not treat raw-meat dishes as a must-try. Order gradually, richly marbled beef can be filling. Wagyu on the menu does not automatically mean certified Kobe beef. Confirm the price per person, drinks, seating duration, cancellation terms and accepted card when booking.</p>
      <p className={copy}>The Shinsaibashi branch announced reopening in July 2026, while some booking listings retained older closure notices. Confirm directly for your date. If you prefer the <strong className="text-ink">Umeda main store, 8-21 Doyamacho, basement floor</strong>, use its own booking page and allow a metro transfer back to Shinsaibashi for Octave. Do not reserve one branch and navigate to another.</p>
      <JapanVenueLinks id="gorichanUmeda" />
      <p className={copy}>For both branches, walk or use the metro. The score shown for Shinsaibashi is a dated secondary Google listing snapshot, not a live guarantee or an assessment of the branch you personally choose.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-3xl">06 · Octave, an optional late finish</h3>
      <p className={copy}>We finished with shisha at Octave. <strong className="text-ink">Octave Osaka, 1-4-28 Shinsaibashisuji, Taiho Building</strong>, combines café, bar and lounge spaces, a short walk from the suggested Shinsaibashi dinner. Use the exact Osaka address, not another venue with the same name. Allow 1–1.5 hours if you stay, or simply go back to the hotel when the day's shopping catches up with you.</p>
      <JapanVenueLinks id="octaveOsaka" />
      <p className={copy}>Shisha is served in the bar/lounge areas, not automatically throughout the café. Ask about seating, booking, cover or service charges, minimum drinks, sharing limits and the final cost per person before ordering. Take photo ID, tobacco use in Japan is for ages 20 and over and venue entry rules can be stricter. This is not a family stop. Shisha smoke is harmful, even with tobacco-free mixtures, so skipping it is a perfectly good finish.</p>
      <p className={copy}>Check the last metro connection to Kitahama before settling in. Late opening does not mean late trains. Use a licensed taxi if the metro has finished and confirm the fare arrangements.</p>
      <Links><PlaceLink href={route("Yakiniku Gorichan Shinsaibashi", "Octave Osaka", "walking")}>Dinner → Octave · walk</PlaceLink><PlaceLink href={route("Octave Osaka", "The Royal Park Canvas Osaka Kitahama")}>Octave → hotel</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><TrainFront className="size-6" />Or trade the city day for one of these</h3>
      <p className={copy}>Three researched alternatives if, like us, you feel ready to leave Osaka for the day. These are not additional trips we claim to have made on day 4. Choose one and check whether it appears later in your Japan itinerary before repeating it. All rail times are approximate, verify your date and the return train. An Osaka Metro ticket does not cover every regional railway and an IC card alone is not a Shinkansen ticket.</p>
      {plan.dayTrips.map(trip => <article key={trip.id} className="border-t border-border py-6">
        <p className="text-xs font-semibold uppercase text-terracotta">{trip.mood}</p>
        <h4 className="mt-2 font-display text-3xl">{trip.name}</h4>
        <p className={copy}><strong className="text-ink">Getting there.</strong> {trip.train}</p>
        <Links><PlaceLink href={route(trip.start, trip.end)}>{trip.start} → {trip.end}</PlaceLink><PlaceLink href={trip.railway}>Railway · tickets & schedules</PlaceLink></Links>
        <p className={copy}><strong className="text-ink">A simple day.</strong> {trip.walk}</p>
        {trip.stops.map(stop => <div key={stop} className="mt-4"><p className="text-sm font-semibold">{stop}</p><Links><PlaceLink href={maps(stop)}>{stop} · Maps</PlaceLink></Links></div>)}
        <Links><PlaceLink href={trip.official}>{trip.name} · official visitor information</PlaceLink></Links>
        <p className={copy}>Explore on foot or with local transit. If returning for Gorichan, choose a realistic train home and leave at least 45–60 minutes between Osaka arrival and your dinner reservation. Do not let a lounge booking rush the day trip.</p>
      </article>)}
    </div>

    <div className="border-y border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><CheckSquare className="size-5" />Before tomorrow</h3>
      <ul className="mt-5 space-y-3">{["Check your next destination, departure station and train reservation", "Confirm check-out and luggage storage if leaving Osaka", "Pack your second-hand finds and keep receipts with any tax-free documents", "Eat custard taiyaki and fresh cream pastries within the shop's storage advice", "Charge your phone and power bank, save the next hotel's address", "Check the forecast and leave space for a proper night's sleep"].map(item => <li key={item}><label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-soft"><input type="checkbox" className="mt-1 size-4 shrink-0 accent-primary" />{item}</label></li>)}</ul>
      <p className="mt-5 text-sm text-soft">Changing the day around a dinner reservation or a shopping detour? Ask the Trip agent to adjust the order around your confirmed plans.</p>
    </div>
  </section>;
}