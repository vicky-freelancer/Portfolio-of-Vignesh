import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import ParticleBackground from '../components/ParticleBackground';

/**
 * Main layout wrapper with navbar, footer, scroll progress, and page transitions
 */
const MainLayout = ({ isDark, toggleTheme }) => {
    const location = useLocation();

    return (
        <div className={`min-h-screen flex flex-col transition-colors duration-500 overflow-x-hidden ${isDark
            ? 'bg-surface-950 text-white bg-grid-pattern'
            : 'bg-white text-surface-900 bg-grid-pattern-light'
            }`}>
            {/* Cyberpunk Environment Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <ParticleBackground isDark={isDark} />
                <div className={`absolute inset-0 opacity-40 ${isDark ? 'bg-cyber-lines' : ''}`} />
                <div className={`absolute inset-0 ${isDark ? 'bg-gradient-mesh' : 'bg-white/40'}`} />
                {isDark && <div className="particle-line opacity-20 left-1/4" />}
                {isDark && <div className="particle-line opacity-10 left-3/4" style={{ animationDelay: '3s' }} />}
            </div>

            <ScrollProgress />
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />

            <main className="flex-1 relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
                        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                        exit={{ opacity: 0, filter: 'blur(10px)', y: -10 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            <Footer isDark={isDark} />
        </div>
    );
};

export default MainLayout;
