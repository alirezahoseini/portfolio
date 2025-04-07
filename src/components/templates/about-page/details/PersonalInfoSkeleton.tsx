import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

const skeletonArray = Array.from({ length: 4 })

const PersonalInfoSkeleton = () => {
  return (
    <ul className="w-full lg:w-1/2 grid grid-cols-2 gap-3">
      {
        skeletonArray.map((item, i) => (
          <li
            key={i}
            className="border-bg700-light dark:border-bg700-dark flex  
            items-start justify-between flex-wrap gap-4 p-4 rounded-2xl
            border border-solid flex-col"
          >
            <Skeleton 
              className="rounded-full w-14 h-14"
            />

            <Skeleton 
              className="rounded-lg w-40 h-6"
            />

          </li>
        ))
      }
    </ul> 
  )
}

export default PersonalInfoSkeleton