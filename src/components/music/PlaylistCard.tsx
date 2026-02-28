import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Playlist } from '../../types/playlist.types';
import { FaPlay } from 'react-icons/fa';

interface PlaylistCardProps {
    playlist: Playlist;
    onPlay?: () => void;
}

export default function PlaylistCard({ playlist, onPlay }: PlaylistCardProps) {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => navigate(`/playlist/${playlist.id}`)}
            style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '8px',
                padding: '16px',
                cursor: 'pointer',
                transition: 'all 300ms ease',
                position: 'relative',
                ...(hovered ? { backgroundColor: 'rgba(255,255,255,0.1)' } : {}),
            }}
        >
            {/* Cover Image */}
            <div style={{ position: 'relative', marginBottom: '16px' }}>
                <img
                    src={playlist.coverUrl}
                    alt={playlist.name}
                    style={{
                        width: '100%',
                        aspectRatio: '1',
                        objectFit: 'cover',
                        borderRadius: '6px',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                    }}
                />

                {/* Play FAB */}
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                        onPlay?.();
                    }}
                    style={{
                        position: 'absolute',
                        bottom: '8px',
                        right: '8px',
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: '#1DB954',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                        opacity: hovered ? 1 : 0,
                        transform: hovered ? 'translateY(0)' : 'translateY(8px)',
                        transition: 'all 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                >
                    <FaPlay style={{ fontSize: '16px', color: '#000000', marginLeft: '2px' }} />
                </div>
            </div>

            {/* Info */}
            <div
                style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '6px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}
            >
                {playlist.name}
            </div>
            <div
                style={{
                    fontSize: '13px',
                    color: '#A7A7A7',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                }}
            >
                {playlist.description || `By ${playlist.ownerName}`}
            </div>
        </div>
    );
}
