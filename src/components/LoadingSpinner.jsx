/**
 * Full-screen loading spinner with animated gradient ring
 */
const LoadingSpinner = ({ isDark }) => {
    return (
        <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-surface-950' : 'bg-gray-50'
            }`}>
            <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-transparent border-t-black border-r-gray-900 animate-spin" />
                <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-b-black opacity-40 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
            </div>
        </div>
    );
};

export default LoadingSpinner;
