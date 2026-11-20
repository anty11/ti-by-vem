import { ArrowUpRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { japanVenues, type JapanVenue, type JapanVenueId } from "@/lib/japan-venues";

export function JapanVenueLinks({ id }: { id: JapanVenueId }) {
  const venue: JapanVenue = japanVenues[id];
  return <div className="mt-3 space-y-2"><div className="flex flex-wrap gap-2">
    {venue.official && <Button asChild variant="outline" size="sm"><a href={venue.official} target="_blank" rel="noreferrer">{venue.booking ? "Official hotel" : venue.linkLabel ?? `${venue.name} · Tabelog`}<ArrowUpRight /></a></Button>}
    {venue.booking && <Button asChild variant="outline" size="sm"><a href={venue.booking} target="_blank" rel="noreferrer">Search Booking.com<ArrowUpRight /></a></Button>}
    <Button asChild variant="outline" size="sm"><a href={venue.maps} target="_blank" rel="noreferrer">{venue.name} · Maps<ArrowUpRight /></a></Button>
  </div>
    {venue.rating !== undefined && <p className="flex flex-wrap items-center gap-1 text-xs leading-relaxed text-soft"><Star className="size-3 shrink-0 text-gold" />{venue.rating.toFixed(1)} / 5 · Google Maps listing snapshot · {venue.checkedOn}. Scores can change.{venue.ratingSource && <a className="underline" href={venue.ratingSource} target="_blank" rel="noreferrer">Listing source</a>}</p>}
  </div>;
}
