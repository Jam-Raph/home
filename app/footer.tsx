import { Scale, ShieldCheck, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { smoothScroll } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E5E5E5] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E5E5] bg-white">
                <Scale className="h-5 w-5 text-stone-700" />
              </div>
              <div className="leading-tight">
                <p className="text-base font-semibold text-stone-900">Pillar</p>
                <p className="text-sm text-stone-500">
                  AI workflows for modern legal teams.
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm text-stone-500">
              Turn repetitive legal work into fast, reliable workflows — while keeping
              documents private and access-controlled.
            </p>

            <div className="flex flex-wrap gap-2">
              <Button
                className="bg-brand-primary text-white hover:bg-brand-hover rounded-full"
                onClick={() => smoothScroll("contact")}
              >
                Work with us
              </Button>

              <Button onClick={() => smoothScroll("faq")} variant="outline" className="border-[#E5E5E5] bg-white text-stone-700 rounded-full">
                FAQ
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-[#E5E5E5]" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 text-sm text-stone-500 sm:flex-row sm:items-center">
            <span>&copy; {year} Pillar. All rights reserved.</span>
            <span className="hidden sm:inline">&middot;</span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              Built with privacy in mind
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="outline"
              size="icon"
              className="border-[#E5E5E5] bg-white text-stone-600 rounded-full"
            >
              <a href="mailto:jamison.teng@jamraph.com" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="icon"
              className="border-[#E5E5E5] bg-white text-stone-600 rounded-full"
            >
              <a
                href="https://www.linkedin.com/company/jamandraph/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
