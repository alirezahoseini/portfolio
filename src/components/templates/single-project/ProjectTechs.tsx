import React from "react"
import { getTranslations } from "next-intl/server"
import ProjectBodyTitle from "./ProjectBodyTitle"

type Props = {
  technologies: string[]
}

const ProjectTechs = async ({ technologies }: Props) => {
  const t = await getTranslations("SingleProject")
  return (
    <div className="flex flex-col w-full">

      <ProjectBodyTitle title={t("how_built_it")} />

      <ul className="list-disc px-5 ">
        { 
          technologies.map((tech: string) => (
            <li 
              key={tech}
              className="my-3 marker:text-bg600-light dark:marker:text-bg600-dark" 
            >
              {tech}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ProjectTechs