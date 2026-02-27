import { useAuthStore } from '../store/store';
import { authService } from '../services/authService';
import { LoginCredentials, RegisterCredentials } from '../types/user.types';

export function useAuth() {
    const { user, isAuthenticated, isLoading, error, setUser, logout, setLoading, setError } =
        useAuthStore();

    const login = async (credentials: LoginCredentials) => {
        setLoading(true);
        try {
            const { user, token } = await authService.login(credentials);
            setUser(user, token);
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : 'Login failed';
            setError(message);
        }
    };

    const register = async (credentials: RegisterCredentials) => {
        setLoading(true);
        try {
            const { user, token } = await authService.register(credentials);
            setUser(user, token);
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : 'Registration failed';
            setError(message);
        }
    };

    const handleLogout = async () => {
        await authService.logout();
        logout();
    };

    return {
        user,
        isAuthenticated,
        isLoading,
        error,
        login,
        register,
        logout: handleLogout,
    };
}
