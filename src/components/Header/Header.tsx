"use client"

import { useEffect } from "react"
import { useLocale, useTranslations } from "next-intl"

import { Link, usePathname, useRouter } from "@/i18n/navigation"
import { locales, type Locale } from "@/i18n/routing"
import { Fade, getAnimationStyle } from "@/lib/animations"
import { config } from "@/config"

import style from "./Header.module.scss"

const SCROLL_LIMIT = 200

export default function Header() {
  const t = useTranslations()
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const body = document.body
    const scrollUp = "scroll-up"
    const scrollDown = "scroll-down"
    let lastScroll = 0

    const handleScroll = () => {
      const currentScroll = window.pageYOffset
      if (currentScroll > SCROLL_LIMIT && currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        body.classList.remove(scrollUp)
        body.classList.add(scrollDown)
      } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
        body.classList.remove(scrollDown)
        body.classList.add(scrollUp)
      }
      lastScroll = currentScroll
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLocaleSwitch = () => {
    const currentIndex = locales.indexOf(locale)
    const nextLocale = locales[(currentIndex + 1) % locales.length]
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <header className={style.header}>
      <Link href="/" className={style.logo} style={getAnimationStyle(Fade.Down, 0)}>
        <span className={style.logoText}>gazzati</span>
      </Link>

      <nav className={style.nav}>
        <ul className={style.list}>
          {config.menuRoutes.map((item, index) => (
            <li key={item.href} style={getAnimationStyle(Fade.Down, index + 1)}>
              <Link className={style.link} href={item.href}>
                {t(item.translationKey)}
              </Link>
            </li>
          ))}
        </ul>

        <a href="/resume.pdf" target="_blank" className={style.link} style={getAnimationStyle(Fade.Down, 3)}>
          {t("links.resume")}
        </a>

        <div className={style.divider} style={getAnimationStyle(Fade.Down, 4)}>
          |
        </div>

        <div className={style.locale} onClick={handleLocaleSwitch} style={getAnimationStyle(Fade.Down, 5)}>
          {t("locale.title")}
        </div>
      </nav>
    </header>
  )
}
