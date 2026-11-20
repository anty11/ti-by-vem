import { test } from "node:test";
import assert from "node:assert/strict";
import { japanDayThirteenPlan as plan } from "./japan-day-thirteen-plan";
import { japanVenues } from "./japan-venues";

test("day thirteen stays in Tokyo", () => {
  assert.deepEqual(plan.cities, ["Tokyo"]);
});
test("teamLab Planets must be booked online ahead and starts from 3,800 yen", () => {
  assert.equal(plan.teamLabPlanets.soldOnSite, false);
  assert.equal(plan.teamLabPlanets.adultFromYen, 3800);
  assert.equal(plan.teamLabPlanets.refunds, false);
});
test("teamLab Borderless starts from 3,400 yen and costs 200 yen more at the door", () => {
  assert.equal(plan.teamLabBorderless.adultFromYen, 3400);
  assert.equal(plan.teamLabBorderless.doorSurchargeYen, 200);
});
test("the otter café opens at 13:00 on weekdays and charges 1,650 yen per 30 minutes", () => {
  assert.equal(plan.harry.weekdayOpens, "13:00");
  assert.equal(plan.harry.adult30MinYen, 1650);
  assert.equal(plan.harry.otterContactMinAge, 10);
});
test("there are three ramen dinners, each with a sourced score", () => {
  assert.equal(plan.ramenDinners.length, 3);
  for (const id of plan.ramenDinners) assert.ok(japanVenues[id].rating);
});
test("every venue in the plan exists in the venue list", () => {
  for (const id of [plan.teamLabPlanets.venue, plan.teamLabBorderless.venue, plan.harry.venue, plan.ralphs.venue, plan.hachigou.venue]) assert.ok(japanVenues[id]);
});
test("the recorded otter memory belongs to V", () => {
  assert.match(plan.recordedImpression.otters, /for V/);
});
