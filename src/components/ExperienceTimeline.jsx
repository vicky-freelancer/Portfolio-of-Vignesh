import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiCheckCircle } from 'react-icons/fi';

/**
 * Timeline-style experience display with animated entries
 */
const ExperienceTimeline = ({ experiences, isDark }) => {
    return (
        <div className="relative">
            {/* Timeline Line */}
            <div className={`absolute left-6 md:left-8 top-0 bottom-0 w-0.5 ${isDark ? 'bg-surface-700' : 'bg-gray-200'
                }`} />

            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="relative pl-16 md:pl-20"
                    >
                        {/* Timeline Dot */}
                        <div className={`absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full border-2 z-10 ${index === 0
                                ? 'bg-primary-500 border-primary-400 glow-sm'
                                : isDark
                                    ? 'bg-surface-800 border-surface-600'
                                    : 'bg-white border-gray-300'
                            }`} />

                        {/* Card */}
                        <div className={`rounded-2xl p-6 ${isDark
                                ? 'bg-surface-800/50 border border-surface-700/50'
                                : 'bg-white border border-gray-200 shadow-sm'
                            }`}>
                            {/* Header */}
                            <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                                <div>
                                    <h3 className={`text-lg font-display font-bold ${isDark ? 'text-white' : 'text-surface-900'}`}>
                                        {exp.title}
                                    </h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <FiBriefcase size={14} className={isDark ? 'text-primary-400' : 'text-primary-500'} />
                                        <span className={`text-sm font-medium ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>
                                            {exp.company}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${isDark ? 'bg-accent-500/10 text-accent-400' : 'bg-green-50 text-green-600'
                                        }`}>
                                        {exp.type}
                                    </span>
                                    <span className={`flex items-center gap-1 text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                                        <FiCalendar size={12} />
                                        {exp.period}
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                {exp.description}
                            </p>

                            {/* Achievements */}
                            <ul className="space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <FiCheckCircle size={14} className={`mt-0.5 flex-shrink-0 ${isDark ? 'text-accent-400' : 'text-green-500'}`} />
                                        <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {achievement}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceTimeline;
