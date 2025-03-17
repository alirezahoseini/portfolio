import React from "react"
import { Sparkle } from "lucide-react"
import styles from "./TextShimmer.module.css"

interface ShimmerTitleProps {
  children: React.ReactNode
}

const ShimmerTitle: React.FC<ShimmerTitleProps> = ({ children }) => {

  return (
    <div
      className={
        `text-highlight-light dark:text-highlight-dark
        flex items-center gap-2 mb-4`
      }
    >
      <Sparkle size={18} />

      <p 
        className={
          `${styles.shimmer} dark:animate-shimmer leading-none rtl:text-lg
            ltr:font-clash rtl:font-doran ltr:text-sm uppercase mt-[2px] rtl:mt-0`
        }
      >
        {children}
      </p>
    </div>
  )
}

export default React.memo(ShimmerTitle)