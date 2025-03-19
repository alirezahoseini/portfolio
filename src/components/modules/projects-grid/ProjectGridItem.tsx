import React from "react"
import Image from "next/image"
import { IProject } from "@/app/[locale]/types"


const ProjectGridItem = (props: IProject) => {
  const {
    // id,
    title,
    // description,
    img,
    techs,
    bg,
    // date,
  } = props

  return (
    <div 
      className="opacity-container-child even:mt-16 group" 
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
      <div>
        <h2>
          {title}
        </h2>

        <div>
          {/* Techs  */}
          <div>
            {
              techs.map((tech: string) => (
                <span>
                  {tech}
                </span>
              ))
            }
          </div>

          <span>

          </span>
        </div>
      </div>
    </div>
  )
}

export default ProjectGridItem