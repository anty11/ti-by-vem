import { test } from "node:test";
import assert from "node:assert/strict";
import { oktoberfestDayFiveTimes as times, secedaLiftRequiresReservation } from "./oktoberfest-day-five-timing";

test("Seceda lift does not require an advance reservation", () => assert.equal(secedaLiftRequiresReservation, false));

test("alpaca breakfast starts at the recorded 08:30", () => assert.equal(times.breakfastStart, "08:30"));
test("alpaca breakfast ends at the recorded 09:30", () => assert.equal(times.breakfastEnd, "09:30"));
test("recorded Seceda arrival is 13:30", () => assert.equal(times.seceda, "13:30"));
test("Seceda walk lasts about one hour", () => assert.equal(times.mountainWalkMinutes, 60));
test("unhurried Santa Maddalena walk lasts about 1.5 hours", () => assert.equal(times.villageWalkMinutes, 90));