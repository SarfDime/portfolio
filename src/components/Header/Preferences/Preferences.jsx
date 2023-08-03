import { useEffect } from 'react'
import { toggleSettings } from '../../../store/store.jsx'
import { CSSTransition } from 'react-transition-group'

import { useDispatch, useSelector } from "react-redux";
import { setCurrentTheme, setThemeMode, } from "../../../store/themeSlice.js"
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher.jsx'

export default function Preferences() {
    const settingsOpen = useSelector((state) => state.settingsVisibility)
    const currentTheme = useSelector((state) => state.theme.currentTheme)
    const themeMode = useSelector((state) => state.theme.themeMode)
    const dispatch = useDispatch()

    const handleToggleSettings = () => {
        dispatch(toggleSettings())
    }

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
                .addEventListener("change", handleSystemThemeChange);
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
    }, [themeMode])

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
                <svg viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" d="M7.843 20.198C9.872 21.399 10.886 22 12 22c1.114 0 2.128-.6 4.157-1.802l.686-.407c2.029-1.2 3.043-1.802 3.6-2.791c.557-.99.557-2.19.557-4.594M20.815 8a3.556 3.556 0 0 0-.372-1c-.557-.99-1.571-1.59-3.6-2.792l-.686-.406C14.128 2.601 13.114 2 12 2c-1.114 0-2.128.6-4.157 1.802l-.686.406C5.128 5.41 4.114 6.011 3.557 7C3 7.99 3 9.19 3 11.594v.812c0 2.403 0 3.605.557 4.594c.226.402.528.74.943 1.08" />
                        <circle cx="12" cy="12" r="3" />
                    </g>
                </svg>
            </button>
            <CSSTransition
                in={settingsOpen}
                timeout={100}
                classNames='settingsContainer'
                unmountOnExit
            >
                <section className='settingsContainer'>
                    <ThemeSwitcher
                        themeMode={themeMode}
                        handleDarkClick={handleDarkClick}
                        handleLightClick={handleLightClick}
                        handleSystemClick={handleSystemClick}
                    />
                </section>
            </CSSTransition>
        </div>
    )
}

