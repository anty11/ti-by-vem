import { test } from "node:test";
import assert from "node:assert/strict";
import { japanDaySevenPlan as plan } from "./japan-day-seven-plan";
import { japanVenues } from "./japan-venues";

test("day seven goes from Kyoto to Nara and back to Kyoto", () => {
  assert.deepEqual(plan.cities, ["Kyoto", "Nara", "Kyoto"]);
});
test("one pack of deer crackers is enough and valuables stay behind", () => {
  assert.equal(plan.deerSafety.crackerPacksPerPerson, 1);
  assert.equal(plan.deerSafety.leaveValuablesAtHotel, true);
});
test("Nara rail options keep dated per-person fares", () => {
  assert.equal(plan.toNara.find((o) => o.id === "kintetsu")?.yen, 760);
  assert.equal(plan.toNara.find((o) => o.id === "jr")?.yen, 720);
  assert.equal(plan.backToKyoto.yen, 760);
});
test("Todai-ji and Kasuga admissions match the official fees", () => {
  assert.equal(plan.admissions.todaijiGreatBuddhaHallYen, 800);
  assert.equal(plan.admissions.kasugaInnerSanctuaryYen, 700);
});
test("the recorded dinner is koisus with its sourced listing score", () => {
  assert.equal(plan.dinner, "koisus");
  assert.equal(japanVenues.koisus.rating, 4.7);
});
test("Le Labo is recorded for its coffee, not as a highlight", () => {
  assert.match(plan.recordedImpression.leLabo, /did not win us over/);
});
