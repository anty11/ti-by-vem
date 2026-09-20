import { Link, useRouterState } from "@tanstack/react-router";
import { copy } from "@/lib/copy";
import { langFromPathname, path, switchPath } from "@/lib/i18n";
import { SocialLinks } from "@/components/site/SocialLinks";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lang = langFromPathname(pathname);
  const t = copy[lang].nav;
  const other = switchPath(lang, pathname);

  return (
    <header className="mx-auto max-w-7xl px-5 pt-5 sm:px-6">
      <nav className="flex items-center justify-between border-b border-border py-4">
        <Link to={path(lang, "home")} className="flex items-center gap-3" aria-label={t.homeLabel}>
          <span className="grid size-10 place-items-center rounded-lg bg-ink font-display text-base text-onink">VeM</span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-ink">travel intelligence</span>
            <span className="block text-xs text-soft">by VeM</span>
          </span>
        </Link>
        <div className="hidden items-center gap-7 text-sm font-medium text-soft lg:flex">
          <Link to={path(lang, "itineraries")} className="transition hover:text-ink">{t.itineraries}</Link>
          <Link to={path(lang, "pricing")} className="transition hover:text-ink">{t.packages}</Link>
          <Link to={path(lang, "letters")} className="transition hover:text-ink">{t.postcard}</Link>
          <Link to={path(lang, "about")} className="transition hover:text-ink">{t.about}</Link>
        </div>
        <div className="flex items-center gap-3">
          <SocialLinks className="hidden sm:flex" itemClassName="size-9 [&_svg]:size-4" />
          <a
            href={other}
            className="rounded-lg border border-border px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-soft transition hover:text-ink"
            hrefLang={lang === "sk" ? "en" : "sk"}
          >
            {lang === "sk" ? "EN" : "SK"}
          </a>
          <Link to={path(lang, "pricing")} className="rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-onink transition hover:bg-royal">
            {t.viewPackages}
          </Link>
        </div>
      </nav>
    </header>
  );
}
