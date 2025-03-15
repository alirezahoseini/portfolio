import React from "react"
import { getTranslations } from "next-intl/server"
import ShimmerTitle from "@/components/modules/shimmer-title/ShimmerTitle"

const About = async () => {
  const t = await getTranslations("Common")
  return (
    <section
      id="about-section"
      className="max-screen text-center flex flex-col 
      items-center justify-center"
    >
      <ShimmerTitle>{t("about_me")}</ShimmerTitle>

    </section>
  )
}

export default About