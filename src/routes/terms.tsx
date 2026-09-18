import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/pages/LegalPage";
import { copy } from "@/lib/copy";

const t = copy.en.legal.terms;

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: t.title },
      { name: "description", content: t.description },
      { property: "og:title", content: t.title },
      { property: "og:description", content: t.ogDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/terms" },
      { rel: "alternate", hrefLang: "sk", href: "/sk/terms" },
      { rel: "alternate", hrefLang: "en", href: "/terms" },
    ],
  }),
  component: () => <LegalPage lang="en" kind="terms" />,
});
