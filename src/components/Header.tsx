"use client"
import React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import Image from "next/image"
import { useLocale } from "next-intl"
import { Separator } from "@/components/ui/separator"
import { usePathname, useRouter } from "@/i18n/routing"
import { Button } from "@/components/ui/button"

function Header() {
  const { setTheme, theme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()

  const themeChangeHandler = () => {
    if (theme === "light") {
      setTheme("dark")
    }
    else {
      setTheme("light")
    }
  }

  const switchLanguage = () => {
    router.replace(pathname, { locale: `${locale === "en" ? "fa" : "en"}` })
  }

  return (
    <header className="sticky top-0 mb-6 pt-2 container mx-auto">
      <div
        className="flex w-[95%] mx-auto justify-between 
      items-center bg-white dark:bg-zinc-900 backdrop-blur-md
       border-slate-200 border-solid border dark:border-zinc-700
       text-zinc-600 dark:text-zinc-100 py-2 px-4 rounded-full 
       bg-opacity-60 dark:bg-opacity-60 shadow-sm"
      >
        <h1>AH</h1>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-2xl"
            onClick={themeChangeHandler}
          >
            {theme === "dark" ? <Sun size="40px" /> : <Moon size="40px" />}
          </Button>

          <Separator orientation="vertical" className="h-5" />

          <Button variant="ghost" size="icon" onClick={switchLanguage}>
            <Image
              src={`/${locale == "fa" ? "en" : "ir"}-flag.png`}
              width="35"
              height="35"
              alt="flag"
              className="w-[30px] h-auto mx-1"
            />
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header