import React, { useRef } from 'react'

export default function Nav() {
  const buttonsRef = useRef({})

  function scaleElement(e, scale, coordinates) {
    e.style.setProperty('--origin', coordinates)
    e.style.setProperty('--scale', scale)
  }

  function handleMouseEnter(event, e) {
    if (!e.classList.contains('active')) {
      const rect = e.getBoundingClientRect()
      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top
      const percentX = (mouseX / e.offsetWidth) * 100
      const percentY = (mouseY / e.offsetHeight) * 100
      const coordinates = `${percentX}% ${percentY}%`
      scaleElement(e, 1, coordinates)
    }
  }

  function handleMouseLeave(event, e) {
    if (!e.classList.contains('active')) {
      const rect = e.getBoundingClientRect()
      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top
      const constrainedX = Math.max(0, Math.min(mouseX, e.offsetWidth))
      const constrainedY = Math.max(0, Math.min(mouseY, e.offsetHeight))
      const percentX = (constrainedX / e.offsetWidth) * 100
      const percentY = (constrainedY / e.offsetHeight) * 100
      const coordinates = `${percentX}% ${percentY}%`
      scaleElement(e, 0, coordinates)
    }
  }

  const handleButtonClick = (buttonName) => {
    Object.keys(buttonsRef.current).forEach((key) => {
      buttonsRef.current[key].classList.remove('active')
    })
    buttonsRef.current[buttonName].style.setProperty('--origin', 'center')
    buttonsRef.current[buttonName].style.setProperty('--scale', 0)
    buttonsRef.current[buttonName].classList.add('active')
  }

  return (
    <nav>
      <button ref={(ref) => {
        buttonsRef.current['Home'] = ref
        if (ref) {
          ref.addEventListener('mouseenter', (event) => handleMouseEnter(event, ref))
          ref.addEventListener('mouseleave', (event) => handleMouseLeave(event, ref))
        }
      }} className='active' onClick={() => handleButtonClick('Home')}>

        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
          <path d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1" />
          <path d="m21.636 12.958l-.279 1.937c-.487 3.388-.731 5.081-1.906 6.093C18.276 22 16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012c-1.175-1.012-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083c.54-1.127 1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2c1.154 0 2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183" />
        </g>
        </svg>
        Home
      </button>
      <button ref={(ref) => {
        buttonsRef.current['Projects'] = ref
        if (ref) {
          ref.addEventListener('mouseenter', (event) => handleMouseEnter(event, ref))
          ref.addEventListener('mouseleave', (event) => handleMouseLeave(event, ref))
        }
      }} onClick={() => handleButtonClick('Projects')}>

        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <g fill="none">
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 17v-6" />
          <circle cx="1" cy="1" r="1" fill="currentColor" transform="matrix(1 0 0 -1 11 9)" />
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" />
        </g>
        </svg>
        Projects
      </button>
      <button ref={(ref) => {
        buttonsRef.current['Socials'] = ref
        if (ref) {
          ref.addEventListener('mouseenter', (event) => handleMouseEnter(event, ref))
          ref.addEventListener('mouseleave', (event) => handleMouseLeave(event, ref))
        }
      }} onClick={() => handleButtonClick('Socials')}>

        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="6" r="4" />
            <path strokeLinecap="round" d="M15 20.615c-.91.247-1.926.385-3 .385c-3.866 0-7-1.79-7-4s3.134-4 7-4s7 1.79 7 4c0 .345-.077.68-.22 1" />
          </g>
        </svg>
        About
      </button>
    </nav>
  )
}


