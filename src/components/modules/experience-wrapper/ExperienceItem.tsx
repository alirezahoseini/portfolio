import React from "react"
import Link from "next/link"
import { IExperience } from "@/app/[locale]/types"
import { ILang } from "@/lib/types"

type Props = {
  experience: IExperience
  locale: ILang
}

const ExperienceItem = ({ experience, locale }: Props) => {
  return (
    <div 
      className="ltr:border-l-[1px] rtl:border-r-[1px] border-slate-300 border-solid border-0
            ltr:pl-8 rtl:pr-8 relative dark:border-zinc-700 pb-16 "
    >
      {/* Badge  */}
      <div
        className={
          `${experience.isActive
            ? "bg-emerald-400 dark:bg-emerald-500" : 
            "bg-slate-300 dark:bg-zinc-700"}
              w-4 h-4 rounded-full absolute top-0 ltr:-left-[8px] rtl:-right-[9px]`
        }
      >
        {
          experience.isActive && (
            <span
              className="absolute top-0 left-0 rounded-full -z-10
                    w-4 h-4 bg-emerald-500 animate-ping aspect-square"
            />
          )
        }
      </div>
      

      {/* Body */}
      <div>
        <Link href={experience.link}>
          <div className="flex gap-2 items-end">
            <h2
              className="font-medium underline  hover:text-slate-600
            dark:hover:text-zinc-300"
            >
              {experience.title}
            </h2>

            {
              experience.isActive && (
                <span className="text-green-500 text-sm" >
                  {locale === "en" ? "Active" : "فعال"}
                </span>
              )
            }
          </div>
        </Link>      

        <p
          className="text-base text-slate-900 
          dark:text-zinc-300 font-light mt-2"
        >
          {experience.description}
        </p>
      </div>
      
    </div>
  )
}

export default ExperienceItem