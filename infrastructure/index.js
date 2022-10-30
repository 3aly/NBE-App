import {View, Text} from 'react-native';
import React from 'react';
import {TabNavigator} from './app.navigator';
import DrawerNav from '../components/DrawerNav';

export const Nav = ({navigation}) => {
  return (
    <>
      <Text
        onPress={() => {
          navigation.navigate('signin');
        }}>
        before
      </Text>
      <DrawerNav />
    </>
  );
};
