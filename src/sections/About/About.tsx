"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

import { useLoadSection } from "@/hooks/useLoadSection"
import age from "@/lib/age"

import style from "./About.module.scss"

export default function About() {
  const t = useTranslations("about")
  const ref = useLoadSection()

  return (
    <section ref={ref} id="about">
      <h3 className="styled">{t("heading")}</h3>
      <div className={style.about}>
        <div className={style.aboutText}>
          <p>{t("start", { age })}</p>
          <p>{t("hobby")}</p>
          <p>
            {t("bio")} <span className={style.fake}>{t("fakeBio")}</span> {t("bioContinue")}
          </p>
          <p>{t("end")}</p>
        </div>

        <div className={style.portrait}>
          <Image src="/images/photo.jpg" alt="Timur Gazzaev" width={300} height={300} />
        </div>
      </div>
    </section>
  )
}
