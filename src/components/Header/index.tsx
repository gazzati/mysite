import React, {useState, useEffect, useContext} from 'react'
import {Link} from "react-router-dom"
import classNames from "classnames"

import {LocaleContext, getLocaleTitle, getNextLocale} from '@root/helpers/locales'
import {Animation, Fade} from '@root/helpers/animations'

import style from "./style.m.scss"

const navItems = [
    {url: "/about", name: "About"},
    {url: "/resume", name: "Resume"},
    {url: "/contacts", name: "Contacts"}
]

const animation = new Animation(Fade.Down, 5)

const Header = ({setLocale}) => {
    const locale = useContext(LocaleContext)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        window.onscroll = () => {
            setScrolled(window.scrollY > 120)
        }
    }, [])

    const setCurrentLocale = () => {
        const currentLocale = getNextLocale(locale)

        setLocale(currentLocale)
        localStorage.setItem("locale", currentLocale)
    }

    return <header className={classNames(style.header, {[style.headerScroll]: scrolled})}>
        <Link to="/" className={style.logo} style={animation.getDuration()}>gazzati</Link>
        <nav className={style.nav}>
            <ul className={style.list}>
                {navItems.map(item => (
                    <li key={item.url} style={animation.getDuration()}>
                        <Link to={item.url}>{item.name}</Link>
                    </li>
                ))}
            </ul>

            <div style={animation.getDuration()}>|&nbsp;</div>

            <div className={style.locale} onClick={setCurrentLocale} style={animation.getDuration()}>
                {getLocaleTitle(locale)}
            </div>
        </nav>
    </header>
}

export default Header