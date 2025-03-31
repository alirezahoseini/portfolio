import React from "react"
import ProjectButtons from "./ProjectButtons"
import ProjectTechs from "./ProjectTechs"

type Props = {
  title: string
  description: string
  technologies: string[]
  links: {
    github: string
    live: string
  }
}

const ProjectBody = async ({ 
  title,
  description,
  technologies,
  links
}: Props) => {


  return (
    <div
      className="flex items-center justify-between flex-wrap gap-4"
    >
      <h1 
        className="ltr:font-clash text-5xl 
        font-medium text-custom-primary-light 
        dark:text-custom-primary-dark"
      >
        {title}
      </h1>  

      <ProjectButtons links={links} />

      <p 
        className="text-custom-secondary-light dark:text-custom-secondary-dark
        mt-4"
      >
        {description}
      </p>

      <ProjectTechs technologies={technologies} />
    </div>
  )
}

export default ProjectBody