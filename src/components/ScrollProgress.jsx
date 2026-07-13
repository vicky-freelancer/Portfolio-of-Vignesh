import { useState, useEffect } from 'react';

/**
 * Scroll progress bar displayed at the top of the page
 * Shows reading progress as a gradient bar
 */
const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPosition = window.scrollY;
            setProgress(totalHeight > 0 ? (scrollPosition / totalHeight) * 100 : 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-[60] h-1">
            <div
                className="h-full bg-gradient-to-r from-primary-500 via-cyber-400 to-accent-400 transition-[width] duration-150 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
