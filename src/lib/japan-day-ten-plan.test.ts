import { test } from "node:test";
import assert from "node:assert/strict";
import { japanDayTenPlan as plan } from "./japan-day-ten-plan";
import { japanVenues } from "./japan-venues";

test("day ten goes from Kawaguchiko via Fujiyoshida to Tokyo", () => {
  assert.deepEqual(plan.cities, ["Kawaguchiko", "Fujiyoshida", "Tokyo"]);
});
test("the Chureito Pagoda climb is 398 steps and free", () => {
  assert.equal(plan.chureito.steps, 398);
  assert.equal(plan.chureito.admissionYen, 0);
  assert.equal(plan.chureito.trainFromKawaguchikoYen, 310);
});
test("Tokyo transfer options keep dated per-person fares", () => {
  assert.equal(plan.toTokyo.shinjukuBus.yen, 2200);
  assert.equal(plan.toTokyo.shinjukuBus.webYen, 2000);
  assert.equal(plan.toTokyo.tokyoStationBus.yen, 2300);
  assert.equal(plan.toTokyo.fujiExcursion.yen, 4200);
  assert.equal(plan.toTokyo.fujiExcursion.yenFromShimoyoshida, 4010);
});
test("our recorded transfer was by bus", () => {
  assert.match(plan.recordedImpression.transfer, /by bus/);
});
test("our recorded pagoda impression says it looked like a prop", () => {
  assert.match(plan.recordedImpression.pagoda, /looked like a prop/);
  assert.match(plan.recordedImpression.pagoda, /nothing like the photographs/);
});
test("there are three dinner options near the hotel, each with a sourced score", () => {
  assert.equal(plan.dinners.length, 3);
  for (const id of plan.dinners) assert.ok(japanVenues[id].rating);
});
