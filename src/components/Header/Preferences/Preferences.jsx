import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { setCurrentTheme, setThemeMode, } from "../../../store/themeSlice.js"

import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher.jsx'
import PerformanceSwitcher from './PerformanceSwitcher/PerformanceSwitcher.jsx'

export default function Preferences() {
    const settingsOpen = useSelector((state) => state.settingsVisibility)
    const currentTheme = useSelector((state) => state.theme.currentTheme)
    const themeMode = useSelector((state) => state.theme.themeMode)
    const dispatch = useDispatch()

    const csstransitionRef = useRef()

    // const handleToggleSettings = () => {
    //     dispatch(toggleSettings())
    // }

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
    )
}

