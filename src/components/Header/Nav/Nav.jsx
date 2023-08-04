import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { handleMouseEnter, handleMouseLeave } from './navHelpers'

export default function Nav() {
  const location = useLocation()
  const activeButton = location.pathname.split('/')[1]
  const navigate = useNavigate()

  const handleButtonClick = (path) => {
    navigate(path)
  }

  const performanceMode = useSelector((state) => state.performance.performanceMode)

  function getButtonProps(buttonName, activeButton) {
    if (!performanceMode) {
      return {
        className: `nav-button ${activeButton === buttonName ? 'active' : ''}`,
        onMouseEnter: (event) => handleMouseEnter(event, event.currentTarget),
        onMouseLeave: (event) => handleMouseLeave(event, event.currentTarget)
      }
    } else {
      return {
        className: `nav-button performance ${activeButton === buttonName ? 'active' : ''}`,
      }
    }
  }

  return (
    <nav>
      <button
        {...getButtonProps('', activeButton)}
        onClick={() => handleButtonClick('/')}
        disabled={activeButton === ''}
      >
        <svg width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
          <path d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1" />
          <path d="m21.636 12.958l-.279 1.937c-.487 3.388-.731 5.081-1.906 6.093C18.276 22 16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012c-1.175-1.012-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083c.54-1.127 1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2c1.154 0 2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183" />
        </g>
        </svg>
        Home
      </button>
      <button
        {...getButtonProps('projects', activeButton)}
        onClick={() => handleButtonClick('/projects')}
        disabled={activeButton === 'projects'}
      >
        <svg width="32" height="32" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
            <path d="M17 15h-5m-5-5l.234.195c1.282 1.068 1.923 1.602 1.923 2.305c0 .703-.64 1.237-1.923 2.305L7 15" />
            <path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536" />
          </g>
        </svg>
        Projects
      </button>
      <button
        {...getButtonProps('about', activeButton)}
        onClick={() => handleButtonClick('/about')}
        disabled={activeButton === 'about'}
      >
        <svg width="32" height="32" viewBox="0 0 24 24">
          <g fill="none">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 17v-6" />
            <circle cx="1" cy="1" r="1" fill="currentColor" transform="matrix(1 0 0 -1 11 9)" />
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" />
          </g>
        </svg>
        About
      </button>
    </nav>
  )
}

