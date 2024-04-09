import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { useState } from "react"
import { UserPlus } from 'phosphor-react-native'

export function FormularioUsuario({adicionar}){ 

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    function limparCampos(){
        setNome('')
        setEmail('')
        setTelefone('')
        setUsuario('')
        setSenha('')
    }

    return(
        <View style={estilos.conteiner}>

            <View style={estilos.conteinerCampos}>
                <TextInput
                    style={estilos.campo}
                    placeholder='Nome' 
                    placeholderTextColor='#fff'
                    onChangeText={setNome}
                    value={nome}
                />
                <TextInput 
                    style={estilos.campo}
                    placeholder='Email'
                    placeholderTextColor='#fff'
                    keyboardType='email-address'
                    onChangeText={setEmail}
                    value={email}      
                />
                <TextInput 
                    style={estilos.campo}
                    placeholder='Telefone'
                    placeholderTextColor='#fff'
                    keyboardType='phone-pad'                
                    onChangeText={setTelefone}
                    value={telefone}
                />
                <TextInput 
                    style={estilos.campo}
                    placeholder='Usuário'
                    placeholderTextColor='#fff'
                    keyboardType='default'                
                    onChangeText={setUsuario}
                    value={usuario}
                />      
                <TextInput 
                    style={estilos.campo}
                    placeholder='Senha'
                    placeholderTextColor='#fff'
                    keyboardType='phone-pad'                
                    onChangeText={setSenha}
                    value={senha}
                />                          
            </View>

            <TouchableOpacity 
                style={estilos.botao}
                onPress={ () => adicionar(nome, email, telefone, usuario, senha) }
            >
                <Text>
                    <UserPlus 
                        size={28} 
                        color="#fff"
                    />
                </Text>
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