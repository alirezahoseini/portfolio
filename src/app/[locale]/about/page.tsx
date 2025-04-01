import React from "react"
import AboutHero from "@/components/templates/about-page/AboutHero"
import TechsSlider from "@/components/modules/techs-slider/TechsSlider"

const AboutPage = () => {
  return (
    <div className="pt-0">
      <AboutHero /> 

      <div
        className="border-solid border-x-0
      border-bg700-light relative overflow-hidden
        border-y dark:border-bg700-dark py-3"
      >
        <TechsSlider />
      </div>
    </div>
  )
}

export default AboutPage  