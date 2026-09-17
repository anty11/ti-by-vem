import { createFileRoute } from "@tanstack/react-router";
import founderOne from "@/assets/founder-one.jpg";
import founderTwo from "@/assets/founder-two.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our story — two travellers behind the routes | Vagrant & Veela" },
      {
        name: "description",
        content:
          "We're two friends who kept travelling the same way: always moving, saving where it doesn't matter, splurging once where it does.",
      },
      { property: "og:title", content: "Our story — Vagrant & Veela" },
      {
        property: "og:description",
        content: "Two friends, a lot of trains, and the travel intelligence we built from them.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage">
          The two behind it
        </span>
        <h1 className="mt-2 font-display text-5xl leading-[1.05] text-ink">
          It's just the two of us.
        </h1>
        <p className="mt-4 text-soft text-lg leading-relaxed">
          We met on a delayed train and never really stopped. Over the years we worked out how we
          like to travel: keep moving, see more than you planned, save on the things nobody
          remembers, and give yourself one night you'll talk about for years.
        </p>
        <p className="mt-4 text-soft text-lg leading-relaxed">
          People kept asking for our plans. So we started writing them down properly — with the
          budget, the timings, the connections that only make sense once you've missed them. That's
          what we sell: not a list of sights, but our travel intelligence.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mt-12">
        <div className="glass rounded-3xl p-6 flex items-center gap-5">
          <img
            src={founderOne}
            alt="Vera, who plans the routes and the budgets"
            width={816}
            height={816}
            loading="lazy"
            className="size-24 rounded-2xl object-cover shrink-0"
          />
          <div>
            <p className="font-display text-xl text-ink">Vera</p>
            <p className="text-xs uppercase tracking-[0.2em] text-soft">Routes &amp; budget</p>
            <p className="mt-2 text-sm text-soft leading-relaxed">
              The one who knows which train to catch and how to sleep in seat 4A.
            </p>
          </div>
        </div>
        <div className="glass rounded-3xl p-6 flex items-center gap-5">
          <img
            src={founderTwo}
            alt="Veela, who writes the monthly letters"
            width={816}
            height={816}
            loading="lazy"
            className="size-24 rounded-2xl object-cover shrink-0"
          />
          <div>
            <p className="font-display text-xl text-ink">Veela</p>
            <p className="text-xs uppercase tracking-[0.2em] text-soft">Stories &amp; letters</p>
            <p className="mt-2 text-sm text-soft leading-relaxed">
              Writes the letters, remembers the splurge, and always packs one too many snacks.
            </p>
          </div>
        </div>
      </div>

      <div className="glass rounded-3xl p-8 mt-12">
        <h2 className="font-display text-2xl text-ink">Say hello</h2>
        <p className="mt-2 text-soft">
          Questions about a route, a booking or the membership? Write to us at{" "}
          <a
            href="mailto:hello@vagrantandveela.com"
            className="font-semibold text-royal hover:text-ink transition"
          >
            hello@vagrantandveela.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}
