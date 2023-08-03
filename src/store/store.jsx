import { configureStore, createSlice } from '@reduxjs/toolkit'
import themeReducer from './themeSlice.js'

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
        theme: themeReducer,
        settingsVisibility: settingsVisibilitySlice.reducer,
    },
})

export const { toggleSettings } = settingsVisibilitySlice.actions

export default store
