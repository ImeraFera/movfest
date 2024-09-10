import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserDetails } from '../../services/userService';

const userInitialState = {
    userData: null,
};

export const getUserData = createAsyncThunk('user/getUserData', async () => {
    try {
        const response = await getUserDetails();
        return response.data;
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
        builder.addCase(getUserData.fulfilled, (state, action) => {
            state.userData = action.payload;
        });
    }
});

export const { setLogin, setLogout } = userSlice.actions;

export default userSlice.reducer;
