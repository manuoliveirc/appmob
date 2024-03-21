import { ImageBackground, Text, TextInput, Image, View, Button } from "react-native"
import { styles } from './styles'
import { ButtonSlide, ButtonSlides } from "../../components/ButtonSlide"
import { IPagina } from "../../../App";

export function Login({ setPageI }: IPagina) {   
    const bg = require('../../assets/background.png')
    const iconLog = require('../../assets/perfil.png')
    const log = require('../../assets/log.png')
    const casa = require('../../assets/casa.png')
    const tarefa = require('../../assets/tarefa.png')

    return (
        <ImageBackground style={styles.container} source={bg} >
            <View style={styles.box1} >
                <Image style={styles.img} source={iconLog}></Image>
                <Text style={styles.text}>Login</Text>
                <View style={styles.email}>
                    <Text style={styles.email}>E-mail:</Text>
                    <TextInput style={styles.input}></TextInput>
                    <Text style={styles.senha}>Senha:</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>
            </View>
            <View style={styles.button}>
                <View style={styles.buttonSpace}>
                    <Image style={styles.img} source={log}></Image>
                    <ButtonSlide onPressI={() => setPageI(1)} cor={true} />
                </View>
                <View style={styles.buttonSpace}>
                    <Image style={styles.img} source={casa}></Image>
                    <ButtonSlide onPressI={() => setPageI(2)} cor={false} />
                </View>
                <View style={styles.buttonSpace}>
                    <Image style={styles.img} source={tarefa}></Image>
                    <ButtonSlide onPressI={() => setPageI(3)} cor={false} />
                </View>
            </View>
        </ImageBackground >
    )
}


export default Login;
