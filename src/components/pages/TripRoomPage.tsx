import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { TripChat } from "@/components/site/TripChat";
import { TripProfileForm } from "@/components/site/TripProfileForm";
import { tripCopy } from "@/lib/access-copy";
import { getTripRoom, type TripRoomState } from "@/lib/chat.functions";
import { emptyProfile } from "@/lib/agent/profile";
import { CHAT_LIMITS } from "@/lib/agent/limits";
import { itineraryText, type Itinerary } from "@/lib/content";
import { path, type Lang } from "@/lib/i18n";
import { listMyAccess } from "@/lib/access.functions";
import { routeMaps } from "@/lib/route-maps";
import { OnTripMode } from "@/components/site/OnTripMode";
import { BudgetCheck } from "@/components/site/BudgetCheck";
import { FranceDayOneGuide } from "@/components/site/FranceDayOneGuide";
import { FranceDayTwoGuide } from "@/components/site/FranceDayTwoGuide";
import { FranceDayThreeGuide } from "@/components/site/FranceDayThreeGuide";
import { FranceDayFourGuide } from "@/components/site/FranceDayFourGuide";
import { FranceDayFiveGuide } from "@/components/site/FranceDayFiveGuide";
import { FranceDaySevenGuide } from "@/components/site/FranceDaySevenGuide";
import { FranceDaySixGuide } from "@/components/site/FranceDaySixGuide";
import { FranceReservationOverview } from "@/components/site/FranceReservationOverview";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FranceRouteArtwork } from "@/components/site/FranceRouteArtwork";

export function TripRoomPage({ itinerary, lang }: { itinerary: Itinerary; lang: Lang }) {
  const t = tripCopy[lang];
  const text = itineraryText(itinerary, lang);
  const load = useServerFn(listMyAccess);
  const [state, setState] = useState<"loading" | "locked" | "open">("loading");
  const [tier, setTier] = useState<string>("chat");
  const routeMap = routeMaps[itinerary.slug];
  const [view, setView] = useState<"read" | "trip">("read");
  const [guideDay, setGuideDay] = useState(0);
  const guideNavigation = useRef<HTMLElement>(null);
  const guideAnchor = useRef<HTMLDivElement>(null);
  const isFranceGuide = itinerary.slug === "riviera" && view === "read";
  const selectGuideDay = (day: number) => {
    setGuideDay(day);
    requestAnimationFrame(() => {
      guideAnchor.current?.scrollIntoView({ block: "start", behavior: "instant" });
      guideNavigation.current?.querySelector(`[data-guide-day="${day}"]`)?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "instant" });
    });
  };
  const loadRoom = useServerFn(getTripRoom);
  const [room, setRoom] = useState<TripRoomState>({
    profile: emptyProfile,
    hasProfile: false,
    messages: [],
    usage: { used: 0, limit: CHAT_LIMITS.perTrip },
  });

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
        if (row) {
          const loaded = await loadRoom({ data: { slug: itinerary.slug } });
          if (active) setRoom(loaded);
        }
      } catch {
        if (active) setState("locked");
      }
    });
    return () => {
      active = false;
    };
  }, [itinerary.slug, load, loadRoom]);

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <Link
        to={path(lang, "access")}
        className="text-sm font-semibold text-soft transition hover:text-ink"
      >
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
                <Button
                  variant="ghost"
                  key={m}
                  type="button"
                  onClick={() => setView(m)}
                  className={`rounded-full px-5 py-2 transition ${view === m ? "bg-ink text-onink" : "text-soft hover:text-ink"}`}
                >
                  {m === "read"
                    ? lang === "sk"
                      ? "Itinerár"
                      : "Itinerary"
                    : lang === "sk"
                      ? "Na ceste"
                      : "On-trip mode"}
                </Button>
              ))}
            </div>
          ) : null}
          {isFranceGuide ? (
            <div ref={guideAnchor} className="mt-4" aria-hidden="true" />
          ) : null}
          {isFranceGuide ? (
            <nav ref={guideNavigation} aria-label="Detailed itinerary days" className="sticky top-0 z-20 -mx-6 border-b border-border bg-background px-6 py-3">
              {guideDay !== 0 ? <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h1 className="font-display text-xl text-ink">{text.title}</h1>
                <span className="text-xs font-semibold text-soft">{guideDay < 1 ? (guideDay === -3 ? "Budget check" : guideDay === -2 ? "Your trip" : "Trip agent") : guideDay === 8 ? (lang === "sk" ? "Rezervácie" : "Reservations") : `${lang === "sk" ? "Deň" : "Day"} ${guideDay} / 7`}</span>
              </div> : null}
              <div className="flex gap-2 overflow-x-auto pb-1">
                <Button className="shrink-0" data-guide-day={0} variant={guideDay === 0 ? "default" : "outline"} aria-pressed={guideDay === 0} onClick={() => selectGuideDay(0)}>{lang === "sk" ? "Úvod" : "Overview"}</Button>
                {[{ id: -3, label: "Budget check" }, { id: -2, label: "Your trip" }, { id: -1, label: "Trip agent" }].map(({ id, label }) => (
                  <Button key={id} className="shrink-0" data-guide-day={id} variant={guideDay === id ? "default" : "outline"} aria-pressed={guideDay === id} onClick={() => selectGuideDay(id)}>{label}</Button>
                ))}
                {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                  <Button key={day} className="shrink-0" data-guide-day={day} variant={guideDay === day ? "default" : "outline"} aria-pressed={guideDay === day} onClick={() => selectGuideDay(day)}>
                    {lang === "sk" ? "Deň" : "Day"} {day}
                  </Button>
                ))}
                <Button className="shrink-0" data-guide-day={8} variant={guideDay === 8 ? "default" : "outline"} aria-pressed={guideDay === 8} onClick={() => selectGuideDay(8)}>
                  {lang === "sk" ? "Rezervácie" : "Reservations"}
                </Button>
              </div>
            </nav>
          ) : null}
          {view === "trip" && routeMap ? (
            <div className="mt-6">
              <OnTripMode slug={itinerary.slug} data={routeMap} lang={lang} />
            </div>
          ) : !isFranceGuide || guideDay === 0 ? (
            <div className="glass mt-6 rounded-3xl p-8 lg:p-12">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-royal">
                {text.country}
              </span>
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
          ) : null}

          {isFranceGuide && guideDay === 0 ? (
            <section aria-label="France journey overview map" className="mt-10">
              <h2 className="font-display text-3xl text-ink">{lang === "sk" ? "Celá cesta" : "The whole journey"}</h2>
              <FranceRouteArtwork day={0} title="Schematic overview of the seven-day route from Marseille through Provence and the French Riviera to Menton and Monaco" />
              <p className="mt-3 text-xs text-soft">{lang === "sk" ? "Schematický prehľad trasy. Navigáciu a podrobné zastávky nájdeš pri jednotlivých dňoch." : "Schematic route overview. Find navigation links and detailed stops in each day."}</p>
            </section>
          ) : null}

          {isFranceGuide && guideDay > 0 ? (
            <div>
              {guideDay === 1 ? <FranceDayOneGuide /> : guideDay === 2 ? <FranceDayTwoGuide /> : guideDay === 3 ? <FranceDayThreeGuide /> : guideDay === 4 ? <FranceDayFourGuide /> : guideDay === 5 ? <FranceDayFiveGuide /> : guideDay === 6 ? <FranceDaySixGuide /> : guideDay === 7 ? <FranceDaySevenGuide /> : <FranceReservationOverview />}
              <div aria-label="Continue itinerary" className="mt-8 flex items-center justify-between gap-3 border-t border-border py-6">
                {guideDay > 1 ? <Button variant="outline" onClick={() => selectGuideDay(guideDay - 1)}><ArrowLeft />{lang === "sk" ? "Predchádzajúci deň" : "Previous day"}</Button> : <span />}
                {guideDay < 8 ? <Button onClick={() => selectGuideDay(guideDay + 1)}>{guideDay === 7 ? (lang === "sk" ? "Rezervácie" : "Reservations") : `${lang === "sk" ? "Ďalší deň" : "Next day"} · ${guideDay + 1}`}<ArrowRight /></Button> : null}
              </div>
            </div>
          ) : null}

          <div className="mt-8" hidden={isFranceGuide && guideDay !== -3}>
            <BudgetCheck slug={itinerary.slug} budget={itinerary.budget} lang={lang} />
          </div>

          <div className="mt-8" hidden={isFranceGuide && guideDay !== -2}>
            <TripProfileForm
              slug={itinerary.slug}
              lang={lang}
              profile={room.profile}
              hasProfile={room.hasProfile}
              onSaved={(profile) => setRoom((r) => ({ ...r, profile, hasProfile: true }))}
            />
          </div>
          <div className="mt-8" hidden={isFranceGuide && guideDay !== -1}>
            <TripChat
              slug={itinerary.slug}
              lang={lang}
              history={room.messages}
              usage={room.usage}
              onUsage={(used) => setRoom((r) => ({ ...r, usage: { ...r.usage, used } }))}
            />
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
