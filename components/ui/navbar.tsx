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
        <header className="z-10 bg-[radial-gradient(circle_at_center,_#B11226_0%,_#8E1624_45%,_#4A0B14_100%)] w-full max-w-3/4 px-4 py-2 rounded-xl flex justify-between md:justify-center items-center gap-10 fixed top-3 left-1/2 -translate-x-1/2 border border-gray-200">
            <div className="flex items-center gap-2">
                <Image alt="company logo" width={30} height={0} className="h-auto w-auto" src="/J&R logo.png"></Image>
                <h1 className="text-white">Jam & Raph</h1>
            </div>

            {/* Full nav bar */}
            <ol className="md:flex gap-10 hidden">
                <button className="text-white hover:text-white/80 hover:cursor-pointer transition-colors" onClick={() => smoothScroll("pillar")}>Pillar</button>
                <button className="text-white hover:text-white/80 hover:cursor-pointer transition-colors" onClick={() => smoothScroll("security")} >Security</button>
                <button className="text-white hover:text-white/80 hover:cursor-pointer transition-colors" onClick={() => smoothScroll("faq")}>FAQ</button>
                <button className="text-white hover:text-white/80 hover:cursor-pointer transition-colors" onClick={() => smoothScroll("contact")}>Contact us</button>
            </ol>

            {/* Hamburger menu */}
            <div className="flex justify-between md:hidden">

                <DropdownMenu>
                      <DropdownMenuTrigger className="cursor-pointer text-white"><Menu/></DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white">
                        <DropdownMenuItem><button onClick={() => smoothScroll("pillar")}>Pillar</button></DropdownMenuItem>
                        <DropdownMenuItem><button onClick={() => smoothScroll("security")} >Security</button></DropdownMenuItem>
                        <DropdownMenuItem><button onClick={() => smoothScroll("faq")}>FAQ</button></DropdownMenuItem>
                        <DropdownMenuItem><button onClick={() => smoothScroll("contact")}>Contact us</button></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}