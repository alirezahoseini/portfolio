import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

const skeletonArray = Array.from({ length: 4 })


const ProjectsGridSkeleton = () => {
  return (

    <>
      {
        skeletonArray.map((item, index) => (
          <Skeleton 
            key={index+1}
            className="even:md:mt-14 group relative w-full h-[300px] rounded-3xl"
          >
          </Skeleton>
        ))
      }
    </>
  )
}

export default ProjectsGridSkeleton