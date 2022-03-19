import React, {useContext} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';
import {MarkertsContext} from '../contexts/auth';

const CadastrarMapas: () => Node = () => {
  const {addMarkerts} = useContext(MarkertsContext);
  return (
    <SafeAreaView>
      <Text>Bem vindo, CADASTRAR MAPA.</Text>
      <TouchableOpacity onPress={() => addMarkerts('Ola', 'EU AMO VAUÇUIRRR')}>
        <Text style={{color: '#000'}}>CLICA</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

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

export default CadastrarMapas;
