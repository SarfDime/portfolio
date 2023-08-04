import { createSlice } from '@reduxjs/toolkit'

const settingsSlice = createSlice({
    name: 'settings',
    initialState: false,
    reducers: {
        toggleSettings: (state) => {
            return !state;
        },
    },
});

export const { toggleSettings } = settingsSlice.actions
export default settingsSlice.reducer
