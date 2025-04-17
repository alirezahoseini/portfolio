import React from "react"
import ProjectButtons from "./ProjectButtons"
import ProjectTechs from "./ProjectTechs"
import ProjectImages from "./ProjectImages"

type Props = {
  title: string
  description: string
  technologies: string[]
  screenshots: string[]
  links: {
    github: string
    live: string
  }
}

const ProjectBody = async ({ 
  title,
  description,
  technologies,
  screenshots,
  links
}: Props) => {

  const paragraphs = description.split("<br/>")
  const isOneP = paragraphs.length < 2


  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h1 
          className="ltr:font-clash text-5xl 
        font-medium text-custom-primary-light 
        dark:text-custom-primary-dark"
        >
          {title}
        </h1>  

        <ProjectButtons links={links} />
      </div>

      <div 
        className="text-custom-secondary-light dark:text-custom-secondary-dark
        mt-4"
      >
        {
          isOneP
            ? (
              <p>{description}</p>
            )
            : (
              paragraphs.map((item, i) => (
                <p className="mt-1" key={i}>
                  {item}
                </p>
              ))
            )
        }
      </div>

      <ProjectTechs technologies={technologies} />

      <ProjectImages images={screenshots} />
    </div>
  )
}

export default ProjectBody