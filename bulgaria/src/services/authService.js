import { requestFactory } from './request';

const baseUrl = 'http://localhost:3030/users';// kawi4kite

export const authServiceFactory = (token) => {
    const request= requestFactory(token);
    return {

        login: (loginData) => request.post(`${baseUrl}/login`, loginData),

        register: (registerData) => request.post(`${baseUrl}/register`, registerData),

        logout: () => request.get(`${baseUrl}/logout`)
    }
}