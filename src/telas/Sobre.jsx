import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Cabecalho } from '../componentes/Cabecalho'

export function Sobre(){ 
  
    return(
        <View style={estilos.conteiner}>
            <Cabecalho titulo="Sobre" />
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#000',
    },
})