import React, {useContext, useState} from 'react';
import type {Node} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {MarkertsContext} from '../../contexts/auth';
import {MarkerType} from '../../models/Marker';

const CadastrarMapas: () => Node = () => {
  const {addMarkerts} = useContext(MarkertsContext);
  const [nome, setNome] = useState<string>('');
  const [descricao, setDescricao] = useState<string>('');
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  const cadastrarMarker = () => {
    if (nome === '' || descricao === '') {
      alert('Por favor, digite um nome ou descrição.');
      return;
    }

    const markers: MarkerType = {
      nome: nome,
      descricao: descricao,
      latitude: latitude,
      longitude: longitude,
    };
    addMarkerts(markers);
  };

  return (
    <SafeAreaView>
      <Text style={{color: '#000'}}>
        Cadastre um novo endereço de loja abaixo
      </Text>
      <Text>Nome da loja</Text>
      <TextInput
        onChangeText={(text: string) => setNome(text)}
        style={{
          width: '100%',
          height: 40,
          backgroundColor: 'white',
          borderRadius: 20,
          paddingLeft: 10,
          color: 'black',
        }}
      />

      <Text>Descrição breve</Text>
      <TextInput
        onChangeText={(text: string) => setDescricao(text)}
        style={{
          width: '100%',
          height: 70,
          backgroundColor: 'white',
          borderRadius: 20,
          paddingLeft: 10,
          color: 'black',
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Latitude</Text>
        <TextInput
          onChangeText={(text: number) => setLatitude(text)}
          keyboardType="numeric"
          style={{
            width: '25%',
            height: 40,
            backgroundColor: 'white',
            borderRadius: 20,
            paddingLeft: 10,
            color: 'black',
          }}
        />

        <Text>Longitude</Text>
        <TextInput
          onChangeText={(text: number) => setLongitude(text)}
          keyboardType="numeric"
          style={{
            width: '25%',
            height: 40,
            backgroundColor: 'white',
            borderRadius: 20,
            paddingLeft: 10,
            color: 'black',
          }}
        />
      </View>
      <Text>HeedsAPP</Text>
      <Icon name="store-marker" size={80} color="#06D6A0" />
      <TouchableOpacity onPress={cadastrarMarker}>
        <Text style={{color: '#000'}}>CLICA</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CadastrarMapas;
