import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [
    { title: "Terms — travel intelligence by VeM" },
    { name: "description", content: "Terms for digital travel guides, support packages and the monthly postcard membership." },
    { property: "og:title", content: "Terms — travel intelligence by VeM" },
    { property: "og:description", content: "Terms for guides, support packages and postcard membership." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: TermsPage,
});
function TermsPage(){return <main className="mx-auto max-w-3xl px-6 py-14"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal">Legal</p><h1 className="mt-3 font-display text-5xl text-ink">Terms</h1><div className="legal-copy mt-10 space-y-8 text-soft"><section><h2>Digital guides</h2><p>Guides provide planning information based on our personal experience. Prices, timetables, availability and local conditions can change, so confirm important details with the relevant provider before travelling.</p></section><section><h2>Chat and communication</h2><p>Both packages include the trip chatbot; Guide + Us buyers may also join the “travel intelligence by VeM” WhatsApp group. Chatbot suggestions, group discussions and direct communication help adapt your plan but do not replace official travel, safety, visa, health or financial advice.</p></section><section><h2>Personal use</h2><p>Purchased materials are for the buyer’s personal use and may not be copied, resold or distributed.</p></section><section><h2>Cancellations</h2><p>Digital products may lose the right of withdrawal once delivery begins with your consent. The monthly postcard may be cancelled before the next billing date.</p></section></div></main>}
