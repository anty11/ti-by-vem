import { ArrowUpRight, CheckSquare, Clock3, Footprints, ShieldAlert, Sparkles, TrainFront, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JapanVenueLinks } from "@/components/site/JapanVenueLinks";
import { japanDayTwoPlan } from "@/lib/japan-day-two-plan";
import dayMap from "@/assets/japan-day2-map.png";
import gardenPhoto from "@/assets/japan-day2-teamlab.jpg.asset.json";

const maps = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const directions = (from: string, to: string, mode = "transit", via?: string) => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(from)}&destination=${encodeURIComponent(to)}&travelmode=${mode}${via ? `&waypoints=${encodeURIComponent(via)}` : ""}`;
function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm" className="h-auto min-h-9 max-w-full whitespace-normal text-left"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight className="shrink-0" /></a></Button>;
}
function Links({ children }: { children: React.ReactNode }) { return <div className="mt-3 flex flex-wrap gap-2">{children}</div>; }

export function JapanDayTwoGuide() {
  return <section aria-label="Japan day 2 detailed guide" className="mt-8 text-ink">
    <header>
      <p className="text-xs font-semibold uppercase text-terracotta">Your guide · Day 02 · Osaka</p>
      <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Osaka, from castle gardens to a forest of light.</h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-soft">Coffee by the river, castle walls, colourful old Osaka and an evening that feels like stepping into another world.</p>
      <img src={gardenPhoto.url} alt="Illuminated egg-shaped artworks among the trees at teamLab Botanical Garden Osaka" width={1200} height={630} className="mt-6 aspect-[16/9] w-full rounded-lg object-cover" />
      <p className="mt-2 text-xs text-soft">teamLab Botanical Garden Osaka · photograph from teamLab</p>
    </header>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-2xl">A special memory, a different morning for you</h3>
      <p className="mt-4 text-sm leading-relaxed text-soft">We spent our second morning at EXPO 2025. It was a special, once-in-a-lifetime part of being in Japan at that moment. The exhibition ended on 13 October 2025, so it is not part of the programme you can book now. Instead, we would start with a slow riverside breakfast and Nakanoshima, then give Osaka Castle and its gardens the time they deserve.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">The castle walk, Shinsekai and the illuminated botanical garden come from our trip. Breakfast, Kuromon lunch and the three dinner addresses below are researched suggestions, not restaurants we personally tried.</p>
      <Links><PlaceLink href="https://www.expo2025.or.jp/en/">EXPO 2025 · our trip's context</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Your day at a glance</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Suggested timings, not our recorded times. Match the evening to your teamLab ticket and dinner reservation. Walking and transfer allowances include time to find station exits.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["08:00–09:30", "Kitahama breakfast & Nakanoshima", "Coffee, a pastry and a gentle riverside start."],
        ["10:00–12:15", "Osaka Castle & gardens", "Moats, castle views and an optional visit inside the tower."],
        ["12:45–13:45", "Kuromon Market lunch", "Choose a few small dishes rather than one enormous meal."],
        ["14:15–16:30", "Shinsekai & Tsutenkaku", "Ebisuhigashi, the tower and Janjan Yokocho, then leave via Dobutsuen-mae."],
        ["17:00 onwards", "Nagai & your evening", "Early dinner if the exhibition opens late, otherwise teamLab first and dinner afterwards."],
      ].map(([time, title, note]) => <li key={title} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"><span className="text-sm font-semibold text-terracotta">{time}</span><div><h4 className="text-sm font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
      <img src={dayMap} alt="Schematic Osaka day 2 route from Kitahama and Nakanoshima to Osaka Castle, Kuromon, Shinsekai and Nagai" width={1536} height={1024} loading="lazy" className="mt-6 h-auto w-full rounded-lg" />
      <p className="mt-3 text-xs leading-relaxed text-soft">Schematic overview, not street-level navigation. Dotted connections are transfers, not a continuous walk. Follow the separate navigation links below.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><TrainFront className="size-5" />A metro day, not a driving day</h3>
      <p className="mt-4 text-sm leading-relaxed text-soft">Use your ICOCA or Suica and keep the car at your accommodation's arranged parking all day if you have one. Do not assume The Royal Park Canvas has its own parking. Confirm an overnight arrangement with reception rather than moving the car between these crowded neighbourhoods. Every stop below is reached by train or on foot.</p>
      <Links><PlaceLink href={maps("The Royal Park Canvas Osaka Kitahama")}>Hotel & reception</PlaceLink><PlaceLink href="https://subway.osakametro.co.jp/en/">Osaka Metro · routes & service</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-3xl">01 · Breakfast beside the river</h3>
      <p className="mt-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Brooklyn Roasting Company Kitahama.</strong> A lovely easy start near your hotel, with specialty coffee, baked goods and a riverside outlook. Think coffee and a pastry, not a guaranteed cooked breakfast menu. Allow 45–60 minutes. Published listings indicate an 08:00 opening, but check the café's latest notice before setting out.</p>
      <JapanVenueLinks id="brooklynKitahama" />
      <p className="mt-5 text-sm leading-relaxed text-soft"><strong className="text-ink">Nakanoshima Park.</strong> Walk across towards the island for the river paths, rose garden and views of the Central Public Hall. The roses are seasonal, the riverside is enjoyable without them. Allow 30–45 minutes, roughly 1–1.5 km depending on your loop. Keep the car at your arranged overnight parking.</p>
      <Links><PlaceLink href={maps("Nakanoshima Park Osaka")}>Nakanoshima Park · walk</PlaceLink><PlaceLink href={maps("Osaka City Central Public Hall")}>Central Public Hall · exterior</PlaceLink></Links>
      <p className="mt-4 text-sm leading-relaxed text-soft">For the castle, walk to Tenmabashi or take the Keihan line one stop from Kitahama to Tenmabashi, then walk towards Otemon Gate. Allow 25–40 minutes from the riverside, depending on where you finish breakfast.</p>
      <Links><PlaceLink href={directions("Kitahama Station Osaka", "Osaka Castle Otemon Gate")}>Kitahama → castle · transit</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-3xl">02 · Osaka Castle & its gardens</h3>
      <p className="mt-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Osaka Castle.</strong> We walked around the castle and gardens. Enter through Otemon, enjoy the huge stone walls and moat, then continue towards the main tower. This is one of Osaka's essential sights, but it is the whole setting that makes the visit, not only the queue for the museum. Allow 2–2.5 hours for the park and a tower visit, or around 90 minutes for the outdoor walk.</p>
      <Links><PlaceLink href={maps("Osaka Castle Otemon Gate")}>Otemon Gate · start</PlaceLink><PlaceLink href={maps("Osaka Castle Museum")}>Castle tower · Maps</PlaceLink><PlaceLink href="https://www.osakacastle.net/">Museum · tickets & hours</PlaceLink></Links>
      <p className="mt-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Nishinomaru Garden.</strong> A worthwhile garden viewpoint for the castle. It is a separately managed, paid garden with its own opening days. Check access before adding it. The wider castle park is free, while the museum and garden have separate admission. Cherry blossom and plum displays depend on the season.</p>
      <Links><PlaceLink href={maps("Nishinomaru Garden Osaka Castle")}>Nishinomaru Garden · Maps</PlaceLink><PlaceLink href="https://osaka-info.jp/en/spot/osaka-castle-park/">Castle park · visitor information</PlaceLink></Links>
      <p className="mt-4 text-sm leading-relaxed text-soft">Leave the car at your overnight parking. For lunch, walk to Tanimachi 4-chome, take the Tanimachi line to Tanimachi 9-chome and change to the Sennichimae line for Nippombashi. Allow 35–45 minutes door to door, including the walk out of the park.</p>
      <Links><PlaceLink href={directions("Osaka Castle", "Kuromon Ichiba Market")}>Castle → Kuromon · transit</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-3xl">03 · Kuromon Market, a little taste of Osaka</h3>
      <p className="mt-4 text-sm leading-relaxed text-soft">Our suggested lunch stop is <strong className="text-ink">Kuromon Ichiba</strong>, a covered food market near Nippombashi. Browse first, compare displayed prices and choose a few bites of grilled seafood, fruit or takoyaki. Some stalls are expensive and dishes are priced individually, so check what the portion includes before ordering. Eat at the stall's designated space rather than walking with food. Opening days and times vary by shop.</p>
      <Links><PlaceLink href={maps("Kuromon Ichiba Market")}>Kuromon Market · Maps</PlaceLink><PlaceLink href="https://kuromon.com/en/">Market · shops & information</PlaceLink></Links>
      <p className="mt-4 text-sm leading-relaxed text-soft">Allow 45–60 minutes. Keep the car at your overnight parking. For Shinsekai, walk about 20–30 minutes south along Sakaisuji to Ebisuhigashi, or take the Sakaisuji line from Nippombashi one stop to Ebisucho and walk. Do not extend this walk south into Sanno.</p>
      <Links><PlaceLink href={directions("Kuromon Ichiba Market", "Tsutenkaku", "walking")}>Kuromon → Tsutenkaku · walk</PlaceLink><PlaceLink href={maps("Ebisucho Station Osaka")}>Ebisucho Station</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Footprints className="size-6" />04 · The colourful side of old Osaka</h3>
      <ol className="mt-5 space-y-6 text-sm leading-relaxed text-soft">{[
        ["Ebisuhigashi", "Start around the northern approach to Tsutenkaku, where retro signs, small restaurants and the tower set the scene.", "Ebisuhigashi Tsutenkaku Osaka"],
        ["Tsutenkaku", "Our walk included this unmistakable tower. Enjoy it from the street, or add the observation deck if you want the skyline. Allow extra time for queues and check the separate attraction tickets.", "Tsutenkaku Osaka"],
        ["Shinsekai", "Stay on the lively restaurant streets around the tower. This is Osaka in full colour, with kushikatsu signs and a completely different mood from Kitahama.", "Shinsekai Osaka"],
        ["Janjan Yokocho", "Follow the short covered arcade, then finish by Dobutsuen-mae Station. It is a browsing stop, not a reason to keep exploring farther south.", "Janjan Yokocho Osaka"],
      ].map(([name, note, query]) => <li key={name}><h4 className="font-semibold text-ink">{name}</h4><p className="mt-2">{note}</p><Links><PlaceLink href={maps(query ?? "Shinsekai Osaka")}>{name} · Maps</PlaceLink>{name === "Tsutenkaku" && <PlaceLink href="https://www.tsutenkaku.co.jp/">Tower · visitor information</PlaceLink>}</Links></li>)}</ol>
      <p className="mt-5 text-sm leading-relaxed text-soft">Allow 1.5–2 hours for roughly 1–2 km with photographs and café breaks. Keep the car at your overnight parking.</p>
      <aside className="mt-6 border-l-2 border-terracotta pl-4">
        <h4 className="flex items-center gap-2 font-semibold"><ShieldAlert className="size-5 shrink-0" />Our clear advice: skip Sanno & Tobita Shinchi</h4>
        <p className="mt-3 text-sm leading-relaxed text-soft">We accidentally walked into the adult-entertainment streets around Sanno and Tobita Shinchi. People outside establishments were soliciting customers. As two women walking there, we did not feel safe or comfortable, so we would not include it in your sightseeing route. This describes our experience, not every street or resident in the wider neighbourhood.</p>
        <p className="mt-3 text-sm leading-relaxed text-soft">Finish Janjan Yokocho and go directly to Dobutsuen-mae Station. Do not continue south or southeast into the adult-entertainment lanes, and do not follow a walking shortcut through them to Nagai. Avoid engaging with touts or photographing premises and people. If uncomfortable, return to a busy street or staffed station, or take a taxi. For an immediate emergency in Japan, call 110.</p>
        <Links><PlaceLink href={directions("Janjan Yokocho Osaka", "Dobutsuen-mae Station Osaka", "walking")}>Janjan → Dobutsuen-mae · exit walk</PlaceLink></Links>
      </aside>
      <p className="mt-5 text-sm leading-relaxed text-soft">From Dobutsuen-mae take the Midosuji line south towards Nakamozu and get off at Nagai, four stops later. Allow 20–30 minutes to the station area, then another 10–15 minutes to the botanical garden entrance from Metro Exit 3. Keep the car parked, do not walk the whole transfer.</p>
      <Links><PlaceLink href={directions("Dobutsuen-mae Station Osaka", "Nagai Station Osaka")}>Dobutsuen-mae → Nagai · metro</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Sparkles className="size-6" />05 · A beautiful evening in a garden of light</h3>
      <p className="mt-4 text-sm leading-relaxed text-soft"><strong className="text-ink">{japanDayTwoPlan.evening}.</strong> This was our beautiful evening walk. The botanical garden turns into an outdoor world of glowing forms, illuminated trees and reflections on the water. Do not rush it or treat it as one quick photo stop. Allow 1.5–2 hours to wander.</p>
      <Links><PlaceLink href={maps("teamLab Botanical Garden Osaka entrance")}>teamLab entrance · Maps</PlaceLink><PlaceLink href="https://www.teamlab.art/e/botanicalgarden/">Official programme, tickets & venue map</PlaceLink></Links>
      <details open className="mt-6 border-t border-border pt-5"><summary className="cursor-pointer font-display text-2xl">Before you book</summary><div className="mt-4 space-y-4 text-sm leading-relaxed text-soft">
        <p><strong className="text-ink">Choose the date first.</strong> This is a nighttime exhibition, not the normal daytime garden admission. Buy a ticket through the official site and follow its entry conditions. Hours and closure dates vary seasonally. The published schedule for 9 November 2026–31 January 2027 is 18:00–21:30, with last entry at 20:30 and listed closures on 14 December and 18 January. Check your exact date instead of assuming these hours apply all year.</p>
        <p><strong className="text-ink">Leave room for dinner.</strong> If entry starts around 19:00 on your travel date, eat first and finish with the lights. With an earlier opening, you can visit first and reserve dinner around 20:00–20:30. Allow 15–25 minutes to walk back towards the restaurants by Nagai Station. Do not book a table immediately after your planned exit.</p>
        <p><strong className="text-ink">Dress for outside.</strong> Wear comfortable closed shoes for dark or uneven paths, bring a warm layer or rain protection and use mosquito repellent in warmer months. Extreme weather can close the exhibition and some artworks may be suspended in wind or rain. Check the operator's notice and the email used for your booking.</p>
        <p><strong className="text-ink">Arrival & parking.</strong> Metro Nagai Exit 3 is the recommended approach. Keep the car at your overnight parking. The operator recommends public transport because Nagai Park parking can be crowded. A free stroll in Nagai Park does not give admission to the teamLab exhibition.</p>
      </div></details>
      <Links><PlaceLink href={directions("Nagai Station Osaka", "teamLab Botanical Garden Osaka", "walking")}>Nagai → teamLab · walk</PlaceLink></Links>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><UtensilsCrossed className="size-6" />06 · Three dinner options near Nagai</h3>
      <p className="mt-4 text-sm leading-relaxed text-soft">Japan has so many restaurants that the most useful recommendation is often a small, well-located shortlist. These are researched options west of the garden near Nagai Station, not places we personally ate. Pick one, confirm the menu and reserve if possible. The rating snapshots below come from the linked place listings and can change.</p>
      <ol className="mt-6 space-y-8 text-sm leading-relaxed text-soft">
        <li><h4 className="font-display text-2xl text-ink">Yakiniku Shushu Nagai · relaxed Japanese BBQ</h4><p className="mt-3">A good choice for grilled meat and a casual evening. The restaurant listing advertises a multilingual menu and photo menu, which makes ordering easier. Address: 3-13-7 Nagai. Allow around 15–25 minutes on foot from the garden, with the car left at your overnight parking. Published listings show evening service until midnight, but confirm last orders and your date. A listed dinner guide is around ¥3,000–4,000 per person before any extra drinks or premium orders.</p><JapanVenueLinks id="shushuNagai" /></li>
        <li><h4 className="font-display text-2xl text-ink">Matasaburo · the special meat dinner</h4><p className="mt-3">Dry-aged steaks and yakiniku for a more deliberate dinner. Address: 2-13-13 Nagai, on the ground floor of R HOTEL RE. OSAKA NAGAI PARK. Allow 20–25 minutes to walk from the garden, leaving the car at your overnight parking. The official site lists dinner 17:30–23:00 with last orders at 22:00, closed Mondays and Thursdays. Reserve and check the current menu price per person before committing, as cuts and courses vary.</p><JapanVenueLinks id="matasaburo" /><Links><PlaceLink href="https://www.tablecheck.com/matasaburo/reserve">Matasaburo · reserve</PlaceLink></Links></li>
        <li><h4 className="font-display text-2xl text-ink">Utage · a small local alternative</h4><p className="mt-3">A Japanese restaurant at 3-8-3 Nagai. Make sure you select this address, not another Osaka restaurant with the same name. Its high listing score is based on a much smaller review sample than the two options above, so read recent reviews and ask your hotel to confirm the menu, price per person and whether visitors can book. Published hours are Tuesday–Saturday 18:00–midnight, closed Sundays and Mondays. Allow 15–25 minutes on foot from the garden, keeping the car at your overnight parking.</p><JapanVenueLinks id="utageNagai" /></li>
      </ol>
      <p className="mt-5 text-sm leading-relaxed text-soft">Bring some cash even if you normally pay by card, mention allergies before booking and ask before taking an empty table. A high rating is not a promise of walk-in availability. If the first place is full or cannot accommodate you, move to your next choice rather than insisting.</p>
      <p className="mt-4 text-sm leading-relaxed text-soft">Back to Kitahama: take the Midosuji line north from Nagai to Yodoyabashi, then walk east to the hotel. Allow roughly 35–45 minutes door to door. Check the last train for your date if dinner runs late.</p>
      <Links><PlaceLink href={directions("Nagai Station Osaka", "The Royal Park Canvas Osaka Kitahama")}>Nagai → hotel · transit</PlaceLink></Links>
    </div>

    <div className="border-y border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><CheckSquare className="size-5" />Before tomorrow</h3>
      <ul className="mt-5 space-y-3">{["Top up your transport card after today's metro rides", "Check tomorrow's first departure and save the station entrance", "Charge your phone and power bank, and keep your booking emails accessible", "Set aside comfortable shoes, a weather-appropriate layer and some yen", "Check your next reservation's arrival time and cancellation conditions"].map(item => <li key={item}><label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-soft"><input type="checkbox" className="mt-1 size-4 shrink-0 accent-primary" />{item}</label></li>)}</ul>
      <p className="mt-5 text-sm text-soft">Weather changes or tired legs? Ask the Trip agent to shorten the day around your teamLab booking.</p>
    </div>
  </section>;
}