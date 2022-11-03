import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {Column, HeadLine, Row} from './StyledComponents';
import CustomDrawer from './CustomDrawer';
import {TabNavigator} from '../infrastructure/app.navigator';
import {useDispatch, useSelector} from 'react-redux';

const Drawer = createDrawerNavigator();
const DrawerNav = ({navigation}) => {
  const {user} = useSelector(state => state);
  const {langArabic} = useSelector(state => state.lang);
  console.log(langArabic);
  console.log(user.pic);
  return (
    <>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        drawerPosition="right"
        drawerType="front"
        edgeWidth={100}
        hideStatusBar={false}
        screenOptions={{
          headerRight: () => (
            <Row style={styles.header}>
              <Row>
                <Image
                  source={{
                    uri: `${user.photoURL}`,
                  }}
                  style={styles.profilepic}
                />
                <Column style={{marginLeft: 10}}>
                  <Text style={{fontSize: 16}}>Good morning</Text>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    {user.displayName}
                  </Text>
                </Column>
              </Row>
              <TouchableOpacity style={styles.notification}>
                <Image source={require('../assets/noti.png')} />
              </TouchableOpacity>
            </Row>
          ),

          drawerItemStyle: {borderRadius: 13},
          headerShown: true,
          drawerLabelStyle: {
            marginLeft: -25,
          },
          headerStyle: {
            backgroundColor: 'transparent',
            height: 100,
            elevation: 0,
            shadowOpacity: 0,
          },
          swipeEnabled: true,
          gestureEnabled: true,
          drawerActiveBackgroundColor: '#007236',
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'black',

          drawerStyle: {
            backgroundColor: '#F1F3FB',
            width: 300,
            borderBottomEndRadius: 40,
            borderTopEndRadius: 40,
          },
        }}>
        <Drawer.Screen
          name="AccountSummary"
          component={TabNavigator}
          options={{
            headerTitle: '',
            title: 'Account Summary',
            drawerIcon: ({focused}) => (
              <Image
                source={require('../assets/acountsummery.png')}
                style={{
                  tintColor: focused ? 'white' : 'black',
                }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="OpenCertificatesDeposits"
          component={TabNavigator}
          options={{
            headerTitle: '',
            title: 'Open Certificates & Deposits',
            drawerIcon: ({focused}) => (
              <Image
                source={require('../assets/opencert.png')}
                style={{
                  tintColor: focused ? 'white' : 'black',
                }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Payement Services"
          component={TabNavigator}
          options={{
            headerTitle: '',
            title: 'Payement Services',
            drawerIcon: ({focused}) => (
              <Image
                source={require('../assets/paymentserv.png')}
                style={{
                  tintColor: focused ? 'white' : 'black',
                }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Cards Services"
          component={TabNavigator}
          options={{
            headerTitle: '',
            title: 'Cards Services',
            drawerIcon: ({focused}) => (
              <Image
                source={require('../assets/cardserv.png')}
                style={{
                  tintColor: focused ? 'white' : 'black',
                }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Hard Token"
          component={TabNavigator}
          options={{
            headerTitle: '',
            title: 'Hard Token',
            drawerIcon: ({focused}) => (
              <Image
                source={require('../assets/hardtoken.png')}
                style={{
                  tintColor: focused ? 'white' : 'black',
                }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Offers"
          component={TabNavigator}
          options={{
            headerTitle: '',
            title: 'Offers',
            drawerIcon: ({focused}) => (
              <Image
                source={require('../assets/offers.png')}
                style={{
                  tintColor: focused ? 'white' : 'black',
                }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Customer Services"
          component={TabNavigator}
          options={{
            headerTitle: '',
            title: 'Customer Services',
            drawerIcon: ({focused}) => (
              <Image
                source={require('../assets/costumerserv.png')}
                style={{
                  tintColor: focused ? 'white' : 'black',
                }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Calculators"
          component={TabNavigator}
          options={{
            headerTitle: '',
            title: 'Calculators',
            drawerIcon: ({focused}) => (
              <Image
                source={require('../assets/calculator.png')}
                style={{
                  tintColor: focused ? 'white' : 'black',
                }}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};
const styles = StyleSheet.create({
  notification: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    marginEnd: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilepic: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },

  header: {
    marginStart: 50,
    width: 345,
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
});
export default DrawerNav;
