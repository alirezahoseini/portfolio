"use client"
import React from "react"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { getTechs } from "@/lib/services"
import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { ITech } from "@/app/[locale]/types"

const TechsSlider = () => {
  
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
          <div className="relative overflow-hidden">
            <InfiniteSlider
              className="w-full relative overflow-hidden py-12" 
              direction="horizontal"
              speed={35}
              speedOnHover={10}
            >
              {
                data.map((tech: ITech) => (
                  <div 
                    key={tech.id}
                    className="gap-2 inline-flex w-fit justify-center items-center min-w-fit
                  px-4 py-2 text-sm font-satoshi text-custom-primary-light dark:text-custom-primary-dark
                  bg-bg800-light dark:bg-bg700-dark rounded-full"
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

            <span 
              className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r 
            from-bg900-light dark:from-bg900-dark"
            >
            </span>

            <span 
              className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l 
            from-bg900-light dark:from-bg900-dark"
            >
            </span>
          </div>

        )
  )
}

export default TechsSlider