"use client"
import React from "react"
import { useTranslations } from "next-intl"
import ShimmerTitle from "@/components/modules/shimmer-title/ShimmerTitle"
import SplitText from "@/components/ui/split-text"

const SpecialityTitle = () => {
  const t = useTranslations("HomePage")
    
  return (
    <>
      <ShimmerTitle >
        {t("speciality")}
      </ShimmerTitle>

      <SplitText
        text={t("areas_of_expertise")}
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
    </>
  )
}

export default React.memo(SpecialityTitle)