import { motion } from 'framer-motion';

/**
 * Skills section with animated progress bars grouped by category
 */
const SkillsSection = ({ skills, isDark }) => {
    // Group skills by category
    const grouped = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
    }, {});

    const categoryColors = {
        Frontend: 'from-primary-500 to-primary-400',
        Backend: 'from-accent-500 to-accent-400',
        Database: 'from-cyber-500 to-cyber-400',
        SEO: 'from-magenta-500 to-magenta-400',
        Tools: 'from-yellow-500 to-orange-400',
        DevOps: 'from-purple-500 to-violet-400',
        Design: 'from-pink-500 to-rose-400',
    };

    return (
        <div className="space-y-8">
            {Object.entries(grouped).map(([category, categorySkills], catIndex) => (
                <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                >
                    <h3 className={`text-sm font-display font-semibold uppercase tracking-wider mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                        {category}
                    </h3>
                    <div className="grid gap-3">
                        {categorySkills.map((skill, index) => (
                            <div key={skill.name} className="group">
                                <div className="flex justify-between items-center mb-1.5">
                                    <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                                        {skill.name}
                                    </span>
                                    <span className={`text-xs font-mono ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                                        {skill.level}%
                                    </span>
                                </div>
                                <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-surface-700' : 'bg-gray-200'
                                    }`}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                                        className={`h-full rounded-full bg-gradient-to-r ${categoryColors[category] || 'from-primary-500 to-primary-400'}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default SkillsSection;
