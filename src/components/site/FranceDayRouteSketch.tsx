type Stop = { x: number; y: number; label: string; detail: string };
type DayMap = { title: string; stops: Stop[]; path: string; note: string };

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
  7: {
    title: "Menton → Nice Airport",
    stops: [
      { x: 490, y: 75, label: "Menton", detail: "Old town · basilica · gardens" },
      { x: 530, y: 225, label: "Menton waterfront", detail: "Sablettes · La Cabane Plage" },
      { x: 150, y: 215, label: "Nice Airport", detail: "Car return · flight home" },
    ],
    path: "M490 75 L530 225 Q330 125 150 215",
    note: "Keep the car in the shared Menton garage for the walk and beach, then drive to the airport's rental return. Your flight time sets the departure deadline.",
  },
};

export function FranceDayRouteSketch({ day }: { day: number }) {
  const map = maps[day];
  if (!map) return null;
  return <div className="border-b border-border py-8" aria-label={`Day ${day} route sketch`}>
    <div className="flex flex-wrap items-baseline justify-between gap-2">
      <h3 className="font-display text-2xl">The day's route</h3>
      <span className="text-xs text-soft">Route sketch · not to scale</span>
    </div>
    <svg viewBox="0 0 700 340" role="img" aria-label={map.title} className="mt-4 w-full rounded-lg border border-border bg-card">
      <path d="M0 310 Q130 270 270 305 T540 295 T700 310 L700 340 L0 340Z" fill="var(--royal)" opacity="0.12" />
      <path d={map.path} fill="none" stroke="var(--terracotta)" strokeWidth="3" strokeDasharray="7 6" />
      {map.stops.map((stop, index) => <g key={stop.label}>
        <circle cx={stop.x} cy={stop.y} r="12" fill="var(--terracotta)" />
        <text x={stop.x} y={stop.y + 4} textAnchor="middle" fill="var(--onink)" fontSize="12">{index + 1}</text>
        <text x={stop.x} y={stop.y - 23} textAnchor="middle" fill="var(--ink)" fontSize="15">{stop.label}</text>
        <text x={stop.x} y={stop.y + 30} textAnchor="middle" fill="var(--soft)" fontSize="11">{stop.detail}</text>
      </g>)}
    </svg>
    <ol className="mt-4 grid gap-2 text-sm text-soft sm:grid-cols-2">
      {map.stops.map((stop, index) => <li key={stop.label}><span className="font-semibold text-terracotta">{index + 1} · </span><span className="font-semibold text-ink">{stop.label}</span><span className="block pl-5">{stop.detail}</span></li>)}
    </ol>
    <p className="mt-4 text-sm leading-relaxed text-soft">{map.note}</p>
  </div>;
}