import { View, StyleSheet, Text, FlatList } from "react-native"
import { Usuario } from "./Usuario"


export function Lista({colecao, remover}){


    return(
        <View >
          <FlatList
            data={colecao}
            keyExtractor={item => item.codigo}
            renderItem={({item}) => (
                <Usuario
                nome={item.nome}
                usuario={item.usuario}
                senha={item.senha}
                remover = {()=>remover(item.codigo)}
                />
                   
               
            )}
            ListEmptyComponent={() =>(
                <Text style={estilos.texto}>nenhum usuario cadastrado</Text>
            )}

          />
        </View>
    )
}


const estilos = StyleSheet.create({
    texto:{
      color: '#000',
      marginTop: 20,
      textAlign: 'center'
    },
    item:{
        color:'#000'
    }
})