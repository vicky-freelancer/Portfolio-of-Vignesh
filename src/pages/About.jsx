import { motion } from 'framer-motion';
import { FiTarget, FiTrendingUp, FiCode, FiUsers } from 'react-icons/fi';
import { personalInfo, aboutData, skillsData } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import SkillsSection from '../components/SkillsSection';

/**
 * About page with bio, career goals, SEO expertise, and tech stack
 */
const About = ({ isDark }) => {
    const highlights = [
        { icon: FiCode, label: 'Full Stack Dev', desc: 'MERN Stack Specialist' },
        { icon: FiTrendingUp, label: 'SEO Expert', desc: 'Organic Growth Strategist' },
        { icon: FiUsers, label: '15+ Clients', desc: 'Global Freelance Work' },
        { icon: FiTarget, label: '25+ Projects', desc: 'Delivered Successfully' },
    ];

    return (
        <section className="py-28" id="about-page">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    subtitle="About Me"
                    title="Passionate Developer & SEO Strategist"
                    description="Get to know me, my journey, and the skills I bring to every project."
                    isDark={isDark}
                />

                {/* Highlights Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`text-center p-6 rounded-2xl ${isDark
                                ? 'bg-surface-800/50 border border-surface-700/50'
                                : 'bg-white border border-gray-200 shadow-sm'
                                }`}
                        >
                            <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${isDark ? 'bg-primary-500/10' : 'bg-primary-50'
                                }`}>
                                <item.icon size={24} className="text-primary-500" />
                            </div>
                            <h3 className={`font-display font-semibold text-sm mb-0.5 ${isDark ? 'text-white' : 'text-surface-900'}`}>
                                {item.label}
                            </h3>
                            <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Bio Section */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className={`text-2xl font-display font-bold mb-4 ${isDark ? 'text-white' : 'text-surface-900'}`}>
                            Professional Summary
                        </h3>
                        <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            {aboutData.summary}
                        </p>

                        <h3 className={`text-2xl font-display font-bold mb-4 ${isDark ? 'text-white' : 'text-surface-900'}`}>
                            Career Goals
                        </h3>
                        <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            {aboutData.careerGoals}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className={`text-2xl font-display font-bold mb-4 ${isDark ? 'text-white' : 'text-surface-900'}`}>
                            SEO Expertise
                        </h3>
                        <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            {aboutData.seoExpertise}
                        </p>

                        {/* Tech Stack Grid */}
                        <h3 className={`text-2xl font-display font-bold mb-4 ${isDark ? 'text-white' : 'text-surface-900'}`}>
                            Tech Stack Overview
                        </h3>
                        <div className="space-y-3">
                            {aboutData.techStack.map((category) => (
                                <div key={category.category}>
                                    <span className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-400'
                                        }`}>
                                        {category.category}
                                    </span>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        {category.items.map((item) => (
                                            <span
                                                key={item}
                                                className={`px-2.5 py-1 text-xs rounded-lg ${isDark
                                                    ? 'bg-surface-700/50 text-gray-300 border border-surface-600/50'
                                                    : 'bg-gray-100 text-gray-600 border border-gray-200'
                                                    }`}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Skills Section */}
                <div className={`p-8 rounded-2xl ${isDark ? 'bg-surface-800/30 border border-surface-700/30' : 'bg-gray-50 border border-gray-100'
                    }`}>
                    <h3 className={`text-2xl font-display font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-surface-900'}`}>
                        Skills & Proficiency
                    </h3>
                    <div className="max-w-3xl mx-auto">
                        <SkillsSection skills={skillsData} isDark={isDark} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
