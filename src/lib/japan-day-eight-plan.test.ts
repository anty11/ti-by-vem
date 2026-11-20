import { test } from "node:test";
import assert from "node:assert/strict";
import { japanDayEightPlan as plan } from "./japan-day-eight-plan";
import { japanVenues } from "./japan-venues";

test("day eight stays in Kyoto", () => {
  assert.deepEqual(plan.cities, ["Kyoto"]);
});
test("the tea ceremony plan includes dressing and hair, with the kimono back by 18:00", () => {
  assert.equal(plan.teaCeremony.hairStylingIncluded, true);
  assert.equal(plan.teaCeremony.kimonoReturnBy, "18:00");
  assert.equal(plan.teaCeremony.sharedPlanFromYenBeforeTax, 7000);
});
test("Kiyomizu-dera admission is 500 yen per adult", () => {
  assert.equal(plan.kiyomizuAdmissionYen, 500);
});
test("Rokujuan flower warabi mochi keeps its menu price", () => {
  assert.equal(plan.rokujuan.hanawarabiYen, 1700);
  assert.equal(plan.rokujuan.hanawarabiWithMatchaYen, 2000);
});
test("K36 charges a per-person cover and a service charge", () => {
  assert.equal(plan.k36.coverChargeYenPerPerson, 1100);
  assert.equal(plan.k36.serviceChargePercent, 10);
});
test("the recorded dinner is MATT RESTAURANT 2.0 with its sourced listing score", () => {
  assert.equal(plan.dinner, "MATT RESTAURANT 2.0");
  assert.equal(japanVenues.mattRestaurant.rating, 4.6);
});
test("the kimono walk is recorded as our own tip", () => {
  assert.match(plan.recordedImpression.kimonoWalk, /Do not go straight back/);
});
