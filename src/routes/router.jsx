import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Education from '../pages/Education';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Certificates from '../pages/Certificates';
import SeoCaseStudies from '../pages/SeoCaseStudies';
import Contact from '../pages/Contact';
import ParticlesDemo from '../components/ui/demo';
/**
 * Creates the application router with all routes
 * Accepts isDark and toggleTheme to pass through to layout and pages
 */
export const createAppRouter = (isDark, toggleTheme) =>
    createBrowserRouter([
        {
            path: '/',
            element: <MainLayout isDark={isDark} toggleTheme={toggleTheme} />,
            children: [
                { index: true, element: <Home isDark={isDark} /> },
                { path: 'about', element: <About isDark={isDark} /> },
                { path: 'education', element: <Education isDark={isDark} /> },
                { path: 'experience', element: <Experience isDark={isDark} /> },
                { path: 'projects', element: <Projects isDark={isDark} /> },
                { path: 'certificates', element: <Certificates isDark={isDark} /> },
                { path: 'seo-case-studies', element: <SeoCaseStudies isDark={isDark} /> },
                { path: 'contact', element: <Contact isDark={isDark} /> },
                { path: 'demo', element: <ParticlesDemo /> },
            ],
        },
    ]);
