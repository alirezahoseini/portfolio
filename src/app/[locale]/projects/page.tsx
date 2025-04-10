import React from "react"
import { getTranslations } from "next-intl/server"
import { Metadata } from "next"
import SectionTitle from "@/components/modules/SectionTitle"
import ProjectsSection from "@/components/templates/projects-archive/ProjectsSection"

export const generateMetadata = async ({ params }: {
  params: { locale: string }
}): Promise<Metadata> => {
  const locale = await params.locale
  const t = await getTranslations("ProjectsPage")

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


const ProjetsPage = async () => {
  const t = await getTranslations("ProjectsPage")

  return (
    <section className="max-screen">
      <div className="w-full lg:w-2/3">
        <SectionTitle 
          title={t("projects_title")}
          subtitle={t("projects_subtitle")}
        />
      </div>

      <ProjectsSection />
    </section>
  )
}

export default ProjetsPage