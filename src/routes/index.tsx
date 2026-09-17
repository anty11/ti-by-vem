import { createFileRoute, Link } from "@tanstack/react-router";
import { EuropeMap } from "@/components/site/EuropeMap";
import { ItineraryCard } from "@/components/site/ItineraryCard";
import { itineraries } from "@/lib/content";
import founderOne from "@/assets/founder-one.jpg";
import founderTwo from "@/assets/founder-two.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "travel intelligence by VeM — Europe, already figured out" },
      { name: "description", content: "European routes personally travelled by Veronika and Monika, with realistic budgets, exact connections and decisions that make every euro count." },
      { property: "og:title", content: "travel intelligence by VeM" },
      { property: "og:description", content: "Not another list of sights. Travel intelligence from European routes we have lived ourselves." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-14 pt-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:pt-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-royal">travel intelligence by VeM</p>
          <h1 className="mt-5 max-w-xl font-display text-5xl leading-[1.02] text-ink lg:text-6xl">
            Europe, already <span className="italic text-terracotta">figured out.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-soft">
            Not another list of sights. We turn the routes we have travelled into clear decisions:
            where to move next, what it really costs, where to save, and what is worth the splurge.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/itineraries" className="rounded-lg bg-ink px-6 py-3 font-semibold text-onink transition hover:bg-royal">Explore the map</Link>
            <Link to="/pricing" className="rounded-lg border border-border bg-card px-6 py-3 font-semibold text-ink transition hover:border-royal">Choose a package</Link>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6">
            <div><dt className="font-display text-2xl text-ink">Real</dt><dd className="mt-1 text-xs text-soft">routes we travelled</dd></div>
            <div><dt className="font-display text-2xl text-ink">Exact</dt><dd className="mt-1 text-xs text-soft">transport details</dd></div>
            <div><dt className="font-display text-2xl text-ink">Honest</dt><dd className="mt-1 text-xs text-soft">budget estimates</dd></div>
          </dl>
        </div>
        <EuropeMap />
      </section>

      <section className="border-y border-border bg-card/60">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">What intelligence means</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink">The useful layer between inspiration and booking.</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {[
              ["Move smarter", "Connections, timing and route order tested in real life."],
              ["Spend deliberately", "Save where it adds nothing. Spend once where it changes the trip."],
              ["See more", "Active journeys built around discovery, not a static checklist."],
            ].map(([title, copy]) => (
              <div key={title} className="bg-background p-6"><h3 className="font-display text-xl text-ink">{title}</h3><p className="mt-3 text-sm leading-relaxed text-soft">{copy}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-royal">From our notebooks</p><h2 className="mt-2 font-display text-4xl text-ink">Travel intelligence in motion</h2></div>
          <Link to="/itineraries" className="hidden text-sm font-semibold text-ink sm:inline">View all →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">{itineraries.slice(0, 3).map((item) => <ItineraryCard key={item.slug} itinerary={item} />)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 border-y border-border py-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Pick how close we travel with you</p><h2 className="mt-3 max-w-2xl font-display text-4xl text-ink">A guide, a guide with chat, or direct communication with us.</h2><p className="mt-4 max-w-xl text-soft">The packages now have their own clear space, so you can compare only what changes.</p></div>
          <Link to="/pricing" className="rounded-lg bg-terracotta px-6 py-3 text-center font-semibold text-onink transition hover:bg-ink">Open packages →</Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 lg:grid-cols-2 lg:items-center">
        <div className="grid grid-cols-2 gap-4">
          <img src={founderOne} alt="Veronika, co-founder of travel intelligence by VeM" width={816} height={816} loading="lazy" className="aspect-[4/5] w-full rounded-xl object-cover" />
          <img src={founderTwo} alt="Monika, co-founder of travel intelligence by VeM" width={816} height={816} loading="lazy" className="mt-10 aspect-[4/5] w-full rounded-xl object-cover" />
        </div>
        <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage">V &amp; eM</p><h2 className="mt-3 font-display text-4xl text-ink">Two friends. Years of routes. The details we wish someone had told us.</h2><p className="mt-5 max-w-lg leading-relaxed text-soft">Veronika and Monika turn lived experience into practical travel intelligence — personal enough to trust and precise enough to book from.</p><Link to="/about" className="mt-6 inline-block text-sm font-semibold text-royal">Meet us →</Link></div>
      </section>

      <section className="border-t border-border bg-lilac/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 px-6 py-12 sm:flex-row sm:items-center">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-lilac">Monthly postcard · €12</p><h2 className="mt-2 font-display text-3xl text-ink">A country we know, delivered on paper.</h2><p className="mt-3 max-w-xl text-sm leading-relaxed text-soft">Not necessarily where we have just returned from — always somewhere we have already been and have a story worth sending.</p></div>
          <Link to="/letters" className="shrink-0 rounded-lg border border-ink px-6 py-3 text-center font-semibold text-ink transition hover:bg-ink hover:text-onink">Discover the postcard</Link>
        </div>
      </section>
    </main>
  );
}
