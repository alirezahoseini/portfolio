"use client"
import React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { IProject } from "@/app/[locale]/types"
import { Badge } from "@/components/ui/badge"
import { Link } from "@/i18n/routing"


const ProjectGridItem = (props: IProject) => {
  const {
    id,
    title,
    img,
    techs,
    bg,
    date
  } = props

  const newTechs = techs.length > 3 ? techs.slice(0, 3) : techs

  return (
    <motion.div
      className="opacity-container-child even:md:mt-14 group relative" 
      initial={
        {
          opacity: 0,
          y: 100,
          filter: "blur(10px)"
        }
      }
      whileInView={
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)"
        }
      }
      transition={
        {
          duration: 0.5,
          ease: "easeOut"
        }
      }
      viewport={
        {
          margin: "-100px",
          once: true,
          amount: "some"
        }
      }
    >
      <Link
        href={`/projects/${id}`} 
      >
        <div 
          className="rounded-2xl overflow-hidden"
          style={{ backgroundColor: bg }}
        >
          <Image 
            src={img} 
            alt={title} 
            width={600} 
            height={400}
            loading="eager"
            className="w-full h-full object-cover group-hover:scale-[1.03]
            transition-transform duration-300 ease-out"
          />
        </div>

        {/* CARD BODY */}
        <div className="mt-3">
          <h2 className="font-semibold text-lg font-satoshi">
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
                    key={tech}
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
      </Link>
    </motion.div>
  )
}

export default ProjectGridItem