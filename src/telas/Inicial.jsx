
import {StyleSheet,View, Text} from 'react-native'
import { Cabecalho } from '../components/Cabecalho'
import { Botao } from '../components/Botao'

export function Inicial(){
    return(
        <View style={estilos.conteiner}>
            <Cabecalho
                titulo ="senai roberto mange"
                subtitulo="2DS"
                />
            <Botao texto = "usuario"/>
            <Botao texto = "sensores"/>
            <Botao texto = "sobre"/>
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner:{
      flex: 1,
    }
})
