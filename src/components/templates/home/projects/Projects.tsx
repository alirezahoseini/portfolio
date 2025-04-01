import React from "react"
import { getTranslations } from "next-intl/server"
import ProjectsGrid from "@/components/modules/projects-grid/ProjectsGrid"
import SectionTitle from "@/components/modules/SectionTitle"

const Projects = async () => {
  const t = await getTranslations("Common")
  const m = await getTranslations("HomePage")
  return (
    <section
      id="projects-section"
      className="max-screen"
    >
      <div>
        <SectionTitle
          title={t("my_work")}
          subtitle={m("selected_projects")}
          description={m("selected_projects_subtitle")}
        />

        <ProjectsGrid />
      </div>
    </section>
  )
}

export default Projects