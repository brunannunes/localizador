import { View, StyleSheet } from "react-native"
import { Cabecalho } from "../components/Cabecalho"
import { Formulario } from "../components/Formulario"
import { Lista } from "../components/Lista"
import { useState } from "react"
import 'react-native-get-random-values'
import {v4 as uuid} from 'uuid'
import { Usuario } from "../components/Usuario"

export function Usuarios(){

    const [listaUsuarios, setListaUsuarios] = useState([]);

    const adicionarUsuario=(nome,email,telefone)=>{

        let novoUsuario = {
            codigo:  uuid(),
            nome: nome,
            email: email,
            telefone: telefone,
        }

        

        setListaUsuarios([...listaUsuarios, novoUsuario])
        
        console.log(novoUsuario)
        

    }

    const removerUsuario = codigo => {
        setListaUsuarios(
            listaUsuarios.filter(usuario => usuario.codigo !== codigo)
        )
    }

    return(
        <View style={estilos.conteiner}>
            <Cabecalho titulo ="usuarios"/>

            <Formulario adicionar={adicionarUsuario} />

            <Lista 
            colecao={listaUsuarios}
            remover={removerUsuario}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner:{
        flex: 1,
      },
})