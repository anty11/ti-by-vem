// Provisional planning allowances for two travellers sharing a room, not actual spending or quotes.
// Flights, shopping and the optional street-kart tour are excluded.
export const japanBudget = {
  travellers: 2,
  nights: 17,
  total: 8400,
  perPerson: 4200,
  allowances: [
    { category: "stay", amount: 4200 },
    { category: "transport", amount: 800 },
    { category: "food", amount: 2400 },
    { category: "activities", amount: 700 },
    { category: "other", amount: 300 },
  ],
} as const;
