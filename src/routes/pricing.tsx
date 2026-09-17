import { createFileRoute, Link } from "@tanstack/react-router";
import { TierCards } from "@/components/site/TierCards";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [
    { title: "Travel guide packages — travel intelligence by VeM" },
    { name: "description", content: "Compare three travel guide packages: guide, guide with chatbot, or direct communication with Veronika and Monika." },
    { property: "og:title", content: "Travel guide packages — travel intelligence by VeM" },
    { property: "og:description", content: "Choose how much support you want around your European route." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: PricingPage,
});

function PricingPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-12 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">Guide packages</p>
        <h1 className="mt-3 font-display text-5xl leading-[1.04] text-ink">Choose how close we travel with you.</h1>
        <p className="mt-5 text-lg leading-relaxed text-soft">Every package starts with the same travel intelligence: a route we know, an honest budget and exact details. What changes is how personally we help you adapt it.</p>
      </div>
      <TierCards />
      <div className="mt-12 grid gap-8 border-t border-border pt-10 md:grid-cols-3">
        <div><h2 className="font-display text-xl text-ink">Always included</h2><p className="mt-2 text-sm leading-relaxed text-soft">Day-by-day movement, transport logic, realistic costs, plus access to the “travel intelligence by VeM” WhatsApp group.</p></div>
        <div><h2 className="font-display text-xl text-ink">Chatbot support</h2><p className="mt-2 text-sm leading-relaxed text-soft">Ask questions, change the pace or budget, and reshape the route around your trip.</p></div>
        <div><h2 className="font-display text-xl text-ink">Communication with us</h2><p className="mt-2 text-sm leading-relaxed text-soft">In the third package, Veronika and Monika help you make the decisions that need human experience.</p></div>
      </div>
       <div className="mt-12 flex flex-col justify-between gap-5 rounded-xl bg-ink p-7 text-onink sm:flex-row sm:items-center"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Separate from our guides</p><h2 className="mt-2 font-display text-2xl">Monthly postcard · €12/month</h2><p className="mt-2 text-sm text-onink/70">One physical, personal hello from a place we have visited — no itinerary or travel advice.</p></div><Link to="/letters" className="rounded-lg bg-onink px-5 py-3 text-center text-sm font-semibold text-ink">See the postcard</Link></div>
    </main>
  );
}
