import React from "react"
import GridCard from "../GridCard"
import { ILang } from "@/lib/types"
import { IProject } from "@/app/[locale]/types"
import { getProjects } from "@/lib/services"

type Props = {
  locale: ILang
}

const ProjectsWrapper = async ({ locale }: Props) => {
  const projects = await getProjects(locale)

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