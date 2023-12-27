import Icons from "@components/Icons"
import classNames from "classnames"
import React, { useState } from "react"

import { Animation, Fade } from "@helpers/animations"
import { useOutsideClick } from "@helpers/dom"

import { Icon } from "@interfaces/icons"

import style from "./style.m.scss"

const animation = new Animation(Fade.Up, 15)

const Spotify = () => {
  const [open, setOpen] = useState(false)
  const ref = useOutsideClick<HTMLIFrameElement>(() => setOpen(false))

  return (
    <>
      <iframe
        src="https://open.spotify.com/embed/playlist/1W4rT0DxWney9Y0YPUHn79?utm_source=generator&theme=0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className={classNames(style.spotify, { [style.visible]: open })}
        ref={ref}
      ></iframe>
      <div
        className={classNames(style.label, { [style.show]: !open })}
        onClick={() => setOpen(!open)}
        style={animation.getDuration()}
      >
        <Icons name={Icon.Spotify} />
      </div>
    </>
  )
}

export default Spotify
