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
import AirPay from '../pages/AirPay/AirPay';
import Atms from '../pages/Atms';
import Benfits from '../pages/Benfits';
import NavBar from '../components/DrawerNav';
import {useSelector} from 'react-redux';
import {dark, light} from '../utils/theme/colors';
import Dummy from '../pages/Dummy';
import {airpay, atms, beneficiaries, home, transfer} from '../utils/images';
import {AirPayStack} from '../pages/AirPayStack/AirPayStack';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const {langArabic} = useSelector(state => state.lang);
  const {darkmode} = useSelector(state => state.theme);

  return (
    <>
      <Tab.Navigator
        headerMode="none"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 85,

            backgroundColor: darkmode ? dark.tabnavbg : 'white',
          },
        }}>
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={[
                  styles.screen,
                  {
                    borderRadius: 16,
                    backgroundColor:
                      focused && darkmode
                        ? '#007236'
                        : !focused && darkmode
                        ? '#374049'
                        : !focused && !darkmode
                        ? light.tabnavbg
                        : '#007236',
                  },
                ]}>
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
                  {langArabic ? 'الرئيسية' : 'Home'}
                </Text>
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
                  {
                    borderRadius: 16,
                    backgroundColor:
                      focused && darkmode
                        ? '#007236'
                        : !focused && darkmode
                        ? '#374049'
                        : !focused && !darkmode
                        ? light.tabnavbg
                        : '#007236',
                  },
                ]}>
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
                  {langArabic ? 'الصراف الالي' : 'Atms'}
                </Text>
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
                  {
                    borderRadius: 16,
                    backgroundColor:
                      focused && darkmode
                        ? '#007236'
                        : !focused && darkmode
                        ? '#374049'
                        : !focused && !darkmode
                        ? light.tabnavbg
                        : '#007236',
                  },
                ]}>
                <Image
                  source={beneficiaries}
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
          headerShown={false}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={[
                  styles.screen,
                  {
                    borderRadius: 16,
                    backgroundColor:
                      focused && darkmode
                        ? '#007236'
                        : !focused && darkmode
                        ? '#374049'
                        : !focused && !darkmode
                        ? light.tabnavbg
                        : '#007236',
                  },
                ]}>
                <Image
                  source={transfer}
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
          name="AirPayStack"
          component={AirPayStack}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={[
                  styles.screen,
                  {
                    borderRadius: 16,
                    backgroundColor:
                      focused && darkmode
                        ? '#007236'
                        : !focused && darkmode
                        ? '#374049'
                        : !focused && !darkmode
                        ? light.tabnavbg
                        : '#007236',
                  },
                ]}>
                <Image
                  source={airpay}
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
