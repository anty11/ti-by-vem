import { test } from "node:test";
import assert from "node:assert/strict";
import { japanDayFourPlan as plan } from "./japan-day-four-plan";

test("day four retains the recorded Namba shopping, Gorichan and Octave evening", () => {
  assert.deepEqual(plan.recordedStops, ["Namba", "BOOKOFF shopping", "Shinsaibashi", "Yakiniku Gorichan", "Octave"]);
});
test("travellers can choose three distinct day trips instead of another Osaka day", () => {
  assert.deepEqual(plan.dayTrips.map(trip => trip.name), ["Nara", "Kyoto", "Himeji"]);
  assert.equal(new Set(plan.dayTrips.map(trip => trip.id)).size, 3);
});
test("the recorded vanilla sweet is fish-shaped taiyaki, not a waffle", () => {
  assert.deepEqual(plan.recordedSweets, ["Rikuro Ojisan cheesecake", "fruit daifuku", "taiyaki with vanilla custard cream"]);
  assert.equal(plan.taiyaki.name, "Taiyaki");
  assert.equal(plan.taiyaki.japanese, "たい焼き");
  assert.equal(plan.taiyaki.filling, "vanilla custard cream");
  assert.equal(plan.taiyaki.shape, "warm fish-shaped pastry");
});
test("no recorded sweet is described as a waffle", () => {
  assert.equal(plan.recordedSweets.some(sweet => /waffle/i.test(sweet)), false);
  assert.equal(Object.keys(plan).some(key => /waffle/i.test(key)), false);
});
