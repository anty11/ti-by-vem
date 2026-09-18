import { EuropeMap } from "@/components/site/EuropeMap";
import { ItineraryCard } from "@/components/site/ItineraryCard";
import { itineraries } from "@/lib/content";
import { copy } from "@/lib/copy";
import type { Lang } from "@/lib/i18n";

export function ItinerariesPage({ lang }: { lang: Lang }) {
  const t = copy[lang].itineraries;

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-royal">{t.eyebrow}</span>
          <h1 className="mt-2 font-display text-5xl leading-[1.05] text-ink">{t.h1}</h1>
          <p className="mt-4 max-w-md text-soft text-lg leading-relaxed">{t.lead}</p>
        </div>
        <EuropeMap lang={lang} />
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-14">
        {itineraries.map((it) => (
          <ItineraryCard key={it.slug} itinerary={it} lang={lang} />
        ))}
      </div>
    </main>
  );
}
