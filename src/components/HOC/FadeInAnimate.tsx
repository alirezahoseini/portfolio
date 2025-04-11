"use client"
import React from "react"
import { motion } from "motion/react"

type Props = {
  children: React.ReactNode
  delay?: number
  infinite?: boolean
}

const FadeInAnimate = ({
  children,
  delay,
  infinite = false
}: Props) => {
  return (
    <motion.span
      transition={
        {
          ease: "easeOut",
          duration: 0.7,
          delay: delay ? delay : 0.5
        }
      }
      initial={
        {
          opacity: 0,
          y: 0
        }
      }
      whileInView={
        {
          opacity: 1,
          y: 0
        }
      }
      viewport={{ amount: 1, once: !infinite }}
      animate={infinite ? "whileInView" : undefined}
    >
      {children}
    </motion.span>
  )
}

export default React.memo(FadeInAnimate)