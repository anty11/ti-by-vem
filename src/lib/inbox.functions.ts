import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export type InboxMessage = {
  id: string;
  from: string;
  subject: string;
  date: string;
  snippet: string;
  unread: boolean;
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";

async function gmailFetch(path: string) {
  const apiKey = process.env["LOVABLE_API_KEY"];
  const connectionKey = process.env["GOOGLE_MAIL_API_KEY"];
  if (!apiKey || !connectionKey) throw new Error("Gmail connection is not configured");

  const response = await fetch(`${GATEWAY_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "X-Connection-Api-Key": connectionKey,
    },
  });
  if (!response.ok) {
    const body = await response.text();
    console.error(`Gmail gateway failed [${response.status}]: ${body}`);
    throw new Error(`Gmail request failed [${response.status}]: ${body}`);
  }
  return response.json();
}

function headerValue(headers: Array<{ name: string; value: string }> | undefined, name: string) {
  return headers?.find((h) => h.name.toLowerCase() === name.toLowerCase())?.value ?? "";
}

export const listInboxMessages = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", {
      _user_id: context.userId,
      _role: "admin",
    });
    if (!isAdmin) throw new Error("Admins only");

    const list = await gmailFetch(
      "/users/me/messages?maxResults=20&labelIds=INBOX&fields=messages(id),nextPageToken",
    );
    const ids: string[] = (list.messages ?? []).map((m: { id: string }) => m.id);
    if (ids.length === 0) return [] satisfies InboxMessage[];

    const messages = await Promise.all(
      ids.map((id) =>
        gmailFetch(
          `/users/me/messages/${id}?format=metadata&metadataHeaders=From&metadataHeaders=Subject&metadataHeaders=Date&fields=id,snippet,labelIds,payload(headers)`,
        ),
      ),
    );

    return messages.map((m): InboxMessage => {
      const headers = m.payload?.headers as Array<{ name: string; value: string }> | undefined;
      return {
        id: m.id as string,
        from: headerValue(headers, "From"),
        subject: headerValue(headers, "Subject") || "(no subject)",
        date: headerValue(headers, "Date"),
        snippet: (m.snippet as string) ?? "",
        unread: Array.isArray(m.labelIds) && m.labelIds.includes("UNREAD"),
      };
    });
  });
