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