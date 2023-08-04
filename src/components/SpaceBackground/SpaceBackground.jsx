import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

const SpaceBackground = ({ numberOfStars }) => {
    const [circleRadius, setCircleRadius] = useState(1)
    const currentTheme = useSelector(state => state.theme.currentTheme)
    const performanceMode = useSelector(state => state.performance.performanceMode)
    const showSpaceBackground = currentTheme === 'dark' && !performanceMode
    const spaceBackgroundRef = useRef()

    useEffect(() => {
        const updateCircleRadius = () => {
            let newCircleRadius = 1
            const screenWidth = window.innerWidth;

            if (screenWidth < 2000) {
                const difference = (2000 - screenWidth) / 300
                newCircleRadius = 1 - difference * 0.1
            } else if (screenWidth > 2000) {
                const difference = (screenWidth - 2000) / 300
                newCircleRadius = 1 + difference * 0.1
            }

            setCircleRadius(newCircleRadius)
        }

        window.addEventListener('resize', updateCircleRadius)

        updateCircleRadius()

        return () => window.removeEventListener('resize', updateCircleRadius)
    }, [])

    const generateRandomStars = () => {
        let stars = ''

        for (let i = 0; i < numberOfStars; i++) {
            const x = `${Math.floor(Math.random() * 100)}%`
            const y = `${Math.floor(Math.random() * 100)}%`
            stars += `<use href="#star-symbol" x="${x}" y="${y}" class="star star-${i + 1}"></use>`
        }
        return stars
    }

    return (
        <CSSTransition
            in={showSpaceBackground}
            timeout={150}
            classNames="space-background"
            unmountOnExit
            nodeRef={spaceBackgroundRef}
        >
            <svg ref={spaceBackgroundRef} className="space-background">
                <defs>
                    <symbol id="star-symbol">
                        <circle cx="5" cy="5" r={circleRadius} />
                    </symbol>
                </defs>
                <rect/>
                <g className="stars-scale" dangerouslySetInnerHTML={{ __html: generateRandomStars() }} />
            </svg>
        </CSSTransition>
    )
}

export default SpaceBackground
