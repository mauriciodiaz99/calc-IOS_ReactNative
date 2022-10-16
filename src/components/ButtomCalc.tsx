import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../themes/appTheme';

interface Props {
    texto:string;
    color?:string;
    ancho?:boolean;
    accion: ( numeroTexto: string ) => void;
}

export const ButtomCalc = ({ texto, color = '#2D2D2D', ancho = false, accion }: Props) => {
  return (
    <TouchableOpacity
        onPress={ () => accion( texto ) }
    >
        <View style={{ 
            ...styles.buttom ,
            backgroundColor: color,
            width: ( ancho ) ? 173 : 80
        }}>
        <Text style={{ 
            ...styles.buttomText,
            color: ( color === '#9B9B9B' ) ? 'black' : 'white'
        }}>{ texto }</Text>
    </View>
    </TouchableOpacity>
  )
}
