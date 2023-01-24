import React from "react"

import config from "@root/config"
import { Animation, Fade } from "@root/helpers/animations"

import style from "./style.m.scss"

const animation = new Animation(Fade.Up, 15)

const SideEmail = () => {
  return (
    <div className={style.side} style={animation.getDuration()}>
      <div className={style.email}>
        <a className={style.link} href={`mailto:${config.email}`}>
          {config.email}
        </a>
      </div>
    </div>
  )
}

export default SideEmail
