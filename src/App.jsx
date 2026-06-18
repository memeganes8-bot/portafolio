import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    let fx = 0, fy = 0, cx = 0, cy = 0

    const move = (e) => {
      cx = e.clientX
      cy = e.clientY
      cursor.style.left = cx - 6 + 'px'
      cursor.style.top = cy - 6 + 'px'
    }

    const animate = () => {
      fx += (cx - fx) * 0.12
      fy += (cy - fy) * 0.12
      follower.style.left = fx - 18 + 'px'
      follower.style.top = fy - 18 + 'px'
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', move)
    animate()
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
