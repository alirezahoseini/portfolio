import React from "react"
import ProjectGridItem from "./ProjectGridItem"
import API from "@/lib/axiosConfig"
import { IProject } from "@/app/[locale]/types"


const ProjectsGrid = async () => {
  const { data } = await API.get("projects")
  const projects: IProject[] = [...data]

  return (
    <div 
      className="opacity-container grid grid-rows-[masonry] grid-cols-1 md:grid-cols-2
      gap-x-16 gap-y-16 md:gap-y-10 mt-10"
    >
      {
        projects.map((project: IProject) => (
          <ProjectGridItem 
            key={project.id}
            {...project}
          />
        ))
      }
    </div>
  )
}

export default ProjectsGrid