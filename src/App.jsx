import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Hero from './components/Hero/Hero'
import SpaceBackground from './components/SpaceBackground/SpaceBackground'
import LightBackground from './components/LightBackground/LightBackground'
import { setCurrentPath } from './store/pathSlice'
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
      <BrowserRouter>
        <Header />
        <LightBackground numPathsCircles={9} />
        <SpaceBackground numberOfStars={280} />
        <Projects />
        <Hero />
        <About />
        <Routes>
          <Route path="/" element={<EmptyHero />} />
          <Route path="projects" element={<EmptyProject />} />
          <Route path="about" element={<EmptyAbout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

// Really hacky. Only way i could transition the elements other than using https://reactcommunity.org/react-transition-group/with-react-router/ But this needs elements to be postion absolute and is just as hacky 

function EmptyProject() {
  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {
    dispatch(setCurrentPath(location.pathname))
  }, [dispatch, location.pathname])
  return (<></>)
}
function EmptyHero() {
  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {
    dispatch(setCurrentPath(location.pathname))
  }, [dispatch, location.pathname])
  return (<></>)
}
function EmptyAbout() {
  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {
    dispatch(setCurrentPath(location.pathname))
  }, [dispatch, location.pathname])
  return (<></>)
}

export default App
