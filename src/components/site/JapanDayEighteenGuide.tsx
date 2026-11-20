import { ArrowUpRight, Luggage, Plane, Receipt, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { japanDayEighteenPlan as plan } from "@/lib/japan-day-eighteen-plan";
import artwork from "@/assets/japan-day18-map.png";

const route = (a: string, b: string) => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(a)}&destination=${encodeURIComponent(b)}&travelmode=transit`;
const copy = "mt-4 text-sm leading-relaxed text-soft";
const hotel = "THE LIVELY TOKYO AZABUJUBAN";
function PlaceLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm" className="h-auto min-h-9 max-w-full whitespace-normal text-left"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight className="shrink-0" /></a></Button>;
}
function List({ items }: { items: readonly (readonly [string, string])[] }) {
  return <ul className="mt-5 space-y-3 text-sm leading-relaxed text-soft">{items.map(([t, x]) => <li key={t}><strong className="text-ink">{t}.</strong> {x}</li>)}</ul>;
}

export function JapanDayEighteenGuide() {
  const { taxFree: t, euAllowance: eu, narita: n } = plan;
  return <section aria-label="Japan day 18 detailed guide" className="mt-8 text-ink">
    <header>
      <p className="text-xs font-semibold uppercase text-terracotta">Your guide · Day 18 · Flight home from Narita</p>
      <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Pack slowly, weigh everything, keep the tax-free bag close and fly home full of Japan.</h2>
    </header>

    <aside className="my-8 border-l-2 border-terracotta pl-5">
      <h3 className="font-display text-2xl">What stayed with us</h3>
      <p className={copy}>The last day is just packing and checking the suitcases. Take a small luggage scale, watch the limits, forget nothing and have a safe flight home.</p>
    </aside>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-3xl">The way out</h3>
      <p className={copy}>A schematic of the last hop: from the hotel in Azabu-Juban across the city to Tokyo Station or Shinagawa, then the Narita Express east across the Chiba plain to the airport.</p>
      <img src={artwork} alt="Schematic map of the final transfer from THE LIVELY in Azabu-Juban through Tokyo Station and Shinagawa to Narita Airport terminals, with the Narita Express route marked in terracotta and a small plane lifting off to the north east" width={1536} height={1024} className="mt-6 h-auto w-full rounded-lg" />
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Scale className="size-6" />01 · Packing and luggage limits</h3>
      <List items={[
        ["A small luggage scale", "It weighs almost nothing and saves you from repacking on the airport floor. Weigh every bag at the hotel."],
        ["Check your own ticket", "Many economy tickets allow one 23 kg suitcase, but it differs by airline and fare. Hand luggage has its own weight limit too."],
        ["Suitcase in a suitcase", "If you brought a folded spare bag, now is its moment. Buying an extra checked bag online in advance is usually cheaper than at the desk."],
        ["Liquids", `Over ${plan.liquidsMaxMl} ml goes in the checked suitcase. Cosmetics, sake and sauces belong there, wrapped in clothes.`],
        ["Knives, sprays and power banks", "Knives in the checked suitcase. Power banks and spare batteries only in hand luggage."],
      ]} />
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Receipt className="size-6" />02 · Tax-free, what you need to do</h3>
      <p className={copy}>For purchases from {t.refundAtAirportFrom} Japan refunds the tax only after customs check your goods at departure. Skip this step and the refund is lost.</p>
      <List items={[
        ["Keep the goods unused", "Leave boxes and seals intact. Cosmetics and snacks bought tax-free must stay unopened."],
        ["Carry them in hand luggage", "Customs may ask to see the items, so do not put them in the checked suitcase."],
        ["Passport and receipts", "Keep the passport you shopped with and every tax-free receipt together."],
        ["Customs before security", `Visit the customs tax-free counter after check-in and before security. Plan about ${t.extraMinutesAtAirport} minutes extra.`],
      ]} />
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Luggage className="size-6" />03 · Arriving home in the EU</h3>
      <p className={copy}>Per person, arriving by air from outside the EU, goods up to €{eu.airTravellerEur} enter duty-free. Add {eu.spiritsLitres} litre of spirits, {eu.wineLitres} litres of wine and {eu.cigarettes} cigarettes for adults. Above that, use the red channel and declare.</p>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-3xl"><Plane className="size-6" />04 · To Narita</h3>
      <p className={copy}>This is the airport we flew from, and it is a proper journey rather than a short hop. Narita sits about 60 km east of the city in Chiba, so the transfer is the one part of the day you cannot improvise.</p>
      <List items={[
        ["Narita Express", `The easiest option from Azabu-Juban. Get to Tokyo Station or Shinagawa and take the Narita Express, a reserved-seat train with luggage racks. The ride itself is about ${n.expressFromTokyoStationMinutes} minutes from Tokyo Station, and about ${n.trainFromHotelMinutes} minutes from the hotel door.`],
        ["Keisei Skyliner", `The fastest way into the airport, as little as ${n.skylinerFromUenoMinutes} minutes from Keisei-Ueno. Choose it if you would rather be airborne early and do not mind one change to reach Ueno.`],
        ["Airport bus", `One seat the whole way, which is kind to heavy suitcases and tired bodies. It leaves from Tokyo Station and takes about ${Math.floor(n.busFromHotelMinutes / 60)} hour ${n.busFromHotelMinutes % 60} minutes once traffic is against you.`],
        ["Check your terminal first", `Terminals are not next to each other. Terminal 1 is a ${n.terminal1WalkFromStationMinutes} minute walk from its own station, while Terminals 2 and 3 are a ${n.terminal3WalkFromStationMinutes} minute walk from the Terminal 2 and 3 station. Look at your boarding pass before you leave and aim for the right one.`],
        ["Leave early", `About ${n.leaveHotelHoursBeforeFlight} hours before departure. That covers the transfer, three hours for check-in, the tax-free customs check and a last matcha.`],
      ]} />
      <div className="mt-3 flex flex-wrap gap-2"><PlaceLink href={route(hotel, "Tokyo Station")}>Hotel → Tokyo Station</PlaceLink><PlaceLink href={route("Tokyo Station", "Narita Airport Terminal 1")}>Tokyo Station → Narita · Narita Express</PlaceLink><PlaceLink href={route("Keisei-Ueno Station", "Narita Airport Terminal 2-3 Station")}>Ueno → Narita · Skyliner</PlaceLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-2xl">If your flight leaves from Haneda instead</h3>
      <p className={copy}>Haneda is much closer, about {plan.haneda.fromHotelMinutes} minutes by metro and the Keikyu Line from Azabu-Juban. The same packing and tax-free rules apply, only the transfer is shorter.</p>
    </div>

    <div className="py-8">
      <h3 className="font-display text-2xl">Before you close the door</h3>
      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-soft">{[
        "Passport, boarding pass and tax-free receipts in one pocket.",
        "Chargers, adapters and the safe in the room checked.",
        "Spend the last yen on the IC card or a final konbini treat.",
        "Suitcases weighed, liquids packed, tax-free goods in hand luggage.",
        "Terminal checked on the boarding pass and the Narita train chosen.",
      ].map((i) => <li key={i} className="flex gap-2"><span className="mt-0.5 inline-block size-4 shrink-0 rounded-sm border border-terracotta" aria-hidden="true" />{i}</li>)}</ul>
      <p className={copy}>Have a safe flight home.</p>
    </div>
  </section>;
}
