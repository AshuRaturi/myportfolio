import React from 'react'
import Navbar from './components/Navbar'
import About from './components/pages/About'
import Skills from './components/pages/Skills'
import Experience from './components/pages/Experience'
import Projects from './components/pages/Projects'
import Education from './components/pages/Education'
import Contact from './components/pages/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className="bg-[#050414] ">

      {/* 🟣 Background Grid with Mask */}
      <div
        className="absolute inset-0 
        bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
        bg-[size:14px_24px] 
        [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      ></div>

      {/* 🟢 Main Content */}
      <div className="relative z-10 pt-20 ">
        <Navbar />
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Education/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
