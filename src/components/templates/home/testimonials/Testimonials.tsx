import React from "react"
import TestimonialsTitle from "./TestimonialsTitle"
import TestimonialsCarousel from "./TestimonialsCarousel"

const Testimonials = () => {
  return (
    <section className="max-screen flex flex-col md:flex-row gap-12">
      <div className="w-full md:max-w-[45%] lg:w-[30%]">
        <TestimonialsTitle />
      </div>

      <div className="w-full md:w-2/3">
        <TestimonialsCarousel />
      </div> 
    </section>
  )
}

export default Testimonials