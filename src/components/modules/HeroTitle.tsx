import React from "react"

type Props = {
  text: string
  className?: string
}

const HeroTitle = ({ text, className }: Props) => {
  const title = text.split(",")


  return (
    <p
      className={
        `text-[3rem] md:text-6xl lg:text-7xl
      font-medium rtl:font-doran ltr:font-clash ltr:leading-none lg:rtl:!leading-[90px]
      text-pretty text-primary-light dark:text-primary-dark ${className}`
      }
    >
      {title[0]} 

      <span 
        className="text-highlight-light 
        dark:text-highlight-dark"
      >
        {title[1]}
      </span> 

      {title[2]} 
    </p>
  )
}

export default HeroTitle