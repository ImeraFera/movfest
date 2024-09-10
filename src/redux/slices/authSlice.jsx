import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signIn, _signOut, signUp, getCurrentUser } from '../../services/authService';

const userInitialState = {
    user: null,
};

export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password }) => {
        try {
            const userData = await signIn(email, password);
            // console.log(userData)
            return userData;
        } catch (error) {
            console.log(error)
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        try {
            await _signOut();
        } catch (error) {
            console.log(error)
        }
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload
            console.log(state.user)
        }).addCase(logout.fulfilled, (state, action) => {

            state.user = null;
        })
    }

});

export const { } = userSlice.actions;

export default userSlice.reducer;
