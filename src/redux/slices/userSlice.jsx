import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserDetails } from '../../services/userService';

const userInitialState = {

    localId: null,
    email: null,
    emailVerified: false,
};

export const getUserData = createAsyncThunk('user/getUserData', async (userToken) => {
    try {
        const response = await getUserDetails(userToken);
        return response;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw new Error('Unable to fetch user data');
    }
});

export const userSlice = createSlice({

    name: 'user',
    initialState: userInitialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(getUserData.pending, (state, action) => {
                // state.userData = action.payload;
            })
            .addCase(getUserData.fulfilled, (state, action) => {
                // console.log(action.payload)
                state.email = action.payload.email;
                state.localId = action.payload.localId;
                state.emailVerified = action.payload.emailVerified;

            })
            .addCase(getUserData.rejected, (state, action) => {
                // state.userData = action.payload;
            })

    }
});


export default userSlice.reducer;
