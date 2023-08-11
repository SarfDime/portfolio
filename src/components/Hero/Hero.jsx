import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

export default function Hero() {
    const logoRef = useRef(null)
    let paths = []

    const performanceMode = useSelector((state) => state.performance.performanceMode)

    useEffect(() => {
        if (!performanceMode) {
            paths = logoRef.current.querySelectorAll("path")

            const shift = (image, index, rangeX, rangeY) => {
                const translationIntensity = 7
                const maxTranslation = translationIntensity * (index + 1)
                const currentTranslation = `translate(${maxTranslation * rangeX}px, ${maxTranslation * rangeY}px)`

                image.style.transform = currentTranslation
            }

            const shiftAll = (paths, rangeX, rangeY) =>
                paths.forEach((image, index) => shift(image, index, rangeX, rangeY))

            const shiftLogo = (e) => {
                const rect = logoRef.current.getBoundingClientRect()
                const radius = 5000

                const centerX = rect.left + (rect.width / 2)
                const centerY = rect.top + (rect.height / 2.5)

                const rangeX = (e.clientX - centerX) / radius
                const rangeY = (e.clientY - centerY) / radius

                shiftAll(paths, rangeX, rangeY)
            }

            window.addEventListener('mousemove', shiftLogo)

            return () => {
                window.removeEventListener('mousemove', shiftLogo)
            }
        }
    }, [performanceMode])

    return (
        <main className='mainComponent heroMain'>
            <div className="intro">
                <div className="introName">
                    <div className="introTitle">
                        <h1><span>s</span><span>a</span><span>r</span><span>f</span></h1>
                        <h1><span>d</span><span>i</span><span>m</span><span>e</span></h1>
                    </div>
                    <p className='introSubTitle'><span>full-stack</span><span>web developer</span></p>
                </div>

                <div className='introLogo'>
                    <svg ref={logoRef} className='introLogoDime' viewBox="0 0 32 32">
                        <path fill="#fff" fillRule="nonzero" d="M12.161 22.816c.618 0 1.12.49 1.12 1.092c0 .603-.502 1.092-1.12 1.092h-1.453c-.32 0-.628-.124-.854-.345a1.163 1.163 0 0 1-.354-.833V8.149c0-.305.124-.597.345-.813c.22-.215.52-.336.833-.336h1.557c.618 0 1.12.489 1.12 1.092c0 .29-.119.567-.329.772c-.21.204-.495.32-.791.32h-.345v13.632zm12.17-11.452c.779 1.338 1.169 2.835 1.169 4.491s-.395 3.153-1.182 4.492s-1.662 2.365-3.099 3.294c-1.32.854-2.698 1.358-4.407 1.358h-.567c-.618 0-1.12-.489-1.12-1.092c0-.603.502-1.091 1.12-1.091h.69c1.21 0 2.089-.501 3.076-1.07c.986-.568 1.618-1.499 2.19-2.503c.573-1.003.86-2.124.86-3.362c-.001-1.255-.291-2.384-.872-3.388a6.372 6.372 0 0 0-2.376-2.372c-1.004-.577-2.12-.866-3.347-.866h-.297c-.618 0-1.12-.488-1.12-1.091c0-.29.119-.568.329-.772c.21-.205.494-.32.791-.32h.349c1.692 0 3.222.38 4.59 1.142a8.368 8.368 0 0 1 3.223 3.15z" />
                        <path fill="#fff" fillRule="nonzero" d="M12.161 22.816c.618 0 1.12.49 1.12 1.092c0 .603-.502 1.092-1.12 1.092h-1.453c-.32 0-.628-.124-.854-.345a1.163 1.163 0 0 1-.354-.833V8.149c0-.305.124-.597.345-.813c.22-.215.52-.336.833-.336h1.557c.618 0 1.12.489 1.12 1.092c0 .29-.119.567-.329.772c-.21.204-.495.32-.791.32h-.345v13.632zm12.17-11.452c.779 1.338 1.169 2.835 1.169 4.491s-.395 3.153-1.182 4.492s-1.662 2.365-3.099 3.294c-1.32.854-2.698 1.358-4.407 1.358h-.567c-.618 0-1.12-.489-1.12-1.092c0-.603.502-1.091 1.12-1.091h.69c1.21 0 2.089-.501 3.076-1.07c.986-.568 1.618-1.499 2.19-2.503c.573-1.003.86-2.124.86-3.362c-.001-1.255-.291-2.384-.872-3.388a6.372 6.372 0 0 0-2.376-2.372c-1.004-.577-2.12-.866-3.347-.866h-.297c-.618 0-1.12-.488-1.12-1.091c0-.29.119-.568.329-.772c.21-.205.494-.32.791-.32h.349c1.692 0 3.222.38 4.59 1.142a8.368 8.368 0 0 1 3.223 3.15z" />
                        <path fill="#fff" fillRule="nonzero" d="M12.161 22.816c.618 0 1.12.49 1.12 1.092c0 .603-.502 1.092-1.12 1.092h-1.453c-.32 0-.628-.124-.854-.345a1.163 1.163 0 0 1-.354-.833V8.149c0-.305.124-.597.345-.813c.22-.215.52-.336.833-.336h1.557c.618 0 1.12.489 1.12 1.092c0 .29-.119.567-.329.772c-.21.204-.495.32-.791.32h-.345v13.632zm12.17-11.452c.779 1.338 1.169 2.835 1.169 4.491s-.395 3.153-1.182 4.492s-1.662 2.365-3.099 3.294c-1.32.854-2.698 1.358-4.407 1.358h-.567c-.618 0-1.12-.489-1.12-1.092c0-.603.502-1.091 1.12-1.091h.69c1.21 0 2.089-.501 3.076-1.07c.986-.568 1.618-1.499 2.19-2.503c.573-1.003.86-2.124.86-3.362c-.001-1.255-.291-2.384-.872-3.388a6.372 6.372 0 0 0-2.376-2.372c-1.004-.577-2.12-.866-3.347-.866h-.297c-.618 0-1.12-.488-1.12-1.091c0-.29.119-.568.329-.772c.21-.205.494-.32.791-.32h.349c1.692 0 3.222.38 4.59 1.142a8.368 8.368 0 0 1 3.223 3.15z" />
                        <path fill="#fff" fillRule="nonzero" d="M12.161 22.816c.618 0 1.12.49 1.12 1.092c0 .603-.502 1.092-1.12 1.092h-1.453c-.32 0-.628-.124-.854-.345a1.163 1.163 0 0 1-.354-.833V8.149c0-.305.124-.597.345-.813c.22-.215.52-.336.833-.336h1.557c.618 0 1.12.489 1.12 1.092c0 .29-.119.567-.329.772c-.21.204-.495.32-.791.32h-.345v13.632zm12.17-11.452c.779 1.338 1.169 2.835 1.169 4.491s-.395 3.153-1.182 4.492s-1.662 2.365-3.099 3.294c-1.32.854-2.698 1.358-4.407 1.358h-.567c-.618 0-1.12-.489-1.12-1.092c0-.603.502-1.091 1.12-1.091h.69c1.21 0 2.089-.501 3.076-1.07c.986-.568 1.618-1.499 2.19-2.503c.573-1.003.86-2.124.86-3.362c-.001-1.255-.291-2.384-.872-3.388a6.372 6.372 0 0 0-2.376-2.372c-1.004-.577-2.12-.866-3.347-.866h-.297c-.618 0-1.12-.488-1.12-1.091c0-.29.119-.568.329-.772c.21-.205.494-.32.791-.32h.349c1.692 0 3.222.38 4.59 1.142a8.368 8.368 0 0 1 3.223 3.15z" />
                    </svg>
                </div>
            </div>
        </main>
    )
}
