// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { signIn, signUp, } from '../../services/authService';

// const initialState = {
//     user: null,
//     status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
//     error: null,
// };

// export const login = createAsyncThunk(
//     'auth/login',
//     async ({ email, password }) => {
//         const tokenId = await signIn(email, password);
//         return tokenId;
//     }
// );

// export const register = createAsyncThunk(
//     'auth/register',
//     async ({ email, password }) => {
//         const userData = await signUp(email, password);
//         return userData;
//     }
// );


// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(login.pending, (state) => {
//                 state.status = 'loading';
//             })
//             .addCase(login.fulfilled, (state, action) => {
//                 state.status = 'succeeded';
//                 state.user = action.payload;
//             })
//             .addCase(login.rejected, (state, action) => {
//                 state.status = 'failed';
//                 state.error = action.error.message;
//             })
//             .addCase(register.pending, (state) => {
//                 state.status = 'loading';
//             })
//             .addCase(register.fulfilled, (state, action) => {
//                 state.status = 'succeeded';
//                 state.user = action.payload;
//             })
//             .addCase(register.rejected, (state, action) => {
//                 state.status = 'failed';
//                 state.error = action.error.message;
//             });
//     },
// });

// export default authSlice.reducer;
