import TitlesSlider from "@/components/modules/TitlesSlider"
import About from "@/components/templates/home/about/About"
import Hero from "@/components/templates/home/hero/Hero"
import Projects from "@/components/templates/home/projects/Projects"
import Speciality from "@/components/templates/home/speciality/Speciality"
import Testimonials from "@/components/templates/home/testimonials/Testimonials"
// import { getMessages } from "next-intl/server"

export default async function HomePage() {

  return (
    <>
      <Hero />

      <TitlesSlider />

      <About />

      <Projects />

      <Speciality />

      <Testimonials />
    </>
  )
}