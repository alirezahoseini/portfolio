import React from "react"

type Props = {
  title: string
  description: string
}

const PageHeading: React.FC<Props> = props => {
  const { title, description } = props
  return (
    <div className="flex flex-col gap-3 items-center">
      <h1 className="text-3xl font-bold">
        {title}
      </h1>

      <p className="text-lg lg:text-xl text-center">
        {description}
      </p>
    </div>
  )
}

export default PageHeading