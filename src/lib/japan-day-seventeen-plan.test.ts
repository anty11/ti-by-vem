import { test } from "node:test";
import assert from "node:assert/strict";
import { japanDaySeventeenPlan as plan } from "./japan-day-seventeen-plan";
import { japanVenues } from "./japan-venues";

test("day seventeen stays in Tokyo and ends with running sushi near Shibuya", () => {
  assert.deepEqual(plan.cities, ["Tokyo"]);
  assert.equal(plan.uobei.venue, "uobeiShibuya");
});
test("the recorded day includes the tea ceremony inside teamLab Borderless", () => {
  assert.ok(plan.recordedStops.includes("EN TEA HOUSE"));
  assert.equal(plan.enTeaHouse.insideMuseum, true);
});
test("Borderless adults pay from 3,400 yen with 200 yen more at the door and no refunds", () => {
  assert.equal(plan.borderless.adultFromYen, 3400);
  assert.equal(plan.borderless.doorSurchargeYen, 200);
  assert.equal(plan.borderless.refunds, false);
});
test("Uobei plates start at 110 yen and take no reservations", () => {
  assert.equal(plan.uobei.basePlateYen, 110);
  assert.equal(plan.uobei.reservations, false);
});
test("tax-free shopping needs 5,000 yen per shop per day", () => {
  assert.equal(plan.taxFree.minimumPerShopPerDayYen, 5000);
});
test("every venue exists and brunch and dinner carry sourced scores", () => {
  for (const id of [plan.borderless.venue, plan.enTeaHouse.venue]) assert.ok(japanVenues[id]);
  for (const id of [...plan.brunchSuggestions, plan.uobei.venue]) assert.ok(japanVenues[id].rating);
});
