import React, { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"

import Menu from "@components/Menu"
import Burger from "@components/Burger"
import { LocaleContext, getLocaleTitle, getNextLocale } from "@root/helpers/locales"
import { Animation, Fade } from "@root/helpers/animations"
import config from "@root/config"

import style from "./style.m.scss"

const animation = new Animation(Fade.Down, 0)

const Header = ({ setLocale, menuOpen, toggleMenuOpen }) => {
  const locale = useContext(LocaleContext)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const scrollLimit = window.screen.width > 767 ? 120 : 60
    let oldValue = 0 // TODO: remove

    window.onscroll = () => {
      if(oldValue > window.scrollY) return setScrolled(false)

      setScrolled(window.scrollY > scrollLimit)
      oldValue = window.scrollY
    }
  }, [])

  const setCurrentLocale = () => {
    const currentLocale = getNextLocale(locale)

    setLocale(currentLocale)
    localStorage.setItem("locale", currentLocale)
  }

  return (
    <header className={classNames(style.header, { [style.headerScroll]: scrolled })}>
      <Link to="/" className={style.logo}
      style={animation.getDuration()}
      >
        <span className={style.logoText}>gazzati</span>
      </Link>

      <nav className={style.nav}>
        <ul className={style.list}>
          {config.menuRoutes.map(item => (
            <li key={item.url} style={animation.getDuration()}>
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <div style={animation.getDuration()}>|</div>

        <div className={style.locale} onClick={setCurrentLocale} style={animation.getDuration()}>
          {getLocaleTitle(locale)}
        </div>
      </nav>

      <Burger open={menuOpen} toggleMenuOpen={toggleMenuOpen} animationStyle={animation.getDuration()} />

      <Menu open={menuOpen} setCurrentLocale={setCurrentLocale}/>
    </header>
  )
}

export default Header
