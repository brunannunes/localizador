import { useState } from "react"
import { View, StyleSheet, Text, TextInput,  TouchableOpacity } from "react-native"


export function Formulario({adicionar}){

    const [nome, setNome] =  useState('')
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    return(
        <View style={estilos.container}>
            <View style={estilos.containerCampo}>
                <TextInput
                    style = {estilos.campo}
                    placeholder="Nome"
                    placeholderTextColor='#000'
                    keyboardType="default"
                    onChangeText={setNome}
                    value={nome}
                />


                <TextInput
                    style = {estilos.campo}
                    placeholder="Usuario"
                    placeholderTextColor='#000'
                    keyboardType='email-address'
                    onChangeText={setUsuario}
                    value={usuario}
                 />


                <TextInput
                    style = {estilos.campo}
                    placeholder="Senha"
                    placeholderTextColor='#000'
                    keyboardType='phone-pad'
                    onChangeText={setSenha}
                    value={senha}
                />
            </View>
           
           <TouchableOpacity style={estilos.botao}
                onPress={() => adicionar(nome,usuario,senha)}
           >
                <Text style={estilos.texto}>+</Text>
           </TouchableOpacity>
        </View>
    )
}


const estilos = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginVertical: 10
    },
    containerCampo:{
        flex:1
    },
    campo:{
      height:50,
      backgroundColor:'#e5e5e5',
      color: '#000',
      marginVertical: 5,
      padding:10,
      borderRadius:5,
      fontSize: 16
    },
  
    botao:{
        justifyContent:'center',
        alignItems:'center',
        height:170,
        width:60,
        backgroundColor:'#3a5a40',
        marginVertical: 5,
        padding:10,
        borderRadius:5,
        fontSize: 16
    },
    texto:{
        color: '#fff',
    }
})