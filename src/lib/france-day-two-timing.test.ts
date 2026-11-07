import { test } from "node:test";
import assert from "node:assert/strict";
import { franceDayTwoArrivalTimes, franceDayTwoBoatHours } from "./france-day-two-timing";

for (const [stop, time] of [["breakfast", "07:40"], ["valensole", "09:06"], ["brunet", "09:18"], ["beach", "10:00"], ["moustiers", "13:30"]] as const) {
  test(`confirmed day 2 arrival at ${stop}`, () => assert.equal(franceDayTwoArrivalTimes[stop], time));
}
test("the canyon boat experience lasted about 2.5 hours", () => assert.equal(franceDayTwoBoatHours, 2.5));