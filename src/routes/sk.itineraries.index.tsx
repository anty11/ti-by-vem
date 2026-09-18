import { createFileRoute } from "@tanstack/react-router";
import { ItinerariesPage } from "@/components/pages/ItinerariesPage";
import { copy } from "@/lib/copy";

const t = copy.sk.itineraries;

export const Route = createFileRoute("/sk/itineraries/")({
  head: () => ({
    meta: [
      { title: t.title },
      { name: "description", content: t.description },
      { property: "og:title", content: t.title },
      { property: "og:description", content: t.ogDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/sk/itineraries" },
    ],
    links: [
      { rel: "canonical", href: "/sk/itineraries" },
      { rel: "alternate", hrefLang: "en", href: "/itineraries" },
      { rel: "alternate", hrefLang: "sk", href: "/sk/itineraries" },
    ],
  }),
  component: () => <ItinerariesPage lang="sk" />,
});
