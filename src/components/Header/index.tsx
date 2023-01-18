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
const SCROLL_LIMIT = window.screen.width > 767 ? 400 : 200

const Header = ({ setLocale, menuOpen, toggleMenuOpen }) => {
  const locale = useContext(LocaleContext)
  const [position, setPosition] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true)

  useEffect(()=> {
    window.addEventListener("scroll", () => {
      const moving = window.pageYOffset

      if(visible && moving < SCROLL_LIMIT) return

      setVisible(position > moving)
      setPosition(moving)
   })
  })

  const setCurrentLocale = () => {
    const currentLocale = getNextLocale(locale)

    setLocale(currentLocale)
    localStorage.setItem("locale", currentLocale)
  }

  return (
    <header className={classNames(style.header, { [style.hide]: !visible })}>
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
