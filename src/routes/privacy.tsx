import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [
    { title: "Privacy — travel intelligence by VeM" },
    { name: "description", content: "How travel intelligence by VeM handles customer and membership information." },
    { property: "og:title", content: "Privacy — travel intelligence by VeM" },
    { property: "og:description", content: "How customer and membership information is handled." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: PrivacyPage,
});
function PrivacyPage(){return <main className="mx-auto max-w-3xl px-6 py-14"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal">Legal</p><h1 className="mt-3 font-display text-5xl text-ink">Privacy</h1><div className="legal-copy mt-10 space-y-8 text-soft"><section><h2>Information we use</h2><p>We use the contact, order and delivery details needed to provide your chosen guide, support or physical postcard.</p></section><section><h2>Why we use it</h2><p>Your information is used to fulfil purchases, communicate about your trip or membership, and meet legal accounting obligations.</p></section><section><h2>Sharing and retention</h2><p>Information is shared only with services needed for payment, digital delivery and post. We keep it only as long as necessary for those purposes and applicable law.</p></section><section><h2>Your choices</h2><p>You may request access, correction or deletion of eligible personal information by contacting us.</p></section></div></main>}
