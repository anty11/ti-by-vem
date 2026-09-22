import { Link } from "@tanstack/react-router";
import type { Itinerary } from "@/lib/content";
import { itineraryText, itineraryWhen } from "@/lib/content";
import { TierCards } from "@/components/site/TierCards";
import { Countdown } from "@/components/site/Countdown";
import { copy } from "@/lib/copy";
import { RouteMap } from "@/components/site/RouteMap";
import { routeMaps } from "@/lib/route-maps";
import { contactEmail, path, type Lang } from "@/lib/i18n";

export function ItineraryDetailPage({ itinerary, lang }: { itinerary: Itinerary; lang: Lang }) {
  const t = copy[lang].detail;
  const text = itineraryText(itinerary, lang);
  const soon = itinerary.status === "soon";
  const when = itineraryWhen(itinerary, lang);
  const card = copy[lang].card;
  const routeMap = routeMaps[itinerary.slug];
  const chatPrice = lang === "sk" ? itinerary.chatPriceSk ?? itinerary.chatPrice : itinerary.chatPrice;
  const chatLabel = chatPrice ? `${t.buyChatPrefix}${chatPrice}` : t.buyChat;
  const selfServe = chatPrice === "€9" || chatPrice === "9 €";

  const mailto = (subject: string) =>
    `mailto:${contactEmail}?subject=${encodeURIComponent(`${subject} — ${text.title}, ${text.country}`)}`;

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <Link to={path(lang, "itineraries")} className="text-sm font-semibold text-soft hover:text-ink transition">
        {t.back}
      </Link>
      <div className="glass rounded-3xl p-8 lg:p-12 mt-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-royal">{text.country}</span>
          <span
            className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
              soon ? "bg-gold text-ink" : itinerary.status === "beyond" ? "bg-lilac text-ink" : "bg-sage text-ink"
            }`}
          >
            {soon ? `${card.soon}${when ? ` · ${when}` : ""}` : itinerary.status === "beyond" ? card.beyond : card.live}
          </span>
        </div>
        <h1 className="mt-2 font-display text-5xl leading-[1.05] text-ink">{text.title}</h1>
        {itinerary.personalNote && (
          <p className="mt-2 font-display text-lg italic text-terracotta">{itinerary.personalNote}</p>
        )}
        <p className="mt-4 max-w-3xl text-soft text-lg leading-relaxed text-pretty text-justify">{text.blurb}</p>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <div className="glass-soft rounded-2xl p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-soft">{t.onTheMove}</p>
            <p className="mt-1 font-display text-2xl text-ink">{itinerary.days} {t.days}</p>
          </div>
          <div className="glass-soft rounded-2xl p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-soft">{t.ground}</p>
            <p className="mt-1 font-display text-2xl text-ink">{text.stops}</p>
          </div>
          <div className="glass-soft rounded-2xl p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-soft">{t.budget}</p>
            <p className="mt-1 font-display text-2xl text-ink">{itinerary.budget}</p>
          </div>
        </div>

        <h2 className="mt-10 font-display text-2xl text-ink">{t.shape}</h2>
        <ul className="mt-4 space-y-3 text-soft">
          {text.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span className="mt-2 size-1.5 rounded-full bg-terracotta shrink-0" />
              {h}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-soft italic">{selfServe ? t.selfServeNote : t.note}</p>
      </div>

      {routeMap && <RouteMap data={routeMap} lang={lang} />}

{soon ? (
      <div id="buy" className="mt-14 scroll-mt-28">
        <div className="glass rounded-3xl p-8 lg:p-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">{t.soonEyebrow}</span>
          <h2 className="mt-2 font-display text-3xl text-ink">
            {t.soonTitle}{when ? ` · ${when}` : ""}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-soft leading-relaxed">{t.soonText}</p>
          {itinerary.launchDate && (
            <div className="mx-auto mt-7 max-w-md">
              <Countdown target={itinerary.launchDate} lang={lang} size="lg" />
            </div>
          )}
          <a
            href={mailto(t.soonSubject)}
            className="mt-7 inline-flex items-center justify-center rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-onink transition hover:bg-ink"
          >
            {t.soonCta}
          </a>
        </div>
      </div>
      ) : (
      <div id="buy" className="mt-14 scroll-mt-28">
        <div className="glass rounded-3xl p-8 lg:p-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">{t.buyEyebrow}</span>
          <h2 className="mt-2 font-display text-3xl text-ink">{t.buyTitlePrefix} {text.title} {t.buyTitleSuffix}</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-soft leading-relaxed">{t.buyText}</p>
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={mailto(t.buySubjectChat)}
              className="inline-flex items-center justify-center rounded-full bg-royal px-7 py-3 text-sm font-semibold text-onink transition hover:bg-royal/90"
            >
              {chatLabel}
            </a>
            {!selfServe && (
              <a
                href={mailto(t.buySubjectUs)}
                className="inline-flex items-center justify-center rounded-full border border-terracotta px-7 py-3 text-sm font-semibold text-terracotta transition hover:bg-terracotta/10"
              >
                {t.buyUs}
              </a>
            )}
          </div>
          <p className="mt-4 text-xs text-soft">{selfServe ? t.selfServeBuyNote : t.buyNote}</p>
          <Link to={path(lang, "access")} className="mt-3 inline-block text-xs font-semibold text-royal underline-offset-4 hover:underline">
            {lang === "sk" ? "Už máte kód? Odomknite si cestu" : "Already have a code? Unlock your trip"}
          </Link>
        </div>
      </div>
      )}

      <div className="mt-14">
        <h2 className="font-display text-3xl text-ink text-center mb-8">{t.compare}</h2>
        <TierCards lang={lang} />
      </div>
    </main>
  );
}
