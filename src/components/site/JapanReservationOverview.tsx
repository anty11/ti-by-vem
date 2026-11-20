import { ArrowUpRight, BedDouble, CalendarCheck, Plane, TrainFront, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JapanBudgetOverview } from "@/components/site/JapanBudgetOverview";
import { JapanVenueLinks } from "@/components/site/JapanVenueLinks";
import { japanVenues, type JapanVenueId } from "@/lib/japan-venues";
import { japanDaySixPlan as d6 } from "@/lib/japan-day-six-plan";
import { japanDayEightPlan as d8 } from "@/lib/japan-day-eight-plan";
import { japanDayNinePlan as d9 } from "@/lib/japan-day-nine-plan";
import { japanDayElevenPlan as d11 } from "@/lib/japan-day-eleven-plan";
import { japanDayThirteenPlan as d13 } from "@/lib/japan-day-thirteen-plan";
import { japanDayFourteenPlan as d14 } from "@/lib/japan-day-fourteen-plan";
import { japanDayFifteenPlan as d15 } from "@/lib/japan-day-fifteen-plan";
import { japanDaySixteenPlan as d16 } from "@/lib/japan-day-sixteen-plan";
import { japanDaySeventeenPlan as d17 } from "@/lib/japan-day-seventeen-plan";

const yen = (value: number) => `¥${value.toLocaleString("en-US")}`;

const hotels: { nights: string; id: JapanVenueId; note: string }[] = [
  { nights: "Nights 1–4 · Osaka Kitahama", id: "royalParkKitahama", note: "Our base for Osaka and the day trips to Hiroshima, Kurashiki and Kobe. The room was very, very small, so choose a larger category if you travel with big suitcases. From Kitahama the evening walk to Dotonbori takes you through the whole city centre." },
  { nights: "Nights 5–8 · Kyoto Gojo", id: "sequenceKyotoGojo", note: "Four nights for Kyoto and the day in Nara. Close to Gojo and Karasuma stations and an easy walk or one stop to Kyoto Station. Ask about the hotel onsen hours when you check in and leave time for it in the evenings." },
  { nights: "Night 9 · Lake Kawaguchiko", id: "ubuya", note: `Our room facing Mt. Fuji, made for rest. Check-in runs ${d9.ubuya.checkInFrom}–${d9.ubuya.checkInUntil} and the last dinner seating is at ${d9.ubuya.lastDinnerSeating}. Choose your dinner carefully when booking. We ordered the broth you cook yourself by mistake and steak would have suited us better. Station pickup is available ${d9.ubuya.stationPickup}.` },
  { nights: "Nights 10–17 · Tokyo Azabu-Juban", id: "livelyAzabujuban", note: "Eight nights in a hotel we loved, in a quiet, local-feeling neighbourhood. teamLab Borderless is a short walk away and the Namboku and Oedo lines take you everywhere else. If you forward luggage from Ubuya, tell the hotel in advance." },
];

const priority: { title: string; text: string; ids?: JapanVenueId[]; links?: [string, string][] }[] = [
  { title: "Day 15 · Tokyo Disneyland & the Sherwood Garden breakfast", text: `Park tickets go on sale at ${d15.tickets.salesOpen}, cost ${yen(d15.tickets.adultFromYen)}–${yen(d15.tickets.adultToYen)} per adult and are not sold at the gate. The Sherwood Garden breakfast at Tokyo Disneyland Hotel is open to non-guests, ${yen(d15.sherwood.breakfastAdultYen)} per adult, and bookings open at ${d15.sherwood.bookingOpens}. Set a reminder for both. We came from our Tokyo hotel and it was worth getting up early.`, ids: ["tokyoDisneyland", "sherwoodGarden"] },
  { title: "Day 13 · teamLab Planets", text: `From ${yen(d13.teamLabPlanets.adultFromYen)} per adult and not sold on site. Tickets are non-refundable, with up to ${d13.teamLabPlanets.ticketChangesAllowed} changes. You walk barefoot through water, so wear trousers you can roll above the knee.`, ids: ["teamLabPlanets"] },
  { title: "Day 17 · teamLab Borderless & EN TEA HOUSE", text: `From ${yen(d17.borderless.adultFromYen)} per adult and ${yen(d17.borderless.doorSurchargeYen)} more at the door. Sales open ${d17.borderless.salesOpenMonthsAhead} months ahead and tickets are non-refundable. The tea inside is paid separately on the day. We went to both teamLab museums and would do it again, each one is different.`, ids: ["teamLabBorderless", "enTeaHouse"] },
  { title: "Day 2 · teamLab Botanical Garden Osaka", text: "Our beautiful evening walk among glowing trees. Buy a timed ticket for your evening and check the programme, since the garden opens for the evening and its hours change with the season.", links: [["Official programme & tickets", "https://www.teamlab.art/e/botanicalgarden/"]] },
  { title: "Day 11 · SHIBUYA SKY at sunset", text: `Online tickets open ${d11.shibuyaSky.salesOpenDaysAhead} days ahead in ${d11.shibuyaSky.slotMinutes} minute slots. Sunset slots cost ${yen(d11.shibuyaSky.webYenFrom15)} online and go first. Pick the slot that starts about 30 minutes before sunset and stay until it is completely dark.`, ids: ["shibuyaSky"] },
  { title: "Day 8 · MAIKOYA kimono tea ceremony", text: `The one experience we would tell everyone to book in Kyoto. About ${d8.teaCeremony.durationMinutes} minutes, from ${yen(d8.teaCeremony.sharedPlanFromYenBeforeTax)} before tax for the shared plan or ${yen(d8.teaCeremony.privatePlanFromYenBeforeTax)} private, with hair styling included. Book an early slot so you have time to walk in kimono before returning it by ${d8.teaCeremony.kimonoReturnBy}.`, ids: ["maikoyaGionKiyomizu"] },
  { title: "Day 6 · The ring and perfume workshops", text: `Both were unique and worth every euro. The glänta silver ring starts at ${yen(d6.workshops.ring.silverFromYen)} and takes ${d6.workshops.ring.minutes} minutes. ${d6.workshops.ring.booking}. My Only Fragrance starts at ${yen(d6.workshops.perfume.fromYen)} for ${d6.workshops.perfume.millilitres} ml. ${d6.workshops.perfume.booking}. Book the ring first and the perfume after, so you are not rushing between them.`, ids: ["glantaNinenzaka", "myOnlyFragranceKiyomizu"] },
  { title: "Day 13 · HARRY otters", text: `Our cuteness overload. Online reservations are for at least ${d13.harry.reservationMinimumMinutes} minutes, ${yen(d13.harry.adult30MinYen)} per adult for each 30 minutes. Contact with the otters is from age ${d13.harry.otterContactMinAge}.`, ids: ["harryHarajukuTerrace"] },
  { title: "Day 14 · Street kart through Tokyo · our secret tip", text: `We missed it because we did not have the permits. You need an international driving permit under the ${d14.kart.permitConvention} convention, valid ${d14.kart.permitValidMonths} months. In Slovakia the police issue it on the spot for €${d14.slovakPermit.feeEur}. Tours start from ${yen(d14.kart.fromYen)}, cancellation is free up to ${d14.kart.freeCancellationDays} days before and there is no refund if you arrive without the right documents.`, ids: ["streetKartShibuya"] },
];

const dinners: { title: string; text: string; ids: JapanVenueId[] }[] = [
  { title: "Day 3 · Kobe wagyu", text: "Reserve a counter seat for the evening you return through Kobe. Royal Mouriya and Steak Ishida both take bookings online.", ids: ["royalMouriya", "ishidaMain"] },
  { title: "Day 4 · Yakiniku Gorichan", text: "Small and popular. Reserve your branch ahead, then the shisha at Octave is an easy walk after dinner.", ids: ["gorichanShinsaibashi"] },
  { title: "Day 8 · K36 and MATT", text: `K36 takes phone bookings ${d8.k36.phoneBookingHours}, with a ${yen(d8.k36.coverChargeYenPerPerson)} cover charge per person. Ask for a rooftop seat at sunset. MATT adds ${d8.matt.serviceChargePercent}% service.`, ids: ["k36Rooftop", "mattRestaurant"] },
];

function OfficialLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm" className="h-auto min-h-9 max-w-full whitespace-normal text-left"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight className="shrink-0" /></a></Button>;
}

export function JapanReservationOverview() {
  return <section aria-label="Japan reservation overview" className="mt-10 border-t border-border pt-10 text-ink">
    <header><p className="text-xs font-semibold uppercase text-terracotta">Your guide · Before you go</p><h2 className="mt-3 font-display text-4xl sm:text-5xl">Reservations, all in one place.</h2><p className="mt-4 max-w-2xl text-sm leading-relaxed text-soft">Japan rewards the organised. The museums, sunset views and Disneyland open their sales on fixed dates and sell out. Book those first, then let the walks, the shopping and the food stay spontaneous.</p></header>

    <section className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Plane className="size-5" />Start with the journey</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Book an open-jaw ticket, into Kansai Airport for Osaka and home from Narita in Tokyo, so you never travel back across the country. Check that your passport is valid for the whole stay, check the visa rules for your nationality and fill in Visit Japan Web a few days before you fly. Leave a spare page in the passport for the arrival sticker.</p>
      <div className="mt-4 flex flex-wrap gap-2"><OfficialLink href="https://www.mofa.go.jp/j_info/visit/visa/short/novisa.html">Visa exemptions</OfficialLink><OfficialLink href="https://www.vjw.digital.go.jp/main/#/vjwplo001">Visit Japan Web</OfficialLink></div>
    </section>

    <section className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><TrainFront className="size-5" />Trains and passes</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">You do not need to reserve most trains weeks ahead. Seat reservations on the Shinkansen open a month before and are easy to buy at the station or online. Price your real train days before buying a pass. Day 3 explains when a regional pass pays off, day 9 compares the Mishima and Gotemba routes and day 16 covers the {yen(d16.freepass.fromShinjukuTwoDayYen)} Hakone Freepass from Shinjuku. On the Tokaido and Sanyo Shinkansen, a suitcase over 160 cm in total dimensions needs a seat reserved with an oversized luggage space.</p>
      <div className="mt-4 flex flex-wrap gap-2"><OfficialLink href="https://smart-ex.jp/en/">Shinkansen tickets · smartEX</OfficialLink><OfficialLink href="https://japanrailpass.net/en/">Japan Rail Pass</OfficialLink></div>
    </section>

    <section className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><CalendarCheck className="size-5" />The priority bookings</h3>
      <ul className="mt-4 divide-y divide-border">{priority.map(item => <li key={item.title} className="py-5"><h4 className="font-semibold">{item.title}</h4><p className="mt-2 text-sm leading-relaxed text-soft">{item.text}</p>{item.ids?.map(id => <JapanVenueLinks key={id} id={id} />)}{item.links && <div className="mt-3 flex flex-wrap gap-2">{item.links.map(([label, href]) => <OfficialLink key={href} href={href}>{label}</OfficialLink>)}</div>}</li>)}</ul>
    </section>

    <section className="border-b border-border py-8"><h3 className="flex items-center gap-2 font-display text-2xl"><BedDouble className="size-5" />Your overnight bases</h3><ul className="mt-4 divide-y divide-border">{hotels.map(hotel => <li key={hotel.id} className="py-5"><p className="text-xs font-semibold text-terracotta">{hotel.nights}</p><h4 className="mt-1 text-lg font-semibold">{japanVenues[hotel.id].name}</h4><p className="mt-2 text-sm leading-relaxed text-soft">{hotel.note}</p><JapanVenueLinks id={hotel.id} /></li>)}</ul></section>

    <section className="border-b border-border py-8"><h3 className="flex items-center gap-2 font-display text-2xl"><Utensils className="size-5" />Dinners worth reserving</h3><ul className="mt-4 divide-y divide-border">{dinners.map(item => <li key={item.title} className="py-5"><h4 className="font-semibold">{item.title}</h4><p className="mt-2 text-sm leading-relaxed text-soft">{item.text}</p>{item.ids.map(id => <JapanVenueLinks key={id} id={id} />)}</li>)}</ul><p className="mt-2 text-sm leading-relaxed text-soft">Ralph's Coffee and Uobei do not take reservations. Go at quieter hours, Uobei is calmest {d17.uobei.quietestHours}. Some smaller restaurants in Japan do not accept tourists or bookings without a Japanese phone number. Ask your hotel to call for you.</p></section>

    <section className="border-b border-border py-8"><h3 className="font-display text-2xl">Keep the weather-dependent pieces flexible</h3><ul className="mt-4 space-y-4 text-sm leading-relaxed text-soft"><li><strong className="text-ink">Days 9 and 10 · Mt. Fuji.</strong> The mountain hides behind clouds more often than photos suggest. Mornings are usually clearest, so look out of the window at Ubuya at sunrise and go to the Chureito Pagoda early.</li><li><strong className="text-ink">Day 16 · Hakone Ropeway.</strong> It stops in strong wind or when volcanic gas rises. Planned closures: {d16.ropeway.closures.join(" and ")}. If it is closed, replacement buses run and the lake cruise still works.</li><li><strong className="text-ink">Day 16 · The Peace Torii photo.</strong> Our longest wait ever for a photo. Expect a {d16.torii.busyQueueMinutes} minute queue, or arrive before {d16.torii.quietBefore}.</li></ul><div className="mt-4"><OfficialLink href="https://www.hakonenavi.jp/international/en/">Hakone transport status</OfficialLink></div></section>

    <section className="border-b border-border py-8"><h3 className="font-display text-2xl">What to allow for this trip</h3><JapanBudgetOverview /></section>

    <section className="py-8"><h3 className="font-display text-2xl">Your booking checklist</h3><ul className="mt-4 space-y-2 text-sm leading-relaxed text-soft">{["Three months before · Sherwood Garden breakfast", "Two months before · Disneyland tickets and teamLab Borderless", "As soon as your dates are fixed · the four hotels, MAIKOYA, teamLab Planets and Botanical Garden", "A few weeks before · ring and perfume workshops, HARRY, Kobe wagyu and Gorichan", "Two weeks before · SHIBUYA SKY sunset slot", "Before you leave home · international driving permit for the street kart, Visit Japan Web, a small luggage scale"].map(item => <li key={item} className="flex gap-2"><CalendarCheck className="mt-0.5 size-4 shrink-0 text-terracotta" />{item}</li>)}</ul></section>
  </section>;
}
