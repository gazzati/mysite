import React from "react"

import config from "@root/config"

import style from "./style.m.scss"

const SideEmail = () => {
    return <div className={style.side}>
        <div className={style.email}>
            <a className={style.link} href={`mailto:${config.email}`}>{config.email}</a>
        </div>
    </div>
}

export default SideEmail