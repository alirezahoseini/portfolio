import React from "react"
import ExperienceTitle from "./ExperienceTitle"
import ExperienceWrapper from "@/components/modules/experience-wrapper/ExperienceWrapper"

const Experience = () => {
  return (
    <section
      className="max-screen flex flex-col lg:flex-row gap-12
      lg:gap-8"
    >
      <div className="w-full lg:w-1/3">
        <ExperienceTitle />
      </div>

      <div className="w-full lg:w-2/3">
        <ExperienceWrapper />
      </div>
    </section>
  )
}

export default Experience