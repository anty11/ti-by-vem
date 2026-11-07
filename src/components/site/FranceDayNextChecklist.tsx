import { CheckCircle2 } from "lucide-react";

type Props = {
  day: number;
  items: string[];
};

export function FranceDayNextChecklist({ day, items }: Props) {
  const title =
    day < 7 ? `Before day ${day + 1} · don't forget` : "Before you fly home · don't forget";
  return (
    <div className="border-t border-border py-8">
      <h3 className="font-display text-2xl">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-soft">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-sage" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
