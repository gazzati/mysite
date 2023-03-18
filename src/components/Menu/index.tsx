import classNames from "classnames"
import React from "react"
import { HashLink } from "react-router-hash-link"

import config from "@root/config"
import { useDictionary, getLocaleTitle } from "@root/dictionary"

import style from "./style.m.scss"

const Menu = ({ open, toggleMenuOpen, setCurrentLocale }) => {
  const [locale] = useDictionary()

  return (
    <aside className={classNames(style.menu, { [style.open]: open })}>
      <nav className={style.nav}>
        <ul className={style.list}>
          {config.menuRoutes.map(item => (
            <li key={item.url} onClick={toggleMenuOpen}>
              <HashLink to={item.url} className={style.link}>
                {item.name}
              </HashLink>
            </li>
          ))}
        </ul>

        <div className={style.divider} />

        <div className={style.locale} onClick={setCurrentLocale}>
          {getLocaleTitle(locale)}
        </div>
      </nav>
    </aside>
  )
}

export default Menu
