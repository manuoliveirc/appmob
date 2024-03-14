import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles"
import React from "react";

interface IButton extends TouchableOpacityProps {
    onPressI: () => void
    cor?: boolean
    children?: React.ReactNode
}
    
export function ButtonSlide({ onPressI, cor }: IButton) {
    return (
        <TouchableOpacity style={cor ? styles.ball : styles.ballPress} onPress={onPressI} />
    )
}

export function ButtonSlides({ onPressI, children }: IButton) {
    return (
        <TouchableOpacity style={styles.buttonRegistrar} onPress={onPressI} >
            {children}
        </TouchableOpacity>
    )
}