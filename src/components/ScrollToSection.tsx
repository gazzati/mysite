"use client"

import { useEffect } from "react"

interface ScrollToSectionProps {
  sectionId: string
}

export default function ScrollToSection({ sectionId }: ScrollToSectionProps) {
  useEffect(() => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [sectionId])

  return null
}
