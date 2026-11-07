import { useState } from "react";
import { ArrowUpRight, Car, Clock3, MapPin, ParkingCircle, Route, Utensils, BedDouble } from "lucide-react";
import { Button } from "@/components/ui/button";
import { franceDayOneStops, franceDayOneTimeline, drivingMapUrl, placeMapUrl } from "@/lib/france-guide";
import rivieraImage from "@/assets/france-day1-marseille.jpg";
import { FranceRouteArtwork } from "@/components/site/FranceRouteArtwork";

const points = [
  { x: 115, y: 310, label: "Airport", id: "marseille" },
  { x: 165, y: 365, label: "Marseille", id: "marseille" },
  { x: 205, y: 90, label: "Avignon", id: "avignon" },
  { x: 350, y: 165, label: "L’Isle-sur-la-Sorgue", id: "sorgue" },
  { x: 490, y: 125, label: "Gordes", id: "gordes" },
  { x: 590, y: 85, label: "Roussillon", id: "roussillon" },
];

function MapLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight /></a></Button>;
}

export function FranceDayOneGuide() {
  const [selected, setSelected] = useState("marseille");
  const active = franceDayOneStops.find((stop) => stop.id === selected) ?? franceDayOneStops[0];
  if (!active) return null;

  return (
    <section aria-label="France day 1 detailed guide" className="mt-10 border-t border-border pt-10 text-ink">
      <header className="relative isolate overflow-hidden rounded-lg bg-ink">
        <img src={rivieraImage} alt="Marseille old port and Notre-Dame de la Garde" width={1536} height={768} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
      <div className="france-day-photo-shade absolute inset-0" aria-hidden="true" />
        <div className="relative px-6 py-10 text-onink sm:px-10">
          <p className="text-xs font-semibold uppercase">Your guide · Day 01 · Provence</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight sm:text-5xl">From the old port<br />to the ochre sunset.</h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed">Marseille → Avignon → L’Isle-sur-la-Sorgue → Gordes → Roussillon</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm"><span className="flex items-center gap-2"><Car className="size-4" />One rental car</span><span className="flex items-center gap-2"><BedDouble className="size-4" />OMMA · Roussillon</span></div>
        </div>
      </header>

      <div className="border-b border-border py-8" aria-label="Day 1 timeline">
        <h3 className="flex items-center gap-2 font-display text-2xl"><Clock3 className="size-5" />Your day at a glance</h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-soft">This is how our first day unfolded: we landed at 09:00, had our rental car by 10:00 and reached our accommodation at 18:30. Use our arrival times as a rhythm for the stops below, not a deadline. Driving and parking times are estimates, and traffic or longer breaks can shift the day.</p>
        <ol className="mt-5 divide-y divide-border">
          {franceDayOneTimeline.map(({ id, time, title, note }) => <li key={id} className="grid gap-1 py-3 sm:grid-cols-[9rem_1fr] sm:gap-4"><span className="text-sm font-semibold text-terracotta">{time}</span><div><p className="text-sm font-semibold">{title}</p><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}
        </ol>
        <p className="mt-4 border-l-2 border-sage pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Feeling tired?</strong> If you need to leave out one stop, Gordes is the one we'd suggest. Continue from L’Isle-sur-la-Sorgue straight to Roussillon and check the direct driving time before leaving. Otherwise, keep the full route and enjoy the scenery along the way.</p>
      </div>

      <div className="grid gap-6 border-b border-border py-8 sm:grid-cols-[1fr_2fr]">
        <h3 className="font-display text-2xl">A beautiful day.<br />An ambitious one.</h3>
        <div className="space-y-3 text-sm leading-relaxed text-soft">
          <p>Choose an early arrival in Marseille. If an early landing isn't possible, spend the previous night in Marseille rather than squeezing this route into half a day.</p>
          <p>We picked up our rental car in the morning, and it took about 20 minutes. Allow roughly 4–5 hours behind the wheel, plus airport formalities, parking and walks. The day is packed, but the drive flies by with beautiful scenery all around. This is a full-day route of outdoor stops, not five museum visits. Summer traffic can change everything.</p>
          <p>Keep sunset as your anchor: check the sunset time for your date and work backwards from Roussillon. If you're tired and need to skip a stop, we'd suggest Gordes. Enjoy the scenery without rushing the driving.</p>
          <p className="font-semibold text-terracotta">Driving times, distances and the toll allowance below are planning estimates, not live quotes. Check parking charges on arrival.</p>
        </div>
      </div>

      <details className="border-b border-border py-5" open>
        <summary className="cursor-pointer font-display text-2xl">Before you pick up the keys</summary>
        <div className="mt-5 grid gap-6 text-sm leading-relaxed text-soft sm:grid-cols-2">
          <div><h4 className="font-semibold text-ink">Small car, automatic, one-way booking</h4><p className="mt-2">Pick up directly at Marseille Provence Airport. Public transport won't give this tightly timed route the same flexibility. We prefer a small automatic for easier parking. In warm months, a convertible can make the road part of the experience.</p><p className="mt-2">Book pickup at Marseille Airport and return at Nice Airport for the end of the trip. Check the one-way fee, fuel policy, mileage allowance, deposit and pickup opening hours before paying.</p></div>
          <div><h4 className="font-semibold text-ink">Card & insurance checks</h4><p className="mt-2">Check whether the rental company requires a credit card in the lead driver's name. Debit-card acceptance and deposits vary by company. Do not assume your booking includes every charge.</p><p className="mt-2">Read any cover on your credit card before buying extra insurance: eligibility, exclusions, excess, claim procedure and rental duration matter. Carry your licence and identity document. Check whether your licence needs a translation or international permit.</p></div>
        </div>
      </details>

      <div className="py-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="font-display text-2xl">The first day's road</h3><span className="text-xs text-soft">Route sketch · not to scale</span></div>
        <FranceRouteArtwork title="Day 1 route from Marseille Airport through Avignon, L’Isle-sur-la-Sorgue and Gordes to Roussillon" stops={points} path="M115 310 L165 365 Q110 260 205 90 Q260 130 350 165 L490 125 L590 85" height={440} selected={selected} day={1} />
        <div className="mt-4 flex flex-wrap gap-2" aria-label="Route stops">{franceDayOneStops.map((stop) => <Button key={stop.id} variant={selected === stop.id ? "default" : "outline"} size="sm" onClick={() => setSelected(stop.id)} aria-pressed={selected === stop.id}>{stop.number} · {stop.place}</Button>)}</div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-l-2 border-terracotta pl-4"><div><p className="text-sm font-semibold">{active.from} → {active.place}</p><p className="mt-1 text-xs text-soft">{active.drive} · {active.road}</p></div><MapLink href={drivingMapUrl(active.from, active.parking)}><Route />Open this drive</MapLink></div>
      </div>

      <ol className="space-y-0">{franceDayOneStops.map((stop) => <li key={stop.id} id={`france-day1-${stop.id}`} className="scroll-mt-24 border-t border-border py-8 sm:py-10">
        <div className="flex items-start gap-4"><span className="mt-1 font-display text-3xl text-terracotta">{stop.number}</span><div><h3 className="font-display text-3xl">{stop.place}</h3><p className="mt-1 flex items-center gap-2 text-xs text-soft"><Clock3 className="size-3.5" />{stop.visit}</p></div></div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5"><p className="text-sm leading-relaxed text-soft">{stop.intro}</p><div><h4 className="flex items-center gap-2 text-sm font-semibold"><MapPin className="size-4 text-terracotta" />The walk</h4><ul className="mt-3 space-y-2 text-sm text-soft">{stop.walk.map((walk) => <li key={walk} className="border-l border-border pl-3">{walk}</li>)}</ul><div className="mt-3"><MapLink href={placeMapUrl(stop.place)}><MapPin />Explore {stop.place}</MapLink></div></div><aside className="border-l-2 border-sage pl-4"><h4 className="text-xs font-semibold uppercase text-ink">{stop.tipLabel}</h4><p className="mt-2 text-sm leading-relaxed text-soft">{stop.tip}</p></aside></div>
          <div className="self-start rounded-lg border border-border bg-card p-5 text-sm">
            <h4 className="flex items-center gap-2 font-semibold"><Car className="size-4 text-royal" />Getting here</h4><p className="mt-3 text-xs text-soft">From {stop.from}</p><p className="mt-1 font-semibold">{stop.drive}</p><p className="mt-2 leading-relaxed text-soft">{stop.road}</p><p className="mt-3 border-l-2 border-gold pl-3 leading-relaxed text-soft"><strong className="text-ink">Tolls · </strong>{stop.toll}</p>
            <h4 className="mt-5 flex items-center gap-2 font-semibold"><ParkingCircle className="size-4 text-royal" />Parking & arrival</h4><p className="mt-2 font-medium">{stop.parking}</p><p className="mt-2 leading-relaxed text-soft">{stop.parkingNote}</p><div className="mt-4 flex flex-wrap gap-2"><MapLink href={drivingMapUrl(stop.from, stop.parking)}><Route />Driving route</MapLink><MapLink href={placeMapUrl(stop.parking)}><ParkingCircle />Arrival map</MapLink></div>
          </div>
        </div>
      </li>)}</ol>

      <div className="grid gap-6 border-t border-border py-8 sm:grid-cols-2">
        <div><h3 className="flex items-center gap-2 font-display text-2xl"><Utensils className="size-5" />Dinner & a night in Roussillon</h3><p className="mt-3 text-sm leading-relaxed text-soft">Stay at OMMA Luberon, 38 place de la Poste. Dinner at <strong className="text-ink">La Table des Ocres</strong>, 457 avenue Dame Sirmonde, is a separate restaurant at La Maison des Ocres, not OMMA's restaurant. There weren't many tourists when we visited, and dinner didn't need booking ahead. Check service days for your visit.</p><div className="mt-4 flex flex-wrap gap-2"><MapLink href="https://www.ommaluberon.com/">OMMA</MapLink><MapLink href="https://www.lamaisondesocres-hotel.com/fr/page/restaurant">La Table des Ocres</MapLink><MapLink href="https://avignon-tourisme.com/en/offres/centrhalles-kitchen-avignon-en-4143146/">Avignon lunch</MapLink></div></div>
        <div><h3 className="font-display text-2xl">What to put in your budget</h3><p className="mt-3 text-sm leading-relaxed text-soft">Car rental and the one-way fee, fuel, A7 tolls, five parking stops, lunch, coffee and chocolate, dinner and the room. The car deposit is usually a card hold, not a spent expense. Add your actual amounts in Budget check below.</p></div>
      </div>

      <details className="border-y border-border py-5"><summary className="cursor-pointer font-display text-2xl">Driving in France · the essentials</summary><ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">
        <li><strong className="text-ink">Speed:</strong> posted signs always win. General motorway limit 130 km/h dry, 110 in rain. Divided roads 110 dry / 100 wet. Many undivided roads 80. Towns usually 50 with many 30 zones. Visibility below 50 m: maximum 50 km/h. Some roads have signed exceptions.</li>
        <li><strong className="text-ink">Alcohol:</strong> general limit 0.5 g/L blood alcohol, 0.2 for novice drivers. Our recommendation: no alcohol for the driver, especially with this full day ahead.</li>
        <li><strong className="text-ink">Phone & seat belts:</strong> no handheld phone or headphones while driving. Set navigation before departure, stop safely to change it and wear seat belts.</li>
        <li><strong className="text-ink">Marseille low-emission zone:</strong> check the current ZFE rules and Crit’Air status with the rental company before entering central Marseille. Restrictions can change. Never assume every airport rental is eligible.</li>
        <li><strong className="text-ink">Toll lanes:</strong> follow card/cash signs, not a tag-only lane unless your rental includes a working toll tag. Ask how any tag fees are billed.</li>
      </ul><div className="mt-5 flex flex-wrap gap-2"><MapLink href="https://www.service-public.gouv.fr/particuliers/vosdroits/F19460">Speed rules</MapLink><MapLink href="https://europa.eu/youreurope/citizens/travel/driving-abroad/road-rules-and-safety/france/index_en.htm">Road safety</MapLink><MapLink href="https://ampmetropole.fr/missions/environnement/qualite-de-lair/zone-a-faibles-emissions-mobilite-zfe-m/">Marseille ZFE</MapLink><MapLink href="https://www.service-public.gouv.fr/particuliers/vosdroits/F34816">Driving licence</MapLink><MapLink href="https://www.vinci-autoroutes.com/fr/">Toll operator</MapLink></div></details>
      <p className="mt-4 text-xs leading-relaxed text-soft">Recheck opening hours, access, traffic and tariffs for your dates. Parking references: <a className="underline" href="https://www.q-park.fr/fr-fr/villes/marseille/vieux-port-h%C3%B4tel-de-ville/" target="_blank" rel="noreferrer">Q-Park Marseille</a> · <a className="underline" href="https://avignon-parkings.com/parking-du-palais-des-papes/" target="_blank" rel="noreferrer">Avignon parkings</a>.</p>
    </section>
  );
}