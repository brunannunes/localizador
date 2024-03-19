import { useState } from "react"
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
 
export function FormCadasytro({cadastrar}) {
 
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState ('')
 
    return (
        <View style={styles.container}>
           
            <View>
            <TextInput
                    style={styles.campo}
                    placeholderTextColor="#000"
                    keyboardType="default"
                    placeholder="Nome"
                    onChangeText={setNome}
                    value={usuario}
                />
                <TextInput
                    style={styles.campo}
                    placeholderTextColor="#000"
                    keyboardType="default"
                    placeholder="Usuário"
                    onChangeText={setUsuario}
                    value={usuario}
                />
                <TextInput
                    style={styles.campo}
                    placeholderTextColor="#000"
                    keyboardType="visible-password"
                    placeholder="Senha"
                    onChangeText={setSenha}
                    value={senha}
                />
            </View>
 
            <View style={styles.container_botao}>
                <TouchableOpacity
                style={styles.botao}
                onPress={() => logar(usuario, senha)}>
                    <Text style={styles.texto_botao}> Cadastrar </Text>
                </TouchableOpacity>
            </View>
 
        </View>
    )
}
 
const styles = StyleSheet.create({
 
    container: {
        paddingHorizontal: 4,
        paddingVertical: 10,
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center"
    },
 
    campo: {
        height: 50,
        width: 350,
        marginVertical: 5,
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "#000"
    },
 
    botao: {    
        backgroundColor: '#3a5a40',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 200,
        marginTop: 24,
        borderRadius: 12,
        borderColor: '#4f4f4f',
        borderWidth: 1
    },
 
    texto_botao: {
        color: "#fff"
    },
 
    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10
    },
 
    text_cadastro: {
        marginTop: 20
    }
 
})