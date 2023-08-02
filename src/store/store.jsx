import { configureStore, createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
    name: 'theme',
    initialState: 'system',
    reducers: {
        setTheme: (state, action) => {
            return action.payload
        },
    },
})

const settingsVisibilitySlice = createSlice({
    name: 'settingsVisibility',
    initialState: false,
    reducers: {
        toggleSettings: (state) => {
            return !state
        },
    },
})

const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        settingsVisibility: settingsVisibilitySlice.reducer,
    },
})

export const { setTheme } = themeSlice.actions;
export const { toggleSettings } = settingsVisibilitySlice.actions

export default store
