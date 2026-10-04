import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import { useEffect } from 'react'

const App = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light')

  const dotRef = React.useRef(null)
  const outlineRef = React.useRef(null)

  // refs for the custom cursor
  const mouse = React.useRef({ x: 0, y: 0 })
  const position = React.useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX
      mouse.current.y = event.clientY

    }
    document.addEventListener('mousemove', handleMouseMove)
    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x -6}px, ${mouse.current.y -6}px, 0)`
        outlineRef.current.style.transform = `translate3d(${position.current.x -20}px, ${position.current.y -20}px, 0)`
      }

      requestAnimationFrame(animate)
    }
    animate()
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />

      {/* custom cursor ring */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-primary pointer-events-none z-[9999]" style={{ transition: 'transform 0.1s ease-out' }}
      />

      {/* custom cursor dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-primary pointer-events-none z-[9999]"
      />
    </div>
  )
}

export default App