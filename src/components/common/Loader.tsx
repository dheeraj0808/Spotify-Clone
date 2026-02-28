import React from 'react';

interface LoaderProps {
    size?: 'sm' | 'md' | 'lg';
    fullScreen?: boolean;
}

export default function Loader({ size = 'md', fullScreen = false }: LoaderProps) {
    const sizeMap = { sm: 24, md: 40, lg: 64 };
    const barCount = 4;

    const containerStyle: React.CSSProperties = fullScreen
        ? {
            position: 'fixed',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#121212',
            zIndex: 9999,
        }
        : {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
        };

    const barsStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'flex-end',
        gap: sizeMap[size] * 0.1,
        height: sizeMap[size],
    };

    return (
        <div style={containerStyle}>
            <div style={barsStyle}>
                {Array.from({ length: barCount }).map((_, i) => (
                    <div
                        key={i}
                        style={{
                            width: sizeMap[size] * 0.15,
                            backgroundColor: '#1DB954',
                            borderRadius: '2px',
                            animation: `equalizer 1.2s ease-in-out ${i * 0.15}s infinite`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
