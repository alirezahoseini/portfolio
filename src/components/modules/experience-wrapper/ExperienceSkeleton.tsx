import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

const ExperienceSkeleton = () => {
  return (
    <div className="w-full">
      <Skeleton 
        className="w-full h-24 rounded-2xl"
      />

      <Skeleton 
        className="w-full h-24 rounded-2xl mt-4"
      />

      <Skeleton 
        className="w-full h-24 rounded-2xl mt-4"
      />
    </div>
  )
}

export default ExperienceSkeleton