import { test } from "node:test";
import assert from "node:assert/strict";
import { japanDayTwelvePlan as plan } from "./japan-day-twelve-plan";
import { japanVenues } from "./japan-venues";

test("day twelve is a rail loop through Kamakura, Enoshima and Yokohama back to Tokyo", () => {
  assert.deepEqual(plan.cities, ["Kamakura", "Enoshima", "Yokohama", "Tokyo"]);
});
test("the micro pig café costs 1,100 yen per 30 minutes and opens at 11:00", () => {
  assert.equal(plan.pigPark.yenPer30Min, 1100);
  assert.equal(plan.pigPark.opens, "11:00");
  assert.ok(japanVenues[plan.pigPark.venue]);
});
test("Enoden from Kamakura to Enoshima is 260 yen and 23 minutes", () => {
  assert.equal(plan.enoden.kamakuraToEnoshimaYen, 260);
  assert.equal(plan.enoden.minutes, 23);
});
test("the suspended monorail to Ofuna is 340 yen, 14 minutes and not covered by the Japan Rail Pass", () => {
  assert.equal(plan.monorail.enoshimaToOfunaYen, 340);
  assert.equal(plan.monorail.minutes, 14);
  assert.equal(plan.monorail.japanRailPassValid, false);
});
test("the Hawaii connection dates from the 1885 contract migrants", () => {
  assert.equal(plan.hawaii.contractMigrantsArrived, 1885);
});
test("our honest Savoy verdict is kept, and lunch and dinner have sourced scores", () => {
  assert.match(plan.recordedImpression.savoy, /not the best pizza in the world/);
  assert.ok(japanVenues[plan.lunchVenue].rating);
  assert.ok(japanVenues[plan.dinnerVenue].rating);
});
