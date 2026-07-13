import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { navLinks } from '../data/portfolioData';

/**
 * Responsive navigation bar with dark mode toggle and mobile drawer
 */
const Navbar = ({ isDark, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Track scroll position for navbar background
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav
            id="main-navbar"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? isDark
                    ? 'bg-surface-900/90 backdrop-blur-xl shadow-lg shadow-primary-900/20 border-b border-primary-800/20'
                    : 'bg-white/90 backdrop-blur-xl shadow-lg shadow-gray-200/50 border-b border-gray-200/50'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group" id="nav-logo">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-cyber-400 flex items-center justify-center text-white font-display font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                            V
                        </div>
                        <span className={`font-display font-bold text-xl hidden sm:block ${isDark ? 'text-white' : 'text-surface-900'}`}>
                            Vignesh<span className="text-primary-500">.dev</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                id={`nav-${link.name.toLowerCase().replace(/\s/g, '-')}`}
                                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${location.pathname === link.path
                                    ? 'text-primary-400'
                                    : isDark
                                        ? 'text-gray-300 hover:text-white hover:bg-white/5'
                                        : 'text-gray-600 hover:text-surface-900 hover:bg-gray-100'
                                    }`}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary-500 to-cyber-400 rounded-full"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3">
                        {/* Download Resume Button (Desktop) */}
                        <a
                            href="/resume.pdf"
                            download
                            className={`hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all btn-cyber border ${isDark
                                ? 'bg-primary-500/10 text-primary-400 border-primary-500/20'
                                : 'bg-primary-50 text-primary-600 border-primary-200 shadow-sm'
                                }`}
                        >
                            Resume
                        </a>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            id="theme-toggle"
                            className={`p-2.5 rounded-xl transition-all duration-300 ${isDark
                                ? 'bg-surface-800 text-yellow-400 hover:bg-surface-700'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            aria-label="Toggle theme"
                        >
                            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            id="mobile-menu-toggle"
                            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${isDark
                                ? 'bg-surface-800 text-white hover:bg-surface-700'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`lg:hidden border-t ${isDark ? 'bg-surface-900/95 backdrop-blur-xl border-surface-800' : 'bg-white/95 backdrop-blur-xl border-gray-200'
                            }`}
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${location.pathname === link.path
                                            ? isDark
                                                ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20'
                                                : 'bg-primary-50 text-primary-600 border border-primary-200'
                                            : isDark
                                                ? 'text-gray-300 hover:bg-white/5'
                                                : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
