import React from "react"
import { getTranslations } from "next-intl/server"
import SplitText from "@/components/ui/split-text"
import ShimmerTitle from "@/components/modules/shimmer-title/ShimmerTitle"

const Projects = async () => {
  const t = await getTranslations("Common")
  const m = await getTranslations("HomePage")
  return (
    <section
      id="projects-section"
      className="max-screen"
    >
      <div>
        <ShimmerTitle >
          {t("my_work")}
        </ShimmerTitle>

        <SplitText
          text={m("selected_projects")}
          className="text-4xl md:text-5xl rtl:font-semibold text-center
            ltr:font-clash rtl:font-doran ltr:tracking-wide 
            ltr:font-medium"
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

export default Projects