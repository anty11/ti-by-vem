import { Link } from "@tanstack/react-router";
import type { Itinerary } from "@/lib/content";
import { accentHex, itineraryText } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { copy } from "@/lib/copy";
import { detailPath, type Lang } from "@/lib/i18n";
import italy from "@/assets/italy.jpg";
import switzerland from "@/assets/switzerland.jpg";
import riviera from "@/assets/riviera.jpg";

const images: Record<string, string> = {
  italy,
  switzerland,
  riviera,
};

export function ItineraryCard({ itinerary, lang = "en" }: { itinerary: Itinerary; lang?: Lang }) {
  const image = images[itinerary.slug];
  const t = copy[lang].card;
  const text = itineraryText(itinerary, lang);
  const soon = itinerary.status === "soon";
  const when = itineraryWhen(itinerary, lang);
  const notifyHref = `mailto:${contactEmail}?subject=${encodeURIComponent(
    `${t.notifySubject} — ${text.title}, ${text.country}`,
  )}`;

  return (
    <article className="glass rounded-3xl overflow-hidden">
      {image ? (
        <img
          src={image}
          alt={`${text.country}: ${text.title}`}
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
          <span className="font-display text-3xl text-ink/60">{text.country}</span>
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-ink">{text.country}</span>
          <span className="glass-soft rounded-full px-2.5 py-1 text-soft">
            {itinerary.days} {t.days} · {text.stops}
          </span>
        </div>
        <h3 className="mt-2 font-display text-2xl text-ink">{text.title}</h3>
        <p className="mt-2 text-sm text-soft leading-relaxed">{text.blurb}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-sm font-semibold text-ink">
            {itinerary.budget} <span className="text-soft font-normal text-xs">{t.perPerson}</span>
          </span>
          <div className="flex items-center gap-2">
            <Link
              to={detailPath(lang)}
              params={{ slug: itinerary.slug }}
              className="text-sm font-semibold text-soft hover:text-ink transition"
            >
              {t.open}
            </Link>
            <Button asChild size="sm" className="rounded-full bg-royal text-onink hover:bg-royal/90 font-semibold">
              <Link
                to={detailPath(lang)}
                params={{ slug: itinerary.slug }}
                hash="buy"
              >
                {t.buy}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
