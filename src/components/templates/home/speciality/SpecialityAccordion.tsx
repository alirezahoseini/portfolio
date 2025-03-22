import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { ISpeciality } from "@/app/[locale]/types"
import TextWithIcon from "@/components/modules/TextWithIcon"

type Props = {
  specialtiesList: ISpeciality[]
}

const SpecialityAccordion = (props: Props) => {
  const { specialtiesList } = props
  return (
    <Accordion
      type="single"
      collapsible
      // onValueChange={}
    >
      {
        specialtiesList.map(item => (
          <AccordionItem 
            key={item.id}
            value={item.title}
            className="!bg-bg800-light dark:!bg-bg800-dark rounded-2xl px-4
            mb-4 border border-solid border-bg700-light dark:border-bg700-dark"
          >
            <AccordionTrigger
              className="text-custom-primary-light dark:text-custom-primary-dark
                text-base !no-underline font-medium"
            >
              <h3
                className="flex items-center justify-start gap-2"
              >
                <TextWithIcon
                  text={item.title}
                  iconName={item.icon}
                />
              </h3>
            </AccordionTrigger>

            <AccordionContent
              className="font-light"
            >
              {item.desc}
            </AccordionContent>
          </AccordionItem>
        ))
      }
    </Accordion>
  )
}

export default SpecialityAccordion