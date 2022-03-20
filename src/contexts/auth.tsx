import React, {createContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {MarkerType} from '../models/Marker';

export const MarkertsContext = createContext({});

export default function MarkertProvider({children}) {
  const [markers, setMarkers] = useState<MarkerType[]>([]);

  function addMarkerts(objMarker: MarkerType) {
    setMarkers((arrayMarker: MarkerType[]) => [...arrayMarker, objMarker]);
  }

  return (
    <MarkertsContext.Provider value={{markers, addMarkerts}}>
      {children}
    </MarkertsContext.Provider>
  );
}
