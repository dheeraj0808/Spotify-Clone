import React, { useState, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Category } from '../types/playlist.types';

const BROWSE_CATEGORIES: (Category & { gradient: string })[] = [
    { id: '1', name: 'Podcasts', color: '#E13300', imageUrl: '', gradient: 'linear-gradient(135deg, #E13300, #E8791B)' },
    { id: '2', name: 'Live Events', color: '#8400E7', imageUrl: '', gradient: 'linear-gradient(135deg, #8400E7, #B44BE6)' },
    { id: '3', name: 'Made For You', color: '#1E3264', imageUrl: '', gradient: 'linear-gradient(135deg, #1E3264, #2D4A8C)' },
    { id: '4', name: 'New Releases', color: '#E8115B', imageUrl: '', gradient: 'linear-gradient(135deg, #E8115B, #F3457E)' },
    { id: '5', name: 'Pop', color: '#148A08', imageUrl: '', gradient: 'linear-gradient(135deg, #148A08, #1DB954)' },
    { id: '6', name: 'Hip-Hop', color: '#BA5D07', imageUrl: '', gradient: 'linear-gradient(135deg, #BA5D07, #E0820A)' },
    { id: '7', name: 'Rock', color: '#E91429', imageUrl: '', gradient: 'linear-gradient(135deg, #E91429, #F04860)' },
    { id: '8', name: 'Latin', color: '#E1118B', imageUrl: '', gradient: 'linear-gradient(135deg, #E1118B, #F34DAD)' },
    { id: '9', name: 'Dance/Electronic', color: '#0D73EC', imageUrl: '', gradient: 'linear-gradient(135deg, #0D73EC, #4A9EF5)' },
    { id: '10', name: 'Mood', color: '#1DB954', imageUrl: '', gradient: 'linear-gradient(135deg, #1DB954, #4AE285)' },
    { id: '11', name: 'Indie', color: '#608108', imageUrl: '', gradient: 'linear-gradient(135deg, #608108, #8BB20C)' },
    { id: '12', name: 'Workout', color: '#777777', imageUrl: '', gradient: 'linear-gradient(135deg, #555555, #777777)' },
    { id: '13', name: 'Discover', color: '#509BF5', imageUrl: '', gradient: 'linear-gradient(135deg, #509BF5, #73B0F7)' },
    { id: '14', name: 'Country', color: '#D84000', imageUrl: '', gradient: 'linear-gradient(135deg, #D84000, #EF6330)' },
    { id: '15', name: 'R&B', color: '#DC148C', imageUrl: '', gradient: 'linear-gradient(135deg, #DC148C, #ED42AB)' },
    { id: '16', name: 'K-Pop', color: '#FF6437', imageUrl: '', gradient: 'linear-gradient(135deg, #FF6437, #FF8C64)' },
    { id: '17', name: 'Chill', color: '#477D95', imageUrl: '', gradient: 'linear-gradient(135deg, #477D95, #6FA3B5)' },
    { id: '18', name: 'Sleep', color: '#1E3264', imageUrl: '', gradient: 'linear-gradient(135deg, #1E3264, #3B5B8C)' },
    { id: '19', name: 'Party', color: '#8400E7', imageUrl: '', gradient: 'linear-gradient(135deg, #8400E7, #AB40F0)' },
    { id: '20', name: 'At Home', color: '#503750', imageUrl: '', gradient: 'linear-gradient(135deg, #503750, #7B5570)' },
    { id: '21', name: 'Decades', color: '#E61E32', imageUrl: '', gradient: 'linear-gradient(135deg, #E61E32, #F04A5A)' },
    { id: '22', name: 'Love', color: '#E13300', imageUrl: '', gradient: 'linear-gradient(135deg, #E13300, #F55A30)' },
    { id: '23', name: 'Metal', color: '#121212', imageUrl: '', gradient: 'linear-gradient(135deg, #333333, #555555)' },
    { id: '24', name: 'Jazz', color: '#E8115B', imageUrl: '', gradient: 'linear-gradient(135deg, #E8115B, #F2467E)' },
];

export default function Search() {
    const [query, setQuery] = useState('');

    const filteredCategories = useMemo(() => {
        if (!query.trim()) return BROWSE_CATEGORIES;
        return BROWSE_CATEGORIES.filter((cat) =>
            cat.name.toLowerCase().includes(query.toLowerCase())
        );
    }, [query]);

    return (
        <div style={{ padding: '0 32px 120px', animation: 'fadeIn 400ms ease' }}>
            {/* Search Input */}
            <div style={{ marginBottom: '32px', maxWidth: '400px' }}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        backgroundColor: '#FFFFFF',
                        borderRadius: '9999px',
                        padding: '10px 16px',
                    }}
                >
                    <FaSearch style={{ fontSize: '18px', color: '#121212', flexShrink: 0 }} />
                    <input
                        type="text"
                        placeholder="What do you want to listen to?"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        style={{
                            width: '100%',
                            fontSize: '14px',
                            fontWeight: 500,
                            color: '#121212',
                            background: 'none',
                            border: 'none',
                            outline: 'none',
                        }}
                    />
                </div>
            </div>

            {/* Browse All */}
            <h2
                style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '20px',
                }}
            >
                Browse All
            </h2>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                    gap: '16px',
                }}
            >
                {filteredCategories.map((cat) => (
                    <div
                        key={cat.id}
                        style={{
                            background: cat.gradient,
                            borderRadius: '8px',
                            padding: '20px',
                            aspectRatio: '1.5',
                            cursor: 'pointer',
                            overflow: 'hidden',
                            position: 'relative',
                            transition: 'transform 200ms ease, box-shadow 200ms ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.03)';
                            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <span
                            style={{
                                fontSize: '1.15rem',
                                fontWeight: 700,
                                color: '#FFFFFF',
                                position: 'relative',
                                zIndex: 1,
                            }}
                        >
                            {cat.name}
                        </span>

                        {/* Decorative floating square */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '-8px',
                                right: '-8px',
                                width: '80px',
                                height: '80px',
                                borderRadius: '4px',
                                backgroundColor: 'rgba(0,0,0,0.15)',
                                transform: 'rotate(25deg)',
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
