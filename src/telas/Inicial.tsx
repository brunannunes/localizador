import {StyleSheet, View, ImageBackground} from 'react-native'
import {Cabecalho} from '../componentes/Cabecalho'
import { Botao } from '../componentes/Botao';


export const Inicial = () => {
  return (
    <View style={estilos.conteiner}>

      <Cabecalho titulo="Localizador"/>

        
      <ImageBackground
                style={estilos.fundo}
                source={require('../../assets/mapa.png')}
            >
                <Botao texto='Teste 01' />
                <Botao texto='Teste 02' />
                <Botao texto='Teste 03' />

            </ImageBackground>

    </View>
  );
}

const estilos = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: '#080a0c'
  },
  fundo: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    resizeMode: 'cover'
},
});

