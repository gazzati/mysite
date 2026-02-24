import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import AllSections from "@/components/AllSections"
import ScrollToSection from "@/components/ScrollToSection"
import { config } from "@/config"
import { routing } from "@/i18n/routing"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "meta.projects" })

  const languages: Record<string, string> = {}
  for (const loc of routing.locales) {
    languages[loc] = `${config.siteUrl}/${loc}/projects`
  }

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${config.siteUrl}/${locale}/projects`,
      images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
    },
    alternates: { languages },
  }
}

export default function ProjectsPage() {
  return (
    <>
      <ScrollToSection sectionId="projects" />
      <AllSections />
    </>
  )
}
