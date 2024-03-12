import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export function Usuario({nome,email,telefone, remover}){
    return(
        <View style={estilos.conteiner}>

            <View style={estilos.conteinerDados}>
                <Text style={estilos.item}>{nome}</Text>
                <Text style={estilos.item}>{email}</Text>
                <Text style={estilos.item}>{telefone}</Text>
            </View>

            <TouchableOpacity 
                style={estilos.botao}
                onPress={remover}
            >

                <Text style={estilos.textoBotao}>-</Text>
            </TouchableOpacity>

        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner:{
        flexDirection: 'row',
        borderStartColor:'#fff',
        margin: 5
    },
    conteinerDados:{
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10
    },
    botao:{
        justifyContent:'center',
        alignItems:'center',
        height:55,
        width:70,
        backgroundColor:'#3a5a40',
        marginStart: 10,
        borderRadius:5,
        fontSize: 16
    },
    textoBotao:{
        color: '#fff',
        fontSize:26
    },

})