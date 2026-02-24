"use client"

import { useState, useEffect } from "react"
import { useLocale } from "next-intl"

import { api } from "@/lib/api"

import style from "./Footer.module.scss"

export default function Footer() {
  const locale = useLocale()
  const [visits, setVisits] = useState(0)

  useEffect(() => {
    if (locale === "en") {
      api.get("/stats").then((res) => setVisits(res.data.visits)).catch(() => {})
    }
  }, [locale])

  if (locale !== "en") return null

  return (
    <div className={style.footer}>
      <div>Visits: {visits}</div>
    </div>
  )
}
