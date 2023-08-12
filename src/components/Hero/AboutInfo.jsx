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
            <div className={!performanceMode ? 'invisible' : ''}>
                <h1>My Journey</h1>
                <p>
                    Hey there! I'm <span>Dime</span>, a dedicated web developer
                    enthusiastic about crafting digital experiences that merge
                    creativity with functionality. I'm on a journey to learn, grow,
                    and contribute to the ever-changing landscape of web development.
                </p>
            </div>
            <div className={!performanceMode ? 'invisible' : ''}>
                <h1>Unveiling Possibilities</h1>
                <p>
                    Technology's potential has always fascinated me, leading me to the
                    realm of web development. The art of turning lines of code into
                    interactive experiences is where my journey truly begins.
                </p>
            </div>
            <div className={!performanceMode ? 'invisible' : ''}>
                <h1>Driven by Digital Creativity</h1>
                <p>
                    The world of technology has always captivated me, and I find my
                    true calling in web development. The power to transform abstract
                    ideas into dynamic digital experiences fuels my passion for
                    coding. Through web development, I merge innovation and creativity
                    to build platforms that connect and engage users on a global
                    scale.
                </p>
            </div>
        </section>
    )
}
