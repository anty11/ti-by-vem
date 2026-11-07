type EstimateRow = {
  label: string;
  category: string;
  planned: number | null;
  spent: number | null;
  paid_by: string | null;
};

// Only collapse identical unused generated allowances, never customer expenses.
export function unifyEstimates<T extends EstimateRow>(rows: T[]): T[] {
  const seen = new Set<string>();
  return rows.filter((row) => {
    if (!/^(Our estimate|Náš odhad) · /.test(row.label) || row.spent !== null || row.paid_by) return true;
    const key = JSON.stringify([row.label, row.category, row.planned]);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}