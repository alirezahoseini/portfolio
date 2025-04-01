import React from "react"
import ExperienceItemTrigger from "./ExperienceItemTrigger"
import { IExperience } from "@/app/[locale]/types"
import { AccordionItem, AccordionContent } from "@/components/ui/accordion"


const ExperienceItem = (props: IExperience) => {
  const { companyName, description } = props

  return (
    <AccordionItem 
      value={companyName}
      className="mb-4 border-bg700-light dark:border-bg700-dark 
      rounded-none border-0 border-b border-solid bg-transparent"
    >
      <ExperienceItemTrigger
        {...props}
      />
    
      <AccordionContent>
        <div className="p-4 pt-0 px-0">
          <ul className="list-disc space-y-2 px-4 text-sm">
            {
              description.map((item, i) => (
                <li
                  key={i}
                  className="marker:text-custom-secondary-light dark:marker:text-custom-secondary-dark
                  text-custom-secondary-light dark:text-custom-secondary-dark"
                >{item}
                </li>
              ))
            }
          </ul>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}

export default React.memo(ExperienceItem)