import React, { useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 10000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'fadeIn 200ms ease',
            }}
            onClick={onClose}
        >
            {/* Backdrop */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    backdropFilter: 'blur(8px)',
                }}
            />

            {/* Content */}
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    position: 'relative',
                    backgroundColor: '#282828',
                    borderRadius: '12px',
                    padding: '32px',
                    maxWidth: '500px',
                    width: '90%',
                    maxHeight: '80vh',
                    overflow: 'auto',
                    boxShadow: '0 16px 48px rgba(0,0,0,0.6)',
                    animation: 'scaleIn 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
            >
                {title && (
                    <h2
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            marginBottom: '20px',
                            color: '#FFFFFF',
                        }}
                    >
                        {title}
                    </h2>
                )}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        color: '#B3B3B3',
                        fontSize: '18px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        border: 'none',
                        transition: 'all 200ms ease',
                    }}
                    aria-label="Close modal"
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
}
