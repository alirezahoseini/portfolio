import localFont from "next/font/local"
import { Inter } from "next/font/google"
import { notFound } from "next/navigation"
import React from "react"
import clsx from "clsx"
import { routing, ILocales } from "@/i18n/routing"
import { ThemeProvider } from "@/lib/providers/ThemeProvider"
import LocaleProvider from "@/lib/providers/LocaleProvider"
import Header from "@/components/modules/Header"
import StickyNavigation from "@/components/modules/sticky-navigation/StickyNavigation"
import ReactQueryProvider from "@/lib/providers/ReactQueryProvider"

// Fonts
const myFont = Inter({ subsets: ["latin"] })
const FaFont = localFont({ src: "../../assets/fonts/YekanBakh.ttf" })


type Props = {
  children: React.ReactNode
  params: Promise<{ locale: ILocales }>
}


export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale)) {
    notFound()
  }

  const dir = locale === "fa" ? "rtl" : "ltr"

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={
          clsx(
            "px-2 max-w-screen-xl mx-auto",
            locale === "en" ? myFont.className : FaFont.className
          )
        }
      >
        <ReactQueryProvider>
          <LocaleProvider locale={locale}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Header />

              <StickyNavigation />

              <div className="mb-[100px] container mx-auto px-4">
                {children}
              </div>
            </ThemeProvider>
          </LocaleProvider>
        </ReactQueryProvider>


      </body>
    </html>
  )
}