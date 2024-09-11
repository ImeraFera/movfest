import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from '../services/authService';
import { CircularProgress } from '@mui/material';

function ProtectedRoute() {
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const token = getToken();
        setToken(token);
        setLoading(false);
    }, []);

    if (loading) {
        return <CircularProgress color="primary" />
    }

    return token ? <Outlet /> : <Navigate to="/giris" />;
}

export default ProtectedRoute;
