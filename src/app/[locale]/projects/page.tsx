import React from "react"
import ProjectsWrapper from "@/components/modules/projects-wrapper/ProjectsWrapper"

const ProjetsPage = async ({ params }: {
  params: Promise<{ locale: string }>
}) => {
  const locale = (await params).locale
  return (
    <div>
      <ProjectsWrapper locale={locale} />
    </div>
  )
}

export default ProjetsPage