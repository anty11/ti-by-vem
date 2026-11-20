import { test } from "node:test";
import assert from "node:assert/strict";
import { japanDaySixPlan as plan } from "./japan-day-six-plan";
import { japanVenues } from "./japan-venues";

test("day six stays in Kyoto", () => {
  assert.deepEqual(plan.cities, ["Kyoto"]);
});
test("the bamboo grove is planned for an early start before 7:30", () => {
  const [h, m] = plan.timing.bambooGroveBy.split(":").map(Number);
  assert.ok((h ?? 99) * 60 + (m ?? 0) < 7 * 60 + 30);
});
test("the recorded bamboo grove impression stays honest", () => {
  assert.match(plan.recordedImpression.bambooGrove, /Overrated/);
});
test("Arashiyama rail options keep dated per-person fares", () => {
  assert.equal(plan.arashiyamaOptions.find((o) => o.id === "jr")?.yen, 240);
  assert.equal(plan.arashiyamaOptions.find((o) => o.id === "randen")?.yen, 250);
  assert.equal(plan.returnToHigashiyama.yen, 240);
});
test("Tenryu-ji garden admission is 500 yen with buildings 300 yen extra", () => {
  assert.equal(plan.tenryuji.gardenYen, 500);
  assert.equal(plan.tenryuji.buildingsExtraYen, 300);
});
test("both workshops are booked ahead", () => {
  assert.equal(plan.workshops.ring.bookAhead, true);
  assert.equal(plan.workshops.perfume.bookAhead, true);
  assert.equal(plan.workshops.ring.silverFromYen, 5200);
  assert.equal(plan.workshops.perfume.fromYen, 6500);
});
test("three distinct dinner options retain sourced listing scores", () => {
  assert.equal(new Set(plan.dinnerOptions).size, 3);
  assert.equal(japanVenues.masaichi.rating, 4.8);
  assert.equal(japanVenues.gionWa.rating, 4.9);
  assert.equal(japanVenues.hiramatsuKodaiji.rating, 4.5);
});
