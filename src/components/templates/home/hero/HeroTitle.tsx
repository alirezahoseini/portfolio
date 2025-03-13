import React from "react"
import { getTranslations } from "next-intl/server"


const HeroTitle = async () => {
  const t = await getTranslations("HomePage")
  const text = t("hero_title").split(",")

  return (
    <p
      className="text-[3rem] md:text-6xl lg:w-3/4 lg:text-7xl
      font-medium rtl:font-doran ltr:font-clash ltr:leading-none lg:rtl:!leading-[90px]
      text-pretty text-primary-light dark:text-primary-dark"
    >
      {text[0]} 

      <span 
        className="text-highlight-light 
        dark:text-highlight-dark"
      >
        {text[1]} 
      </span> 

      {text[2]} 
    </p>
  )
}

export default HeroTitle