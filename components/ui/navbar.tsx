"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
        <section className="z-50 bg-white/50 backdrop-blur-md w-full max-w-3/4 px-2 rounded-xl flex justify-between md:justify-center items-center gap-10 fixed top-3 left-1/2 -translate-x-1/2 border border-stone-200">
            <Link href="/" className="flex items-center gap-2">
                <Image alt="company logo" width={30} height={0} className="h-auto w-auto" src="/J&R logo.png"></Image>
                <h1>Jam & Raph</h1>
            </Link>

            {/* Full nav bar */}
            <ol className="md:flex gap-10 hidden">
                <button className="hover:cursor-pointer" onClick={() => navTo("pillar")}>Features</button>
                <button className="hover:cursor-pointer" onClick={() => navTo("security")} >Security</button>
                <button className="hover:cursor-pointer" onClick={() => navTo("faq")}>FAQ</button>
                <button className="hover:cursor-pointer" onClick={() => navTo("contact")}>Contact us</button>
            </ol>

            {/* Hamburger menu */}
            <div className="flex justify-between md:hidden">

                <DropdownMenu>
                      <DropdownMenuTrigger className="cursor-pointer"><Menu/></DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white">
                        <DropdownMenuItem><button onClick={() => navTo("pillar")}>Features</button></DropdownMenuItem>
                        <DropdownMenuItem><button onClick={() => navTo("security")} >Security</button></DropdownMenuItem>
                        <DropdownMenuItem><button onClick={() => navTo("faq")}>FAQ</button></DropdownMenuItem>
                        <DropdownMenuItem><button onClick={() => navTo("contact")}>Contact us</button></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </section>
    )
}