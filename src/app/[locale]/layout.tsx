import localFont from "next/font/local"
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
const SatoshiFont = localFont({ 
  src: "../../assets/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi"
})

const ClashDisplayFont = localFont({ 
  src: "../../assets/fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clash"
})

const YekanFont = localFont({ 
  src: "../../assets/fonts/YekanBakh.ttf",
  variable: "--font-yekan"
})

const DoranFont = localFont({
  src: "../../assets/fonts/DoranFaNum-VF.ttf",
  variable: "--font-doran"
})

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
            "bg-bg900-light dark:bg-bg900-dark ltr:font-normal rtl:font-light",
            locale === "en" ? "font-satoshi" : "font-yekan",
            SatoshiFont.variable,
            ClashDisplayFont.variable,
            YekanFont.variable,
            DoranFont.variable
          )
        }
      >
        <ReactQueryProvider>
          <LocaleProvider locale={locale}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Header />

              <StickyNavigation />

              <div className="mb-[100px]">
                {children}
              </div>
            </ThemeProvider>
          </LocaleProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}