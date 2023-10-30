import axios, { Axios } from 'axios';
import { useApiManager } from '../../API/apiManager';

interface SplashPageResponseInterface {
    code: number;
}
export async function checkLoginStatus(): Promise<SplashPageResponseInterface> {
    const checkAuth = useApiManager().getLoginStatus;

    const response = await checkAuth();

    if (axios.isAxiosError(response)) {
        return {
            code: 403,
        };
    }

    return {
        code: response.status,
    };
}
