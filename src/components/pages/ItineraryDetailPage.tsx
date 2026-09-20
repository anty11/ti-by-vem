import { Link } from "@tanstack/react-router";
import type { Itinerary } from "@/lib/content";
import { itineraryText } from "@/lib/content";
import { TierCards } from "@/components/site/TierCards";
import { copy } from "@/lib/copy";
import { contactEmail, path, type Lang } from "@/lib/i18n";

export function ItineraryDetailPage({ itinerary, lang }: { itinerary: Itinerary; lang: Lang }) {
  const t = copy[lang].detail;
  const text = itineraryText(itinerary, lang);

  const mailto = (subject: string) =>
    `mailto:${contactEmail}?subject=${encodeURIComponent(`${subject} — ${text.title}, ${text.country}`)}`;

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <Link to={path(lang, "itineraries")} className="text-sm font-semibold text-soft hover:text-ink transition">
        {t.back}
      </Link>
      <div className="glass rounded-3xl p-8 lg:p-12 mt-5">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-royal">{text.country}</span>
        <h1 className="mt-2 font-display text-5xl leading-[1.05] text-ink">{text.title}</h1>
        <p className="mt-4 max-w-xl text-soft text-lg leading-relaxed">{text.blurb}</p>

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
        <p className="mt-6 text-sm text-soft italic">{t.note}</p>
      </div>

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
              {t.buyChat}
            </a>
            <a
              href={mailto(t.buySubjectUs)}
              className="inline-flex items-center justify-center rounded-full border border-terracotta px-7 py-3 text-sm font-semibold text-terracotta transition hover:bg-terracotta/10"
            >
              {t.buyUs}
            </a>
          </div>
          <p className="mt-4 text-xs text-soft">{t.buyNote}</p>
          <Link to={path(lang, "access")} className="mt-3 inline-block text-xs font-semibold text-royal underline-offset-4 hover:underline">
            {lang === "sk" ? "Už máte kód? Odomknite si cestu" : "Already have a code? Unlock your trip"}
          </Link>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="font-display text-3xl text-ink text-center mb-8">{t.compare}</h2>
        <TierCards lang={lang} />
      </div>
    </main>
  );
}
