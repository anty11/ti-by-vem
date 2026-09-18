import { copy } from "@/lib/copy";
import type { Lang } from "@/lib/i18n";

type LegalKind = "terms" | "privacy" | "delivery";

const accent: Record<LegalKind, string> = {
  terms: "text-royal",
  privacy: "text-royal",
  delivery: "text-terracotta",
};

export function LegalPage({ lang, kind }: { lang: Lang; kind: LegalKind }) {
  const legal = copy[lang].legal;
  const page = legal[kind];

  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${accent[kind]}`}>{legal.eyebrow}</p>
      <h1 className="mt-3 font-display text-5xl text-ink">{page.h1}</h1>
      <div className="legal-copy mt-10 space-y-8 text-soft">
        {page.sections.map((section) => (
          <section key={section.h}>
            <h2>{section.h}</h2>
            <p>{section.p}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
