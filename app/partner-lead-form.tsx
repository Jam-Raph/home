"use client";

import * as React from "react";
import { toast } from "sonner";

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

export function PartnerLeadForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

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
        toast.error("We could not recive your message", {
          description: "Please try again in a moment or contact us at raphael.lim@jamraph.com",
          duration: 2000
        })
      }

      else {
        toast.success("Submitted!", {
          description:
            "Thanks — we’ve received your details and will be in touch shortly.",
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
      toast.error("Something went wrong", {
        description: "Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="px-6 py-16" id="contact">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">Work with us</h2>
          <p className="text-gray-600">Share a few details and we&apos;ll reach out.</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">
                    First name <span className="text-muted-foreground">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    value={form.firstName}
                    onChange={update("firstName")}
                    placeholder="Jane"
                    autoComplete="given-name"
                    required
                    className="border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">
                    Last name <span className="text-muted-foreground">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    value={form.lastName}
                    onChange={update("lastName")}
                    placeholder="Tan"
                    autoComplete="family-name"
                    required
                    className="border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-muted-foreground">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="jane@company.com"
                    autoComplete="email"
                    required
                    className="border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {emailInvalid ? (
                    <p className="text-sm text-destructive text-red-600">
                      Please enter a valid email.
                    </p>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number (optional)</Label>
                  <Input
                    id="phone"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+65 9123 4567"
                    autoComplete="tel"
                    className="border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="organisation">
                  Organisation <span className="text-muted-foreground">*</span>
                </Label>
                <Input
                  id="organisation"
                  value={form.organisation}
                  onChange={update("organisation")}
                  placeholder="Pearson Hardman"
                  autoComplete="organization"
                  required
                  className="border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="note">
                  Introductory note{" "}
                  <span className="text-muted-foreground">*</span>
                </Label>
                <Textarea
                  id="note"
                  value={form.note}
                  onChange={update("note")}
                  placeholder="Tell us what you’re trying to build, your timeline, and what success looks like."
                  className="min-h-[140px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">
                  Fields marked with <span className="text-muted-foreground">*</span>{" "}
                  are required.
                </p>

                <Button
                  type="submit"
                  disabled={isSubmitting || requiredMissing || emailInvalid}
                  className="w-full sm:w-auto px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
      </div>
    </section>
  );
}
