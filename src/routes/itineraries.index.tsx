import { createFileRoute } from "@tanstack/react-router";
import { EuropeMap } from "@/components/site/EuropeMap";
import { ItineraryCard } from "@/components/site/ItineraryCard";
import { itineraries } from "@/lib/content";

export const Route = createFileRoute("/itineraries/")({
  head: () => ({
    meta: [
      { title: "European itineraries — travel intelligence by VeM" },
      {
        name: "description",
        content:
          "Every route we've walked, with days, budget estimates and travel details. Pick a country on the map or browse the full list.",
      },
      { property: "og:title", content: "European itineraries — travel intelligence by VeM" },
      {
        property: "og:description",
        content: "European routes travelled by Veronika and Monika, with honest budgets and exact details.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/itineraries" },
    ],
    links: [{ rel: "canonical", href: "/itineraries" }],
  }),
  component: ItinerariesPage,
});

function ItinerariesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-royal">
            The map
          </span>
          <h1 className="mt-2 font-display text-5xl leading-[1.05] text-ink">
            Start with a country.
          </h1>
          <p className="mt-4 max-w-md text-soft text-lg leading-relaxed">
            Every pin is a route we've run ourselves. Click one to see the shape of the trip, what
            it costs, and where we'd spend the extra.
          </p>
        </div>
        <EuropeMap />
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-14">
        {itineraries.map((it) => (
          <ItineraryCard key={it.slug} itinerary={it} />
        ))}
      </div>
    </main>
  );
}
