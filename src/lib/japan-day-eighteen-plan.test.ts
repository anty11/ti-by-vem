import { test } from "node:test";
import assert from "node:assert/strict";
import { japanDayEighteenPlan as plan } from "./japan-day-eighteen-plan";

test("tax-free goods travel in hand luggage for the customs check", () => {
  assert.equal(plan.taxFree.goodsInHandLuggage, true);
  assert.equal(plan.taxFree.minimumPerShopPerDayYen, 5000);
});
test("the EU allowance for air travellers is 430 euros per person", () => {
  assert.equal(plan.euAllowance.airTravellerEur, 430);
  assert.equal(plan.euAllowance.spiritsLitres, 1);
});
test("hand-luggage liquids are limited to 100 ml", () => {
  assert.equal(plan.liquidsMaxMl, 100);
});
