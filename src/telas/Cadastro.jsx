import { Usuarios } from "./Usuarios"
import { View, StyleSheet } from "react-native"
import { useState,useEffect  } from "react"
import { FormCadasytro } from "../components/FormCadastro"
import { Cabecalho } from "../components/Cabecalho"
import 'react-native-get-random-values'
 
export function Cadastro() {
 
    //parte de cadastro não esta pronta
    const [listaUsuarios, setListaUsuarios] = useState([]);
 
    function logarUsuario(user, senha) {
        const usuarioLogado = listaUsuarios.find(usuario => usuario.user === user && usuario.senha === senha)
   
        if (usuarioLogado) {
            console.log(`Login feito! ${usuarioLogado.user}`)
        } else {
            console.log("Deu errado :(")
        }
    }
 
    return (
            <View style={styles.container}>
                <Cabecalho titulo = "Cadastrar"/>
                <FormCadasytro cadastrar={logarUsuario}/>
            </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
 
})
 