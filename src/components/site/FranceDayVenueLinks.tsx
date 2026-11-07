import { ArrowUpRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { franceVenues } from "@/lib/france-venues";

export function FranceDayVenueLinks({ day }: { day: number }) {
  const venues = franceVenues[day];
  if (!venues) return null;
  return <section aria-label={`Day ${day} restaurants and hotels`} className="border-b border-border py-8">
    <h3 className="font-display text-2xl">Places in this chapter</h3>
    <p className="mt-2 text-xs text-soft">Google Maps ratings checked 7 November 2026. Scores and review counts can change, open Google Maps for the latest.</p>
    <ul className="mt-5 divide-y divide-border">{venues.map((venue) => <li key={venue.name} className="flex flex-wrap items-center justify-between gap-3 py-4">
      <div className="min-w-0"><h4 className="text-sm font-semibold text-ink">{venue.name}</h4>{venue.note && <p className="mt-1 text-xs text-soft">{venue.note}</p>}{venue.rating !== undefined && <p className="mt-1 flex items-center gap-1 text-xs text-soft"><Star className="size-3 text-gold" />{venue.rating.toFixed(1)} / 5 · Google Maps · {venue.reviews?.toLocaleString("en-US")} reviews</p>}</div>
      <div className="flex flex-wrap gap-2">{venue.official && <Button asChild variant="outline" size="sm"><a href={venue.official} target="_blank" rel="noreferrer">Official<ArrowUpRight /></a></Button>}{venue.booking && <Button asChild variant="outline" size="sm"><a href={venue.booking} target="_blank" rel="noreferrer">Booking.com<ArrowUpRight /></a></Button>}{venue.maps && <Button asChild variant="outline" size="sm"><a href={venue.maps} target="_blank" rel="noreferrer">Google Maps<ArrowUpRight /></a></Button>}</div>
    </li>)}</ul>
  </section>;
}