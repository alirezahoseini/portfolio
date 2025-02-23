import Image from "next/image"
import { getMessages } from "next-intl/server"
import { IHomePageMessages } from "./types"
import PageHeading from "@/components/page-heading/PageHeading"
import GridCard from "@/components/grid-card/GridCard"


export default async function HomePage({ params }: {
  params: Promise<{ locale: string }>
}) {
  const  locale  = (await params).locale

  const res = await fetch(`http://localhost:3000/api/projects?lang=${locale}`)
  const projects = await res.json()

  const messages = await getMessages({ locale }) as { HomePage: IHomePageMessages }

  const seoTitle = messages.HomePage["seo_title"]
  const seoDesc = messages.HomePage["seo_desc"]

  return (
    <>
      <head>
        <title>{seoTitle}</title>

        <meta name="description" content={seoDesc} />
      </head>
      
      <div className="flex flex-col items-center">
        <div
          className="bg-[#FFDCAB] pt-2 dark:bg-opacity-50
          rounded-full flex items-center justify-center pr-2 mt-16 mb-3"
        >
          <Image src="/main-memoji.png" width={120} height={120} alt="alireza hosseini" />
        </div>

        <PageHeading title={messages.HomePage["title"]} description={messages.HomePage["bio"]} />

        {
          projects.map((project: any) => (
            <GridCard key={project.id} project={project} />
          ))
        }
      </div>
    </>
  )
}