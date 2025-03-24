import React from "react"
import { getTranslations } from "next-intl/server"
import SocialIcons from "./SocialIcons"


const Copyright = async () => {
  const t = await getTranslations("Footer")
  return (
    <div 
      className={
        `flex flex-col justify-center md:justify-between items-center gap-4 md:flex-row 
         mb-32 lg:mb-16 mt-6`
      }
    >
      <p className="text-sm">
        {t("copyright")}
      </p>

      <SocialIcons className="hidden md:flex" />
    </div>
  )
}

export default Copyright