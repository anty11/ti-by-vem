import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/letters")({
  head: () => ({
    meta: [
      { title: "The Letter — a monthly card from one country | Vagrant & Veela" },
      {
        name: "description",
        content:
          "A physical card and letter every month: one country's story, the route we ran and what it really cost.",
      },
      { property: "og:title", content: "The Letter — monthly membership" },
      {
        property: "og:description",
        content: "One country a month, on paper: the story, the route and the honest budget.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/letters" },
    ],
    links: [{ rel: "canonical", href: "/letters" }],
  }),
  component: LettersPage,
});

const upcoming = [
  { month: "May", country: "Portugal", note: "Coastal trains, cheap eats, one wild dinner." },
  { month: "June", country: "Iceland", note: "The ring road, and how to split the cost." },
  { month: "July", country: "Slovenia", note: "Alps in the morning, the sea by Friday." },
  { month: "August", country: "Greece", note: "Ferry chains that actually connect." },
];

function LettersPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-lilac">
          The Letter · €19 / month
        </span>
        <h1 className="mt-2 font-display text-5xl leading-[1.05] text-ink">
          Good old letters, but they teach you to travel.
        </h1>
        <p className="mt-4 text-soft text-lg leading-relaxed">
          Once a month a card lands in your letterbox. One country we've just come back from, the
          story of how we moved through it, the route we'd run again, and the budget we actually
          hit. No newsletter, no inbox — paper.
        </p>
        <a
          href="mailto:hello@vagrantandveela.com"
          className="mt-7 inline-block bg-ink text-onink font-semibold px-6 py-3 rounded-xl hover:bg-lilac transition"
        >
          Subscribe · €19 / month
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        {upcoming.map((u, i) => (
          <div
            key={u.month}
            className={`glass-soft rounded-2xl p-5 ${i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"}`}
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-soft">{u.month} letter</p>
            <p className="mt-1 font-display text-lg text-ink">{u.country}</p>
            <p className="mt-1 text-xs text-soft">{u.note}</p>
          </div>
        ))}
      </div>

      <div className="glass rounded-3xl p-8 lg:p-12 mt-14 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-display text-xl text-ink">What's in the envelope</h2>
          <p className="mt-2 text-sm text-soft leading-relaxed">
            A printed story card, a handwritten letter, a small map of the route and our budget
            notes for the country.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">When it ships</h2>
          <p className="mt-2 text-sm text-soft leading-relaxed">
            Posted in the first week of every month, anywhere in Europe. Delivery is included in the
            price.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink">Cancel anytime</h2>
          <p className="mt-2 text-sm text-soft leading-relaxed">
            Stop whenever you like — you keep every letter that's already been sent.
          </p>
        </div>
      </div>
    </main>
  );
}
