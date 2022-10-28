import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {
  StyledButton,
  StyledInput,
  ButtonContianer,
  Row,
  Column,
} from '../components/StyledComponents';
import React, {Component} from 'react';
import styled from 'styled-components';
import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';
const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Sign-in');
  }, 3000);
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/biglogo.png')} />
      </View>
      <View>
        <Image source={require('../assets/logogreen.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
