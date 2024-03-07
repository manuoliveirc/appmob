import { ImageBackground, Text, TextInput, View, Button } from "react-native"
import { styles } from './styles'


export function Login() {
    const login = require('../../assets/background.png')
    return (
        <ImageBackground style={styles.container} source={login} >
            <View style={styles.box1} >
                <Text style={styles.text}>Login</Text>
                <View style={styles.email}>
                    <Text style={styles.email}>E-mail:</Text>
                    <TextInput style={styles.input}></TextInput>
                    <Text style={styles.senha}>Senha:</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>
            </View>
        </ImageBackground >
    )
}


export default Login;
