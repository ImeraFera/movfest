import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { _signOut, signIn, signUp, } from '../../services/authService';

const initialState = {
    userToken: sessionStorage.getItem('movfestToken') || null,
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
};

export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password }) => {
        const tokenId = await signIn(email, password);
        sessionStorage.setItem('movfestToken', tokenId);
        return tokenId; // Action payload olarak döndür
    }
);

export const register = createAsyncThunk(
    'auth/register',
    async ({ email, password }) => {
        const tokenId = await signUp(email, password);
        sessionStorage.setItem('movfestToken', tokenId);
        return tokenId; // Action payload olarak döndür

    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        await _signOut();
        sessionStorage.removeItem('movfestToken');
        return;
    }
);



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.userToken = action.payload; // Token'ı user olarak saklayabilirsiniz
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(register.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(register.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.userToken = action.payload; // Token'ı user olarak saklayabilirsiniz
            })
            .addCase(register.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                console.log(error)
            })
            .addCase(logout.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(logout.fulfilled, (state) => {
                state.status = 'succeeded';
                state.userToken = null; // Kullanıcıyı null olarak ayarla
            })
            .addCase(logout.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default authSlice.reducer;