"use client"
import React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import Image from "next/image"
import { useLocale } from "next-intl"
import DesktopNavigation from "./DesktopNavigation"
import { Separator } from "@/components/ui/separator"
import { Link, usePathname, useRouter } from "@/i18n/routing"
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
    <header 
      className="sticky z-50 top-0 
      bg-gradient-to-b from-bg900-light dark:from-bg900-dark pt-2"
    >
      <nav
        className="flex w-[95%] lg:w-full mx-auto justify-between 
      items-center bg-white dark:bg-zinc-900 backdrop-blur-[12px]
       border-bg700-light border-solid border dark:border-bg700-dark
       text-zinc-600 dark:text-zinc-100 py-1 px-6 rounded-full 
       bg-opacity-60 dark:bg-opacity-60 shadow-sm max-w-[600px]"
      >
        <h1 className="font-clash text-xl md:text-2xl font-medium ">
          <Link href="/" >
            AH
          </Link>
        </h1>

        <DesktopNavigation />

        <div className="flex items-center gap-2">
          <button
            className="rounded-full w-11 h-11 inline-flex items-center justify-center
         text-sm transition-all outline-none active:scale-90 active:bg-accent"
            onClick={themeChangeHandler}
          >
            {theme === "dark" ? <Sun size="18px" /> : <Moon size="18px" />}
          </button>

          <Separator orientation="vertical" className="h-5" />

          <Button
            variant="ghost"
            size="icon"
            onClick={switchLanguage}
            className="bg-none rounded-full hover:bg-transparent"
          >
            <Image
              src={`/${locale == "fa" ? "en" : "ir"}-flag.png`}
              width="35"
              height="35"
              alt="flag"
              className="w-[30px] h-auto mx-1"
            />
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default React.memo(Header)