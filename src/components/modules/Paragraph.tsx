import React from "react"

type Props = {
  text: string
}

const Paragraph = (props: Props) => {
  const { text } = props
  return (
   
    <div
      className="leading-7 mt-3"
    >
      {
        text.split("<br />").map(p => (
          <p>{p}</p>
        ))
      }
    </div>
  )
}


export default Paragraph