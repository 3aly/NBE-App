import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {Column, HeadLine, Row} from './StyledComponents';
import CustomDrawer from './CustomDrawer';
import {TabNavigator} from '../components/app.navigator';
import {useDispatch, useSelector} from 'react-redux';
import {dark, light} from '../utils/theme/colors';
import {
  acountsummery,
  acountsummeryd,
  calculator,
  cardserv,
  costumerserv,
  drawericon,
  drawericond,
  hardtoken,
  noti,
  offers,
  opencert,
  paymentserv,
} from '../utils/images';

const Drawer = createDrawerNavigator();
const DrawerNav = ({navigation}) => {
  const {user} = useSelector(state => state);
  const {langArabic} = useSelector(state => state.lang);
  const {darkmode} = useSelector(state => state.theme);

  console.log(langArabic);
  console.log(user.pic);
  return (
    <>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        drawerType="front"
        edgeWidth={100}
        hideStatusBar={false}
        screenOptions={{
          drawerPosition: langArabic ? 'right' : 'left',
          headerLeft: () => (
            <TouchableOpacity
              style={{margin: 14}}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Image source={darkmode ? drawericond : drawericon} />
            </TouchableOpacity>
          ),
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
                  <Text
                    style={{fontSize: 16, color: darkmode ? 'white' : 'black'}}>
                    {langArabic ? 'صباح الخير' : 'Good morning'}
                  </Text>

                  <Text
                    style={{fontSize: 16, color: darkmode ? 'white' : 'black'}}>
                    {user.displayName}
                  </Text>
                </Column>
              </Row>
              <TouchableOpacity style={styles.notification}>
                <Image source={noti} />
              </TouchableOpacity>
            </Row>
          ),

          drawerItemStyle: {borderRadius: 13},
          headerShown: true,
          drawerLabelStyle: {
            marginLeft: -25,
          },
          headerStyle: {
            backgroundColor: darkmode ? dark.bg : light.bg,
            height: 100,
            elevation: 0,
            shadowOpacity: 0,
          },
          drawerActiveBackgroundColor: darkmode
            ? light.sbitembg
            : dark.sbitembg,
          drawerActiveTintColor: darkmode
            ? dark.sidebartextcolor
            : light.sidebartextcolor,
          drawerInactiveTintColor: darkmode ? 'white' : 'black',

          drawerStyle: {
            backgroundColor: darkmode ? dark.sidebar : light.sidebar,

            width: 300,
            borderBottomStartRadius: langArabic ? 40 : 0,
            borderTopStartRadius: langArabic ? 40 : 0,
            borderBottomEndRadius: langArabic ? 0 : 40,
            borderTopEndRadius: langArabic ? 0 : 40,
          },
        }}>
        <Drawer.Screen
          name={langArabic ? 'ملخص الحساب' : 'Account Summary'}
          component={TabNavigator}
          options={{
            headerTitle: '',
            drawerIcon: ({focused}) => (
              <Image
                source={darkmode ? acountsummeryd : acountsummery}
                style={[
                  langArabic
                    ? {
                        alignSelf: 'center',
                        position: 'absolute',
                        right: 8,
                      }
                    : {},
                  {
                    tintColor:
                      focused && darkmode
                        ? '#007236'
                        : focused && !darkmode
                        ? 'white'
                        : !focused && darkmode
                        ? 'white'
                        : 'black',
                  },
                ]}
              />
            ),
          }}
        />
        <Drawer.Screen
          name={
            langArabic ? 'الشهادات و الودائع' : 'Open Certificates Deposits'
          }
          component={TabNavigator}
          options={{
            headerTitle: '',
            drawerIcon: ({focused}) => (
              <Image
                source={opencert}
                style={[
                  langArabic
                    ? {
                        alignSelf: 'center',
                        position: 'absolute',
                        right: 8,
                      }
                    : {},
                  {
                    tintColor:
                      focused && darkmode
                        ? '#007236'
                        : focused && !darkmode
                        ? 'white'
                        : !focused && darkmode
                        ? 'white'
                        : 'black',
                  },
                ]}
              />
            ),
          }}
        />
        <Drawer.Screen
          name={langArabic ? 'خدمات الدفع' : 'Payement Services'}
          component={TabNavigator}
          options={{
            headerTitle: '',
            drawerIcon: ({focused}) => (
              <Image
                source={paymentserv}
                style={[
                  langArabic
                    ? {
                        alignSelf: 'center',
                        position: 'absolute',
                        right: 8,
                      }
                    : {},
                  {
                    tintColor:
                      focused && darkmode
                        ? '#007236'
                        : focused && !darkmode
                        ? 'white'
                        : !focused && darkmode
                        ? 'white'
                        : 'black',
                  },
                ]}
              />
            ),
          }}
        />
        <Drawer.Screen
          name={langArabic ? 'خدمات الكروت' : 'Cards Services'}
          component={TabNavigator}
          options={{
            headerTitle: '',
            drawerIcon: ({focused}) => (
              <Image
                source={cardserv}
                style={[
                  langArabic
                    ? {
                        alignSelf: 'center',
                        position: 'absolute',
                        right: 8,
                      }
                    : {},
                  {
                    tintColor:
                      focused && darkmode
                        ? '#007236'
                        : focused && !darkmode
                        ? 'white'
                        : !focused && darkmode
                        ? 'white'
                        : 'black',
                  },
                ]}
              />
            ),
          }}
        />
        <Drawer.Screen
          name={langArabic ? 'جهاز رموز الأمان' : 'Hard Token'}
          component={TabNavigator}
          options={{
            headerTitle: '',
            drawerIcon: ({focused}) => (
              <Image
                source={hardtoken}
                style={[
                  langArabic
                    ? {
                        alignSelf: 'center',
                        position: 'absolute',
                        right: 8,
                      }
                    : {},
                  {
                    tintColor:
                      focused && darkmode
                        ? '#007236'
                        : focused && !darkmode
                        ? 'white'
                        : !focused && darkmode
                        ? 'white'
                        : 'black',
                  },
                ]}
              />
            ),
          }}
        />
        <Drawer.Screen
          name={langArabic ? 'العروض' : 'Offers'}
          component={TabNavigator}
          options={{
            headerTitle: '',
            drawerIcon: ({focused}) => (
              <Image
                source={offers}
                style={[
                  langArabic
                    ? {
                        alignSelf: 'center',
                        position: 'absolute',
                        right: 8,
                      }
                    : {},
                  {
                    tintColor:
                      focused && darkmode
                        ? '#007236'
                        : focused && !darkmode
                        ? 'white'
                        : !focused && darkmode
                        ? 'white'
                        : 'black',
                  },
                ]}
              />
            ),
          }}
        />
        <Drawer.Screen
          name={langArabic ? 'خدمات العملاء' : 'Customer Services'}
          component={TabNavigator}
          options={{
            headerTitle: '',
            drawerIcon: ({focused}) => (
              <Image
                source={costumerserv}
                style={[
                  langArabic
                    ? {
                        alignSelf: 'center',
                        position: 'absolute',
                        right: 8,
                      }
                    : {},
                  {
                    tintColor:
                      focused && darkmode
                        ? '#007236'
                        : focused && !darkmode
                        ? 'white'
                        : !focused && darkmode
                        ? 'white'
                        : 'black',
                  },
                ]}
              />
            ),
          }}
        />
        <Drawer.Screen
          name={langArabic ? 'حاسبة القروض' : 'Calculators'}
          component={TabNavigator}
          options={{
            headerTitle: '',
            drawerIcon: ({focused}) => (
              <Image
                source={calculator}
                style={[
                  langArabic
                    ? {
                        alignSelf: 'center',
                        position: 'absolute',
                        right: 8,
                      }
                    : {},
                  {
                    tintColor:
                      focused && darkmode
                        ? '#007236'
                        : focused && !darkmode
                        ? 'white'
                        : !focused && darkmode
                        ? 'white'
                        : 'black',
                  },
                ]}
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
