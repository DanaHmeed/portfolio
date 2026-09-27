"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { profile } from "@/app/lib/content";
import { messages } from "@/app/lib/i18n";
import { contactFields, contactLimits, submitContact, validateContact, type ContactErrors, type ContactValues } from "@/app/lib/contact";
import { usePreferences } from "./preferences-provider";
import { ArrowOutIcon } from "./icons";
import { SiteHeader } from "./site-header";

const emptyForm: ContactValues = { name: "", email: "", subject: "", message: "" };

export function ContactPage() {
  const { locale } = usePreferences();
  const copy = messages[locale].contact;
  const [values, setValues] = useState<ContactValues>(emptyForm);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "unavailable" | "error">("idle");
  const pending = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    setStatus("idle");
    const firstError = contactFields.find((field) => nextErrors[field]);
    if (firstError) {
      (form.elements.namedItem(firstError) as HTMLElement)?.focus();
      return;
    }
    pending.current = true;
    setStatus("sending");
    const trimmed = Object.fromEntries(contactFields.map((field) => [field, values[field].trim()])) as ContactValues;
    const result = await submitContact(trimmed);
    setStatus(result);
    if (result === "sent") setValues(emptyForm);
    pending.current = false;
  }

  return (
    <>
      <SiteHeader />
      <main className="contact-page" id="top">
        <Link className="text-link" href="/">{copy.home}</Link>
        <div className="section-intro contact-intro">
          <h1>{copy.title}</h1>
          <p>{copy.intro}</p>
        </div>
        <div className="contact-layout">
          <form className="contact-form" noValidate onSubmit={handleSubmit} aria-label={copy.formTitle} aria-describedby="contact-notice" aria-busy={status === "sending"}>
            <p className="contact-notice" id="contact-notice">{copy.notice}</p>
            <div className="contact-fields">
              {contactFields.map((field) => {
                const props = {
                  id: `contact-${field}`, name: field, required: true,
                  value: values[field], maxLength: contactLimits[field],
                  disabled: status === "sending",
                  "aria-invalid": Boolean(errors[field]),
                  "aria-describedby": errors[field] ? `contact-${field}-error` : undefined,
                  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                    setValues((current) => ({ ...current, [field]: event.target.value }));
                    setErrors((current) => ({ ...current, [field]: undefined }));
                    setStatus("idle");
                  },
                };
                return (
                  <div className={`contact-field contact-field-${field}`} key={field}>
                    <label htmlFor={props.id}>{copy.fields[field]}</label>
                    {field === "message" ? <textarea {...props} rows={7} /> : <input {...props} type={field === "email" ? "email" : "text"} autoComplete={field === "name" ? "name" : field === "email" ? "email" : undefined} dir={field === "email" ? "ltr" : undefined} />}
                    {errors[field] && <p className="contact-error" id={`contact-${field}-error`}>{copy.errors[errors[field]]}</p>}
                  </div>
                );
              })}
            </div>
            <div className="contact-submit">
              <button className="primary-link" type="submit" disabled={status === "sending"}>
                {status === "sending" ? copy.sending : copy.send}<ArrowOutIcon size={17} />
              </button>
              <p role="status" aria-live="polite" aria-atomic="true">
                {status === "sent" ? copy.success : status === "unavailable" ? copy.unavailable : status === "error" ? copy.failure : status === "sending" ? copy.sending : ""}
              </p>
            </div>
          </form>
          <aside className="contact-details" aria-labelledby="contact-details-title">
            <h2 id="contact-details-title">{copy.details}</h2>
            <div className="project-links">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub<ArrowOutIcon size={15} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn<ArrowOutIcon size={15} /></a>
              <a href={`mailto:${profile.email}`}>{copy.fields.email}<ArrowOutIcon size={15} /></a>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
