import { createSlice } from '@reduxjs/toolkit';

import { APP_URL } from '../../config/CONFIG';

//  
const appInitialState = {
    isLoading: false,
    movies: [],
}

export const appSlice = createSlice({
    name: 'app',
    initialState: appInitialState,
    reducers: {

        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
});

export const { setIsLoading } = appSlice.actions;

export default appSlice.reducer;
