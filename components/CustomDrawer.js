import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Column, HeadLine, Row} from './StyledComponents';
import {Paragraph} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {removeCurrentUser} from '../store/UserSlice';
import {SignOut} from '../utils/firebase.config';
import {toggler} from '../store/LangSlice';

const CustomDrawer = props => {
  const {user} = useSelector(state => state);
  const {langArabic} = useSelector(state => state.lang);
  console.log(user, 'user');
  const dispatch = useDispatch();

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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
          marginTop: 10,
        }}>
        <Image source={require('../assets/fullogo.png')} />
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
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <Column style={{justifyContent: 'center'}}>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            width: 270,
            padding: 2,
            marginBottom: 5,
          }}
          onPress={LogOut}>
          <Image source={require('../assets/logout.png')} />
          <Paragraph style={{color: '#EB001B', fontSize: 18, marginLeft: 10}}>
            Log Out
          </Paragraph>
        </TouchableOpacity>

        <Row
          style={{
            width: 290,
            borderRadius: 30,
            marginBottom: 20,
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
          }}>
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
            <HeadLine style={{fontSize: 18, color: 'black'}}>
              {user.displayName}
            </HeadLine>
            <Paragraph style={{color: '#BABABA'}}>{user.email}</Paragraph>
          </Column>
          <Column>
            <TouchableOpacity>
              <Image
                style={{margin: 20}}
                resizeMode="contain"
                source={require('../assets/dotmenu.png')}
              />
            </TouchableOpacity>
          </Column>
        </Row>
      </Column>
    </View>
  );
};

export default CustomDrawer;
