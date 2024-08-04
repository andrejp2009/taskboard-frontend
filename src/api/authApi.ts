import axios from 'axios';

const API_URL = 'http://localhost:5062/api/user'; // Замените на URL вашего API

interface RegisterData {
    email: string;
    userName: string;
    password: string;
}

interface LoginData {
    userName: string;
    password: string;
}

export const register = (data: RegisterData) => {
    return axios.post(`${API_URL}/register`, data);
};

export const login = (data: LoginData) => {
    return axios.post(`${API_URL}/login`, data);
};
