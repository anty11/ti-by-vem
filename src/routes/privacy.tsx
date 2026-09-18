import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/pages/LegalPage";
import { copy } from "@/lib/copy";

const t = copy.en.legal.privacy;

export const Route = createFileRoute("/privacy")({
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
      { rel: "canonical", href: "/privacy" },
      { rel: "alternate", hrefLang: "sk", href: "/sk/privacy" },
      { rel: "alternate", hrefLang: "en", href: "/privacy" },
    ],
  }),
  component: () => <LegalPage lang="en" kind="privacy" />,
});
