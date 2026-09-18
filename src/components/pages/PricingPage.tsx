import { Link } from "@tanstack/react-router";
import { ArrowDown, Bot, Compass, MessageCircle, MoveRight } from "lucide-react";
import { TierCards } from "@/components/site/TierCards";
import { Button } from "@/components/ui/button";
import { copy } from "@/lib/copy";
import { path, type Lang } from "@/lib/i18n";
import founderOne from "@/assets/founder-one.jpg";
import founderTwo from "@/assets/founder-two.jpg";

export function PricingPage({ lang }: { lang: Lang }) {
  const t = copy[lang].pricing;

  return (
    <main className="overflow-hidden">
      <section className="relative mx-auto grid min-h-[610px] max-w-7xl items-center gap-12 px-6 py-14 lg:grid-cols-[1.1fr_.9fr]">
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">{t.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-6xl leading-[.95] text-ink lg:text-7xl">{t.h1a}<span className="italic text-royal">{t.h1em}</span>{t.h1b}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-soft">{t.lead}</p>
          <Button asChild size="lg" className="mt-8"><a href="#packages">{t.cta} <ArrowDown aria-hidden="true" /></a></Button>
        </div>
        <div className="relative mx-auto h-[380px] w-full max-w-md" aria-label={t.notesAria}>
          <div className="absolute left-2 top-7 w-64 -rotate-6 rounded-lg bg-gold p-6 shadow-xl">
            <Compass className="size-7 text-ink" aria-hidden="true" />
            <p className="mt-12 font-display text-3xl leading-tight text-ink">{t.note1a}<br/>{t.note1b}</p>
            <p className="mt-5 text-sm text-ink/70">{t.note1c}</p>
          </div>
          <div className="absolute bottom-4 right-0 w-64 rotate-3 rounded-lg bg-terracotta p-6 text-onink shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-onink/70">{t.note2Eyebrow}</p>
            <p className="mt-10 font-display text-3xl leading-tight">{t.note2}</p>
          </div>
          <div className="absolute right-2 top-1 flex -space-x-3">
            <img src={founderOne} alt="Veronika" className="size-14 rounded-full border-4 border-paper object-cover" />
            <img src={founderTwo} alt="Monika" className="size-14 rounded-full border-4 border-paper object-cover" />
          </div>
        </div>
      </section>

      <section id="packages" className="scroll-mt-20 bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
            <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-royal">{t.packagesEyebrow}</p><h2 className="mt-3 font-display text-5xl leading-none text-ink">{t.packagesTitle}</h2></div>
            <p className="max-w-lg text-base leading-relaxed text-soft lg:justify-self-end">{t.packagesText}</p>
          </div>
          <TierCards lang={lang} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">{t.diffEyebrow}</p><h2 className="mt-3 font-display text-4xl text-ink">{t.diffTitle}</h2></div>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="border-t-4 border-sage py-6"><Compass className="size-7 text-sage"/><p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-soft">{t.bothPackages}</p><h3 className="mt-2 font-display text-2xl text-ink">{t.diff1Title}</h3><p className="mt-3 text-sm leading-relaxed text-soft">{t.diff1Text}</p></article>
          <article className="border-t-4 border-royal py-6"><Bot className="size-7 text-royal"/><p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-soft">{t.bothPackages}</p><h3 className="mt-2 font-display text-2xl text-ink">{t.diff2Title}</h3><p className="mt-3 text-sm leading-relaxed text-soft">{t.diff2Text}</p></article>
          <article className="border-t-4 border-terracotta py-6"><MessageCircle className="size-7 text-terracotta"/><p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-soft">{t.onlyUs}</p><h3 className="mt-2 font-display text-2xl text-ink">{t.diff3Title}</h3><p className="mt-3 text-sm leading-relaxed text-soft">{t.diff3Text}</p></article>
        </div>
      </section>

      <section className="bg-lilac/15 py-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 md:flex-row md:items-center">
          <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-lilac">{t.ctaEyebrow}</p><h2 className="mt-2 font-display text-4xl text-ink">{t.ctaTitle}</h2><p className="mt-3 text-soft">{t.ctaText}</p></div>
          <Button asChild variant="outline" size="lg"><Link to={path(lang, "itineraries")}>{t.ctaButton} <MoveRight aria-hidden="true" /></Link></Button>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-10"><p className="text-center text-sm text-soft">{t.postcardNoteA}<Link to={path(lang, "letters")} className="font-semibold text-ink underline decoration-terracotta underline-offset-4">{t.postcardNoteLink}</Link></p></div>
    </main>
  );
}
