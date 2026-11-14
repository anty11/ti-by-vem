import { test } from "node:test";
import assert from "node:assert/strict";
import { franceBudget } from "./france-budget";
import { itineraries } from "./content";

test("France quotes 3000 euros per person while preserving shared allowances", () => {
  assert.equal(franceBudget.perPerson, 3000);
  assert.equal(franceBudget.perPerson * franceBudget.travellers, franceBudget.total);
  assert.equal(Number(itineraries.find(item => item.slug === "riviera")?.budget.replace(/[^\d]/g, "")), 3000);
});

test("France's revised planning budget is higher than the old 1850 euro estimate", () => {
  assert.ok(franceBudget.total > 1850);
  assert.equal(franceBudget.allowances.reduce((total, item) => total + item.amount, 0), franceBudget.total);
});

test("France food allowance exceeds the old 426 euro allowance", () => {
  const food = franceBudget.allowances.find((item) => item.category === "food");
  assert.ok(food && food.amount > 426);
});