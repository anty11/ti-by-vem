import { Link } from "@tanstack/react-router";
import type { Itinerary } from "@/lib/content";
import { accentHex, itineraryText, itineraryWhen } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { copy } from "@/lib/copy";
import { Countdown } from "@/components/site/Countdown";
import { contactEmail, detailPath, type Lang } from "@/lib/i18n";
import italy from "@/assets/italy.jpg";
import switzerland from "@/assets/switzerland.jpg";
import riviera from "@/assets/riviera.jpg";
import scotland from "@/assets/scotland.jpg";
import torontoNewYork from "@/assets/toronto-new-york.jpg";
import dolomitesWinter from "@/assets/dolomites-winter.jpg";
import osloTromso from "@/assets/oslo-tromso.jpg";
import japan from "@/assets/japan.jpg";
import oktoberfestDolomites from "@/assets/oktoberfest-dolomites.jpg";
import lapland from "@/assets/lapland.jpg";

const images: Record<string, string> = {
  italy,
  switzerland,
  riviera,
  scotland,
  "dolomites-winter": dolomitesWinter,
  "toronto-new-york": torontoNewYork,
  "oslo-tromso": osloTromso,
  japan,
  "oktoberfest-dolomites": oktoberfestDolomites,
  lapland,
};

export function ItineraryCard({ itinerary, lang = "en" }: { itinerary: Itinerary; lang?: Lang }) {
  const image = images[itinerary.slug];
  const t = copy[lang].card;
  const text = itineraryText(itinerary, lang);
  const soon = itinerary.status === "soon";
  const beyond = itinerary.status === "beyond";
  const when = itineraryWhen(itinerary, lang);
  const notifyHref = `mailto:${contactEmail}?subject=${encodeURIComponent(
    `${t.notifySubject} — ${text.title}, ${text.country}`,
  )}`;

  return (
    <article className="glass rounded-3xl overflow-hidden relative">
      <span
        className={`absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-[11px] font-semibold shadow-sm ${
          soon ? "bg-gold text-ink" : beyond ? "bg-lilac text-ink" : "bg-sage text-ink"
        }`}
      >
        {soon ? `${t.soon}${when ? ` · ${when}` : ""}` : beyond ? t.beyond : t.live}
      </span>
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
        <Link
          to={detailPath(lang)}
          params={{ slug: itinerary.slug }}
          className="block text-left"
        >
          <h3 className="mt-2 font-display text-2xl text-ink transition hover:text-royal">{text.title}</h3>
        </Link>
        {soon && itinerary.launchDate ? (
          <Countdown target={itinerary.launchDate} lang={lang} className="mt-3" />
        ) : (
          <p className="mt-2 text-sm text-soft leading-relaxed">{text.blurb}</p>
        )}
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
            {soon ? (
              <Button asChild size="sm" variant="outline" className="rounded-full border-terracotta text-terracotta font-semibold hover:bg-terracotta/10">
                <a href={notifyHref}>{t.notify}</a>
              </Button>
            ) : (
              <Button asChild size="sm" className="rounded-full bg-royal text-onink hover:bg-royal/90 font-semibold">
                <Link to={detailPath(lang)} params={{ slug: itinerary.slug }} hash="buy">
                  {t.buy}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
