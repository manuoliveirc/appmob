import { ImageBackground, View } from "react-native"
import { styles } from './styles'


export function Login() {
    const login = require('../../assets/background.png')
    return (
        <ImageBackground style={styles.container} source={login} >
            <View style = {styles.SquareShapeView}> 
            </View>
        </ImageBackground >
    )
}