"use client"
import React from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { IProject } from "@/app/[locale]/types"
import { Badge } from "@/components/ui/badge"
import { Link } from "@/i18n/routing"

const ProjectGridItem = ({ 
  id,
  title,
  date,
  backgroundColor,
  coverImage,
  technologies,
  hasAnimation = true 
}: IProject & { hasAnimation?: boolean }) => {
  const newTechs = technologies.length > 3 ? technologies.slice(0, 3) : technologies
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  
  return (
    <div ref={ref} className="even:md:mt-14 group relative opacity-container-child">
      <motion.div
        style={
          {
            opacity: hasAnimation ? (isInView ? 1 : 0) : 1,
            transform: hasAnimation ? (isInView ? "translateY(0)" : "translateY(60px)") : "none",
            transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
            filter: hasAnimation ? (isInView ? "blur(0)" : "blur(5px)") : "none"
          }
        }
      >
        <Link href={`/projects/${id}`}>
          <div 
            className="rounded-2xl overflow-hidden"
            style={{ backgroundColor: backgroundColor }}
          >
            <Image 
              src={coverImage.url} 
              alt={coverImage.alt} 
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
                  technologies.length >3 && (
                    <Badge 
                      className="font-light bg-bg700-light
                  dark:bg-bg700-dark" 
                      variant="outline"
                    >
                      +{technologies.length - 3}
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
    </div>
  )
}

export default ProjectGridItem