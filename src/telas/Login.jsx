import { Usuarios } from "./Usuarios"
import { View, StyleSheet } from "react-native"
import { useState,useEffect  } from "react"
import { FormLogin } from "../components/FormuLogin"
import { Cabecalho } from "../components/Cabecalho"
import 'react-native-get-random-values'
 
export function Login() {
 
    //Login não funciona
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
                <Cabecalho titulo = "Login"/>
                <FormLogin logar={logarUsuario}/>
            </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
 
})
 