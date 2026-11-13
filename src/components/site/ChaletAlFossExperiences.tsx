import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  { title: "Breakfast with Happy & Bernie", note: "Alpaca breakfast in the Pool Garden or Farm Garden. Our breakfast was a one-hour, bathrobe-and-mountain-view bucket-list moment.", href: "https://www.hotelchaletalfoss.it/en/experience-brunch" },
  { title: "Breakfast somewhere extraordinary", note: "Floating breakfast in the infinity pool, hot-tub or forest breakfast, a treehouse table, an exclusive gondola or the Breakfast in Love setups. The heated-bed Foss Breakfast and Foss Brunch are snow-season options, not an autumn guarantee.", href: "https://www.hotelchaletalfoss.it/en/experience-brunch" },
  { title: "A little adventure, a little glamour", note: "Walk with Alpacas is a summer experience. Wear a Dream offers dress rental, with an underwater version too. The hotel also lists La Dolce Vita in 500, a vintage Fiat 500 panoramic outing, and a Pasta Masterclass.", href: "https://www.hotelchaletalfoss.it/en/all-day-experience" },
  { title: "Lunch, aperitifs & dinner with a setting", note: "Treehouse and Foss lunch options, an infinity-pool or hot-tub aperitif, Foss Wonderland, and special dinners in the small chalet, by the pool, on the terrace, in the garden, treehouse or gondola. Alpin Chef is another listed dinner experience.", href: "https://www.hotelchaletalfoss.it/en/experience" },
  { title: "Stars & champagne", note: "Night-time champagne experiences in the infinity pool, Fire Hot Tub or small hot tub. Choose the setting that appeals to you and check the seasonal conditions with the concierge.", href: "https://www.hotelchaletalfoss.it/en/experience" },
];

export function ChaletAlFossExperiences() {
  return <section aria-label="Chalet al Foss experiences" className="mt-8 border-t border-border pt-6">
    <h4 className="font-display text-2xl text-ink">What else can you experience at Chalet al Foss?</h4>
    <p className="mt-3 text-sm leading-relaxed text-soft">Our pick would still be breakfast with the alpacas. If there is one place on this route where we would set aside money for an experience, it is here. These are options currently listed by the hotel, not experiences we personally tried beyond our alpaca breakfast.</p>
    <ul className="mt-4 divide-y divide-border">{experiences.map((experience) => <li key={experience.title} className="py-4">
      <h5 className="font-semibold text-ink">{experience.title}</h5>
      <p className="mt-2 text-sm leading-relaxed text-soft">{experience.note}</p>
      <Button asChild variant="outline" size="sm" className="mt-3"><a href={experience.href} target="_blank" rel="noreferrer">Explore with the hotel<ArrowUpRight /></a></Button>
    </li>)}</ul>
    <p className="mt-3 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft"><strong className="text-ink">Arrange experiences before arrival.</strong> Slots are limited. Ask the concierge to confirm the date, time, price, number of guests, what is included, cancellation conditions and weather alternatives. A room reservation does not automatically reserve these extras. This is separate from ordinary wellness access.</p>
    <p className="mt-3 text-xs leading-relaxed text-soft">Official experience listings checked 13 November 2026. The listed selection is not live availability for your dates. Some experiences are seasonal or weather-dependent.</p>
  </section>;
}