import React, {createContext, useState} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MarkerType} from '../models/Marker';

export const MarkertsContext = createContext({});

export default function MarkertProvider({children}) {
  const navigation = useNavigation();
  const [markers, setMarkers] = useState<MarkerType[]>([]);

  function addMarkerts(objMarker: MarkerType) {
    setMarkers((arrayMarker: MarkerType[]) => [...arrayMarker, objMarker]);
    setTimeout(() => {
      Alert.alert(
        'Loja cadastrada',
        'Sua loja foi cadastrada. Vá para tela de visualização para poder vê-las.',
        [
          {
            text: 'Cancelar',
            onPress: () => console.log('Botão de cancelado pressionado'),
            style: 'cancel',
          },
          {text: 'Ok', onPress: () => console.log('OK pressionado')},
        ],
      );
      navigation.goBack();
    }, 1000);
  }

  return (
    <MarkertsContext.Provider value={{markers, addMarkerts}}>
      {children}
    </MarkertsContext.Provider>
  );
}
