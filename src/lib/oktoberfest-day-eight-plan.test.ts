import { test } from "node:test";
import assert from "node:assert/strict";
import { oktoberfestDayEightPlan as plan } from "./oktoberfest-day-eight-plan";

test("the planned bridge hike was skipped by V & eM due to snow", () => assert.equal(plan.completedByVem, false));
test("the direct Olpererhütte approach follows trail 502", () => assert.equal(plan.trailNumber, 502));
test("the official return walk is 6.1 kilometres", () => assert.equal(plan.distanceKm, 6.1));
test("the official ascent is 600 metres", () => assert.equal(plan.ascentMetres, 600));
test("the official ascent allowance is 1.5 hours", () => assert.equal(plan.ascentHours, 1.5));
test("the official return walking time is 3 hours", () => assert.equal(plan.walkingHours, 3));
test("the 2026 standard Schlegeis car toll is 19 euros", () => { assert.equal(plan.tariffYear, 2026); assert.equal(plan.tollEur, 19); });