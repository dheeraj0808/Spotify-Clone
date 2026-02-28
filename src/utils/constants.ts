export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const COLORS = {
    primary: '#1DB954',
    primaryHover: '#1ed760',
    background: '#121212',
    surface: '#181818',
    surfaceHover: '#282828',
    elevated: '#242424',
    text: '#FFFFFF',
    textSubdued: '#A7A7A7',
    textSecondary: '#B3B3B3',
    error: '#F15E6C',
    warning: '#FFA42B',
} as const;

export const BREAKPOINTS = {
    mobile: 768,
    tablet: 1024,
    desktop: 1280,
} as const;

export const SIDEBAR_WIDTH = 280;
export const PLAYER_BAR_HEIGHT = 90;
export const NAVBAR_HEIGHT = 64;
