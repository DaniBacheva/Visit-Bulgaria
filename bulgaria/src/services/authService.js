import * as request from './request';

const baseUrl = 'http://localhost:3030/users';

export const login = (loginData ) =>  request.post(`${baseUrl}/login`, loginData);

export const register = (registerData) => request.post(`${baseUrl}/register`, registerData);

export const logout = ()=> request.get(`${baseUrl}/logout`, loginData)