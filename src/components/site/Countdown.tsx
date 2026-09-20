import { useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";

const labels: Record<Lang, { d: string; h: string; m: string; s: string; live: string }> = {
  en: { d: "days", h: "hrs", m: "min", s: "sec", live: "Live now" },
  sk: { d: "dní", h: "hod", m: "min", s: "sek", live: "Už je tu" },
};

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function Countdown({
  target,
  lang,
  size = "sm",
  className = "",
}: {
  target: string;
  lang: Lang;
  size?: "sm" | "lg";
  className?: string;
}) {
  const labels_ = labels[lang];
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setLeft(new Date(target).getTime() - Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  if (left === null) {
    return <div className={`glass-soft ${size === "lg" ? "h-20" : "h-14"} rounded-2xl ${className}`} aria-hidden />;
  }

  if (left <= 0) {
    return (
      <p className={`font-display ${size === "lg" ? "text-3xl" : "text-xl"} text-ink ${className}`}>
        {labels_.live}
      </p>
    );
  }

  const total = Math.floor(left / 1000);
  const units = [
    { value: Math.floor(total / 86400), label: labels_.d },
    { value: Math.floor((total % 86400) / 3600), label: labels_.h },
    { value: Math.floor((total % 3600) / 60), label: labels_.m },
    { value: total % 60, label: labels_.s },
  ];

  return (
    <div className={`flex gap-2 ${className}`} role="timer" aria-label="Countdown">
      {units.map((u) => (
        <div
          key={u.label}
          className={`glass-soft flex-1 min-w-0 rounded-2xl text-center ${
            size === "lg" ? "px-3 py-4" : "px-2 py-2.5"
          }`}
        >
          <p
            className={`font-display text-ink leading-none tabular-nums ${
              size === "lg" ? "text-4xl" : "text-xl"
            }`}
          >
            {size === "lg" ? pad(u.value) : u.value}
          </p>
          <p className={`mt-1 uppercase tracking-[0.15em] text-soft ${size === "lg" ? "text-[10px]" : "text-[9px]"}`}>
            {u.label}
          </p>
        </div>
      ))}
    </div>
  );
}
