import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { setCurrentTheme, setThemeMode, } from "../../../store/themeSlice.js"
import { toggleSettings } from '../../../store/settingsSlice'

import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher.jsx'
import PerformanceSwitcher from './PerformanceSwitcher/PerformanceSwitcher.jsx'

export default function Preferences() {
    const settingsOpen = useSelector((state) => state.settingsVisibility)
    const currentTheme = useSelector((state) => state.theme.currentTheme)
    const themeMode = useSelector((state) => state.theme.themeMode)
    const dispatch = useDispatch()

    const csstransitionRef = useRef()

    const handleToggleSettings = () => {
        dispatch(toggleSettings())
    }

    // const applyThemeFromMode = useCallback(() => {
    //     if (themeMode === "system") {
    //         applySystemTheme();
    //     } else if (themeMode === "dark") {
    //         applyDarkTheme();
    //     } else if (themeMode === "light") {
    //         applyLightTheme();
    //     }
    // }, [themeMode, applySystemTheme, applyDarkTheme, applyLightTheme])

    useEffect(() => {
        applyThemeFromMode()
    }, [themeMode, applyThemeFromMode])

    useEffect(() => {
        const handleSystemThemeChange = () => {
            applyThemeFromMode()
        }

        if (themeMode === "system") {
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .addEventListener("change", handleSystemThemeChange)
        } else {
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .removeEventListener("change", handleSystemThemeChange)
        }

        return () => {
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .removeEventListener("change", handleSystemThemeChange)
        }
    }, [themeMode, applyThemeFromMode])

    function applyDarkTheme() {
        document.body.classList.remove("light-mode")
        document.body.classList.add("dark-mode")
        dispatch(setCurrentTheme("dark"))
    }

    function applyLightTheme() {
        document.body.classList.remove("dark-mode")
        document.body.classList.add("light-mode")
        dispatch(setCurrentTheme("light"))
    }

    function applySystemTheme() {
        const systemDarkMode =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        if (systemDarkMode) {
            if (currentTheme === "dark") return
            applyDarkTheme()
        } else {
            if (currentTheme === "light") return
            applyLightTheme()
        }
    }

    function applyThemeFromMode() {
        if (themeMode === "system") {
            applySystemTheme()
        } else if (themeMode === "dark") {
            applyDarkTheme()
        } else if (themeMode === "light") {
            applyLightTheme()
        }
    }

    const handleDarkClick = () => {
        dispatch(setThemeMode("dark"))
    }

    const handleLightClick = () => {
        dispatch(setThemeMode("light"))
    }

    const handleSystemClick = () => {
        dispatch(setThemeMode("system"))
    }

    return (
        <div className='settingsDiv'>
            <button id='settingsButton' onClick={handleToggleSettings}>
                <svg width="32" height="32" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="3" />
                        <path strokeLinecap="round" d="M3.661 10.64c.473.296.777.802.777 1.36s-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605c.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.617 1.617 0 0 1 1.567.008c.483.28.77.795.79 1.353c.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863c.02-.558.307-1.074.79-1.353a1.617 1.617 0 0 1 1.567-.008c.336.178.58.276.82.308a2 2 0 0 0 1.478-.396c.315-.242.548-.646 1.014-1.453c.208-.36.369-.639.489-.873m-.81-2.766a1.617 1.617 0 0 1-.777-1.36c0-.559.304-1.065.777-1.362c.321-.202.528-.363.676-.555a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605c-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.617 1.617 0 0 1-1.566-.008a1.617 1.617 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083C13.398 2 12.932 2 12 2c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.483-.143.863a1.617 1.617 0 0 1-.79 1.353a1.617 1.617 0 0 1-1.567.008c-.336-.178-.58-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7c-.208.36-.369.639-.489.873" />
                    </g>
                </svg>
            </button>
            <CSSTransition
                in={settingsOpen}
                timeout={100}
                classNames='settingsContainer'
                unmountOnExit
                nodeRef={csstransitionRef}
            >
                <section className='settingsContainer' ref={csstransitionRef}>
                    <ThemeSwitcher
                        themeMode={themeMode}
                        handleDarkClick={handleDarkClick}
                        handleLightClick={handleLightClick}
                        handleSystemClick={handleSystemClick}
                    />
                    <PerformanceSwitcher />
                </section>
            </CSSTransition>
        </div>
    )
}

