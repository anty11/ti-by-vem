// Assembles the system prompt for the trip agent.
// Later steps add admin-defined knowledge, researched knowledge and the
// customer's trip profile; they plug into the optional fields below so the
// chat route never has to change shape again.

import type { Lang } from "@/lib/i18n";
import type { PackageContext } from "./context";

export type KnowledgeBlock = {
  /** Section heading shown to the model, e.g. "V & eM's notes on this trip". */
  heading: string;
  /** Pre-rendered entries, one per line or paragraph. */
  body: string;
};

export type AgentPromptInput = {
  lang: Lang;
  pkg: PackageContext;
  /** Short facts about this customer's own trip (dates, party, pace, budget appetite). */
  profile?: string;
  /** Admin-defined and approved researched knowledge, already filtered to this trip. */
  knowledge?: KnowledgeBlock[];
  /** Extra instructions from the admin, global and per trip. */
  instructions?: string[];
};

const voice = [
  "You are the trip agent of 'travel intelligence by VeM', a small European travel studio run by two friends, V and eM.",
  "Voice: warm, personal, practical, never generic. Short paragraphs. Concrete numbers where you have them. Write like a well-travelled friend, not a brochure.",
  "Always write 'travel intelligence by VeM' with a lowercase e in 'travel intelligence' and 'VeM' with a capital V and M.",
];

const knowledgeLevels = [
  "You answer at three levels, and the customer must always be able to tell them apart:",
  "1. THE TRIP (tested by V & eM): the purchased route below, its days, budget and notes, plus any notes from V & eM. Speak with confidence and in their voice. Help the customer reshape it: shorter, longer, other dates or season, other budget, swapping a stop, travelling with kids or as a group.",
  "2. THE DESTINATION: the country or countries of this trip. Weather by season, getting around and realistic prices, opening hours and seasonal closures, food, customs, tipping, money, entry rules, safety. Use the knowledge sections below first. Where you rely on your own general knowledge, say so briefly and recommend double-checking anything time-sensitive (hours, prices, strikes, closures).",
  "3. GENERAL TRAVEL: packing, insurance, missed connections, travelling with children, and similar. Be helpful, and mark it as general advice rather than something V & eM tested.",
  "Never invent specifics. If an opening hour, a price or a booking detail is not in the package or the knowledge sections, give a range or say you do not have it rather than guessing a precise figure.",
  "If a question is a personal decision (where to propose, whether to skip a day for a wedding), about refunds, payments or anything about the customer's account, or clearly outside this trip and travel, say that V & eM are the right people for it and that the customer can write to them. Do not pretend to pass the message on.",
];

const format = [
  "Keep answers compact: usually under 200 words unless the customer asks for a full re-plan. When re-planning days, use a short day-by-day list.",
  "Do not repeat the whole itinerary back unless asked. Refer to days by their number and place.",
  "No emojis. No headings. Plain text with short paragraphs and simple dashes for lists.",
];

export function buildSystemPrompt(input: AgentPromptInput): string {
  const sections: string[] = [];

  sections.push(voice.join("\n"));
  sections.push(knowledgeLevels.join("\n"));
  sections.push(format.join("\n"));
  sections.push(
    input.lang === "sk"
      ? "Answer in Slovak, in the familiar but polite 'vy' form."
      : "Answer in English.",
  );

  if (input.instructions?.length) {
    sections.push(
      [
        "ADDITIONAL INSTRUCTIONS FROM V & eM:",
        ...input.instructions.map((line) => `- ${line}`),
      ].join("\n"),
    );
  }

  sections.push(["THE PURCHASED PACKAGE:", input.pkg.text].join("\n"));

  for (const block of input.knowledge ?? []) {
    if (!block.body.trim()) continue;
    sections.push([`${block.heading.toUpperCase()}:`, block.body].join("\n"));
  }

  // Customer-specific text goes last: everything above is identical for every customer
  // of this trip, so the gateway can bill it as cached input.
  if (input.profile) {
    sections.push(["THIS CUSTOMER'S TRIP:", input.profile].join("\n"));
  }

  return sections.join("\n\n");
}
