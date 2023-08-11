import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'

import SpaceBackground from './components/SpaceBackground/SpaceBackground'
import LightBackground from './components/LightBackground/LightBackground'
import './styles.scss'

function App() {
  const performanceMode = useSelector((state) => state.performance.performanceMode)

  useEffect(() => {
    if (performanceMode) {
      document.body.classList.add('performance')
    } else {
      document.body.classList.remove('performance')
    }
  }, [performanceMode])

  return (
    <>
        <Header />
        <LightBackground numPathsCircles={9} />
        <SpaceBackground numberOfStars={280} />
        <Projects />
        <About />
    </>
  )
}

export default App
