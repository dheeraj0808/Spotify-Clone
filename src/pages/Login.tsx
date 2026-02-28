import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSpotify } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaFacebook } from 'react-icons/fa';
import Button from '../components/common/Button';

export default function Login() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Demo: just navigate to home
        navigate('/');
    };

    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundColor: '#121212',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'linear-gradient(180deg, #1a1a1a 0%, #121212 30%)',
            }}
        >
            {/* Header */}
            <div
                style={{
                    width: '100%',
                    padding: '32px',
                    display: 'flex',
                    justifyContent: 'center',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    backgroundColor: '#000000',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                    }}
                    onClick={() => navigate('/')}
                >
                    <FaSpotify style={{ fontSize: '40px', color: '#FFFFFF' }} />
                    <span style={{ fontSize: '28px', fontWeight: 800, color: '#FFFFFF' }}>
                        Spotify
                    </span>
                </div>
            </div>

            {/* Form Card */}
            <div
                style={{
                    width: '100%',
                    maxWidth: '450px',
                    padding: '48px 32px',
                    animation: 'fadeInUp 400ms ease',
                }}
            >
                <h1
                    style={{
                        fontSize: '2rem',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        textAlign: 'center',
                        marginBottom: '40px',
                    }}
                >
                    {isLogin ? 'Log in to Spotify' : 'Sign up for Spotify'}
                </h1>

                {/* Social Login Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                    <button
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                            padding: '14px 24px',
                            borderRadius: '9999px',
                            border: '1px solid rgba(255,255,255,0.3)',
                            backgroundColor: 'transparent',
                            color: '#FFFFFF',
                            fontSize: '14px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            transition: 'all 200ms ease',
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.borderColor = '#FFFFFF')
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)')
                        }
                    >
                        <FcGoogle style={{ fontSize: '22px' }} />
                        Continue with Google
                    </button>

                    <button
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                            padding: '14px 24px',
                            borderRadius: '9999px',
                            border: '1px solid rgba(255,255,255,0.3)',
                            backgroundColor: 'transparent',
                            color: '#FFFFFF',
                            fontSize: '14px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            transition: 'all 200ms ease',
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.borderColor = '#FFFFFF')
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)')
                        }
                    >
                        <FaFacebook style={{ fontSize: '22px', color: '#1877F2' }} />
                        Continue with Facebook
                    </button>

                    <button
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                            padding: '14px 24px',
                            borderRadius: '9999px',
                            border: '1px solid rgba(255,255,255,0.3)',
                            backgroundColor: 'transparent',
                            color: '#FFFFFF',
                            fontSize: '14px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            transition: 'all 200ms ease',
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.borderColor = '#FFFFFF')
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)')
                        }
                    >
                        <FaApple style={{ fontSize: '22px' }} />
                        Continue with Apple
                    </button>
                </div>

                {/* Divider */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        marginBottom: '32px',
                    }}
                >
                    <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }} />
                    <span style={{ fontSize: '12px', color: '#A7A7A7', textTransform: 'uppercase', letterSpacing: '1px' }}>or</span>
                    <div style={{ flex: 1, height: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }} />
                </div>

                {/* Email/Password Form */}
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <label
                            style={{
                                display: 'block',
                                fontSize: '14px',
                                fontWeight: 700,
                                color: '#FFFFFF',
                                marginBottom: '8px',
                            }}
                        >
                            Email or username
                        </label>
                        <input
                            type="text"
                            placeholder="Email or username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '14px 16px',
                                borderRadius: '4px',
                                border: '1px solid rgba(255,255,255,0.3)',
                                backgroundColor: '#121212',
                                color: '#FFFFFF',
                                fontSize: '14px',
                                transition: 'border-color 200ms ease',
                                outline: 'none',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = '#FFFFFF')}
                            onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.3)')}
                        />
                    </div>

                    <div>
                        <label
                            style={{
                                display: 'block',
                                fontSize: '14px',
                                fontWeight: 700,
                                color: '#FFFFFF',
                                marginBottom: '8px',
                            }}
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '14px 16px',
                                borderRadius: '4px',
                                border: '1px solid rgba(255,255,255,0.3)',
                                backgroundColor: '#121212',
                                color: '#FFFFFF',
                                fontSize: '14px',
                                transition: 'border-color 200ms ease',
                                outline: 'none',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = '#FFFFFF')}
                            onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.3)')}
                        />
                    </div>

                    {isLogin && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div
                                style={{
                                    width: '16px',
                                    height: '16px',
                                    borderRadius: '2px',
                                    border: '1px solid rgba(255,255,255,0.3)',
                                    cursor: 'pointer',
                                }}
                            />
                            <span style={{ fontSize: '14px', color: '#FFFFFF' }}>Remember me</span>
                        </div>
                    )}

                    <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        style={{
                            marginTop: '8px',
                            fontSize: '16px',
                            fontWeight: 700,
                            padding: '16px',
                        }}
                    >
                        {isLogin ? 'Log In' : 'Sign Up'}
                    </Button>
                </form>

                {isLogin && (
                    <p
                        style={{
                            textAlign: 'center',
                            marginTop: '24px',
                            fontSize: '14px',
                            color: '#FFFFFF',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                        }}
                    >
                        Forgot your password?
                    </p>
                )}

                {/* Toggle */}
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: '32px',
                        paddingTop: '24px',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                    }}
                >
                    <span style={{ fontSize: '14px', color: '#A7A7A7' }}>
                        {isLogin ? "Don't have an account? " : 'Already have an account? '}
                    </span>
                    <span
                        onClick={() => setIsLogin(!isLogin)}
                        style={{
                            fontSize: '14px',
                            color: '#FFFFFF',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                            fontWeight: 600,
                        }}
                    >
                        {isLogin ? 'Sign up for Spotify' : 'Log in here'}
                    </span>
                </div>
            </div>
        </div>
    );
}
