export const contactFields = ["name", "email", "subject", "message"] as const;
export type ContactField = (typeof contactFields)[number];
export type ContactValues = Record<ContactField, string>;
export type ContactErrors = Partial<Record<ContactField, "required" | "email" | "tooLong">>;
export const contactLimits: Record<ContactField, number> = { name: 100, email: 254, subject: 160, message: 5000 };

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  for (const field of contactFields) {
    const value = values[field].trim();
    if (!value) errors[field] = "required";
    else if (value.length > contactLimits[field]) errors[field] = "tooLong";
    else if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) errors[field] = "email";
  }
  return errors;
}

export async function submitContact(values: ContactValues): Promise<"sent" | "unavailable" | "error"> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
      signal: AbortSignal.timeout(15000),
    });
    const result = await response.json();
    if (response.status === 503 && result.code === "CONTACT_UNAVAILABLE") return "unavailable";
    return response.ok && result.sent === true ? "sent" : "error";
  } catch {
    return "error";
  }
}
