import { oktoberfestBudget as budget } from "@/lib/oktoberfest-budget";

export function OktoberfestBudgetOverview() {
  return <div className="mt-4 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft">
    <p><strong className="text-ink">Planning estimate for two · ~€{budget.total.toLocaleString("en-US")} · eight days, seven nights.</strong> A provisional allowance for this mix of simple road-trip stays and two special nights at Chalet al Foss, not our actual spending or current hotel quotes.</p>
    <ul className="mt-3 space-y-2">
      <li><strong className="text-ink">Stay · €2,300:</strong> allow roughly €1,200 of this for two Chalet al Foss nights and €1,100 for the other five nights combined. Room category and season can change this substantially.</li>
      <li><strong className="text-ink">Transport · €800:</strong> fuel, motorway vignettes, tolls, parking and local transfers during the itinerary. Car hire, flights and the journey to Munich or from Tux to your home are extra.</li>
      <li><strong className="text-ink">Food & drinks · €900:</strong> breakfasts not included in room rates, lunches, dinners, snacks and drinks. Do not count included hotel meals twice.</li>
      <li><strong className="text-ink">Activities · €500:</strong> alpaca breakfast or another Chalet al Foss experience, Seceda lift tickets, villa gardens and Lago di Braies boats. Confirm the hotel's actual experience price before booking, as it can use much of this allowance.</li>
      <li><strong className="text-ink">Buffer · €300:</strong> small unexpected costs. Shopping and additional premium hotel experiences are extra.</li>
    </ul>
    <p className="mt-3">Tre Cime road access belongs under transport, not again under activities. Adjust these amounts to your confirmed bookings. Your existing saved expenses and plans are unchanged, revised allowances apply only to new budgets.</p>
  </div>;
}