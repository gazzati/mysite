import React from "react"

import Icons from "@components/Icons"
import config from "@root/config"

import style from "./style.m.scss"

const SideSocial = () => {
    return <div className={style.side}>
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