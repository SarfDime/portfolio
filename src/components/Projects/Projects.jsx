import React from 'react'

export default function Projects() {
    return (
        <>
            <main className='projectsMain'>
                <div className="angry-grid">
                    <div className='projectItem' id="item-0">
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
                    <div className='projectItem' id="item-1">
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
                    <div className='projectItem' id="item-2">&nbsp;</div>
                    <div className='projectItem' id="item-3">
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
                    <div className='projectItem' id="item-4">
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
                    <div className='projectItem' id="item-5">
                        <h2>my other codepens</h2>
                        <div>
                            <a href="https://codepen.io/SarfDime/pen/GRwPYZo" target="_blank" rel="noopener noreferrer">cool hover effect</a>
                            <a href="https://codepen.io/SarfDime/pen/eYQxQPY" target="_blank" rel="noopener noreferrer">theme switcher</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

