import { test } from "node:test";
import assert from "node:assert/strict";
import { oktoberfestDaySevenPlan as plan } from "./oktoberfest-day-seven-timing";

test("Tre Cime parking arrival was 09:00", () => assert.equal(plan.parkingArrival, "09:00"));
test("the stated standard loop duration is approximately 3.5 hours", () => assert.equal(plan.standardLoopHours, 3.5));
test("the favourite views appeared after about 1.5 hours", () => assert.equal(plan.bestViewsAfterHours, 1.5));
test("lunch was at 14:30", () => assert.equal(plan.lunch, "14:30"));
test("the supplied cave latitude is north 46.59931", () => assert.equal(plan.cave.latitude, 46.59931));
test("the supplied cave longitude is east 12.27048", () => assert.equal(plan.cave.longitude, 12.27048));
test("the published 2026 car tariff is 40 euros", () => { assert.equal(plan.tollYear, 2026); assert.equal(plan.carTollEur, 40); });
test("the current parking system requires a reservation", () => assert.equal(plan.reservationRequired, true));
test("the current access ticket lasts 12 hours from booked entry", () => assert.equal(plan.tollValidityHours, 12));