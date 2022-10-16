import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../themes/appTheme';
import { ButtomCalc } from '../components/ButtomCalc';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {    

    const {
        numeroAnterior,
        numero,
        limpiar,
        masmenos,
        delet,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular
    } = useCalculadora();

    return (
        <View style={ styles.calculadoraContainer }>
            {
                ( numeroAnterior !== '0' ) && (
                    <Text style={ styles.resultadoPequeno } >{ numeroAnterior }</Text>
                )
            }            
            
            <Text 
                style={ styles.resultado } 
                numberOfLines={ 1 }
                adjustsFontSizeToFit
            >
                { numero } 
            </Text>


            {/** Fila de Buttoms */}
            <View style={ styles.fila }>
                <ButtomCalc texto="C"   accion={ limpiar } color="#9B9B9B" />
                <ButtomCalc texto="+/-" accion={ masmenos } color="#9B9B9B" />
                <ButtomCalc texto="del" accion={ delet } color="#9B9B9B" />
                <ButtomCalc texto="/"   accion={ btnDividir } color="#FF9427" />
            </View>
            {/** Fila de Buttoms */}
            <View style={ styles.fila }>
                <ButtomCalc texto="7" accion={ armarNumero } />
                <ButtomCalc texto="8" accion={ armarNumero } />
                <ButtomCalc texto="9" accion={ armarNumero } />
                <ButtomCalc texto="X" accion={ btnMultiplicar } color="#FF9427" />
            </View>
            {/** Fila de Buttoms */}
            <View style={ styles.fila }>
                <ButtomCalc texto="4" accion={ armarNumero } />
                <ButtomCalc texto="5" accion={ armarNumero } />
                <ButtomCalc texto="6" accion={ armarNumero } />
                <ButtomCalc texto="-" accion={ btnRestar } color="#FF9427" />
            </View>
            {/** Fila de Buttoms */}
            <View style={ styles.fila }>
                <ButtomCalc texto="1" accion={ armarNumero } />
                <ButtomCalc texto="2" accion={ armarNumero } />
                <ButtomCalc texto="3" accion={ armarNumero } />
                <ButtomCalc texto="+" accion={ btnSumar } color="#FF9427" />
            </View>
            {/** Fila de Buttoms */}
            <View style={ styles.fila }>
                <ButtomCalc texto="0" accion={ armarNumero } ancho />
                <ButtomCalc texto="." accion={ armarNumero } />
                <ButtomCalc texto="=" accion={ calcular } color="#FF9427" />
            </View>
        </View>
    )
}