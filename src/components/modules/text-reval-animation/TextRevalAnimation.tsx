"use client"
import { useScroll } from "motion/react"
import React from "react"
import { useRef } from "react"
import Word from "./Word"

type Props = {
  value: string
}


const TextRevalAnimation = ({ value }: Props) => {
  const element = useRef(null)

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"]
  })

  const words = value.split(" ")

  return (
    <p
      className="text-2xl sm:text-3xl flex flex-wrap gap-2 mt-2
      dark:text-bg900-light text-bg900-dark font-medium justify-center
      leading-7"
      ref={element}
    >
      {
        words.map((word, i) => {
          const start = i / words.length
          const end = start + (1 / words.length)
          return (
            <Word
              key={i}
              renge={[start, end]}
              progress={scrollYProgress}
            >
              {word}
            </Word>)
        })
      }
    </p>
  )
}

export default TextRevalAnimation