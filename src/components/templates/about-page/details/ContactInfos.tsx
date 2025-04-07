import { useQuery } from "@tanstack/react-query"
import { useLocale } from "next-intl"
import React from "react"
import PersonalInfoSkeleton from "./PersonalInfoSkeleton"
import { getPersonalInfo } from "@/lib/services"
import { IContact } from "@/app/[locale]/types"
import DynamicIcon from "@/components/modules/DynamicIcon"

const PersonalInfoList = () => {
  const locale = useLocale()
  
  const {
    isError,
    isLoading,
    data
  } = useQuery({ 
    queryKey: ["personalInfo", locale],
    queryFn: () => getPersonalInfo({ locale }),
    staleTime: 5 * 60 * 2000, // 10 min
    refetchOnWindowFocus: false
  })
 

  return (    
    <>
      {
        isError
          ? (
            <h2>load faild</h2>
          )
          : (
            isLoading
              ? (
                <PersonalInfoSkeleton />
              )
              : (
                <ul className="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-3">
                  {
                    data.map((item: IContact) => (
                      <li
                        key={item.title}
                        className="border-bg700-light dark:border-bg700-dark flex  
                        items-start justify-between flex-wrap gap-4 p-4 rounded-2xl
                        border border-solid flex-col"
                      >
                        <span
                          className="w-fit rounded-full border border-bg600-light 
                        dark:border-bg600-dark bg-bg700-light dark:bg-bg700-dark
                          p-4 text-highlight-light dark:text-highlight-dark flex
                          items-center justify-center"
                        >
                          <DynamicIcon iconName={item.iconName} />
                        </span>
          
                        <div className="flex gap-2">
                          <h6 className="font-semibold flex items-center gap-3">
                            {item.title}:
                          </h6>
          
                          <span className="font-semibold">{item.text}</span>
                        </div>
                      </li>
                    ))
                  }
                </ul> 
              )
          )
      }
    </>
  )
}

export default PersonalInfoList