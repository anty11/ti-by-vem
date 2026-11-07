// Planning allowances for two travellers, not V & eM's actual spending.
export const franceBudget = {
  total: 6000,
  allowances: [
    { category: "stay", amount: 1800 },
    { category: "transport", amount: 1000 },
    { category: "food", amount: 2200 },
    { category: "activities", amount: 700 },
    { category: "other", amount: 300 },
  ],
} as const;