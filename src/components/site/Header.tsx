import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="mx-auto max-w-7xl px-5 pt-5 sm:px-6">
      <nav className="flex items-center justify-between border-b border-border py-4">
        <Link to="/" className="flex items-center gap-3" aria-label="travel intelligence by VeM home">
          <span className="grid size-10 place-items-center rounded-lg bg-ink font-display text-base text-onink">VeM</span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-ink">travel intelligence</span>
            <span className="block text-xs text-soft">by VeM</span>
          </span>
        </Link>
        <div className="hidden items-center gap-7 text-sm font-medium text-soft lg:flex">
          <Link to="/itineraries" className="transition hover:text-ink">Itineraries</Link>
          <Link to="/pricing" className="transition hover:text-ink">Packages</Link>
          <Link to="/letters" className="transition hover:text-ink">Postcard</Link>
          <Link to="/about" className="transition hover:text-ink">V &amp; eM</Link>
        </div>
        <Link to="/pricing" className="rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-onink transition hover:bg-royal">
          View packages
        </Link>
      </nav>
    </header>
  );
}
