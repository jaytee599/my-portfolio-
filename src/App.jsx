import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import WorkSection from './Components/Projects'
import AboutSection from './Components/About'
import ContactSection from './Components/Contact'
import Footer from './Components/Footer'
import BackToTopButton from './Components/Scroll'
import Particle from './Components/Particle'

function App() {

  return (
    <>
      <Header />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <BackToTopButton />
    </>
  )
}

export default App
