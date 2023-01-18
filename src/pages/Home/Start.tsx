import React, { useContext} from "react"
import classNames from "classnames"

import l, {LocaleContext} from "@root/helpers/locales"
import {Animation, Fade} from '@root/helpers/animations'

import style from "./style.m.scss"

const animation = new Animation(Fade.Up, 11)

const Start = () => {
    const locale = useContext(LocaleContext)

    return <section className="visible">
            <div className={style.miniHeading} style={animation.getDuration()}>{l.home.start.welcome[locale]}</div>
            <div className={classNames(style.bigHeading, style.lightestHeading)} style={animation.getDuration()}>
                {l.home.start.name[locale]}
            </div>
            <div className={style.bigHeading} style={animation.getDuration()}>
                {l.home.start.title[locale]}
            </div>
            <p className={style.description} style={animation.getDuration()}>{l.home.start.description[locale]}</p>
      </section>
}

export default Start