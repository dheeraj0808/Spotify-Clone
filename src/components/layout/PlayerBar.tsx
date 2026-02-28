import React, { useState, useCallback } from 'react';
import { usePlayerStore } from '../../store/store';
import { formatTime } from '../../utils/formatTime';
import {
    FaPlay,
    FaPause,
    FaStepForward,
    FaStepBackward,
    FaRandom,
    FaRedo,
    FaVolumeUp,
    FaVolumeMute,
    FaVolumeDown,
    FaHeart,
    FaRegHeart,
    FaExpand,
} from 'react-icons/fa';
import { BsArrowsAngleExpand, BsList } from 'react-icons/bs';

export default function PlayerBar() {
    const {
        currentSong,
        isPlaying,
        currentTime,
        duration,
        volume,
        isMuted,
        repeatMode,
        isShuffled,
        togglePlay,
        nextSong,
        prevSong,
        setCurrentTime,
        setVolume,
        toggleMute,
        toggleRepeat,
        toggleShuffle,
    } = usePlayerStore();

    const [liked, setLiked] = useState(false);
    const [hoveringProgress, setHoveringProgress] = useState(false);
    const [hoveringVolume, setHoveringVolume] = useState(false);

    const progress = duration ? (currentTime / duration) * 100 : 0;

    const handleProgressClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const newTime = (x / rect.width) * duration;
            setCurrentTime(newTime);
        },
        [duration, setCurrentTime]
    );

    const handleVolumeClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const newVolume = Math.max(0, Math.min(1, x / rect.width));
            setVolume(newVolume);
        },
        [setVolume]
    );

    const VolumeIcon = isMuted || volume === 0 ? FaVolumeMute : volume < 0.5 ? FaVolumeDown : FaVolumeUp;

    // Placeholder when no song selected
    if (!currentSong) {
        return (
            <footer
                style={{
                    height: '90px',
                    backgroundColor: '#181818',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 16px',
                }}
            >
                <p style={{ color: '#6A6A6A', fontSize: '13px' }}>
                    Select a song to start playing
                </p>
            </footer>
        );
    }

    return (
        <footer
            style={{
                height: '90px',
                backgroundColor: '#181818',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                display: 'grid',
                gridTemplateColumns: '1fr 2fr 1fr',
                alignItems: 'center',
                padding: '0 16px',
                gap: '16px',
            }}
        >
            {/* Left — Song Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <img
                    src={currentSong.coverUrl}
                    alt={currentSong.title}
                    style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '4px',
                        objectFit: 'cover',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
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
                        {currentSong.title}
                    </div>
                    <div
                        style={{
                            fontSize: '11px',
                            color: '#A7A7A7',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {currentSong.artist}
                    </div>
                </div>
                <button
                    onClick={() => setLiked(!liked)}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: liked ? '#1DB954' : '#A7A7A7',
                        fontSize: '14px',
                        padding: '6px',
                        transition: 'all 200ms ease',
                    }}
                >
                    {liked ? <FaHeart /> : <FaRegHeart />}
                </button>
            </div>

            {/* Center — Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                {/* Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <button
                        onClick={toggleShuffle}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: isShuffled ? '#1DB954' : '#A7A7A7',
                            fontSize: '14px',
                            padding: '4px',
                            transition: 'color 200ms ease',
                            position: 'relative',
                        }}
                    >
                        <FaRandom />
                        {isShuffled && (
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: '-2px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '4px',
                                    height: '4px',
                                    borderRadius: '50%',
                                    backgroundColor: '#1DB954',
                                }}
                            />
                        )}
                    </button>

                    <button
                        onClick={prevSong}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#FFFFFF',
                            fontSize: '16px',
                            padding: '4px',
                            transition: 'opacity 200ms',
                        }}
                    >
                        <FaStepBackward />
                    </button>

                    <button
                        onClick={togglePlay}
                        style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            backgroundColor: '#FFFFFF',
                            color: '#000000',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            border: 'none',
                            transition: 'transform 100ms ease',
                            fontSize: '14px',
                        }}
                    >
                        {isPlaying ? <FaPause /> : <FaPlay style={{ marginLeft: '2px' }} />}
                    </button>

                    <button
                        onClick={nextSong}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: '#FFFFFF',
                            fontSize: '16px',
                            padding: '4px',
                            transition: 'opacity 200ms',
                        }}
                    >
                        <FaStepForward />
                    </button>

                    <button
                        onClick={toggleRepeat}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: repeatMode !== 'off' ? '#1DB954' : '#A7A7A7',
                            fontSize: '14px',
                            padding: '4px',
                            transition: 'color 200ms ease',
                            position: 'relative',
                        }}
                    >
                        <FaRedo />
                        {repeatMode === 'track' && (
                            <span
                                style={{
                                    position: 'absolute',
                                    top: '-2px',
                                    right: '-4px',
                                    fontSize: '9px',
                                    fontWeight: 700,
                                    color: '#1DB954',
                                }}
                            >
                                1
                            </span>
                        )}
                        {repeatMode !== 'off' && (
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: '-2px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '4px',
                                    height: '4px',
                                    borderRadius: '50%',
                                    backgroundColor: '#1DB954',
                                }}
                            />
                        )}
                    </button>
                </div>

                {/* Progress Bar */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        width: '100%',
                        maxWidth: '600px',
                    }}
                >
                    <span style={{ fontSize: '11px', color: '#A7A7A7', minWidth: '40px', textAlign: 'right' }}>
                        {formatTime(currentTime)}
                    </span>

                    <div
                        onClick={handleProgressClick}
                        onMouseEnter={() => setHoveringProgress(true)}
                        onMouseLeave={() => setHoveringProgress(false)}
                        style={{
                            flex: 1,
                            height: '4px',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            borderRadius: '2px',
                            cursor: 'pointer',
                            position: 'relative',
                            transition: 'height 100ms ease',
                            ...(hoveringProgress ? { height: '6px' } : {}),
                        }}
                    >
                        <div
                            style={{
                                height: '100%',
                                width: `${progress}%`,
                                backgroundColor: hoveringProgress ? '#1DB954' : '#FFFFFF',
                                borderRadius: '2px',
                                position: 'relative',
                                transition: 'background-color 200ms ease',
                            }}
                        >
                            {hoveringProgress && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        right: '-6px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        width: '12px',
                                        height: '12px',
                                        borderRadius: '50%',
                                        backgroundColor: '#FFFFFF',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                                    }}
                                />
                            )}
                        </div>
                    </div>

                    <span style={{ fontSize: '11px', color: '#A7A7A7', minWidth: '40px' }}>
                        {formatTime(duration)}
                    </span>
                </div>
            </div>

            {/* Right — Volume & extras */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    gap: '12px',
                }}
            >
                <button
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#A7A7A7',
                        fontSize: '14px',
                        padding: '4px',
                    }}
                >
                    <BsList />
                </button>

                <button
                    onClick={toggleMute}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#A7A7A7',
                        fontSize: '14px',
                        padding: '4px',
                    }}
                >
                    <VolumeIcon />
                </button>

                <div
                    onClick={handleVolumeClick}
                    onMouseEnter={() => setHoveringVolume(true)}
                    onMouseLeave={() => setHoveringVolume(false)}
                    style={{
                        width: '100px',
                        height: '4px',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        borderRadius: '2px',
                        cursor: 'pointer',
                        position: 'relative',
                        ...(hoveringVolume ? { height: '6px' } : {}),
                        transition: 'height 100ms ease',
                    }}
                >
                    <div
                        style={{
                            height: '100%',
                            width: `${(isMuted ? 0 : volume) * 100}%`,
                            backgroundColor: hoveringVolume ? '#1DB954' : '#FFFFFF',
                            borderRadius: '2px',
                            position: 'relative',
                            transition: 'background-color 200ms ease',
                        }}
                    >
                        {hoveringVolume && (
                            <div
                                style={{
                                    position: 'absolute',
                                    right: '-6px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    backgroundColor: '#FFFFFF',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                                }}
                            />
                        )}
                    </div>
                </div>

                <button
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#A7A7A7',
                        fontSize: '14px',
                        padding: '4px',
                    }}
                >
                    <BsArrowsAngleExpand />
                </button>
            </div>
        </footer>
    );
}
