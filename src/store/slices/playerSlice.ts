import { create } from 'zustand';
import { Song } from '../../types/song.types';

interface PlayerSlice {
    currentSong: Song | null;
    queue: Song[];
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    volume: number;
    isMuted: boolean;
    repeatMode: 'off' | 'track' | 'context';
    isShuffled: boolean;

    playSong: (song: Song) => void;
    playQueue: (songs: Song[], startIndex?: number) => void;
    togglePlay: () => void;
    pause: () => void;
    play: () => void;
    nextSong: () => void;
    prevSong: () => void;
    setCurrentTime: (time: number) => void;
    setDuration: (duration: number) => void;
    setVolume: (volume: number) => void;
    toggleMute: () => void;
    toggleRepeat: () => void;
    toggleShuffle: () => void;
    addToQueue: (song: Song) => void;
}

export const usePlayerStore = create<PlayerSlice>((set, get) => ({
    currentSong: null,
    queue: [],
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 0.7,
    isMuted: false,
    repeatMode: 'off',
    isShuffled: false,

    playSong: (song) => set({ currentSong: song, isPlaying: true, currentTime: 0 }),

    playQueue: (songs, startIndex = 0) => {
        set({
            queue: songs,
            currentSong: songs[startIndex],
            isPlaying: true,
            currentTime: 0,
        });
    },

    togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
    pause: () => set({ isPlaying: false }),
    play: () => set({ isPlaying: true }),

    nextSong: () => {
        const { queue, currentSong, isShuffled, repeatMode } = get();
        if (!currentSong || queue.length === 0) return;

        const currentIndex = queue.findIndex((s) => s.id === currentSong.id);

        if (repeatMode === 'track') {
            set({ currentTime: 0, isPlaying: true });
            return;
        }

        let nextIndex: number;
        if (isShuffled) {
            nextIndex = Math.floor(Math.random() * queue.length);
        } else {
            nextIndex = currentIndex + 1;
            if (nextIndex >= queue.length) {
                if (repeatMode === 'context') {
                    nextIndex = 0;
                } else {
                    set({ isPlaying: false });
                    return;
                }
            }
        }

        set({ currentSong: queue[nextIndex], currentTime: 0, isPlaying: true });
    },

    prevSong: () => {
        const { queue, currentSong, currentTime } = get();
        if (!currentSong || queue.length === 0) return;

        // If past 3 seconds, restart current song
        if (currentTime > 3) {
            set({ currentTime: 0 });
            return;
        }

        const currentIndex = queue.findIndex((s) => s.id === currentSong.id);
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : queue.length - 1;
        set({ currentSong: queue[prevIndex], currentTime: 0, isPlaying: true });
    },

    setCurrentTime: (currentTime) => set({ currentTime }),
    setDuration: (duration) => set({ duration }),
    setVolume: (volume) => set({ volume, isMuted: volume === 0 }),
    toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),

    toggleRepeat: () =>
        set((state) => ({
            repeatMode:
                state.repeatMode === 'off'
                    ? 'context'
                    : state.repeatMode === 'context'
                        ? 'track'
                        : 'off',
        })),

    toggleShuffle: () => set((state) => ({ isShuffled: !state.isShuffled })),

    addToQueue: (song) =>
        set((state) => ({ queue: [...state.queue, song] })),
}));
