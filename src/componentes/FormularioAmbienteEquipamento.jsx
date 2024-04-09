import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { useState } from "react"

export function FormularioAmbienteEquipamento({adicionar}){

    const [statusOperacional, setStatusOperacional] = useState('')
    const [instrucoesSeguranca, setInstrucoesSeguranca] = useState('')
    const [contatoResponsavel, setContatoResponsavel] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    return(
        <View style={estilos.conteiner}>

            <View style={estilos.conteinerCampos}>
                <TextInput
                    style={estilos.campo}
                    placeholder='Status Operacional'
                    placeholderTextColor='#fff'
                    onChangeText={setStatusOperacional}
                    value={statusOperacional}
                />
                 <TextInput
                    style={estilos.campo}
                    placeholder='Instruções de segurança'
                    placeholderTextColor='#fff'
                    onChangeText={setInstrucoesSeguranca}
                    value={instrucoesSeguranca}
                />
                 <TextInput
                    style={estilos.campo}
                    placeholder='Contato do responsavel'
                    placeholderTextColor='#fff'
                    onChangeText={setContatoResponsavel}
                    value={contatoResponsavel}
                />
                 <TextInput
                    style={estilos.campo}
                    placeholder='Latitude'
                    placeholderTextColor='#fff'
                    onChangeText={setLatitude}
                    value={latitude}
                />
                 <TextInput
                    style={estilos.campo}
                    placeholder='Longitude'
                    placeholderTextColor='#fff'
                    onChangeText={setLongitude}
                    value={longitude}
                />
            </View>

            <TouchableOpacity
                style={estilos.botao}
                onPress={() => adicionar(statusOperacional,instrucoesSeguranca,contatoResponsavel,latitude,longitude)}
            >
                <Text>+</Text>

            </TouchableOpacity>

        </View>
    )
}


const estilos = StyleSheet.create({
    conteiner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginVertical: 10,
    },
    conteinerCampos: {
        flex: 1,
    },
    campo: {
        height: 50,
        backgroundColor: '#590d22',
        color: '#fff',
        marginVertical: 5,
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
    botao: {
        width: 60,
        height: 290,
        marginStart: 10,
        backgroundColor: '#590d22',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
  });