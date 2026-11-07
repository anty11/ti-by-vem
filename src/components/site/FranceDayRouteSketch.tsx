import { FranceRouteArtwork } from "@/components/site/FranceRouteArtwork";

type Stop = { x: number; y: number; label: string; detail: string };
type DayMap = { title: string; stops: Stop[]; path: string; note: string; heading?: string };

const maps: Record<number, DayMap> = {
  3: {
    title: "Cannes → Pampelonne → Saint-Tropez",
    stops: [
      { x: 550, y: 65, label: "Cannes", detail: "Saddle · festival steps" },
      { x: 230, y: 245, label: "Pampelonne", detail: "Verde Beach" },
      { x: 195, y: 120, label: "Saint-Tropez", detail: "Port parking · Hotel Playa" },
    ],
    path: "M550 65 Q410 100 230 245 L195 120",
    note: "Morning in Cannes, a beach day at Verde, then back to Saint-Tropez for the hotel and evening port walk.",
  },
  4: {
    title: "Saint-Tropez ↔ Pampelonne",
    stops: [
      { x: 220, y: 75, label: "Saint-Tropez", detail: "Cédric Grolet · port · Rondini" },
      { x: 505, y: 185, label: "Bagatelle", detail: "Reserved lunch · Pampelonne" },
      { x: 245, y: 280, label: "Gigi", detail: "Dinner · Ramatuelle" },
    ],
    path: "M220 75 Q400 60 505 185 Q360 190 220 75 Q120 180 245 280",
    note: "Breakfast in town, lunch at Bagatelle, back to town for the walk and Rondini, then dinner at Gigi. The afternoon retraces the journey to Saint-Tropez.",
  },
  5: {
    title: "Saint-Tropez → Grasse → Nice",
    stops: [
      { x: 95, y: 265, label: "Saint-Tropez", detail: "Sénéquier" },
      { x: 155, y: 155, label: "Port Grimaud", detail: "Canals · eM would skip" },
      { x: 310, y: 215, label: "Sainte-Maxime", detail: "Promenade · lunch" },
      { x: 450, y: 65, label: "Grasse", detail: "Galimard workshop" },
      { x: 605, y: 165, label: "Nice", detail: "Hotel · beach · dinner" },
    ],
    path: "M95 265 L155 155 L310 215 L450 65 L605 165",
    note: "This shows our original route. You can skip Port Grimaud and Sainte-Maxime and head towards Grasse, keeping lunch and your confirmed perfume-workshop time in the plan.",
  },
  6: {
    title: "Nice → Èze → Menton → Monaco",
    stops: [
      { x: 90, y: 250, label: "Nice", detail: "Hotel breakfast" },
      { x: 220, y: 145, label: "Coastal stops", detail: "Villefranche · Cap-Ferrat" },
      { x: 345, y: 65, label: "Èze", detail: "Village · garden · coffee" },
      { x: 480, y: 145, label: "Maybourne Riviera", detail: "Terrace lunch" },
      { x: 600, y: 65, label: "Menton", detail: "Hotel · leave the car" },
      { x: 465, y: 265, label: "Monaco", detail: "Taxi · evening walk" },
    ],
    path: "M90 250 L220 145 L345 65 L480 145 L600 65 L465 265",
    note: "Choose short coastal stops to protect the terrace lunch booking. After checking in at Menton, travel back to Monaco by taxi and arrange the return in advance.",
  },
  61: {
    title: "Èze village walking circuit",
    heading: "Èze · the village walk",
    stops: [
      { x: 125, y: 255, label: "Place Colette", detail: "Parking · Fragonard" },
      { x: 285, y: 150, label: "Village lanes", detail: "Souvenirs · stone streets" },
      { x: 475, y: 75, label: "Church", detail: "Notre-Dame-de-l’Assomption" },
      { x: 540, y: 240, label: "Jardin Exotique", detail: "Paid garden · sea views" },
      { x: 310, y: 280, label: "Château Eza", detail: "Coffee if service allows" },
    ],
    path: "M125 255 L285 150 L475 75 L540 240 L310 280 L125 255",
    note: "A schematic walking circuit, not a street map. Keep the car at Place Colette and use the walking link for the actual lanes and steps. Choose the stops that fit before lunch.",
  },
  62: {
    title: "Monaco evening walking route",
    heading: "Monaco · the evening walk",
    stops: [
      { x: 115, y: 250, label: "Port Hercule", detail: "Harbour start" },
      { x: 270, y: 100, label: "Casino gardens", detail: "Monte Carlo" },
      { x: 440, y: 80, label: "Casino & opera", detail: "Smart dress · ID for gaming" },
      { x: 580, y: 215, label: "Fairmont hairpin", detail: "F1 bend · seaside" },
    ],
    path: "M115 250 L270 100 L440 80 L580 215",
    note: "The port-to-Monte-Carlo walk climbs uphill. Follow the linked walking route for street access and steps, and agree your return taxi pickup separately. The car stays in Menton.",
  },
  7: {
    title: "Menton → Nice Airport",
    stops: [
      { x: 490, y: 75, label: "Menton", detail: "Old town · basilica · gardens" },
      { x: 530, y: 225, label: "Menton waterfront", detail: "Sablettes · La Cabane Plage" },
      { x: 275, y: 130, label: "CAP3000", detail: "Shopping if time allows" },
      { x: 125, y: 260, label: "Nice Airport", detail: "Car return · flight home" },
    ],
    path: "M490 75 L530 225 L275 130 L125 260",
    note: "Keep the car in the shared Menton garage for the walk and beach, then drive to the airport's rental return. Your flight time sets the departure deadline.",
  },
};

export function FranceDayRouteSketch({ day }: { day: number }) {
  const map = maps[day];
  if (!map) return null;
  return <div className="border-b border-border py-8" aria-label={`Day ${day} route sketch`}>
    <div className="flex flex-wrap items-baseline justify-between gap-2">
      <h3 className="font-display text-2xl">{map.heading ?? "The day's route"}</h3>
      <span className="text-xs text-soft">Route sketch · not to scale</span>
    </div>
    <FranceRouteArtwork title={map.title} stops={map.stops} path={map.path} day={day} />
    <ol className="mt-4 grid gap-2 text-sm text-soft sm:grid-cols-2">
      {map.stops.map((stop, index) => <li key={stop.label}><span className="font-semibold text-terracotta">{index + 1} · </span><span className="font-semibold text-ink">{stop.label}</span><span className="block pl-5">{stop.detail}</span></li>)}
    </ol>
    <p className="mt-4 text-sm leading-relaxed text-soft">{map.note}</p>
  </div>;
}