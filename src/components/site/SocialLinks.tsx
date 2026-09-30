export const socialLinks = {
  instagram: "https://www.instagram.com/travelintelligencebyvem",
  threads: "https://www.threads.net/@travelintelligencebyvem",
  tiktok: "https://www.tiktok.com/@travelintelligencebyvem",
} as const;

const icons = {
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 3c.4 2.2 1.8 3.6 4 3.8v2.9c-1.5.1-2.9-.4-4-1.2v6.1c0 3.8-2.5 6.4-6 6.4-3.2 0-5.6-2.3-5.6-5.4 0-3 2.3-5.3 5.4-5.3.3 0 .7 0 1 .1v3a2.6 2.6 0 0 0-1-.2 2.4 2.4 0 0 0-2.4 2.4c0 1.4 1.1 2.4 2.6 2.4 1.7 0 2.9-1.2 2.9-3.2V3h3.1Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  threads: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M16.4 8.7C15.5 6.9 13.8 5.9 11.8 5.9 8.7 5.9 6.4 8.1 6.4 11.3s2.3 5.4 5.4 5.4c2.5 0 4.3-1.2 5.1-2.9" />
      <path d="M14.3 13.3c-.6 1-1.6 1.5-2.8 1.3-1.4-.2-2.3-1.3-2.1-2.6.2-1.3 1.4-2.1 2.8-1.9 1 .2 1.8.7 2.1 1.6.4 1.3-.2 2.7-1.4 3.4" />
    </svg>
  ),
} as const;

export function SocialLinks({ className = "", itemClassName = "" }: { className?: string; itemClassName?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {(Object.keys(socialLinks) as (keyof typeof socialLinks)[]).map((name) => (
        <a
          key={name}
          href={socialLinks[name]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`travel intelligence by VeM on ${name}`}
          className={`grid place-items-center rounded-lg border border-border text-soft transition hover:border-royal hover:text-royal ${itemClassName}`}
        >
          {icons[name]}
        </a>
      ))}
    </div>
  );
}
