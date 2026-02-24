"use client"

import { useEffect } from "react"

import { api } from "@/lib/api"

export default function VisitTracker() {
  useEffect(() => {
    api.post("/stats/visit").catch(() => {})
  }, [])

  return null
}
