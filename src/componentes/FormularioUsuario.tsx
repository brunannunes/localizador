import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import { useEffect } from 'react';
import { Feather } from '@expo/vector-icons'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../componentes/AuthContext';


export const FormularioUsuario: React.FC = () => { 
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const navigation = useNavigation();
    const { token, setToken } = useAuth(); 

    const obterToken = async () => {
        try {
            const response = await axios.post('http://10.0.2.2:8000/api/token', {
                username: "brunanunes",
                password: "123"
            });
            const token = response.data.access;
            console.log(token);
            setToken(token);
        } catch (error) {
            console.error('Erro ao obter token:', error);
        }
    };

    useEffect(() => {
        obterToken();
    }, []);


    const fazerCadastro = async () => {
        if (!token) {
            console.error('Token não disponível');
            return;
        }

        try {
            const response = await axios.post(
                'http://10.0.2.2:8000/api/create_user',
                {
                    username: usuario,
                    password: senha
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            const token2 = response.data.access;
            console.log('Login bem-sucedido:', token2);
            setToken(token); // Atualiza o token no contexto
            navigation.navigate('rotasTab');
        } catch (error) {
            console.error('Erro de cadastro:', error);
        }
    };
    return (
        <View style={estilos.conteiner}>
            <View style={estilos.conteinerCampos}>
                <TextInput
                    style={estilos.campo}
                    placeholder="Usuário"
                    placeholderTextColor="#01233c"
                    keyboardType="default"
                    onChangeText={setUsuario}
                    value={usuario}
                />
                <TextInput
                    style={estilos.campo}
                    placeholder="Senha"
                    placeholderTextColor="#01233c"
                    secureTextEntry={true}
                    onChangeText={setSenha}
                    value={senha}
                />
            </View>
            <TouchableOpacity style={estilos.botao} onPress={fazerCadastro}>
                <Feather name="user-plus" size={24} color="#dee2e6" />
            </TouchableOpacity>
        </View>
    );
};

const estilos = StyleSheet.create({
    conteiner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginVertical: 10,
    },
    conteinerCampos: {
        flex: 1,
    },
    campo: {
        height: 50,
        backgroundColor: '#dee2e6',
        color: '#01233c',
        marginVertical: 5,
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
    botao: {
        width: 60,
        height: 290,
        marginStart: 10,
        backgroundColor: '#4f030a',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
  });