import Image from "next/image"
import React from "react"
import Link from "next/link"
import { AccordionTrigger } from "@/components/ui/accordion"

type Props = {
  logo: string
  position: string
  link: string
  companyName: string
  date: string
}

const ExperienceItemTrigger = (props: Props) => {
  const {
    logo,
    position,
    link,
    companyName,
    date
  } = props

  return (
    <AccordionTrigger 
      hideChevron={true}
      className="flex-1 text-base font-medium 
        text-text-primary transition-all flex items-center 
        gap-2 p-0 pb-4 justify-start hover:!no-underline 
        rtl:text-right"
    >
      <Image
        src={logo}
        width={50}
        height={50}
        alt={position}
        className="ltr:mr-2 rtl:ml-2 aspect-square h-10 w-fit rounded-full border 
          border-bg600-light dark:border-bg600-dark bg-bg800-light 
          dark:bg-bg800-dark border-solid"
      />

      <div className="w-full">
        <h6 className="text-custom-primary-light dark:text-custom-primary-dark">
          {position}
        </h6>

        <div 
          className="flex justify-between items-center w-full
            text-custom-secondary-light dark:text-custom-secondary-dark "
        >
          <span>
            <Link
              href={link}
              target="_blank"
              className="text-sm 
                underline-offset-4 hover:underline"
            >
              @{companyName}
            </Link>
          </span>

          <span className="text-xs">
            {date}
          </span>
        </div>
      </div>
    </AccordionTrigger>
  )
}

export default ExperienceItemTrigger