import React, {useContext} from "react"
import classNames from "classnames"

import mountains from "@assets/images/mountains.jpg"
import l, {Locale, LocaleContext} from "@root/locales"

import style from "./style.m.scss"

const Home = () => {
    const locale = useContext(LocaleContext)

    return <>
        <section>
            <div className={style.miniHeading}>{l.home.start.welcome[locale]}</div>
            <div className={classNames(style.bigHeading, style.lightestHeading)}>
                {l.home.start.name[locale]}
            </div>
            <div className={style.bigHeading}>
                {l.home.start.title[locale]}
            </div>
            <div className={style.description}>{l.home.start.description[locale]}</div>
        </section>

        <section>
            <img className={style.image} src={mountains} alt="img"/>
        </section>
    </>
}

export default Home