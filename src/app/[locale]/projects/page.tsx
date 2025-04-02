import React from "react"
import SectionTitle from "@/components/modules/SectionTitle"
import ProjectsSection from "@/components/templates/projects-archive/ProjectsSection"

const ProjetsPage = async () => {

  return (
    <section className="max-screen">
      <div className="w-full lg:w-2/3">
        <SectionTitle 
          title="Creating next level digital products"
          subtitle="My Work"
        />
      </div>

      <ProjectsSection />
    </section>
  )
}

export default ProjetsPage