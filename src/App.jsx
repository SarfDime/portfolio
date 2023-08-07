import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from './components/Header/Header'
import About from './components/About/About';
import Projects from './components/Projects/Projects'
import Hero from './components/Hero/Hero'
import SpaceBackground from './components/SpaceBackground/SpaceBackground'
import './styles.scss'

function App() {
  const performanceMode = useSelector(state => state.performance.performanceMode)

  useEffect(() => {
    if (performanceMode) {
      document.body.classList.add('performance')
    } else {
      document.body.classList.remove('performance')
    }
  }, [performanceMode])

  return (
    <>
      <BrowserRouter>
        <Header />
        <SpaceBackground numberOfStars={280} />

        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='projects' element={<Projects />} />
          <Route path='about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
