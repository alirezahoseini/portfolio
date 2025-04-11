import React from "react"
import { Sparkle } from "lucide-react"
import styles from "./TextShimmer.module.css"
import FadeInAnimate from "@/components/HOC/FadeInAnimate"

interface ShimmerTitleProps {
  children: React.ReactNode
}

const ShimmerTitle: React.FC<ShimmerTitleProps> = ({ children }) => {

  return (
    <FadeInAnimate >
      <div
        className={
          `text-highlight-light dark:text-highlight-dark
        flex items-center gap-2 mb-4`
        }
      >
        <Sparkle size={18} />

        <p 
          className={
            `${styles.shimmer} dark:animate-shimmer leading-none rtl:text-lg ltr:tracking-widest
            ltr:font-clash rtl:font-doran ltr:text-sm uppercase mt-[2px] rtl:mt-0 pl-[1px]`
          }
        >
          {children}
        </p>
      </div>
    </FadeInAnimate>
  )
}

export default React.memo(ShimmerTitle)