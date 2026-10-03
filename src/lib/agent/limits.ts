// Usage limits for the trip agent. Changing a number here is the whole tuning.
export const CHAT_LIMITS = {
  /** Customer messages per purchased trip, for the lifetime of the access code. */
  perTrip: 150,
  /** Customer messages per rolling 24 hours, across all their trips. Abuse protection. */
  perDay: 40,
  /** Messages (both roles) loaded as conversation context for the model. */
  historyForModel: 20,
  /** Messages shown in the trip room on open. */
  historyShown: 200,
  /** Characters per customer message. */
  messageChars: 2000,
  /** Fraction of the per-trip budget after which the UI shows a gentle notice. */
  warnAt: 0.8,
} as const;
