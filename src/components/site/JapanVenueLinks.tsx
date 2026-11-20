import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { japanVenues, type JapanVenue, type JapanVenueId } from "@/lib/japan-venues";

export function JapanVenueLinks({ id }: { id: JapanVenueId }) {
  const venue: JapanVenue = japanVenues[id];
  return <div className="mt-3 flex flex-wrap gap-2">
    {venue.official && <Button asChild variant="outline" size="sm"><a href={venue.official} target="_blank" rel="noreferrer">{venue.booking ? "Official hotel" : `${venue.name} · Tabelog`}<ArrowUpRight /></a></Button>}
    {venue.booking && <Button asChild variant="outline" size="sm"><a href={venue.booking} target="_blank" rel="noreferrer">Search Booking.com<ArrowUpRight /></a></Button>}
    <Button asChild variant="outline" size="sm"><a href={venue.maps} target="_blank" rel="noreferrer">{venue.name} · Maps<ArrowUpRight /></a></Button>
  </div>;
}
