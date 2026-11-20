import { test } from "node:test";
import assert from "node:assert/strict";
import { japanDayElevenPlan as plan } from "./japan-day-eleven-plan";
import { japanVenues } from "./japan-venues";

test("day eleven stays in Tokyo", () => {
  assert.deepEqual(plan.cities, ["Tokyo"]);
});
test("SHIBUYA SKY sunset slots cost more after 15:00 and open two weeks ahead", () => {
  assert.equal(plan.shibuyaSky.webYenBefore15, 2700);
  assert.equal(plan.shibuyaSky.webYenFrom15, 3400);
  assert.equal(plan.shibuyaSky.salesOpenDaysAhead, 14);
});
test("tax-free shopping becomes an airport refund with a 5,000 yen minimum", () => {
  assert.equal(plan.taxFree.refundAtAirportFrom, "1 November 2026");
  assert.equal(plan.taxFree.minimumPerShopPerDayYen, 5000);
});
test("the shopping tip keeps our recorded petite-size experience", () => {
  assert.match(plan.recordedImpression.shopping, /160 cm/);
});
test("there are three dinner options near SHIBUYA SKY, each with a sourced score", () => {
  assert.equal(plan.dinners.length, 3);
  for (const id of plan.dinners) assert.ok(japanVenues[id].rating);
});
test("the breakfast venue exists in the venue list", () => {
  assert.ok(japanVenues[plan.breakfastVenue]);
});
