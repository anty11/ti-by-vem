import { test } from "node:test";
import assert from "node:assert/strict";
import { japanDayFifteenPlan as plan } from "./japan-day-fifteen-plan";
import { japanVenues } from "./japan-venues";

test("day fifteen is a whole day at Tokyo Disneyland", () => {
  assert.deepEqual(plan.cities, ["Tokyo", "Maihama"]);
  assert.match(plan.recordedImpression.wholeDay, /whole day/);
});
test("the recorded breakfast was Sherwood Garden at Tokyo Disneyland Hotel, without a Disney hotel stay", () => {
  assert.match(plan.recordedStops[0], /Sherwood Garden Restaurant, Tokyo Disneyland Hotel/);
  assert.equal(plan.stayedAtDisneyHotel, false);
});
test("Sherwood Garden breakfast is open to non-guests at 4,500 yen and books three months ahead", () => {
  assert.equal(plan.sherwood.openToNonGuests, true);
  assert.equal(plan.sherwood.breakfastAdultYen, 4500);
  assert.equal(plan.sherwood.bookingOpens, "10:00, three months ahead");
});
test("adult day tickets cost 8,900 to 12,400 yen and are never sold at the gate", () => {
  assert.equal(plan.tickets.adultFromYen, 8900);
  assert.equal(plan.tickets.adultToYen, 12400);
  assert.equal(plan.tickets.soldAtGate, false);
});
test("Premier Access for Beauty and the Beast costs 2,500 yen and is bought inside the park", () => {
  assert.equal(plan.premierAccess.beautyAndBeastYen, 2500);
  assert.equal(plan.premierAccess.baymaxYen, 1500);
  assert.equal(plan.premierAccess.boughtAfterEntry, true);
});
test("every venue in the plan exists and carries a sourced score", () => {
  for (const id of [plan.sherwood.venue, plan.sherwood.hotel, plan.blueBayou.venue, plan.crystalPalace.venue]) {
    assert.ok(japanVenues[id]);
    assert.ok(japanVenues[id].rating);
  }
});
