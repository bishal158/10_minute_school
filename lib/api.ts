import axios from 'axios';
// Create base instance
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});
// Add interceptor to inject language
api.interceptors.request.use(config => {
    // For client-side requests, we'll get language from localStorage
    // For server-side, we'll handle differently (shown later)
    if (typeof window !== 'undefined') {
        const lang = localStorage.getItem('lang') || 'en';
        config.params = {
            ...config.params,
            lang,
        };
    }
    return config;
});

export default api;