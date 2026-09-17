import { accentBg, tiers } from "@/lib/content";

export function TierCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6 items-stretch">
      {tiers.map((tier) =>
        tier.featured ? (
          <div
            key={tier.name}
            className="rounded-3xl p-7 flex flex-col bg-ink text-onink relative overflow-hidden"
          >
            <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-[0.2em] bg-terracotta text-onink px-2.5 py-1 rounded-full">
              Most popular
            </span>
            <h3 className="font-display text-2xl">{tier.name}</h3>
            <p className="mt-1 text-sm text-onink/70">{tier.tagline}</p>
            <p className="mt-4 font-display text-4xl">
              {tier.price}
              <span className="text-base text-onink/60 font-body font-medium">{tier.unit}</span>
            </p>
            <ul className="mt-5 space-y-3 text-sm text-onink/80">
              {tier.features.map((f) => (
                <li key={f} className="flex gap-2.5">
                  <span className={`mt-1.5 size-1.5 rounded-full shrink-0 ${accentBg[tier.accent]}`} />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="mailto:hello@vagrantandveela.com"
              className="mt-6 text-center bg-terracotta text-onink font-semibold px-5 py-3 rounded-xl hover:bg-white hover:text-ink transition"
            >
              {tier.cta}
            </a>
          </div>
        ) : (
          <div key={tier.name} className="glass rounded-3xl p-7 flex flex-col">
            <h3 className="font-display text-2xl text-ink">{tier.name}</h3>
            <p className="mt-1 text-sm text-soft">{tier.tagline}</p>
            <p className="mt-4 font-display text-4xl text-ink">
              {tier.price}
              <span className="text-base text-soft font-body font-medium">{tier.unit}</span>
            </p>
            <ul className="mt-5 space-y-3 text-sm text-soft">
              {tier.features.map((f) => (
                <li key={f} className="flex gap-2.5">
                  <span className={`mt-1.5 size-1.5 rounded-full shrink-0 ${accentBg[tier.accent]}`} />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="mailto:hello@vagrantandveela.com"
              className="mt-6 text-center glass-soft text-ink font-semibold px-5 py-3 rounded-xl hover:bg-white transition"
            >
              {tier.cta}
            </a>
          </div>
        ),
      )}
    </div>
  );
}
