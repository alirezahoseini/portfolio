import React from "react"
import { notFound } from "next/navigation"
import { ILocales } from "@/i18n/routing"
import { getSingleProject } from "@/lib/services"
import ProjectHeader from "@/components/templates/single-project/ProjectHeader"

type Props = {
  params: {
    id: string
    locale: ILocales
  }
}


const SingleProject = async ({ params }: Props) => {
  const { locale, id } = await params

  const response = await getSingleProject({ id, locale })

  if(response?.error) {
    if(response.status === 404) {
      notFound()
    }
  }
  
  return (
    response?.data
      ? (
        <article className="max-screen mt-10 !max-w-screen-lg">
          <ProjectHeader {...response.data} />
          
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