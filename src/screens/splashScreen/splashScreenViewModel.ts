import { useApiManager } from '../../API/apiManager';

interface SplashPageResponseInterface {
    code: number;
}
export async function checkLoginStatus(): Promise<SplashPageResponseInterface> {
    const checkAuth = useApiManager().getLoginStatus;

    const response = await checkAuth();

    console.log('ndo hili hapa', response);

    return {
        code: response.status,
    };
}
