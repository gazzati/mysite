"use client"

import { useTranslations } from "next-intl"

import { Icons } from "@/components/Icons"
import { config } from "@/config"
import { useLoadSection } from "@/hooks/useLoadSection"

import style from "./Contacts.module.scss"

export default function Contacts() {
  const t = useTranslations("contacts")
  const ref = useLoadSection()

  return (
    <section ref={ref} id="contacts" className={style.contacts}>
      <h3>{t("heading")}</h3>

      <ul className={style.list}>
        {config.socialMedia.map(({ url, name }) => (
          <li key={name}>
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
