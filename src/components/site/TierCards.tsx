import { Link } from "@tanstack/react-router";
import { accentBg, tiers } from "@/lib/content";

export function TierCards() {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-3">
      {tiers.map((tier, index) => (
        <article key={tier.name} className="flex min-h-[380px] flex-col bg-card p-7 lg:p-8">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-soft">0{index + 1}</span>
            {tier.featured && <span className="text-xs font-semibold text-terracotta">Most flexible</span>}
          </div>
          <h2 className="mt-7 font-display text-3xl text-ink">{tier.name}</h2>
          <p className="mt-2 min-h-10 text-sm leading-relaxed text-soft">{tier.tagline}</p>
          <p className="mt-6 font-display text-3xl text-ink">
            {tier.price} <span className="font-body text-sm font-medium text-soft">{tier.unit}</span>
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-soft">
            {tier.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span className={`mt-2 size-1.5 shrink-0 rounded-full ${accentBg[tier.accent]}`} />
                {feature}
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className={tier.featured ? "mt-auto rounded-lg bg-ink px-5 py-3 text-center text-sm font-semibold text-onink transition hover:bg-royal" : "mt-auto rounded-lg border border-border px-5 py-3 text-center text-sm font-semibold text-ink transition hover:border-royal"}
          >
            {tier.cta}
          </Link>
        </article>
      ))}
    </div>
  );
}
