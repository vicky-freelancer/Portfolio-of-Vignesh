import { certificatesData } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import CertificateCard from '../components/CertificateCard';

/**
 * Certificates page displaying all certifications with modal popups
 */
const Certificates = ({ isDark }) => {
    return (
        <section className="py-28" id="certificates-page">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    subtitle="Certifications"
                    title="Professional Certificates"
                    description="Industry-recognized certifications that validate my skills in development, SEO, and cloud technologies."
                    isDark={isDark}
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificatesData.map((cert, index) => (
                        <CertificateCard
                            key={cert.id}
                            certificate={cert}
                            isDark={isDark}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
