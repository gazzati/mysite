import React, {useState, useEffect, useRef} from "react"
import classNames from "classnames"

import Icons from "@components/Icons"
import {Icon} from "@interfaces/icons"

import style from "./style.m.scss"

const useOutsideClick = (callback) => {
    const ref = useRef() as React.MutableRefObject<HTMLIFrameElement>

    useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) callback()
      }

      document.addEventListener('click', handleClick, true)

      return () => {
        document.removeEventListener('click', handleClick, true)
      }
    }, [ref])

    return ref
}

const Spotify = () => {
    const [open, setOpen] = useState(false)
    const ref = useOutsideClick(() => setOpen(false))

    return <>
        <iframe
            src="https://open.spotify.com/embed/playlist/1W4rT0DxWney9Y0YPUHn79?utm_source=generator&theme=0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className={classNames(style.spotify, {[style.visible]: open})}
            ref={ref}
        >
        </iframe>
        <div className={classNames(style.label, {[style.show]: !open})} onClick={() => setOpen(!open)}>
            <Icons name={Icon.Spotify}/>
        </div>
    </>
}

export default Spotify