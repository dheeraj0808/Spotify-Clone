import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaUserCircle } from 'react-icons/fa';
import Button from '../common/Button';

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <header
            style={{
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 32px',
                position: 'sticky',
                top: 0,
                zIndex: 100,
                background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, transparent 100%)',
                backdropFilter: 'blur(16px)',
            }}
        >
            {/* Navigation Arrows */}
            <div style={{ display: 'flex', gap: '8px' }}>
                <button
                    onClick={() => navigate(-1)}
                    style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        border: 'none',
                        transition: 'all 200ms ease',
                    }}
                    aria-label="Go back"
                >
                    <FaChevronLeft style={{ fontSize: '14px' }} />
                </button>
                <button
                    onClick={() => navigate(1)}
                    style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        border: 'none',
                        transition: 'all 200ms ease',
                    }}
                    aria-label="Go forward"
                >
                    <FaChevronRight style={{ fontSize: '14px' }} />
                </button>
            </div>

            {/* Right section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Button
                    variant="outline"
                    size="sm"
                    style={{
                        borderColor: 'rgba(255,255,255,0.3)',
                        fontSize: '12px',
                        fontWeight: 700,
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                    }}
                >
                    Upgrade
                </Button>

                <button
                    onClick={() => navigate('/login')}
                    style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: '#333',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        border: '2px solid transparent',
                        transition: 'all 200ms ease',
                    }}
                    aria-label="User profile"
                >
                    <FaUserCircle style={{ fontSize: '24px' }} />
                </button>
            </div>
        </header>
    );
}
