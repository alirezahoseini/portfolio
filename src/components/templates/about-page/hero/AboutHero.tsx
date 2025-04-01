import { getTranslations } from "next-intl/server"
import React from "react"
import Link from "next/link"
import AboutHeroImage from "./AboutHeroImage"
import HeroTitle from "@/components/modules/HeroTitle"
import { Button } from "@/components/ui/button"

const AboutHero = async () => {
  const t = await getTranslations("AboutPage")
  

  return (
    <section
      className="max-screen !pt-9 flex flex-col items-center gap-8
      sm:flex-row md:gap-16 md:py-lg md:pt-sm"
    >
      <AboutHeroImage />

      <div className="w-full space-y-6">
        <HeroTitle 
          text={t("hero_title")}
        />

        <p className="text-balance my-6">
          {t("hero_subtitle")}
        </p>

        <Button
          className="rounded-full px-8 py-6 font-semibold"
        >
          <Link
            href={t("resume_file")}
            target="_blank"
          >
            {t("resume_title")}
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default AboutHero