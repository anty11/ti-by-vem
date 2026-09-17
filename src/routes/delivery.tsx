import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/delivery")({
  head: () => ({ meta: [
    { title: "Delivery — travel intelligence by VeM" },
    { name: "description", content: "Delivery information for digital travel guides and the monthly physical postcard." },
    { property: "og:title", content: "Delivery — travel intelligence by VeM" },
    { property: "og:description", content: "How digital guides and physical monthly postcards are delivered." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: DeliveryPage,
});
function DeliveryPage(){return <main className="mx-auto max-w-3xl px-6 py-14"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Legal</p><h1 className="mt-3 font-display text-5xl text-ink">Delivery</h1><div className="legal-copy mt-10 space-y-8 text-soft"><section><h2>Digital guides</h2><p>Your guide is delivered electronically to the email address used for purchase. Access details appear after payment or arrive by email.</p></section><section><h2>Chat and direct communication</h2><p>Instructions for chatbot access or communication with Veronika and Monika are sent with the relevant package.</p></section><section><h2>Monthly postcard</h2><p>The €12 membership includes one physical postcard with a personal greeting, posted each month to the delivery address supplied by you. It is separate from our guides and contains no itinerary or travel advice. Arrival times depend on the destination and postal service.</p></section><section><h2>Address changes</h2><p>Send address changes before the next monthly dispatch. We cannot redirect an item that has already been posted.</p></section></div></main>}
