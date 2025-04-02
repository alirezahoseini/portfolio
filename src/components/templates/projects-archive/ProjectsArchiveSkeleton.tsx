import React from "react"
import ProjectsGridSkeleton from "@/components/modules/projects-grid/ProjectsGridSkeleton"
import { Skeleton } from "@/components/ui/skeleton"

const ProjectsArchiveSkeleton = () => {
  const skeletonArray = Array.from({ length: 3 })

  return (
    <>
      <div className="flex lg:justify-end mt-10 gap-3">
        {
          skeletonArray.map((item, i) => (
            <Skeleton 
              key={i}
              className="w-24 h-10 rounded-full"
            />
          ))
        }
      </div>

      <div 
        className="opacity-container grid grid-rows-[masonry] grid-cols-1 md:grid-cols-2
      gap-x-16 gap-y-10 my-16"
      >
        <ProjectsGridSkeleton />
      </div>
    </>
  )
}

export default ProjectsArchiveSkeleton