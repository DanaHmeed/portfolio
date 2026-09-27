// Integration boundary: replace this response with server-side validation,
// abuse protection, and an email provider call. Return { sent: true } only
// after the provider confirms acceptance. Keep credentials server-side.
export async function POST() {
  return Response.json({ sent: false, code: "CONTACT_UNAVAILABLE" }, { status: 503 });
}
