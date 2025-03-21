import React from "react"
import { getTranslations } from "next-intl/server"
import SplitText from "@/components/ui/split-text"
import ShimmerTitle from "@/components/modules/shimmer-title/ShimmerTitle"

const Speciality = async () => {
  const t = await getTranslations("HomePage")
  return (
    <section
      className="max-screen"
    >
      <div>
        <ShimmerTitle >
          {t("speciality")}
        </ShimmerTitle>

        <SplitText
          text="Areas of Expertise"
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

      </div>
    </section>
  )
}

export default Speciality