import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice.js'
import performanceReducer from './performanceSlice.js'
import settingsReducer from './settingsSlice.js'
import pathReducer from './pathSlice';

const store = configureStore({
    reducer: {
        performance: performanceReducer,
        theme: themeReducer,
        path: pathReducer,
        settingsVisibility: settingsReducer,
    },
});

export default store
