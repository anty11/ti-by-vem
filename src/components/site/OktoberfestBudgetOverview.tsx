import { oktoberfestBudget as budget } from "@/lib/oktoberfest-budget";

export function OktoberfestBudgetOverview() {
  return <div className="mt-4 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft">
    <p><strong className="text-ink">Planning estimate · ~€{budget.perPerson.toLocaleString("en-US")} per person · eight days, seven nights.</strong> Based on two people sharing a room and car. A provisional allowance for this mix of simple road-trip stays and two special nights at Chalet al Foss, not our actual spending or current hotel quotes.</p>
    <ul className="mt-3 space-y-2">
      <li><strong className="text-ink">Stay · €1,150 per person:</strong> allow roughly €600 per person for two Chalet al Foss nights and €550 per person for the other five nights combined. Room category and season can change this substantially.</li>
      <li><strong className="text-ink">Transport · €400 per person:</strong> fuel, motorway vignettes, tolls, parking and local transfers during the itinerary. Car hire, flights and the journey to Munich or from Tux to your home are extra.</li>
      <li><strong className="text-ink">Food & drinks · €450 per person:</strong> breakfasts not included in room rates, lunches, dinners, snacks and drinks. Do not count included hotel meals twice.</li>
      <li><strong className="text-ink">Activities · €250 per person:</strong> alpaca breakfast or another Chalet al Foss experience, Seceda lift tickets, villa gardens and Lago di Braies boats. Confirm the hotel's actual experience price before booking, as it can use much of this allowance.</li>
      <li><strong className="text-ink">Buffer · €150 per person:</strong> small unexpected costs. Shopping and additional premium hotel experiences are extra.</li>
    </ul>
    <p className="mt-3">Tre Cime road access belongs under transport, not again under activities. Adjust these amounts to your confirmed bookings. Your existing saved expenses and plans are unchanged, revised allowances apply only to new budgets.</p>
  </div>;
}