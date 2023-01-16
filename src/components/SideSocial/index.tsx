import React from "react"

import Icons from "@components/Icons"
import config from "@root/config"
import {Animation, Fade} from '@root/helpers/animations'

import style from "./style.m.scss"

const animation = new Animation(Fade.Up, 15)

const SideSocial = () => {
    return <div className={style.side} style={animation.getDuration()}>
        <ul className={style.list}>
            {config.socialMedia.map(({ url, name }, index) => (
                <li key={index}>
                    <a className={style.link} href={url} aria-label={name} target="_blank" rel="noreferrer">
                        <Icons name={name}/>
                    </a>
                </li>
            ))}
        </ul>
    </div>
}

export default SideSocial