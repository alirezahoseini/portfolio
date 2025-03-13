import React from "react"
import { getTranslations } from "next-intl/server"

const HeroSubtitle = async () => {
  const t = await getTranslations("HomePage")
  return (
    <div
      className="flex items-center gap-4 mt-8 rtl:mt-10
    flex-col md:flex-row
    "
    >
      <div className="h-[1px] w-full md:w-6/12 bg-bg700-light dark:bg-bg700-dark"></div>

      <p
        className="w-full md:w-6/12 font-normal rtl:font-light text-secondary-light 
      dark:text-secondary-dark"
      >{t("hero_subtitle")}
      </p>

    </div>
  )
}

export default HeroSubtitle