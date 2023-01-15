import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import classNames from "classnames"

import style from "./style.m.scss"

const navItems = [
    {url: "/about", name: "About"},
    {url: "/resume", name: "Resume"},
    {url: "/contacts", name: "Contacts"}
]

const Header = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        window.onscroll = () => {
            setScrolled(window.scrollY > 120)
        }
    }, [])

    return <header className={classNames(style.header, {[style.headerScroll]: scrolled})}>
        <nav className={style.nav}>
            <Link to="/" className={style.logo}>gazzati</Link>

            <ul className={style.list}>
                {navItems.map(item => (
                    <li key={item.url}>
                        <Link to={item.url}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
}

export default Header