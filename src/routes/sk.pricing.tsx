import { createFileRoute } from "@tanstack/react-router";
import { PricingPage } from "@/components/pages/PricingPage";
import { copy } from "@/lib/copy";

const t = copy.sk.pricing;

export const Route = createFileRoute("/sk/pricing")({
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
      { rel: "canonical", href: "/sk/pricing" },
      { rel: "alternate", hrefLang: "en", href: "/pricing" },
      { rel: "alternate", hrefLang: "sk", href: "/sk/pricing" },
    ],
  }),
  component: () => <PricingPage lang="sk" />,
});
