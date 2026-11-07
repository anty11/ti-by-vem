import { describe, expect, test } from "bun:test";
import { unifyEstimates } from "./budget-estimates";

const food = { id: "1", label: "Our estimate · Food & drinks", category: "food", planned: 426, spent: null, paid_by: null };

describe("estimated expense consolidation", () => {
  test("counts an identical unused estimate once", () => {
    const result = unifyEstimates([food, { ...food, id: "2" }]);
    expect(result).toHaveLength(1);
    expect(result.reduce((sum, row) => sum + row.planned, 0)).toBe(426);
  });
  test("retains recorded spending and its payer", () => {
    const paid = { ...food, id: "2", spent: 30, paid_by: "V" };
    expect(unifyEstimates([food, paid])).toEqual([food, paid]);
  });
  test("retains custom expenses even when identical", () => {
    const lunch = { ...food, label: "Lunch" };
    expect(unifyEstimates([lunch, { ...lunch, id: "2" }])).toHaveLength(2);
  });
});