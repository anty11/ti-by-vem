// Provisional planning allowances for two travellers, not actual spending or quotes.
export const oktoberfestBudget = {
  travellers: 2,
  total: 4800,
  perPerson: 2400,
  allowances: [
    { category: "stay", amount: 2300 },
    { category: "transport", amount: 800 },
    { category: "food", amount: 900 },
    { category: "activities", amount: 500 },
    { category: "other", amount: 300 },
  ],
} as const;