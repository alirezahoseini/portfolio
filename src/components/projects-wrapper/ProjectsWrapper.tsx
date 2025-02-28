import React from "react"
import GridCard from "../GridCard"
import { ILang } from "@/lib/types"
import { IProject } from "@/app/[locale]/types"
import { getProjects } from "@/lib/services"

type Props = {
  limit?: number
  locale: ILang
}

const ProjectsWrapper = async ({ locale, limit }: Props) => {
  const projects = await getProjects({ locale, limit })

  return (
    projects && (
      projects.map((project: IProject) => (
        <GridCard 
          project={project} 
          key={project.id}
        />
      ))
    )
  )
}

export default ProjectsWrapper