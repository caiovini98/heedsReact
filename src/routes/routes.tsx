import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Home from '../components/Home';
import CadastrarMapas from '../components/CadastrarMapas';
import VisualizarMapas from '../components/VisualizarMapas';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CadastrarMapas"
        component={CadastrarMapas}
        options={{title: 'Cadastrar lojas'}}
      />
      <Stack.Screen
        name="VisualizarMapas"
        component={VisualizarMapas}
        options={{title: 'Visualizar lojas'}}
      />
    </Stack.Navigator>
  );
}

export default Routes;
