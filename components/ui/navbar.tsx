"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { smoothScroll } from "@/lib/utils"

import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
    const pathname = usePathname()
    const isHome = pathname === "/"

    function navTo(id: string) {
        if (isHome) {
            smoothScroll(id)
        } else {
            window.location.href = `/#${id}`
        }
    }

    return (
        <section className="z-50 bg-white/80 backdrop-blur-md w-full max-w-3/4 px-4 py-2 rounded-full flex justify-between md:justify-center items-center gap-10 fixed top-4 left-1/2 -translate-x-1/2 border border-[#E5E5E5] shadow-sm">
            <Link href="/" className="flex items-center gap-2">
                <Image alt="company logo" width={30} height={0} className="h-auto w-auto" src="/J&R logo.png" />
                <h1 className="text-stone-900 font-medium">Jam & Raph</h1>
            </Link>

            {/* Full nav bar */}
            <ol className="md:flex gap-8 hidden items-center">
                <button className="hover:cursor-pointer text-stone-600 hover:text-stone-900 transition-colors text-sm" onClick={() => navTo("pillar")}>Features</button>
                <button className="hover:cursor-pointer text-stone-600 hover:text-stone-900 transition-colors text-sm" onClick={() => navTo("security")}>Security</button>
                <button className="hover:cursor-pointer text-stone-600 hover:text-stone-900 transition-colors text-sm" onClick={() => navTo("faq")}>FAQ</button>
                <button
                    className="hover:cursor-pointer bg-brand-primary hover:bg-brand-hover text-white text-sm font-medium px-5 py-1.5 rounded-full transition-colors"
                    onClick={() => navTo("contact")}
                >
                    Book a Demo
                </button>
            </ol>

            {/* Hamburger menu */}
            <div className="flex justify-between md:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger className="cursor-pointer text-stone-700"><Menu /></DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white border-[#E5E5E5]">
                        <DropdownMenuItem><button onClick={() => navTo("pillar")}>Features</button></DropdownMenuItem>
                        <DropdownMenuItem><button onClick={() => navTo("security")}>Security</button></DropdownMenuItem>
                        <DropdownMenuItem><button onClick={() => navTo("faq")}>FAQ</button></DropdownMenuItem>
                        <DropdownMenuItem><button onClick={() => navTo("contact")}>Book a Demo</button></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </section>
    )
}
