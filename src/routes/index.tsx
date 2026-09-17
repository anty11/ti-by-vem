import { createFileRoute, Link } from "@tanstack/react-router";
import { EuropeMap } from "@/components/site/EuropeMap";
import { ItineraryCard } from "@/components/site/ItineraryCard";
import { TierCards } from "@/components/site/TierCards";
import { itineraries } from "@/lib/content";
import founderOne from "@/assets/founder-one.jpg";
import founderTwo from "@/assets/founder-two.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vagrant & Veela — Trips you build, not routes you download" },
      {
        name: "description",
        content:
          "Always-moving European itineraries from two travellers, each with a budget estimate and exact travel details. Explore the map and pick a country.",
      },
      { property: "og:title", content: "Vagrant & Veela — Travel intelligence for Europe" },
      {
        property: "og:description",
        content:
          "Always-moving European itineraries with honest budgets and exact details, written by two real travellers.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 glass-soft rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-royal">
            <span className="size-1.5 rounded-full bg-terracotta" /> Always on the move
          </span>
          <h1 className="mt-5 font-display text-5xl lg:text-6xl leading-[1.02] text-ink">
            Trips you <span className="italic text-royal">build</span>, not
            <br />
            routes you <span className="italic text-terracotta">download</span>.
          </h1>
          <p className="mt-5 max-w-md text-soft text-lg leading-relaxed">
            Live, always-moving itineraries by two travellers who've actually been there. Every plan
            ships with a budget estimate and the exact details — plus a place to treat yourself
            once.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/itineraries"
              className="bg-terracotta text-onink font-semibold px-6 py-3 rounded-xl hover:bg-ink transition"
            >
              Explore the map
            </Link>
            <Link
              to="/pricing"
              className="glass-soft text-ink font-semibold px-6 py-3 rounded-xl hover:bg-white transition"
            >
              See how it works
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-soft max-w-md">
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-sage" /> Budget estimate included
            </span>
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-royal" /> Real details, real routes
            </span>
            <span className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-gold" /> Made by two humans
            </span>
          </div>
        </div>

        <EuropeMap />
      </section>

      {/* Itineraries */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-end justify-between mb-7">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-royal">
              On the map
            </span>
            <h2 className="mt-2 font-display text-4xl text-ink">Itineraries in motion</h2>
          </div>
          <Link
            to="/itineraries"
            className="hidden sm:inline text-sm font-semibold text-ink hover:text-royal transition"
          >
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {itineraries.slice(0, 3).map((it) => (
            <ItineraryCard key={it.slug} itinerary={it} />
          ))}
        </div>
      </section>

      {/* Tiers */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">
            Three ways to travel
          </span>
          <h2 className="mt-2 font-display text-4xl text-ink">Choose your level</h2>
        </div>
        <TierCards />
      </section>

      {/* Letters */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="glass rounded-3xl p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-lilac">
              The Letter
            </span>
            <h2 className="mt-2 font-display text-4xl leading-tight text-ink">
              Good old letters, but they teach you to travel.
            </h2>
            <p className="mt-4 text-soft leading-relaxed">
              Each month we send a card and a letter from one country we've just come back from.
              Where we saved, where we splurged, the route we'd actually run. It's our travel
              intelligence, handed to you on paper.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="glass-soft rounded-full px-4 py-2 text-ink font-medium">
                Physical card
              </span>
              <span className="glass-soft rounded-full px-4 py-2 text-ink font-medium">
                Story letter
              </span>
              <span className="glass-soft rounded-full px-4 py-2 text-ink font-medium">
                Full route + budget
              </span>
            </div>
            <Link
              to="/letters"
              className="mt-7 inline-block bg-ink text-onink font-semibold px-6 py-3 rounded-xl hover:bg-lilac transition"
            >
              Read about the membership
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-soft rounded-2xl p-5 rotate-[-2deg]">
              <p className="text-[10px] uppercase tracking-[0.2em] text-soft">May letter</p>
              <p className="mt-1 font-display text-lg text-ink">Portugal</p>
              <p className="mt-1 text-xs text-soft">Coastal trains, cheap eats, one wild dinner.</p>
            </div>
            <div className="glass-soft rounded-2xl p-5 rotate-[2deg]">
              <p className="text-[10px] uppercase tracking-[0.2em] text-soft">June letter</p>
              <p className="mt-1 font-display text-lg text-ink">Iceland</p>
              <p className="mt-1 text-xs text-soft">The ring road, and how to split the cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage">
            The two behind it
          </span>
          <h2 className="mt-2 font-display text-4xl text-ink">Real people, real miles</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="glass rounded-3xl p-6 flex items-center gap-5">
            <img
              src={founderOne}
              alt="Vera, who plans the routes and the budgets"
              width={816}
              height={816}
              loading="lazy"
              className="size-24 rounded-2xl object-cover shrink-0"
            />
            <div>
              <p className="font-display text-xl text-ink">Vera</p>
              <p className="text-xs uppercase tracking-[0.2em] text-soft">Routes &amp; budget</p>
              <p className="mt-2 text-sm text-soft leading-relaxed">
                The one who knows which train to catch and how to sleep in seat 4A.
              </p>
            </div>
          </div>
          <div className="glass rounded-3xl p-6 flex items-center gap-5">
            <img
              src={founderTwo}
              alt="Veela, who writes the monthly letters"
              width={816}
              height={816}
              loading="lazy"
              className="size-24 rounded-2xl object-cover shrink-0"
            />
            <div>
              <p className="font-display text-xl text-ink">Veela</p>
              <p className="text-xs uppercase tracking-[0.2em] text-soft">Stories &amp; letters</p>
              <p className="mt-2 text-sm text-soft leading-relaxed">
                Writes the letters, remembers the splurge, and always packs one too many snacks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
