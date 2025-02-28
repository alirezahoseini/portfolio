import { ArrowUpRight } from "lucide-react"
import React from "react"
import { IProject } from "@/app/[locale]/types"

type Props = {
  project: IProject 
}

const GridCard = ({ project }: Props) => {

  return (
    <div
      className="bg-gray-light dark:bg-gray-dark 
        w-full p-8 rounded-[32px] border-[1px] border-solid 
      border-br-gray-light dark:border-br-gray-dark my-3
      "
    >
      {/* Card Header  */}
      <div
        id="card-header"
        className="flex flex-row-reverse justify-between items-center"
      >
        <div 
          className="bg-br-gray-light w-fit p-2 lg:p-3 rounded-full border-2 
        border-[#d9d9d9] border-solid dark:bg-zinc-900 dark:border-zinc-800"
        >
          <ArrowUpRight 
            className="text-[#757575]"
            size={30}
          />
        </div>

        <h2 className="text-3xl font-black">
          {project.title}
        </h2>
      </div>
      

    </div>
  )
}

export default GridCard