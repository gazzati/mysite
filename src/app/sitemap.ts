import type { MetadataRoute } from "next"

import { config } from "@/config"
import { routing } from "@/i18n/routing"

const pages = ["", "/about", "/projects", "/contacts"]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const page of pages) {
    const languages: Record<string, string> = {}
    for (const locale of routing.locales) {
      languages[locale] = `${config.siteUrl}/${locale}${page}`
    }

    entries.push({
      url: `${config.siteUrl}/en${page}`,
      lastModified: new Date(),
      alternates: { languages },
    })
  }

  return entries
}
