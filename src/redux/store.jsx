import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice';
import appReducer from './slices/appSlice';
// import authReducer from './slices/authSlice';


export const store = configureStore({
    reducer: {
        user: userReducer,
        app: appReducer,
        // auth: authReducer
    },
})