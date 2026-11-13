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
import { FranceLastWords } from "@/components/site/FranceLastWords";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FranceRouteArtwork } from "@/components/site/FranceRouteArtwork";
import { OktoberfestDayOneGuide } from "@/components/site/OktoberfestDayOneGuide";
import { OktoberfestDayTwoGuide } from "@/components/site/OktoberfestDayTwoGuide";
import { OktoberfestDayThreeGuide } from "@/components/site/OktoberfestDayThreeGuide";
import { OktoberfestDayFourGuide } from "@/components/site/OktoberfestDayFourGuide";
import { OktoberfestDayFiveGuide } from "@/components/site/OktoberfestDayFiveGuide";
import { OktoberfestDaySixGuide } from "@/components/site/OktoberfestDaySixGuide";
import { OktoberfestDaySevenGuide } from "@/components/site/OktoberfestDaySevenGuide";
import { OktoberfestDayEightGuide } from "@/components/site/OktoberfestDayEightGuide";
import { OktoberfestReservationOverview } from "@/components/site/OktoberfestReservationOverview";
import { OktoberfestLastWords } from "@/components/site/OktoberfestLastWords";
import oktoberfestOverviewArtwork from "@/assets/oktoberfest-journey-overview-final.jpg";

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
  const isOktoberfestGuide = itinerary.slug === "oktoberfest-dolomites" && view === "read";
  const hasDetailedGuide = isFranceGuide || isOktoberfestGuide;
  const availableDays = isFranceGuide ? [1, 2, 3, 4, 5, 6, 7] : [1, 2, 3, 4, 5, 6, 7, 8];
  const reservationChapter = isFranceGuide ? 8 : 9;
  const lastWordsChapter = reservationChapter + 1;
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
          {hasDetailedGuide ? (
            <div ref={guideAnchor} className="mt-4" aria-hidden="true" />
          ) : null}
          {hasDetailedGuide ? (
            <nav ref={guideNavigation} aria-label="Detailed itinerary days" className="sticky top-0 z-20 -mx-6 border-b border-border bg-background px-6 py-3">
              {guideDay !== 0 ? <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h1 className="font-display text-xl text-ink">{text.title}</h1>
                <span className="text-xs font-semibold text-soft">{guideDay < 1 ? (guideDay === -3 ? "Budget check" : "Trip agent") : guideDay === reservationChapter ? (lang === "sk" ? "Rezervácie" : "Reservations") : guideDay === lastWordsChapter ? (lang === "sk" ? "Posledné slová" : "Last words") : `${lang === "sk" ? "Deň" : "Day"} ${guideDay} / ${itinerary.days}`}</span>
              </div> : null}
              <div className="flex gap-2 overflow-x-auto pb-1">
                <Button className="shrink-0" data-guide-day={0} variant={guideDay === 0 ? "default" : "outline"} aria-pressed={guideDay === 0} onClick={() => selectGuideDay(0)}>{lang === "sk" ? "Úvod" : "Overview"}</Button>
                <select aria-label={lang === "sk" ? "Vyber deň" : "Pick a day"} className={`h-10 shrink-0 rounded-md border border-input px-3 text-sm font-medium ${availableDays.includes(guideDay) ? "bg-primary text-primary-foreground" : "bg-background text-ink"}`} value={availableDays.includes(guideDay) ? String(guideDay) : ""} onChange={(e) => e.target.value && selectGuideDay(Number(e.target.value))}>
                  <option value="" disabled>{lang === "sk" ? "Vyber deň" : "Pick a day"}</option>
                  {availableDays.map((day) => <option key={day} value={day}>{lang === "sk" ? "Deň" : "Day"} {day}</option>)}
                </select>
                {[{ id: -1, label: "Trip agent" }, { id: -3, label: "Budget check" }].map(({ id, label }) => (
                  <Button key={id} className="shrink-0" data-guide-day={id} variant={guideDay === id ? "default" : "outline"} aria-pressed={guideDay === id} onClick={() => selectGuideDay(id)}>{label}</Button>
                ))}
                <Button className="shrink-0" data-guide-day={reservationChapter} variant={guideDay === reservationChapter ? "default" : "outline"} aria-pressed={guideDay === reservationChapter} onClick={() => selectGuideDay(reservationChapter)}>
                  {lang === "sk" ? "Rezervácie" : "Reservations"}
                </Button>
                <Button className="shrink-0" data-guide-day={lastWordsChapter} variant={guideDay === lastWordsChapter ? "default" : "outline"} aria-pressed={guideDay === lastWordsChapter} onClick={() => selectGuideDay(lastWordsChapter)}>
                  {lang === "sk" ? "Posledné slová" : "Last words"}
                </Button>
              </div>
            </nav>
          ) : null}
          {view === "trip" && routeMap ? (
            <div className="mt-6">
              <OnTripMode slug={itinerary.slug} data={routeMap} lang={lang} />
            </div>
          ) : !hasDetailedGuide || guideDay === 0 ? (
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

          {isOktoberfestGuide && guideDay === 0 ? <section aria-label="Oktoberfest journey overview map" className="mt-10">
            <h2 className="font-display text-3xl text-ink">{lang === "sk" ? "Celá cesta" : "The whole journey"}</h2>
            <img src={oktoberfestOverviewArtwork} alt="Premium schematic overview of the eight-day Oktoberfest road trip across Germany, Liechtenstein, Switzerland, Italy and Austria" width={1536} height={1024} loading="lazy" className="mt-5 h-auto w-full rounded-lg" />
            <p className="mt-3 text-xs text-soft">{lang === "sk" ? "Schematický prehľad, nie cestná navigácia. Presuny, turistické trasy a navigačné odkazy nájdeš pri jednotlivých dňoch. Deň 8 závisí od počasia, my sme túru pre sneh vynechali." : "Schematic overview, not road navigation. Find drives, hiking routes and navigation links in each day. Day 8 is weather-dependent, we skipped the hike after snowfall."}</p>
            <ol className="mt-4 grid gap-2 text-sm text-soft sm:grid-cols-2">{["1 · Munich → Stetten", "2 · Vaduz → Flüela Pass → St. Moritz → Bellagio", "3 · Bellagio → Varenna → Vermiglio", "4 · Chalet al Foss · a day at the hotel", "5 · Ortisei / Seceda → Santa Maddalena", "6 · Zans → Lago di Braies → Valdaora", "7 · Tre Cime → Juns / Tux", "8 · Olpererhütte if safe, or home"].map(day => <li key={day}>{day}</li>)}</ol>
          </section> : null}

          {isFranceGuide && guideDay > 0 ? (
            <div>
              {guideDay === 1 ? <FranceDayOneGuide /> : guideDay === 2 ? <FranceDayTwoGuide /> : guideDay === 3 ? <FranceDayThreeGuide /> : guideDay === 4 ? <FranceDayFourGuide /> : guideDay === 5 ? <FranceDayFiveGuide /> : guideDay === 6 ? <FranceDaySixGuide /> : guideDay === 7 ? <FranceDaySevenGuide /> : guideDay === 8 ? <FranceReservationOverview /> : <FranceLastWords />}
              <div aria-label="Continue itinerary" className="mt-8 flex items-center justify-between gap-3 border-t border-border py-6">
                {guideDay > 1 ? <Button variant="outline" onClick={() => selectGuideDay(guideDay - 1)}><ArrowLeft />{guideDay > 8 ? (lang === "sk" ? "Rezervácie" : "Reservations") : lang === "sk" ? "Predchádzajúci deň" : "Previous day"}</Button> : <span />}
                {guideDay < 9 ? <Button onClick={() => selectGuideDay(guideDay + 1)}>{guideDay === 8 ? (lang === "sk" ? "Posledné slová" : "Last words") : guideDay === 7 ? (lang === "sk" ? "Rezervácie" : "Reservations") : `${lang === "sk" ? "Ďalší deň" : "Next day"} · ${guideDay + 1}`}<ArrowRight /></Button> : null}
              </div>
            </div>
          ) : null}

          {isOktoberfestGuide && guideDay > 0 ? <>
            {guideDay === 1 ? <OktoberfestDayOneGuide /> : guideDay === 2 ? <OktoberfestDayTwoGuide /> : guideDay === 3 ? <OktoberfestDayThreeGuide /> : guideDay === 4 ? <OktoberfestDayFourGuide /> : guideDay === 5 ? <OktoberfestDayFiveGuide /> : guideDay === 6 ? <OktoberfestDaySixGuide /> : guideDay === 7 ? <OktoberfestDaySevenGuide /> : guideDay === 8 ? <OktoberfestDayEightGuide /> : guideDay === reservationChapter ? <OktoberfestReservationOverview /> : <OktoberfestLastWords />}
            <div aria-label="Continue itinerary" className="mt-8 flex items-center justify-between gap-3 border-t border-border py-6">
              <Button variant="outline" onClick={() => selectGuideDay(guideDay - 1)}><ArrowLeft />{guideDay === 1 ? (lang === "sk" ? "Úvod" : "Overview") : guideDay === lastWordsChapter ? (lang === "sk" ? "Rezervácie" : "Reservations") : (lang === "sk" ? "Predchádzajúci deň" : "Previous day")}</Button>
              {guideDay < lastWordsChapter ? <Button onClick={() => selectGuideDay(guideDay + 1)}>{guideDay === reservationChapter ? (lang === "sk" ? "Posledné slová" : "Last words") : guideDay === 8 ? (lang === "sk" ? "Rezervácie" : "Reservations") : `${lang === "sk" ? "Ďalší deň" : "Next day"} · ${guideDay + 1}`}<ArrowRight /></Button> : null}
            </div>
          </> : null}

          <div className="mt-8" hidden={hasDetailedGuide && guideDay !== -3}>
            <BudgetCheck slug={itinerary.slug} budget={itinerary.budget} lang={lang} />
          </div>

          <div className="mt-8" hidden={hasDetailedGuide && guideDay !== -1}>
            <TripProfileForm
              slug={itinerary.slug}
              lang={lang}
              profile={room.profile}
              hasProfile={room.hasProfile}
              onSaved={(profile) => setRoom((r) => ({ ...r, profile, hasProfile: true }))}
            />
          </div>
          <div className="mt-8" hidden={hasDetailedGuide && guideDay !== -1}>
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
