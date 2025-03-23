import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

const skeletonArray = Array.from({ length: 18 })

const TechSliderSkeleton = () => {
  return (
    <div
      className="w-full h-12 flex flex-nowrap overflow-hidden py-12 gap-4
        items-center justify-center "
    >
      {
        skeletonArray.map((item, index) => (
          <Skeleton
            key={index}
            className="min-w-16 h-8 rounded-full bg-bg700-light dark:bg-bg700-dark"
          />
        ))
      }
    </div>
  )
}

export default TechSliderSkeleton