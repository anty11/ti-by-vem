import { test } from "node:test";
import assert from "node:assert/strict";
import { japanDayNinePlan as plan } from "./japan-day-nine-plan";
import { japanVenues } from "./japan-venues";

test("day nine goes from Kyoto through Mishima to Kawaguchiko", () => {
  assert.deepEqual(plan.cities, ["Kyoto", "Mishima", "Kawaguchiko"]);
});
test("Fushimi Inari is free and a 150 yen JR ride from Kyoto Station", () => {
  assert.equal(plan.fushimiInari.admissionYen, 0);
  assert.equal(plan.fushimiInari.jrFromKyotoYen, 150);
});
test("the Mishima route keeps dated per-person train and bus fares", () => {
  assert.equal(plan.toKawaguchiko.mishima.trainYenReserved, 11510);
  assert.equal(plan.toKawaguchiko.mishima.busYen, 2700);
});
test("Ubuya serves no dinner after the 19:00 seating", () => {
  assert.equal(plan.ubuya.lastDinnerSeating, "19:00");
});
test("Ubuya's steak course is recorded as paused, so guests choose between buffet and shabu-shabu", () => {
  assert.equal(plan.ubuya.steakCoursePaused, true);
  assert.deepEqual(plan.ubuya.dinnerChoices, ["Buffet", "Tsuyu-dashi shabu-shabu"]);
});
test("the dinner warning keeps our recorded mistake", () => {
  assert.match(plan.recordedImpression.dinner, /by mistake/);
});
test("Ubuya keeps its sourced listing score", () => {
  assert.equal(japanVenues.ubuya.rating, 4.4);
});
test("our white strawberries came from Kawaguchiko Station", () => {
  assert.equal(plan.souvenirs.whiteStrawberryBoughtAt, "Kawaguchiko Station");
});
