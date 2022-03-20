import React from 'react';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Title,
  Container,
  ButtonOptions,
  Footer,
  Label,
  ViewButton,
  ViewButtonOptions,
} from './styles';

function Home({navigation}) {
  return (
    <Container>
      <Title>Seja bem vindo, Usuário!</Title>

      <ViewButton>
        <ButtonOptions onPress={() => navigation.navigate('CadastrarMapas')}>
          <ViewButtonOptions>
            <Label>Cadastrar Mapas</Label>
            <IconIonicons name="md-create" size={35} color="#06D6A0" />
          </ViewButtonOptions>
        </ButtonOptions>
        <ButtonOptions onPress={() => navigation.navigate('VisualizarMapas')}>
          <ViewButtonOptions>
            <Label>Visualizar Mapas</Label>
            <Icon name="home-map-marker" size={35} color="#06D6A0" />
          </ViewButtonOptions>
        </ButtonOptions>
      </ViewButton>

      <Footer>Desenvolvido por Caio Vinicius - github.com/caiovini98</Footer>
    </Container>
  );
}

export default Home;
