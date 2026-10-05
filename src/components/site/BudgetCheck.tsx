import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Lang } from "@/lib/i18n";

type Expense = {
  id: string;
  label: string;
  category: string;
  planned: number | null;
  spent: number | null;
  paid_by: string | null;
  sort_order: number;
};

// Table is newer than the generated types; keep access loosely typed here.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const db = supabase as unknown as { from: (t: string) => any };

const CATEGORIES = ["stay", "transport", "food", "activities", "other"] as const;
const catLabel: Record<Lang, Record<string, string>> = {
  en: { stay: "Stay", transport: "Transport", food: "Food & drinks", activities: "Activities", other: "Other" },
  sk: { stay: "Ubytovanie", transport: "Doprava", food: "Jedlo a pitie", activities: "Aktivity", other: "Iné" },
};
// Our default split of the trip's estimated budget.
const SPLIT: [string, number][] = [
  ["stay", 0.4],
  ["transport", 0.22],
  ["food", 0.23],
  ["activities", 0.12],
  ["other", 0.03],
];

const copy = {
  en: {
    title: "Budget check",
    lead: "Our estimate is already in. Add what you really spend, edit anything, and see who paid what.",
    planned: "Planned",
    spent: "Spent",
    left: "Left",
    item: "Item",
    paidBy: "Paid by",
    add: "Add expense",
    who: "Split between",
    whoHint: "Names separated by commas, e.g. V, eM",
    balances: "Who owes whom",
    share: "fair share",
    settled: "All even.",
    owes: "owes",
    ourEstimate: "Our estimate",
    signIn: "Sign in to keep your budget.",
  },
  sk: {
    title: "Kontrola rozpočtu",
    lead: "Náš odhad je už vložený. Dopĺňaj skutočné výdavky, uprav čokoľvek a sleduj, kto čo zaplatil.",
    planned: "Plán",
    spent: "Minuté",
    left: "Zostáva",
    item: "Položka",
    paidBy: "Zaplatil/a",
    add: "Pridať výdavok",
    who: "Delíme medzi",
    whoHint: "Mená oddelené čiarkou, napr. V, eM",
    balances: "Kto komu dlží",
    share: "férový podiel",
    settled: "Všetko vyrovnané.",
    owes: "dlží",
    ourEstimate: "Náš odhad",
    signIn: "Prihlás sa, aby sa rozpočet uložil.",
  },
};

const eur = (n: number) =>
  "€" + n.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 0 });

export function BudgetCheck({ slug, budget, lang }: { slug: string; budget: string; lang: Lang }) {
  const t = copy[lang];
  const [rows, setRows] = useState<Expense[]>([]);
  const [loaded, setLoaded] = useState(false);
  const peopleKey = `vem-budget-people-${slug}`;
  const [people, setPeople] = useState("");

  useEffect(() => {
    setPeople(localStorage.getItem(peopleKey) ?? "");
  }, [peopleKey]);

  useEffect(() => {
    let active = true;
    (async () => {
      const { data } = await db
        .from("trip_expenses")
        .select("id,label,category,planned,spent,paid_by,sort_order")
        .eq("itinerary_slug", slug)
        .order("sort_order")
        .order("created_at");
      let list = (data ?? []) as Expense[];
      if (list.length === 0) {
        const total = Number(budget.replace(/[^\d]/g, "")) || 0;
        if (total > 0) {
          const seed = SPLIT.map(([cat, p], i) => ({
            itinerary_slug: slug,
            label: `${t.ourEstimate} · ${catLabel[lang][cat]}`,
            category: cat,
            planned: Math.round(total * p),
            sort_order: i,
          }));
          const res = await db
            .from("trip_expenses")
            .insert(seed)
            .select("id,label,category,planned,spent,paid_by,sort_order");
          list = (res.data ?? []) as Expense[];
        }
      }
      if (active) {
        setRows(list.map((r) => ({ ...r, planned: num(r.planned), spent: num(r.spent) })));
        setLoaded(true);
      }
    })();
    return () => {
      active = false;
    };
  }, [slug, budget, lang, t.ourEstimate]);

  const names = useMemo(
    () =>
      people
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    [people],
  );

  const update = (id: string, patch: Partial<Expense>) => {
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  };
  const save = async (id: string, patch: Partial<Expense>) => {
    update(id, patch);
    await db
      .from("trip_expenses")
      .update({ ...patch, updated_at: new Date().toISOString() })
      .eq("id", id);
  };
  const add = async () => {
    const { data } = await db
      .from("trip_expenses")
      .insert({ itinerary_slug: slug, label: "", category: "other", sort_order: rows.length + 10 })
      .select("id,label,category,planned,spent,paid_by,sort_order")
      .single();
    if (data) setRows((rs) => [...rs, { ...data, planned: null, spent: null }]);
  };
  const remove = async (id: string) => {
    setRows((rs) => rs.filter((r) => r.id !== id));
    await db.from("trip_expenses").delete().eq("id", id);
  };

  const planned = rows.reduce((s, r) => s + (r.planned ?? 0), 0);
  const spent = rows.reduce((s, r) => s + (r.spent ?? 0), 0);

  const paid: Record<string, number> = {};
  names.forEach((n) => (paid[n] = 0));
  rows.forEach((r) => {
    if (r.paid_by && r.spent) paid[r.paid_by] = (paid[r.paid_by] ?? 0) + r.spent;
  });
  const sharedSpent = Object.values(paid).reduce((a, b) => a + b, 0);
  const everyone = Object.keys(paid);
  const fair = everyone.length ? sharedSpent / everyone.length : 0;
  const transfers = settle(everyone.map((n) => [n, paid[n] - fair]));

  const input =
    "w-full rounded-xl border border-border bg-card px-3 py-2 text-sm text-ink outline-none focus:border-royal";

  return (
    <section className="glass rounded-3xl p-6 lg:p-8">
      <h2 className="font-display text-3xl text-ink">{t.title}</h2>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-soft">{t.lead}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          [t.planned, planned],
          [t.spent, spent],
          [t.left, planned - spent],
        ].map(([label, value], i) => (
          <div key={label as string} className="glass-soft rounded-2xl p-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-soft">{label}</p>
            <p
              className={`mt-1 font-display text-2xl ${i === 2 && (value as number) < 0 ? "text-terracotta" : "text-ink"}`}
            >
              {eur(value as number)}
            </p>
          </div>
        ))}
      </div>
      {planned > 0 ? (
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-border">
          <div
            className={`h-full ${spent > planned ? "bg-terracotta" : "bg-royal"}`}
            style={{ width: `${Math.min(100, (spent / planned) * 100)}%` }}
          />
        </div>
      ) : null}

      <label className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-soft">
        {t.who}
        <input
          className={`${input} mt-2 normal-case tracking-normal`}
          placeholder={t.whoHint}
          value={people}
          onChange={(e) => {
            setPeople(e.target.value);
            localStorage.setItem(peopleKey, e.target.value);
          }}
        />
      </label>

      <div className="mt-6 space-y-3">
        {!loaded ? <p className="text-sm text-soft">…</p> : null}
        {rows.map((r) => (
          <div
            key={r.id}
            className="glass-soft grid grid-cols-2 gap-2 rounded-2xl p-3 sm:grid-cols-[2fr_1.2fr_1fr_1fr_1.2fr_auto] sm:items-center"
          >
            <input
              className={`${input} col-span-2 sm:col-span-1`}
              placeholder={t.item}
              value={r.label}
              onChange={(e) => update(r.id, { label: e.target.value })}
              onBlur={(e) => save(r.id, { label: e.target.value })}
            />
            <select
              className={input}
              value={r.category}
              onChange={(e) => save(r.id, { category: e.target.value })}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {catLabel[lang][c]}
                </option>
              ))}
            </select>
            <MoneyInput
              className={input}
              placeholder={t.planned}
              value={r.planned}
              onCommit={(v) => save(r.id, { planned: v })}
            />
            <MoneyInput
              className={input}
              placeholder={t.spent}
              value={r.spent}
              onCommit={(v) => save(r.id, { spent: v })}
            />
            <select
              className={input}
              value={r.paid_by ?? ""}
              onChange={(e) => save(r.id, { paid_by: e.target.value || null })}
            >
              <option value="">{t.paidBy}</option>
              {[...new Set([...names, ...(r.paid_by ? [r.paid_by] : [])])].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => remove(r.id)}
              aria-label="Delete"
              className="justify-self-end rounded-full px-3 py-2 text-soft transition hover:text-terracotta"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={add}
        className="mt-4 rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-onink transition hover:bg-royal"
      >
        + {t.add}
      </button>

      {everyone.length > 1 ? (
        <div className="glass-soft mt-8 rounded-2xl p-5">
          <h3 className="font-display text-xl text-ink">{t.balances}</h3>
          <ul className="mt-3 space-y-1 text-sm text-soft">
            {everyone.map((n) => (
              <li key={n}>
                <span className="font-semibold text-ink">{n}</span>: {eur(paid[n])} ({t.share}{" "}
                {eur(fair)})
              </li>
            ))}
          </ul>
          <div className="mt-3 space-y-1 text-sm font-semibold text-ink">
            {transfers.length === 0 ? (
              <p>{t.settled}</p>
            ) : (
              transfers.map(([from, to, amt]) => (
                <p key={from + to}>
                  {from} {t.owes} {to} <span className="text-royal">{eur(amt)}</span>
                </p>
              ))
            )}
          </div>
        </div>
      ) : null}
    </section>
  );
}

function num(v: unknown): number | null {
  if (v === null || v === undefined || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function MoneyInput({
  value,
  onCommit,
  className,
  placeholder,
}: {
  value: number | null;
  onCommit: (v: number | null) => void;
  className: string;
  placeholder: string;
}) {
  const [draft, setDraft] = useState(value === null ? "" : String(value));
  useEffect(() => setDraft(value === null ? "" : String(value)), [value]);
  return (
    <input
      inputMode="decimal"
      className={className}
      placeholder={`€ ${placeholder}`}
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={() => {
        const v = num(draft.replace(",", "."));
        if (v !== value) onCommit(v);
      }}
    />
  );
}

function settle(balances: [string, number][]): [string, string, number][] {
  const debtors = balances.filter(([, b]) => b < -0.005).map(([n, b]) => [n, -b] as [string, number]);
  const creditors = balances.filter(([, b]) => b > 0.005).map(([n, b]) => [n, b] as [string, number]);
  const out: [string, string, number][] = [];
  let i = 0;
  let j = 0;
  while (i < debtors.length && j < creditors.length) {
    const amt = Math.min(debtors[i][1], creditors[j][1]);
    out.push([debtors[i][0], creditors[j][0], Math.round(amt * 100) / 100]);
    debtors[i][1] -= amt;
    creditors[j][1] -= amt;
    if (debtors[i][1] < 0.005) i++;
    if (creditors[j][1] < 0.005) j++;
  }
  return out;
}
