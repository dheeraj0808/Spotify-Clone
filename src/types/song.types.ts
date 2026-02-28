export interface Song {
    id: string;
    title: string;
    artist: string;
    artistId: string;
    album: string;
    albumId: string;
    duration: number; // in seconds
    coverUrl: string;
    audioUrl: string;
    trackNumber: number;
    plays: number;
    addedAt: string;
    isLiked: boolean;
}

export interface Artist {
    id: string;
    name: string;
    imageUrl: string;
    monthlyListeners: number;
    genres: string[];
    bio: string;
    verified: boolean;
}

export interface PlayerState {
    currentSong: Song | null;
    queue: Song[];
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    volume: number;
    isMuted: boolean;
    repeatMode: 'off' | 'track' | 'context';
    isShuffled: boolean;
}
