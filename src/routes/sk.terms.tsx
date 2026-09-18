import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/pages/LegalPage";
import { copy } from "@/lib/copy";

const t = copy.sk.legal.terms;

export const Route = createFileRoute("/sk/terms")({
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
      { rel: "canonical", href: "/sk/terms" },
      { rel: "alternate", hrefLang: "en", href: "/terms" },
      { rel: "alternate", hrefLang: "sk", href: "/sk/terms" },
    ],
  }),
  component: () => <LegalPage lang="sk" kind="terms" />,
});
