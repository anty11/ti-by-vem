import { createFileRoute } from "@tanstack/react-router";
import { LettersPage } from "@/components/pages/LettersPage";
import { copy } from "@/lib/copy";

const t = copy.en.letters;

export const Route = createFileRoute("/letters")({
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
      { rel: "canonical", href: "/letters" },
      { rel: "alternate", hrefLang: "sk", href: "/sk/letters" },
      { rel: "alternate", hrefLang: "en", href: "/letters" },
    ],
  }),
  component: () => <LettersPage lang="en" />,
});
