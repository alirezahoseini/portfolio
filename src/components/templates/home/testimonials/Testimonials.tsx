import React from "react"
import TestimonialsTitle from "./TestimonialsTitle"
import TestimonialsCarousel from "../../../modules/testimonials-carousel/TestimonialsCarousel"


const Testimonials = () => {
  return (
    <section className="max-screen flex flex-col lg:flex-row gap-12">
      <div className="w-full lg:w-[30%]">
        <TestimonialsTitle />
      </div>

      <div className="w-full lg:w-2/3">
        <TestimonialsCarousel />
      </div> 
    </section>
  )
}

export default Testimonials