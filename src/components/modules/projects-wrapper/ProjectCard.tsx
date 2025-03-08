import { ArrowUpRight } from "lucide-react"
import React from "react"
import Image from "next/image"
import TechsLoop from "./TechsLoop"
import { IProject } from "@/app/[locale]/types"
import { Link } from "@/i18n/routing"

type Props = {
  project: IProject 
}

const ProjectCard = ({ project }: Props) => {

  return (
    <Link 
      href={`/projects/${project.id}`}
      className="group bg-gray-light dark:bg-gray-dark 
      w-full lg:w-[49%] p-8 rounded-[32px] border-[1px] border-solid 
      border-br-gray-light dark:border-br-gray-dark my-3
      hover:border-blue-600 dark:hover:border-blue-800
      transition-all
      "
    >
      {/* Card Header */}
      <div
        id="card-header"
        className="flex flex-row-reverse justify-between items-center"
      >
        <div 
          className="bg-br-gray-light w-fit p-2 lg:p-3 rounded-full 
          border-2 border-[#d9d9d9] border-solid dark:bg-zinc-900 
        dark:border-zinc-800"
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


      {/* Card Body */}
      <div>
        <TechsLoop techs={project.techs} />

        <p className="mb-3 font-light">
          {project.description.slice(0, 100)}...
        </p>

        <Image 
          src={project.img}
          alt={project.title}
          width={700}
          height={500}
          className="mx-auto"
        />
      </div>

    </Link>
  )
}

export default ProjectCard