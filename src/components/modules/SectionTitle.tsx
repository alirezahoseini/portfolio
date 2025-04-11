import React from "react"
import ShimmerTitle from "./shimmer-title/ShimmerTitle"
import SplitText from "../ui/split-text"
import FadeInAnimate from "../HOC/FadeInAnimate"

type Props = {
  subtitle: string
  title: string
  description?: string
}

const SectionTitle = (props: Props) => {
  const {
    subtitle,
    title,
    description
  } = props

  return (
    <>
      <ShimmerTitle >
        {subtitle}
      </ShimmerTitle>
    
      <SplitText
        text={title}
        className="text-4xl md:text-5xl rtl:font-semibold text-center
              ltr:font-clash rtl:font-doran ltr:tracking-wide 
              ltr:font-medium mb-6"
        delay={150}
        duration={0.6} 
        staggerChildren={0.04}
        animationFrom={{ opacity: 0, y: 50 }}
        animationTo={{ opacity: 1, y: 0 }}
        easing={[0.215, 0.61, 0.355, 1]}
      />
    
      {
        description && (
          <FadeInAnimate>
            <span
              className="text-custom-secondary-light dark:text-custom-secondary-dark
              text-base mt-6 text-balance inline-block w-full"
            >
              {description}
            </span>
          </FadeInAnimate>
        )
      }
    </>
  )
}

export default SectionTitle