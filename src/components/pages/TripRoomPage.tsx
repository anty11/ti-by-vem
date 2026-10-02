import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { TripChat } from "@/components/site/TripChat";
import { tripCopy } from "@/lib/access-copy";
import { itineraryText, type Itinerary } from "@/lib/content";
import { path, type Lang } from "@/lib/i18n";
import { listMyAccess } from "@/lib/access.functions";
import { routeMaps } from "@/lib/route-maps";
import { OnTripMode } from "@/components/site/OnTripMode";

export function TripRoomPage({ itinerary, lang }: { itinerary: Itinerary; lang: Lang }) {
  const t = tripCopy[lang];
  const text = itineraryText(itinerary, lang);
  const load = useServerFn(listMyAccess);
  const [state, setState] = useState<"loading" | "locked" | "open">("loading");
  const [tier, setTier] = useState<string>("chat");
  const routeMap = routeMaps[itinerary.slug];
  const [view, setView] = useState<"read" | "trip">("read");

  useEffect(() => {
    let active = true;
    supabase.auth.getSession().then(async ({ data }) => {
      if (!data.session) {
        if (active) setState("locked");
        return;
      }
      try {
        const rows = await load();
        const row = rows.find((r) => r.slug === itinerary.slug);
        if (!active) return;
        setTier(row?.tier ?? "chat");
        setState(row ? "open" : "locked");
      } catch {
        if (active) setState("locked");
      }
    });
    return () => {
      active = false;
    };
  }, [itinerary.slug, load]);

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <Link to={path(lang, "access")} className="text-sm font-semibold text-soft transition hover:text-ink">
        {t.back}
      </Link>

      {state === "loading" ? (
        <p className="mt-10 text-sm text-soft">…</p>
      ) : state === "locked" ? (
        <div className="glass mt-6 rounded-3xl p-10 text-center">
          <h1 className="font-display text-3xl text-ink">{t.locked}</h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-soft">{t.lockedText}</p>
          <Link
            to={path(lang, "access")}
            className="mt-7 inline-flex rounded-full bg-ink px-7 py-3 text-sm font-semibold text-onink transition hover:bg-royal"
          >
            {t.unlock}
          </Link>
        </div>
      ) : (
        <>
          {routeMap ? (
            <div className="mt-6 inline-flex rounded-full border border-border p-1 text-sm font-semibold">
              {(["read", "trip"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setView(m)}
                  className={`rounded-full px-5 py-2 transition ${view === m ? "bg-ink text-onink" : "text-soft hover:text-ink"}`}
                >
                  {m === "read" ? (lang === "sk" ? "Itinerár" : "Itinerary") : lang === "sk" ? "Na ceste" : "On-trip mode"}
                </button>
              ))}
            </div>
          ) : null}
          {view === "trip" && routeMap ? (
            <div className="mt-6">
              <OnTripMode slug={itinerary.slug} data={routeMap} lang={lang} />
            </div>
          ) : (
          <div className="glass mt-6 rounded-3xl p-8 lg:p-12">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-royal">{text.country}</span>
            <h1 className="mt-2 font-display text-5xl leading-[1.05] text-ink">{text.title}</h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-soft">{text.blurb}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="glass-soft rounded-2xl p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-soft">{t.days}</p>
                <p className="mt-1 font-display text-2xl text-ink">{itinerary.days}</p>
              </div>
              <div className="glass-soft rounded-2xl p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-soft">{t.ground}</p>
                <p className="mt-1 font-display text-2xl text-ink">{text.stops}</p>
              </div>
              <div className="glass-soft rounded-2xl p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-soft">{t.budget}</p>
                <p className="mt-1 font-display text-2xl text-ink">{itinerary.budget}</p>
              </div>
            </div>

            <h2 className="mt-10 font-display text-2xl text-ink">{t.shape}</h2>
            <ul className="mt-4 space-y-3 text-soft">
              {text.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-terracotta" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          )}

          <div className="mt-8">
            <TripChat slug={itinerary.slug} lang={lang} />
          </div>

          {tier === "us" ? (
            <div className="glass-soft mt-8 rounded-3xl p-8">
              <h2 className="font-display text-2xl text-ink">{t.whatsapp}</h2>
              <p className="mt-2 text-sm text-soft">{t.whatsappText}</p>
            </div>
          ) : null}
        </>
      )}
    </main>
  );
}
