import Image from "next/image"
import React from "react"

const Avatar = () => {
  return (
    <div
      className="bg-[#FFDCAB] pt-2 dark:bg-opacity-50
        rounded-full flex items-center justify-center pr-2 
        mt-16 mb-3"
    >
      <Image 
        src="/main-memoji.png" 
        width={120}
        height={120} 
        alt="alireza hosseini"
      />
    </div>
  )
}

export default Avatar