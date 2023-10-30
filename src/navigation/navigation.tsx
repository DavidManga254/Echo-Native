import { createStackNavigator } from '@react-navigation/stack';
import { Splashscreen } from '../screens/splashScreen/splashscreen';
import { LoginScreen } from '../screens/loginScreen/loginScreen';

export function AppNavigation() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="splashScreen"
                component={Splashscreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="loginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
