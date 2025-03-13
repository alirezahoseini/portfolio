import React from "react"
import Hello from "./Hello"
import HeroTitle from "./HeroTitle"
import HeroSubtitle from "./HeroSubtitle"
import HeroLinks from "./HeroLinks"


const Hero = () => {
  return (
    <section 
      id="hero-section"
      className="max-screen"
    >
      <Hello />

      <HeroTitle />

      <HeroSubtitle />

      <HeroLinks />

    </section>
  )
}

export default Hero