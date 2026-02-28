import React, { useState } from 'react';
import { Song } from '../../types/song.types';
import { formatTime } from '../../utils/formatTime';
import { FaPlay, FaHeart, FaRegHeart } from 'react-icons/fa';

interface SongCardProps {
    song: Song;
    index?: number;
    onPlay: (song: Song) => void;
    showAlbum?: boolean;
}

export default function SongCard({ song, index, onPlay, showAlbum = true }: SongCardProps) {
    const [hovered, setHovered] = useState(false);
    const [liked, setLiked] = useState(song.isLiked);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => onPlay(song)}
            style={{
                display: 'grid',
                gridTemplateColumns: showAlbum
                    ? '40px 6fr 4fr 60px 100px'
                    : '40px 6fr 60px 100px',
                alignItems: 'center',
                gap: '16px',
                padding: '8px 16px',
                borderRadius: '4px',
                backgroundColor: hovered ? 'rgba(255,255,255,0.1)' : 'transparent',
                cursor: 'pointer',
                transition: 'background-color 200ms ease',
                userSelect: 'none',
            }}
        >
            {/* Index or Play */}
            <div style={{ display: 'flex', justifyContent: 'center', width: '40px' }}>
                {hovered ? (
                    <FaPlay style={{ fontSize: '12px', color: '#FFFFFF' }} />
                ) : (
                    <span style={{ fontSize: '14px', color: '#A7A7A7' }}>{index ?? '•'}</span>
                )}
            </div>

            {/* Song Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', overflow: 'hidden' }}>
                <img
                    src={song.coverUrl}
                    alt={song.title}
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '4px',
                        objectFit: 'cover',
                        flexShrink: 0,
                    }}
                />
                <div style={{ overflow: 'hidden' }}>
                    <div
                        style={{
                            fontSize: '14px',
                            fontWeight: 500,
                            color: '#FFFFFF',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {song.title}
                    </div>
                    <div
                        style={{
                            fontSize: '13px',
                            color: '#A7A7A7',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {song.artist}
                    </div>
                </div>
            </div>

            {/* Album */}
            {showAlbum && (
                <div
                    style={{
                        fontSize: '13px',
                        color: '#A7A7A7',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {song.album}
                </div>
            )}

            {/* Like Button */}
            <div
                onClick={(e) => {
                    e.stopPropagation();
                    setLiked(!liked);
                }}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    opacity: hovered || liked ? 1 : 0,
                    transition: 'opacity 200ms ease',
                }}
            >
                {liked ? (
                    <FaHeart style={{ fontSize: '14px', color: '#1DB954' }} />
                ) : (
                    <FaRegHeart style={{ fontSize: '14px', color: '#A7A7A7' }} />
                )}
            </div>

            {/* Duration */}
            <div
                style={{
                    fontSize: '13px',
                    color: '#A7A7A7',
                    textAlign: 'right',
                }}
            >
                {formatTime(song.duration)}
            </div>
        </div>
    );
}
