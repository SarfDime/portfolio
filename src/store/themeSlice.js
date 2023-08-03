import { createSlice } from "@reduxjs/toolkit"

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        currentTheme: "",
        themeMode: localStorage.getItem("theme-mode") || "system",
    },
    reducers: {
        setCurrentTheme(state, action) {
            state.currentTheme = action.payload
        },
        setThemeMode(state, action) {
            state.themeMode = action.payload
            localStorage.setItem("theme-mode", action.payload)
        },
    },
})

export const { setCurrentTheme, setThemeMode } = themeSlice.actions;

export default themeSlice.reducer;