import { copy, type LeadSegment } from "@/lib/copy";
import { contactEmail, type Lang } from "@/lib/i18n";

const accentClass: Record<NonNullable<LeadSegment["c"]>, string> = {
  terracotta: "text-terracotta",
  royal: "text-royal",
};

function Lead({ segments }: { segments: LeadSegment[] }) {
  return (
    <>
      {segments.map((s, idx) => {
        if (s.c) {
          return (
            <span key={idx} className={`font-semibold ${s.i ? "italic " : ""}${accentClass[s.c]}`}>
              {s.text}
            </span>
          );
        }
        if (s.i) {
          return (
            <em key={idx} className="text-ink">
              {s.text}
            </em>
          );
        }
        return <span key={idx}>{s.text}</span>;
      })}
    </>
  );
}

export function LettersPage({ lang }: { lang: Lang }) {
  const t = copy[lang].letters;

  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lilac">{t.eyebrow}</p>
          <h1 className="mt-3 max-w-2xl font-display text-5xl leading-[1.04] text-ink">
            {t.h1.map((line, i) => (
              <span key={i}>
                {line}
                {i < t.h1.length - 1 ? <br /> : null}
              </span>
            ))}
          </h1>
          <div className="mt-5 max-w-2xl space-y-4 text-lg leading-relaxed text-soft [hyphens:auto] text-justify">
            {t.lead.map((paragraph, i) => (
              <p key={i}>
                <Lead segments={paragraph} />
              </p>
            ))}
          </div>
          <a href={`mailto:${contactEmail}?subject=${encodeURIComponent(t.subject)}`} className="mt-8 inline-block rounded-lg bg-ink px-6 py-3 font-semibold text-onink transition hover:bg-lilac">{t.cta}</a>
        </div>
        <div className="relative mx-auto h-80 w-full max-w-md">
          <div className="absolute left-4 top-6 h-56 w-72 rotate-[-5deg] rounded-lg border border-border bg-gold/40 p-6 shadow-sm"><p className="text-xs uppercase tracking-[0.2em] text-soft">{t.stampEyebrow}</p><p className="mt-16 font-display text-3xl text-ink">{t.stampTitle}</p><p className="mt-2 text-sm text-soft">{t.stampText}</p></div>
          <div className="absolute bottom-4 right-3 h-56 w-72 rotate-[4deg] rounded-lg border border-border bg-card p-6 shadow-md"><p className="font-display text-xl italic text-ink">{t.letterOpen}</p><p className="mt-5 text-sm leading-relaxed text-soft">{t.letterText}</p><p className="mt-6 font-display italic text-royal">V &amp; eM</p></div>
        </div>
      </section>
      <section className="border-y border-border bg-lilac/15">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-3">
          <div><h2 className="font-display text-xl text-ink">{t.f1Title}</h2><p className="mt-2 text-sm leading-relaxed text-soft">{t.f1Text}</p></div>
          <div><h2 className="font-display text-xl text-ink">{t.f2Title}</h2><p className="mt-2 text-sm leading-relaxed text-soft">{t.f2Text}</p></div>
          <div><h2 className="font-display text-xl text-ink">{t.f3Title}</h2><p className="mt-2 text-sm leading-relaxed text-soft">{t.f3Text}</p></div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-royal">{t.archiveEyebrow}</p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.archive.map((item) => (
            <article key={item.month} className="border-t-2 border-royal bg-card p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-soft">{item.month}</p>
              <h2 className="mt-2 font-display text-xl text-ink">{item.country}</h2>
              <p className="mt-3 text-sm leading-relaxed text-soft">{item.note}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
