import { test } from "node:test";
import assert from "node:assert/strict";
import { japanBudget as budget } from "./japan-budget";
import { itineraries } from "./content";

test("provisional Japan budget covers two travellers over seventeen nights", () => {
  assert.equal(budget.travellers, 2);
  assert.equal(budget.nights, 17);
});
test("Japan quotes 4200 euros per person in the catalogue", () => {
  assert.equal(budget.perPerson, 4200);
  assert.equal(budget.perPerson * budget.travellers, budget.total);
  assert.equal(Number(itineraries.find(item => item.slug === "japan")?.budget.replace(/[^\d]/g, "")), 4200);
});
test("shared Japan allowances total 8400 euros without double counting", () => {
  assert.equal(budget.allowances.reduce((sum, item) => sum + item.amount, 0), budget.total);
});
test("seventeen hotel nights including Ubuya have 4200 euros allocated for two", () => assert.equal(budget.allowances.find(item => item.category === "stay")?.amount, 4200));
