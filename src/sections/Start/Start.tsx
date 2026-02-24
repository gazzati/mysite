"use client"

import classNames from "classnames"
import { useTranslations } from "next-intl"

import { Fade, getAnimationStyle } from "@/lib/animations"

import style from "./Start.module.scss"

export default function Start() {
  const t = useTranslations("start")

  return (
    <section className="visible">
      <div className={style.miniHeading} style={getAnimationStyle(Fade.Up, 11)}>
        {t("welcome")}
      </div>
      <div className={classNames(style.bigHeading, style.lightestHeading)} style={getAnimationStyle(Fade.Up, 12)}>
        {t("name")}
      </div>
      <div className={style.bigHeading} style={getAnimationStyle(Fade.Up, 13)}>
        {t("title")}
      </div>
      <p className={style.description} style={getAnimationStyle(Fade.Up, 14)}>
        {t("description")}
      </p>
    </section>
  )
}
