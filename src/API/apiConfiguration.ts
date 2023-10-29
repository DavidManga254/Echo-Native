import axios, { AxiosError, AxiosResponse } from 'axios';
import Constants from 'expo-constants';
import { appConstants } from '../constants/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
const apiInstance = axios.create({
    baseURL: appConstants.apiBaseUrl,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});
apiInstance.interceptors.request.use(
    async (config) => {
        const requestData = {
            APP_JWT: await AsyncStorage.getItem(appConstants.APP_JWT),
        };
        config.data = requestData;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

apiInstance.interceptors.response.use(
    function (response: AxiosResponse) {
        return response;
    },
    function (error: AxiosError) {
        return error;
    },
);

export { apiInstance };
