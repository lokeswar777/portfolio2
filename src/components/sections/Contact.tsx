"use client";

import { useActionState, useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { sendContact, type ContactState } from "@/app/actions/sendContact";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SpotlightCard } from "@/components/shared/SpotlightCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, CircleAlert, CircleCheck, Copy, LoaderCircle, Mail, MapPin, Send } from "lucide-react";

const initialState: ContactState = { status: "idle" };
const fieldClass = "bg-background/50 border-border/50 focus:border-primary";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-sm text-destructive">
      {message}
    </p>
  );
}

function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); the mailto link still works.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="ml-auto p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
      aria-label={copied ? "Email copied" : "Copy email address"}
    >
      {copied ? <Check size={18} className="text-primary" /> : <Copy size={18} />}
    </button>
  );
}

export function Contact() {
  const { email, location } = portfolioData.personal;
  const [state, formAction, pending] = useActionState(sendContact, initialState);
  const errors = state.errors ?? {};
  const values = state.values ?? {};

  return (
    <section id="contact" className="py-24 relative bg-muted/5 border-t border-border/50">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Get In Touch"
          subtitle="Open to data engineering roles and collaborations. Let's talk."
        />
        <div className="grid md:grid-cols-2 gap-12 mt-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Let&apos;s build something great.</h3>
              <p className="text-muted-foreground text-lg">
                Whether it&apos;s a role, a data problem or just a question, my inbox is open.
              </p>
            </div>
            <div className="space-y-4">
              <SpotlightCard className="p-4 flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail size={24} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground font-medium">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-foreground font-semibold hover:text-primary transition-colors break-all"
                  >
                    {email}
                  </a>
                </div>
                <CopyEmailButton email={email} />
              </SpotlightCard>
              <SpotlightCard className="p-4 flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Location</p>
                  <p className="text-foreground font-semibold">{location}</p>
                </div>
              </SpotlightCard>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SpotlightCard className="p-8">
              <form className="space-y-6" action={formAction} noValidate>
                {/* Honeypot: hidden from people, often filled by bots. */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      maxLength={100}
                      placeholder="Your name"
                      defaultValue={values.name}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={fieldClass}
                    />
                    <FieldError id="name-error" message={errors.name} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={200}
                      placeholder="you@example.com"
                      defaultValue={values.email}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={fieldClass}
                    />
                    <FieldError id="email-error" message={errors.email} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    maxLength={150}
                    placeholder="Opportunity, project or question"
                    defaultValue={values.subject}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    className={fieldClass}
                  />
                  <FieldError id="subject-error" message={errors.subject} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    maxLength={5000}
                    placeholder="Tell me a bit about what you have in mind..."
                    defaultValue={values.message}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`min-h-[150px] resize-none ${fieldClass}`}
                  />
                  <FieldError id="message-error" message={errors.message} />
                </div>

                <Button type="submit" disabled={pending} className="w-full h-12 text-base font-medium group">
                  {pending ? (
                    <>
                      Sending <LoaderCircle className="ml-2 h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                <div aria-live="polite">
                  {state.status !== "idle" && state.message && (
                    <p
                      className={`flex items-start gap-2 text-sm ${
                        state.status === "success" ? "text-primary" : "text-destructive"
                      }`}
                    >
                      {state.status === "success" ? (
                        <CircleCheck size={18} className="shrink-0" />
                      ) : (
                        <CircleAlert size={18} className="shrink-0" />
                      )}
                      {state.message}
                    </p>
                  )}
                </div>
              </form>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
