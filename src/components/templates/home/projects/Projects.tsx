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
            ltr:font-medium "
          delay={80}
          animationFrom={{ opacity: 0, transform: "translate3d(0,20px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          threshold={0.2}
          rootMargin="-100px"
        />
      </div>
    </section>
      
  )
}

export default Projects