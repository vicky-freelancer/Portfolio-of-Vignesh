import { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';

/**
 * Projects page with category filtering
 */
const Projects = ({ isDark }) => {
    const [activeFilter, setActiveFilter] = useState('All');

    const categories = ['All', ...new Set(projectsData.map(p => p.category))];
    const filteredProjects = activeFilter === 'All'
        ? projectsData
        : projectsData.filter(p => p.category === activeFilter);

    return (
        <section className="py-28" id="projects-page">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    subtitle="My Work"
                    title="Projects & Case Studies"
                    description="A showcase of my development projects and SEO work, from full-stack applications to growth strategies."
                    isDark={isDark}
                />

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            id={`filter-${cat.toLowerCase()}`}
                            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${activeFilter === cat
                                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25'
                                : isDark
                                    ? 'bg-surface-800 text-gray-400 hover:bg-surface-700 border border-surface-700'
                                    : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} isDark={isDark} index={index} />
                    ))}
                </motion.div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>
                            No projects found in this category.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
