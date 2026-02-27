/**
 * Formats seconds into mm:ss or hh:mm:ss format
 */
export function formatTime(seconds: number): string {
    if (isNaN(seconds) || seconds < 0) return '0:00';

    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    if (hrs > 0) {
        return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Formats total seconds into a human-readable duration (e.g., "1 hr 23 min")
 */
export function formatDuration(totalSeconds: number): string {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);

    if (hrs > 0) {
        return `${hrs} hr ${mins} min`;
    }
    return `${mins} min`;
}

/**
 * Formats a large number with commas (e.g., 1,234,567)
 */
export function formatNumber(num: number): string {
    return num.toLocaleString();
}
