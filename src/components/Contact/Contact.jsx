import React, { useRef } from "react"
import { useSelector } from "react-redux"

export default function Contact() {
    const cardContainerRef = useRef(null)
    const performanceMode = useSelector((state) => state.performance.performanceMode)
    const handleMouseMove = (event) => {
        if (!performanceMode) {
        const cardContainer = cardContainerRef.current
        cardContainer.style.setProperty("--origin-x", `${event.clientX}px`)
        cardContainer.style.setProperty("--origin-y", `${event.clientY}px`)
        }
    }
    return (
        <main className="mainComponent contactMain">
            <p className="contactTitle">contact</p>
            <div className="contactContainer" ref={cardContainerRef}
                onMouseMove={handleMouseMove}
                >
                <section className="contactInfo">
                    <h1>Let's Connect</h1>
                    <p>
                        Eager to <span>explore</span> opportunities, share ideas, and create together.
                        Whether you're a fellow coder, a potential collaborator, or simply
                        someone who appreciates the <span>art</span> of the web, reach out, and let's
                        embark on a journey of innovation and creativity.
                    </p>
                </section>
                <section className="cardContainer">
                    <div className="contactCard github">
                        <h1>Stay in the Loop</h1>
                        <p>follow my</p>
                        <a href="https://github.com/SarfDime" target="_blank" rel="noopener noreferrer">
                            <span>g</span>
                            <span>i</span>
                            <span>t</span>
                            <span>h</span>
                            <span>u</span>
                            <span>b</span>
                        </a>
                    </div>
                    <div className="contactCard email">
                    <h1>Interested in Hiring Me?</h1>
                        <p>send me an</p>
                        <a href="mailto:sarfdime@yahoo.com" target="_blank" rel="noopener noreferrer">
                            <span>e</span>
                            <span>m</span>
                            <span>a</span>
                            <span>i</span>
                            <span>l</span>
                        </a>
                    </div>
                    <div className="contactCard linkedin">
                    <h1>Let's Get in Touch</h1>
                        <p>message me on</p>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <span>l</span>
                            <span>i</span>
                            <span>n</span>
                            <span>k</span>
                            <span>e</span>
                            <span>d</span>
                            <span>i</span>
                            <span>n</span>
                        </a>
                    </div>
                </section>
            </div>
        </main>
    )
}
