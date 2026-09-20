import { createFileRoute, notFound } from "@tanstack/react-router";
import { itineraries } from "@/lib/content";
import { TripRoomPage } from "@/components/pages/TripRoomPage";

export const Route = createFileRoute("/trip/$slug")({
  loader: ({ params }) => {
    const itinerary = itineraries.find((i) => i.slug === params.slug);
    if (!itinerary) throw notFound();
    return { itinerary };
  },
  head: ({ loaderData }) => {
    const title = loaderData
      ? `${loaderData.itinerary.title} — your trip room`
      : "Your trip room";
    const description = "Your unlocked itinerary and trip chatbot from travel intelligence by VeM.";
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
  return <TripRoomPage itinerary={itinerary} lang="en" />;
}
