import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/letters")({
  head: () => ({ meta: [
    { title: "Monthly travel postcard — travel intelligence by VeM" },
    { name: "description", content: "For €12 a month, receive a physical personal greeting from a place Veronika and Monika have visited." },
    { property: "og:title", content: "Monthly travel postcard · €12" },
    { property: "og:description", content: "A small personal hello from somewhere Veronika and Monika have been." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: LettersPage,
});

const archive = [
  { month: "May", country: "Portugal", note: "A tiled doorway, sea air and a hello from Lisbon." },
  { month: "June", country: "Iceland", note: "Wind in our hair and a few handwritten lines from the north." },
  { month: "July", country: "Slovenia", note: "A green summer memory, sent with love." },
  { month: "August", country: "Greece", note: "Sun on the paper and greetings from an island." },
];

function LettersPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-lilac">Monthly postcard · €12/month</p><h1 className="mt-3 max-w-2xl font-display text-5xl leading-[1.04] text-ink">A little hello, through your letterbox.</h1><p className="mt-5 max-w-xl text-lg leading-relaxed text-soft">Each month we pick a place we have been and send you one physical postcard. A personal greeting, chosen from our memories — not necessarily from our latest trip.</p><p className="mt-4 font-semibold text-terracotta">No guide. No itinerary. No travel tips. Just a postcard from us to you.</p><a href="mailto:hello@travelintelligence.com" className="mt-8 inline-block rounded-lg bg-ink px-6 py-3 font-semibold text-onink transition hover:bg-lilac">Subscribe · €12/month</a></div>
        <div className="relative mx-auto h-80 w-full max-w-md"><div className="absolute left-4 top-6 h-56 w-72 rotate-[-5deg] rounded-lg border border-border bg-gold/40 p-6 shadow-sm"><p className="text-xs uppercase tracking-[0.2em] text-soft">Postmarked somewhere</p><p className="mt-16 font-display text-3xl text-ink">Hello from Portugal</p><p className="mt-2 text-sm text-soft">Wish you were here.</p></div><div className="absolute bottom-4 right-3 h-56 w-72 rotate-[4deg] rounded-lg border border-border bg-card p-6 shadow-md"><p className="font-display text-xl italic text-ink">Dear traveller,</p><p className="mt-5 text-sm leading-relaxed text-soft">We saw this place and thought it deserved more than a camera roll...</p><p className="mt-6 font-display italic text-royal">V &amp; eM</p></div></div>
      </section>
      <section className="border-y border-border bg-lilac/15"><div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-3"><div><h2 className="font-display text-xl text-ink">One real postcard</h2><p className="mt-2 text-sm leading-relaxed text-soft">A physical card selected and sent by us, with a short personal greeting.</p></div><div><h2 className="font-display text-xl text-ink">From somewhere we know</h2><p className="mt-2 text-sm leading-relaxed text-soft">Every place is one we have visited. It does not have to be where we are travelling right now.</p></div><div><h2 className="font-display text-xl text-ink">Nothing to study</h2><p className="mt-2 text-sm leading-relaxed text-soft">This is not a mini guide or travel advice. It is simply a warm surprise in the post.</p></div></div></section>
      <section className="mx-auto max-w-7xl px-6 py-14"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-royal">Countries in our archive</p><div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{archive.map((item) => <article key={item.month} className="border-t-2 border-royal bg-card p-5"><p className="text-xs uppercase tracking-[0.2em] text-soft">{item.month}</p><h2 className="mt-2 font-display text-xl text-ink">{item.country}</h2><p className="mt-3 text-sm leading-relaxed text-soft">{item.note}</p></article>)}</div></section>
    </main>
  );
}
