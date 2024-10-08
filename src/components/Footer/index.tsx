import React, { useState, useEffect } from "react"

import { api } from "@root/api"

import style from "./style.m.scss"

const Footer = () => {
  const [stats, setStats] = useState({ visits: 0 })

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    const response = await api.get("/stats")

    setStats({ visits: response.data.visits })
  }

  return (
    <div className={style.footer}>
      <div>Visits: {stats.visits}</div>
    </div>
  )
}

export default Footer
