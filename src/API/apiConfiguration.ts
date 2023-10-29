import axios, { AxiosError, AxiosResponse } from 'axios';
import Constants from 'expo-constants';

const apiInstance = axios.create({
    baseURL: '',
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

apiInstance.interceptors.response.use(
    function (response: AxiosResponse) {
        return response;
    },
    function (error: AxiosError) {
        return error;
    },
);

export { apiInstance };
