import React from "react"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { getSingleProject } from "@/lib/services"
import ProjectHeader from "@/components/templates/single-project/ProjectHeader"
import ProjectBody from "@/components/templates/single-project/ProjectBody"

type Props = {
  params: Promise<{
    id: string
    locale: string
  }>
}

export const generateMetadata = async (props: {
  params: Promise<{ locale: string, id: string }>
}): Promise<Metadata> => {
  const params = await props.params
  const locale = await params.locale
  const id = await params.id

  const response = await getSingleProject({ id, locale })

  if(response?.error) {
    if(response.status === 404) {
      notFound()
    }
  }

  return {
    title: response?.data.title + " | Alireza Hosseini",
    description: response?.data.description,
    openGraph: {
      title: response?.data.title + " | Alireza Hosseini",
      description: response?.data.description,
      locale: locale,
      type: "website"
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-video-preview": -1
      }
    },
    alternates: {
      canonical: `https://a-hosseini.ir/${locale}`,
      languages: {
        "en": "https://a-hosseini.ir/en",
        "fa": "https://a-hosseini.ir/fa"
      }
    }
  }
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