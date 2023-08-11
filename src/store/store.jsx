import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice.js'
import performanceReducer from './performanceSlice.js'
import settingsReducer from './settingsSlice.js'
import intersectionReducer from './intersectionSlice';

const store = configureStore({
    reducer: {
        performance: performanceReducer,
        theme: themeReducer,
        intersection: intersectionReducer,
        settingsVisibility: settingsReducer,
    },
});

export default store
