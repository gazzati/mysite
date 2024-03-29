import classNames from "classnames"
import React from "react"

import d, { useDictionary } from "@root/dictionary"

import { Animation, Fade } from "@helpers/animations"

import style from "./style.m.scss"

const animation = new Animation(Fade.Up, 11)

const Start = () => {
  const [locale] = useDictionary()

  return (
    <section className="visible">
      <div className={style.miniHeading} style={animation.getDuration()}>
        {d.start.welcome[locale]}
      </div>
      <div className={classNames(style.bigHeading, style.lightestHeading)} style={animation.getDuration()}>
        {d.start.name[locale]}
      </div>
      <div className={style.bigHeading} style={animation.getDuration()}>
        {d.start.title[locale]}
      </div>
      <p className={style.description} style={animation.getDuration()}>
        {d.start.description[locale]}
      </p>
    </section>
  )
}

export default Start
