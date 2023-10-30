import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import { checkLoginStatus } from './splashScreenViewModel';
import { appConstants } from '../../constants/constants';

export function Splashscreen(props: { navigation: any }) {
    useEffect(() => {
        (async () => {
            console.log('sending request');
            checkLoginStatus().then((response) => {
                if (response.code === appConstants.unauthorised) {
                    props.navigation.push('loginScreen');
                } else if (response.code === appConstants.authorised) {
                }
            });
        })();
    }, []);
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
