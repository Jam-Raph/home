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

export default function Navbar() {
    
    return (
        <section className="z-10 bg-white/50 backdrop-blur-md w-full max-w-3/4 px-2 rounded-xl flex justify-between md:justify-center items-center gap-10 fixed top-3 left-1/2 -translate-x-1/2 border border-stone-200">
            <div className="flex items-center gap-2">
                <Image alt="company logo" width={30} height={0} className="h-auto w-auto" src="/J&R logo.png"></Image>
                <h1>Jam & Raph</h1>
            </div>

            {/* Full nav bar */}
            <ol className="md:flex gap-10 hidden">
                <button className="hover:cursor-pointer" onClick={() => smoothScroll("pillar")}>Pillar</button>
                <button className="hover:cursor-pointer" onClick={() => smoothScroll("security")} >Security</button>
                <button className="hover:cursor-pointer" onClick={() => smoothScroll("faq")}>FAQ</button>
                <button className="hover:cursor-pointer" onClick={() => smoothScroll("contact")}>Contact us</button>
            </ol>

            {/* Hamburger menu */}
            <div className="flex justify-between md:hidden">
                
                <DropdownMenu>
                      <DropdownMenuTrigger className="cursor-pointer"><Menu/></DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white">
                        <DropdownMenuItem><button onClick={() => smoothScroll("pillar")}>Pillar</button></DropdownMenuItem>
                        <DropdownMenuItem><button onClick={() => smoothScroll("security")} >Security</button></DropdownMenuItem>
                        <DropdownMenuItem><button onClick={() => smoothScroll("faq")}>FAQ</button></DropdownMenuItem>
                        <DropdownMenuItem><button onClick={() => smoothScroll("contact")}>Contact us</button></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </section>
    )
}