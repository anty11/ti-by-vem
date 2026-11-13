import { test } from "node:test";
import assert from "node:assert/strict";
import { oktoberfestDaySixTimes as times } from "./oktoberfest-day-six-timing";

test("breakfast at Fallerhof starts at the recorded 08:00", () => assert.equal(times.breakfast, "08:00"));
test("breakfast was paid extra at about 10 euros in cash", () => assert.equal(times.breakfastPriceEur, 10));
test("Val di Funes hike started from the car park around 10:00", () => assert.equal(times.hikeStart, "10:00"));
test("first hut was reached around 12:00", () => assert.equal(times.firstHut, "12:00"));
test("the whole Val di Funes hike took about 4.5 hours there and back", () => assert.equal(times.hikeTotalHours, 4.5));
test("Lago di Braies boats were rented around 16:30", () => assert.equal(times.braiesBoats, "16:30"));
test("rowing on Lago di Braies lasted one hour", () => assert.equal(times.rowingMinutes, 60));
