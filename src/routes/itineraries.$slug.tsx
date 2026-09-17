import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { itineraries } from "@/lib/content";
import { TierCards } from "@/components/site/TierCards";

export const Route = createFileRoute("/itineraries/$slug")({
  loader: ({ params }) => {
    const itinerary = itineraries.find((i) => i.slug === params.slug);
    if (!itinerary) throw notFound();
    return { itinerary };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    const { itinerary } = loaderData;
    const title = `${itinerary.title} — ${itinerary.country} itinerary`;
    return {
      meta: [
        { title },
        { name: "description", content: itinerary.blurb },
        { property: "og:title", content: title },
        { property: "og:description", content: itinerary.blurb },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:url", content: `/itineraries/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/itineraries/${params.slug}` }],
    };
  },
  component: ItineraryDetail,
});

function ItineraryDetail() {
  const { itinerary } = Route.useLoaderData();

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <Link to="/itineraries" className="text-sm font-semibold text-soft hover:text-ink transition">
        ← All itineraries
      </Link>
      <div className="glass rounded-3xl p-8 lg:p-12 mt-5">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-royal">
          {itinerary.country}
        </span>
        <h1 className="mt-2 font-display text-5xl leading-[1.05] text-ink">{itinerary.title}</h1>
        <p className="mt-4 max-w-xl text-soft text-lg leading-relaxed">{itinerary.blurb}</p>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <div className="glass-soft rounded-2xl p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-soft">On the move</p>
            <p className="mt-1 font-display text-2xl text-ink">{itinerary.days} days</p>
          </div>
          <div className="glass-soft rounded-2xl p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-soft">Ground covered</p>
            <p className="mt-1 font-display text-2xl text-ink">{itinerary.stops}</p>
          </div>
          <div className="glass-soft rounded-2xl p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-soft">Budget estimate</p>
            <p className="mt-1 font-display text-2xl text-ink">{itinerary.budget}</p>
          </div>
        </div>

        <h2 className="mt-10 font-display text-2xl text-ink">What the trip looks like</h2>
        <ul className="mt-4 space-y-3 text-soft">
          {itinerary.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span className="mt-2 size-1.5 rounded-full bg-terracotta shrink-0" />
              {h}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-soft italic">
          The full guide adds the day-by-day plan, every connection and booking detail, and the
          budget broken down line by line. Every guide also includes access to the “travel
          intelligence by VeM” WhatsApp group.
        </p>
      </div>

      <div className="mt-14">
        <h2 className="font-display text-3xl text-ink text-center mb-8">Get this route</h2>
        <TierCards />
      </div>
    </main>
  );
}
