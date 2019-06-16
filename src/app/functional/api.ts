
import axios from 'axios';

// Axios config:
export const setupAxios = () => {
    axios.defaults.headers.common = {
        ...axios.defaults.headers.common,
        'Authorization': process.env.REACT_APP_API_KEY,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    };
    
    axios.interceptors.request.use((config) => {
        return {
            ...config,
            baseURL: 'https://fortnite-api.theapinetwork.com/',
            params: {
                ...config.params,
            },
        }
    });
};