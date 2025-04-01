import React from "react"
import { getTranslations } from "next-intl/server"
import ShimmerTitle from "@/components/modules/shimmer-title/ShimmerTitle"
import SplitText from "@/components/ui/split-text"

const ExperienceTitle = async () => {
  const t = await getTranslations("AboutPage")
  return (
    <>
      <ShimmerTitle >
        {t("work_history")}
      </ShimmerTitle>

      <SplitText
        text={t("experience")}
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

      <span
        className="text-custom-secondary-light dark:text-custom-secondary-dark
          text-base mt-6 text-balance inline-block w-full"
      >
        {t("experience_description")}
      </span>
    </>
  )
}

export default ExperienceTitle