import React from "react"
import Image from "next/image"
import { techs } from "./Techs"
import { ITech } from "@/app/[locale]/types"
import InfiniteSlider from "@/components/ui/infinite-slider"

const TechsSlider = () => {
  
  return (

    <div className="relative overflow-hidden">
      <InfiniteSlider
        className="w-full relative overflow-hidden py-3" 
        direction="horizontal"
        speed={35}
        speedOnHover={10}
      >
        {
          techs.map((tech: ITech) => (
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
                loading="lazy"
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
}

export default React.memo(TechsSlider)