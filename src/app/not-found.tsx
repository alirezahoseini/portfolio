import Image from "next/image"
import React from "react"
import clsx from "clsx"
import localFont from "next/font/local"
import Link from "next/link"
import { getTranslations } from "next-intl/server"
import { Button } from "@/components/ui/button"

// Fonts
const SatoshiFont = localFont({ 
  src: "../assets/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi"
})

const ClashDisplayFont = localFont({ 
  src: "../assets/fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clash"
})

const YekanFont = localFont({ 
  src: "../assets/fonts/YekanBakh.ttf",
  variable: "--font-yekan"
})

const DoranFont = localFont({
  src: "../assets/fonts/DoranFaNum-VF.ttf",
  variable: "--font-doran"
})


const GlobalNotFound = async () => {
  const t = await getTranslations("NotFound")
  const isTextPersian = /[\u0600-\u06FF]/.test(t("title"))
  const locale = isTextPersian ? "fa" : "en"
  const dir = locale === "fa" ? "rtl" : "ltr"

  return (
    <html lang={locale} dir={dir}>
      <body
        className={
          clsx(
            `bg-bg900-light dark:bg-bg900-dark ltr:font-normal rtl:font-light
            w-full h-screen flex items-center justify-center flex-col gap-4 p-2`,
            locale === "en" ? "font-satoshi" : "font-yekan",
            SatoshiFont.variable,
            ClashDisplayFont.variable,
            YekanFont.variable,
            DoranFont.variable
          )
        }
      >
        <div
          className="text-8xl md:text-9xl font-black flex items-center justify-center
        gap-4 font-clash"
        >
          <span>4</span>

          <Image 
            src="/404.png"
            alt="404"
            width={120}
            height={120}
            className="w-[100px] md:w-[120px]"
          />

          <span>4</span>

        </div>

        <h2 className="font-semibold text-3xl">{t("title")}</h2>

        <p className="text-center">
          {t("description")}
        </p>


        <Link href="/">
          <Button
            variant="outline" 
            size="lg"
            className="rounded-full p-5 border-solid border border-bg700-dark
            bg-transparent hover:bg-bg700-dark hover:text-bg700-light font-semibold"
          > 
            {t("button")}
          </Button>
        </Link>
      </body>
    </html>
  )
}


export default GlobalNotFound