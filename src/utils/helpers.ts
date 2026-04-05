// src/utils/helpers.ts

export const getStatusColour = (status: 'Active' | 'Completed' | 'Published' | string) => {
    switch (status) {
        case 'Active': return '#10b981'; // Emerald Green
        case 'Completed': return '#3b82f6'; // Blue
        case 'Published': return '#8b5cf6'; // Violet
        default: return '#94a3b8'; // Grey
    }
};