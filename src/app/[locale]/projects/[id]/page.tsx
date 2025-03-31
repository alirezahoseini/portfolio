import React from "react"
import { notFound } from "next/navigation"
import { getSingleProject } from "@/lib/services"
import ProjectHeader from "@/components/templates/single-project/ProjectHeader"
import ProjectBody from "@/components/templates/single-project/ProjectBody"

type Props = {
  params: Promise<{
    id: string
    locale: string
  }>
}


const SingleProject = async ({ params }: Props) => {
  const resolvedParams = await params
  const { locale, id } = resolvedParams

  const response = await getSingleProject({ id, locale })

  if(response?.error) {
    if(response.status === 404) {
      notFound()
    }
  }
  
  return (
    response?.data
      ? (
        <article
          className="max-screen mt-10 !max-w-screen-lg 
          flex flex-col gap-8"
        >
          <ProjectHeader {...response.data} />
          
          <ProjectBody {...response.data} />
        </article>
      )
      : (
        <div>
          faild fetch project
        </div>
      )
  )
}

export default SingleProject