
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useState } from 'react'
import { Cabecalho } from '../componentes/Cabecalho'
import { Formulario } from '../componentes/FormularioUsuario'
import uuid from 'react-native-uuid'

export function Cadastro(){ 

    const [codigo, setCodigo] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    function adicionarUsuario(nome, email, telefone, usuario, senha){

        setCodigo(uuid.v4())
        setNome(nome)
        setEmail(email)
        setTelefone(telefone)
        setUsuario(usuario)
        setSenha(senha)
    }

    return(
        <>
            <Cabecalho titulo="Cadastro" />  
            <View style={estilos.conteiner}>

                <Formulario 
                    adicionar={adicionarUsuario}
                />  
  
            </View>
        </>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    campo: {
        height: 50,
        width: 300,
        backgroundColor: '#590d22',
        color: '#a9d6e5',
        marginVertical: 5,
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
    botao: {
        height: 50,
        width: 300,   
        backgroundColor: '#590d22',       
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,    
        marginVertical: 20,  
    },
    textoBotao: {
        color: '#a9d6e5',
        fontSize: 16,
    },
    link: {
        width: 300,
        alignItems: 'flex-start'
    },
    textoLink: {
        color: '#a9d6e5',
        fontSize: 16,
    },
    logo: {
        height: 125,
        width: 125,
        marginTop: -175,
        marginBottom: 50
    }    
})