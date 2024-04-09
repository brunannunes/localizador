import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { UserMinus } from 'phosphor-react-native'

export function AmbienteEquipamento({statusOperacional, instrucoesSeguranca, contatoResponsavel, latitude ,longitude,excluir}){

    return(
        <View style={estilos.conteiner}>
            <View style={estilos.conteinerAmbiente}>
                <Text style={estilos.texto}>Status Operacional: {statusOperacional}</Text>
                <Text style={estilos.texto}>instruçoes de segurança: {instrucoesSeguranca}</Text>
                <Text style={estilos.texto}>contato do responsavel: {contatoResponsavel}</Text>
                <Text style={estilos.texto}>latitude: {latitude}</Text>
                <Text style={estilos.texto}>longitude: {longitude}</Text>
            </View>

            <TouchableOpacity
                style={estilos.botao}
                onPress={excluir}
            >
                <Text>-</Text>


            </TouchableOpacity>

        </View>
    )


}

const estilos = StyleSheet.create({
    conteiner: {
        flexDirection: 'row',
        margin: 5,
        borderRadius: 5,
    },
    conteinerAmbiente: {
        flex: 1,
        paddingStart: 10,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },    
    texto: {
        color: '#010228',
        fontSize: 16,
        fontWeight: '600'
    },
    botao: {
        width: 60,
        marginStart: 10,
        backgroundColor: '#590d22',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    
})