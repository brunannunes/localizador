import { StyleSheet, TouchableOpacity, Text } from "react-native"
import {useState} from 'react'

export const Botao = ({texto}) => {

    const [cliques, setCliques] = useState(0)

    const contarCliques = () => {
       setCliques(cliques +1)
    }

    return(
        <TouchableOpacity 
        style={estilos.conteiner}
        onPress={contarCliques}
        >
           <Text style={estilos.texto}>{texto} {cliques}</Text> 
        </TouchableOpacity>
    )
}


const estilos = StyleSheet.create({
    conteiner:{
       backgroundColor: '#31572c',
       alignItems: 'center',
       justifyContent: 'center',
       height: 50,
       width: 150,
       marginTop: 24,
       marginStart:24,
       borderRadius: 12,
       borderColor: '#414833',
       borderWidth:1
    },
    texto: {
       color:'#fff',
       fontSize:20

    }
})