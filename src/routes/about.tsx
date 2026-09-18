import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/pages/AboutPage";
import { copy } from "@/lib/copy";

const t = copy.en.about;

export const Route = createFileRoute("/about")({
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
      { rel: "canonical", href: "/about" },
      { rel: "alternate", hrefLang: "sk", href: "/sk/about" },
      { rel: "alternate", hrefLang: "en", href: "/about" },
    ],
  }),
  component: () => <AboutPage lang="en" />,
});
