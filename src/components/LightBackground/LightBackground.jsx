import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

const generateRandomPath = () => {
    const shapeType = Math.random(); // Random value between 0 and 1

    if (shapeType < 0.25) {
        // Generate an equilateral triangle
        const x1 = Math.random() * 800;
        const y1 = Math.random() * 450;
        const size = Math.random() * 100 + 50; // Random size between 50 and 150
        const height = (Math.sqrt(3) / 2) * size;

        const x2 = x1 + size;
        const y2 = y1;
        const x3 = x1 + size / 2;
        const y3 = y1 - height;

        return `M${x1} ${y1} L${x2} ${y2} L${x3} ${y3} Z`;
    } else if (shapeType < 0.4) {
        const x = Math.random() * 800
        const y = Math.random() * 450
        const size = Math.random() * 150 + 50; // Random size between 50 and 200
        return `M${x} ${y} h${size} v${size} h-${size} Z`;
    } else if (shapeType < 0.75) {
        // Generate a hexagon
        const x = Math.random() * 800;
        const y = Math.random() * 450;
        const size = Math.random() * 100 + 50; // Random size between 50 and 150
        const angleStep = (Math.PI * 2) / 6;
        let path = `M${x + size * Math.cos(0)} ${y + size * Math.sin(0)}`;
        for (let i = 1; i < 6; i++) {
            const vertexX = x + size * Math.cos(angleStep * i);
            const vertexY = y + size * Math.sin(angleStep * i);
            path += ` L${vertexX} ${vertexY}`;
        }
        path += ' Z';
        return path;
    } else {
        // Generate a cylinder
        const x = Math.random() * 1600;
        const y = Math.random() * 900;
        const radius = Math.random() * 60 + 20; // Random radius between 20 and 80
        const height = Math.random() * 150 + 50; // Random height between 50 and 200
        const path = `
            M${x + radius} ${y}
            A${radius} ${radius} 0 0 1 ${x - radius} ${y}
            L${x - radius} ${y + height}
            A${radius} ${radius} 0 0 1 ${x + radius} ${y + height}
            Z
        `;
        return path;
    }
}

const generateRandomCircle = () => {
    const cx = Math.random() * 1600;
    const cy = Math.random() * 900;
    const r = Math.random() * 50 + 10;
    return { cx, cy, r };
}

const getRandomGradientId = () => {
    return Math.random() < 0.5 ? 'a' : 'b'
}

const renderRandomSVG = (num) => {
    const pathsCircles = [];
    for (let i = 0; i < num; i++) {
        const path = generateRandomPath();
        const circle = generateRandomCircle();
        const gradientId = getRandomGradientId();
        pathsCircles.push(
            <g key={i}>
                <path className={`shape-${i + 1}`} d={path} stroke={`url(#${gradientId})`} strokeWidth="2" fill="none" />
                <circle className={`shape-${i + 1}`} cx={circle.cx} cy={circle.cy} r={circle.r} strokeWidth="4" fill="none" stroke={`url(#${gradientId})`} />
            </g>
        );
    }
    return pathsCircles
}

export default function LightBackground({ numPathsCircles }) {
    const lightBackgroundRef = useRef()
    const currentTheme = useSelector(state => state.theme.currentTheme)
    const performanceMode = useSelector(state => state.performance.performanceMode)
    const showLightBackground = currentTheme === 'light' && !performanceMode

    return (
        <CSSTransition
            in={showLightBackground}
            timeout={150}
            classNames="space-background"
            unmountOnExit
            nodeRef={lightBackgroundRef}
        >
            <svg className='lightBackground' ref={lightBackgroundRef} viewBox="0 0 1600 900">
                <defs>
                    <linearGradient id='a' x1='0' x2='0' y1='1' y2='0'>
                        <stop offset='0' stopColor='#abebeb' />
                        <stop offset='1' stopColor='#CF6' />
                    </linearGradient>
                    <linearGradient id='b' x1='0' x2='0' y1='0' y2='1'>
                        <stop offset='0' stopColor='#f88383' />
                        <stop offset='1' stopColor='#f8e288' />
                    </linearGradient>
                </defs>
                <g fill="#FFF" fillOpacity="0" strokeMiterlimit="10">
                    {renderRandomSVG(numPathsCircles)}
                </g>
            </svg>
        </CSSTransition>
    )
}
