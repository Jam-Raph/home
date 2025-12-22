import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function smoothScroll(elementId: string) {
    const anchor = document.getElementById(elementId)
    if(!anchor) return 
    anchor.scrollIntoView({behavior: "smooth", block: 'center'})
}