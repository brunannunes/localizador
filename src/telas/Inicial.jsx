import {estilos} from './inicial'
import {View, Text} from 'react-native'

export function Inicial(){
    return(
        <View style={estilos.conteiner}>
            <Text style={estilos.texto}>Meu app</Text>
            <Text style={estilos.texto}>2DS</Text>
        </View>
    )
}