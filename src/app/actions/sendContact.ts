"use server";

import { Resend } from "resend";
import { portfolioData } from "@/data/portfolio";

type Field = "name" | "email" | "subject" | "message";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<Field, string>>;
  /** Echoed back on error so the form keeps what the visitor typed. */
  values?: Partial<Record<Field, string>>;
};

const LIMITS: Record<Field, number> = { name: 100, email: 200, subject: 150, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function read(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field.
  if (read(formData, "company")) {
    return { status: "success", message: "Thanks! Your message has been sent." };
  }

  const values = {
    name: read(formData, "name"),
    email: read(formData, "email"),
    subject: read(formData, "subject"),
    message: read(formData, "message"),
  };

  const errors: ContactState["errors"] = {};
  if (!values.name) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(values.email)) errors.email = "Please enter a valid email address.";
  if (values.message.length < 10) errors.message = "Please write at least a few words.";
  for (const field of Object.keys(LIMITS) as Field[]) {
    if (values[field].length > LIMITS[field]) errors[field] = `Keep this under ${LIMITS[field]} characters.`;
  }
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", errors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("sendContact: RESEND_API_KEY is not set");
    return {
      status: "error",
      message: `The form isn't configured yet. Please email me directly at ${portfolioData.personal.email}.`,
      values,
    };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL ?? portfolioData.personal.email,
    replyTo: values.email,
    subject: `[Portfolio] ${values.subject || `Message from ${values.name}`}`,
    text: `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`,
  });

  if (error) {
    console.error("sendContact: Resend error", error);
    return {
      status: "error",
      message: `Something went wrong sending your message. Please email me at ${portfolioData.personal.email}.`,
      values,
    };
  }

  return { status: "success", message: "Thanks! Your message has been sent. I'll get back to you soon." };
}
