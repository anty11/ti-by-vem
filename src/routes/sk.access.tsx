import { createFileRoute } from "@tanstack/react-router";
import { AccessPage } from "@/components/pages/AccessPage";
import { accessCopy } from "@/lib/access-copy";

export const Route = createFileRoute("/sk/access")({
  head: () => {
    const t = accessCopy.sk;
    return {
      meta: [
        { title: t.title },
        { name: "description", content: t.description },
        { property: "og:title", content: t.title },
        { property: "og:description", content: t.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "robots", content: "noindex" },
      ],
      links: [
        { rel: "canonical", href: "/sk/access" },
        { rel: "alternate", hrefLang: "sk", href: "/sk/access" },
        { rel: "alternate", hrefLang: "en", href: "/access" },
      ],
    };
  },
  component: () => <AccessPage lang="sk" />,
});
