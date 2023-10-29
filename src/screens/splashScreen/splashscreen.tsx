import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Splashscreen() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image style={styles.splashImage} source={require('../../../assets/splash.png')} />
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    splashImage: {
        width: '40%',
        resizeMode: 'contain',
    },
});
