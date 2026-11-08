import mapDay1 from "@/assets/france-map-day1.jpg";
import mapDay2 from "@/assets/france-map-day2.jpg";
import mapDay3 from "@/assets/france-map-day3.jpg";
import mapDay4 from "@/assets/france-map-day4.jpg";
import mapDay5 from "@/assets/france-map-day5.jpg";
import mapDay6 from "@/assets/france-map-day6.jpg";
import mapDay7 from "@/assets/france-map-day7.jpg";
import mapOverview from "@/assets/france-map-overview.jpg";

type ArtworkStop = { x: number; y: number; label: string; id?: string };

const dayMaps: Record<number, string> = {
  0: mapOverview,
  1: mapDay1,
  2: mapDay2,
  3: mapDay3,
  4: mapDay4,
  5: mapDay5,
  6: mapDay6,
  7: mapDay7,
};

export function FranceRouteArtwork({ title, day }: {
  title: string;
  stops?: ArtworkStop[];
  path?: string;
  height?: number;
  selected?: string;
  day: number;
}) {
  const src = dayMaps[day] ?? mapDay1;
  return <div className="france-atlas mt-4 overflow-hidden rounded-lg border border-border">
    <div className="flex items-center justify-between border-b border-border bg-card px-5 py-3">
      <span className="text-xs font-semibold uppercase text-soft">France · {day === 0 ? "Journey overview" : day > 7 ? "Walking atlas" : `Chapter ${String(day).padStart(2, "0")}`}</span>
      <span className="font-display text-sm text-ink">Provence & Côte d’Azur</span>
    </div>
    <img src={src} alt={title} loading="lazy" width={1408} height={896} className="block w-full" />
  </div>;
}
