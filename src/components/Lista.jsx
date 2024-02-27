import { View, StyleSheet, Text } from "react-native"


export function Lista(){
    return(
        <View >
           <Text style={estilos.texto}>Lista</Text>
        </View>
    )
}


const estilos = StyleSheet.create({
    texto:{
      color: '#000',
      marginTop: 20
    }
})