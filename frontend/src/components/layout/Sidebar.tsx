import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    FaHome,
    FaSearch,
    FaBook,
    FaPlus,
    FaHeart,
    FaMusic,
} from 'react-icons/fa';

const MOCK_PLAYLISTS = [
    'Chill Vibes',
    'Workout Energy',
    'Late Night Jazz',
    'Road Trip Anthems',
    'Focus Flow',
    'Indie Discoveries',
    'Hip-Hop Classics',
    'Electronic Dreams',
    'Acoustic Sessions',
    'Morning Coffee',
];

export default function Sidebar() {
    const navigate = useNavigate();
    const [hoveredPlaylist, setHoveredPlaylist] = useState<number | null>(null);

    const navLinkStyle = (isActive: boolean): React.CSSProperties => ({
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '8px 0',
        fontSize: '14px',
        fontWeight: isActive ? 700 : 600,
        color: isActive ? '#FFFFFF' : '#B3B3B3',
        transition: 'color 200ms ease',
        cursor: 'pointer',
        textDecoration: 'none',
    });

    return (
        <aside
            style={{
                width: '280px',
                height: '100%',
                backgroundColor: '#000000',
                display: 'flex',
                flexDirection: 'column',
                flexShrink: 0,
                overflow: 'hidden',
            }}
        >
            {/* Logo */}
            <div style={{ padding: '24px 24px 20px' }}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                    }}
                    onClick={() => navigate('/')}
                >
                    <div
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #1DB954, #1ed760)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 0 20px rgba(29, 185, 84, 0.4)',
                        }}
                    >
                        <FaMusic style={{ fontSize: '18px', color: '#000000' }} />
                    </div>
                    <span
                        style={{
                            fontSize: '22px',
                            fontWeight: 800,
                            letterSpacing: '-0.5px',
                            color: '#FFFFFF',
                        }}
                    >
                        Spotify
                    </span>
                </div>
            </div>

            {/* Nav Links */}
            <nav style={{ padding: '0 24px 20px' }}>
                <NavLink to="/" style={({ isActive }) => navLinkStyle(isActive)}>
                    <FaHome style={{ fontSize: '22px' }} />
                    Home
                </NavLink>
                <NavLink to="/search" style={({ isActive }) => navLinkStyle(isActive)}>
                    <FaSearch style={{ fontSize: '22px' }} />
                    Search
                </NavLink>
            </nav>

            {/* Divider */}
            <div
                style={{
                    height: '1px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    margin: '0 24px',
                }}
            />

            {/* Library Header */}
            <div
                style={{
                    padding: '20px 24px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        color: '#B3B3B3',
                        fontSize: '14px',
                        fontWeight: 600,
                    }}
                >
                    <FaBook style={{ fontSize: '22px' }} />
                    Your Library
                </div>
                <button
                    style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'transparent',
                        color: '#B3B3B3',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 200ms ease',
                        border: 'none',
                        fontSize: '16px',
                    }}
                    title="Create playlist"
                >
                    <FaPlus />
                </button>
            </div>

            {/* Liked Songs + Create */}
            <div style={{ padding: '0 12px 8px' }}>
                <div
                    onClick={() => navigate('/playlist/liked')}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'background-color 200ms ease',
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = 'transparent')
                    }
                >
                    <div
                        style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '4px',
                            background: 'linear-gradient(135deg, #450af5, #c4efd9)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                        }}
                    >
                        <FaHeart style={{ fontSize: '18px', color: '#FFFFFF' }} />
                    </div>
                    <div>
                        <div style={{ fontSize: '14px', fontWeight: 500, color: '#FFFFFF' }}>
                            Liked Songs
                        </div>
                        <div style={{ fontSize: '12px', color: '#A7A7A7' }}>128 songs</div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div
                style={{
                    height: '1px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    margin: '0 24px 8px',
                }}
            />

            {/* Playlists */}
            <div
                style={{
                    flex: 1,
                    overflowY: 'auto',
                    padding: '0 12px',
                }}
            >
                {MOCK_PLAYLISTS.map((name, i) => (
                    <div
                        key={i}
                        onMouseEnter={() => setHoveredPlaylist(i)}
                        onMouseLeave={() => setHoveredPlaylist(null)}
                        onClick={() => navigate(`/playlist/${i}`)}
                        style={{
                            padding: '8px 12px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            color: hoveredPlaylist === i ? '#FFFFFF' : '#B3B3B3',
                            backgroundColor:
                                hoveredPlaylist === i ? 'rgba(255,255,255,0.1)' : 'transparent',
                            transition: 'all 200ms ease',
                        }}
                    >
                        {name}
                    </div>
                ))}
            </div>

            {/* Bottom Install App */}
            <div style={{ padding: '16px 24px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div
                    style={{
                        fontSize: '12px',
                        color: '#A7A7A7',
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                    }}
                >
                    Install App
                </div>
            </div>
        </aside>
    );
}
