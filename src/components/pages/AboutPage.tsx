import { copy } from "@/lib/copy";
import { contactEmail, type Lang } from "@/lib/i18n";
import { SocialLinks } from "@/components/site/SocialLinks";
import founderOne from "@/assets/founder-one.jpg";
import founderTwo from "@/assets/founder-two.jpg";

export function AboutPage({ lang }: { lang: Lang }) {
  const t = copy[lang].about;

  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage">{t.eyebrow}</p>
        <h1 className="mt-3 font-display text-5xl leading-[1.04] text-ink">{t.h1}</h1>
        <p className="mt-6 text-lg leading-relaxed text-soft">{t.p1}</p>
        <p className="mt-4 text-lg leading-relaxed text-soft">{t.p2}</p>
      </div>
      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        <article><img src={founderOne} alt="Veronika, V of travel intelligence by VeM" width={816} height={816} className="aspect-[4/3] w-full rounded-xl object-cover" /><p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-royal">V</p><h2 className="mt-1 font-display text-3xl text-ink">Veronika</h2><p className="mt-3 max-w-md text-sm leading-relaxed text-soft">{t.vText}</p></article>
        <article><img src={founderTwo} alt="Monika, eM of travel intelligence by VeM" width={816} height={816} className="aspect-[4/3] w-full rounded-xl object-cover" /><p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">eM</p><h2 className="mt-1 font-display text-3xl text-ink">Monika</h2><p className="mt-3 max-w-md text-sm leading-relaxed text-soft">{t.mText}</p></article>
      </div>
      <div className="mt-14 border-t border-border pt-8">
        <h2 className="font-display text-2xl text-ink">{t.contactTitle}</h2>
        <p className="mt-2 text-soft">{t.contactA}<a href={`mailto:${contactEmail}`} className="font-semibold text-royal">{contactEmail}</a>{t.contactB}</p>
        <SocialLinks className="mt-4" itemClassName="size-10 [&_svg]:size-[18px]" />
      </div>
    </main>
  );
}
