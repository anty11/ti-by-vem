import { ArrowUpRight, Car, Coffee, MapPin, Sparkles, Utensils, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { drivingMapUrl, placeMapUrl } from "@/lib/france-guide";
import { franceDayFiveTimes as times } from "@/lib/france-day-five-timing";
import rivieraImage from "@/assets/riviera.jpg";
import { FranceDayRouteSketch } from "@/components/site/FranceDayRouteSketch";

function MapLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Button asChild variant="outline" size="sm"><a href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight /></a></Button>;
}

export function FranceDayFiveGuide() {
  return <section aria-label="France day 5 detailed guide" className="mt-10 border-t border-border pt-10 text-ink">
    <header className="relative isolate overflow-hidden rounded-lg bg-ink">
      <img src={rivieraImage} alt="The French Riviera coastline" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="relative px-6 py-10 text-onink sm:px-10">
        <p className="text-xs font-semibold uppercase">Your guide · Day 05 · From Saint-Tropez to Nice</p>
        <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight sm:text-5xl">Canals, your own perfume<br />& a swim in Nice.</h2>
        <p className="mt-5 max-w-lg text-sm leading-relaxed">Sénéquier → Port Grimaud → Sainte-Maxime → Galimard, Grasse → Nice</p>
      </div>
    </header>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-2xl">Our day, at a glance</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Start the day with breakfast at 08:00, then follow the rhythm of our later arrival times. The perfume workshop is the fixed appointment to build your day around. Book that first, then adapt the morning stops and lunch to your chosen time. Driving and parking allowances below are estimates, not our exact departure times.</p>
      <ol className="mt-5 divide-y divide-border">{[
        [times.breakfast, "Breakfast at Sénéquier", "Coffee beside the yachts. Go early, as it fills up later."],
        [times.portGrimaud, "Port Grimaud", "Our short canal stop. Honestly, eM would skip it next time."],
        [times.sainteMaxime, "Sainte-Maxime", "The seafront, old-town shops and lunch here or along the way."],
        [times.perfumeWorkshop, "Galimard · Grasse", "Our reserved perfume-making workshop. Use your own confirmed booking time."],
        [times.nice, "Arrive in Nice", "Hotel Albert 1er, then straight down towards the beach."],
        [`Until about ${times.beachFinish}`, "Beach time, then back to the hotel", "A swim and a slower late afternoon before getting ready for dinner."],
        ["Later that evening", "La Villa d'Este & Nice after dark", "Italian dinner, an evening walk, a crêpe and a relaxed shisha stop."],
      ].map(([time, title, note]) => <li key={time} className="grid gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4"><span className="text-sm font-semibold text-terracotta">{time}</span><div><p className="text-sm font-semibold">{title}</p><p className="mt-1 text-sm leading-relaxed text-soft">{note}</p></div></li>)}</ol>
    </div>

    <FranceDayRouteSketch day={5} />
    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Coffee className="size-5" />01 · Sénéquier beside the yachts</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Plan breakfast at Sénéquier for {times.breakfast}, right by the yachts at Port de Saint-Tropez. We were there at 08:16, and an early table was a lovely way to enjoy one more morning here before moving on. Check the current breakfast service hours and menu, then collect your luggage and check out before leaving town.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">The early start matters here. Sénéquier fills up later in the morning, so a later breakfast can mean waiting for a table. Factor that into your plans, especially with a fixed perfume workshop appointment ahead. If you want a slower start, choose another breakfast spot rather than letting a queue put the rest of the day under pressure.</p>
      <aside className="mt-4 border-l-2 border-sage pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">V & eM · a very specific breakfast tip</strong> We'd skip the scrambled eggs without yolks. Some breakfast experiments don't need a repeat.</aside>
      <p className="mt-3 text-sm leading-relaxed text-soft">Find Sénéquier at 29 quai Jean Jaurès, right on the port.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={placeMapUrl("Sénéquier Saint-Tropez")}><MapPin />Sénéquier</MapLink><MapLink href="https://www.senequier.com/petit-dejeuner/">Breakfast menu & hours</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Waves className="size-5" />02 · Port Grimaud, a little Venice of Provence</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Allow around 20–40 minutes from Saint-Tropez, with extra time for summer traffic. This is a local-road journey with no motorway toll. Follow signs for visitor parking outside the canal neighbourhood, check the posted charges and allow another 10–15 minutes to park and walk in. Don't navigate down residential waterside lanes with the car.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Where to park:</strong> Parking Visiteurs Port Grimaud, on avenue de la Mer, beside the main entrance to Port Grimaud 1. Leave the car here and continue on foot towards Place du Marché and the canals. This is a privately operated paid visitor car park, not municipal street parking, so check its own tariff board and payment instructions.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">We arrived at {times.portGrimaud}. Often called the little Venice of Provence, Port Grimaud has pastel façades beside canals, little bridges and boats almost at the doorstep. There are photogenic corners, but it felt mainly residential to us rather than a standout experience.</p>
      <aside className="mt-4 border-l-2 border-sage pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">eM · honestly, I'd skip it</strong> Port Grimaud wasn't anything special for me. I'd personally leave it out altogether next time. If canals and photos appeal to you, keep it as a short walk, but don't feel you need to stop just because it's on our original route.</aside>
      <p className="mt-3 text-sm leading-relaxed text-soft">Take a gentle walk through the publicly accessible lanes and squares beside the water. The bridge between Place des Artisans and Place du Marché is a particularly lovely photo spot. Allow roughly 30–45 minutes for a compact stroll and photos, as a planning suggestion. Respect private bridges and residential access signs. This is somewhere to slow down briefly, not squeeze in another full excursion.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={drivingMapUrl("Parking du Nouveau Port Saint-Tropez", "Parking Visiteurs Port Grimaud Avenue de la Mer")}><Car />Drive to visitor parking</MapLink><MapLink href={placeMapUrl("Parking Visiteurs Port Grimaud Avenue de la Mer")}><MapPin />Visitor car park</MapLink><MapLink href={drivingMapUrl("Parking Visiteurs Port Grimaud Avenue de la Mer", "Place du Marché Port Grimaud").replace("travelmode=driving", "travelmode=walking")}>Walk to the canals</MapLink><MapLink href="https://port-grimaud.fr/visiteurs.html">Official visitor information</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="font-display text-2xl">03 · Sainte-Maxime & a seaside pause</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Allow around 15–30 minutes from Port Grimaud on the coastal road, longer in heavy traffic. No motorway toll on this leg. Choose signed public parking near the centre or seafront, check the current restrictions and charges, and allow 10–15 minutes to reach the promenade.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">We were here at {times.sainteMaxime}. Walk along Promenade Simon-Lorière, past the Tour Carrée and into the old-town lanes for shops and a little browsing. You don't need a museum visit to enjoy this stop. Keep an eye on your workshop time rather than stretching the walk too far.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">Where to park:</strong> Parking Louis Blanc, boulevard Frédéric Mistral, is a convenient central option for this stop. Leave the car here and walk towards Promenade Simon-Lorière, then continue to the Tour Carrée and old town. Check the posted seasonal charges and parking restrictions before leaving the car.</p>
      <aside className="mt-4 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">If the day feels too full</strong> You can leave out Sainte-Maxime as well as Port Grimaud. Go towards Grasse, allow time for lunch and protect your Galimard appointment. eM would skip Port Grimaud even without time pressure. If you do stop in Sainte-Maxime, lunch here works well before continuing.</aside>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={drivingMapUrl("Parking Visiteurs Port Grimaud Avenue de la Mer", "Parking Louis Blanc Boulevard Frédéric Mistral Sainte-Maxime")}><Car />Drive to Louis Blanc parking</MapLink><MapLink href={placeMapUrl("Parking Louis Blanc Boulevard Frédéric Mistral Sainte-Maxime")}><MapPin />Louis Blanc car park</MapLink><MapLink href={drivingMapUrl("Parking Louis Blanc Sainte-Maxime", "Promenade Simon-Lorière Sainte-Maxime").replace("travelmode=driving", "travelmode=walking")}>Walk to the promenade</MapLink><MapLink href={`${drivingMapUrl("Promenade Simon-Lorière Sainte-Maxime", "Sainte-Maxime vieille ville").replace("travelmode=driving", "travelmode=walking")}&waypoints=${encodeURIComponent("Tour Carrée Sainte-Maxime")}`}><MapPin />Seafront & old-town walk</MapLink><MapLink href="https://www.sainte-maxime.com/en/prepare/access-and-parking/parking/car-parks/">Official parking information</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Sparkles className="size-5" />04 · Make your own perfume at Galimard</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Allow roughly 1 hour 15–1 hour 45 from Sainte-Maxime to Grasse as a driving estimate, with extra time for parking and workshop check-in. The A8 route can include tolls. Check your navigation and current tolls rather than assuming the coastal option will be quicker. Eat lunch before the workshop, either in Sainte-Maxime or at a convenient stop along the way.</p>
      <aside className="mt-4 border-l-4 border-terracotta pl-5"><h4 className="text-lg font-semibold">Book the workshop well in advance</h4><p className="mt-2 text-sm leading-relaxed text-soft">Our appointment was at {times.perfumeWorkshop}. Reserve your preferred session before travelling and adapt the rest of the day to that time. Keep the confirmation and navigate to the workshop address in it, not simply a Galimard factory or shop. Confirm the session duration, arrival instructions and parking with your booking.</p></aside>
      <p className="mt-3 text-sm leading-relaxed text-soft">The Grasse perfume-creation workshop is at Studio des Fragrances, 5 route de Pégomas. Galimard lists a duration of 1 hour 45 minutes. Its factory-museum at 73 route de Cannes is a different address. Check your confirmation before setting off and allow time to arrive before the session starts.</p>
      <p className="mt-4 text-sm leading-relaxed text-soft">This is where you create your own perfume, a much more personal souvenir than picking something at random from a shelf. You can also buy ready-made perfumes in the shop. We found beautiful scents and lovely miniature sets that made great gifts.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={drivingMapUrl("Sainte-Maxime", "Galimard Studio des Fragrances 5 Route de Pégomas Grasse")}><Car />Drive from Sainte-Maxime</MapLink><MapLink href={drivingMapUrl("Port Grimaud", "Galimard Studio des Fragrances 5 Route de Pégomas Grasse")}>Direct route if skipping Sainte-Maxime</MapLink><MapLink href={drivingMapUrl("Parking du Nouveau Port Saint-Tropez", "Galimard Studio des Fragrances 5 Route de Pégomas Grasse")}>Skip both stops · drive to Grasse</MapLink><MapLink href={placeMapUrl("Galimard Studio des Fragrances 5 Route de Pégomas Grasse")}><MapPin />Perfume workshop</MapLink><MapLink href="https://www.galimard.com/en/product/perfume-creation-workshop-in-grasse-private-individuals">Reserve the Grasse workshop</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Waves className="size-5" />05 · Nice, Hotel Albert 1er & the beach</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Allow around 45–75 minutes from Grasse to central Nice, plus city traffic and parking time. The A8 option can include tolls. Confirm the hotel's parking recommendation and luggage drop-off arrangements before arrival, then choose a signed public garage if needed. Leave bags secure rather than in sight in the car.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">We arrived in Nice at {times.nice} and stayed at Hotel Albert 1er. From the hotel, we headed straight down towards the sea and spent the late afternoon swimming and relaxing on the beach nearby. We stayed until about {times.beachFinish}, then went back to the hotel before dinner.</p>
      <aside className="mt-4 border-l-2 border-sage pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">V & eM · a lovely base in Nice</strong> The hotel was beautiful and freshly renovated when we stayed. Our room had a little balcony with a sea view, which made it even lovelier. If you'd like the same, check the room category and confirm the balcony and sea view when booking, as they aren't features of every room.</aside>
      <p className="mt-3 text-sm leading-relaxed text-soft">Hotel Albert 1er is at 4 avenue Max Gallo and has no private parking. The hotel lists nearby public options including Parking Sulzer at 103 quai des États-Unis and Parking Corvesy at 3 rue Alexandre Mari. Check current charges and access restrictions. The beach link below is a nearby public option, not a claim about our exact spot on the beach.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">Nice's central beaches are pebbly, so water shoes and something comfortable to sit on help. Bring a towel, sunscreen and dry clothes. Check swimming flags and sea conditions, don't assume a lifeguard is still on duty late in the day, and keep valuables secure. Public beach access and paid beach-club facilities are different, so check before settling onto a sunbed.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={drivingMapUrl("Galimard Studio des Fragrances 5 Route de Pégomas Grasse", "Hotel Albert 1er Nice")}><Car />Drive to Nice</MapLink><MapLink href={placeMapUrl("Hotel Albert 1er Nice")}><MapPin />Hotel Albert 1er</MapLink><MapLink href="https://www.hotel-albert-1er.com/en/faq-family-hotel-nice/">Hotel parking details</MapLink><MapLink href={drivingMapUrl("Hotel Albert 1er Nice", "Plage du Centenaire Nice").replace("travelmode=driving", "travelmode=walking")}>Walk towards the nearby beach</MapLink></div>
    </div>

    <div className="border-b border-border py-8">
      <h3 className="flex items-center gap-2 font-display text-2xl"><Utensils className="size-5" />06 · Italian dinner & Nice after dark</h3>
      <p className="mt-3 text-sm leading-relaxed text-soft">Our dinner was at La Villa d'Este, an Italian restaurant at 6 rue Masséna in Nice. The restaurant currently says it doesn't take reservations, so check its latest policy and dinner hours, and allow for a queue. Leave time to shower and change after the beach. Then enjoy Nice on foot as the evening lights come on.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft"><strong className="text-ink">V & eM · come hungry</strong> The portions were absolutely enormous on our visit. Keep that in mind before ordering several courses, and ask the team about portion sizes if you're thinking of sharing.</p>
      <p className="mt-3 text-sm leading-relaxed text-soft">A walk through town and a crêpe belonged to our evening too. After dinner, we went for shisha and a relaxed sit-down to finish the day. Keep that last stop as long or short as you feel like, check prices before ordering and choose outdoor seating if you want to avoid indoor smoke.</p>
      <div className="mt-4 flex flex-wrap gap-2"><MapLink href={drivingMapUrl("Hotel Albert 1er Nice", "La Villa d’Este 6 Rue Masséna Nice").replace("travelmode=driving", "travelmode=walking")}><MapPin />Walk to dinner</MapLink><MapLink href="https://www.villadeste-nice.com/faq/">Restaurant details</MapLink><MapLink href={drivingMapUrl("La Villa d’Este Nice", "Promenade des Anglais Nice").replace("travelmode=driving", "travelmode=walking")}>Evening walk towards the sea</MapLink></div>
    </div>

    <div className="py-8"><h3 className="font-display text-2xl">What to put in your budget</h3><p className="mt-3 text-sm leading-relaxed text-soft">Sénéquier breakfast, fuel and any A8 tolls, parking at the morning stops, lunch, the Galimard workshop and any perfume gifts, Nice parking, Hotel Albert 1er, dinner, a crêpe and evening extras. Public beach time needn't mean paying for a beach club. Record any prepaid workshop amount once rather than adding it again on arrival.</p></div>
  </section>;
}