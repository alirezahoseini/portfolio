import React from "react"
import Hello from "./Hello"
import HeroTitle from "./HeroTitle"


const Hero = () => {
  return (
    <section 
      id="hero-section"
      className="max-screen"
    >
      <Hello />

      <HeroTitle />

    </section>
  )
}

export default Hero