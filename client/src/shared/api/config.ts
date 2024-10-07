export const apiUrl = import.meta.env.DEV ? 'localhost:8080' : 'https://server';
export const getApiUrl = (endpoint: string) => apiUrl + endpoint;
export const accessTokenStorage = 'accessToken';
