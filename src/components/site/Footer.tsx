import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-12">
      <div className="glass rounded-3xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <span className="grid place-items-center size-9 rounded-xl bg-ink text-onink font-display text-lg">
            V
          </span>
          <span className="font-display text-lg text-ink">Vagrant &amp; Veela</span>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-soft">
          <Link to="/terms" className="hover:text-ink transition">
            Terms of trade
          </Link>
          <Link to="/privacy" className="hover:text-ink transition">
            Privacy
          </Link>
          <Link to="/delivery" className="hover:text-ink transition">
            Delivery
          </Link>
          <Link to="/about" className="hover:text-ink transition">
            Contact
          </Link>
        </div>
        <p className="text-xs text-soft">© 2026 · Travel intelligence, delivered.</p>
      </div>
    </footer>
  );
}
