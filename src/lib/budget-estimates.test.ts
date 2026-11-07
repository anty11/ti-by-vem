import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { unifyEstimates } from "./budget-estimates";

const food = { id: "1", label: "Our estimate · Food & drinks", category: "food", planned: 426, spent: null, paid_by: null };

describe("estimated expense consolidation", () => {
  test("counts an identical unused estimate once", () => {
    const result = unifyEstimates([food, { ...food, id: "2" }]);
    assert.equal(result.length, 1);
    assert.equal(result.reduce((sum, row) => sum + row.planned, 0), 426);
  });
  test("retains recorded spending and its payer", () => {
    const paid = { ...food, id: "2", spent: 30, paid_by: "V" };
    assert.deepEqual(unifyEstimates([food, paid]), [food, paid]);
  });
  test("retains custom expenses even when identical", () => {
    const lunch = { ...food, label: "Lunch" };
    assert.equal(unifyEstimates([lunch, { ...lunch, id: "2" }]).length, 2);
  });
});