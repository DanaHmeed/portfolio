import type { Metadata } from "next";
import { ContactPage } from "@/app/components/contact-page";

export const metadata: Metadata = {
  title: "Contact Dana Hmeed",
  description: "Contact Dana about software engineering, full-stack and backend development, Data & AI, or technical collaborations.",
};

export default function Contact() {
  return <ContactPage />;
}
