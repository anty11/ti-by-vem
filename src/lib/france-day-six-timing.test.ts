import { test } from "node:test";
import assert from "node:assert/strict";
import { franceDaySixTimes } from "./france-day-six-timing";

for (const [stop, time] of [["leaveNice", "09:45"], ["eze", "11:30"], ["rivieraLunch", "13:00"], ["menton", "17:00"], ["monaco", "18:30"], ["fireworks", "22:00"]] as const) {
  test(`confirmed day 6 time at ${stop}`, () => assert.equal(franceDaySixTimes[stop], time));
}