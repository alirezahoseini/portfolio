import React from "react"
import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import AboutHero from "@/components/templates/about-page/hero/AboutHero"
import TechsSlider from "@/components/modules/techs-slider/TechsSlider"
import Experience from "@/components/templates/about-page/experience/Experience"
import AboutDetails from "@/components/templates/about-page/details/AboutDetails"

export const generateMetadata = async ({ params }: {
  params: { locale: string }
}): Promise<Metadata> => {
  const locale = await params.locale
  const t = await getTranslations("AboutPage")

  return {
    title: t("meta_title"),
    description: t("meta_description"),
    openGraph: {
      title: t("meta_title"),
      description: t("meta_description"),
      locale: locale,
      type: "website"
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-video-preview": -1
      }
    },
    alternates: {
      canonical: `https://a-hosseini.ir/${locale}`,
      languages: {
        "en": "https://a-hosseini.ir/en",
        "fa": "https://a-hosseini.ir/fa"
      }
    }
  }
}


const AboutPage = () => {
  return (
    <div className="pt-0">
      <AboutHero /> 

      <div
        className="border-solid border-x-0
      border-bg700-light relative overflow-hidden
        border-y dark:border-bg700-dark py-3"
      >
        <TechsSlider />
      </div>

      <AboutDetails />

      <Experience />
    </div>
  )
}

export default AboutPage  