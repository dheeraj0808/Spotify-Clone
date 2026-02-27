import api from './api';
import { LoginCredentials, RegisterCredentials, User } from '../types/user.types';

export const authService = {
    async login(credentials: LoginCredentials): Promise<{ user: User; token: string }> {
        const { data } = await api.post('/auth/login', credentials);
        return data;
    },

    async register(credentials: RegisterCredentials): Promise<{ user: User; token: string }> {
        const { data } = await api.post('/auth/register', credentials);
        return data;
    },

    async getProfile(): Promise<User> {
        const { data } = await api.get('/auth/profile');
        return data;
    },

    async logout(): Promise<void> {
        localStorage.removeItem('spotify_token');
    },
};
