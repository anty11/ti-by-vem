import { Link } from "@tanstack/react-router";
import type { Itinerary } from "@/lib/content";
import { accentHex } from "@/lib/content";
import portugal from "@/assets/portugal.jpg";
import italy from "@/assets/italy.jpg";
import sweden from "@/assets/sweden.jpg";

const images: Record<string, string> = {
  portugal,
  italy,
  sweden,
};

export function ItineraryCard({ itinerary }: { itinerary: Itinerary }) {
  const image = images[itinerary.slug];

  return (
    <article className="glass rounded-3xl overflow-hidden">
      {image ? (
        <img
          src={image}
          alt={`${itinerary.country}: ${itinerary.title}`}
          width={1024}
          height={768}
          loading="lazy"
          className="w-full aspect-[4/3] object-cover"
        />
      ) : (
        <div
          className="w-full aspect-[4/3] grid place-items-center"
          style={{
            background: `linear-gradient(135deg, color-mix(in oklab, ${accentHex[itinerary.accent]} 25%, white), white)`,
          }}
        >
          <span className="font-display text-3xl text-ink/60">{itinerary.country}</span>
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-ink">{itinerary.country}</span>
          <span className="glass-soft rounded-full px-2.5 py-1 text-soft">
            {itinerary.days} days · {itinerary.stops}
          </span>
        </div>
        <h3 className="mt-2 font-display text-2xl text-ink">{itinerary.title}</h3>
        <p className="mt-2 text-sm text-soft leading-relaxed">{itinerary.blurb}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-ink">
            {itinerary.budget} <span className="text-soft font-normal text-xs">/ person</span>
          </span>
          <Link
            to="/itineraries/$slug"
            params={{ slug: itinerary.slug }}
            className="text-sm font-semibold text-royal hover:text-ink transition"
          >
            Open →
          </Link>
        </div>
      </div>
    </article>
  );
}
