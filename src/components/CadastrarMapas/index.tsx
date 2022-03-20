import React, {useContext, useState} from 'react';
import type {Node} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ViewButton,
  Title,
  Input,
  Container,
  InputDescricao,
  ViewCoordenadas,
  InputCoordenadas,
  Label,
  ButtonCadastrar,
} from './styles';
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
    <Container>
      <Title>Cadastre um novo endereço de loja abaixo</Title>
      <Label>Nome da loja</Label>
      <Input onChangeText={(text: string) => setNome(text)} />

      <Label>Descrição breve</Label>
      <InputDescricao onChangeText={(text: string) => setDescricao(text)} />

      <ViewCoordenadas>
        <Label>Latitude</Label>
        <InputCoordenadas
          onChangeText={(text: number) => setLatitude(text)}
          keyboardType="numeric"
        />

        <Label>Longitude</Label>
        <InputCoordenadas
          onChangeText={(text: number) => setLongitude(text)}
          keyboardType="numeric"
        />
      </ViewCoordenadas>

      <ButtonCadastrar onPress={cadastrarMarker}>
        <ViewButton>
          <Icon name="store-marker" size={80} color="#06D6A0" />
          <Label>Cadastrar endereço</Label>
        </ViewButton>
      </ButtonCadastrar>
    </Container>
  );
};

export default CadastrarMapas;
