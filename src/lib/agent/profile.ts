// The customer's own trip profile: shared shape for the form, the server
// functions and the prompt. Pure, no environment access.

import type { Lang } from "@/lib/i18n";

export const paceOptions = ["relaxed", "balanced", "full"] as const;
export const budgetOptions = ["save", "as_planned", "splurge"] as const;

export type Pace = (typeof paceOptions)[number];
export type BudgetAppetite = (typeof budgetOptions)[number];

export type TripProfile = {
  travelStart: string | null;
  travelEnd: string | null;
  party: string | null;
  pace: Pace | null;
  budget: BudgetAppetite | null;
  notes: string | null;
};

export const emptyProfile: TripProfile = {
  travelStart: null,
  travelEnd: null,
  party: null,
  pace: null,
  budget: null,
  notes: null,
};

export function isPace(value: unknown): value is Pace {
  return typeof value === "string" && (paceOptions as readonly string[]).includes(value);
}

export function isBudget(value: unknown): value is BudgetAppetite {
  return typeof value === "string" && (budgetOptions as readonly string[]).includes(value);
}

const paceText: Record<Pace, string> = {
  relaxed: "relaxed pace, fewer things per day, long lunches",
  balanced: "balanced pace, as V & eM travelled it",
  full: "full-on pace, happy to start early and see as much as possible",
};

const budgetText: Record<BudgetAppetite, string> = {
  save: "wants to spend less than the package estimate where sensible",
  as_planned: "comfortable with the package budget",
  splurge: "open to spending more for one or two special moments",
};

function daysBetween(start: string, end: string): number | null {
  const a = new Date(start).getTime();
  const b = new Date(end).getTime();
  if (Number.isNaN(a) || Number.isNaN(b) || b < a) return null;
  return Math.round((b - a) / 86_400_000) + 1;
}

/** Renders the profile as plain lines for the system prompt; null when nothing is filled in. */
export function profileToPrompt(profile: TripProfile, packageDays: number): string | null {
  const lines: string[] = [];

  if (profile.travelStart && profile.travelEnd) {
    const days = daysBetween(profile.travelStart, profile.travelEnd);
    lines.push(
      `Travel dates: ${profile.travelStart} to ${profile.travelEnd}` +
        (days
          ? ` (${days} days; the package is ${packageDays} days — adapt the route to the customer's length when it differs)`
          : ""),
    );
  } else if (profile.travelStart) {
    lines.push(`Travel start: ${profile.travelStart}`);
  }
  if (profile.party) lines.push(`Travelling: ${profile.party}`);
  if (profile.pace) lines.push(`Pace: ${paceText[profile.pace]}`);
  if (profile.budget) lines.push(`Budget appetite: ${budgetText[profile.budget]}`);
  if (profile.notes) lines.push(`Notes from the customer: ${profile.notes}`);

  if (!lines.length) return null;
  lines.push(
    "Use these facts without asking for them again. Mention the customer's dates when the season matters (weather, closures, prices).",
  );
  return lines.join("\n");
}

export const profileCopy: Record<
  Lang,
  {
    title: string;
    intro: string;
    start: string;
    end: string;
    party: string;
    partyPlaceholder: string;
    pace: string;
    paces: Record<Pace, string>;
    budget: string;
    budgets: Record<BudgetAppetite, string>;
    notes: string;
    notesPlaceholder: string;
    save: string;
    saved: string;
    edit: string;
    empty: string;
  }
> = {
  en: {
    title: "Your trip",
    intro:
      "Tell the agent about your own dates and travellers once — every answer is then shaped around them.",
    start: "From",
    end: "To",
    party: "Who is travelling",
    partyPlaceholder: "2 adults, or a family with kids 6 and 9",
    pace: "Pace",
    paces: { relaxed: "Relaxed", balanced: "As V & eM did it", full: "See everything" },
    budget: "Budget",
    budgets: { save: "Save where we can", as_planned: "As planned", splurge: "Room to splurge" },
    notes: "Anything else",
    notesPlaceholder: "Vegetarian, no long hikes, we want one proper spa evening…",
    save: "Save",
    saved: "Saved",
    edit: "Edit",
    empty: "Not set yet",
  },
  sk: {
    title: "Vaša cesta",
    intro:
      "Povedzte agentovi raz o svojich termínoch a spolucestujúcich — každá odpoveď sa potom prispôsobí.",
    start: "Od",
    end: "Do",
    party: "Kto cestuje",
    partyPlaceholder: "2 dospelí, alebo rodina s deťmi 6 a 9",
    pace: "Tempo",
    paces: { relaxed: "Pohodové", balanced: "Ako V & eM", full: "Vidieť všetko" },
    budget: "Rozpočet",
    budgets: { save: "Šetriť, kde sa dá", as_planned: "Podľa plánu", splurge: "Priestor na luxus" },
    notes: "Čokoľvek ďalšie",
    notesPlaceholder: "Vegetariáni, bez dlhých túr, chceme jeden poriadny wellness večer…",
    save: "Uložiť",
    saved: "Uložené",
    edit: "Upraviť",
    empty: "Zatiaľ nevyplnené",
  },
};
