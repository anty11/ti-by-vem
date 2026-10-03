import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { accessCopy } from "@/lib/access-copy";
import { itineraries, itineraryText } from "@/lib/content";
import { path, tripPath, type Lang } from "@/lib/i18n";
import { listMyAccess, redeemCode, type AccessRow } from "@/lib/access.functions";

export function AccessPage({ lang }: { lang: Lang }) {
  const t = accessCopy[lang];
  const load = useServerFn(listMyAccess);
  const redeem = useServerFn(redeemCode);

  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [mode, setMode] = useState<"in" | "up">("in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authMessage, setAuthMessage] = useState<string | null>(null);
  const [authOk, setAuthOk] = useState(false);
  const [welcome, setWelcome] = useState<string | null>(null);
  const [rows, setRows] = useState<AccessRow[]>([]);
  const [code, setCode] = useState("");
  const [redeemMessage, setRedeemMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, next) => {
      setSession(next);
      setReady(true);
      if (event === "SIGNED_IN" && next) {
        const provider = next.user.app_metadata?.provider;
        setWelcome(provider === "google" ? t.signedInGoogle : t.accountCreated);
      }
    });
    supabase.auth.getSession().then(({ data: current }) => {
      setSession(current.session);
      setReady(true);
    });
    return () => data.subscription.unsubscribe();
  }, [t]);

  useEffect(() => {
    if (!session) {
      setRows([]);
      return;
    }
    load().then(setRows).catch(() => setRows([]));
  }, [session, load]);

  async function submitAuth(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setAuthMessage(null);
    setAuthOk(false);
    const result =
      mode === "in"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({
            email,
            password,
            options: { emailRedirectTo: `${window.location.origin}${path(lang, "access")}` },
          });
    setBusy(false);
    if (result.error) {
      setAuthMessage(result.error.message);
      return;
    }
    if (mode === "up" && !result.data.session) {
      // Existing account: the server returns a user with no identities and sends no email.
      const identities = result.data.user?.identities;
      if (identities && identities.length === 0) {
        setAuthMessage(t.alreadyRegistered);
        return;
      }
      setAuthOk(true);
      setAuthMessage(t.checkEmail);
    }
  }

  async function googleSignIn() {
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: `${window.location.origin}${path(lang, "access")}`,
    });
    if (result.error) setAuthMessage(result.error.message);
  }

  async function submitCode(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setRedeemMessage(null);
    try {
      const result = await redeem({ data: { code } });
      if (result.status === "unknown") setRedeemMessage(t.unknownCode);
      else if (result.status === "used") setRedeemMessage(t.usedCode);
      else {
        setRedeemMessage(t.redeemed);
        setCode("");
        setRows(await load());
      }
    } catch {
      setRedeemMessage(t.unknownCode);
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-14">
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-royal">{t.eyebrow}</span>
      <h1 className="mt-2 font-display text-5xl leading-[1.05] text-ink">
        {lang === "sk" ? (
          <>
            Tu <em className="italic text-terracotta">žijú</em> vaše cesty.
          </>
        ) : (
          <>
            Your trips <em className="italic text-terracotta">live</em> here.
          </>
        )}
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-soft">{t.intro}</p>

      {!ready ? (
        <p className="mt-10 text-sm text-soft">{t.loading}</p>
      ) : !session ? (
        <div className="glass mt-10 rounded-3xl p-8">
          <h2 className="font-display text-2xl text-ink">{mode === "in" ? t.signInTitle : t.signUpTitle}</h2>
          <form onSubmit={submitAuth} className="mt-6 space-y-4">
            <label className="block text-sm text-soft">
              {t.email}
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-1 w-full rounded-xl border border-border bg-transparent px-4 py-3 text-ink outline-none focus:border-royal"
              />
            </label>
            <label className="block text-sm text-soft">
              {t.password}
              <input
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-1 w-full rounded-xl border border-border bg-transparent px-4 py-3 text-ink outline-none focus:border-royal"
              />
            </label>
            <button
              type="submit"
              disabled={busy}
              className="w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold text-onink transition hover:bg-royal disabled:opacity-50"
            >
              {mode === "in" ? t.signIn : t.signUp}
            </button>
          </form>
          <button
            type="button"
            onClick={googleSignIn}
            className="mt-3 w-full rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink transition hover:border-royal"
          >
            {t.google}
          </button>
          <button
            type="button"
            onClick={() => {
              setMode(mode === "in" ? "up" : "in");
              setAuthMessage(null);
            }}
            className="mt-5 text-sm font-semibold text-soft transition hover:text-ink"
          >
            {mode === "in" ? t.toSignUp : t.toSignIn}
          </button>
          {authMessage ? (
            <p role="status" className={`mt-4 text-sm ${authOk ? "text-royal" : "text-terracotta"}`}>
              {authMessage}
            </p>
          ) : null}
        </div>
      ) : (
        <>
          {welcome ? (
            <p role="status" className="glass mt-10 rounded-2xl px-5 py-3 text-sm font-semibold text-royal">
              {welcome}
            </p>
          ) : null}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-soft">
            <span>
              {t.signedInAs} <strong className="text-ink">{session.user.email}</strong>
            </span>
            <button
              type="button"
              onClick={() => {
                setWelcome(null);
                supabase.auth.signOut();
              }}
              className="rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition hover:text-ink"
            >
              {t.signOut}
            </button>
          </div>

          <div className="glass mt-6 rounded-3xl p-8">
            <h2 className="font-display text-2xl text-ink">{t.redeemTitle}</h2>
            <p className="mt-2 text-sm text-soft">{t.redeemText}</p>
            <form onSubmit={submitCode} className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                value={code}
                onChange={(event) => setCode(event.target.value.toUpperCase())}
                placeholder={t.codePlaceholder}
                className="flex-1 rounded-full border border-border bg-transparent px-5 py-3 font-mono text-sm tracking-[0.15em] text-ink outline-none focus:border-royal"
              />
              <button
                type="submit"
                disabled={busy}
                className="rounded-full bg-royal px-7 py-3 text-sm font-semibold text-onink transition hover:bg-royal/90 disabled:opacity-50"
              >
                {t.redeem}
              </button>
            </form>
            {redeemMessage ? <p className="mt-4 text-sm text-terracotta">{redeemMessage}</p> : null}
          </div>

          <h2 className="mt-12 font-display text-2xl text-ink">{t.myTrips}</h2>
          {rows.length === 0 ? (
            <p className="mt-3 text-sm text-soft">{t.noTrips}</p>
          ) : (
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {rows.map((row) => {
                const item = itineraries.find((i) => i.slug === row.slug);
                const text = item ? itineraryText(item, lang) : null;
                return (
                  <div key={row.code} className="glass-soft rounded-2xl p-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-soft">
                      {row.tier === "us" ? t.tierUs : t.tierChat}
                    </p>
                    <p className="mt-1 font-display text-2xl text-ink">{text?.title ?? row.slug}</p>
                    <p className="text-sm text-soft">{text?.country}</p>
                    <Link
                      to={tripPath(lang)}
                      params={{ slug: row.slug }}
                      className="mt-4 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-onink transition hover:bg-royal"
                    >
                      {t.open}
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </main>
  );
}
