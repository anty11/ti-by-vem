import { createFileRoute } from "@tanstack/react-router";
import founderOne from "@/assets/founder-one.jpg";
import founderTwo from "@/assets/founder-two.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "Veronika & Monika — travel intelligence by VeM" },
    { name: "description", content: "Meet Veronika ‘V’ and Monika ‘eM’, two friends turning their lived European journeys into practical travel intelligence." },
    { property: "og:title", content: "The two behind travel intelligence by VeM" },
    { property: "og:description", content: "Real journeys, honest decisions and the details we learned by travelling them ourselves." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage">The people behind VeM</p><h1 className="mt-3 font-display text-5xl leading-[1.04] text-ink">Veronika “V” &amp; Monika “eM”.</h1><p className="mt-6 text-lg leading-relaxed text-soft">We are two friends who travel by moving: another train, another town, another route that reveals more than a checklist ever could. We learned where a lower price changes nothing and where one thoughtful splurge changes the whole journey.</p><p className="mt-4 text-lg leading-relaxed text-soft">People kept asking for our plans, budgets and connections. So we began turning our experience into something useful: travel intelligence built from routes we have actually lived.</p></div>
      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        <article><img src={founderOne} alt="Veronika, V of travel intelligence by VeM" width={816} height={816} className="aspect-[4/3] w-full rounded-xl object-cover" /><p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-royal">V</p><h2 className="mt-1 font-display text-3xl text-ink">Veronika</h2><p className="mt-3 max-w-md text-sm leading-relaxed text-soft">Routes, timing and the practical details that keep an ambitious trip moving.</p></article>
        <article><img src={founderTwo} alt="Monika, eM of travel intelligence by VeM" width={816} height={816} className="aspect-[4/3] w-full rounded-xl object-cover" /><p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">eM</p><h2 className="mt-1 font-display text-3xl text-ink">Monika</h2><p className="mt-3 max-w-md text-sm leading-relaxed text-soft">Stories, perspective and the small observations that make a place stay with you.</p></article>
      </div>
      <div className="mt-14 border-t border-border pt-8"><h2 className="font-display text-2xl text-ink">Talk to us</h2><p className="mt-2 text-soft">Questions about a route, a package or the postcard? Write to <a href="mailto:hello@travelintelligence.com" className="font-semibold text-royal">hello@travelintelligence.com</a>.</p></div>
    </main>
  );
}
