import { test } from "node:test";
import assert from "node:assert/strict";
import { japanDayFourteenPlan as plan } from "./japan-day-fourteen-plan";
import { japanVenues } from "./japan-venues";

test("day fourteen stays in Tokyo", () => {
  assert.deepEqual(plan.cities, ["Tokyo"]);
});
test("the travellers did not go karting because they had no permits", () => {
  assert.equal(plan.karted, false);
  assert.match(plan.recordedImpression.kartTip, /did not have the permits/);
});
test("Japan only accepts the 1949 Geneva permit, never the Vienna one", () => {
  assert.equal(plan.kart.permitConvention, "1949 Geneva");
  assert.equal(plan.kart.viennaPermitAccepted, false);
  assert.equal(plan.kart.minAge, 18);
  assert.equal(plan.kart.refundWithoutDocuments, false);
});
test("the Slovak permit costs 10 euros and is issued on the spot", () => {
  assert.equal(plan.slovakPermit.feeEur, 10);
  assert.equal(plan.slovakPermit.issuedOnTheSpot, true);
});
test("the Shibuya kart course is one hour from 13,500 yen with free cancellation up to 7 days before", () => {
  assert.equal(plan.kart.courseMinutes, 60);
  assert.equal(plan.kart.fromYen, 13500);
  assert.equal(plan.kart.freeCancellationDays, 7);
});
test("the Roastery opens at 08:00 and a timed ticket does not guarantee a seat", () => {
  assert.equal(plan.roastery.opens, "08:00");
  assert.equal(plan.roastery.lastOrder, "21:30");
  assert.equal(plan.roastery.ticketGuaranteesSeat, false);
});
test("MEGA Don Quijote Shibuya is open 24 hours with beauty on the third floor", () => {
  assert.equal(plan.cosmetics.open24Hours, true);
  assert.equal(plan.cosmetics.beautyFloor, "3F");
});
test("every venue in the plan exists and both dinners carry a sourced score", () => {
  for (const id of [plan.roastery.venue, plan.cosmetics.venue, plan.kart.venue]) assert.ok(japanVenues[id]);
  for (const id of plan.dinners) assert.ok(japanVenues[id].rating);
});
