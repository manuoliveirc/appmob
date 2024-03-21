import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 350,
        height: 70,
        backgroundColor: '#b0e0e6',
        borderRadius: 15,
        marginBottom: 20,
    },
    text: {
        color: '#fff',
        fontSize: 24,
        padding: 10,
        margin: 8,
    },
    button: {
        flexDirection: 'row',
        paddingBottom: 20,
        alignItems: 'center',
    },
    buttonSpace: {
        paddingHorizontal: 15,
    },
    img: {
        height: 50,
        width: 40,
        marginTop: 20,
        marginLeft: 10,
    },

})