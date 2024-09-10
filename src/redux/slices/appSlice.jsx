import { createSlice } from '@reduxjs/toolkit';

import { APP_URL } from '../../config/CONFIG';

//  
const appInitialState = {
    url: APP_URL,
    title: 'Movfest',
    isLoading: false,
}

export const appSlice = createSlice({
    name: 'app',
    initialState: appInitialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setUrl: (state, action) => {
            state.url = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
});

export const { setIsLoading } = appSlice.actions;

export default appSlice.reducer;
