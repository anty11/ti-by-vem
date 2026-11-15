import { ArrowUpRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { oktoberfestVenues, type OktoberfestVenue, type OktoberfestVenueId } from "@/lib/oktoberfest-venues";

export function OktoberfestVenueLinks({ id }: { id: OktoberfestVenueId }) {
  const venue: OktoberfestVenue = oktoberfestVenues[id];
  return <div className="mt-3 space-y-2">
    <div className="flex flex-wrap gap-2">
      {venue.official && <Button asChild variant="outline" size="sm"><a href={venue.official} target="_blank" rel="noreferrer">{venue.booking ? "Official hotel" : `${venue.name} · official`}<ArrowUpRight /></a></Button>}
      {venue.booking && <Button asChild variant="outline" size="sm"><a href={venue.booking} target="_blank" rel="noreferrer">{venue.bookingSearch ? "Search Booking.com" : "Booking.com"}<ArrowUpRight /></a></Button>}
      <Button asChild variant="outline" size="sm"><a href={venue.maps} target="_blank" rel="noreferrer">{venue.name} · Maps<ArrowUpRight /></a></Button>
    </div>
    {venue.rating !== undefined && <p className="flex flex-wrap items-center gap-1 text-xs text-soft"><Star className="size-3 shrink-0 text-gold" />{venue.rating.toFixed(1)} / 5 · Google Maps · checked {venue.checkedOn}. Scores can change.</p>}
    {venue.ratingScope && <p className="text-xs leading-relaxed text-soft">{venue.ratingScope}</p>}
  </div>;
}