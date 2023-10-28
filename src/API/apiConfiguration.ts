import axios, { AxiosError, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';

const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
    headers: {
        Authorization: `Bearer ${Cookies.get(import.meta.env.VITE_API_KEY_NAME)}`,
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
