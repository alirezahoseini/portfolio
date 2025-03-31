import React from "react"

type Props = {
  title: string
}

const ProjectBodyTitle = ({ title }: Props) => {
  return (
    <>
      <h2
        className="text-2xl font-medium ltr:font-clash text-custom-primary-light
      dark:text-custom-primary-dark mt-2 rtl:mb-1" 
      >
        {title}
      </h2>

      <hr 
        className="h-[1px] w-full bg-bg600-light dark:bg-bg600-dark mb-2"
      />
    </>
  )
}

export default ProjectBodyTitle