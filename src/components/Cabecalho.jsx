import { View, StyleSheet, Text} from "react-native"


export const Cabecalho = ({titulo, subtitulo}) => {
    return(
        <View style={estilos.conteiner}>
            <Text style={estilos.texto}>{titulo}</Text>
            <Text style={estilos.texto}>{subtitulo}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner:{
        backgroundColor: '#588157',
        alignItems: 'center',
        paddingVertical: 12
    },
    texto: {
        color: '#fff',
        fontSize:24,
        fontWeight:'300'

    }
})