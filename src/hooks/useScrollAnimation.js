import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook that triggers animation when element enters viewport
 * Uses IntersectionObserver for performant scroll detection
 */
const useScrollAnimation = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: options.threshold || 0.1, rootMargin: options.rootMargin || '0px' }
        );

        const current = ref.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, [options.threshold, options.rootMargin]);

    return { ref, isVisible };
};

export default useScrollAnimation;
