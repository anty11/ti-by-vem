import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/pages/LegalPage";
import { copy } from "@/lib/copy";

const t = copy.sk.legal.delivery;

export const Route = createFileRoute("/sk/delivery")({
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
      { rel: "canonical", href: "/sk/delivery" },
      { rel: "alternate", hrefLang: "en", href: "/delivery" },
      { rel: "alternate", hrefLang: "sk", href: "/sk/delivery" },
    ],
  }),
  component: () => <LegalPage lang="sk" kind="delivery" />,
});
