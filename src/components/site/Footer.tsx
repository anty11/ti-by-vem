import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex flex-col justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
        <div>
          <p className="font-display text-lg text-ink">travel intelligence <span className="italic text-royal">by VeM</span></p>
          <p className="mt-1 text-xs text-soft">Routes lived by Veronika &amp; Monika.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-soft">
          <Link to="/terms" className="transition hover:text-ink">Terms</Link>
          <Link to="/privacy" className="transition hover:text-ink">Privacy</Link>
          <Link to="/delivery" className="transition hover:text-ink">Delivery</Link>
          <Link to="/about" className="transition hover:text-ink">Contact</Link>
        </div>
        <p className="text-xs text-soft">© 2026 travel intelligence by VeM</p>
      </div>
    </footer>
  );
}
