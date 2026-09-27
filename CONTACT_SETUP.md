# Contact delivery

The `/contact` page is ready, but email delivery is **not connected**.
`POST /api/contact` currently returns HTTP 503 with
`{ "sent": false, "code": "CONTACT_UNAVAILABLE" }`. It does not store or send messages.
The page explains this before submission and preserves form content on failure.

To connect delivery:

1. Choose an email provider or an existing contact API. Supply a verified sender address and server-side credentials through the deployment platform's environment settings, never a `NEXT_PUBLIC_` variable.
2. Implement delivery in `app/api/contact/route.ts`. Reuse `validateContact` from `app/lib/contact.ts` after checking the incoming JSON shape, types, and body size. Add rate limiting or equivalent abuse protection before enabling this public endpoint.
3. Use `profile.email` from `app/lib/content.ts` as the recipient. Use the visitor's validated email as Reply-To, not as the sender.
4. Return HTTP 200 with `{ "sent": true }` only after the provider confirms acceptance. Return a non-2xx response on failure without exposing provider details or credentials.
5. Remove or update the unavailable notice in both languages in `app/lib/i18n.ts` once delivery is verified.

The browser submission helper in `app/lib/contact.ts` posts name, email, subject, and message to this endpoint. It has a 15-second timeout. The form clears only on confirmed success. Provider-specific environment variable names will depend on the integration chosen; no credentials are currently required or included.
