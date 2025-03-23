"use client"
import React from "react"
import { useLocale } from "next-intl"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { getTechs } from "@/lib/services"
import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { ITech } from "@/app/[locale]/types"

const TechsSlider = () => {
  const locale = useLocale()
  const isRtl = locale === "fa"
  
  const {
    isError,
    isLoading,
    data
  } = useQuery({ 
    queryKey: ["techs"],
    queryFn: () => getTechs(),
    staleTime: 5 * 60 * 2000, // 10 min
    refetchOnWindowFocus: false
  })

  return (
    isError
      ? (
        <div>Error</div>
      )
      :
      isLoading
        ? (
          <div>
            Loading
          </div>
        )
        : (
          <InfiniteSlider
            className="w-full relative overflow-hidden py-12" 
            direction="horizontal"
            speed={30}
            speedOnHover={10}
            rtl={isRtl}
          >
            {
              data.map((tech: ITech) => (
                <div 
                  key={tech.id}
                  className="gap-2 inline-flex w-fit justify-center items-center min-w-fit
                  px-4 py-2 text-sm font-satoshi text-custom-primary-light dark:text-custom-primary-dark
                  bg-bg800-light dark:bg-bg700-dark rounded-full rtl:flex-row-reverse"
                >
                  <Image 
                    src={tech.logo}
                    alt={tech.title}
                    width={18}
                    height={18}
                  />     

                  <h4>
                    {tech.title}
                  </h4>   
                </div>
              ))
            }
          </InfiniteSlider>
        )
  )
}

export default TechsSlider