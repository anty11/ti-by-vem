import { test } from "node:test";
import assert from "node:assert/strict";
import { japanDayTwoPlan as plan } from "./japan-day-two-plan";
import { japanVenues } from "./japan-venues";

test("the ended EXPO is a memory, not a current day-two stop", () => {
  assert.equal(plan.expoIsCurrentStop, false);
  assert.equal(plan.expoClosedOn, "2025-10-13");
});
test("the proposed walk avoids Sanno and Tobita Shinchi", () => {
  assert.deepEqual(plan.avoid, ["Sanno", "Tobita Shinchi"]);
  for (const stop of plan.avoid) assert.equal((plan.walk as readonly string[]).includes(stop), false);
  assert.equal(plan.walk.at(-1), "Dobutsuen-mae Station");
});
test("three separate dinner options are provided near Nagai", () => {
  assert.equal(new Set(plan.dinnerOptions).size, 3);
  for (const id of plan.dinnerOptions) assert.ok(japanVenues[id].maps.includes("maps"));
});
test("Nagai venue rating snapshots match the sourced listings", () => {
  assert.equal(japanVenues.shushuNagai.rating, 4.7);
  assert.equal(japanVenues.matasaburo.rating, 4.5);
  assert.equal(japanVenues.utageNagai.rating, 4.8);
});