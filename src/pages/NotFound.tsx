import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMusic, FaHome } from 'react-icons/fa';
import Button from '../components/common/Button';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '60vh',
                textAlign: 'center',
                padding: '48px',
                animation: 'fadeInUp 500ms ease',
            }}
        >
            <div
                style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(29, 185, 84, 0.2), rgba(29, 185, 84, 0.05))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '32px',
                }}
            >
                <FaMusic style={{ fontSize: '48px', color: '#1DB954', opacity: 0.6 }} />
            </div>

            <h1
                style={{
                    fontSize: '6rem',
                    fontWeight: 900,
                    color: '#FFFFFF',
                    lineHeight: 1,
                    marginBottom: '16px',
                    letterSpacing: '-3px',
                }}
            >
                404
            </h1>

            <h2
                style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '12px',
                }}
            >
                Page not found
            </h2>

            <p
                style={{
                    fontSize: '14px',
                    color: '#A7A7A7',
                    maxWidth: '400px',
                    marginBottom: '32px',
                    lineHeight: 1.6,
                }}
            >
                We can't seem to find the page you are looking for. Let's get you back on track.
            </p>

            <Button
                onClick={() => navigate('/')}
                variant="primary"
                size="lg"
                icon={<FaHome />}
            >
                Go Home
            </Button>
        </div>
    );
}
