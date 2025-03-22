import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

const SpecialitySkeleton = () => {
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-10">
      <div className="gap-4 flex flex-col">
        <Skeleton 
          className="w-full h-14 aspect-video rounded-2xl bg-bg700-light dark:bg-bg700-dark"
        />

        <Skeleton 
          className="w-full h-14 aspect-video rounded-2xl bg-bg700-light dark:bg-bg700-dark"
        />
      </div>

      <Skeleton 
        className="w-full h-full aspect-video rounded-3xl bg-bg700-light dark:bg-bg700-dark"
      />
    </div>
 
  )
}

export default SpecialitySkeleton