import React from "react"
import { getTranslations } from "next-intl/server"
import SplitText from "@/components/ui/split-text"
import ShimmerTitle from "@/components/modules/shimmer-title/ShimmerTitle"
import ProjectsGrid from "@/components/modules/projects-grid/ProjectsGrid"

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

        <div className="mb-[15px]">
          <SplitText
            text={m("selected_projects")}
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

        <p 
          className="text-custom-secondary-light dark:text-custom-secondary-dark
          text-base md:text-balance max-w-[85%]"
        >
          {m("selected_projects_subtitle")}
        </p>

        <ProjectsGrid />

      </div>
    </section>
      
  )
}

export default Projects