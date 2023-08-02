import './styles.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
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
