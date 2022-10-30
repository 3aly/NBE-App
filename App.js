/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import React from 'react';
import {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  Image,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Finish from './pages/finish';
import SignIn from './pages/SignIn';
import SplashScreen from './pages/SplashScreen';
import {Nav} from './infrastructure/index';
import {AppNavigator} from './infrastructure/app.navigator';

import {createStackNavigator} from '@react-navigation/stack';
import {useState} from 'react';
import FingerprintScreen from './pages/FingerprintScreen';
const AuthStack = createStackNavigator();

const App = () => {
  console;
  return (
    <>
      <NavigationContainer>
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
          <AuthStack.Screen name="Splash" component={SplashScreen} />
          <AuthStack.Screen name="FP" component={FingerprintScreen} />

          <AuthStack.Screen name="signin" component={SignIn} />
          <AuthStack.Screen name="finish" component={Finish} />
          <AuthStack.Screen name="all" component={Nav} />
        </AuthStack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    color: 'white',
  },
});

export default App;
