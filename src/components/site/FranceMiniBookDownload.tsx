import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Lang } from "@/lib/i18n";
import miniBook from "@/assets/france-mini-book.pdf?url";
import miniBookCover from "@/assets/france-mini-book-cover.jpg";

// The four-page offline mini book for the paid France guide. Rendered only inside the
// unlocked trip room, like the rest of the detailed guide.
const copy: Record<Lang, { eyebrow: string; title: string; text: string; button: string; meta: string }> = {
  en: {
    eyebrow: "Take it offline",
    title: "The French mini book",
    text: "The essentials of all seven days on four A4 pages: times, parking, where you sleep, what to book first and our tips. Save it on your phone before you leave, it works without signal.",
    button: "Download the mini book",
    meta: "PDF · 4 pages · 1 MB · in English",
  },
  sk: {
    eyebrow: "Na cestu offline",
    title: "Francúzsky minibook",
    text: "To najdôležitejšie zo všetkých siedmich dní na štyroch stranách A4: časy, parkovanie, kde spíte, čo rezervovať ako prvé a naše tipy. Ulož si ho do mobilu pred odchodom, funguje aj bez signálu.",
    button: "Stiahnuť minibook",
    meta: "PDF · 4 strany · 1 MB · v angličtine",
  },
};

export function FranceMiniBookDownload({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <section aria-label={t.title} className="mt-10 grid items-center gap-6 rounded-lg border border-border bg-card p-6 sm:grid-cols-[9rem_1fr]">
      <img
        src={miniBookCover}
        alt=""
        width={360}
        height={509}
        loading="lazy"
        className="mx-auto w-32 rounded-md border border-border shadow-sm sm:w-36"
      />
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal">{t.eyebrow}</p>
        <h2 className="mt-2 font-display text-3xl text-ink">{t.title}</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-soft">{t.text}</p>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <Button asChild>
            <a href={miniBook} download="VeM-French-Riviera-mini-book.pdf">
              <Download />
              {t.button}
            </a>
          </Button>
          <span className="text-xs text-soft">{t.meta}</span>
        </div>
      </div>
    </section>
  );
}
