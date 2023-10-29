import { createStackNavigator } from '@react-navigation/stack';
import { Splashscreen } from '../screens/splashScreen/splashscreen';
export function AppNavigation() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="splash" component={Splashscreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
