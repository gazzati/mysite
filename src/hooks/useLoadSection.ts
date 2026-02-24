"use client"

import { useState, useEffect, useRef, type RefObject } from "react"

function useIsVisible(ref: RefObject<HTMLElement | null>) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting))
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])

  return isIntersecting
}

export function useLoadSection() {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIsVisible(ref)

  useEffect(() => {
    if (!ref.current) return
    if (ref.current.classList.contains("visible")) return
    if (isVisible) ref.current.classList.add("visible")
  }, [isVisible])

  return ref
}
