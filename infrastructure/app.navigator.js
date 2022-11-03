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
import Finish from '../pages/finish';
import SignIn from '../pages/SignIn';
import SplashScreen from '../pages/SplashScreen';
import Home from '../pages/Home';
import Transfer from '../pages/Transfer';
import AirPay from '../pages/AirPay';
import Atms from '../pages/Atms';
import Benfits from '../pages/Benfits';
import NavBar from '../components/DrawerNav';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const {langArabic} = useSelector(state => state.lang);

  return (
    <>
      <Tab.Navigator
        headerMode="none"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: {focused: true, color: 'green', size: 50},
          tabBarStyle: {
            position: 'absolute',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 80,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,

            elevation: 11,
          },
        }}>
        <Tab.Screen
          name="SignIn"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={[
                  styles.screen,
                  {backgroundColor: focused ? 'green' : '#F1F3FB'},
                ]}>
                <Image
                  source={require('../assets/home.png')}
                  style={{
                    tintColor: focused ? 'white' : '#B7B7B7',
                  }}
                />
                {langArabic ? (
                  <Text
                    style={{
                      color: focused ? 'white' : '#B7B7B7',
                    }}>
                    الرئيسية
                  </Text>
                ) : (
                  <Text
                    style={{
                      color: focused ? 'white' : '#B7B7B7',
                    }}>
                    Home
                  </Text>
                )}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Atms"
          component={Atms}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={[
                  styles.screen,
                  {backgroundColor: focused ? 'green' : '#F1F3FB'},
                ]}>
                <Image
                  source={require('../assets/atms.png')}
                  style={{
                    tintColor: focused ? 'white' : '#B7B7B7',
                  }}
                />
                {langArabic ? (
                  <Text
                    style={{
                      color: focused ? 'white' : '#B7B7B7',
                    }}>
                    الصراف الالي
                  </Text>
                ) : (
                  <Text
                    style={{
                      color: focused ? 'white' : '#B7B7B7',
                    }}>
                    Atms
                  </Text>
                )}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Benfits"
          component={Benfits}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={[
                  styles.screen,
                  {backgroundColor: focused ? 'green' : '#F1F3FB'},
                ]}>
                <Image
                  source={require('../assets/beneficiaries.png')}
                  style={{
                    tintColor: focused ? 'white' : '#B7B7B7',
                  }}
                />
                {langArabic ? (
                  <Text
                    style={{
                      color: focused ? 'white' : '#B7B7B7',
                    }}>
                    المستفيدون
                  </Text>
                ) : (
                  <Text
                    style={{
                      color: focused ? 'white' : '#B7B7B7',
                    }}>
                    Benfits
                  </Text>
                )}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Transfer"
          component={Transfer}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={[
                  styles.screen,
                  {backgroundColor: focused ? 'green' : '#F1F3FB'},
                ]}>
                <Image
                  source={require('../assets/transfer.png')}
                  style={{
                    tintColor: focused ? 'white' : '#B7B7B7',
                  }}
                />
                {langArabic ? (
                  <Text
                    style={{
                      color: focused ? 'white' : '#B7B7B7',
                    }}>
                    تحويل
                  </Text>
                ) : (
                  <Text
                    style={{
                      color: focused ? 'white' : '#B7B7B7',
                    }}>
                    Transfer
                  </Text>
                )}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="AirPay"
          component={AirPay}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={[
                  styles.screen,
                  {backgroundColor: focused ? 'green' : '#F1F3FB'},
                ]}>
                <Image
                  source={require('../assets/airpay.png')}
                  style={{
                    tintColor: focused ? 'white' : '#B7B7B7',
                  }}
                />
                {langArabic ? (
                  <Text
                    style={{
                      color: focused ? 'white' : '#B7B7B7',
                    }}>
                    الدفع الهوائي
                  </Text>
                ) : (
                  <Text
                    style={{
                      color: focused ? 'white' : '#B7B7B7',
                    }}>
                    Air Pay
                  </Text>
                )}
              </View>
            ),
          }}
        />
      </Tab.Navigator>
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
  screen: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 16,
    width: 70,
    height: 70,
  },
});
