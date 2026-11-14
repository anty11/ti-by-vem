import { test } from "node:test";
import assert from "node:assert/strict";
import { oktoberfestBudget as budget } from "./oktoberfest-budget";
import { itineraries } from "./content";

test("provisional Oktoberfest budget covers two travellers", () => assert.equal(budget.travellers, 2));
test("Oktoberfest quotes 2400 euros per person while preserving shared allowances", () => {
  assert.equal(budget.perPerson, 2400);
  assert.equal(budget.perPerson * budget.travellers, budget.total);
  assert.equal(Number(itineraries.find(item => item.slug === "oktoberfest-dolomites")?.budget.replace(/[^\d]/g, "")), 2400);
});
test("provisional allowances total 4800 euros without double counting", () => {
  assert.equal(budget.total, 4800);
  assert.equal(budget.allowances.reduce((sum, item) => sum + item.amount, 0), budget.total);
});
test("seven hotel nights including two Chalet al Foss nights have 2300 euros allocated", () => assert.equal(budget.allowances.find(item => item.category === "stay")?.amount, 2300));