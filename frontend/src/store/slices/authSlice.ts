import { create } from 'zustand';
import { User } from '../../types/user.types';

interface AuthSlice {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
    setUser: (user: User, token: string) => void;
    logout: () => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
}

export const useAuthStore = create<AuthSlice>((set) => ({
    user: null,
    token: localStorage.getItem('spotify_token'),
    isAuthenticated: !!localStorage.getItem('spotify_token'),
    isLoading: false,
    error: null,

    setUser: (user, token) => {
        localStorage.setItem('spotify_token', token);
        set({ user, token, isAuthenticated: true, error: null });
    },

    logout: () => {
        localStorage.removeItem('spotify_token');
        set({ user: null, token: null, isAuthenticated: false, error: null });
    },

    setLoading: (isLoading) => set({ isLoading }),
    setError: (error) => set({ error, isLoading: false }),
}));
