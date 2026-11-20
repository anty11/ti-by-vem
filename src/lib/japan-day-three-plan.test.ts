import { test } from "node:test";
import assert from "node:assert/strict";
import { japanDayThreePlan as plan } from "./japan-day-three-plan";
import { japanVenues } from "./japan-venues";

test("day three preserves Hiroshima, Kurashiki and Kobe before Osaka return", () => {
  assert.deepEqual(plan.cities, ["Osaka", "Hiroshima", "Kurashiki", "Kobe", "Osaka"]);
});
test("Kurashiki uses the local connection at Okayama, not Shin-Kurashiki", () => {
  assert.equal(plan.kurashikiInterchange, "Okayama");
  assert.equal(plan.kurashikiLocalStation, "Kurashiki");
});
test("the family testimony experience is not guaranteed to other visitors", () => {
  assert.equal(plan.familyTestimonyGuaranteed, false);
});
test("three distinct Kobe steak options retain sourced listing scores", () => {
  assert.equal(new Set(plan.dinnerOptions).size, 3);
  assert.equal(japanVenues.royalMouriya.rating, 4.8);
  assert.equal(japanVenues.ishidaMain.rating, 4.8);
  assert.equal(japanVenues.steaklandKobe.rating, 4.2);
});
test("dated adult admission and regional pass figures stay per person", () => {
  assert.equal(plan.museumAdultYen, 200);
  assert.equal(plan.canalAdultYen, 1000);
  assert.equal(plan.regionalPassAdultYen, 17000);
  assert.equal(plan.regionalPassDays, 5);
});