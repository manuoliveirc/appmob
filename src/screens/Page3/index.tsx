import { ImageBackground, Text, TextInput, Image, View } from "react-native"
import { styles } from './styles'
import { ButtonSlide, ButtonSlides } from "../../components/ButtonSlide"
import { IPagina } from "../../../App";


export function Page3({ setPageI }: IPagina) {
    const bg = require('../../assets/background.png')
    const log = require('../../assets/log.png')
    const casa = require('../../assets/casa.png')
    const tarefa = require('../../assets/tarefa.png')

    return (
        <ImageBackground style={styles.container} source={bg} >
            <Text style={styles.text}> Adicionar nova tarefa</Text>
            <TextInput style={styles.input}></TextInput>
            <View style={styles.button}>
                <View style={styles.buttonSpace}>
                    <Image style={styles.img} source={log}></Image>
                    <ButtonSlide onPressI={() => setPageI(1)} cor={false} />
                </View>
                <View style={styles.buttonSpace}>
                    <Image style={styles.img} source={casa}></Image>
                    <ButtonSlide onPressI={() => setPageI(2)} cor={true} />
                </View>
                <View style={styles.buttonSpace}>
                    <Image style={styles.img} source={tarefa}></Image>
                    <ButtonSlide onPressI={() => setPageI(3)} cor={false} />
                </View>
            </View>
        </ImageBackground>
    )
}