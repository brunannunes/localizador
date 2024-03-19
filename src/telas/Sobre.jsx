
import {StyleSheet,View, Text} from 'react-native'
import { Cabecalho } from '../components/Cabecalho'
import { Botao } from '../components/Botao'

export function Sobre(){
    return(
        <View style={estilos.conteiner}>
            <Cabecalho
                titulo ="Sobre"
                />
           
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner:{
      flex: 1,
    }
})