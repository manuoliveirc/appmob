import { ImageBackground, Text, TextInput, Image, View } from "react-native"
import { styles } from './styles'
import { ButtonSlide, ButtonSlides } from "../../components/ButtonSlide"
import { IPagina } from "../../../App";


export function Page2({ setPageI }: IPagina) {
    const bg = require('../../assets/background.png')
    return (
        <ImageBackground style={styles.container} source={bg} >
            <Text style={styles.text}>Visualizar tarefas - Concluir pendências</Text>
            <View style={styles.box} >
            </View>
            <View style={styles.box} >
            </View>
            <View style={styles.box} >
            </View>
            <View style={styles.box} >
            </View>
            <View style={styles.button}>
                <View style={styles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(1)} cor={false} />
                </View>
                <View style={styles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(2)} cor={true} />
                </View>
                <View style={styles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(3)} cor={false} />
                </View>
            </View>
        </ImageBackground>
    )
}