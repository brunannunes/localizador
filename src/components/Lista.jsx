import { View, StyleSheet, Text, FlatList } from "react-native"
import { Usuario } from "./Usuario"


export function Lista(){

    const listaUsuarios = [
        {
            codigo: '1',
            nome: 'João',
            email: 'joao@gmail.com',
            telefone: '(19) 1234-5678'
        },
        {
            codigo: '2',
            nome: 'Maria',
            email: 'maria@gmail.com',
            telefone: '(19) 9876-5432'
        },
        {
            codigo: '3',
            nome: 'Rapahel',
            email: 'raphael@gmail.com',
            telefone: '(19) 4002-8922'
        },
        {
            codigo: '4',
            nome: 'Mario',
            email: 'mario@gmail.com',
            telefone: '(19) 4002-8922'
        },
        {
            codigo: '5',
            nome: 'Julio',
            email: 'julio@gmail.com',
            telefone: '(19) 4002-8922'
        },
        {
            codigo: '6',
            nome: 'Caio',
            email: 'caio@gmail.com',
            telefone: '(19) 4002-8922'
        },
    ]


    return(
        <View >
          <FlatList
            data={listaUsuarios}
            keyExtractor={(item) => {item.codigo}}
            renderItem={({item}) => (
                <Usuario
                nome={item.nome}
                email={item.email}
                telefone={item.telefone}
                />
                   
               
            )}
          />
        </View>
    )
}


const estilos = StyleSheet.create({
    texto:{
      color: '#000',
      marginTop: 20
    },
    item:{
        color:'#000'
    }
})