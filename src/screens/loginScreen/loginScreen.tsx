import { Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
export function LoginScreen() {
    const [securePassword, setSecurePassword] = useState<boolean>(true);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.form}>
                <TextInput
                    mode="outlined"
                    label={'email'}
                    style={styles.textInput}
                    left={<TextInput.Icon icon="email" />}
                />
                <TextInput
                    secureTextEntry={securePassword}
                    mode="outlined"
                    label={'password'}
                    left={
                        <TextInput.Icon
                            onTouchEnd={() => setSecurePassword(!securePassword)}
                            icon={securePassword ? 'eye' : 'eye-off'}
                        />
                    }
                    style={styles.textInput}
                />
                <View style={styles.centerView}>
                    <Text style={styles.text}>
                        Do not have an account? <Text style={styles.nestedText}>signup </Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    form: {
        width: '85%',
    },
    text: {
        color: 'black',
    },
    textInput: {
        marginBottom: '5%',
    },
    nestedText: {
        color: 'blue',
    },
    centerView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
