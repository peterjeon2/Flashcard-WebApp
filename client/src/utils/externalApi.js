import axios from 'axios';

// auth APIs
export const getGoogleAuth = axios.get(`/auth/google`);
export const callbackGoogleAuth = axios.get('/auth/google/callback');
