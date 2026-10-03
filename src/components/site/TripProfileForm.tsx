import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { budgetOptions, paceOptions, profileCopy, type TripProfile } from "@/lib/agent/profile";
import { saveTripProfile } from "@/lib/chat.functions";
import type { Lang } from "@/lib/i18n";

type Props = {
  slug: string;
  lang: Lang;
  profile: TripProfile;
  hasProfile: boolean;
  onSaved: (profile: TripProfile) => void;
};

const fieldClass =
  "w-full rounded-xl border border-border bg-transparent px-4 py-2.5 text-sm text-ink outline-none focus:border-royal";
const labelClass = "block text-[10px] font-semibold uppercase tracking-[0.2em] text-soft";

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm transition ${
        active
          ? "border-ink bg-ink text-onink"
          : "border-border text-soft hover:border-ink hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

function summary(profile: TripProfile, lang: Lang): string[] {
  const t = profileCopy[lang];
  const parts: string[] = [];
  if (profile.travelStart && profile.travelEnd)
    parts.push(`${profile.travelStart} → ${profile.travelEnd}`);
  else if (profile.travelStart) parts.push(profile.travelStart);
  if (profile.party) parts.push(profile.party);
  if (profile.pace) parts.push(t.paces[profile.pace]);
  if (profile.budget) parts.push(t.budgets[profile.budget]);
  return parts;
}

export function TripProfileForm({ slug, lang, profile, hasProfile, onSaved }: Props) {
  const t = profileCopy[lang];
  const save = useServerFn(saveTripProfile);
  const [editing, setEditing] = useState(!hasProfile);
  const [draft, setDraft] = useState<TripProfile>(profile);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<"idle" | "saved" | "error">("idle");

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setStatus("idle");
    try {
      await save({ data: { slug, ...draft } });
      setStatus("saved");
      setEditing(false);
      onSaved(draft);
    } catch {
      setStatus("error");
    } finally {
      setBusy(false);
    }
  }

  if (!editing) {
    const parts = summary(profile, lang);
    return (
      <div className="glass-soft flex flex-wrap items-center justify-between gap-3 rounded-2xl px-5 py-4">
        <div className="min-w-0">
          <p className={labelClass}>{t.title}</p>
          <p className="mt-1 truncate text-sm text-ink">
            {parts.length ? parts.join(" · ") : t.empty}
          </p>
          {profile.notes ? <p className="mt-1 text-xs text-soft">{profile.notes}</p> : null}
        </div>
        <button
          type="button"
          onClick={() => {
            setDraft(profile);
            setEditing(true);
          }}
          className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-soft transition hover:border-ink hover:text-ink"
        >
          {t.edit}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="glass-soft rounded-2xl p-5 lg:p-6">
      <p className={labelClass}>{t.title}</p>
      <p className="mt-1 text-sm text-soft">{t.intro}</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>{t.start}</span>
          <input
            type="date"
            value={draft.travelStart ?? ""}
            onChange={(e) => setDraft({ ...draft, travelStart: e.target.value || null })}
            className={`mt-1.5 ${fieldClass}`}
          />
        </label>
        <label className="block">
          <span className={labelClass}>{t.end}</span>
          <input
            type="date"
            value={draft.travelEnd ?? ""}
            min={draft.travelStart ?? undefined}
            onChange={(e) => setDraft({ ...draft, travelEnd: e.target.value || null })}
            className={`mt-1.5 ${fieldClass}`}
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className={labelClass}>{t.party}</span>
        <input
          type="text"
          value={draft.party ?? ""}
          maxLength={200}
          placeholder={t.partyPlaceholder}
          onChange={(e) => setDraft({ ...draft, party: e.target.value || null })}
          className={`mt-1.5 ${fieldClass}`}
        />
      </label>

      <div className="mt-4">
        <span className={labelClass}>{t.pace}</span>
        <div className="mt-2 flex flex-wrap gap-2">
          {paceOptions.map((option) => (
            <Chip
              key={option}
              active={draft.pace === option}
              onClick={() => setDraft({ ...draft, pace: draft.pace === option ? null : option })}
            >
              {t.paces[option]}
            </Chip>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <span className={labelClass}>{t.budget}</span>
        <div className="mt-2 flex flex-wrap gap-2">
          {budgetOptions.map((option) => (
            <Chip
              key={option}
              active={draft.budget === option}
              onClick={() =>
                setDraft({ ...draft, budget: draft.budget === option ? null : option })
              }
            >
              {t.budgets[option]}
            </Chip>
          ))}
        </div>
      </div>

      <label className="mt-4 block">
        <span className={labelClass}>{t.notes}</span>
        <textarea
          value={draft.notes ?? ""}
          maxLength={1500}
          rows={3}
          placeholder={t.notesPlaceholder}
          onChange={(e) => setDraft({ ...draft, notes: e.target.value || null })}
          className={`mt-1.5 resize-y ${fieldClass}`}
        />
      </label>

      <div className="mt-5 flex items-center gap-3">
        <button
          type="submit"
          disabled={busy}
          className="rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-onink transition hover:bg-royal disabled:opacity-50"
        >
          {t.save}
        </button>
        {hasProfile ? (
          <button
            type="button"
            onClick={() => setEditing(false)}
            className="text-sm font-semibold text-soft transition hover:text-ink"
          >
            ←
          </button>
        ) : null}
        {status === "saved" ? <span className="text-sm text-sage">{t.saved}</span> : null}
        {status === "error" ? (
          <span className="text-sm text-terracotta">
            {lang === "sk" ? "Nepodarilo sa uložiť." : "Could not save."}
          </span>
        ) : null}
      </div>
    </form>
  );
}
