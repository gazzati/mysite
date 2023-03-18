import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

import resume from "@root/assets/resume.pdf"
import config from "@root/config"
import d, { useDictionary, getLocaleTitle } from "@root/dictionary"
import { Animation, Fade } from "@root/helpers/animations"

import style from "./style.m.scss"

const animation = new Animation(Fade.Down, 0)
const SCROLL_LIMIT = 200

const Header = () => {
  const [locale, setNextLocale] = useDictionary()

  useEffect(() => {
    const body = document.body

    const scrollUp = "scroll-up"
    const scrollDown = "scroll-down"
    let lastScroll = 0

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset

      if (currentScroll > SCROLL_LIMIT && currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        body.classList.remove(scrollUp)
        body.classList.add(scrollDown)
      } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
        body.classList.remove(scrollDown)
        body.classList.add(scrollUp)
      }

      lastScroll = currentScroll
    })
  }, [])

  return (
    <header className={style.header}>
      <Link to="/" className={style.logo} style={animation.getDuration()}>
        <span className={style.logoText}>gazzati</span>
      </Link>

      <nav className={style.nav}>
        <ul className={style.list}>
          {config.menuRoutes.map(item => (
            <li key={item.url} style={animation.getDuration()}>
              <HashLink className={style.link} to={item.url}>
                {item.name[locale]}
              </HashLink>
            </li>
          ))}
        </ul>

        <a href={resume} target="_blank" className={style.link} style={animation.getDuration()}>
          {d.links.resume[locale]}
        </a>

        <div className={style.divider} style={animation.getDuration()}>
          |
        </div>

        <div className={style.locale} onClick={setNextLocale} style={animation.getDuration()}>
          {getLocaleTitle(locale)}
        </div>
      </nav>

      {/* <Burger open={menuOpen} toggleMenuOpen={toggleMenuOpen} animationStyle={animation.getDuration()} /> */}

      {/* <Menu open={menuOpen} toggleMenuOpen={toggleMenuOpen} setCurrentLocale={setCurrentLocale} /> */}
    </header>
  )
}

export default Header
