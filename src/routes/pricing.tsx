import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, Bot, Compass, MessageCircle, MoveRight } from "lucide-react";
import { TierCards } from "@/components/site/TierCards";
import { Button } from "@/components/ui/button";
import founderOne from "@/assets/founder-one.jpg";
import founderTwo from "@/assets/founder-two.jpg";

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
    <main className="overflow-hidden">
      <section className="relative mx-auto grid min-h-[610px] max-w-7xl items-center gap-12 px-6 py-14 lg:grid-cols-[1.1fr_.9fr]">
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">Choose your way in</p>
          <h1 className="mt-4 max-w-3xl font-display text-6xl leading-[.95] text-ink lg:text-7xl">The route is ready. <span className="italic text-royal">How far</span> do you want to make it yours?</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-soft">No generic PDF and no endless planning spiral. Begin with a journey we have actually lived, then choose how much freedom and human help you want around it.</p>
          <Button asChild size="lg" className="mt-8"><a href="#packages">Find my package <ArrowDown aria-hidden="true" /></a></Button>
        </div>
        <div className="relative mx-auto h-[380px] w-full max-w-md" aria-label="Notes from Veronika and Monika">
          <div className="absolute left-2 top-7 w-64 -rotate-6 rounded-lg bg-gold p-6 shadow-xl">
            <Compass className="size-7 text-ink" aria-hidden="true" />
            <p className="mt-12 font-display text-3xl leading-tight text-ink">Save on the train.<br/>Splurge on the view.</p>
            <p className="mt-5 text-sm text-ink/70">— one of our favourite rules</p>
          </div>
          <div className="absolute bottom-4 right-0 w-64 rotate-3 rounded-lg bg-terracotta p-6 text-onink shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-onink/70">Field note 27</p>
            <p className="mt-10 font-display text-3xl leading-tight">The best route is rarely a straight line.</p>
          </div>
          <div className="absolute right-2 top-1 flex -space-x-3">
            <img src={founderOne} alt="Veronika" className="size-14 rounded-full border-4 border-paper object-cover" />
            <img src={founderTwo} alt="Monika" className="size-14 rounded-full border-4 border-paper object-cover" />
          </div>
        </div>
      </section>

      <section id="packages" className="scroll-mt-20 bg-card py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
            <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-royal">One route. Two experiences.</p><h2 className="mt-3 font-display text-5xl leading-none text-ink">Pick the distance between us.</h2></div>
            <p className="max-w-lg text-base leading-relaxed text-soft lg:justify-self-end">Both options begin with tested travel intelligence and a chatbot that reshapes the trip: where to move, what it really costs and which detail saves the day.</p>
          </div>
          <TierCards />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">What changes between them</p><h2 className="mt-3 font-display text-4xl text-ink">From our notebook to your own trip.</h2></div>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="border-t-4 border-sage py-6"><Compass className="size-7 text-sage"/><p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-soft">In both packages</p><h3 className="mt-2 font-display text-2xl text-ink">The intelligence</h3><p className="mt-3 text-sm leading-relaxed text-soft">A moving day-by-day route, exact transport logic, realistic costs and the places worth spending more on.</p></article>
          <article className="border-t-4 border-royal py-6"><Bot className="size-7 text-royal"/><p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-soft">In both packages</p><h3 className="mt-2 font-display text-2xl text-ink">The conversation</h3><p className="mt-3 text-sm leading-relaxed text-soft">A trip chatbot that answers questions and reshapes the route around your dates and rhythm.</p></article>
          <article className="border-t-4 border-terracotta py-6"><MessageCircle className="size-7 text-terracotta"/><p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-soft">Only in Guide + Us</p><h3 className="mt-2 font-display text-2xl text-ink">The two of us</h3><p className="mt-3 text-sm leading-relaxed text-soft">Direct communication with Veronika and Monika, plus the travel intelligence by VeM WhatsApp group.</p></article>
        </div>
      </section>

      <section className="bg-lilac/15 py-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 md:flex-row md:items-center">
          <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-lilac">Not ready to choose?</p><h2 className="mt-2 font-display text-4xl text-ink">Start with a place that pulls you in.</h2><p className="mt-3 text-soft">Explore the routes first. The right level of support usually becomes obvious once you see where you are going.</p></div>
          <Button asChild variant="outline" size="lg"><Link to="/itineraries">Explore itineraries <MoveRight aria-hidden="true" /></Link></Button>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-10"><p className="text-center text-sm text-soft">Looking for the €12 monthly postcard? It is a personal hello, completely separate from our guides. <Link to="/letters" className="font-semibold text-ink underline decoration-terracotta underline-offset-4">See the postcard</Link></p></div>
    </main>
  );
}
