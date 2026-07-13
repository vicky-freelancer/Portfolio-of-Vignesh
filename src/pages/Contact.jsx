import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMapPin, FiMail, FiPhone, FiGithub, FiLinkedin, FiTwitter, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import { sendContactForm } from '../services/api';
import SectionHeader from '../components/SectionHeader';

/**
 * Contact page with form, social links, and contact info
 */
const Contact = ({ isDark }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus({ type: 'error', message: 'Please fill in all fields.' });
            return;
        }

        setIsSubmitting(true);
        try {
            const result = await sendContactForm(formData);
            setStatus({ type: 'success', message: result.message });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus({ type: 'error', message: error.message });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        { icon: FiMapPin, label: 'Location', value: personalInfo.location },
        { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
        { icon: FiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    ];

    const socialLinks = [
        { icon: FiGithub, href: personalInfo.social.github, label: 'GitHub' },
        { icon: FiLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
        { icon: FiTwitter, href: personalInfo.social.twitter, label: 'Twitter' },
    ];

    return (
        <section className="py-28" id="contact-page">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    subtitle="Get In Touch"
                    title="Let's Work Together"
                    description="Have a project in mind? Need SEO consulting? I'd love to hear from you. Drop me a message!"
                    isDark={isDark}
                />

                <div className="grid lg:grid-cols-5 gap-10">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Info Cards */}
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`flex items-center gap-4 p-4 rounded-xl ${isDark
                                    ? 'bg-surface-800/50 border border-surface-700/50'
                                    : 'bg-white border border-gray-200 shadow-sm'
                                    }`}
                            >
                                <div className={`p-3 rounded-lg ${isDark ? 'bg-primary-500/10' : 'bg-primary-50'}`}>
                                    <info.icon size={20} className="text-primary-500" />
                                </div>
                                <div>
                                    <p className={`text-xs font-medium uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                                        {info.label}
                                    </p>
                                    {info.href ? (
                                        <a href={info.href} className={`text-sm font-medium hover:text-primary-400 transition-colors ${isDark ? 'text-gray-200' : 'text-gray-700'
                                            }`}>
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{info.value}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}

                        {/* Social Links */}
                        <div>
                            <h3 className={`text-sm font-display font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'
                                }`}>
                                Follow Me
                            </h3>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className={`p-3 rounded-xl transition-all duration-300 ${isDark
                                            ? 'bg-surface-800 text-gray-400 hover:bg-primary-500/20 hover:text-primary-400 border border-surface-700'
                                            : 'bg-white text-gray-500 hover:bg-primary-50 hover:text-primary-600 border border-gray-200 shadow-sm'
                                            }`}
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-3"
                    >
                        <form
                            onSubmit={handleSubmit}
                            id="contact-form"
                            className={`p-6 md:p-8 rounded-2xl ${isDark
                                ? 'bg-surface-800/50 border border-surface-700/50'
                                : 'bg-white border border-gray-200 shadow-sm'
                                }`}
                        >
                            <div className="space-y-5">
                                {/* Name */}
                                <div>
                                    <label htmlFor="contact-name" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="contact-name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className={`w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 outline-none ${isDark
                                            ? 'bg-surface-900 border border-surface-700 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50'
                                            : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50'
                                            }`}
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="contact-email" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="contact-email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className={`w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 outline-none ${isDark
                                            ? 'bg-surface-900 border border-surface-700 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50'
                                            : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50'
                                            }`}
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="contact-message" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                        Your Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project..."
                                        rows="5"
                                        className={`w-full px-4 py-3 rounded-xl text-sm transition-all duration-300 outline-none resize-none ${isDark
                                            ? 'bg-surface-900 border border-surface-700 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50'
                                            : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500/50'
                                            }`}
                                        required
                                    />
                                </div>

                                {/* Status Message */}
                                {status.message && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex items-center gap-2 p-3 rounded-xl text-sm ${status.type === 'success'
                                            ? isDark ? 'bg-accent-500/10 text-accent-400 border border-accent-500/20' : 'bg-green-50 text-green-600 border border-green-200'
                                            : isDark ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-red-50 text-red-600 border border-red-200'
                                            }`}
                                    >
                                        {status.type === 'success' ? <FiCheckCircle size={16} /> : <FiAlertCircle size={16} />}
                                        {status.message}
                                    </motion.div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    id="contact-submit"
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg shadow-primary-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FiSend size={16} />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
