import React from "react"
import classNames from "classnames"
import mountains from "@assets/images/mountains.jpg"

import style from "./style.m.scss"

const Home = () => {
    return <>
        <section>
            <div className={style.miniHeading}>Hi, my name is</div>
            <div className={classNames(style.bigHeading, style.lightestHeading)}>Gazzaev Timur.</div>
            <div className={style.bigHeading}>I'm a software engineer.</div>
            <div className={style.description}>I am a programmer specializing in web application development. Currently, I'm focused on backend and VoIP development</div>
        </section>

        <section>
            <img className={style.image} src={mountains} alt="img"/>
        </section>
    </>
}

export default Home