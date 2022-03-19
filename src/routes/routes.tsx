import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Home from '../Home';
import CadastrarMapas from '../CadastrarMapas';
import VisualizarMapas from '../VisualizarMapas';

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
      <Stack.Screen name="CadastrarMapas" component={CadastrarMapas} />
      <Stack.Screen name="VisualizarMapas" component={VisualizarMapas} />
    </Stack.Navigator>
  );
}

export default Routes;
