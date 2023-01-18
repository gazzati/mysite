import React from 'react'
import {Link} from "react-router-dom"
import classNames from 'classnames'

import config from "@root/config"
import { LocaleContext, getLocaleTitle, getNextLocale } from "@root/helpers/locales"

import style from "./style.m.scss"
import {useContext} from 'react';

const Menu = ({open, setCurrentLocale}) => {
    const locale = useContext(LocaleContext)

    return <aside className={classNames(style.menu, {[style.open]: open})}>
        <nav className={style.nav}>
            <ul className={style.list}>
            {config.menuRoutes.map(item => (
                <li key={item.url}>
                    <Link to={item.url} className={style.link}>{item.name}</Link>
                </li>
            ))}
            </ul>

            <div className={style.divider}/>

            <div className={style.locale} onClick={setCurrentLocale}>
                {getLocaleTitle(locale)}
             </div>
        </nav>
    </aside>
}

export default Menu