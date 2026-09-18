import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages/HomePage";
import { copy } from "@/lib/copy";

const t = copy.en.home;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: t.title },
      { name: "description", content: t.description },
      { property: "og:title", content: t.ogTitle },
      { property: "og:description", content: t.ogDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "alternate", hrefLang: "sk", href: "/sk" },
      { rel: "alternate", hrefLang: "en", href: "/" },
    ],
  }),
  component: () => <HomePage lang="en" />,
});
