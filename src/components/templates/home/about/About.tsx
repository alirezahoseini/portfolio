import React from "react"
import { getTranslations } from "next-intl/server"
import ShimmerTitle from "@/components/modules/shimmer-title/ShimmerTitle"
import TextRevalAnimation from "@/components/modules/text-reval-animation/TextRevalAnimation"


const About = async () => {
  const t = await getTranslations("Common")
  const m = await getTranslations("HomePage")
  return (
    <section
      id="about-section"
      className="max-screen text-center flex flex-col 
      items-center justify-center"
    >
      <ShimmerTitle>{t("about_me")}</ShimmerTitle>

      <TextRevalAnimation value={m("about_description")} />

    </section>
  )
}

export default About