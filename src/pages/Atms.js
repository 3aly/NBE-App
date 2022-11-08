import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import DrawerNav from '../components/DrawerNav';
import {PROVIDER_GOOGLE, Marker, MapMarker} from 'react-native-maps';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {mapDarkStyke, mapStanderd} from '../utils/theme/colors';
import {useSelector} from 'react-redux';

const Atms = () => {
  const {darkmode} = useSelector(state => state.theme);

  const [position, setPosition] = useState({
    latitude: 30.105392,
    longitude: 31.405106,
    latitudeDelta: 0.0421,
    longitudeDelta: 0.0421,
  });
  const [atmLocations, setAtmLocations] = useState([]);

  const API_KEY = 'AIzaSyD68Tx4TDkX2sEUpAr6WyWo7jHQxRys3I4';
  const currentPos = `${position.latitude},${position.longitude}`;
  const URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${API_KEY}&location=${currentPos}&radius=5000&type=atm&keyword=NBE`;

  useEffect(() => {
    Geolocation.getCurrentPosition(pos => {
      console.log('get location');
      setPosition({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
    });
  }, []);
  console.log('after');

  useEffect(() => {
    console.log('get atms');
    fetch(URL)
      .then(data => {
        return data.json();
      })
      .then(jsonData => {
        setAtmLocations(jsonData.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [position]);

  const mapMarkers = () => {
    return atmLocations.map((atm, index) => (
      <Marker
        key={index}
        coordinate={{
          latitude: atm.geometry.location.lat,
          longitude: atm.geometry.location.lng,
        }}
        image={require('../assets/marker.png')}
        title={'NBE Atm Here!'}></Marker>
    ));
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={position}
        showsUserLocation={true}
        customMapStyle={darkmode ? mapDarkStyke : mapStanderd}>
        {mapMarkers()}
      </MapView>
      <View style={styles.overlay}>
        <Image source={require('../assets/googlelogo.png')} />
      </View>
    </View>
  );
};

export default Atms;
const styles = StyleSheet.create({
  map: {
    flex: 1,
    height: 800,
  },
  container: {
    flex: 1,
  },

  overlay: {
    position: 'absolute',
    bottom: 75,
    left: 10,
    alignSelf: 'flex-start',
  },
});
