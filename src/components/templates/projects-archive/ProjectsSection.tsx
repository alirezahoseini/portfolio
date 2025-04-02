"use client"
import React, { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { useLocale } from "next-intl"
import ProjectsSortingTabs from "./ProjectsSortingTabs"
import { getProjects } from "@/lib/services"
import ProjectsGridSkeleton from "@/components/modules/projects-grid/ProjectsGridSkeleton"
import { IProject } from "@/app/[locale]/types"
import ProjectGridItem from "@/components/modules/projects-grid/ProjectGridItem"

const ProjectsSection = () => {
  const locale = useLocale()
  const [projects, setProjects] = useState<IProject[]>([])
    
  const { isLoading, data = [] } = useQuery({ 
    queryKey: ["projects_archive", locale],
    queryFn: () => getProjects({ locale }),
    staleTime: 5 * 60 * 2000, // 10 min
    refetchOnWindowFocus: false
  })

  useEffect(() => {
    if(data) {
      setProjects(data)
    }
  }, [isLoading])

  return (
    <div>
      {
        isLoading
          ? (
            <ProjectsGridSkeleton />
          )
          : (
            <>
              <ProjectsSortingTabs
                data={data}
                setProjects={setProjects}
              />

              <div 
                className="opacity-container grid grid-rows-[masonry] grid-cols-1 md:grid-cols-2
              gap-x-16 gap-y-10 my-16"
              >
                {
                  data && (
                    projects.map((project: IProject) => (
                      <ProjectGridItem 
                        key={project.id}
                        {...project}
                      />
                    ))
                  )
                }
              </div>
            </>
          )
      }
    </div>
  )
}

export default ProjectsSection