// truncate.ts
// Utility function to truncate text to a specified length and append ellipsis if necessary

export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength) + '...';
}
