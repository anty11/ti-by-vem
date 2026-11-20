import { test } from "node:test";
import assert from "node:assert/strict";
import { japanDayFivePlan as plan } from "./japan-day-five-plan";
import { japanVenues } from "./japan-venues";

test("day five moves from Osaka to Kyoto", () => {
  assert.deepEqual(plan.cities, ["Osaka", "Kyoto"]);
});
test("the recorded hotel and breakfast stay attached to the day", () => {
  assert.equal(plan.hotel, "sequenceKyotoGojo");
  assert.equal(plan.breakfast, "panelCafeKyoto");
});
test("four transfer options keep dated per-person fares", () => {
  assert.equal(plan.transferOptions.length, 4);
  for (const option of plan.transferOptions) {
    assert.ok(option.yen > 0);
    assert.ok(option.minutes > 0);
  }
  assert.equal(plan.transferOptions.find((o) => o.id === "jr")?.yen, 580);
  assert.equal(plan.transferOptions.find((o) => o.id === "hankyu")?.yen, 410);
});
test("three distinct dinner options retain sourced listing scores", () => {
  assert.equal(new Set(plan.dinnerOptions).size, 3);
  assert.equal(japanVenues.sankichiKarasuma.rating, 4.9);
  assert.equal(japanVenues.komefukuShijo.rating, 4.3);
  assert.equal(japanVenues.karasumaRock.rating, 4.7);
});
test("the hotel bath tattoo policy keeps its dated verification", () => {
  assert.match(plan.onsen.tattooPolicy, /1 March 2026/);
  assert.ok(plan.onsen.tattooPolicyCheckedOn.length > 0);
});
