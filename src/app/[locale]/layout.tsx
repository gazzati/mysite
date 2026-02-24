import type { ReactNode } from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations } from "next-intl/server"

import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import SideSocial from "@/components/SideSocial/SideSocial"
import SideEmail from "@/components/SideEmail/SideEmail"
import VisitTracker from "@/components/VisitTracker"
import { routing, type Locale } from "@/i18n/routing"
import { config } from "@/config"

import "@/styles/globals.scss"

const rubik = localFont({
  src: [
    { path: "../../../public/fonts/Rubik-Light.ttf", weight: "300", style: "normal" },
    { path: "../../../public/fonts/Rubik-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../../public/fonts/Rubik-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../../public/fonts/Rubik-Bold.ttf", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-rubik",
})

type Props = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "meta.home" })

  const languages: Record<string, string> = {}
  for (const loc of routing.locales) {
    languages[loc] = `${config.siteUrl}/${loc}`
  }

  return {
    metadataBase: new URL(config.siteUrl),
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${config.siteUrl}/${locale}`,
      siteName: "Timur Gazzaev",
      type: "website",
      images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
    },
    alternates: {
      languages,
    },
    verification: {
      google: "p6nnz24sFtniLoqZ5aEc78HdeEGgDuTLy8ic9SuOwWM",
    },
    icons: {
      icon: "/images/favicon.ico",
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} className={rubik.variable}>
      <body style={{ fontFamily: "var(--font-rubik), sans-serif" }}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <SideSocial />
          <SideEmail />
          {children}
          <Footer />
          <VisitTracker />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
