import axios from 'axios';

// Create Axios instance with default configuration
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'https://formspree.io/f/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * Send contact form data
 * Uses Formspree or your custom backend endpoint
 */
export const sendContactForm = async (formData) => {
    try {
        // For demo purposes, we simulate a successful API call
        // Replace with your actual endpoint:
        // const response = await api.post('your-form-id', formData);
        await new Promise(resolve => setTimeout(resolve, 1500));
        return { success: true, message: 'Message sent successfully! I\'ll get back to you soon.' };
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to send message. Please try again.');
    }
};

/**
 * Fetch project data (for future backend integration)
 */
export const fetchProjects = async () => {
    try {
        // Replace with your actual API endpoint when backend is ready
        // const response = await api.get('/projects');
        // return response.data;
        const { projectsData } = await import('../data/portfolioData.js');
        return projectsData;
    } catch (error) {
        throw new Error('Failed to fetch projects.');
    }
};

export default api;
