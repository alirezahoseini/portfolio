"use client"
import React from "react"
import { useLocale, useTranslations } from "next-intl"
import { useQuery } from "@tanstack/react-query"
import ProjectGridItem from "./ProjectGridItem"
import ProjectsGridSkeleton from "./ProjectsGridSkeleton"
import { IProject } from "@/app/[locale]/types"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import { getProjects } from "@/lib/services"


const ProjectsGrid = () => {
  const locale = useLocale()

  const { isLoading, data } = useQuery({ 
    queryKey: ["projects", locale],
    queryFn: () => getProjects({ locale }),
    staleTime: 5 * 60 * 2000, // 10 min
    refetchOnWindowFocus: false
  })
  
  const t = useTranslations("Common")
  

  return (
    <> 
      <div 
        className="opacity-container grid grid-rows-[masonry] grid-cols-1 md:grid-cols-2
        gap-x-16 gap-y-10 my-16"
      >
        {
          isLoading
            ? (
              <ProjectsGridSkeleton />
            )
            : (
              data && (
                data.map((project: IProject) => (
                  <ProjectGridItem 
                    key={project.id}
                    {...project}
                  />
                ))
              )
            )
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