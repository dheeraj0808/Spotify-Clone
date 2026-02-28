import api from './api';
import { Song } from '../types/song.types';
import { Playlist, Album, Category } from '../types/playlist.types';

export const musicService = {
    // Songs
    async getRecentlyPlayed(): Promise<Song[]> {
        const { data } = await api.get('/music/recently-played');
        return data;
    },

    async getTopSongs(): Promise<Song[]> {
        const { data } = await api.get('/music/top-songs');
        return data;
    },

    async searchSongs(query: string): Promise<Song[]> {
        const { data } = await api.get(`/music/search?q=${encodeURIComponent(query)}`);
        return data;
    },

    async likeSong(songId: string): Promise<void> {
        await api.post(`/music/songs/${songId}/like`);
    },

    // Playlists
    async getFeaturedPlaylists(): Promise<Playlist[]> {
        const { data } = await api.get('/music/playlists/featured');
        return data;
    },

    async getPlaylist(id: string): Promise<Playlist> {
        const { data } = await api.get(`/music/playlists/${id}`);
        return data;
    },

    async getUserPlaylists(): Promise<Playlist[]> {
        const { data } = await api.get('/music/playlists/me');
        return data;
    },

    async createPlaylist(name: string, description: string): Promise<Playlist> {
        const { data } = await api.post('/music/playlists', { name, description });
        return data;
    },

    // Albums
    async getNewReleases(): Promise<Album[]> {
        const { data } = await api.get('/music/albums/new-releases');
        return data;
    },

    async getAlbum(id: string): Promise<Album> {
        const { data } = await api.get(`/music/albums/${id}`);
        return data;
    },

    // Categories
    async getCategories(): Promise<Category[]> {
        const { data } = await api.get('/music/categories');
        return data;
    },
};
