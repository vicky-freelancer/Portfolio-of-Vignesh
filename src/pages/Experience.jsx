import { experienceData } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import ExperienceTimeline from '../components/ExperienceTimeline';

/**
 * Experience page with timeline and work history
 */
const Experience = ({ isDark }) => {
    return (
        <section className="py-28" id="experience-page">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    subtitle="Experience"
                    title="Work History & Achievements"
                    description="My professional journey through freelancing, consulting, and development."
                    isDark={isDark}
                />

                <ExperienceTimeline experiences={experienceData} isDark={isDark} />
            </div>
        </section>
    );
};

export default Experience;
