import React from "react"
import Copyright from "./Copyright"
import ScrollToTopButton from "./ScrollToTopButton"
import MainFooter from "./MainFooter"

const Footer = () => {
  
  return (
    <footer className="max-screen z-[60]">
    
      <MainFooter />

      <Copyright />
      
      <ScrollToTopButton />
    </footer>
  )
}

export default Footer