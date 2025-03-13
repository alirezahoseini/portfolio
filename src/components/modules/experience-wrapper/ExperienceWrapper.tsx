import React from "react"
import ExperienceItem from "./ExperienceItem"
import { ILang } from "@/lib/types"
import { getExperiences } from "@/lib/services"
import { IExperience } from "@/app/[locale]/types"

type Props = {
  locale: ILang
}


const ExperienceWrapper = async ({ locale }: Props) => {
  const experiences: IExperience[] = await getExperiences({ locale })
  return (
    <div>
      {
        experiences.map(experience => (
          <ExperienceItem 
            key={experience.id}
            experience={experience}
            locale={locale}
          />
        ))
      }
    </div>
  )
}

export default ExperienceWrapper