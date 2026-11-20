import { test } from "node:test";
import assert from "node:assert/strict";
import { japanDaySixteenPlan as plan } from "./japan-day-sixteen-plan";
import { japanVenues } from "./japan-venues";

test("day sixteen is a Hakone day trip from Tokyo", () => {
  assert.deepEqual(plan.cities, ["Tokyo", "Hakone"]);
});
test("the recorded torii photo was the longest wait of the travellers' lives", () => {
  assert.match(plan.recordedImpression.torii, /longest we have ever waited for a photo/);
});
test("the Hakone Freepass costs 7,100 yen from Shinjuku and the Romancecar adds 1,200 yen each way", () => {
  assert.equal(plan.freepass.fromShinjukuTwoDayYen, 7100);
  assert.equal(plan.freepass.includesRoundTripFromShinjuku, true);
  assert.equal(plan.romancecar.surchargeYen, 1200);
});
test("black eggs cost 500 yen for four, are sold only at Owakudani and carry the seven-year legend", () => {
  assert.equal(plan.blackEggs.packYen, 500);
  assert.equal(plan.blackEggs.eggsPerPack, 4);
  assert.equal(plan.blackEggs.soldOnlyAtOwakudani, true);
  assert.equal(plan.blackEggs.yearsPerEggLegend, 7);
});
test("the ropeway costs 2,000 yen one way and has two winter maintenance closures", () => {
  assert.equal(plan.ropeway.oneWayYen, 2000);
  assert.equal(plan.ropeway.closures.length, 2);
});
test("the Lake Ashi cruise costs 1,700 yen one way and the torii is free", () => {
  assert.equal(plan.cruise.oneWayYen, 1700);
  assert.equal(plan.torii.entryYen, 0);
  assert.equal(plan.torii.builtYear, 1952);
});
test("every venue exists and both lunches carry a sourced score", () => {
  for (const id of [plan.blackEggs.venue, plan.torii.venue]) assert.ok(japanVenues[id]);
  for (const id of plan.lunches) assert.ok(japanVenues[id].rating);
});
