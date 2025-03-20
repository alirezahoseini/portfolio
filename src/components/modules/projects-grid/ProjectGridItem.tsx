import React from "react"
import Image from "next/image"
import { IProject } from "@/app/[locale]/types"
import { Badge } from "@/components/ui/badge"


const ProjectGridItem = (props: IProject) => {
  const {
    // id,
    title,
    // description,
    img,
    techs,
    bg,
    date
  } = props

  const newTechs = techs.length >3 ? techs.slice(0, 3) : techs

  return (
    <div 
      className="opacity-container-child even:md:mt-14 group" 
    >
      <div 
        className="rounded-2xl"
        style={{ backgroundColor: bg }}
      >
        <Image 
          src={img} 
          alt={title} 
          width={600} 
          height={400}
          className="group-hover:scale-[1.03]
          transition-all duration-300"
        />
      </div>

      {/* CARD BODY */}
      <div className="mt-3">
        <h2 className="font-semibold text-lg">
          {title}
        </h2>

        <div
          className="flex items-center justify-between mt-3 text-custom-secondary-light
        dark:text-custom-secondary-dark font-satoshi"
        >
          {/* Techs  */}
          <div className="flex gap-2">
            { 
              newTechs.map((tech: string) => (
                <Badge 
                  className="font-light bg-bg700-light
                  dark:bg-bg700-dark" 
                  variant="outline"
                >
                  {tech}
                </Badge>
              ))
            }

            {
              techs.length >3 && (
                <Badge 
                  className="font-light bg-bg700-light
                dark:bg-bg700-dark" 
                  variant="outline"
                >
                  +{techs.length - 3}
                </Badge>
              )
            }
          </div>

          <span className="text-sm">
            {date}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProjectGridItem