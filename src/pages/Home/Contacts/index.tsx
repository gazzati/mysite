import React, { useRef, useContext } from "react"

import Icons from "@root/components/Icons"
import config from "@root/config"
import { loadSection } from "@root/helpers/dom"
import l, { LocaleContext } from "@root/helpers/locales"

import style from "./style.m.scss"

const Contacts = () => {
  const locale = useContext(LocaleContext)

  const ref = useRef<HTMLIFrameElement>(null)
  loadSection(ref)

  return (
    <section ref={ref} id="contacts" className={style.contacts}>
      <h3>{l.home.contacts.heading[locale]}</h3>

      <ul className={style.list}>
        {config.socialMedia.map(({ url, name }, index) => (
          <li key={index}>
            <a className={style.link} href={url} aria-label={name} target="_blank" rel="noreferrer">
              <Icons name={name} />
            </a>
          </li>
        ))}
      </ul>

      <a className={style.email} href={`mailto:${config.email}`}>
        {config.email}
      </a>
    </section>
  )
}

export default Contacts
