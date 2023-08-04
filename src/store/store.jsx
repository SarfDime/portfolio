import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice.js'
import performanceReducer from './performanceSlice.js'
import settingsReducer from './settingsSlice.js'

const store = configureStore({
    reducer: {
        performance: performanceReducer,
        theme: themeReducer,
        settingsVisibility: settingsReducer,
    },
});

export default store
