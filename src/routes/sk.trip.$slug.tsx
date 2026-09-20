import { createFileRoute, notFound } from "@tanstack/react-router";
import { itineraries } from "@/lib/content";
import { TripRoomPage } from "@/components/pages/TripRoomPage";

export const Route = createFileRoute("/sk/trip/$slug")({
  loader: ({ params }) => {
    const itinerary = itineraries.find((i) => i.slug === params.slug);
    if (!itinerary) throw notFound();
    return { itinerary };
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.itinerary.sk.title} — vaša cesta` : "Vaša cesta";
    const description = "Váš odomknutý itinerár a chatbot k ceste od travel intelligence by VeM.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "robots", content: "noindex" },
      ],
    };
  },
  component: TripRoom,
});

function TripRoom() {
  const { itinerary } = Route.useLoaderData();
  return <TripRoomPage itinerary={itinerary} lang="sk" />;
}
