import { test } from "node:test";
import assert from "node:assert/strict";
import { franceBudget } from "./france-budget";

test("France's revised planning budget is higher than the old 1850 euro estimate", () => {
  assert.ok(franceBudget.total > 1850);
  assert.equal(franceBudget.allowances.reduce((total, item) => total + item.amount, 0), franceBudget.total);
});

test("France food allowance exceeds the old 426 euro allowance", () => {
  const food = franceBudget.allowances.find((item) => item.category === "food");
  assert.ok(food && food.amount > 426);
});