"use client";

import * as React from "react";
import { toast } from "sonner";
import { CheckCircle2, Clock, Loader2 } from "lucide-react";
import { trackFormStarted, trackFormFieldFocus, trackFormSubmitted, trackFormError } from "@/lib/analytics";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type PartnerLeadFormState = {
  firstName: string;
  lastName: string;
  email: string;
  organisation: string;
  note: string;
  phone?: string;
};

const benefits = [
  "Automate repetitive legal forms in minutes",
  "AI-powered article generation from court judgments",
  "SOC 2 compliant infrastructure with private file storage",
  "Dedicated onboarding and support",
];

export function PartnerLeadForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const formStartedRef = React.useRef(false);

  const [form, setForm] = React.useState<PartnerLeadFormState>({
    firstName: "",
    lastName: "",
    email: "",
    organisation: "",
    note: "",
    phone: "",
  });

  const update =
    (key: keyof PartnerLeadFormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const emailLooksValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const requiredMissing =
    !form.firstName.trim() ||
    !form.lastName.trim() ||
    !form.email.trim() ||
    !form.organisation.trim() ||
    !form.note.trim();

  const emailInvalid = !!form.email.trim() && !emailLooksValid(form.email);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (requiredMissing || emailInvalid) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if(!res.ok) {
        trackFormError("api_error");
        toast.error("We could not receive your message", {
          description: "Please try again in a moment or contact us at raphael.lim@jamraph.com",
          duration: 2000
        })
      }

      else {
        trackFormSubmitted(form.organisation);
        toast.success("Submitted!", {
          description:
            "Thanks — we've received your details and will be in touch shortly.",
        });
      }

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        organisation: "",
        note: "",
        phone: "",
      });
    } catch {
      trackFormError("network_error");
      toast.error("Something went wrong", {
        description: "Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl bg-secondary-dark p-10 md:p-20" id="contact">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Left — Benefits */}
            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.25em] text-stone-400 font-medium font-mono mb-4">Contact Us</p>
              <h2 className="text-3xl md:text-4xl font-serif font-normal text-white mb-6">Work with us</h2>
              <p className="text-base text-stone-400 mb-8 leading-relaxed">
                Share a few details about your firm and we&apos;ll reach out to schedule a personalised demo.
              </p>

              <ul className="space-y-4 mb-8">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-white/60 shrink-0 mt-0.5" />
                    <span className="text-sm text-stone-300">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-stone-500">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Typically responds within 24 hours</span>
              </div>
            </div>

            {/* Right — Form */}
            <div>
              <form onSubmit={onSubmit} className="space-y-6" onFocus={() => {
                if (!formStartedRef.current) {
                  formStartedRef.current = true;
                  trackFormStarted();
                }
              }}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white">
                      First name <span className="text-stone-500">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      value={form.firstName}
                      onChange={update("firstName")}
                      onFocus={() => trackFormFieldFocus("firstName")}
                      placeholder="Jane"
                      autoComplete="given-name"
                      required
                      className="border-white/25 bg-white/5 text-white placeholder:text-stone-500 focus:border-white/40 focus:ring-1 focus:ring-white/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white">
                      Last name <span className="text-stone-500">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      value={form.lastName}
                      onChange={update("lastName")}
                      onFocus={() => trackFormFieldFocus("lastName")}
                      placeholder="Tan"
                      autoComplete="family-name"
                      required
                      className="border-white/25 bg-white/5 text-white placeholder:text-stone-500 focus:border-white/40 focus:ring-1 focus:ring-white/10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email <span className="text-stone-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      onFocus={() => trackFormFieldFocus("email")}
                      placeholder="jane@company.com"
                      autoComplete="email"
                      required
                      className="border-white/25 bg-white/5 text-white placeholder:text-stone-500 focus:border-white/40 focus:ring-1 focus:ring-white/10"
                    />
                    {emailInvalid ? (
                      <p className="text-sm text-red-500">
                        Please enter a valid email.
                      </p>
                    ) : null}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">Phone number (optional)</Label>
                    <Input
                      id="phone"
                      value={form.phone}
                      onChange={update("phone")}
                      onFocus={() => trackFormFieldFocus("phone")}
                      placeholder="+65 9123 4567"
                      autoComplete="tel"
                      className="border-white/25 bg-white/5 text-white placeholder:text-stone-500 focus:border-white/40 focus:ring-1 focus:ring-white/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organisation" className="text-white">
                    Organisation <span className="text-stone-500">*</span>
                  </Label>
                  <Input
                    id="organisation"
                    value={form.organisation}
                    onChange={update("organisation")}
                    onFocus={() => trackFormFieldFocus("organisation")}
                    placeholder="Pearson Hardman"
                    autoComplete="organization"
                    required
                    className="border-white/25 bg-white/5 text-white placeholder:text-stone-500 focus:border-white/40 focus:ring-1 focus:ring-white/10"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="note" className="text-white">
                    How can we help?{" "}
                    <span className="text-stone-500">*</span>
                  </Label>
                  <Textarea
                    id="note"
                    value={form.note}
                    onChange={update("note")}
                    onFocus={() => trackFormFieldFocus("note")}
                    placeholder="Tell us what you're trying to build, your timeline, and what success looks like."
                    className="min-h-[140px] border-white/25 bg-white/5 text-white placeholder:text-stone-500 focus:border-white/40 focus:ring-1 focus:ring-white/10"
                    required
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-stone-500">
                    Fields marked with <span className="text-stone-500">*</span>{" "}
                    are required.
                  </p>

                  <Button
                    type="submit"
                    disabled={isSubmitting || requiredMissing || emailInvalid}
                    className="w-full bg-white text-stone-900 hover:bg-white/90 rounded-full transition-colors duration-300 sm:w-auto flex items-center gap-2 justify-center"
                  >
                    {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Submitting</> : "Submit"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
