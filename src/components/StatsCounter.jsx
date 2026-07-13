import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Animated stat counter that counts up when in view
 */
const StatsCounter = ({ stats, isDark }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
                <StatItem key={stat.label} stat={stat} isDark={isDark} index={index} />
            ))}
        </div>
    );
};

const StatItem = ({ stat, isDark, index }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    // Animate count
                    const duration = 2000;
                    const start = Date.now();
                    const step = () => {
                        const elapsed = Date.now() - start;
                        const progress = Math.min(elapsed / duration, 1);
                        // Ease out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * stat.value));
                        if (progress < 1) requestAnimationFrame(step);
                    };
                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [stat.value]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`text-center p-6 rounded-2xl ${isDark
                    ? 'bg-surface-800/50 border border-surface-700/50'
                    : 'bg-white border border-gray-200 shadow-sm'
                }`}
        >
            <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                {count}{stat.suffix}
            </div>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {stat.label}
            </p>
        </motion.div>
    );
};

export default StatsCounter;
