import { createSlice } from "@reduxjs/toolkit"

const performanceSlice = createSlice({
    name: "performance",
    initialState: {
        performanceMode: JSON.parse(localStorage.getItem("performance-mode")) || false,
    },
    reducers: {
        setPerformanceMode(state, action) {
            state.performanceMode = action.payload
            localStorage.setItem("performance-mode", action.payload)
        },
    },
})



export const { setPerformanceMode } = performanceSlice.actions

export default performanceSlice.reducer
