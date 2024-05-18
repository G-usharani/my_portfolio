import React from "react"
import Header from "./COMPONENTS/Head/Header"
import Home from "./COMPONENTS/Hero/Home"
import Skills from "./COMPONENTS/Skills/Skills"
import Portfolio from "./COMPONENTS/Portfolio/Portfolio"
import Resume from "./COMPONENTS/Resume/Resume"
import Contact from "./COMPONENTS/Contact/Contact"
import Footer from "./COMPONENTS/Footer"
import "./App.css"


const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Skills/>
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />

    </>
  )
}

export default App
