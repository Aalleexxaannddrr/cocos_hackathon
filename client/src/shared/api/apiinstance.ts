import axios, { AxiosError, AxiosResponse, HttpStatusCode } from 'axios';

const onSuccess = (response: AxiosResponse): AxiosResponse => response;

const onError = async (error: AxiosError): Promise<AxiosError> => {
    if (error.request.status !== HttpStatusCode.Unauthorized) {
        throw error;
    }
};

export const getApiInstance = () => {
    const instance = axios.create({
        headers: { ['Accept']: 'application/json, text/plain' },
    });
    const token = localStorage.getItem('accessToken');
    if (token) {
        instance.defaults.headers.common['Authorization'] = `Token ${token}`;
    }
    instance.interceptors.response.use(onSuccess, onError);
};
