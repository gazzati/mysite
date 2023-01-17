import React, { useEffect, useRef } from "react"

export const useOutsideClick = callback => {
  const ref = useRef() as React.MutableRefObject<HTMLIFrameElement>

  useEffect(() => {
    const handleClick = event => {
      if (ref.current && !ref.current.contains(event.target)) callback()
    }

    document.addEventListener("click", handleClick, true)

    return () => {
      document.removeEventListener("click", handleClick, true)
    }
  }, [])

  return ref
}
