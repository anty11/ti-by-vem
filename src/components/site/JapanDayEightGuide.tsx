import { ArrowUpRight, Camera, Clock3, Flower2, Landmark, Sunset, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JapanVenueLinks } from "@/components/site/JapanVenueLinks";
import { japanDayEightPlan as plan } from "@/lib/japan-day-eight-plan";
import artwork from "@/assets/japan-day8-map.png";

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const route = (a: string, b: string, mode = "transit") => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(a)}&destination=${encodeURIComponent(b)}&travelmode=${mode}`;
const copy = "mt-4 text-sm leading-relaxed text-soft";
const maikoya = "Kimono Tea Ceremony MAIKOYA Gion Kiyomizu";
function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm" className="h-auto min-h-9 max-w-full whitespace-normal text-left"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight className="shrink-0" /></a></Button>;
}
function Links({ children }: { children: React.ReactNode }) { return <div className="mt-3 flex flex-wrap gap-2">{children}</div>; }

export function JapanDayEightGuide() {
  const { teaCeremony: tea, rokujuan, k36, matt } = plan;
  return <section aria-label="Japan day 8 detailed guide" className="mt-8 text-ink">
    <header>
      <p className="text-xs font-semibold uppercase text-terracotta">Your guide · Day 08 · Kyoto</p>
      <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Matcha in kimono, a walk in silk and a sunset over the rooftops.</h2>
      <p className={copy}>A tea ceremony in a historic townhouse, dressed in kimono with our hair done, then the slopes of Kiyomizu-dera and the quiet lanes of Komatsucho still in kimono. Flower sweets in the afternoon, the Yasaka Pagoda at golden hour and a dinner with Japanese wine close to the hotel.</p>
    </header>

    <aside className="my-8 border-l-2 border-terracotta pl-5">
      <h3 className="font-display text-2xl">What stayed with us</h3>
      <p className={copy}>Everyone who goes to Kyoto should experience this tea ceremony. It was perfect, and the part we loved most was being dressed in kimono and having our hair styled, so choose a plan that includes both. Our hidden tip: do not go straight back to the shop after the ceremony. Walk the city dressed like this and take a few truly beautiful, authentic photos.</p>
    </aside>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Your day at a glance</h3>
      <p className={copy}>A suggested rhythm, not our recorded times. Book a morning ceremony so you have hours in kimono before the {tea.kimonoReturnBy} return.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["09:00–10:30", "Kimono tea ceremony", "Dressing, hair and matcha at MAIKOYA Gion Kiyomizu."],
        ["10:30–12:00", "Kiyomizu-dera in kimono", "Up the stone slopes to the wooden stage above the city."],
        ["12:00–14:00", "Yasaka Pagoda & Komatsucho", "Slow photo walk through the lanes, then return the kimono."],
        ["15:00–16:00", "Rokujuan", "Clear warabi mochi with edible flowers in a 100 year old house."],
        ["Sunset", "K36 Rooftop", "A drink facing the Yasaka Pagoda as the sun goes down."],
        ["Evening", "Dinner at MATT RESTAURANT 2.0", "Modern Japanese plates and Japanese wine near Gojo."],
      ].map(([time, title, note]) => <li key={title} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"><span className="text-sm font-semibold text-terracotta">{time}</span><div><h4 className="text-sm font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
      <img src={artwork} alt="Schematic Kyoto map with a kimono walking loop from MAIKOYA Gion Kiyomizu up to Kiyomizu-dera and back through the Yasaka Pagoda and Komatsucho lanes, K36 Rooftop beside the pagoda, and Rokujuan, sequence KYOTO GOJO and MATT RESTAURANT 2.0 west of the Kamo River" width={1536} height={1024} className="mt-6 h-auto w-full rounded-lg" />
      <p className="mt-3 text-xs leading-relaxed text-soft">Schematic overview, not street navigation. The kimono loop is about 3 km with steep stone slopes. Rokujuan, the hotel and MATT sit west of the Kamo River.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Flower2 className="size-6" />01 · Kimono tea ceremony at MAIKOYA</h3>
      <p className={copy}>Our ceremony was at MAIKOYA Gion Kiyomizu, inside a Kyoto machiya registered as a national tangible cultural property, with a spacious garden behind it. You choose a kimono, the staff dress you and style your hair, and then an English-speaking host explains the utensils, the etiquette and the meaning of each gesture before you whisk your own bowl of matcha, served with Japanese sweets.</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Choose the right plan.</strong> Pick the kimono and tea ceremony plan, not tea only. Dressing and simple hairstyling for women are included, and that was the highlight for us. The shared plan starts from about ¥{tea.sharedPlanFromYenBeforeTax.toLocaleString("en-US")} per person before tax and a private room from about ¥{tea.privatePlanFromYenBeforeTax.toLocaleString("en-US")}, according to the Kyoto City tourism listing checked {plan.checkedOn}. The live price appears when you book.</li>
        <li><strong className="text-ink">Time and age.</strong> Allow about {tea.durationMinutes} minutes including dressing. Sessions are shared, in English, for ages {tea.minimumAge} and up. Chairs instead of tatami can be requested in advance.</li>
        <li><strong className="text-ink">The kimono stays with you.</strong> Rental continues until {tea.kimonoReturnBy} the same day, so book a morning slot and keep the day free around it.</li>
        <li><strong className="text-ink">Book ahead.</strong> Reserve your slot online as early as you can, especially for spring and autumn.</li>
      </ul>
      <JapanVenueLinks id="maikoyaGionKiyomizu" />
      <Links><PlaceLink href={route("sequence KYOTO GOJO", maikoya, "walking")}>Hotel → MAIKOYA · walking, about 25 minutes</PlaceLink><PlaceLink href={route("sequence KYOTO GOJO", maikoya)}>Hotel → MAIKOYA · subway & bus</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Camera className="size-6" />02 · Our hidden tip, walk the city in kimono</h3>
      <p className={copy}>This is the part people skip. After the ceremony, do not go back to change. Walk up to Kiyomizu-dera and down through the old lanes dressed exactly as you are, and the whole city becomes a backdrop.</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Take small steps.</strong> Zori sandals and stone slopes ask for a slower pace. Keep one small bag in hand so the kimono stays neat.</li>
        <li><strong className="text-ink">Light matters.</strong> The lanes are softest before noon, before the busiest crowds arrive.</li>
        <li><strong className="text-ink">Photograph respectfully.</strong> Step to the side of the lane for photos, never block the way, and never follow or photograph maiko and geiko without permission.</li>
      </ul>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Landmark className="size-6" />03 · Kiyomizu-dera in kimono</h3>
      <p className={copy}>From MAIKOYA, walk east and up Gojozaka and Kiyomizu-zaka to the vermilion Nio-mon gate. The main hall stands on a vast wooden stage above the trees, with all of Kyoto spread below. In kimono, this is the photo of the day.</p>
      <p className={copy}><strong className="text-ink">Hours and admission.</strong> The temple opens at 06:00 every day and usually closes at 18:00. Admission is ¥{plan.kiyomizuAdmissionYen} per adult, paid at the gate, checked {plan.checkedOn}. Follow the signs rather than your map app, as the temple warns that some apps show routes that do not reach the grounds.</p>
      <Links><PlaceLink href="https://www.kiyomizudera.or.jp/en/location/">Kiyomizu-dera · hours & access</PlaceLink><PlaceLink href={maps("Kiyomizu-dera Nio-mon Gate")}>Kiyomizu-dera · Maps</PlaceLink><PlaceLink href={route(maikoya, "Kiyomizu-dera Nio-mon Gate", "walking")}>MAIKOYA → Kiyomizu-dera · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-3xl">04 · Yasaka Pagoda and Komatsucho</h3>
      <p className={copy}>Come back down by Sannenzaka and turn towards the five-storey Yasaka Pagoda, Kyoto's most photographed skyline. Then continue west down Yasaka-dori into Komatsucho, a quieter grid of latticed townhouses, small shrines and stone lanes between the pagoda and Kennin-ji. Fewer tour groups, softer light, and the best spot for unhurried photos before you return the kimono at MAIKOYA, just around the corner.</p>
      <Links><PlaceLink href={maps("Yasaka Pagoda Hokan-ji Kyoto")}>Yasaka Pagoda · Maps</PlaceLink><PlaceLink href={route("Yasaka Pagoda Hokan-ji Kyoto", "Komatsucho Higashiyama Kyoto", "walking")}>Pagoda → Komatsucho · walking</PlaceLink><PlaceLink href={route("Komatsucho Higashiyama Kyoto", maikoya, "walking")}>Komatsucho → MAIKOYA · walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Flower2 className="size-6" />05 · Flower jelly at Rokujuan</h3>
      <p className={copy}>Our special sweet of the day. Rokujuan serves hanawarabi, crystal-clear warabi mochi set with colourful edible flowers, eaten with homemade brown sugar syrup and soybean flour. It sits in the former residence of the painter Imao Keinen, a registered cultural property more than 100 years old, and the staff often show you the tea room and garden before you sit down.</p>
      <p className={copy}>Hanawarabi costs ¥{rokujuan.hanawarabiYen.toLocaleString("en-US")} or ¥{rokujuan.hanawarabiWithMatchaYen.toLocaleString("en-US")} with matcha, according to the café's menu checked {plan.checkedOn}. Open from {rokujuan.opens} with last orders at {rokujuan.lastOrder}. Reserve through the café's booking page, as walk-ins often wait. If you prefer less crossing of the city, Rokujuan also works beautifully as a quiet breakfast before the ceremony.</p>
      <JapanVenueLinks id="rokujuan" />
      <Links><PlaceLink href={route(maikoya, "Rokujuan Nishirokkakucho Kyoto")}>MAIKOYA → Rokujuan · train & walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Sunset className="size-6" />06 · Sunset at K36 Rooftop</h3>
      <p className={copy}>For the view at sunset, we recommend K36 on the fourth floor of The Hotel Seiryu Kyoto Kiyomizu, a former school building. From the rooftop the sun sinks behind the city, and the Yasaka Pagoda stands right in front of you as the lights come on.</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Timing.</strong> The rooftop opens at {k36.rooftopOpens}. Sunset in Kyoto falls around 16:45 in early winter and close to 19:15 in midsummer, so check the time for your date and arrive 30 minutes before.</li>
        <li><strong className="text-ink">Costs.</strong> A cover charge of ¥{k36.coverChargeYenPerPerson.toLocaleString("en-US")} per person plus a {k36.serviceChargePercent}% service charge apply on top of drinks, checked {plan.checkedOn} on the hotel's listing.</li>
        <li><strong className="text-ink">Reservations.</strong> Phone reservations are taken between {k36.phoneBookingHours} on +81 75 541 3636. Hours shorten in winter and a few dates close for private events, so check the official page first.</li>
        <li><strong className="text-ink">Good to know.</strong> Children under 13 are not admitted from {k36.noChildrenUnder13From}. The indoor bar asks for smart casual dress.</li>
      </ul>
      <JapanVenueLinks id="k36Rooftop" />
      <Links><PlaceLink href={route("Rokujuan Nishirokkakucho Kyoto", "The Hotel Seiryu Kyoto Kiyomizu")}>Rokujuan → K36 · train & walking</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><UtensilsCrossed className="size-6" />07 · Dinner at MATT RESTAURANT 2.0</h3>
      <p className={copy}>When we went, the restaurant had only just opened and we were almost alone, but the food was excellent and well worth the visit. MATT serves modern Japanese plates by an Italian-trained chef, built on Kyoto vegetables and wagyu, with around 120 Japanese wines and free tastings to help you choose a glass. Try the wagyu cigarettes, the Kyoto venison or the wagyu rigatoni, and leave room for the charcoal tiramisu.</p>
      <p className={copy}>It is in a basement on Gokuishi-cho, about five minutes on foot from sequence KYOTO GOJO, so the evening ends a short walk from bed. Open from {matt.opensWeekdays} on weekdays and from {matt.opensWeekends} at weekends. A {matt.serviceChargePercent}% service charge applies, according to the restaurant's menu checked {plan.checkedOn}. Reservations are available online.</p>
      <JapanVenueLinks id="mattRestaurant" />
      <Links><PlaceLink href={route("The Hotel Seiryu Kyoto Kiyomizu", "MATT RESTAURANT 2.0 Kyoto 368 Gokuishi-cho")}>K36 → MATT · train & walking</PlaceLink><PlaceLink href="https://www.tablecheck.com/en/matt-restaurant">MATT · reservations</PlaceLink><PlaceLink href={route("MATT RESTAURANT 2.0 Kyoto 368 Gokuishi-cho", "sequence KYOTO GOJO", "walking")}>MATT → hotel · walking</PlaceLink></Links>
    </div>

    <div className="py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Checklist for tomorrow</h3>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-soft">
        <li className="flex gap-2"><CheckSquareIcon />Back up today's kimono photos to the cloud before you sleep.</li>
        <li className="flex gap-2"><CheckSquareIcon />Check tomorrow's train times and top up your IC card.</li>
        <li className="flex gap-2"><CheckSquareIcon />Confirm any reservations for tomorrow and note their opening hours.</li>
        <li className="flex gap-2"><CheckSquareIcon />Rest your feet after the slopes and charge your phone and power bank.</li>
      </ul>
    </div>
  </section>;
}

function CheckSquareIcon() { return <span className="mt-0.5 inline-block size-4 shrink-0 rounded-sm border border-terracotta" aria-hidden="true" />; }
