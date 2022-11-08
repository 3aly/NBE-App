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
import Finish from './src/pages/finish';
import SignIn from './src/pages/SignIn';
import SplashScreen from './src/pages/SplashScreen';

import {createStackNavigator} from '@react-navigation/stack';
import DrawerNav from './src/components/DrawerNav';
import SignUp from './src/pages/SignUp';
import {Provider} from 'react-redux';
import {store} from './src/utils/Redux/store/store';

const AuthStack = createStackNavigator();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name="Splash" component={SplashScreen} />

            <AuthStack.Screen name="signin" component={SignIn} />
            <AuthStack.Screen name="signup" component={SignUp} />

            <AuthStack.Screen name="finish" component={Finish} />
            <AuthStack.Screen name="all" component={DrawerNav} />
          </AuthStack.Navigator>
        </NavigationContainer>
      </Provider>
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
