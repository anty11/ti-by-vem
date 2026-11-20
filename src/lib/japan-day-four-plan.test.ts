import { test } from "node:test";
import assert from "node:assert/strict";
import { japanDayFourPlan as plan } from "./japan-day-four-plan";

test("day four retains the recorded Namba shopping, Gorichan and Octave evening", () => {
  assert.deepEqual(plan.recordedStops, ["Namba", "BOOKOFF shopping", "Shinsaibashi", "Yakiniku Gorichan", "Octave"]);
});
test("the recorded vanilla sweet is fish-shaped taiyaki, not a waffle", () => {
  assert.deepEqual(plan.recordedSweets, ["Rikuro Ojisan cheesecake", "fruit daifuku", "taiyaki with vanilla custard cream"]);
  assert.equal(plan.taiyaki.name, "Taiyaki");
  assert.equal(plan.taiyaki.japanese, "たい焼き");
  assert.equal(plan.taiyaki.filling, "vanilla custard cream");
  assert.equal(plan.taiyaki.shape, "warm fish-shaped pastry");
});
test("no recorded sweet is described as a waffle", () => {
  assert.equal(plan.recordedSweets.some(sweet => /waffle/i.test(sweet)), false);
  assert.equal(Object.keys(plan).some(key => /waffle/i.test(key)), false);
});
test("day four offers Himeji, Koya-san and Arima Onsen as three distinct day trips", () => {
  assert.deepEqual(plan.dayTrips.map(trip => [trip.name, trip.start, trip.end]), [
    ["Himeji", "Osaka Station", "Himeji Station"],
    ["Koya-san", "Osaka-Namba Station", "Gokurakubashi Station"],
    ["Arima Onsen", "Osaka-Umeda Station", "Arima Onsen Station"],
  ]);
  assert.equal(new Set(plan.dayTrips.map(trip => trip.id)).size, 3);
});
test("Kyoto and Nara are not offered because the travellers visit them later", () => {
  const names = plan.dayTrips.map(trip => trip.name).join(" ").toLowerCase();
  const stops = plan.dayTrips.map(trip => trip.stops.join(" ")).join(" ").toLowerCase();
  assert.equal(names.includes("kyoto"), false);
  assert.equal(names.includes("nara"), false);
  assert.equal(stops.includes("kyoto"), false);
  assert.equal(stops.includes("nara"), false);
});
test("every day trip carries official visitor and ticket sources", () => {
  for (const trip of plan.dayTrips) {
    assert.match(trip.official, /^https:\/\//);
    assert.match(trip.railway, /^https:\/\//);
    assert.ok(trip.stops.length >= 2);
  }
});
