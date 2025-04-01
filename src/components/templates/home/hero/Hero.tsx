import React from "react"
import { getTranslations } from "next-intl/server"
import Hello from "./Hello"
import HeroSubtitle from "./HeroSubtitle"
import HeroLinks from "./HeroLinks"
import HeroTitle from "@/components/modules/HeroTitle"


const Hero = async () => {
  const t = await getTranslations("HomePage")
  
  return (
    <section 
      id="hero-section"
      className="max-screen"
    >
      <Hello />

      <HeroTitle 
        text={t("hero_title")}
        className="lg:w-3/4"
      />

      <HeroSubtitle />

      <HeroLinks />

    </section>
  )
}

export default Hero