import { Link, useRouterState } from "@tanstack/react-router";
import { copy } from "@/lib/copy";
import { langFromPathname, path } from "@/lib/i18n";

export function Footer() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lang = langFromPathname(pathname);
  const t = copy[lang].footer;

  return (
    <footer className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex flex-col justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
        <div>
          <p className="font-display text-lg text-ink">travel intelligence <span className="italic text-royal">by VeM</span></p>
          <p className="mt-1 text-xs text-soft">{t.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-soft">
          <Link to={path(lang, "terms")} className="transition hover:text-ink">{t.terms}</Link>
          <Link to={path(lang, "privacy")} className="transition hover:text-ink">{t.privacy}</Link>
          <Link to={path(lang, "delivery")} className="transition hover:text-ink">{t.delivery}</Link>
          <Link to={path(lang, "about")} className="transition hover:text-ink">{t.contact}</Link>
        </div>
        <p className="text-xs text-soft">© 2026 travel intelligence by VeM</p>
      </div>
    </footer>
  );
}
