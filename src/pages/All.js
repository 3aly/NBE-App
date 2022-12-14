/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import Finish from './finish';
import SignIn from './SignIn';
import SplashScreen from './SplashScreen';
import {airpay, atms, beneficiaries, home, transfer} from '../utils/images';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarIcon: {focused: true, color: 'green', size: 50},
            tabBarStyle: {
              position: 'absolute',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              height: 80,
            },
          }}>
          <Tab.Screen
            name="SignIn"
            component={SignIn}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    backgroundColor: focused ? 'green' : '#F1F3FB',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: 16,
                    width: 70,
                    height: 70,
                  }}>
                  <Image
                    source={home}
                    style={{
                      tintColor: focused ? 'white' : '#B7B7B7',
                    }}
                  />
                  <Text
                    style={{
                      color: focused ? 'white' : '#B7B7B7',
                    }}>
                    Home
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Splash"
            component={SplashScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    backgroundColor: focused ? 'green' : '#F1F3FB',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: 16,
                    width: 70,
                    height: 70,
                  }}>
                  <Image
                    source={atms}
                    style={{
                      tintColor: focused ? 'white' : '#B7B7B7',
                    }}
                  />
                  <Text
                    style={{
                      color: focused ? 'white' : '#B7B7B7',
                    }}>
                    Atms
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Splasdsaash"
            component={SplashScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    backgroundColor: focused ? 'green' : '#F1F3FB',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: 16,
                    width: 70,
                    height: 70,
                  }}>
                  <Image
                    source={beneficiaries}
                    style={{
                      tintColor: focused ? 'white' : '#B7B7B7',
                    }}
                  />
                  <Text
                    style={{
                      color: focused ? 'white' : '#B7B7B7',
                    }}>
                    Benefits
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Finish"
            component={Finish}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    backgroundColor: focused ? 'green' : '#F1F3FB',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: 16,
                    width: 70,
                    height: 70,
                  }}>
                  <Image
                    source={transfer}
                    style={{
                      tintColor: focused ? 'white' : '#B7B7B7',
                    }}
                  />
                  <Text
                    style={{
                      color: focused ? 'white' : '#B7B7B7',
                    }}>
                    Transfer
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Finidssh"
            component={Finish}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    backgroundColor: focused ? 'green' : '#F1F3FB',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: 16,
                    width: 70,
                    height: 70,
                  }}>
                  <Image
                    source={airpay}
                    style={{
                      tintColor: focused ? 'white' : '#B7B7B7',
                    }}
                  />
                  <Text
                    style={{
                      color: focused ? 'white' : '#B7B7B7',
                    }}>
                    Air Pay
                  </Text>
                </View>
              ),
            }}
          />
        </Tab.Navigator>
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

export default Navigation;
