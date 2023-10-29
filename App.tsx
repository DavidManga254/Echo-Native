import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { AppNavigation } from './src/navigation/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
export default function App() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <AppNavigation />
            </NavigationContainer>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
