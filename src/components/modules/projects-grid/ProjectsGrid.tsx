import React from "react"
import { getTranslations } from "next-intl/server"
import ProjectGridItem from "./ProjectGridItem"
import API from "@/lib/axiosConfig"
import { IProject } from "@/app/[locale]/types"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"


const ProjectsGrid = async () => {
  const { data } = await API.get("projects")
  const projects: IProject[] = [...data]
  const t = await getTranslations("Common")
  

  return (
    <> 
      <div 
        className="opacity-container grid grid-rows-[masonry] grid-cols-1 md:grid-cols-2
        gap-x-16 gap-y-10 my-16"
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
    
      <div className="w-full flex items-center justify-center">
        <Button 
          className="rounded-full px-8 py-6 font-semibold"
        >
          <Link href="/projects" >
            {t("view_all_projects")}
          </Link>
        </Button>
      </div>   
    </>

  )
}

export default ProjectsGrid