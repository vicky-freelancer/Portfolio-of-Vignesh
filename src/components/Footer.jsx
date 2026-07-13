import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

/**
 * Footer component with social links, quick nav, and back-to-top button
 */
const Footer = ({ isDark }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    const socialLinks = [
        { icon: FiGithub, href: personalInfo.social.github, label: 'GitHub' },
        { icon: FiLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
        { icon: FiTwitter, href: personalInfo.social.twitter, label: 'Twitter' },
        { icon: FiMail, href: personalInfo.social.email, label: 'Email' },
    ];

    return (
        <footer
            id="site-footer"
            className={`relative border-t ${isDark
                ? 'bg-surface-950 border-surface-800'
                : 'bg-gray-50 border-gray-200'
                }`}
        >
            {/* Gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-cyber-400 flex items-center justify-center text-white font-display font-bold">
                                V
                            </div>
                            <span className={`font-display font-bold text-lg ${isDark ? 'text-white' : 'text-surface-900'}`}>
                                Vignesh<span className="text-primary-500">.dev</span>
                            </span>
                        </Link>
                        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                            MERN Stack Developer & SEO Expert crafting high-performance web experiences from Trichy, India.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className={`font-display font-semibold mb-4 ${isDark ? 'text-white' : 'text-surface-900'}`}>
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className={`text-sm transition-colors duration-300 ${isDark ? 'text-gray-400 hover:text-primary-400' : 'text-slate-600 hover:text-primary-600'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social & Contact */}
                    <div>
                        <h3 className={`font-display font-semibold mb-4 ${isDark ? 'text-white' : 'text-surface-900'}`}>
                            Connect
                        </h3>
                        <div className="flex gap-3 mb-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className={`p-2.5 rounded-lg transition-all duration-300 ${isDark
                                        ? 'bg-surface-800 text-gray-400 hover:bg-primary-500/20 hover:text-primary-400'
                                        : 'bg-gray-100 text-gray-500 hover:bg-primary-50 hover:text-primary-600'
                                        }`}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                            {personalInfo.email}
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={`mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${isDark ? 'border-surface-800' : 'border-gray-200'
                    }`}>
                    <p className={`text-sm flex items-center gap-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                        © {new Date().getFullYear()} {personalInfo.name}. Made with
                        <FiHeart className="text-red-500 inline" size={14} />
                    </p>

                    {/* Back to Top */}
                    <button
                        onClick={scrollToTop}
                        id="back-to-top"
                        className={`p-2 rounded-lg transition-all duration-300 ${isDark
                            ? 'bg-surface-800 text-gray-400 hover:bg-primary-500/20 hover:text-primary-400'
                            : 'bg-gray-100 text-gray-500 hover:bg-primary-50 hover:text-primary-600'
                            }`}
                        aria-label="Scroll to top"
                    >
                        <FiArrowUp size={18} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
