import React, {useContext, useState, useEffect} from 'react';
import type {Node} from 'react';
import {MarkerType} from '../../models/Marker';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container, Input, SearchContainer, Title, ViewMap} from './styles';
import {PermissionsAndroid, Alert, StyleSheet} from 'react-native';
import {MarkertsContext} from '../../contexts/auth';

const VisualizarMapas: () => Node = () => {
  const {markers} = useContext(MarkertsContext);
  const [searchShop, setSearchShop] = useState<string>('');
  const [currentLatitude, setCurrentLatitude] = useState<number>(0);
  const [currentLongitude, setCurrentLongitude] = useState<number>(0);

  useEffect(() => {
    callLocation();
  }, []);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const currentLatitude = JSON.stringify(position.coords.latitude);
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const latitude = Number(currentLatitude);
        const longitude = Number(currentLongitude);
        setCurrentLatitude(latitude);
        setCurrentLongitude(longitude);
      },
      error => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  const callLocation = () => {
    const requestLocationPermission = async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getLocation();
      } else {
        Alert.alert('Localização negada', 'Permissão de localização negada.', [
          {
            text: 'OK',
          },
        ]);
      }
    };
    requestLocationPermission();
  };

  const filterMarkers = (marker: Marker, markerType: MarkerType) => {
    if (searchShop) {
      if (markerType.nome.toUpperCase().includes(searchShop.toUpperCase())) {
        return marker;
      }
    } else {
      return marker;
    }

    return null;
  };

  const renderMarkers = () =>
    markers.map((markerType: MarkerType) => {
      if (markerType.latitude && markerType.longitude) {
        const marker: Marker = (
          <Marker
            pinColor="#F43C30"
            key={markerType.nome}
            title={markerType.nome}
            description={markerType.descricao}
            coordinate={{
              latitude: Number(markerType.latitude),
              longitude: Number(markerType.longitude),
            }}
          />
        );

        return filterMarkers(marker, markerType);
      }

      return null;
    });

  return (
    <Container>
      <Title>Verifique aqui suas lojas cadastradas.</Title>
      <SearchContainer>
        <Input
          placeholder="Busque aqui uma loja pelo nome"
          placeholderTextColor="#bdc3c7"
          value={searchShop}
          onChangeText={(text: string) => setSearchShop(text)}
        />
        <Icon name="store-search" size={35} color="#06d6a0" />
      </SearchContainer>
      <ViewMap>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.mapStyle}
          showsCompass={false}
          showsUserLocation
          region={{
            latitude: currentLatitude,
            longitude: currentLongitude,
            latitudeDelta: 0.15,
            longitudeDelta: 0.121,
          }}>
          {renderMarkers()}
        </MapView>
      </ViewMap>
    </Container>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    width: '100%',
    height: '100%',
  },
});

export default VisualizarMapas;
