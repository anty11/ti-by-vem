import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/pages/AdminPage";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Access codes — travel intelligence by VeM" },
      { name: "description", content: "Internal page for generating customer access codes." },
      { property: "og:title", content: "Access codes — travel intelligence by VeM" },
      { property: "og:description", content: "Internal page for generating customer access codes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});
