"use client"

import { ShieldCheck, Mail, Linkedin } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { trackCTAClick } from "@/lib/analytics";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary-dark" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-surface-dark-card">
                <Image alt="Jam & Raph logo" src="/J&R logo.png" width={24} height={24} className="h-5 w-auto" />
              </div>
              <div className="leading-tight">
                <p className="text-base font-medium text-white">Jam & Raph</p>
                <p className="text-sm text-stone-400">
                  Claude Certified Architects
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm text-stone-400 leading-relaxed">
              A Singapore AI practice for professional services teams. We run hands-on workshops and build the workflows your team runs every day — inside the tools you already use.
            </p>

            <div className="flex flex-wrap gap-2">
              <Button asChild className="bg-white text-stone-900 hover:bg-white/90 rounded-full transition-colors duration-300">
                <a href="/#contact" onClick={() => trackCTAClick("footer", "Work with us")}>Work with us</a>
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <p className="text-sm font-medium text-white">Offerings</p>
            <ul className="space-y-3 text-sm text-stone-400">
              <li><a href="/#workshop" className="hover:text-white transition-colors duration-300">Workshop</a></li>
              <li><a href="/#advisory" className="hover:text-white transition-colors duration-300">Advisory</a></li>
              <li><a href="/#build" className="hover:text-white transition-colors duration-300">Build</a></li>
              <li><a href="/security" className="hover:text-white transition-colors duration-300">Security</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <p className="text-sm font-medium text-white">Company</p>
            <ul className="space-y-3 text-sm text-stone-400">
              <li><a href="/#contact" className="hover:text-white transition-colors duration-300">Contact</a></li>
              <li><a href="/#faq" className="hover:text-white transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <p className="text-sm font-medium text-white">Legal</p>
            <ul className="space-y-3 text-sm text-stone-400">
              <li><a href="/security" className="hover:text-white transition-colors duration-300">Security & privacy</a></li>
              <li><a href="mailto:jamison.teng@jamraph.com" className="hover:text-white transition-colors duration-300">Data enquiries</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {["E2E encrypted"].map((badge) => (
            <a key={badge} href="/security" className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-white border border-white/10 rounded-full px-3 py-1.5 transition-colors duration-300">
              <ShieldCheck className="h-3 w-3" /> {badge}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 text-sm text-stone-400 sm:flex-row sm:items-center">
            <span>&copy; {year} Jam & Raph. All rights reserved.</span>
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
              className="border-white/10 bg-transparent text-stone-400 hover:text-white hover:border-white/30 rounded-full transition-colors duration-300"
            >
              <a href="mailto:jamison.teng@jamraph.com" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="icon"
              className="border-white/10 bg-transparent text-stone-400 hover:text-white hover:border-white/30 rounded-full transition-colors duration-300"
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
