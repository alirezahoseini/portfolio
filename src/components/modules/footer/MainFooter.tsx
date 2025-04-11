"use client"

import React from "react"
import { useTranslations } from "next-intl"
import { usePathname } from "next/navigation"
import AvailableBadge from "./AvailableBadge"
import SocialIcons from "./SocialIcons"
import SplitText from "@/components/ui/split-text"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import FadeInAnimate from "@/components/HOC/FadeInAnimate"

const MainFooter = () => {
  const t = useTranslations("Footer")
  const pathname = usePathname()
  return (
    !pathname.includes("/contact")
      ? (
        <div
          className={
            `
              bg-bg800-light 
              dark:bg-bg800-dark 
              rounded-3xl 
              flex 
              flex-col
              px-4 
              py-14 
              shadow-custom 
              items-center 
              justify-center
            `
          }
        >
          <FadeInAnimate infinite>
            <AvailableBadge />
          </FadeInAnimate>

          <div className="m-auto mt-2 mb-6 max-w-screen-sm text-balance text-center">
            <FadeInAnimate infinite>
              <SplitText
                text={t("footer_title")}
                className="text-4xl md:text-5xl rtl:font-semibold text-center
                        ltr:font-clash rtl:font-doran ltr:tracking-wide 
                        ltr:font-medium rtl:leading-[60px]"
                delay={150}
                duration={0.6} 
                staggerChildren={0.04}
                animationFrom={{ opacity: 0, y: 50 }}
                animationTo={{ opacity: 1, y: 0 }}
                easing={[0.215, 0.61, 0.355, 1]}
              />
            </FadeInAnimate>
          </div>
            
          <FadeInAnimate infinite>
            <Button className="rounded-full px-8 py-6 font-semibold mt-2">
              <Link href="/contact">
                {t("footer_btn")}
              </Link>
            </Button>
          </FadeInAnimate>

          <SocialIcons className="mt-8 md:hidden" />
        </div>
      )
      : ""
  )
}

export default MainFooter