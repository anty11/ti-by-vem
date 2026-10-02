import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { itineraries } from "@/lib/content";
import { amIAdmin, createCodes, listAllCodes, type CodeRow } from "@/lib/access.functions";
import { listInboxMessages, type InboxMessage } from "@/lib/inbox.functions";

export function AdminPage() {
  const checkAdmin = useServerFn(amIAdmin);
  const load = useServerFn(listAllCodes);
  const create = useServerFn(createCodes);
  const loadInbox = useServerFn(listInboxMessages);

  const [session, setSession] = useState<Session | null>(null);
  const [state, setState] = useState<"loading" | "denied" | "ok">("loading");
  const [rows, setRows] = useState<CodeRow[]>([]);
  const [slug, setSlug] = useState(itineraries[0]?.slug ?? "");
  const [tier, setTier] = useState<"chat" | "us">("chat");
  const [count, setCount] = useState(1);
  const [note, setNote] = useState("");
  const [fresh, setFresh] = useState<string[]>([]);
  const [sendTo, setSendTo] = useState("");
  const [busy, setBusy] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_event, next) => setSession(next));
    supabase.auth.getSession().then(({ data: current }) => setSession(current.session));
    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) {
      setState("denied");
      return;
    }
    checkAdmin()
      .then(async (isAdmin) => {
        if (!isAdmin) {
          setState("denied");
          return;
        }
        setState("ok");
        setRows(await load());
      })
      .catch(() => setState("denied"));
  }, [session, checkAdmin, load]);

  async function signIn(event: React.FormEvent) {
    event.preventDefault();
    setAuthError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setAuthError(error.message);
  }

  async function generate(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    try {
      const codes = await create({
        data: { slug, tier, count, note: note || undefined, sendTo: sendTo.trim() || undefined },
      });
      setFresh(codes);
      setRows(await load());
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-14">
      <h1 className="font-display text-4xl text-ink">Access codes</h1>

      {state === "loading" ? (
        <p className="mt-6 text-sm text-soft">Loading…</p>
      ) : state === "denied" ? (
        <div className="glass mt-8 rounded-3xl p-8">
          <p className="text-sm text-soft">Admins only. Sign in with your admin account.</p>
          <form onSubmit={signIn} className="mt-5 space-y-3">
            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-ink outline-none focus:border-royal"
            />
            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-ink outline-none focus:border-royal"
            />
            <button type="submit" className="w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold text-onink">
              Sign in
            </button>
          </form>
          {authError ? <p className="mt-3 text-sm text-terracotta">{authError}</p> : null}
        </div>
      ) : (
        <>
          <form onSubmit={generate} className="glass mt-8 grid gap-4 rounded-3xl p-8 sm:grid-cols-2">
            <label className="text-sm text-soft">
              Trip
              <select
                value={slug}
                onChange={(event) => setSlug(event.target.value)}
                className="mt-1 w-full rounded-xl border border-border bg-transparent px-4 py-3 text-ink"
              >
                {itineraries.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm text-soft">
              Package
              <select
                value={tier}
                onChange={(event) => setTier(event.target.value as "chat" | "us")}
                className="mt-1 w-full rounded-xl border border-border bg-transparent px-4 py-3 text-ink"
              >
                <option value="chat">Guide + Chat (€29)</option>
                <option value="us">Guide + Us (€99)</option>
              </select>
            </label>
            <label className="text-sm text-soft">
              How many
              <input
                type="number"
                min={1}
                max={20}
                value={count}
                onChange={(event) => setCount(Number(event.target.value))}
                className="mt-1 w-full rounded-xl border border-border bg-transparent px-4 py-3 text-ink"
              />
            </label>
            <label className="text-sm text-soft">
              Note (customer name)
              <input
                value={note}
                onChange={(event) => setNote(event.target.value)}
                className="mt-1 w-full rounded-xl border border-border bg-transparent px-4 py-3 text-ink"
              />
            </label>
            <label className="text-sm text-soft sm:col-span-2">
              Send codes to customer email (optional)
              <input
                type="email"
                value={sendTo}
                onChange={(event) => setSendTo(event.target.value)}
                className="mt-1 w-full rounded-xl border border-border bg-transparent px-4 py-3 text-ink"
              />
            </label>
            <button
              type="submit"
              disabled={busy}
              className="sm:col-span-2 rounded-full bg-royal px-6 py-3 text-sm font-semibold text-onink disabled:opacity-50"
            >
              Generate codes
            </button>
          </form>

          {fresh.length > 0 ? (
            <div className="glass-soft mt-6 rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-soft">New codes</p>
              <ul className="mt-2 space-y-1 font-mono text-lg text-ink">
                {fresh.map((code) => (
                  <li key={code}>{code}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <h2 className="mt-12 font-display text-2xl text-ink">All codes</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs uppercase tracking-[0.15em] text-soft">
                <tr>
                  <th className="py-2">Code</th>
                  <th>Trip</th>
                  <th>Package</th>
                  <th>Note</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="text-ink">
                {rows.map((row) => (
                  <tr key={row.code} className="border-t border-border">
                    <td className="py-2 font-mono">{row.code}</td>
                    <td>{row.slug}</td>
                    <td>{row.tier}</td>
                    <td className="text-soft">{row.note ?? "—"}</td>
                    <td className={row.redeemed ? "text-sage" : "text-soft"}>
                      {row.redeemed ? "used" : "free"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </main>
  );
}
