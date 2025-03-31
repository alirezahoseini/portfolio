import { MotionValue, useTransform, motion } from "motion/react"
import React from "react"

type Props = {
  children: React.ReactNode
  renge: number[]
  progress: MotionValue<number>
}

const Word = ({
  children,
  renge,
  progress
}: Props) => {

  const opacity = useTransform(progress, renge, [0, 1])


  return (
    <span className="relative mt-2">
      <span 
        className="absolute top-0 right-0 opacity-20 "
      >
        {children}
      </span>

      <motion.span 
        style={{ opacity: opacity }}
      >{children}
      </motion.span>
    </span>
  )
}

export default Word