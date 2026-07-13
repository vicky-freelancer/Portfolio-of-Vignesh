import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

/**
 * Project card with cyberpunk glassmorphism, tech stack badges, and action buttons
 */
const ProjectCard = ({ project, isDark, index }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative rounded-xl overflow-hidden card-cyber cyber-corner ${isDark ? 'glass-card animate-border-flow' : 'glass-card-light'
                }`}
            id={`project-card-${project.id}`}
        >
            {/* Top cyber-glow bar */}
            <div className="h-0.5 bg-gradient-to-r from-primary-500 via-cyber-400 to-accent-400 opacity-60 group-hover:opacity-100 transition-opacity" />

            {/* Image Overlay with scanlines effect on hover */}
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950/90 via-surface-950/20 to-transparent z-10" />
                {isDark && <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity bg-cyber-lines pointer-events-none" />}

                <img
                    src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                    <span className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-widest rounded border backdrop-blur-md ${isDark
                            ? 'bg-surface-900/80 text-cyber-400 border-cyber-500/30'
                            : 'bg-white/90 text-primary-600 border-primary-200 shadow-sm'
                        }`}>
                        {project.category}
                    </span>
                </div>

                {/* Featured indicator */}
                {project.featured && (
                    <div className="absolute top-4 right-4 z-20">
                        <div className="w-2 h-2 rounded-full bg-accent-500 glow-sm animate-pulse" />
                    </div>
                )}
            </div>

            <div className="p-6 relative z-10">
                {/* Title */}
                <h3 className={`text-xl font-display font-black mb-2 tracking-tight group-hover:text-cyber-400 transition-colors ${isDark ? 'text-white' : 'text-surface-900'
                    }`}>
                    {project.title}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed line-clamp-2 mb-6 font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                    {project.description}
                </p>

                {/* Tech Stack - Cyber badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className={`px-2 py-0.5 text-[10px] font-mono uppercase font-bold border ${isDark
                                    ? 'bg-primary-500/5 text-primary-300 border-primary-500/20 shadow-[0_0_10px_rgba(99,102,241,0.05)]'
                                    : 'bg-gray-100 text-gray-600 border-gray-200'
                                }`}
                        >
                            {tech}
                        </span>
                    ))}
                    {project.techStack.length > 4 && (
                        <span className="text-[10px] font-mono opacity-50 flex items-center">+{project.techStack.length - 4}</span>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                    {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded text-xs font-black uppercase tracking-widest bg-primary-600 text-white hover:bg-primary-500 transition-all btn-cyber glow-sm"
                        >
                            <FiExternalLink size={14} />
                            LIVE_DEP
                        </a>
                    )}
                    {project.githubUrl && project.githubUrl !== '#' && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded text-xs font-black uppercase tracking-widest border transition-all ${isDark
                                    ? 'border-surface-700 text-gray-300 hover:border-cyber-400 hover:text-cyber-400'
                                    : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            <FiGithub size={14} />
                            SRC_CODE
                        </a>
                    )}
                </div>
            </div>

            {/* Interactive hover bottom-corner highlight */}
            <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-cyber-400/20 to-transparent" />
            </div>
        </motion.article>
    );
};

export default ProjectCard;
