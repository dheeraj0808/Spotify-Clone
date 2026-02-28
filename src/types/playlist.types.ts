import { Song } from './song.types';

export interface Playlist {
    id: string;
    name: string;
    description: string;
    coverUrl: string;
    ownerId: string;
    ownerName: string;
    songs: Song[];
    totalDuration: number;
    isPublic: boolean;
    followers: number;
    createdAt: string;
    updatedAt: string;
}

export interface Album {
    id: string;
    name: string;
    artistName: string;
    artistId: string;
    coverUrl: string;
    releaseDate: string;
    songs: Song[];
    totalDuration: number;
    genre: string;
    label: string;
    type: 'album' | 'single' | 'ep';
}

export interface Category {
    id: string;
    name: string;
    color: string;
    imageUrl: string;
}
