import { motion } from 'framer-motion';

/**
 * Reusable section header with subtitle, gradient title, and description
 */
const SectionHeader = ({ subtitle, title, description, isDark, center = true }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`mb-12 ${center ? 'text-center' : ''}`}
        >
            {subtitle && (
                <span className={`inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full mb-4 ${isDark
                    ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20'
                    : 'bg-primary-50 text-primary-600 border border-primary-100'
                    }`}>
                    {subtitle}
                </span>
            )}
            <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${isDark ? 'text-white' : 'text-surface-900'
                }`}>
                {title}
            </h2>
            {description && (
                <p className={`max-w-2xl text-base leading-relaxed ${center ? 'mx-auto' : ''} ${isDark ? 'text-gray-400' : 'text-slate-600'
                    }`}>
                    {description}
                </p>
            )}
        </motion.div>
    );
};

export default SectionHeader;
