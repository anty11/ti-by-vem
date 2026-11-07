import { test } from "node:test";
import assert from "node:assert/strict";
import { franceDayFiveTimes } from "./france-day-five-timing";

for (const [stop, time] of [["breakfast", "08:00"], ["portGrimaud", "10:23"], ["sainteMaxime", "11:50"], ["perfumeWorkshop", "14:00"], ["nice", "16:50"], ["beachFinish", "20:00"]] as const) {
  test(`confirmed day 5 time at ${stop}`, () => assert.equal(franceDayFiveTimes[stop], time));
}