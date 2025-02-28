"use client"
import React from "react"
import { useQuery } from "@tanstack/react-query"
import ProjectsSkeleton from "./ProjectsLoading"
import ErrorMessage from "../ErrorMessage"
import GridCard from "../GridCard"
import { ILang } from "@/lib/types"
import { IProject } from "@/app/[locale]/types"
import { getProjects } from "@/lib/services"

type Props = {
  locale: ILang
}

const ProjectsWrapper = ({ locale }: Props) => {
  const {
    isLoading,
    isError,
    data
  } = useQuery({
    queryKey: ["projects", locale],
    queryFn: () => getProjects(locale),
    staleTime: 1000 * 60 * 5,
    retry: 2
  })

  return (
    isLoading
      ? <ProjectsSkeleton />
      : (
        isError
          ? <ErrorMessage />
          : (
            data.map((project: IProject) => (
              <GridCard 
                project={project} 
                key={project.id}
              />
            ))
          )
      )
  )
}

export default ProjectsWrapper