"use client"

import { useEffect, useRef } from "react"
import { trackSectionViewed } from "@/lib/analytics"

export function SectionTracker({ sectionId }: { sectionId: string }) {
  const fired = useRef(false)

  useEffect(() => {
    const el = document.getElementById(sectionId)
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true
          trackSectionViewed(sectionId)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [sectionId])

  return null
}
