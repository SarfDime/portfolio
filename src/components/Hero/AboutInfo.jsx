import React, { useEffect } from 'react'
import { useSelector } from "react-redux"

export default function AboutInfo() {
    const performanceMode = useSelector(
        (state) => state.performance.performanceMode
    )

    useEffect(() => {
        if (!performanceMode) {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.3,
            }

            const handleIntersection = (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('invisible')
                    }
                })
            }

            const divElements = document.querySelectorAll('.aboutInfo .invisible')
            const observers = []

            divElements.forEach(divElement => {
                const observer = new IntersectionObserver(handleIntersection, options)
                observer.observe(divElement)
                observers.push(observer)
            })

            return () => {
                observers.forEach(observer => {
                    observer.disconnect()
                })
            }
        }
    }, [performanceMode])

    return (
        <section className="aboutInfo">
            <p className='aboutTitle'>About Me</p>
            <div className={!performanceMode ? 'invisible' : ''}>
                <h1>My Journey</h1>
                <p>
                    Hey there! I'm <span>Dime</span>, a dedicated web developer
                    enthusiastic about crafting digital experiences that merge
                    creativity with functionality. I'm on a <span>journey</span> to learn, grow,
                    and contribute to the ever-changing landscape of web development.
                </p>
            </div>
            <div className={!performanceMode ? 'invisible' : ''}>
                <h1>Unveiling Possibilities</h1>
                <p>
                    From concept to <span>reality</span>, I thrive on weaving together code and creativity. User-centric <span>design</span>, efficient development, and seamless interaction are the pillars of my approach.
                </p>
            </div>
            <div className={!performanceMode ? 'invisible' : ''}>
                <h1>Driven by Digital Creativity</h1>
                <p>
                    The world of technology has always captivated me, and I find my
                    true calling in web development. The power to transform abstract
                    ideas into dynamic digital experiences fuels my <span>passion</span> for
                    coding. Through web development, I merge innovation and creativity
                    to build platforms that connect and engage users on a <span>global
                        scale.</span>
                </p>
            </div>
        </section>
    )
}
