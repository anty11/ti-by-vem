export type Lang = "en" | "sk";

export const routePaths = {
  home: { en: "/", sk: "/sk" },
  itineraries: { en: "/itineraries", sk: "/sk/itineraries" },
  pricing: { en: "/pricing", sk: "/sk/pricing" },
  letters: { en: "/letters", sk: "/sk/letters" },
  about: { en: "/about", sk: "/sk/about" },
  terms: { en: "/terms", sk: "/sk/terms" },
  privacy: { en: "/privacy", sk: "/sk/privacy" },
  delivery: { en: "/delivery", sk: "/sk/delivery" },
  access: { en: "/access", sk: "/sk/access" },
} as const;

export type RouteKey = keyof typeof routePaths;

export function path(lang: Lang, key: RouteKey) {
  return routePaths[key][lang];
}

export function detailPath(lang: Lang) {
  return lang === "sk" ? "/sk/itineraries/$slug" : "/itineraries/$slug";
}

export function tripPath(lang: Lang) {
  return lang === "sk" ? "/sk/trip/$slug" : "/trip/$slug";
}

export function langFromPathname(pathname: string): Lang {
  return pathname === "/sk" || pathname.startsWith("/sk/") ? "sk" : "en";
}

/** Same page in the other language. */
export function switchPath(lang: Lang, pathname: string) {
  if (lang === "sk") {
    const rest = pathname.replace(/^\/sk/, "");
    return rest === "" ? "/" : rest;
  }
  return pathname === "/" ? "/sk" : `/sk${pathname}`;
}

export const contactEmail = "hello@travelintelligencebyvem.com";
