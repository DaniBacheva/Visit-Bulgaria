import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { useLocalStorage } from '../hooks/useLocalStorage';
import * as authService from '../services/authService'

export const AuthContext = createContext(); // context

export const AuthProvider = ({  //komponent
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();
    const [error, setError] = useState({});

    const onRegisterSubmit = async (values) => {
        setError({})
        const { rePassword, ...registerData } = values;
        if (rePassword !== registerData.password) {
            return;
        }
        try {
            const result = await authService.register(values.email, values.password);

            setAuth(result);

            localStorage.setItem('accessToken', result.accessToken);

            navigate('/');
        }
        catch (error) {
            console.log(error.message);
            setError(state => ({
                ...state,
                register: error.message,
            }))
        }

    };

    const onLoginSubmit = async (data) => {
        setError({})
        try {
            const result = await authService.login(data.email, data.password);
            setAuth(result);

            localStorage.setItem('accessToken', result.accessToken);

            navigate('/');
        }
        catch (error) {
            console.log(error.message)
            setError(state => ({
                ...state,
                login: error.message,
            }));
        }

    };

    const onLogout = async () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    }
    const contextValues = {
        error,
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        email: auth.email,
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

AuthContext.displayName = 'AuthContext';

export default AuthContext;
