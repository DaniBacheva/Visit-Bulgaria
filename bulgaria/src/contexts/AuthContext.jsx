import { createContext } from 'react';
import { useState } from 'react'
import { authServiceFactory } from '../services/authService';
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStarage';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken);

    const onRegisterSubmit = async (values) => {
        const { rePassword, ...registerData } = values;
        if (rePassword !== registerData.password) {
            return
        }

        try {
            const result = await authService.register(registerData);
            setAuth(result);

            navigate('/');
        } catch (error) {
            console.log("Try again")
        }
    };

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            setAuth(result);

            navigate('/');
        } catch (error) {
            console.log("Try again")
        }
    };

    const onLogout = async () => {
        await authService.logout();

        setAuth({});
    }
    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken
    }

    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}

            </AuthContext.Provider>


        </>
    )
}
