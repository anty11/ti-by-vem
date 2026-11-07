import { test } from "node:test";
import assert from "node:assert/strict";
import { franceDayOneTimeline } from "./france-guide";

for (const [id, time] of [
  ["arrival", "09:00"], ["car", "10:00"], ["marseille", "11:00"],
  ["avignon", "14:00"], ["sorgue", "15:50"], ["gordes", "17:00"],
  ["roussillon", "18:30"], ["dinner", "19:40"],
]) {
  test(`confirmed day 1 time for ${id}`, () => {
    assert.equal(franceDayOneTimeline.find((entry) => entry.id === id)?.time, time);
  });
}