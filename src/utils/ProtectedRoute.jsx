import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from '../services/authService';
import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { notify } from './toastMessage';

function ProtectedRoute() {
    const userToken = useSelector((state) => state.auth.userToken)

    if (userToken) {
        return <Outlet />
    } else {
        notify('Lütfen giriş yapınız!', 'error')
        return <Navigate to="/giris" />;
    }


}

export default ProtectedRoute;
