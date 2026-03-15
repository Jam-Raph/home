"use client"

import { useState, useEffect } from "react"
import { smoothScroll } from "@/lib/utils"

export function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const pastHero = window.scrollY > window.innerHeight
      const contactEl = document.getElementById("contact")
      let nearContact = false
      if (contactEl) {
        const rect = contactEl.getBoundingClientRect()
        nearContact = rect.top < window.innerHeight && rect.bottom > 0
      }
      setVisible(pastHero && !nearContact)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <button
      onClick={() => smoothScroll("contact")}
      className={`fixed bottom-6 right-6 z-40 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-full px-6 py-3 shadow-lg shadow-black/10 transition-all duration-300 cursor-pointer ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      Book a Demo
    </button>
  )
}
