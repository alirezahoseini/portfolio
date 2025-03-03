import React from "react"
import GitHubLogo from "@/assets/logos/GitHubLogo"
// import nextjsLogo from "@/assets/logos/nextjs.svg"
// import reactLogo from "@/assets/logos/react.svg"

const LogosSlider = () => {

  return (
    <div>
      <GitHubLogo
        className="w-12 h-12 fill-black hover:fill-blue-700
        transition-all duration-300 drop-shadow-md shadow-blue-600 hover:drop-shadow-xl"
      />
    </div>
  )
}

export default LogosSlider