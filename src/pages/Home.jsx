import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMail, FiDownload, FiArrowRight, FiCode, FiTrendingUp } from 'react-icons/fi';
import { personalInfo, statsData, skillsData, projectsData } from '../data/portfolioData';
import StatsCounter from '../components/StatsCounter';
import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';
import { Particles } from '../components/ui/particles';

/**
 * Home page with hero section, stats, featured projects, and CTA
 */
const Home = ({ isDark }) => {
    const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);
    const topSkills = skillsData.filter(s => s.level >= 90);

    return (
        <>
            {/* ===== Hero Section ===== */}
            <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-mesh" />
                <div className={`absolute inset-0 ${isDark ? 'bg-surface-950/80' : 'bg-white/60'}`} />
                <Particles
                    color={isDark ? "#ffffff" : "#6366f1"}
                    particleCount={isDark ? 10000 : 5000}
                    particleSize={20}
                    animate={true}
                    className={`z-0 ${isDark ? 'opacity-30' : 'opacity-20'}`}
                />

                {/* Floating orbs */}
                <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyber-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-widest mb-6 cyber-corner ${isDark
                                    ? 'bg-primary-500/10 text-cyber-400 border border-cyber-500/30'
                                    : 'bg-primary-50 text-primary-600 border border-primary-200'
                                    }`}>
                                    <span className="w-2 h-2 rounded-full bg-cyber-400 animate-pulse glow-sm" />
                                    SYSTEM_STATUS: ONLINE // AVAILABLE_FOR_HIRE
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className={`text-5xl sm:text-6xl lg:text-7xl font-display font-black leading-[1.1] mb-6 ${isDark ? 'text-white' : 'text-surface-900'
                                    }`}
                            >
                                <span className="text-sm font-mono block mb-2 opacity-50 tracking-tighter">INIT_PROCESS: GREETING</span>
                                Hello_World. I'm{' '}
                                <span className="text-gradient-cyber glow-text-cyber block sm:inline">{personalInfo.firstName}</span>
                                <br />
                                <span className={`text-2xl sm:text-3xl lg:text-4xl block mt-4 font-normal ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Expert in <span className="text-primary-400 font-bold">{personalInfo.role}</span>
                                    <span className="mx-2 opacity-30">|</span>
                                    <span className="text-magenta-400 font-bold">{personalInfo.roleSecondary}</span>
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className={`text-base sm:text-lg leading-relaxed mb-10 max-w-xl font-medium ${isDark ? 'text-gray-400' : 'text-slate-600'
                                    }`}
                            >
                                <span className="inline-block w-8 h-px bg-primary-500 mr-3 align-middle" />
                                {personalInfo.tagline}. Orchestrating data and design in {personalInfo.location}.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex flex-wrap gap-5 mb-10"
                            >
                                <Link
                                    to="/projects"
                                    id="cta-projects"
                                    className="group btn-cyber relative flex items-center gap-3 px-8 py-4 rounded-lg font-bold text-sm bg-primary-600 text-white overflow-hidden"
                                >
                                    <span>EXPLORE_PROJECTS</span>
                                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    <div className="absolute bottom-0 left-0 h-1 bg-cyber-400 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                                </Link>
                                <Link
                                    to="/contact"
                                    className={`btn-cyber flex items-center gap-3 px-8 py-4 rounded-lg font-bold text-sm border border-primary-500/30 transition-all ${isDark
                                        ? 'text-white bg-primary-500/5 hover:bg-primary-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]'
                                        : 'text-surface-900 bg-gray-50 hover:bg-gray-100'
                                        }`}
                                >
                                    <FiMail size={18} className="text-cyber-400" />
                                    <span>HIRE_ME</span>
                                </Link>
                                <a
                                    href="/resume.pdf"
                                    download
                                    className={`btn-cyber flex items-center gap-3 px-8 py-4 rounded-lg font-bold text-sm border border-white/10 transition-all ${isDark
                                        ? 'text-gray-300 bg-surface-800/50 hover:bg-surface-800'
                                        : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                                        }`}
                                >
                                    <FiDownload size={18} className="text-primary-400" />
                                    <span>RESUME</span>
                                </a>
                            </motion.div>
                        </div>

                        {/* Right Side - Cyber Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                            className="hidden lg:flex items-center justify-center p-12"
                        >
                            <div className="relative w-full aspect-square max-w-md">
                                {/* Rotating rings */}
                                <div className="absolute inset-0 border-2 border-dashed border-black/20 rounded-full animate-[rotate-slow_20s_linear_infinite]" />
                                <div className="absolute inset-8 border-2 border-black/10 rounded-full animate-[rotate-slow_15s_linear_infinite_reverse]" />

                                {/* Glass Card Content */}
                                <div className={`absolute inset-0 flex flex-col items-center justify-center gap-6 glass-card rounded-3xl p-12 overflow-hidden cyber-corner ${isDark ? '' : 'glass-card-light'}`}>
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-400 to-transparent opacity-50" />

                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className={`relative z-10 w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 glow-md p-1 ${isDark ? 'border-primary-500/50 bg-surface-900/50' : 'border-primary-300 bg-white/50'}`}
                                    >
                                        <div className="w-full h-full rounded-xl overflow-hidden relative flex items-center justify-center bg-surface-950">
                                            <div className="absolute inset-0 flex flex-col items-center justify-center text-cyber-400 font-mono text-center p-2 z-0">
                                                <FiCode size={24} className="mb-2 opacity-50 animate-pulse" />
                                                <span className="text-xs opacity-70">AWAITING_UPLOAD</span>
                                                <span className="text-[9px] opacity-50 mt-1">/public/Vignesh.PNG</span>
                                            </div>
                                            <img
                                                src="/public/Vignesh.PNG"
                                                alt="Profile"
                                                className="w-full h-full object-cover relative z-10"
                                                onError={(e) => { e.target.style.display = 'none'; }}
                                            />
                                            <div className={`absolute inset-0 mix-blend-overlay pointer-events-none z-20 ${isDark ? 'bg-primary-500/20' : 'bg-primary-300/10'}`}></div>
                                        </div>
                                    </motion.div>

                                    <div className="text-center relative z-10">
                                        <p className="font-display font-black text-3xl tracking-tighter mb-1 uppercase italic">
                                            Cyber_Core
                                        </p>
                                        <div className="h-0.5 w-12 bg-cyber-400 mx-auto mb-4" />
                                        <p className={`text-sm font-mono tracking-widest ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                                            V_ENGINE_1.0.4
                                        </p>
                                    </div>

                                    {/* Data stream visual */}
                                    <div className="absolute bottom-6 left-0 w-full px-8 opacity-20 flex justify-between gap-1 overflow-hidden pointer-events-none">
                                        {[...Array(20)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-0.5 bg-black"
                                                style={{ height: `${Math.random() * 40 + 10}px`, animation: `data-stream ${Math.random() * 2 + 1}s linear infinite` }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <div className={`w-6 h-10 rounded-full border-2 flex items-start justify-center p-1.5 ${isDark ? 'border-gray-600' : 'border-gray-300'
                        }`}>
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 rounded-full bg-primary-500"
                        />
                    </div>
                </motion.div>
            </section>

            {/* ===== Stats Section ===== */}
            <section className={`py-24 relative overflow-hidden ${isDark ? 'bg-surface-950/40' : 'bg-gray-50/50'}`}>
                {isDark && <div className="absolute inset-0 bg-dot-pattern opacity-10" />}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <StatsCounter stats={statsData} isDark={isDark} />
                </div>
            </section>

            {/* ===== Featured Projects ===== */}
            <section className="py-24 relative" id="featured-projects">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <SectionHeader
                            subtitle="PORTFOLIO_CORE"
                            title="Recent_Deployments"
                            description="Engineered solutions ranging from high-performance MERN applications to algorithmically optimized SEO strategies."
                            isDark={isDark}
                        />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} isDark={isDark} index={index} />
                        ))}
                    </div>
                    <div className="text-center mt-16">
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded font-black text-xs uppercase tracking-[0.2em] bg-surface-900 border border-cyber-500/50 text-white hover:bg-black transition-all duration-300 shadow-lg shadow-cyber-500/10 btn-cyber"
                        >
                            ACCESS_FULL_ARCHIVE
                            <FiArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== CTA Section ===== */}
            <section className={`py-32 relative overflow-hidden ${isDark ? 'bg-surface-950/80 section-scanlines' : 'bg-primary-50/30'}`}>
                {isDark && <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-30" />}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`p-12 rounded-3xl border ${isDark ? 'bg-surface-900/40 border-primary-500/20 glass-card' : 'bg-white border-primary-100 shadow-2xl shadow-primary-500/5'}`}
                    >
                        <h2 className={`text-4xl md:text-5xl font-display font-black mb-6 tracking-tight ${isDark ? 'text-white' : 'text-surface-900'
                            }`}>
                            READY_FOR_NEXT{' '}
                            <span className="text-gradient-cyber glow-text-cyber italic">MISSION_?</span>
                        </h2>
                        <p className={`text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-medium ${isDark ? 'text-gray-400' : 'text-slate-600'
                            }`}>
                            Whether you need a full-scale digital ecosystem or a technical SEO audit —
                            let's collaborate to redefine your digital presence.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 px-10 py-5 rounded-lg font-black text-sm uppercase tracking-widest bg-gradient-to-r from-primary-600 to-cyber-600 text-white hover:glow-md transition-all duration-300 btn-cyber"
                        >
                            INITIATE_CONTACT
                            <FiArrowRight className="animate-pulse" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Home;
