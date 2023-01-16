import React, {useContext} from "react"
import classNames from "classnames"

import mountains from "@assets/images/mountains.jpg"
import l, {LocaleContext} from "@root/helpers/locales"
import {Animation, Fade} from '@root/helpers/animations'

import style from "./style.m.scss"


const animation = new Animation(Fade.Up, 11)

const Home = () => {
    const locale = useContext(LocaleContext)

    return <>
        <section>
            <div className={style.miniHeading} style={animation.getDuration()}>{l.home.start.welcome[locale]}</div>
            <div className={classNames(style.bigHeading, style.lightestHeading)} style={animation.getDuration()}>
                {l.home.start.name[locale]}
            </div>
            <div className={style.bigHeading} style={animation.getDuration()}>
                {l.home.start.title[locale]}
            </div>
            <div className={style.description} style={animation.getDuration()}>{l.home.start.description[locale]}</div>
        </section>

        <section>
            <img className={style.image} src={mountains} alt="img"/>
        </section>
    </>
}

export default Home