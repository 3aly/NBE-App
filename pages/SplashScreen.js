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
import {useSelector} from 'react-redux';
import {dark, light} from '../infrastructure/theme/colors';
import {useEffect} from 'react';
const SplashScreen = ({navigation}) => {
  const {darkmode} = useSelector(state => state.theme);
  const {isLoggedIn} = useSelector(state => state.user);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('signin');
    }, 1000);
  }, []);
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: darkmode ? dark.bg : light.bg},
      ]}>
      <View>
        <Image
          source={
            darkmode
              ? require('../assets/biglogod.png')
              : require('../assets/biglogo.png')
          }
        />
      </View>
      <View>
        <Image
          source={
            darkmode
              ? require('../assets/logogreend.png')
              : require('../assets/logogreen.png')
          }
        />
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
