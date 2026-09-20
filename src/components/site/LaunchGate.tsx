import { useEffect, useState, type ReactNode } from "react";
import { Countdown } from "@/components/site/Countdown";
import { contactEmail, langFromPathname, type Lang } from "@/lib/i18n";
import { useRouterState } from "@tanstack/react-router";

/** Public launch of the whole site */
export const launchDate = "2026-12-01T09:00:00+01:00";
const bypassKey = "vem-preview";
const bypassValue = "vem";

const gateCopy: Record<Lang, { coming: string; travel: string; contact: string }> = {
  en: {
    coming: "coming",
    travel: "travel soon",
    contact: "Write to us",
  },
  sk: {
    coming: "coming",
    travel: "travel soon",
    contact: "Napíšte nám",
  },
};

export function LaunchGate({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lang = langFromPathname(pathname) as Lang;
  const t = gateCopy[lang] ?? gateCopy.en;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get("preview") === bypassValue) {
      localStorage.setItem(bypassKey, bypassValue);
    }
    const bypass = localStorage.getItem(bypassKey) === bypassValue;
    if (bypass || Date.now() >= new Date(launchDate).getTime()) setOpen(true);
  }, []);

  if (open) return <>{children}</>;

  return (
    <main className="min-h-screen grid place-items-center px-6 py-16">
      <div className="glass w-full max-w-xl rounded-3xl p-8 sm:p-12 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-royal">
          travel intelligence by VeM
        </span>
        <h1 className="mt-4 font-display text-5xl sm:text-6xl leading-[1.1] text-ink">
          <span className="block text-soft line-through decoration-terracotta decoration-2">{t.coming}</span>
          <span className="block italic">{t.travel}</span>
        </h1>
        <div className="mt-8">
          <Countdown target={launchDate} lang={lang} size="lg" />
        </div>
        <a
          href={`mailto:${contactEmail}`}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-onink transition hover:bg-ink"
        >
          {t.contact}
        </a>
      </div>
    </main>
  );
}
