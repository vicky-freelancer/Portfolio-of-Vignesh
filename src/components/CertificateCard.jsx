import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiCalendar, FiExternalLink, FiX } from 'react-icons/fi';

/**
 * Certificate card with modal popup for full view
 */
const CertificateCard = ({ certificate, isDark, index }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setIsModalOpen(true)}
                className={`group cursor-pointer rounded-2xl overflow-hidden card-hover ${isDark
                        ? 'bg-surface-800/50 border border-surface-700/50'
                        : 'bg-white border border-gray-200 shadow-sm'
                    }`}
                id={`certificate-card-${certificate.id}`}
            >
                {/* Certificate icon area */}
                <div className={`h-36 flex items-center justify-center ${isDark
                        ? 'bg-gradient-to-br from-primary-900/40 to-surface-800'
                        : 'bg-gradient-to-br from-primary-50 to-primary-100'
                    }`}>
                    <FiAward
                        size={52}
                        className={`${isDark ? 'text-primary-400' : 'text-primary-500'} group-hover:scale-110 transition-transform duration-300`}
                    />
                </div>

                <div className="p-5">
                    <h3 className={`font-display font-semibold text-sm mb-1 line-clamp-2 group-hover:text-primary-400 transition-colors ${isDark ? 'text-white' : 'text-surface-900'
                        }`}>
                        {certificate.title}
                    </h3>
                    <p className={`text-xs mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {certificate.issuer}
                    </p>
                    <div className={`flex items-center gap-1 text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                        <FiCalendar size={12} />
                        {certificate.date}
                    </div>
                </div>
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', damping: 25 }}
                            className={`relative w-full max-w-lg rounded-2xl overflow-hidden ${isDark ? 'bg-surface-800 border border-surface-700' : 'bg-white shadow-2xl'
                                }`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors ${isDark ? 'bg-surface-700 text-gray-300 hover:bg-surface-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                <FiX size={18} />
                            </button>

                            {/* Certificate display */}
                            <div className={`h-48 flex items-center justify-center ${isDark
                                    ? 'bg-gradient-to-br from-primary-900/40 to-surface-800'
                                    : 'bg-gradient-to-br from-primary-50 to-primary-100'
                                }`}>
                                <FiAward size={80} className={isDark ? 'text-primary-400' : 'text-primary-500'} />
                            </div>

                            <div className="p-6">
                                <h3 className={`text-xl font-display font-bold mb-2 ${isDark ? 'text-white' : 'text-surface-900'}`}>
                                    {certificate.title}
                                </h3>
                                <p className={`text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                    Issued by: {certificate.issuer}
                                </p>
                                <p className={`text-sm mb-4 flex items-center gap-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                                    <FiCalendar size={14} />
                                    {certificate.date}
                                </p>

                                {certificate.credentialUrl && certificate.credentialUrl !== '#' && (
                                    <a
                                        href={certificate.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 transition-all duration-300"
                                    >
                                        <FiExternalLink size={14} />
                                        View Credential
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default CertificateCard;
