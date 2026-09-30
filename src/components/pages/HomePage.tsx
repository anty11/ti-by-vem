import { Link } from "@tanstack/react-router";
import { EuropeMap } from "@/components/site/EuropeMap";
import { ItineraryCard } from "@/components/site/ItineraryCard";
import { itineraries } from "@/lib/content";
import { copy } from "@/lib/copy";
import { path, type Lang } from "@/lib/i18n";
import founderOne from "@/assets/founder-one.jpg";
import founderTwo from "@/assets/founder-two.jpg";

export function HomePage({ lang }: { lang: Lang }) {
  const t = copy[lang].home;

  return (
    <main>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-6 pt-10 lg:grid-cols-2">
        <div>
          <span className="glass-soft inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-royal">
            <span className="size-1.5 rounded-full bg-terracotta" /> {(t.badge.split("VeM")[0] ?? t.badge).trim()}
            {" "}
            <span className="normal-case">VeM</span>
          </span>
          <h1 className="mt-5 font-display text-5xl leading-[1.02] text-ink lg:text-6xl">
            {t.h1a}<span className="italic text-royal">{t.h1em1}</span>{t.h1b}<span className="italic text-terracotta">{t.h1em2}</span>{t.h1c}
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-soft">{t.lead}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to={path(lang, "itineraries")} className="rounded-xl bg-terracotta px-6 py-3 font-semibold text-onink transition hover:bg-ink">{t.ctaMap}</Link>
            <Link to={path(lang, "pricing")} className="glass-soft rounded-xl px-6 py-3 font-semibold text-ink transition hover:bg-card">{t.ctaPackages}</Link>
            <Link to={path(lang, "letters")} className="rounded-xl border border-gold/60 bg-gold/20 px-6 py-3 font-semibold text-ink transition hover:bg-gold/40">{t.ctaPostcard}</Link>
          </div>
        </div>
        <EuropeMap lang={lang} />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-7 flex items-end justify-between">
          <div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-royal">{t.onMap}</p><h2 className="mt-2 font-display text-4xl text-ink">{t.onMapTitle}</h2></div>
          <Link to={path(lang, "itineraries")} className="hidden text-sm font-semibold text-ink transition hover:text-royal sm:inline">{t.viewAll}</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">{itineraries.slice(0, 3).map((item) => <ItineraryCard key={item.slug} itinerary={item} lang={lang} />)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="glass grid items-center gap-8 rounded-3xl p-8 lg:grid-cols-[1fr_auto] lg:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">{t.packagesEyebrow}</p>
            <h2 className="mt-2 max-w-2xl font-display text-4xl text-ink">{t.packagesTitle}</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-soft">{t.packagesText}</p>
            <p className="mt-3 text-sm text-soft">{t.packagesNoteA}<Link to={path(lang, "letters")} className="font-semibold text-royal underline decoration-gold decoration-2 underline-offset-4 transition hover:text-terracotta">{t.packagesNoteLink}</Link>{t.packagesNoteB}</p>
          </div>
          <Link to={path(lang, "pricing")} className="rounded-xl bg-ink px-6 py-3 text-center font-semibold text-onink transition hover:bg-royal">{t.packagesCta}</Link>
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mx-auto mb-10 max-w-xl text-center"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage">{t.foundersEyebrow}</p><h2 className="mt-2 font-display text-4xl text-ink">{t.foundersTitle}</h2></div>
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <article className="glass flex items-center gap-5 rounded-3xl p-6"><img src={founderOne} alt="V, travel intelligence by VeM" className="size-24 shrink-0 rounded-2xl object-cover" /><div><h3 className="font-display text-xl text-ink">V</h3><p className="mt-1 text-xs uppercase tracking-[0.2em] text-soft">{t.vRole}</p><p className="mt-2 text-sm leading-relaxed text-soft">{t.vText}</p></div></article>
          <article className="glass flex items-center gap-5 rounded-3xl p-6"><img src={founderTwo} alt="eM, travel intelligence by VeM" className="size-24 shrink-0 rounded-2xl object-cover" /><div><h3 className="font-display text-xl text-ink">eM</h3><p className="mt-1 text-xs uppercase tracking-[0.2em] text-soft">{t.mRole}</p><p className="mt-2 text-sm leading-relaxed text-soft">{t.mText}</p></div></article>
        </div>
      </section>
    </main>
  );
}
