import React from 'react';
import {StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import AirPay from '../AirPay/AirPay';
import {Otp} from '../Otp/Otp';
const Stack = createStackNavigator();
export const AirPayStack = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="airpay" component={AirPay} />
      </Stack.Navigator>
    </>
  );
};
