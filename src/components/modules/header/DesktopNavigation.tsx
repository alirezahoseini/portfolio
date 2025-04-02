import React from "react"
import { useTranslations } from "next-intl"
import DesktopNavItem from "./DesktopNavItem"


const DesktopNavigation = () => {
  const t = useTranslations("Navigation")
    
  return (
    <div
      className="hidden lg:flex"
    >
      <ul
        className="flex items-center justify-center gap-6 will-change-auto"
      >
        <DesktopNavItem href="/" className="">
          {t("home")}
        </DesktopNavItem>
      
        <DesktopNavItem href="/about" className="">
          {t("about")}
        </DesktopNavItem>
      
        <DesktopNavItem href="/projects" className="">
          {t("projects")}
        </DesktopNavItem>
      
        <DesktopNavItem href="/contact" className="">
          {t("contact")}
        </DesktopNavItem>
      </ul>
    </div>
  )
}

export default DesktopNavigation