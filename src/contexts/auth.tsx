import React, {createContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export const MarkertsContext = createContext({});

export default function MarkertProvider({children}) {
  const [markerts, setMarkerts] = useState<Array<any>>([]);

  function addMarkerts(longitude: any, latitude: any) {
    const markertsObject: any = {
      latitude: latitude,
      longitude: longitude,
    };

    setMarkerts((arrayMarkert: any) => [...arrayMarkert, markertsObject]);
  }

  return (
    <MarkertsContext.Provider value={{markerts, addMarkerts}}>
      {children}
    </MarkertsContext.Provider>
  );
}
