import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="max-w-7xl mx-auto px-6 pt-6">
      <nav className="glass rounded-2xl px-6 py-3.5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid place-items-center size-9 rounded-xl bg-ink text-onink font-display text-lg">
            V
          </span>
          <div className="leading-tight">
            <span className="font-display text-lg text-ink">Vagrant</span>
            <span className="hidden sm:inline font-display italic text-lilac text-lg"> &amp; </span>
            <span className="font-display text-lg text-ink">Veela</span>
            <span className="hidden md:block text-[10px] uppercase tracking-[0.28em] text-soft -mt-1">
              travel intelligence
            </span>
          </div>
        </Link>
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-soft">
          <Link to="/itineraries" className="hover:text-ink transition">
            Itineraries
          </Link>
          <Link to="/pricing" className="hover:text-ink transition">
            Pricing
          </Link>
          <Link to="/letters" className="hover:text-ink transition">
            Membership
          </Link>
          <Link to="/about" className="hover:text-ink transition">
            Our story
          </Link>
        </div>
        <Link
          to="/pricing"
          className="bg-ink text-onink text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-royal transition"
        >
          Get the guide
        </Link>
      </nav>
    </header>
  );
}
