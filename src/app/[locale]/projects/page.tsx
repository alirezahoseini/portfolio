import React from "react"
import { getTranslations } from "next-intl/server"
import SectionTitle from "@/components/modules/SectionTitle"
import ProjectsSection from "@/components/templates/projects-archive/ProjectsSection"

const ProjetsPage = async () => {
  const t = await getTranslations("Projects")

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