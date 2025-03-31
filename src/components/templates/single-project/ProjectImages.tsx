import React from "react"
import { getTranslations } from "next-intl/server"
import Image from "next/image"
import ProjectBodyTitle from "./ProjectBodyTitle"

type Props = {
  images: string[]
}

const ProjectImages = async ({ images }: Props) => {
  const t = await getTranslations("SingleProject")


  return (
    <div className="w-full">
      <ProjectBodyTitle title={t("screenshots")} />

      <div className="w-full flex flex-col gap-6 mt-7">
        {
          images.length && (
            images.map((item, i) => (
              <Image 
                key={i + 1}
                src={item}
                width={800}
                height={300}
                className="w-full h-fit rounded-2xl"
                alt="project screenshot"
              />
            ))
          ) 
        }
      </div>
    </div>
  )
}

export default ProjectImages