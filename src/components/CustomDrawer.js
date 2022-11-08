import {View, Text, Image, TouchableOpacity, Switch} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Column, HeadLine, Row} from './StyledComponents';
import {Paragraph} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {removeCurrentUser} from '../utils/Redux/store/UserSlice';
import {SignOut} from '../utils/FireBase/firebase.config';
import {toggler} from '../utils/Redux/store/LangSlice';

import DarkMode, {ThemeToggler} from '../utils/Redux/store/DarkMode';

const CustomDrawer = props => {
  const {user} = useSelector(state => state);
  const {langArabic} = useSelector(state => state.lang);
  console.log(user, 'user');
  const dispatch = useDispatch();
  const {darkmode} = useSelector(state => state.theme);

  const LogOut = () => {
    SignOut();
    dispatch(removeCurrentUser());

    props.navigation.navigate('signin');
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Row
        style={{
          justifyContent: 'space-between',
          padding: 20,
          marginTop: 10,
        }}
        arabic={langArabic}>
        {darkmode ? (
          <Image source={require('../assets/fullogod.png')} />
        ) : (
          <Image source={require('../assets/fullogo.png')} />
        )}
        <TouchableOpacity
          onPress={() => {
            dispatch(toggler());
          }}>
          {langArabic ? (
            <Image source={require('../assets/en.png')} />
          ) : (
            <Image source={require('../assets/ar.png')} />
          )}
        </TouchableOpacity>
      </Row>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <Column
        style={{
          justifyContent: 'space-around',
          flex: 0.5,
        }}>
        <Row
          style={{
            alignSelf: 'center',
            width: 270,
            padding: 2,
            justifyContent: 'space-between',
          }}
          arabic={langArabic}>
          <Row
            style={{justifyContent: 'space-between', width: 107}}
            arabic={langArabic}>
            <Image
              source={
                darkmode
                  ? require('../assets/darkmoded.png')
                  : require('../assets/darkmode.png')
              }
            />
            <Paragraph
              style={{fontWeight: 'bold', color: darkmode ? 'white' : 'black'}}>
              {langArabic ? 'الوضع المظلم' : 'DarkMode'}
            </Paragraph>
          </Row>
          <Switch
            trackColor={{false: '#FFFFFF', true: '#FFFFFF'}}
            thumbColor={darkmode ? '#B3B3B3' : '#007236'}
            onValueChange={() => {
              dispatch(ThemeToggler());
            }}
            value={darkmode}
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              elevation: 3,
            }}
          />
        </Row>
        <View>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              width: 270,
              padding: 2,
              marginBottom: 5,
            }}
            onPress={LogOut}>
            <Row arabic={langArabic} style={{marginHorizontal: 10}}>
              <Image source={require('../assets/logout.png')} />

              <Paragraph
                style={{
                  color: '#EB001B',
                  fontSize: 18,
                  marginHorizontal: 10,
                }}>
                {langArabic ? ' تسجيل خروج' : 'Log Out'}
              </Paragraph>
            </Row>
          </TouchableOpacity>

          <Row
            style={[
              {flexDirection: langArabic ? 'row-reverse' : 'row'},
              {
                width: 290,
                borderRadius: 30,
                borderWidth: darkmode ? 1 : 0,
                marginBottom: 20,
                borderColor: darkmode ? 'white' : '',
                backgroundColor: darkmode ? '#1f4832' : 'white',

                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 3,
              },
            ]}>
            <Column>
              <Image
                style={{width: 40, height: 40, borderRadius: 12}}
                source={{
                  uri: `${user.photoURL}`,
                }}
              />
              {console.log(user.photoURL, 'user.pic')}
            </Column>
            <Column>
              <HeadLine
                style={{fontSize: 18, color: darkmode ? 'white' : 'black'}}>
                {user.displayName}
              </HeadLine>
              <Paragraph style={{color: '#BABABA'}}>{user.email}</Paragraph>
            </Column>
            <Column>
              <TouchableOpacity>
                <Image
                  style={{margin: 20}}
                  resizeMode="contain"
                  source={
                    darkmode
                      ? require('../assets/dotmenud.png')
                      : require('../assets/dotmenu.png')
                  }
                />
              </TouchableOpacity>
            </Column>
          </Row>
        </View>
      </Column>
    </View>
  );
};

export default CustomDrawer;
