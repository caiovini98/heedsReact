import React from 'react';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';
import {Title, Container} from './styles';

function Home({navigation}) {
  return (
    <Container
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <Title>Seja bem vindo, Usuário!</Title>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('CadastrarMapas')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: '#06D6A0'}}>Cadastrar Mapas</Text>
            <IconIonicons name="md-create" size={35} color="#06D6A0" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('VisualizarMapas')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: '#06D6A0'}}>Visualizar Mapas</Text>
            <Icon name="home-map-marker" size={35} color="#06D6A0" />
          </View>
        </TouchableOpacity>
      </View>

      <Text style={{color: '#06D6A0'}}>
        Desenvolvido por Caio Vinicius - github.com/caiovini98
      </Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Home;
