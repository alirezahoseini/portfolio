import React from "react"
import { getTranslations } from "next-intl/server"
import ExperienceWrapper from "@/components/modules/experience-wrapper/ExperienceWrapper"
import SectionTitle from "@/components/modules/SectionTitle"

const Experience = async () => {
  const t = await getTranslations("AboutPage")

  return (
    <section
      className="max-screen flex flex-col lg:flex-row gap-12
      lg:gap-8"
    >
      <div className="w-full lg:w-1/3">
        <SectionTitle
          title={t("work_history")}
          subtitle={t("experience")}
          description={t("experience_description")}
        />
      </div>

      <div className="w-full lg:w-2/3">
        <ExperienceWrapper />
      </div>
    </section>
  )
}

export default Experience