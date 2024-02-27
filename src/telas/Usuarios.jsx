import { View, StyleSheet } from "react-native"
import { Cabecalho } from "../components/Cabecalho"
import { Formulario } from "../components/Formulario"
import { Lista } from "../components/Lista"

export function Usuarios(){
    return(
        <View style={estilos.conteiner}>
            <Cabecalho titulo ="usuarios"/>
            <Formulario/>
            <Lista/>
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner:{
        flex: 1,
      },
})