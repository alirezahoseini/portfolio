import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import TitlesSlider from "@/components/modules/TitlesSlider"
import About from "@/components/templates/home/about/About"
import Hero from "@/components/templates/home/hero/Hero"
import Projects from "@/components/templates/home/projects/Projects"
import Speciality from "@/components/templates/home/speciality/Speciality"
import Testimonials from "@/components/templates/home/testimonials/Testimonials"

export const generateMetadata = async ({ params }: {
  params: { locale: string }
}): Promise<Metadata> => {
  const { locale } = params
  const t = await getTranslations("HomePage")

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

export default async function HomePage() {

  return (
    <>
      <Hero />

      <TitlesSlider />

      <About />

      <Projects />

      <Speciality />

      <Testimonials />
    </>
  )
}