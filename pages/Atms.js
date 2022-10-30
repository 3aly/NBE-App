import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import DrawerNav from '../components/DrawerNav';
import {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapView from 'react-native-maps';

const Atms = () => {
  const markers = [];

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 30.086115,
          longitude: 31.343725,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}>
        {/* {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />
        ))} */}

        <Marker
          coordinate={{latitude: 30.086115, longitude: 31.343725}}
          image={require('../assets/marker.png')}
          title="NBE ATM Here!"
        />
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
    width: 400,
    height: 400,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },

  overlay: {
    position: 'absolute',
    bottom: 70,
    left: 10,
    alignSelf: 'flex-start',
  },
});
