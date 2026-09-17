import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, MessageCircle, Sparkles, Users } from "lucide-react";
import { tiers } from "@/lib/content";
import { Button } from "@/components/ui/button";

const visuals = [
  { shell: "bg-sage/35", number: "text-ink/15", icon: Sparkles },
  { shell: "bg-royal text-onink", number: "text-onink/15", icon: MessageCircle },
  { shell: "bg-terracotta/25", number: "text-terracotta/25", icon: Users },
];

export function TierCards() {
  return (
    <div className="grid gap-5 lg:grid-cols-3 lg:items-stretch">
      {tiers.map((tier, index) => {
        const visual = visuals[index];
        if (!visual) return null;
        const Icon = visual.icon;
        const inverse = index === 1;
        return (
        <article key={tier.name} className={`relative flex min-h-[540px] flex-col overflow-hidden rounded-2xl p-7 lg:p-8 ${visual.shell} ${index === 1 ? "lg:-translate-y-5" : ""}`}>
          <span className={`pointer-events-none absolute -right-2 -top-10 font-display text-[9rem] leading-none ${visual.number}`}>0{index + 1}</span>
          <div className="relative flex items-center justify-between">
            <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${inverse ? "text-onink/70" : "text-soft"}`}>{tier.eyebrow}</span>
            <Icon className="size-5" aria-hidden="true" />
          </div>
          <div className="relative mt-16">
            {tier.featured && <span className="mb-4 inline-flex rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">Most alive</span>}
            <h2 className={`font-display text-4xl ${inverse ? "text-onink" : "text-ink"}`}>{tier.name}</h2>
            <p className={`mt-2 font-display text-2xl italic ${inverse ? "text-gold" : "text-royal"}`}>{tier.tagline}</p>
            <p className={`mt-4 text-sm leading-relaxed ${inverse ? "text-onink/75" : "text-soft"}`}>{tier.description}</p>
          </div>
          <p className={`relative mt-7 font-display text-4xl ${inverse ? "text-onink" : "text-ink"}`}>
            {tier.price} <span className={`font-body text-sm font-medium ${inverse ? "text-onink/65" : "text-soft"}`}>{tier.unit}</span>
          </p>
          <ul className={`relative mt-7 space-y-3 text-sm leading-relaxed ${inverse ? "text-onink/80" : "text-ink"}`}>
            {tier.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <Check className={`mt-0.5 size-4 shrink-0 ${inverse ? "text-gold" : "text-terracotta"}`} aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button asChild variant={inverse ? "secondary" : "default"} size="lg" className="relative mt-auto w-full">
            <Link to="/about">{tier.cta}<ArrowUpRight aria-hidden="true" /></Link>
          </Button>
        </article>
      )})}
    </div>
  );
}
