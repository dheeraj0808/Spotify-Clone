import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    fullWidth?: boolean;
    loading?: boolean;
}

const styles: Record<string, React.CSSProperties> = {
    base: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        fontWeight: 600,
        borderRadius: '9999px',
        transition: 'all 250ms ease',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        border: 'none',
        outline: 'none',
        position: 'relative',
        overflow: 'hidden',
    },
    primary: {
        backgroundColor: '#1DB954',
        color: '#000000',
    },
    secondary: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        color: '#FFFFFF',
    },
    ghost: {
        backgroundColor: 'transparent',
        color: '#B3B3B3',
    },
    outline: {
        backgroundColor: 'transparent',
        color: '#FFFFFF',
        border: '1px solid rgba(255,255,255,0.3)',
    },
    sm: { padding: '6px 16px', fontSize: '0.8125rem' },
    md: { padding: '10px 24px', fontSize: '0.875rem' },
    lg: { padding: '14px 32px', fontSize: '1rem', letterSpacing: '0.5px' },
    fullWidth: { width: '100%' },
    disabled: { opacity: 0.5, cursor: 'not-allowed' },
};

export default function Button({
    variant = 'primary',
    size = 'md',
    icon,
    fullWidth = false,
    loading = false,
    children,
    disabled,
    style,
    ...props
}: ButtonProps) {
    return (
        <button
            style={{
                ...styles.base,
                ...styles[variant],
                ...styles[size],
                ...(fullWidth ? styles.fullWidth : {}),
                ...(disabled || loading ? styles.disabled : {}),
                ...style,
            }}
            disabled={disabled || loading}
            {...props}
        >
            {loading ? (
                <span style={{ animation: 'spin 1s linear infinite', display: 'inline-flex' }}>⟳</span>
            ) : icon ? (
                <span style={{ display: 'inline-flex', fontSize: '1.1em' }}>{icon}</span>
            ) : null}
            {children}
        </button>
    );
}
