import { createFileRoute, notFound } from "@tanstack/react-router";
import { itineraries } from "@/lib/content";
import { ItineraryDetailPage } from "@/components/pages/ItineraryDetailPage";
import { copy } from "@/lib/copy";

export const Route = createFileRoute("/sk/itineraries/$slug")({
  loader: ({ params }) => {
    const itinerary = itineraries.find((i) => i.slug === params.slug);
    if (!itinerary) throw notFound();
    return { itinerary };
  },
  head: ({ params, loaderData }) => {
    const t = copy.sk.detail;
    if (!loaderData) {
      return { meta: [{ title: t.unavailable }, { name: "robots", content: "noindex" }] };
    }
    const { itinerary } = loaderData;
    const title = `${itinerary.sk.title} — ${t.titleSuffix} ${itinerary.sk.country}`;
    return {
      meta: [
        { title },
        { name: "description", content: itinerary.sk.blurb },
        { property: "og:title", content: title },
        { property: "og:description", content: itinerary.sk.blurb },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:url", content: `/sk/itineraries/${params.slug}` },
      ],
      links: [
        { rel: "canonical", href: `/sk/itineraries/${params.slug}` },
        { rel: "alternate", hrefLang: "en", href: `/itineraries/${params.slug}` },
        { rel: "alternate", hrefLang: "sk", href: `/sk/itineraries/${params.slug}` },
      ],
    };
  },
  component: SkItineraryDetail,
});

function SkItineraryDetail() {
  const { itinerary } = Route.useLoaderData();
  return <ItineraryDetailPage itinerary={itinerary} lang="sk" />;
}
