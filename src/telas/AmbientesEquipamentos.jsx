
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useState } from 'react'
import { Cabecalho } from '../componentes/Cabecalho'
import { FormularioAmbienteEquipamento } from '../componentes/FormularioAmbienteEquipamento'
import { ListaAmbienteEquipamento } from '../componentes/ListaAmbienteEquipamento'
import uuid from 'react-native-uuid'

export function AmbientesEquipamentos(){

    const [equipamento, setEquipamento] = useState([])

    function adicionarEquipamento(statusOperacional, instrucoesSeguranca,contatoResponsavel,latitude,longitude){

        let novoEquipamento = {
            codigo: uuid.v4(),
            statusOperacional:statusOperacional,
            instrucoesSeguranca:instrucoesSeguranca,
            contatoResponsavel:contatoResponsavel,
            latitude:latitude,
            longitude:longitude
        }

        setEquipamento([...equipamento, novoEquipamento])
        console.log(novoEquipamento)
    }

    function removerEquipamento(codigo){
        setEquipamento(equipamento.filter(
            equipamento => equipamento.codigo !== codigo
        ))
    }

    return(
        <View style={estilos.conteiner}>
            <Cabecalho
                titulo="Cadastro de equipamento"
            />

            <FormularioAmbienteEquipamento
                adicionar={adicionarEquipamento}
            
            />

            <ListaAmbienteEquipamento
                colecao={equipamento}
                remover={removerEquipamento}
            />
        </View>
    )

}

const estilos = StyleSheet.create({
    conteiner: {
      flex: 1,
      backgroundColor: '#080a0c'
    },
  });