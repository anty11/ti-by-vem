import { JapanVenueLinks } from "@/components/site/JapanVenueLinks";
import { ArrowUpRight, BedDouble, CheckSquare, Clock3, Footprints, Plane, TrainFront, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";

const maps = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight /></a></Button>;
}

const walk: [string, string, string][] = [
  ["Kitahama", "Start beside the hotel, where old stone banks and offices meet the river. A calm first look at Osaka before the neon.", "Kitahama Osaka"],
  ["Minamihommachi", "Head south through quiet business streets. Notice the vending machines, tiny shrines and spotless pavements.", "Minamihommachi Osaka"],
  ["Minamisemba", "Smaller cafés, design shops and coffee bars begin to appear. A good place for a first canned coffee from a machine.", "Minamisemba Osaka"],
  ["Shimanouchi", "Side streets with little bars and restaurants. Peek in, but do not feel you need to stop yet.", "Shimanouchi Osaka"],
  ["Higashishinsaibashi", "The evening gets busier, with signs stacked several storeys high.", "Higashishinsaibashi Osaka"],
  ["Shinsaibashi-suji", "The long covered shopping street. Walk with the flow and keep to the left where people do.", "Shinsaibashi-suji Shopping Street Osaka"],
  ["Dotonbori", "The famous canal, the Glico running man and the brightest lights in the city. Best after dark.", "Dotonbori Glico Sign Osaka"],
  ["Soemoncho", "Finish along the lantern-lit lanes on the canal's north side before heading to dinner.", "Soemoncho Osaka"],
];

export function JapanDayOneGuide() {
  return <section aria-label="Japan day 1 detailed guide" className="mt-8 text-ink">
    <header className="rounded-lg bg-ink px-6 py-10 text-onink sm:px-10">
      <p className="text-xs font-semibold uppercase">Your guide · Day 01 · Osaka</p>
      <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Landing in Osaka.</h2>
      <p className="mt-4 max-w-xl text-sm leading-relaxed">A long flight, a first train, an evening walk to Dotonbori and a dinner we still talk about.</p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm"><span className="flex items-center gap-2"><Plane className="size-4" />Arrival day</span><span className="flex items-center gap-2"><BedDouble className="size-4" />Kitahama · Osaka</span></div>
    </header>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Your day at a glance</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Day one is about getting to Japan and finding your feet. A suggested rhythm, not our recorded times.</p>
      <ol className="mt-5 divide-y divide-border">{[
        ["Arrival", "Land in Osaka", "Immigration, customs, a transport card and the train into the city."],
        ["Afternoon", "Check in at Kitahama", "Leave the luggage, shower and rest for an hour if the flight was rough."],
        ["Late afternoon", "Walk south to Dotonbori", "Around 3.5 km through eight neighbourhoods. Allow 1.5–2 hours with stops."],
        ["Evening", "Dinner at Mihoro Kawaramachi", "Back towards the hotel for a proper local dinner."],
      ].map(([time, title, note]) => <li key={title} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"><span className="text-sm font-semibold text-terracotta">{time}</span><div><h4 className="text-sm font-semibold">{title}</h4><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Plane className="size-5" />Before you fly</h3>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-soft">
        <p>From Europe, the journey to Japan is long. Expect 13–15 hours with a direct flight and often 16–20 hours with a connection, depending on where you start. Plan it as a day of its own, not as a quick hop.</p>
      </div>
      <details className="mt-6 border-t border-border pt-5" open>
        <summary className="cursor-pointer font-display text-2xl">Prepare for the long flight</summary>
        <div className="mt-5 grid gap-6 text-sm leading-relaxed text-soft sm:grid-cols-2">
          <div>
            <h4 className="font-semibold text-ink">Comfort on board</h4>
            <p className="mt-2">Pack a small bag for your seat: compression socks, a neck pillow, an eye mask, earplugs or headphones, a warm layer, lip balm, moisturiser and a refillable water bottle. Wear loose clothes and get up to walk every few hours.</p>
          </div>
          <div>
            <h4 className="font-semibold text-ink">Jet lag</h4>
            <p className="mt-2">Japan is 7–8 hours ahead of Central Europe. Set your watch to Japanese time when you board, sleep when it is night in Japan and stay outside in daylight after landing. That is exactly why day one is a gentle walk, not a full sightseeing plan.</p>
          </div>
          <div>
            <h4 className="font-semibold text-ink">Power & phone</h4>
            <p className="mt-2">Japan uses type A plugs and 100 V. Bring an adapter, ideally with USB ports. Buy an eSIM before leaving and install it at home so you have data the moment you land.</p>
          </div>
          <div>
            <h4 className="font-semibold text-ink">Money</h4>
            <p className="mt-2">Cards work in most hotels, shops and chains, but small restaurants, temples and stalls may be cash only. Withdraw yen at a 7-Eleven or airport ATM on arrival and keep some coins for lockers and machines.</p>
          </div>
        </div>
      </details>
      <details className="mt-6 border-t border-border pt-5" open>
        <summary className="cursor-pointer font-display text-2xl">Documents & entry to Japan</summary>
        <div className="mt-5 grid gap-6 text-sm leading-relaxed text-soft sm:grid-cols-2">
          <div>
            <h4 className="font-semibold text-ink">Passport & visa</h4>
            <p className="mt-2">Your passport must be valid for your whole stay and have a free page. Many European passport holders can visit Japan for tourism without a visa for a short stay, but rules depend on your nationality. Check the official Japanese list for your passport before booking flights.</p>
          </div>
          <div>
            <h4 className="font-semibold text-ink">Electronic travel authorisation</h4>
            <p className="mt-2">Japan is preparing a pre-arrival online authorisation for visa-exempt visitors. Check the Ministry of Foreign Affairs page close to your departure to see whether it already applies to your dates.</p>
          </div>
          <div>
            <h4 className="font-semibold text-ink">Visit Japan Web</h4>
            <p className="mt-2">Register a few days before flying and fill in immigration and customs details. You get QR codes that make arrival faster. Screenshot them in case the airport signal is weak.</p>
          </div>
          <div>
            <h4 className="font-semibold text-ink">Insurance & medicines</h4>
            <p className="mt-2">Take travel insurance with medical cover, as healthcare for visitors is paid. Some ordinary European medicines, including certain cold and pain tablets, are restricted in Japan. Check the rules before packing anything beyond basics and carry prescriptions in original packaging.</p>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2"><PlaceLink href="https://www.mofa.go.jp/j_info/visit/visa/short/novisa.html">Visa exemptions</PlaceLink><PlaceLink href="https://www.vjw.digital.go.jp/main/#/vjwplo001">Visit Japan Web</PlaceLink><PlaceLink href="https://www.mhlw.go.jp/english/policy/health-medical/pharmaceuticals/01.html">Bringing medicines</PlaceLink></div>
      </details>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><TrainFront className="size-5" />Getting around Japan, the easy way</h3>
      <div className="mt-5 grid gap-6 text-sm leading-relaxed text-soft sm:grid-cols-2">
        <div>
          <h4 className="font-semibold text-ink">One card for everything</h4>
          <p className="mt-2">Get an IC card, ICOCA in Osaka or Suica in Tokyo. They work on trains, subways and buses across the country and in convenience stores. On iPhone you can add Suica or ICOCA to Apple Wallet before you land. Tap in, tap out, done.</p>
        </div>
        <div>
          <h4 className="font-semibold text-ink">From Kansai Airport to Kitahama</h4>
          <p className="mt-2">The simplest route is the Nankai line to Namba, then the subway north to Kitahama. Allow around 60–75 minutes. With heavy luggage or after a night flight, a taxi takes around an hour and costs far more. Japan also has luggage forwarding from the airport to your hotel.</p>
        </div>
        <div>
          <h4 className="font-semibold text-ink">Navigation</h4>
          <p className="mt-2">Google Maps shows trains, platforms, carriages and exits very accurately. Stations are huge, so always look for your exit number, for example Exit 26. Yellow tactile lines on the floor guide you to the platform.</p>
        </div>
        <div>
          <h4 className="font-semibold text-ink">Small rules that help</h4>
          <p className="mt-2">Queue at the floor markings, let passengers off first and keep phone calls off the train. In Osaka people stand on the right on escalators, in Tokyo on the left. Bins are rare, so carry a small bag for rubbish.</p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2"><PlaceLink href="https://www.howto-osaka.com/en/ticket/icoca/">ICOCA card</PlaceLink><PlaceLink href="https://www.nankai.co.jp/en/traffic/kanku.html">Nankai airport trains</PlaceLink><PlaceLink href={maps("Kitahama Station Osaka")}>Kitahama Station</PlaceLink></div>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="font-display text-3xl">01 · Our hotel, and better options</h3>
      <p className="mt-4 text-sm leading-relaxed text-soft">We stayed at <strong className="text-ink">The Royal Park Canvas Osaka Kitahama</strong>. The location by the river was calm and well connected, but our room was very, very small. Japanese city rooms are compact anyway, and after a long flight with big suitcases we would choose more space.</p>
      <JapanVenueLinks id="royalParkKitahama" />
      <p className="mt-6 text-sm leading-relaxed text-soft">If you want larger and more beautiful rooms for a gentler start, these three suit the same evening:</p>
      <ul className="mt-4 space-y-6 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Conrad Osaka.</strong> Spacious rooms high above Nakanoshima with big city views. Five stops from Dotonbori and a true treat after the flight.<JapanVenueLinks id="conrad" /></li>
        <li><strong className="text-ink">Hotel Nikko Osaka.</strong> Classic, generous rooms directly above Shinsaibashi Station. You walk straight out onto Midosuji and the shopping streets.<JapanVenueLinks id="nikko" /></li>
        <li><strong className="text-ink">Cross Hotel Osaka.</strong> Stylish and modern, a few steps from Dotonbori. Choose a larger room category if you travel with big luggage.<JapanVenueLinks id="cross" /></li>
      </ul>
      <p className="mt-5 text-sm leading-relaxed text-soft">Check the room size in square metres before booking. Around 25 m² or more feels comfortable for two with suitcases. Check-in is usually from 15:00, but every hotel will keep your bags if you arrive early.</p>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Footprints className="size-6" />02 · An evening walk to Dotonbori</h3>
      <p className="mt-4 text-sm leading-relaxed text-soft">The best cure for jet lag is walking. We went from the hotel south through eight neighbourhoods, from quiet offices to the brightest street in Osaka. Start in daylight so you see the city slowly switch on its lights.</p>
      <ol className="mt-5 space-y-5 text-sm leading-relaxed text-soft">{walk.map(([name, note, query], i) => <li key={name}><strong className="text-ink">{String(i + 1).padStart(2, "0")} · {name}.</strong> {note}<div className="mt-2"><PlaceLink href={maps(query)}>{name} · Maps</PlaceLink></div></li>)}</ol>
      <p className="mt-5 text-sm leading-relaxed text-soft">Around 3.5 km in total. Allow 1.5–2 hours with photos and stops. If your legs give up, Namba and Nippombashi stations are next to Dotonbori and take you back towards Kitahama.</p>
      <PlaceLink href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent("Kitahama Station Osaka")}&destination=${encodeURIComponent("Soemoncho Osaka")}&travelmode=walking`}>Walking route · Kitahama to Soemoncho</PlaceLink>
    </div>

    <div className="border-t border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><UtensilsCrossed className="size-6" />03 · Dinner at Mihoro Kawaramachi</h3>
      <p className="mt-4 text-sm leading-relaxed text-soft">We definitely recommend this one. A real neighbourhood place full of locals after work, with Japanese-style Chinese dishes, gyoza, ramen and cold beer. No tourist menus or show, just a brilliant first dinner in Japan. It is a short walk from Sakaisuji-Hommachi Station, close to Kitahama, so it is easy to finish the evening here.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Dinner runs from 17:00 to midnight, with last orders at 23:00. Expect around ¥3,000–5,000 per person. Cards are accepted. Hours can change, so check before you go.</p>
      <JapanVenueLinks id="mihoro" />
      <aside className="mt-5 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Some restaurants do not take tourists.</strong> Yes, really. A few small places in Japan serve only regulars, Japanese speakers or guests with a reservation, and they may politely turn you away at the door. Do not take it personally and do not insist. Look for a menu outside, pictures or a ticket machine, and always have a second option nearby. Busy places often have a waiting list on paper by the door, so write your name and wait.</aside>
    </div>

    <div className="border-y border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><CheckSquare className="size-5" />Before tomorrow</h3>
      <ul className="mt-5 space-y-3">{[
        "Top up your ICOCA or Suica card so you are ready for the morning trains",
        "Withdraw some yen for small restaurants and stalls",
        "Charge your phone and a power bank, and save tomorrow's route offline",
        "Plan breakfast near the hotel or from a convenience store",
        "Go to bed on Japanese time, even if you wake up early",
      ].map((item) => <li key={item}><label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-soft"><input type="checkbox" className="mt-1 size-4 shrink-0 accent-primary" />{item}</label></li>)}</ul>
      <p className="mt-5 text-sm text-soft">Arriving late or feeling tired? Ask the Trip agent in your trip room how to shorten the walk.</p>
    </div>
  </section>;
}
