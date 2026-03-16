"use client"

import { smoothScroll } from "@/lib/utils"
import { trackCTAClick } from "@/lib/analytics"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect, useCallback } from "react"

const navSections = [
  { id: "pillar", label: "Features" },
  { id: "security", label: "Security", href: "/security" },
  { id: "faq", label: "FAQ" },
]

export default function Navbar() {
    const pathname = usePathname()
    const isHome = pathname === "/"
    const [atTop, setAtTop] = useState(true)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("")

    useEffect(() => {
        function handleScroll() {
            setAtTop(window.scrollY < 50)
        }
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Track active section with IntersectionObserver
    useEffect(() => {
        if (!isHome) return
        const sectionIds = ["hero", "pillar", "security", "faq", "contact"]
        const observers: IntersectionObserver[] = []

        sectionIds.forEach((id) => {
            const el = document.getElementById(id)
            if (!el) return
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id)
                    }
                },
                { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
            )
            observer.observe(el)
            observers.push(observer)
        })

        return () => observers.forEach((o) => o.disconnect())
    }, [isHome])

    const navTo = useCallback((id: string) => {
        setDrawerOpen(false)
        if (isHome) {
            smoothScroll(id)
        } else {
            window.location.href = `/#${id}`
        }
    }, [isHome])

    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (drawerOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => { document.body.style.overflow = "" }
    }, [drawerOpen])

    // Pages with dark hero backgrounds get transparent navbar at top
    const darkHeroPages = ["/", "/form-filler"]
    const showTransparent = darkHeroPages.includes(pathname) && atTop

    return (
        <>
            <nav className={`z-50 w-full max-w-3/4 px-4 py-1.5 md:px-5 md:py-1.5 rounded-full flex justify-between md:justify-center items-center gap-10 fixed top-4 left-1/2 -translate-x-1/2 transition-all duration-300 ${
                showTransparent
                    ? "bg-transparent border border-transparent shadow-none"
                    : "bg-white/50 backdrop-blur-xl border border-white/30 shadow-lg shadow-black/5"
            }`}>
                <Link href="/" className="flex items-center gap-2">
                    <Image alt="company logo" width={24} height={0} className="h-auto w-auto md:w-[30px]" src="/J&R logo.png" />
                    <h1 className={`font-medium text-sm md:text-base transition-colors duration-300 ${showTransparent ? "text-white" : "text-stone-900"}`}>Jam & Raph</h1>
                </Link>

                {/* Full nav bar */}
                <ul className="md:flex gap-6 hidden items-center">
                    {navSections.map((section) => {
                        const isActive = activeSection === section.id
                        const linkClasses = `relative hover:cursor-pointer transition-colors duration-300 text-[11px] uppercase tracking-wider ${
                            showTransparent
                                ? (isActive ? "text-white" : "text-white/70 hover:text-white")
                                : (isActive ? "text-stone-900" : "text-stone-600 hover:text-stone-900")
                        } after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 hover:after:w-full after:h-px after:bg-current after:transition-all after:duration-300`

                        if (section.href) {
                            return (
                                <Link
                                    key={section.id}
                                    href={section.href}
                                    className={linkClasses}
                                >
                                    {section.label}
                                    {isActive && <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-current" />}
                                </Link>
                            )
                        }
                        return (
                            <button
                                key={section.id}
                                className={linkClasses}
                                onClick={() => navTo(section.id)}
                            >
                                {section.label}
                                {isActive && <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-current" />}
                            </button>
                        )
                    })}
                    <button
                        className="hover:cursor-pointer bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium px-5 py-1.5 rounded-full transition-colors duration-300"
                        onClick={() => { trackCTAClick("navbar", "Book a Demo"); navTo("contact") }}
                    >
                        Book a demo
                    </button>
                </ul>

                {/* Hamburger button */}
                <button
                    className={`md:hidden cursor-pointer transition-colors duration-300 ${showTransparent ? "text-white" : "text-stone-700"}`}
                    onClick={() => setDrawerOpen(true)}
                >
                    <Menu className="size-5" />
                </button>
            </nav>

            {/* Full-screen mobile nav drawer */}
            <div
                className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
                    drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/20"
                    onClick={() => setDrawerOpen(false)}
                />
                {/* Drawer panel */}
                <div
                    className={`absolute top-0 right-0 bottom-0 w-full bg-white/95 backdrop-blur-2xl transition-transform duration-300 flex flex-col ${
                        drawerOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    {/* Close button */}
                    <div className="flex justify-end p-6">
                        <button
                            className="cursor-pointer text-stone-700"
                            onClick={() => setDrawerOpen(false)}
                        >
                            <X className="size-6" />
                        </button>
                    </div>

                    {/* Nav links */}
                    <nav className="flex flex-col px-8 flex-1">
                        {navSections.map((section) => {
                            if (section.href) {
                                return (
                                    <Link
                                        key={section.id}
                                        href={section.href}
                                        className="py-5 text-xl font-serif border-b border-stone-100 text-stone-700 hover:text-stone-900 transition-colors duration-300"
                                        onClick={() => setDrawerOpen(false)}
                                    >
                                        {section.label}
                                    </Link>
                                )
                            }
                            return (
                                <button
                                    key={section.id}
                                    className="py-5 text-xl font-serif border-b border-stone-100 text-stone-700 hover:text-stone-900 transition-colors duration-300 text-left cursor-pointer"
                                    onClick={() => navTo(section.id)}
                                >
                                    {section.label}
                                </button>
                            )
                        })}
                    </nav>

                    {/* Bottom CTA */}
                    <div className="p-8">
                        <button
                            className="w-full bg-stone-900 hover:bg-stone-800 text-white font-medium py-4 rounded-full transition-colors duration-300 cursor-pointer text-lg"
                            onClick={() => { trackCTAClick("navbar_mobile", "Book a Demo"); navTo("contact") }}
                        >
                            Book a demo
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
