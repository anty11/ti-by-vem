// Which AI model runs the trip agent, and how. Changing the model is a one-line edit here.
// Prices (USD per million tokens, input / output / cached input) on the Lovable AI gateway, Oct 2026:
//   openai/gpt-6-astra  10   / 50   / 1     — most expensive, previous default
//   openai/gpt-6-sol     2   / 10   / 0.2   — current default: ~5× cheaper, strong on trip questions
//   openai/gpt-6-luna    0.1 / 0.5  / 0.01  — ~100× cheaper, weaker on full re-plans
export const AGENT_MODEL = {
  model: "openai/gpt-6-sol",
  /** Thinking before answering is billed as output; most questions are answered from the package. */
  reasoningEffort: "low",
  /** Hard cap on the answer (reasoning included). A full 8-day re-plan fits comfortably. */
  maxOutputTokens: 1500,
} as const;
