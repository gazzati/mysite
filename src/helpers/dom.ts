import { useState, useEffect, useRef, RefObject } from "react"

export const useOutsideClick = <T>(callback) => {
  const ref = useRef<T>(null)

  useEffect(() => {
    const handleClick = event => {
      //@ts-ignore
      if (ref.current && !ref.current.contains(event.target)) callback()
    }

    document.addEventListener("click", handleClick, true)

    return () => {
      document.removeEventListener("click", handleClick, true)
    }
  }, [])

  return ref
}

const useIsVisible = (ref: RefObject<HTMLElement>) => {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting))
    //@ts-ignore
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [ref])

  if (isIntersecting) return isIntersecting
}

export const loadSection = (ref: RefObject<HTMLElement>) => {
  const isVisible = useIsVisible(ref)

  if (ref.current?.classList.contains("visible")) return
  if (isVisible) ref.current?.classList.add("visible")
}
