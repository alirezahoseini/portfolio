import React, { Dispatch, SetStateAction } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { ISpeciality } from "@/app/[locale]/types"
import TextWithIcon from "@/components/modules/TextWithIcon"
import FadeInAnimate from "@/components/HOC/FadeInAnimate"

type Props = {
  specialtiesList: ISpeciality[]
  setSelectedImage: Dispatch<SetStateAction<number>>
}

const SpecialityAccordion = (props: Props) => {
  const { specialtiesList, setSelectedImage } = props

  const changeImageHandler = (value: string) => {
    const selectedItem: ISpeciality = specialtiesList.find(item => item.title === value) || specialtiesList[0]
    if(selectedItem) {
      setSelectedImage(selectedItem.id)
    }
  }

  return (
    <Accordion
      type="single"
      collapsible
      onValueChange={changeImageHandler}
    >
      {
        specialtiesList.map(item => (
          <FadeInAnimate delay={0.7} key={item.id}>
            <AccordionItem 
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
                    className="ltr:font-medium"
                  />
                </h3>
              </AccordionTrigger>

              <AccordionContent
                className="rtl:font-light"
              >
                {item.desc}
              </AccordionContent>
            </AccordionItem>
          </FadeInAnimate>
        ))
      }
    </Accordion>
  )
}

export default React.memo(SpecialityAccordion)