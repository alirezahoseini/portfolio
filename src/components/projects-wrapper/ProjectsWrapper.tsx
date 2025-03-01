import React from "react"
import ProjectCard from "./ProjectCard"
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
      <div 
        className="flex items-center justify-between flex-wrap w-full gap-2"
      >
        {
          projects.map((project: IProject) => (
            <ProjectCard 
              project={project} 
              key={project.id}
            />
          ))
        }
      </div>
    )
  )
}

export default ProjectsWrapper