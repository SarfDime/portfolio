import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useSelector } from 'react-redux';
export default function Projects() {
    const projectsRef = useRef() // Create a ref for the main element
    const currentPath = useSelector((state) => state.path.currentPath);
    const isProjectsPath = currentPath === '/projects'
    
    return (
        <CSSTransition
            in={isProjectsPath}
            timeout={250}
            classNames="projectsMain"
            unmountOnExit
            nodeRef={projectsRef}
        >
            <main className='projectsMain' ref={projectsRef} >
                <div className="angry-grid">
                    <div className='projectItem item-0'>
                        <div className='casTitle'>
                            <h1>click</h1>
                            <h1>&</h1>
                            <h1>ship</h1>
                        </div>

                        <p className='casSubTitle'>main ui/ux designer</p>

                        <svg className="casLogo" viewBox="0 0 220 220">
                            <g clipPath="url(#clip0_2_15)">
                                <path
                                    d="M97.4204 114.878C100.124 116.886 102.932 118.895 105.636 120.918C113.448 126.292 120.941 132.116 128.077 138.361C119.257 148.932 111.465 157.993 98.6436 159.79C90.5492 160.953 77.7581 157.359 75.659 142.725C74.1489 132.124 82.7719 124.12 97.4204 114.878ZM220 110C220 131.754 213.55 153.02 201.465 171.108C189.38 189.196 172.203 203.295 152.106 211.622C132.008 219.949 109.893 222.13 88.5568 217.89C67.2201 213.649 47.6199 203.177 32.2343 187.798C16.8487 172.418 6.36869 152.823 2.1192 131.488C-2.13029 110.153 0.0416052 88.0369 8.3603 67.9362C16.679 47.8355 30.7709 30.6528 48.8544 18.5604C66.9378 6.46797 88.2007 0.00896897 109.955 9.33052e-06C124.404 -0.00594175 138.713 2.8349 152.064 8.36025C165.415 13.8856 177.547 21.9872 187.766 32.2022C197.985 42.4173 206.092 54.5456 211.622 67.8944C217.153 81.2431 220 95.5508 220 110ZM126.959 67.6249L125.781 84.8558L176.115 60.8745L128.499 30.1579L128.303 50.1222C124.996 50.4393 120.314 49.201 116.901 48.2194C110.367 46.0555 103.418 45.4403 96.6049 46.4223C79.7364 48.8385 63.9704 60.3611 66.4017 77.743C67.5344 85.6864 71.944 93.0862 80.5821 101.483C62.9133 112.764 47.6154 126.279 50.6508 147.407C54.7282 175.903 82.0621 185.538 99.2628 183.077C119.605 180.162 130.855 167.054 141.547 154.142C144.515 158.781 146.49 163.985 147.346 169.425L147.663 171.554L171.735 168.096L171.418 165.982C169.908 155.788 165.453 146.349 157.661 137.183C155.487 134.587 153.184 132.102 150.759 129.738C148.098 127.129 145.301 124.664 142.378 122.353C135.492 116.72 128.167 111.616 121.054 106.663C104.986 95.4572 91.1079 85.777 89.5827 75.1606C88.6615 68.7273 93.9017 64.9972 99.1571 64.2422C104.412 63.4871 109.139 64.6348 114.259 65.7523C118.411 66.8374 122.67 67.4654 126.959 67.6249Z"
                                    fill="url(#linearLogoFooter)" />
                            </g>
                            <defs>
                                <linearGradient id="linearLogoFooter" x1="54.9849" y1="14.7241" x2="165" y2="205.276"
                                    gradientUnits="userSpaceOnUse">
                                    <stop offset="0.25" />
                                    <stop offset=".65" />
                                    <stop offset="1" />
                                </linearGradient>
                                <clipPath id="clip0_2_15">
                                    <rect width="220" height="220" />
                                </clipPath>
                            </defs>
                        </svg>

                        <div className='casGradient'>
                        </div>

                        <div className='casLinks'>
                            <a className='casSiteLink' href="https://clickandship-sedc.github.io/store/" target="_blank" rel="noopener noreferrer">
                                <svg viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                                        <path d="M15.197 3.355c1.673-1.68 4.25-1.816 5.757-.305c1.506 1.512 1.37 4.1-.303 5.78l-2.424 2.433M10.047 14c-1.507-1.512-1.37-4.1.302-5.779L12.5 6.062" />
                                        <path d="M13.954 10c1.506 1.512 1.37 4.1-.303 5.779l-2.424 2.433l-2.424 2.433c-1.673 1.68-4.25 1.816-5.757.305c-1.506-1.512-1.37-4.1.303-5.78l2.424-2.433" />
                                    </g>
                                </svg>
                                <h3>Visit Site</h3>
                            </a>
                            <a className='casGitLink' href="https://github.com/sedc-codecademy/sp2023-cp02-dsw-4/tree/master" target="_blank" rel="noopener noreferrer">
                                <svg viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                                        <path d="m15.5 9l.172.172c1.333 1.333 2 2 2 2.828c0 .828-.667 1.495-2 2.828L15.5 15m-2.206-7.83L12 12l-1.294 4.83M8.5 9l-.172.172c-1.333 1.333-2 2-2 2.828c0 .828.667 1.495 2 2.828L8.5 15" />
                                        <path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" />
                                    </g>
                                </svg>
                                <h3>Visit Repo</h3>
                            </a>
                        </div>
                    </div>
                    <div className='projectItem item-1'>
                        <div>
                            <a href="https://sarfdime.github.io/Movies/" target="_blank" rel="noopener noreferrer">
                                <h3>movies</h3>
                            </a>
                            <a href="https://sarfdime.github.io/Hangman/" target="_blank" rel="noopener noreferrer">
                                <h3>hangman</h3>
                            </a>
                            <a href="https://sarfdime.github.io/Calculator/" target="_blank" rel="noopener noreferrer">
                                <h3>calculator</h3>
                            </a>
                        </div>
                        <p>some of my smaller projects</p>
                    </div>
                    <div className='projectItem item-2'>
                        <h1 className='weatherTitle'>weather</h1>

                        <p className='weatherSubTitle'>built with open-meteo Api</p>

                        <div className='weatherGradient'>
                        </div>

                        <div className='weatherLinks'>
                            <a className='weatherSiteLink' href="https://sarfdime.github.io/Weather/" target="_blank" rel="noopener noreferrer">
                                <svg viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                                        <path d="M15.197 3.355c1.673-1.68 4.25-1.816 5.757-.305c1.506 1.512 1.37 4.1-.303 5.78l-2.424 2.433M10.047 14c-1.507-1.512-1.37-4.1.302-5.779L12.5 6.062" />
                                        <path d="M13.954 10c1.506 1.512 1.37 4.1-.303 5.779l-2.424 2.433l-2.424 2.433c-1.673 1.68-4.25 1.816-5.757.305c-1.506-1.512-1.37-4.1.303-5.78l2.424-2.433" />
                                    </g>
                                </svg>
                                <h3>Visit Site</h3>
                            </a>
                            <a className='weatherGitLink' href="https://github.com/SarfDime/Weather" target="_blank" rel="noopener noreferrer">
                                <svg viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                                        <path d="m15.5 9l.172.172c1.333 1.333 2 2 2 2.828c0 .828-.667 1.495-2 2.828L15.5 15m-2.206-7.83L12 12l-1.294 4.83M8.5 9l-.172.172c-1.333 1.333-2 2-2 2.828c0 .828.667 1.495 2 2.828L8.5 15" />
                                        <path d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" />
                                    </g>
                                </svg>
                                <h3>Visit Repo</h3>
                            </a>
                        </div>

                        <svg className='weatherLogo sunLogo' viewBox="0 0 24 24">
                            <g fill="currentColor">
                                <path d="M17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z" />
                                <path fillRule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                <path d="M3.67 3.716a.75.75 0 0 1 1.059-.048L6.95 5.7a.75.75 0 0 1-1.012 1.107L3.717 4.775a.75.75 0 0 1-.048-1.06Zm16.662 0a.75.75 0 0 1-.047 1.06l-2.223 2.03A.75.75 0 1 1 17.05 5.7l2.222-2.032a.75.75 0 0 1 1.06.048Zm-3.306 13.309a.75.75 0 0 1 1.06 0l2.223 2.222a.75.75 0 1 1-1.061 1.06l-2.222-2.222a.75.75 0 0 1 0-1.06Zm-10.051 0a.75.75 0 0 1 0 1.06l-2.222 2.223a.75.75 0 0 1-1.06-1.06l2.222-2.223a.75.75 0 0 1 1.06 0Z" opacity=".5" />
                            </g>
                        </svg>

                        <svg className='weatherLogo moonLogo' viewBox="0 0 24 24">
                            <g>
                                <path d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.484.484 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.484.484 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.484.484 0 0 1-.273-.274l-.43-1.095ZM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.484.484 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.484.484 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.484.484 0 0 1-.272-.273l-.157-.4Z" />

                                <path fill="currentColor" d="m21.067 11.857l-.642-.388l.642.388Zm-8.924-8.924l-.388-.642l.388.642Zm-4.767 17.08a.75.75 0 1 0-.752 1.298l.752-1.298Zm-4.687-2.638a.75.75 0 1 0 1.298-.75l-1.298.75ZM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5Zm-18.5 0A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5Zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25v-1.5Zm4.925-2.781A5.746 5.746 0 0 1 15.5 14.25v1.5a7.247 7.247 0 0 0 6.21-3.505l-1.285-.776ZM9.75 8.5a5.747 5.747 0 0 1 2.781-4.925l-.776-1.284A7.246 7.246 0 0 0 8.25 8.5h1.5ZM12 2.75a.384.384 0 0 1-.268-.118a.285.285 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026v1.5Zm9.71 9.495c-.066.107-.156.109-.187.105a.285.285 0 0 1-.155-.082a.384.384 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606l1.284.776ZM12 21.25a9.204 9.204 0 0 1-4.624-1.237l-.752 1.298A10.704 10.704 0 0 0 12 22.75v-1.5Zm-8.013-4.625A9.204 9.204 0 0 1 2.75 12h-1.5a10.7 10.7 0 0 0 1.439 5.375l1.298-.75Z" />
                            </g>
                        </svg>


                    </div>
                    <div className='projectItem item-3'>
                        <h2>online shop rest api in nest<span>.</span><span>js</span> with postre<span>sql</span></h2>
                        <div>
                            <a href="https://github.com/SarfDime/AdvancedNodeHomeworks/tree/main/nestjs/myPrismaApp" target="_blank" rel="noopener noreferrer">
                                <p>using</p>
                                <h3>prisma</h3>
                                <p>with jwt authentication</p>
                            </a>
                            <a href="https://github.com/SarfDime/AdvancedNodeHomeworks/tree/main/nestjs/my-app" target="_blank" rel="noopener noreferrer">
                                using
                                <h3>typeOrm</h3>
                            </a>
                        </div>
                    </div>
                    <div className='projectItem item-4'>
                        <svg className='sscLogo' viewBox="0 0 24 24">
                            <g fill="url(#linearSscLogo)" stroke="currentColor">
                                <path strokeWidth="1.5" d="M10.08 7.897C11.157 5.966 11.695 5 12.5 5c.805 0 1.343.966 2.42 2.897l.278.5c.306.549.46.823.698 1.004c.238.181.535.248 1.13.383l.54.122c2.091.473 3.137.71 3.385 1.51c.249.8-.464 1.633-1.89 3.3l-.368.43c-.405.474-.607.711-.699 1.004c-.09.293-.06.609.001 1.24l.056.576c.216 2.224.323 3.336-.328 3.83c-.651.495-1.63.044-3.587-.857l-.507-.234c-.556-.256-.834-.384-1.129-.384c-.295 0-.573.128-1.13.384l-.506.234c-1.957.9-2.936 1.352-3.587.857c-.651-.494-.543-1.606-.328-3.83l.056-.575c.061-.632.092-.948 0-1.24c-.09-.294-.293-.53-.698-1.004l-.369-.432c-1.425-1.666-2.138-2.5-1.89-3.3c.25-.8 1.295-1.036 3.386-1.509l.54-.122c.595-.135.892-.202 1.13-.383c.239-.18.392-.455.698-1.004l.278-.5Z" />
                                <path strokeLinejoin="round" d="M4.99 2s.288 1.458.92 2.085C6.54 4.712 8 4.99 8 4.99s-1.458.288-2.085.92C5.288 6.54 5.01 8 5.01 8s-.288-1.458-.92-2.085C3.46 5.288 2 5.01 2 5.01s1.458-.288 2.085-.92C4.712 3.46 4.99 2 4.99 2Z" />
                                <path strokeLinecap="round" strokeWidth="1.5" d="M18 5h2m-1 1V4" />
                            </g>
                            <defs>
                                <linearGradient id="linearSscLogo" x1="54.9849" y1="14.7241" x2="165" y2="205.276"
                                    gradientUnits="userSpaceOnUse">
                                    <stop offset="0.25" />
                                    <stop offset="1" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className='sscTitle'>
                            <h2>svg</h2>
                            <h2>star</h2>
                            <h2>codpen</h2>
                        </div>

                        <p className='sscSubTitle'>dynamic svg rating</p>

                        <a className='sscLink' href="https://codepen.io/SarfDime/pen/wvQEagY" target="_blank" rel="noopener noreferrer">
                            <svg viewBox="0 0 24 24">
                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                                    <path d="M15.197 3.355c1.673-1.68 4.25-1.816 5.757-.305c1.506 1.512 1.37 4.1-.303 5.78l-2.424 2.433M10.047 14c-1.507-1.512-1.37-4.1.302-5.779L12.5 6.062" />
                                    <path d="M13.954 10c1.506 1.512 1.37 4.1-.303 5.779l-2.424 2.433l-2.424 2.433c-1.673 1.68-4.25 1.816-5.757.305c-1.506-1.512-1.37-4.1.303-5.78l2.424-2.433" />
                                </g>
                            </svg>
                            <h3>Visit</h3>
                        </a>

                        <div className='sscGradient'>
                        </div>
                    </div>
                    <div className='projectItem item-5'>
                        <h2>my other codepens</h2>
                        <div>
                            <a href="https://codepen.io/SarfDime/pen/GRwPYZo" target="_blank" rel="noopener noreferrer">cool hover effect</a>
                            <a href="https://codepen.io/SarfDime/pen/eYQxQPY" target="_blank" rel="noopener noreferrer">theme switcher</a>
                        </div>
                    </div>
                </div>
            </main >
        </CSSTransition>
    )
}

