// intersectionSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentElement: null,
};

const intersectionSlice = createSlice({
    name: 'intersection',
    initialState,
    reducers: {
        setCurrentElement: (state, action) => {
            state.currentElement = action.payload;
        },
    },
});

export const { setCurrentElement } = intersectionSlice.actions;
export default intersectionSlice.reducer;
