import { motion } from 'framer-motion';
import { FiTrendingUp, FiTarget, FiCheckCircle, FiBarChart2 } from 'react-icons/fi';
import { seoCaseStudies } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';

/**
 * SEO Case Studies page with detailed results and strategies
 */
const SeoCaseStudies = ({ isDark }) => {
    return (
        <section className="py-28" id="seo-case-studies-page">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    subtitle="SEO Results"
                    title="SEO Case Studies"
                    description="Real results from my SEO campaigns — measurable growth, strategic implementation, and data-driven success."
                    isDark={isDark}
                />

                <div className="space-y-12">
                    {seoCaseStudies.map((study, index) => (
                        <motion.article
                            key={study.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`rounded-2xl overflow-hidden ${isDark
                                ? 'bg-surface-800/50 border border-surface-700/50'
                                : 'bg-white border border-gray-200 shadow-sm'
                                }`}
                            id={`case-study-${study.id}`}
                        >
                            {/* Header */}
                            <div className="h-1.5 bg-gradient-to-r from-primary-500 via-cyber-400 to-accent-400" />
                            <div className="p-6 md:p-8">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <FiBarChart2 size={20} className="text-primary-500" />
                                            <span className={`text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-400'
                                                }`}>
                                                Case Study
                                            </span>
                                        </div>
                                        <h3 className={`text-2xl font-display font-bold ${isDark ? 'text-white' : 'text-surface-900'}`}>
                                            {study.title}
                                        </h3>
                                        <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                            Client: {study.client} • Duration: {study.duration}
                                        </p>
                                    </div>
                                </div>

                                <p className={`text-base leading-relaxed mb-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {study.overview}
                                </p>

                                {/* Results Grid */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                    {study.results.map((result, i) => (
                                        <motion.div
                                            key={result.metric}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + i * 0.1 }}
                                            className={`p-4 rounded-xl text-center ${isDark ? 'bg-surface-900/50 border border-surface-700/50' : 'bg-gray-50 border border-gray-100'
                                                }`}
                                        >
                                            <div className="text-2xl font-display font-bold text-gradient mb-1">
                                                {result.growth}
                                            </div>
                                            <p className={`text-xs font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                {result.metric}
                                            </p>
                                            <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                                                <span className="line-through">{result.before}</span>
                                                <FiTrendingUp size={10} className="inline mx-1 text-accent-500" />
                                                <span className="text-accent-400 font-medium">{result.after}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Strategies */}
                                <div>
                                    <h4 className={`text-sm font-display font-semibold uppercase tracking-wider mb-3 flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-500'
                                        }`}>
                                        <FiTarget size={14} />
                                        Key Strategies
                                    </h4>
                                    <div className="grid md:grid-cols-2 gap-2">
                                        {study.strategies.map((strategy, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <FiCheckCircle size={14} className={`mt-0.5 flex-shrink-0 ${isDark ? 'text-accent-400' : 'text-green-500'}`} />
                                                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                                    {strategy}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SeoCaseStudies;
