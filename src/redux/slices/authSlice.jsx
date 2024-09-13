import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { _signOut, signIn, signUp, } from '../../services/authService';

const initialState = {
    userToken: sessionStorage.getItem('movfestUserToken') || null,
    localId: sessionStorage.getItem('movfestLocalId') || null,
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
};

export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password }) => {
        try {
            const { tokenId, localId } = await signIn(email, password);

            sessionStorage.setItem('movfestUserToken', tokenId);
            sessionStorage.setItem('movfestLocalId', localId);

            return { tokenId, localId }; // Action payload olarak döndür
        } catch (error) {
            throw new Error(error.message);
        }


    }
);

export const register = createAsyncThunk(
    'auth/register',
    async ({ username, email, password }) => {
        try {
            const { tokenId, localId } = await signUp(username, email, password);

            sessionStorage.setItem('movfestUserToken', tokenId);
            sessionStorage.setItem('movfestLocalId', localId);

            return { tokenId, localId }; // Action payload olarak döndür
        } catch (error) {
            throw new Error(error.message);

        }


    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        try {
            await _signOut();
            sessionStorage.removeItem('movfestUserToken');
            sessionStorage.removeItem('movfestLocalId');
            return;
        } catch (error) {
            throw new Error(error.message);

        }

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
            .addCase(login.fulfilled, (state, { payload }) => {
                state.status = 'succeeded';
                state.userToken = payload.tokenId;
                state.localId = payload.localId;

            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
                throw state.error;
            })
            .addCase(register.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(register.fulfilled, (state, { payload }) => {
                state.status = 'succeeded';
                state.userToken = payload.tokenId;
                state.localId = payload.localId;
            })
            .addCase(register.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                throw state.error;
            })
            .addCase(logout.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(logout.fulfilled, (state) => {
                state.status = 'succeeded';
                state.userToken = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                throw state.error;

            });
    },
});

export default authSlice.reducer;