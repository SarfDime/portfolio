import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleMouseEnter, handleMouseLeave } from './navHelpers'
import { toggleSettings } from '../../../store/settingsSlice'
import { setCurrentElement } from '../../../store/intersectionSlice'

export default function Nav() {
  const [isNavActive, setIsNavActive] = useState(false)
  const dispatch = useDispatch()
  const currentElement = useSelector((state) => state.intersection.currentElement) || ''
  const activeButton = currentElement
  const settingsActive = useSelector((state) => state.settingsVisibility)
  useEffect(() => {
    const sectionElements = document.querySelectorAll('.mainComponent')
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dispatch(setCurrentElement(entry.target.classList[1]))
        }
      })
    }

    const observer = new IntersectionObserver(callback, options)

    sectionElements.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [dispatch])

  const handleToggleNav = () => {
    if(isNavActive) {
      if(settingsActive){
        dispatch(toggleSettings())
      }
    }
    setIsNavActive(!isNavActive)
  }

  const handleToggleSettings = () => {
    dispatch(toggleSettings())
  }

  const handleButtonClick = (e) => {
    const elementToScroll = document.querySelector(`.${e}`)
    if (elementToScroll) {
      elementToScroll.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const performanceMode = useSelector((state) => state.performance.performanceMode)

  function getButtonProps(buttonName, activeButton) {
    if (!performanceMode) {
      return {
        className: `nav-button ${currentElement === buttonName ? 'active' : ''}`,
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
    <nav className={isNavActive ? 'nav-active' : ''}>
      <button
        {...getButtonProps('heroMain', activeButton)}
        onClick={() => handleButtonClick('heroMain')}
        disabled={activeButton === 'heroMain'}
      >
        <svg viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
          <path d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1" />
          <path d="m21.636 12.958l-.279 1.937c-.487 3.388-.731 5.081-1.906 6.093C18.276 22 16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012c-1.175-1.012-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083c.54-1.127 1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2c1.154 0 2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183" />
        </g>
        </svg>
        <p>Hero</p>
      </button>
      <button
        {...getButtonProps('projectsMain', activeButton)}
        onClick={() => handleButtonClick('projectsMain')}
        disabled={activeButton === 'projectsMain'}
      >
        <svg viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
            <path d="M17 15h-5m-5-5l.234.195c1.282 1.068 1.923 1.602 1.923 2.305c0 .703-.64 1.237-1.923 2.305L7 15" />
            <path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536" />
          </g>
        </svg>
        <p>Projects</p>
      </button>
      <button
        {...getButtonProps('contactMain', activeButton)}
        onClick={() => handleButtonClick('contactMain')}
        disabled={activeButton === 'contactMain'}
      >
        <svg viewBox="0 0 24 24">
          <g fill="none">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 17v-6" />
            <circle cx="1" cy="1" r="1" fill="currentColor" transform="matrix(1 0 0 -1 11 9)" />
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" />
          </g>
        </svg>
        <p>About</p>
      </button>
      <button id='settingsButton' onClick={handleToggleSettings}>
        <svg width="32" height="32" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="3" />
            <path strokeLinecap="round" d="M3.661 10.64c.473.296.777.802.777 1.36s-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605c.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.617 1.617 0 0 1 1.567.008c.483.28.77.795.79 1.353c.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863c.02-.558.307-1.074.79-1.353a1.617 1.617 0 0 1 1.567-.008c.336.178.58.276.82.308a2 2 0 0 0 1.478-.396c.315-.242.548-.646 1.014-1.453c.208-.36.369-.639.489-.873m-.81-2.766a1.617 1.617 0 0 1-.777-1.36c0-.559.304-1.065.777-1.362c.321-.202.528-.363.676-.555a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605c-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.617 1.617 0 0 1-1.566-.008a1.617 1.617 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083C13.398 2 12.932 2 12 2c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.483-.143.863a1.617 1.617 0 0 1-.79 1.353a1.617 1.617 0 0 1-1.567.008c-.336-.178-.58-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7c-.208.36-.369.639-.489.873" />
          </g>
        </svg>
      </button>
      <button className='toggleNavButton' onClick={handleToggleNav}>
        <svg viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
            <path strokeLinejoin="round" d="m10 14l-8 8m0 0h6m-6 0v-6" />
            <path d="M12 22c5.523 0 10-4.477 10-10c0-1.821-.487-3.53-1.338-5M2 12C2 6.477 6.477 2 12 2c1.821 0 3.53.487 5 1.338" />
          </g>
        </svg>
      </button>
    </nav>
  )
}

