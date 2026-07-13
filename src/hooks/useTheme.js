import { useState, useEffect } from 'react';

/**
 * Custom hook for managing dark/light mode theme
 * Persists preference to localStorage and syncs with system preference
 */
const useTheme = () => {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('portfolio-theme');
        if (saved !== null) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('portfolio-theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('portfolio-theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(prev => !prev);

    return { isDark, toggleTheme };
};

export default useTheme;
