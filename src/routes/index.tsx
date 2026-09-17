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
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-6 pt-10 lg:grid-cols-2">
        <div>
          <span className="glass-soft inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-royal">
            <span className="size-1.5 rounded-full bg-terracotta" /> Travel intelligence by VeM
          </span>
          <h1 className="mt-5 font-display text-5xl leading-[1.02] text-ink lg:text-6xl">
            Trips you <span className="italic text-royal">create</span>, not routes you simply <span className="italic text-terracotta">download</span>.
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-soft">
            Always-moving European routes we have travelled ourselves — with the real budget, exact connections and choices that make every euro count.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/itineraries" className="rounded-xl bg-terracotta px-6 py-3 font-semibold text-onink transition hover:bg-ink">Explore the map</Link>
            <Link to="/pricing" className="glass-soft rounded-xl px-6 py-3 font-semibold text-ink transition hover:bg-card">See the packages</Link>
            <Link to="/letters" className="rounded-xl border border-gold/60 bg-gold/20 px-6 py-3 font-semibold text-ink transition hover:bg-gold/40">Postcard club · €12/mo</Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-soft">
            <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-sage" /> Budget included</span>
            <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-royal" /> Exact travel details</span>
            <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-gold" /> Travelled by us</span>
          </div>
        </div>
        <EuropeMap />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-7 flex items-end justify-between">
          <div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-royal">On the map</p><h2 className="mt-2 font-display text-4xl text-ink">Travel intelligence in motion</h2></div>
          <Link to="/itineraries" className="hidden text-sm font-semibold text-ink transition hover:text-royal sm:inline">View all →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">{itineraries.slice(0, 3).map((item) => <ItineraryCard key={item.slug} itinerary={item} />)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="glass grid items-center gap-8 rounded-3xl p-8 lg:grid-cols-[1fr_auto] lg:p-12">
          <div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">Choose how we travel with you</p><h2 className="mt-2 max-w-2xl font-display text-4xl text-ink">Take the guide with chat. Or take the two of us with it.</h2><p className="mt-4 max-w-xl leading-relaxed text-soft">Two clear options, one place to compare them. The VeM WhatsApp group opens with Guide + Us.</p><p className="mt-3 text-sm text-soft">Rather just a hello in your letterbox? The <Link to="/letters" className="font-semibold text-royal underline decoration-gold decoration-2 underline-offset-4 transition hover:text-terracotta">postcard membership</Link> runs separately at €12/month.</p></div>
          <Link to="/pricing" className="rounded-xl bg-ink px-6 py-3 text-center font-semibold text-onink transition hover:bg-royal">Open packages →</Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="glass grid items-center gap-10 rounded-3xl p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lilac">A postcard, not a guide · €12/month</p>
            <h2 className="mt-2 font-display text-4xl leading-tight text-ink">A small hello from somewhere we remember.</h2>
            <p className="mt-4 leading-relaxed text-soft">One physical postcard from a place we have visited. No route, budget or advice — simply a personal note from V &amp; eM in your letterbox.</p>
            <Link to="/letters" className="mt-7 inline-block rounded-xl bg-ink px-6 py-3 font-semibold text-onink transition hover:bg-lilac">Discover the postcard</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-soft rotate-[-2deg] rounded-2xl p-5"><p className="text-[10px] uppercase tracking-[0.2em] text-soft">From Portugal</p><p className="mt-2 font-display text-xl text-ink">Wish you were here.</p><p className="mt-3 text-xs leading-relaxed text-soft">Sea air, blue tiles and a few lines written just for you.</p></div>
            <div className="glass-soft rotate-[2deg] rounded-2xl p-5"><p className="text-[10px] uppercase tracking-[0.2em] text-soft">From Iceland</p><p className="mt-2 font-display text-xl text-ink">Hello from the north.</p><p className="mt-3 text-xs leading-relaxed text-soft">A windy memory, a stamp and our handwriting.</p></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mx-auto mb-10 max-w-xl text-center"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage">The two behind it</p><h2 className="mt-2 font-display text-4xl text-ink">Real people, real miles</h2></div>
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <article className="glass flex items-center gap-5 rounded-3xl p-6"><img src={founderOne} alt="Veronika, co-founder of travel intelligence by VeM" className="size-24 shrink-0 rounded-2xl object-cover" /><div><h3 className="font-display text-xl text-ink">Veronika “V”</h3><p className="mt-1 text-xs uppercase tracking-[0.2em] text-soft">Routes &amp; details</p><p className="mt-2 text-sm leading-relaxed text-soft">The connections and practical choices that keep a trip moving.</p></div></article>
          <article className="glass flex items-center gap-5 rounded-3xl p-6"><img src={founderTwo} alt="Monika, co-founder of travel intelligence by VeM" className="size-24 shrink-0 rounded-2xl object-cover" /><div><h3 className="font-display text-xl text-ink">Monika “eM”</h3><p className="mt-1 text-xs uppercase tracking-[0.2em] text-soft">Stories &amp; perspective</p><p className="mt-2 text-sm leading-relaxed text-soft">The moments and observations that make a place stay with you.</p></div></article>
        </div>
      </section>
    </main>
  );
}
