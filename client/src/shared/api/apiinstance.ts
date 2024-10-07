import axios, { AxiosError, AxiosResponse, HttpStatusCode } from 'axios';
import { accessTokenStorage, getApiUrl } from './config';

enum Endpoints {
    refresh = '/refresh',
}

const onSuccess = (response: AxiosResponse): AxiosResponse => response;

const errorProcessing = async (error: AxiosError) => {
    console.error(error);

    let token = localStorage.getItem(accessTokenStorage);
    try {
        const refreshRes: AxiosResponse<string> = await axios.get(getApiUrl(Endpoints.refresh));
        if (refreshRes.status !== HttpStatusCode.Ok || !refreshRes.data) {
            location.href = '/';
            return error;
        } else {
            localStorage.setItem(accessTokenStorage, refreshRes.data);
            token = refreshRes.data;
        }
    } catch (err) {
        console.error(err);
        location.href = '/';
        return null;
    }
    if (token) {
        const originalRequest = error.config;
        if (originalRequest?.headers) {
            originalRequest.headers['Authorization'] = `Token ${token}`;
            return axios(originalRequest);
        }
    }
    location.href = '/';
    return error;
};

let isErrorProcessing = false;

const onError = async (error: AxiosError): Promise<AxiosError | AxiosResponse | null> => {
    if (error.request.status !== HttpStatusCode.Unauthorized) {
        throw error;
    }
    if (isErrorProcessing) {
        await new Promise((resolve) => {
            setInterval(() => {
                if (!isErrorProcessing) {
                    resolve(true);
                }
            }, 500);
        });
        const token = localStorage.getItem(accessTokenStorage);
        if (!token) {
            location.href = '/';
        }
        const originalRequest = error.config;
        if (originalRequest?.headers) {
            originalRequest.headers['Authorization'] = `Token ${token}`;
            return axios(originalRequest);
        }
        return null;
    }
    isErrorProcessing = true;
    const result = await errorProcessing(error);
    isErrorProcessing = false;
    return result;
};

export const getAuthorizedApiInstance = () => {
    const instance = axios.create({
        headers: { ['Accept']: 'application/json, text/plain' },
    });
    const token = localStorage.getItem(accessTokenStorage);
    if (token) {
        instance.defaults.headers.common['Authorization'] = `Token ${token}`;
    }
    instance.interceptors.response.use(onSuccess, onError);
};

export const getApiInstance = () => {
    const instance = axios.create({
        headers: { ['Accept']: 'application/json, text/plain' },
    });
    instance.interceptors.response.use(onSuccess, onError);
};
