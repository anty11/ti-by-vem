import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { path, type Lang } from "@/lib/i18n";

/** Small profile icon in the header; links to My trips. Shows only when signed in. */
export function UserBadge({ lang }: { lang: Lang }) {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data } = supabase.auth.onAuthStateChange((_event, next) => setSession(next));
    return () => data.subscription.unsubscribe();
  }, []);

  if (!session) return null;
  const user = session.user;
  const meta = user.user_metadata ?? {};
  const avatar = (meta["avatar_url"] ?? meta["picture"]) as string | undefined;
  const name = (meta["full_name"] as string | undefined) ?? user.email ?? "";
  const initial = name.trim().charAt(0).toUpperCase() || "•";
  const label = lang === "sk" ? `Moje cesty — ${user.email}` : `My trips — ${user.email}`;

  return (
    <Link
      to={path(lang, "access")}
      aria-label={label}
      title={label}
      className="grid size-9 shrink-0 place-items-center overflow-hidden rounded-full border border-border bg-royal text-sm font-semibold text-onink transition hover:ring-2 hover:ring-royal/40"
    >
      {avatar ? (
        <img src={avatar} alt="" referrerPolicy="no-referrer" className="size-full object-cover" />
      ) : (
        initial
      )}
    </Link>
  );
}
