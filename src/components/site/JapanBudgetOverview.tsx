import { japanBudget as budget } from "@/lib/japan-budget";

const pp = (category: string) => (budget.allowances.find(item => item.category === category)?.amount ?? 0) / budget.travellers;
const eur = (value: number) => `€${value.toLocaleString("en-US")}`;

export function JapanBudgetOverview() {
  return <div className="mt-4 border-l-2 border-terracotta pl-4 text-sm leading-relaxed text-soft">
    <p><strong className="text-ink">Planning estimate · ~{eur(budget.perPerson)} per person · eighteen days, {budget.nights} nights.</strong> Based on two people sharing a room. A provisional allowance for this mix of city hotels and one special onsen night under Mt. Fuji, not our actual spending or current hotel quotes. Flights, shopping and the street-kart tour are extra.</p>
    <ul className="mt-3 space-y-2">
      <li><strong className="text-ink">Stay · {eur(pp("stay"))} per person:</strong> four nights in Osaka, four in Kyoto, one night at Ubuya with dinner and breakfast and eight in Tokyo. Ubuya alone can use around €350 per person. Tokyo and the Fuji night move most with season and room category.</li>
      <li><strong className="text-ink">Transport · {eur(pp("transport"))} per person:</strong> the Kansai Airport transfer, the Hiroshima, Kurashiki and Kobe rail day, Kyoto, Nara, the Shinkansen and bus to Kawaguchiko, the bus to Tokyo, the Hakone Freepass with Romancecar, Kamakura, the train to Narita and daily metro rides. If you buy a rail pass, count it here once and not again for each ride.</li>
      <li><strong className="text-ink">Food & drinks · {eur(pp("food"))} per person:</strong> breakfasts, lunches, dinners, sweets and drinks over eighteen days, including the Kobe wagyu dinner, MATT, K36 and the Sherwood Garden breakfast. The dinner and breakfast at Ubuya are counted under stay, not again here.</li>
      <li><strong className="text-ink">Activities · {eur(pp("activities"))} per person:</strong> three teamLab museums, a Tokyo Disneyland ticket, SHIBUYA SKY, the MAIKOYA kimono tea ceremony, the ring and perfume workshops, the HARRY otters and temple entries. Premier Access passes at Disneyland come on top if you choose them.</li>
      <li><strong className="text-ink">Buffer · {eur(pp("other"))} per person:</strong> coin lockers, luggage forwarding, umbrellas and small surprises.</li>
    </ul>
    <p className="mt-3">Japan is a country where shopping quietly becomes the biggest line. Set your own amount for it. Adjust these allowances to your confirmed bookings. Your saved expenses and plans are unchanged, revised allowances apply only to new budgets.</p>
  </div>;
}
