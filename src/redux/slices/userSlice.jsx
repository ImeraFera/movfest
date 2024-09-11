import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserDetails } from '../../services/userService';
import { createSelector } from 'reselect';

const userInitialState = {
    localId: null,
    email: null,
    emailVerified: false,
    status: 'idle',  // 'idle', 'loading', 'succeeded', 'failed' gibi durumlar
    error: null,
};

export const getUserData = createAsyncThunk('user/getUserData', async (userToken) => {
    try {
        const response = await getUserDetails(userToken);
        return response;  // Payload olarak döner
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw new Error('Unable to fetch user data');
    }
});

export const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUserData.pending, (state) => {
                state.status = 'loading';  // Yüklenme durumu
                state.error = null;  // Önceki hataları sıfırla
            })
            .addCase(getUserData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.email = action.payload.email;
                state.localId = action.payload.localId;
                state.emailVerified = action.payload.emailVerified;
            })
            .addCase(getUserData.rejected, (state, action) => {
                state.status = 'failed';  // Yüklenme başarısız
                state.error = action.error.message;  // Hata mesajını kaydet
            });
    },
});


const selectUserState = (state) => state.user;

export const selectUserData = createSelector(
    [selectUserState],
    (user) => ({
        email: user.email,
        emailVerified: user.emailVerified,
        localId: user.localId
    })
);

export default userSlice.reducer;
