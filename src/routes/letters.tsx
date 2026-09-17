import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/letters")({
  head: () => ({ meta: [
    { title: "Monthly travel postcard — travel intelligence by VeM" },
    { name: "description", content: "For €12 a month, receive a physical postcard and story from a country Veronika and Monika have travelled before." },
    { property: "og:title", content: "Monthly travel postcard · €12" },
    { property: "og:description", content: "A country we know, a story worth sending, and useful travel intelligence on paper." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: LettersPage,
});

const archive = [
  { month: "May", country: "Portugal", note: "Coastal trains, small decisions and one table worth booking." },
  { month: "June", country: "Iceland", note: "The ring road and the arithmetic that makes it possible." },
  { month: "July", country: "Slovenia", note: "From the Alps to the sea without wasting a day." },
  { month: "August", country: "Greece", note: "The ferry connections we would choose again." },
];

function LettersPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-lilac">Monthly postcard · €12/month</p><h1 className="mt-3 max-w-2xl font-display text-5xl leading-[1.04] text-ink">Travel intelligence you can hold.</h1><p className="mt-5 max-w-xl text-lg leading-relaxed text-soft">Each month we choose a country we have already travelled — not necessarily the one we just returned from. You receive its story, the choices that shaped our route and the details we still remember.</p><a href="mailto:hello@vagrantandveela.com" className="mt-8 inline-block rounded-lg bg-ink px-6 py-3 font-semibold text-onink transition hover:bg-lilac">Subscribe · €12/month</a></div>
        <div className="relative mx-auto h-80 w-full max-w-md"><div className="absolute left-4 top-6 h-56 w-72 rotate-[-5deg] rounded-lg border border-border bg-gold/30 p-6 shadow-sm"><p className="text-xs uppercase tracking-[0.2em] text-soft">From our archive</p><p className="mt-16 font-display text-3xl text-ink">Portugal</p><p className="mt-2 text-sm text-soft">The train that changed the route.</p></div><div className="absolute bottom-4 right-3 h-56 w-72 rotate-[4deg] rounded-lg border border-border bg-card p-6 shadow-md"><p className="font-display text-xl italic text-ink">Dear traveller,</p><p className="mt-5 text-sm leading-relaxed text-soft">This is the part of the journey that never fits into a top-ten list...</p><p className="mt-6 font-display italic text-royal">V &amp; eM</p></div></div>
      </section>
      <section className="border-y border-border bg-card/60"><div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-3"><div><h2 className="font-display text-xl text-ink">In the envelope</h2><p className="mt-2 text-sm leading-relaxed text-soft">A collectible postcard and a personal letter with a route story and useful notes.</p></div><div><h2 className="font-display text-xl text-ink">From lived journeys</h2><p className="mt-2 text-sm leading-relaxed text-soft">Every country is one we have visited. The timing of the letter does not depend on our latest trip.</p></div><div><h2 className="font-display text-xl text-ink">Simple membership</h2><p className="mt-2 text-sm leading-relaxed text-soft">€12 per month, posted monthly. Cancel whenever you like.</p></div></div></section>
      <section className="mx-auto max-w-7xl px-6 py-14"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-royal">Countries in our archive</p><div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{archive.map((item) => <article key={item.month} className="border-t-2 border-royal bg-card p-5"><p className="text-xs uppercase tracking-[0.2em] text-soft">{item.month}</p><h2 className="mt-2 font-display text-xl text-ink">{item.country}</h2><p className="mt-3 text-sm leading-relaxed text-soft">{item.note}</p></article>)}</div></section>
    </main>
  );
}
