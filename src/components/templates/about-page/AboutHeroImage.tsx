import Image from "next/image"
import React from "react"


const AboutHeroImage = () => {
  return (
    <div className="relative w-full sm:w-1/2">
      <div className="h-full w-full overflow-hidden rounded-b-full">
        <Image
          src="/about_pic.jpg"
          width={600}
          height={1200}
          alt="Alireza hosseini front-end developer"
          className="aspect-[3/4] h-full w-full object-cover transition duration-300 
          hover:scale-[1.015]"
        />
      </div>
    </div>
  )
}

export default AboutHeroImage