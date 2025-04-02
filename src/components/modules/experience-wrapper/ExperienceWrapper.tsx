"use client"
import React from "react"
import { useLocale } from "next-intl"
import { useQuery } from "@tanstack/react-query"
import ExperienceSkeleton from "./ExperienceSkeleton"
import ExperienceItem from "./ExperienceItem"
import { getExperiences } from "@/lib/services"
import { Accordion } from "@/components/ui/accordion"
import { IExperience } from "@/app/[locale]/types"


const ExperienceWrapper = () => {
  const locale = useLocale()

  const {
    isLoading,
    data,
    isError
  } = useQuery({ 
    queryKey: ["experiences", locale],
    queryFn: () => getExperiences({ locale }),
    staleTime: 5 * 60 * 2000, // 10 min
    refetchOnWindowFocus: false
  })
  

  return (
    <div>
      {
        isError
          ? (
            <h2>Failed load</h2>
          )
          : (
            isLoading
              ? (
                <ExperienceSkeleton />
              )
              : (
                <Accordion type="single" collapsible>
                  {
                    data.map((experience: IExperience) => (
                      <ExperienceItem
                        key={experience.id}
                        {...experience}
                      />
                    )) 
                  }
                </Accordion>
              )
          )
      }
    </div>
  )
}

export default ExperienceWrapper