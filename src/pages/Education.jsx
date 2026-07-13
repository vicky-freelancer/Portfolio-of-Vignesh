import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiAward, FiStar } from 'react-icons/fi';
import { educationData } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';

/**
 * Education page displaying academic background
 */
const Education = ({ isDark }) => {
    return (
        <section className="py-28" id="education-page">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    subtitle="Education"
                    title="Academic Background"
                    description="My educational journey that built the foundation for my development and SEO career."
                    isDark={isDark}
                />

                <div className="space-y-8">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={`relative rounded-2xl overflow-hidden ${isDark
                                ? 'bg-surface-800/50 border border-surface-700/50'
                                : 'bg-white border border-gray-200 shadow-sm'
                                }`}
                        >
                            {/* Gradient accent */}
                            <div className="h-1.5 bg-gradient-to-r from-primary-500 via-cyber-400 to-accent-400" />

                            <div className="p-6 md:p-8">
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-xl flex-shrink-0 ${isDark ? 'bg-primary-500/10' : 'bg-primary-50'
                                            }`}>
                                            <FiBookOpen size={24} className="text-primary-500" />
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-display font-bold ${isDark ? 'text-white' : 'text-surface-900'}`}>
                                                {edu.degree}
                                            </h3>
                                            <p className={`text-sm mt-1 ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>
                                                {edu.institution}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <span className={`flex items-center gap-1 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                            <FiCalendar size={14} />
                                            {edu.year}
                                        </span>
                                        <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${isDark
                                            ? 'bg-accent-500/10 text-accent-400'
                                            : 'bg-green-50 text-green-600'
                                            }`}>
                                            <FiAward size={14} />
                                            {edu.grade}
                                        </span>
                                    </div>
                                </div>

                                {/* Highlights */}
                                <div className="grid sm:grid-cols-2 gap-2 mt-4">
                                    {edu.highlights.map((highlight, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <FiStar size={14} className={`mt-0.5 flex-shrink-0 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} />
                                            <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                                {highlight}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
