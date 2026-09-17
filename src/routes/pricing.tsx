import { createFileRoute } from "@tanstack/react-router";
import { TierCards } from "@/components/site/TierCards";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Guide, Companion and Letter | Vagrant & Veela" },
      {
        name: "description",
        content:
          "Three levels: the guide with budget and details, the companion with trip chat, and the monthly letter membership.",
      },
      { property: "og:title", content: "Pricing — Vagrant & Veela" },
      {
        property: "og:description",
        content: "The guide, the companion with trip chat, and the monthly letter membership.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
          Three ways to travel
        </span>
        <h1 className="mt-2 font-display text-5xl leading-[1.05] text-ink">Choose your level</h1>
        <p className="mt-4 text-soft text-lg leading-relaxed">
          Every level starts from the same place: a real route, a real budget, and the details you
          actually need on the day.
        </p>
      </div>
      <TierCards />

      <div className="glass rounded-3xl p-8 lg:p-12 mt-14 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-display text-xl text-ink">What's always included</h2>
          <p className="mt-2 text-sm text-soft leading-relaxed">
            A day-by-day plan built around movement, a budget estimate per person, and the exact
            transport, timing and booking details.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">How the trip chat works</h2>
          <p className="mt-2 text-sm text-soft leading-relaxed">
            With the Companion you can talk through the plan, swap a city, add a day or shift the
            budget — and get the updated route back.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">Refunds</h2>
          <p className="mt-2 text-sm text-soft leading-relaxed">
            Digital guides are delivered instantly, so they're non-refundable once opened. The
            membership can be cancelled any month.
          </p>
        </div>
      </div>
    </main>
  );
}
